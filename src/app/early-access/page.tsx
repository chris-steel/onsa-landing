'use client';

import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';

function EarlyAccessForm() {
  const searchParams = useSearchParams();
  const emailFromQuery = searchParams.get('email') ?? '';

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [phone, setPhone] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/early-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: emailFromQuery,
          firstName,
          lastName,
          company: company || undefined,
          jobTitle: jobTitle || undefined,
          phone: phone || undefined,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? 'Something went wrong. Please try again.');
      }

      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="text-center">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ backgroundColor: 'var(--blue-3)' }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: 'var(--blue-9)' }}
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h1
          className="text-2xl font-semibold tracking-tight mb-3"
          style={{ color: 'var(--gray-12)' }}
        >
          You&apos;re on the list.
        </h1>
        <p className="text-base" style={{ color: 'var(--gray-11)' }}>
          We&apos;ll be in touch at{' '}
          <span className="font-medium" style={{ color: 'var(--gray-12)' }}>
            {emailFromQuery}
          </span>{' '}
          when your account is ready.
        </p>
        <a
          href="/"
          className="mt-8 inline-block text-sm font-medium"
          style={{ color: 'var(--blue-9)' }}
        >
          &larr; Back to home
        </a>
      </div>
    );
  }

  return (
    <>
      <div className="mb-8">
        <a
          href="/"
          className="text-sm font-medium inline-flex items-center gap-1.5 mb-8 block"
          style={{ color: 'var(--gray-11)' }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Back
        </a>
        <h1
          className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2"
          style={{ color: 'var(--gray-12)' }}
        >
          Tell us a bit about yourself
        </h1>
        <p className="text-base" style={{ color: 'var(--gray-11)' }}>
          We&apos;ll use this to get your account set up.
        </p>
        {emailFromQuery && (
          <p className="mt-2 text-sm" style={{ color: 'var(--gray-9)' }}>
            Email:{' '}
            <span className="font-medium" style={{ color: 'var(--gray-11)' }}>
              {emailFromQuery}
            </span>
          </p>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--gray-12)' }}>
              First name <span style={{ color: 'var(--blue-9)' }}>*</span>
            </label>
            <input
              type="text"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              placeholder="Jane"
              required
              className="w-full px-4 py-2.5 rounded-lg text-sm outline-none transition-shadow"
              style={{
                border: '1px solid var(--gray-6)',
                backgroundColor: 'var(--color-background)',
                color: 'var(--gray-12)',
              }}
              onFocus={e => (e.currentTarget.style.boxShadow = '0 0 0 3px var(--blue-5)')}
              onBlur={e => (e.currentTarget.style.boxShadow = 'none')}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--gray-12)' }}>
              Last name <span style={{ color: 'var(--blue-9)' }}>*</span>
            </label>
            <input
              type="text"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              placeholder="Smith"
              required
              className="w-full px-4 py-2.5 rounded-lg text-sm outline-none transition-shadow"
              style={{
                border: '1px solid var(--gray-6)',
                backgroundColor: 'var(--color-background)',
                color: 'var(--gray-12)',
              }}
              onFocus={e => (e.currentTarget.style.boxShadow = '0 0 0 3px var(--blue-5)')}
              onBlur={e => (e.currentTarget.style.boxShadow = 'none')}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--gray-12)' }}>
            Company{' '}
            <span className="text-xs font-normal" style={{ color: 'var(--gray-9)' }}>
              (optional)
            </span>
          </label>
          <input
            type="text"
            value={company}
            onChange={e => setCompany(e.target.value)}
            placeholder="Acme Recruitment"
            className="w-full px-4 py-2.5 rounded-lg text-sm outline-none transition-shadow"
            style={{
              border: '1px solid var(--gray-6)',
              backgroundColor: 'var(--color-background)',
              color: 'var(--gray-12)',
            }}
            onFocus={e => (e.currentTarget.style.boxShadow = '0 0 0 3px var(--blue-5)')}
            onBlur={e => (e.currentTarget.style.boxShadow = 'none')}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--gray-12)' }}>
            Job title{' '}
            <span className="text-xs font-normal" style={{ color: 'var(--gray-9)' }}>
              (optional)
            </span>
          </label>
          <input
            type="text"
            value={jobTitle}
            onChange={e => setJobTitle(e.target.value)}
            placeholder="Senior Recruiter"
            className="w-full px-4 py-2.5 rounded-lg text-sm outline-none transition-shadow"
            style={{
              border: '1px solid var(--gray-6)',
              backgroundColor: 'var(--color-background)',
              color: 'var(--gray-12)',
            }}
            onFocus={e => (e.currentTarget.style.boxShadow = '0 0 0 3px var(--blue-5)')}
            onBlur={e => (e.currentTarget.style.boxShadow = 'none')}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--gray-12)' }}>
            Phone{' '}
            <span className="text-xs font-normal" style={{ color: 'var(--gray-9)' }}>
              (optional)
            </span>
          </label>
          <input
            type="tel"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder="+44 7700 900000"
            className="w-full px-4 py-2.5 rounded-lg text-sm outline-none transition-shadow"
            style={{
              border: '1px solid var(--gray-6)',
              backgroundColor: 'var(--color-background)',
              color: 'var(--gray-12)',
            }}
            onFocus={e => (e.currentTarget.style.boxShadow = '0 0 0 3px var(--blue-5)')}
            onBlur={e => (e.currentTarget.style.boxShadow = 'none')}
          />
        </div>

        {error && (
          <p className="text-sm" style={{ color: '#b91c1c' }}>
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="w-full px-6 py-3 rounded-lg text-sm font-medium transition-colors disabled:opacity-60"
          style={{ backgroundColor: 'var(--blue-9)', color: 'var(--blue-contrast)' }}
          onMouseEnter={e => {
            if (!submitting) e.currentTarget.style.backgroundColor = 'var(--blue-10)';
          }}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--blue-9)')}
        >
          {submitting ? 'Submitting…' : 'Request early access'}
        </button>

        <p className="text-xs text-center" style={{ color: 'var(--gray-9)' }}>
          No spam. We&apos;ll reach out when your account is ready.
        </p>
      </form>
    </>
  );
}

export default function EarlyAccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md">
        <div className="mb-8">
          <span className="text-lg font-semibold tracking-tight" style={{ color: 'var(--gray-12)' }}>
            onsa
          </span>
        </div>
        <Suspense fallback={<div style={{ color: 'var(--gray-9)' }}>Loading…</div>}>
          <EarlyAccessForm />
        </Suspense>
      </div>
    </div>
  );
}
