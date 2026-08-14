import assert from "node:assert/strict";
import test from "node:test";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

const expectedWhatsappMessages = [
  "Olá Gabi! Vim pelo site da GB Grazing Foods e gostaria de fazer um pedido. Pode me ajudar?",
  "Olá Gabi! Vim pelo site da GB e estou procurando uma opção especial para presentear. Pode me mostrar as opções?",
  "Olá Gabi! Vim pelo site da GB e gostaria de conhecer as opções de tábuas de frios para compartilhar.",
  "Olá Gabi! Vim pelo site da GB e gostaria de conhecer as opções de cestas de café da manhã.",
  "Olá Gabi! Vim pelo site da GB e gostaria de informações para uma comemoração ou evento.",
  "Olá Gabi! Vim pelo site da GB e gostaria de conhecer as opções de presentes, coffee breaks e experiências corporativas.",
  "Olá Gabi! Vim pelo site da GB Grazing Foods e gostaria de mais informações.",
];

async function renderHome() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${Math.random()}`);
  const { default: worker } = await import(workerUrl.href);
  const response = await worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  return { response, html: await response.text() };
}

test("renders development preview metadata", async () => {
  const { response, html } = await renderHome();

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  assert.match(html, developmentPreviewMeta);
});

test("keeps all commercial links on the official WhatsApp", async () => {
  const { response, html } = await renderHome();
  assert.equal(response.status, 200);
  assert.match(html, /<title>GB Grazing Foods \| Cestas, Tábuas e Presentes em Chapecó<\/title>/);
  const hrefs = [...html.matchAll(/\shref="([^"]+)"/g)].map((match) => match[1].replaceAll("&amp;", "&"));
  assert.equal(hrefs.some((href) => href === "" || href === "#"), false);
  const whatsappUrls = hrefs.filter((href) => href.startsWith("https://wa.me/")).map((href) => new URL(href));
  assert.ok(whatsappUrls.length >= expectedWhatsappMessages.length);
  assert.deepEqual([...new Set(whatsappUrls.map((url) => url.pathname.slice(1)))], ["5549999442478"]);
  const messages = new Set(whatsappUrls.map((url) => url.searchParams.get("text")));
  for (const message of expectedWhatsappMessages) assert.equal(messages.has(message), true, `Missing WhatsApp message: ${message}`);
  assert.deepEqual(hrefs.filter((href) => href.includes("instagram.com")), ["https://www.instagram.com/gabi.gbgrazingfoods/"]);
});
