import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();

  const name = formData.get('name')?.toString().trim() ?? '';
  const email = formData.get('email')?.toString().trim() ?? '';
  const phone = formData.get('phone')?.toString().trim() ?? '';
  const course = formData.get('course')?.toString().trim() ?? '';
  const schedule = formData.get('schedule')?.toString().trim() ?? '';
  const message = formData.get('message')?.toString().trim() ?? '';

  if (!name || !email) {
    return new Response(JSON.stringify({ error: 'お名前・メールアドレスは必須です。' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const RESEND_API_KEY = import.meta.env.RESEND_API_KEY;
  const TO_EMAIL = import.meta.env.CONTACT_TO_EMAIL ?? 'info@pal-ball.com';

  if (!RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set');
    return new Response(JSON.stringify({ error: 'メール送信の設定が完了していません。' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const body = `
【パーソナルトレーニング 無料カウンセリング・体験申込】

お名前: ${name}
メールアドレス: ${email}
お電話番号: ${phone || '未記入'}
ご希望コース: ${course || '未選択'}
ご希望日時: ${schedule || '未記入'}

ご要望・ご質問:
${message || 'なし'}
`.trim();

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'pal-ball パーソナルトレーニング <noreply@pal-ball.com>',
      to: [TO_EMAIL],
      reply_to: email,
      subject: `【パーソナル申込】${name} 様`,
      text: body,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error('Resend error:', err);
    return new Response(JSON.stringify({ error: 'メール送信に失敗しました。時間をおいてお試しください。' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return Response.redirect(new URL('/personal/?sent=1', request.url).toString(), 303);
};
