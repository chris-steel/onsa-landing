import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const segmentId = process.env.RESEND_SEGMENT_ID ?? '';
  const notifyEmail = process.env.EARLY_ACCESS_NOTIFY_EMAIL ?? '';

  try {
    const body = await request.json();
    const { email, _hp } = body as { email?: string; _hp?: string };

    // Honeypot: real users leave this empty; bots fill it in
    if (_hp) {
      return NextResponse.json({ ok: true });
    }

    if (!email || !EMAIL_RE.test(email)) {
      return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 });
    }

    if (!apiKey || !segmentId) {
      console.error('RESEND_API_KEY or RESEND_SEGMENT_ID is not set');
      return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 });
    }

    const resend = new Resend(apiKey);

    await resend.contacts.create({
      email,
      segments: [{ id: segmentId }],
      unsubscribed: false,
    });

    if (notifyEmail) {
      await resend.emails.send({
        from: 'Onsa <hello@email.onsa.app>',
        to: notifyEmail,
        subject: `Early access signup: ${email}`,
        html: `<p style="font-family:sans-serif;font-size:15px;">New early access signup: <strong>${email}</strong></p>`,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('early-access API error:', err);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
