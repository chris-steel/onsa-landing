import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID ?? '';
  const notifyEmail = process.env.EARLY_ACCESS_NOTIFY_EMAIL ?? '';

  try {
    const body = await request.json();
    const { email, firstName, lastName, company, jobTitle, phone } = body as {
      email?: string;
      firstName?: string;
      lastName?: string;
      company?: string;
      jobTitle?: string;
      phone?: string;
    };

    if (!email || !firstName || !lastName) {
      return NextResponse.json(
        { error: 'Email, first name, and last name are required.' },
        { status: 400 }
      );
    }

    if (!apiKey || !audienceId) {
      console.error('RESEND_API_KEY or RESEND_AUDIENCE_ID is not set');
      return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 });
    }

    const resend = new Resend(apiKey);

    // Add to Resend audience (email + name only — Resend contacts don't support custom fields)
    await resend.contacts.create({
      audienceId,
      email,
      firstName,
      lastName,
      unsubscribed: false,
    });

    // Send notification email with full submission data so no info is lost
    if (notifyEmail) {
      const rows = [
        ['Email', email],
        ['Name', `${firstName} ${lastName}`],
        ['Company', company || '—'],
        ['Job title', jobTitle || '—'],
        ['Phone', phone || '—'],
      ];

      const html = `
        <h2 style="font-family:sans-serif;font-size:18px;margin-bottom:16px;">New early access request</h2>
        <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;">
          ${rows
            .map(
              ([label, value]) => `
            <tr>
              <td style="padding:4px 16px 4px 0;color:#60626b;white-space:nowrap;">${label}</td>
              <td style="padding:4px 0;color:#1e1f24;font-weight:500;">${value}</td>
            </tr>`
            )
            .join('')}
        </table>
      `;

      await resend.emails.send({
        from: 'Onsa <noreply@onsa.app>',
        to: notifyEmail,
        subject: `Early access: ${firstName} ${lastName} (${email})`,
        html,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('early-access API error:', err);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
