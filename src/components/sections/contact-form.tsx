'use client';

import { FormEvent, useState } from 'react';

type Status = 'idle' | 'sending' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    setStatus('sending');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message')
        })
      });

      if (!response.ok) throw new Error('Request failed');
      setStatus('success');
      event.currentTarget.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={onSubmit} className="card-base space-y-4">
      <input name="name" required placeholder="Your name" className="h-11 w-full rounded-xl border border-border bg-transparent px-3" />
      <input name="email" required type="email" placeholder="Your email" className="h-11 w-full rounded-xl border border-border bg-transparent px-3" />
      <textarea
        name="message"
        required
        rows={5}
        placeholder="Tell me about your project"
        className="w-full rounded-xl border border-border bg-transparent px-3 py-2"
      />
      <button disabled={status === 'sending'} className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white disabled:opacity-70">
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
      {status === 'success' ? <p className="text-sm text-emerald-600">Message sent successfully.</p> : null}
      {status === 'error' ? <p className="text-sm text-red-600">Unable to send right now. Please retry.</p> : null}
    </form>
  );
}
