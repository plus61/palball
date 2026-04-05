export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  formData.get("phone")?.toString().trim() ?? "";
  formData.get("course")?.toString().trim() ?? "";
  formData.get("schedule")?.toString().trim() ?? "";
  formData.get("message")?.toString().trim() ?? "";
  if (!name || !email) {
    return new Response(JSON.stringify({ error: "お名前・メールアドレスは必須です。" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  {
    console.error("RESEND_API_KEY is not set");
    return new Response(JSON.stringify({ error: "メール送信の設定が完了していません。" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
