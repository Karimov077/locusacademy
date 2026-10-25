// /api/submit.js — Vercel Serverless Function
// Lokus Academy — Telegram Bot Integration
// 
// Environment Variables kerak:
//   TELEGRAM_BOT_TOKEN — BotFather'dan olingan bot token
//   TELEGRAM_CHAT_ID   — Arizalar yuborilishi kerak bo'lgan chat/kanal ID

export default async function handler(req, res) {
  // CORS va method tekshiruvi
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: "Faqat POST so'rovi qabul qilinadi." });
  }

  // Request body'dan ma'lumotlarni olish
  const { name, phone, course } = req.body || {};

  // Server tomonda validatsiya
  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    return res.status(400).json({ success: false, message: "Ism noto'g'ri yoki kam belgilar." });
  }

  if (!phone || typeof phone !== 'string') {
    return res.status(400).json({ success: false, message: "Telefon raqami noto'g'ri." });
  }

  const phoneClean = phone.replace(/\s/g, '');
  if (!/^\+998\d{9}$/.test(phoneClean)) {
    return res.status(400).json({
      success: false,
      message: "O'zbekiston telefon raqamini kiriting: +998XXXXXXXXX",
    });
  }

  if (!course || typeof course !== 'string' || course.trim().length < 2) {
    return res.status(400).json({ success: false, message: "Kurs tanlanmagan." });
  }

  // Environment variables tekshiruvi
  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  if (!BOT_TOKEN || !CHAT_ID) {
    console.error('[Lokus Academy] TELEGRAM_BOT_TOKEN yoki TELEGRAM_CHAT_ID sozlanmagan.');
    return res.status(503).json({
      success: false,
      message:
        "Ariza qabul qilish tizimi hozirda sozlanmoqda. Iltimos, to'g'ridan-to'g'ri bog'laning: +998 77 699 46 46",
    });
  }

  // Telegram xabari matni
  const now = new Date();
  const formattedDate = now.toLocaleString('uz-UZ', {
    timeZone: 'Asia/Tashkent',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });

  const message = [
    '🎓 *YANGI ARIZA — Lokus Academy*',
    '━━━━━━━━━━━━━━━━━━━━━',
    `👤 *Ism:* ${escapeMarkdown(name.trim())}`,
    `📞 *Telefon:* ${escapeMarkdown(phoneClean)}`,
    `📚 *Kurs:* ${escapeMarkdown(course.trim())}`,
    '━━━━━━━━━━━━━━━━━━━━━',
    `🕐 *Vaqt:* ${formattedDate} (Toshkent)`,
  ].join('\n');

  // Telegram API'ga yuborish
  try {
    const telegramUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    const telegramRes = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    const telegramData = await telegramRes.json();

    if (!telegramRes.ok || !telegramData.ok) {
      console.error('[Lokus Academy] Telegram API xatosi:', telegramData);
      return res.status(502).json({
        success: false,
        message: "Telegram'ga yuborishda xato yuz berdi. Iltimos, qayta urinib ko'ring.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Ariza muvaffaqiyatli yuborildi!",
    });
  } catch (err) {
    console.error('[Lokus Academy] Fetch xatosi:', err.message);
    return res.status(500).json({
      success: false,
      message: "Server xatosi. Iltimos, qayta urinib ko'ring yoki to'g'ridan-to'g'ri bog'laning.",
    });
  }
}

/**
 * Markdown special chars uchun escape funksiyasi
 * @param {string} text
 * @returns {string}
 */
function escapeMarkdown(text) {
  return text.replace(/[_*[\]()~`>#+\-=|{}.!]/g, '\\$&');
}
