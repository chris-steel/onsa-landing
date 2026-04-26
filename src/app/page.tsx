'use client';

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Timer, TrendingDown, CheckCheck, Users } from 'lucide-react';

export default function Home() {
  const emailHeroRef = useRef<HTMLInputElement>(null);
  const emailFooterRef = useRef<HTMLInputElement>(null);
  const [heroEmail, setHeroEmail] = useState('');
  const [ctaEmail, setCtaEmail] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  function scrollToAccess() {
    setMenuOpen(false);
    const el = document.getElementById('early-access');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => emailFooterRef.current?.focus(), 420);
    }
  }

  function submitEmail(email: string) {
    if (!email.trim()) return;
    router.push(`/early-access?email=${encodeURIComponent(email.trim())}`);
  }

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: 'var(--cream)', color: 'var(--lp-dark)' }}>
      <style>{`
        /* ── Nav ── */
        .lp-nav-inner { max-width: 1200px; margin: 0 auto; padding: 0 48px; height: 64px; display: flex; align-items: center; justify-content: space-between; }
        .lp-nav-logo  { display: flex; align-items: center; gap: 8px; font-size: 20px; font-weight: 800; letter-spacing: -0.5px; color: var(--lp-dark); text-decoration: none; }
        .lp-nav-links { display: flex; align-items: center; gap: 12px; }
        .lp-nav-login { display: inline-flex; align-items: center; padding: 14px 22px; border-radius: 8px; border: 2px solid var(--lp-border); font-size: 15px; font-weight: 600; color: var(--lp-dark-mid); background: transparent; cursor: pointer; text-decoration: none; line-height: 1; }
        .lp-nav-login:hover { border-color: var(--lp-dark); color: var(--lp-dark); }
        .lp-nav-hamburger { display: none; background: none; border: none; cursor: pointer; padding: 8px; color: var(--lp-dark); }
        .lp-nav-mobile { display: none; position: absolute; top: 64px; left: 0; right: 0; background: var(--cream); border-bottom: 1px solid var(--lp-border); padding: 12px 20px; flex-direction: column; gap: 10px; z-index: 49; }
        .lp-nav-mobile.open { display: flex; }
        .lp-nav-mobile-btn { display: flex; align-items: center; justify-content: center; padding: 14px 20px; border-radius: 8px; font-size: 15px; font-weight: 600; text-align: center; text-decoration: none; cursor: pointer; }

        /* ── Shared ── */
        .lp-section-label { display: inline-flex; align-items: center; gap: 6px; font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: var(--lp-orange); }
        .lp-section-header { display: flex; flex-direction: column; gap: 12px; align-items: center; text-align: center; }
        .lp-section-header h2 { font-size: 48px; font-weight: 800; letter-spacing: -2px; line-height: 1; color: var(--lp-dark); }
        .lp-section-header p { font-size: 18px; color: var(--lp-muted); max-width: 480px; }
        .lp-btn-orange { display: inline-flex; align-items: center; padding: 14px 22px; border-radius: 8px; border: 2px solid transparent; background-color: var(--lp-orange); color: #fff; font-size: 15px; font-weight: 600; font-family: inherit; cursor: pointer; white-space: nowrap; line-height: 1; }
        .lp-btn-orange:hover { background-color: var(--lp-orange-hv); border-color: transparent; }

        /* ── Hero ── */
        .lp-hero { max-width: 1200px; margin: 0 auto; padding: 88px 48px 64px; display: flex; gap: 64px; align-items: center; }
        .lp-hero-left { flex: 0 0 540px; display: flex; flex-direction: column; gap: 16px; }
        .lp-hero h1 { font-size: 56px; font-weight: 800; letter-spacing: -2.5px; line-height: 1; color: var(--lp-dark); }
        .lp-hero-sub { font-size: 18px; line-height: 1.6; color: var(--lp-muted); max-width: 460px; }
        .lp-hero-form { display: flex; gap: 8px; align-items: stretch; padding-top: 8px; max-width: 440px; }
        .lp-hero-form input { flex: 1; min-width: 0; padding: 14px 16px; border-radius: 8px; border: 2px solid var(--lp-border); background: #fff; font-size: 15px; font-family: inherit; color: var(--lp-dark); outline: none; }
        .lp-hero-form input:focus { border-color: var(--lp-orange); }
        .lp-hero-right { flex: 1; }

        /* ── Email mockup ── */
        .lp-email-card { background: #fff; border: 2px solid var(--lp-border); border-radius: 16px; padding: 28px; display: flex; flex-direction: column; gap: 10px; box-shadow: 0 4px 24px rgba(0,0,0,0.06); }
        .lp-email-slots { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; padding-top: 8px; }
        .lp-slot { padding: 12px; border-radius: 8px; border: 2px solid var(--lp-border); background: var(--cream); text-align: center; font-size: 13px; font-weight: 500; color: var(--lp-dark); }
        .lp-slot-selected { border-color: var(--lp-orange); background: #fff3ee; color: var(--lp-orange); }

        /* ── Stats ── */
        .lp-stats { background: var(--cream-dark); width: 100%; }
        .lp-stats-inner { max-width: 1200px; margin: 0 auto; padding: 64px 48px; display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .lp-stat-card { background: var(--cream); border: 2px solid var(--lp-border); border-radius: 16px; padding: 40px; display: flex; flex-direction: column; gap: 12px; }
        .lp-stat-num { font-size: 88px; font-weight: 800; letter-spacing: -4px; line-height: 1; color: var(--lp-dark); }

        /* ── How it works ── */
        .lp-hiw { max-width: 1200px; margin: 0 auto; padding: 88px 48px; display: flex; flex-direction: column; gap: 56px; }
        .lp-hiw-grid { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 20px; }
        .lp-step-card { background: var(--cream-dark); border: 2px solid var(--lp-border); border-radius: 16px; padding: 32px; display: flex; flex-direction: column; gap: 12px; }
        .lp-step-num { font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: var(--lp-orange); }
        .lp-step-card h3 { font-size: 26px; font-weight: 700; letter-spacing: -0.5px; line-height: 1; color: var(--lp-dark); }
        .lp-step-card p { font-size: 16px; color: var(--lp-muted); line-height: 1.6; }

        /* ── Dark callout ── */
        .lp-dark-callout { background: var(--lp-dark); width: 100%; padding: 96px 48px; display: flex; flex-direction: column; align-items: center; gap: 16px; text-align: center; }
        .lp-dark-callout .lp-metric { font-size: 120px; font-weight: 800; letter-spacing: -6px; line-height: 1; color: var(--cream); }
        .lp-dark-callout .lp-metric-sub { font-size: 22px; font-weight: 500; color: rgba(255,253,252,0.85); max-width: 520px; line-height: 1.5; }
        .lp-dark-callout .lp-metric-attr { font-size: 12px; color: rgba(255,253,252,0.4); }

        /* ── Benefits ── */
        .lp-benefits { background: var(--cream-dark); width: 100%; }
        .lp-benefits-inner { max-width: 1200px; margin: 0 auto; padding: 88px 48px; display: flex; flex-direction: column; gap: 56px; }
        .lp-benefits-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .lp-benefit-card { background: var(--cream); border: 2px solid var(--lp-border); border-radius: 16px; padding: 32px; display: flex; flex-direction: column; gap: 14px; }
        .lp-benefit-icon { width: 44px; height: 44px; border-radius: 10px; border: 2px solid var(--lp-border); background: var(--cream-dark); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .lp-benefit-card h3 { font-size: 28px; font-weight: 700; letter-spacing: -0.8px; line-height: 1; color: var(--lp-dark); }
        .lp-benefit-card p, .lp-benefit-card li { font-size: 16px; color: var(--lp-muted); line-height: 1.65; }
        .lp-benefit-card ul { padding-left: 20px; list-style-type: disc; }

        /* ── CTA ── */
        .lp-cta { background: var(--lp-dark); width: 100%; padding: 96px 48px; display: flex; flex-direction: column; align-items: center; gap: 48px; }
        .lp-cta h2 { font-size: 52px; font-weight: 800; letter-spacing: -2px; line-height: 1; color: var(--cream); text-align: center; }
        .lp-cta-form { display: flex; gap: 8px; align-items: stretch; max-width: 480px; width: 100%; }
        .lp-cta-form input { flex: 1; min-width: 0; padding: 14px 16px; border-radius: 8px; border: 2px solid rgba(255,253,252,0.2); background: rgba(255,253,252,0.08); font-size: 15px; font-family: inherit; color: var(--cream); outline: none; }
        .lp-cta-form input:focus { border-color: var(--lp-orange); }
        .lp-cta-form input::placeholder { color: rgba(255,253,252,0.4); }
        .lp-whats-next { max-width: 480px; width: 100%; display: flex; flex-direction: column; gap: 12px; }
        .lp-whats-next ol { padding-left: 18px; display: flex; flex-direction: column; gap: 8px; list-style-type: decimal; }
        .lp-whats-next li { font-size: 15px; color: rgba(255,253,252,0.7); line-height: 1.6; }

        /* ── Footer ── */
        .lp-footer { background: var(--cream-dark); border-top: 1px solid var(--lp-border); padding: 48px; }
        .lp-footer-inner { max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column; gap: 20px; }
        .lp-footer-logo { display: flex; align-items: center; gap: 8px; font-size: 18px; font-weight: 800; letter-spacing: -0.5px; color: var(--lp-dark); margin-bottom: 8px; }
        .lp-footnote { font-size: 12px; color: var(--lp-muted-lt); line-height: 1.6; }
        .lp-footnote a { color: var(--lp-muted-lt); text-decoration: underline; }
        .lp-footnote a:hover { color: var(--lp-muted); }
        .lp-copyright { font-size: 12px; color: var(--lp-muted-lt); padding-top: 8px; border-top: 1px solid var(--lp-border); }

        /* ══ Tablet ≤ 1024px ══ */
        @media (max-width: 1024px) {
          .lp-nav-inner, .lp-hero, .lp-hiw, .lp-stats-inner, .lp-benefits-inner, .lp-footer { padding-left: 32px; padding-right: 32px; }
          .lp-hero h1 { font-size: 44px; letter-spacing: -1.5px; }
          .lp-stat-num { font-size: 72px; }
          .lp-section-header h2 { font-size: 38px; }
          .lp-dark-callout .lp-metric { font-size: 96px; letter-spacing: -4px; }
          .lp-cta h2 { font-size: 40px; }
        }

        /* ══ Mobile ≤ 768px ══ */
        @media (max-width: 768px) {
          .lp-nav-inner { padding: 0 20px; }
          .lp-nav-links { display: none; }
          .lp-nav-hamburger { display: flex; }
          .lp-hero { flex-direction: column; gap: 36px; padding: 48px 20px 40px; }
          .lp-hero-left { flex: unset; width: 100%; }
          .lp-hero h1 { font-size: 34px; letter-spacing: -1px; }
          .lp-hero-sub { font-size: 16px; max-width: 100%; }
          .lp-hero-form { flex-direction: column; max-width: 100%; }
          .lp-hero-right { width: 100%; }
          .lp-stats-inner { padding: 40px 20px; grid-template-columns: 1fr; }
          .lp-stat-num { font-size: 64px; letter-spacing: -2.5px; }
          .lp-hiw { padding: 56px 20px; }
          .lp-hiw-grid { grid-template-columns: 1fr 1fr; }
          .lp-benefits-grid { grid-template-columns: 1fr; }
          .lp-section-header h2 { font-size: 28px; letter-spacing: -0.5px; }
          .lp-dark-callout { padding: 64px 24px; }
          .lp-dark-callout .lp-metric { font-size: 72px; letter-spacing: -3px; }
          .lp-dark-callout .lp-metric-sub { font-size: 18px; }
          .lp-benefits-inner { padding: 56px 20px; }
          .lp-cta { padding: 64px 24px; }
          .lp-cta h2 { font-size: 30px; letter-spacing: -0.5px; }
          .lp-cta-form { flex-direction: column; }
          .lp-footer { padding: 40px 20px; }
        }
      `}</style>

      {/* ══════════ NAV ══════════ */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: 'rgba(255,253,252,0.95)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--lp-border)' }}>
        <div className="lp-nav-inner">
          <a href="/" className="lp-nav-logo">Onsa</a>
          <div className="lp-nav-links">
            <a href="https://app.onsa.app/login" className="lp-nav-login">Login</a>
            <button className="lp-btn-orange" onClick={scrollToAccess}>Get started</button>
          </div>
          <button className="lp-nav-hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
        <div className={`lp-nav-mobile${menuOpen ? ' open' : ''}`}>
          <a href="https://app.onsa.app/login" className="lp-nav-mobile-btn" style={{ border: '1.5px solid var(--lp-border)', color: 'var(--lp-dark-mid)' }} onClick={() => setMenuOpen(false)}>Login</a>
          <button className="lp-nav-mobile-btn lp-btn-orange" onClick={scrollToAccess}>Get started</button>
        </div>
      </nav>

      {/* ══════════ HERO ══════════ */}
      <section>
        <div className="lp-hero">
          <div className="lp-hero-left">
            <span className="lp-section-label">
              <svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="#ff5101" /></svg>
              Interview scheduling, automated
            </span>
            <h1>You set up the job. Onsa books the interview.</h1>
            <p className="lp-hero-sub">Onsa emails your client for availability, invites candidates to self-book, and confirms the interview. You just kick it off.</p>
            <form className="lp-hero-form" onSubmit={e => { e.preventDefault(); submitEmail(heroEmail); }}>
              <input
                ref={emailHeroRef}
                type="email"
                value={heroEmail}
                onChange={e => setHeroEmail(e.target.value)}
                placeholder="Email address"
                required
              />
              <button type="submit" className="lp-btn-orange">Get started</button>
            </form>
          </div>

          <div className="lp-hero-right">
            <div className="lp-email-card">
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--lp-muted)', margin: 0 }}>From Onsa</p>
              <p style={{ fontSize: 13, color: 'var(--lp-muted)', margin: 0 }}>to: <span style={{ color: 'var(--lp-dark)', textDecoration: 'underline' }}>sarah@candidate.com</span></p>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--lp-dark)', paddingTop: 4, margin: 0 }}>
                Hi Sarah, James from Hartley Recruitment is arranging interviews for the Senior Engineer role. When are you free next week?
              </p>
              <div className="lp-email-slots">
                {[
                  { label: 'Tue 10:00', selected: false },
                  { label: 'Wed 14:00', selected: true },
                  { label: 'Thu 09:30', selected: false },
                  { label: 'Fri 11:00', selected: false },
                ].map(slot => (
                  <div key={slot.label} className={`lp-slot${slot.selected ? ' lp-slot-selected' : ''}`}>{slot.label}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ STATS ══════════ */}
      <section className="lp-stats">
        <div className="lp-stats-inner">
          <div className="lp-stat-card">
            <p className="lp-stat-num">42%</p>
            <p style={{ fontSize: 17, fontWeight: 500, color: 'var(--lp-dark)', lineHeight: 1.5, margin: 0 }}>of candidates drop out when scheduling takes too long.</p>
            <p style={{ fontSize: 11, color: 'var(--lp-muted-lt)', margin: 0 }}>Cronofy, 2024</p>
          </div>
          <div className="lp-stat-card">
            <p className="lp-stat-num">2.5h</p>
            <p style={{ fontSize: 17, fontWeight: 500, color: 'var(--lp-dark)', lineHeight: 1.5, margin: 0 }}>lost per vacancy on interview scheduling alone.</p>
            <p style={{ fontSize: 11, color: 'var(--lp-muted-lt)', margin: 0 }}>Totaljobs, 2025</p>
          </div>
        </div>
      </section>

      {/* ══════════ HOW IT WORKS ══════════ */}
      <section>
        <div className="lp-hiw">
          <div className="lp-section-header">
            <h2>Here&apos;s how Onsa fixes that</h2>
            <p>Four steps. You only do the first.</p>
          </div>
          <div className="lp-hiw-grid">
            {[
              { num: 'Step 01', title: 'You create the job', body: "Add the role details and your client's and candidates email address. Onsa handles the rest." },
              { num: 'Step 02', title: 'Onsa emails your client', body: 'Onsa sends your client a direct request for their available interview times. No chasing required.' },
              { num: 'Step 03', title: 'Onsa invites your candidates', body: 'The client responds, then Onsa emails your candidates with a self-booking link, only showing available slots.' },
              { num: 'Step 04', title: 'Interview confirmed', body: "The candidate books a slot. Everyone gets a calendar invite. You're notified." },
            ].map(step => (
              <div key={step.num} className="lp-step-card">
                <div className="lp-step-num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ 10 DAYS CALLOUT ══════════ */}
      <section className="lp-dark-callout">
        <div className="lp-metric">10 days</div>
        <div className="lp-metric-sub">is all it takes for the best candidates to be off the market.</div>
        <div className="lp-metric-attr">LinkedIn Talent Solutions</div>
      </section>

      {/* ══════════ BENEFITS ══════════ */}
      <section className="lp-benefits">
        <div className="lp-benefits-inner">
          <div className="lp-section-header">
            <h2>More than a booking link.</h2>
            <p>Scheduling is inevitable. Chaos doesn&apos;t have to be.</p>
          </div>
          <div className="lp-benefits-grid">
            <div className="lp-benefit-card">
              <div className="lp-benefit-icon"><Timer size={20} strokeWidth={1.75} color="var(--lp-orange)" /></div>
              <h3>From 2.5 hours to minutes.</h3>
              <p>UK recruiters lose an average of 2.5 hours per vacancy on scheduling coordination.<br /><br />With Onsa, the recruiter&apos;s contribution is the initial setup. Everything after that is Onsa.</p>
            </div>
            <div className="lp-benefit-card">
              <div className="lp-benefit-icon"><TrendingDown size={20} strokeWidth={1.75} color="var(--lp-orange)" /></div>
              <h3>Stop losing candidates.</h3>
              <p>42% of candidates drop out when scheduling takes too long.<br /><br />Because Onsa moves immediately once the client responds, without waiting for the recruiter to relay, the gap between application and interview shrinks.</p>
            </div>
            <div className="lp-benefit-card">
              <div className="lp-benefit-icon"><CheckCheck size={20} strokeWidth={1.75} color="var(--lp-orange)" /></div>
              <h3>Clients get a clean experience.</h3>
              <p>Onsa contacts the client directly with a clean, branded request for availability. No email threads, no &ldquo;does Tuesday work for you?&rdquo; The client provides times once and Onsa takes it from there.</p>
            </div>
            <div className="lp-benefit-card">
              <div className="lp-benefit-icon"><Users size={20} strokeWidth={1.75} color="var(--lp-orange)" /></div>
              <h3>Spend time placing people.</h3>
              <p>When scheduling is handled entirely by Onsa, recruiters can focus on the work that actually drives revenue:</p>
              <ul>
                <li>Candidate relationships.</li>
                <li>Client development.</li>
                <li>Placements.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ EARLY ACCESS ══════════ */}
      <section id="early-access" className="lp-cta">
        <h2>Get early access.</h2>
        <form className="lp-cta-form" onSubmit={e => { e.preventDefault(); submitEmail(ctaEmail); }}>
          <input
            ref={emailFooterRef}
            type="email"
            value={ctaEmail}
            onChange={e => setCtaEmail(e.target.value)}
            placeholder="Email address"
            required
          />
          <button type="submit" className="lp-btn-orange">Get started</button>
        </form>
        <div className="lp-whats-next">
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--lp-orange)', margin: 0 }}>What happens next</p>
          <ol>
            <li>You sign up for early access.</li>
            <li>We email you within 48 hours to schedule a 15-minute intro call.</li>
            <li>We get your agency set up with dedicated onboarding support.</li>
          </ol>
        </div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer className="lp-footer">
        <div className="lp-footer-inner">
          <div className="lp-footer-logo">Onsa</div>
          <p className="lp-footnote">
            <sup>1</sup> &ldquo;42% of candidates drop out when interview scheduling takes too long&rdquo; — Cronofy Candidate Expectations Report 2024.{' '}
            <a href="https://www.cronofy.com/reports/candidate-expectations-report-2024" target="_blank" rel="noopener noreferrer">cronofy.com/reports/candidate-expectations-report-2024</a>
          </p>
          <p className="lp-footnote">
            <sup>2</sup> &ldquo;UK recruiters lose 2.5 hours per vacancy on interview scheduling alone&rdquo; — Totaljobs, August 2025 (survey of 748 HR leaders).{' '}
            <a href="https://www.totaljobs.com/media-centre/uk-recruiters-lose-two-days-per-hire-to-admin-costing-nearly-17k-a-year-in-productivity/" target="_blank" rel="noopener noreferrer">totaljobs.com/media-centre/uk-recruiters-lose-two-days-per-hire...</a>
          </p>
          <p className="lp-footnote">
            <sup>3</sup> &ldquo;Admin inefficiency costs each UK recruiter £17,000/year in lost productivity&rdquo; — same Totaljobs 2025 report.
          </p>
          <p className="lp-copyright">&copy; 2026 Onsa. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
