'use client';

import { useState } from 'react';

export default function Thanks() {
  const [copied, setCopied] = useState(false);

  function copyLink() {
    navigator.clipboard.writeText('https://onsa.app').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: 'var(--cream)', color: 'var(--lp-dark)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <style>{`
        .lp-thanks-wrap { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 64px 24px; text-align: center; gap: 0; }
        .lp-thanks-check { width: 52px; height: 52px; border-radius: 50%; background: #fff3ee; border: 2px solid var(--lp-border); display: flex; align-items: center; justify-content: center; margin-bottom: 28px; }
        .lp-thanks-h1 { font-size: 52px; font-weight: 800; letter-spacing: -2.5px; line-height: 1; color: var(--lp-dark); margin: 0 0 16px; }
        .lp-thanks-sub { font-size: 18px; line-height: 1.6; color: var(--lp-muted); max-width: 440px; margin: 0 auto 52px; }
        .lp-thanks-divider { width: 100%; max-width: 440px; border: none; border-top: 1px solid var(--lp-border); margin: 0 auto 40px; }
        .lp-thanks-share-label { font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: var(--lp-muted-lt); margin: 0 0 20px; }
        .lp-thanks-share-label strong { color: var(--lp-dark); }
        .lp-thanks-btns { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; margin-bottom: 16px; }
        .lp-thanks-btn { display: inline-flex; align-items: center; gap: 7px; padding: 12px 20px; border-radius: 8px; border: 2px solid var(--lp-border); background: transparent; font-size: 14px; font-weight: 600; font-family: inherit; color: var(--lp-dark-mid); cursor: pointer; text-decoration: none; line-height: 1; transition: border-color 0.15s, color 0.15s; }
        .lp-thanks-btn:hover { border-color: var(--lp-dark); color: var(--lp-dark); }
        .lp-thanks-btn-orange { background: var(--lp-orange); border-color: transparent; color: #fff; }
        .lp-thanks-btn-orange:hover { background: var(--lp-orange-hv); border-color: transparent; color: #fff; }
        .lp-thanks-or { font-size: 13px; color: var(--lp-muted-lt); margin: 0 0 6px; }
        .lp-thanks-url { font-size: 14px; color: var(--lp-muted); }
        .lp-thanks-url strong { color: var(--lp-dark); font-weight: 600; }
        .lp-thanks-back { display: inline-block; margin-top: 48px; font-size: 14px; color: var(--lp-muted-lt); text-decoration: none; }
        .lp-thanks-back:hover { color: var(--lp-muted); }
        @media (max-width: 480px) {
          .lp-thanks-h1 { font-size: 36px; letter-spacing: -1.5px; }
          .lp-thanks-sub { font-size: 16px; }
        }
      `}</style>

      <div className="lp-thanks-wrap">
        <div className="lp-thanks-check">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M5 11.5L9 15.5L17 7" stroke="var(--lp-orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <h1 className="lp-thanks-h1">You&apos;re on the list.</h1>
        <p className="lp-thanks-sub">
          We&apos;ll let you know when Onsa is ready — it&apos;s the simplest way to schedule interviews without the back-and-forth.
        </p>

        <hr className="lp-thanks-divider" />

        <p className="lp-thanks-share-label">Know a recruiter who&apos;d find this useful?</p>

        <div className="lp-thanks-btns">
          <button className="lp-thanks-btn" onClick={copyLink}>
            {copied ? (
              <>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7.5L5.5 11L12 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Copied!
              </>
            ) : (
              <>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="4" y="1" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5" /><path d="M1 5v7a1 1 0 001 1h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                Copy link
              </>
            )}
          </button>
          <a
            className="lp-thanks-btn lp-thanks-btn-orange"
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fonsa.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><path d="M1.5 4.5h2.5v8H1.5zM2.75.875a1.375 1.375 0 110 2.75 1.375 1.375 0 010-2.75zM5.5 4.5H8v1.1c.4-.75 1.3-1.35 2.5-1.35C12.2 4.25 13.5 5.4 13.5 7.9v4.6H11V8.25c0-1-.35-1.65-1.25-1.65-.9 0-1.25.65-1.25 1.65v4.25H5.5v-8z" /></svg>
            Share on LinkedIn
          </a>
        </div>

        <p className="lp-thanks-or">or send them to</p>
        <p className="lp-thanks-url"><strong>onsa.app</strong></p>

        <a href="/" className="lp-thanks-back">← Back to onsa.app</a>
      </div>
    </div>
  );
}
