'use client';

import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import type { Locale } from '@/i18n/config';
import { getTranslations } from '@/i18n/translations';
import { contactInfo } from '@/lib/utils';

type Props = { locale: Locale };
type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm({ locale }: Props) {
  const t = getTranslations(locale);
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const fields = {
      name: String(data.get('name') || '').trim(),
      email: String(data.get('email') || '').trim(),
      phone: String(data.get('phone') || '').trim(),
      project: String(data.get('project') || '').trim(),
      subject: String(data.get('subject') || '').trim(),
      message: String(data.get('message') || '').trim(),
    };

    const newErrors: Record<string, string> = {};
    if (!fields.name) newErrors.name = t.contact.form.required;
    if (!fields.email) newErrors.email = t.contact.form.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
      newErrors.email = t.contact.form.emailInvalid;
    if (!fields.message) newErrors.message = t.contact.form.required;

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setStatus('submitting');

    // Since there's no backend configured yet, fall back to mailto so messages
    // still reach the team while keeping the UX consistent.
    try {
      const subject = encodeURIComponent(
        fields.subject || `${t.meta.siteName} — ${fields.project || 'General inquiry'}`
      );
      const body = encodeURIComponent(
        [
          `Name: ${fields.name}`,
          `Email: ${fields.email}`,
          `Phone: ${fields.phone}`,
          `Project: ${fields.project}`,
          '',
          fields.message,
        ].join('\n')
      );
      if (typeof window !== 'undefined') {
        window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
      }
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  const inputBase =
    'w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-800 placeholder:text-ink-300 focus:border-brand focus:ring-2 focus:ring-brand/20 focus:outline-none transition';

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <h3 className="font-display text-xl font-bold">{t.contact.form.title}</h3>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-ink-500">
            {t.contact.form.name}
          </label>
          <input id="name" name="name" type="text" autoComplete="name" className={`mt-1.5 ${inputBase}`} />
          {errors.name && (
            <p className="mt-1 text-xs text-red-600">{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-ink-500">
            {t.contact.form.email}
          </label>
          <input id="email" name="email" type="email" autoComplete="email" dir="ltr" className={`mt-1.5 ${inputBase}`} />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-ink-500">
            {t.contact.form.phone}
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" dir="ltr" className={`mt-1.5 ${inputBase}`} />
        </div>
        <div>
          <label htmlFor="project" className="block text-xs font-semibold uppercase tracking-wider text-ink-500">
            {t.contact.form.project}
          </label>
          <select id="project" name="project" className={`mt-1.5 ${inputBase}`} defaultValue="">
            <option value="" disabled>{t.contact.form.project}</option>
            {t.contact.form.projectOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-ink-500">
          {t.contact.form.subject}
        </label>
        <input id="subject" name="subject" type="text" className={`mt-1.5 ${inputBase}`} />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-ink-500">
          {t.contact.form.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={`mt-1.5 ${inputBase} resize-none`}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-600">{errors.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn-primary disabled:opacity-70"
        >
          {status === 'submitting' ? t.contact.form.submitting : t.contact.form.submit}
          <Send className="h-4 w-4" />
        </button>
        {status === 'success' && (
          <p className="inline-flex items-center gap-2 text-sm text-green-700">
            <CheckCircle2 className="h-4 w-4" />
            {t.contact.form.success}
          </p>
        )}
        {status === 'error' && (
          <p className="inline-flex items-center gap-2 text-sm text-red-600">
            <AlertCircle className="h-4 w-4" />
            {t.contact.form.error}
          </p>
        )}
      </div>
    </form>
  );
}
