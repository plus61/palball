import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();

  const name = formData.get('name')?.toString().trim() ?? '';
  const email = formData.get('email')?.toString().trim() ?? '';
  const phone = formData.get('phone')?.toString().trim() ?? '';
  const category = formData.get('category')?.toString().trim() ?? '';
  const message = formData.get('message')?.toString().trim() ?? '';

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'お名前・メールアドレス・お問い合わせ内容は必須です。' }), {
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
お名前: ${name}
メールアドレス: ${email}
お電話番号: ${phone || '未記入'}
お問い合わせカテゴリ: ${category || '未選択'}

お問い合わせ内容:
${message}
`.trim();

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'pal-ball お問い合わせ <noreply@pal-ball.com>',
      to: [TO_EMAIL],
      reply_to: email,
      subject: `【お問い合わせ】${name} 様`,
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

  return Response.redirect(new URL('/contact/?sent=1', request.url).toString(), 303);
};
