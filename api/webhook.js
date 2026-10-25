// /api/webhook.js — Telegram Bot Serverless Webhook for Lokus Academy
// Bot: @locus_academy_robot
// Channel: Locus Litlar (-1004417957029)

const BOT_TOKEN =
  process.env.TELEGRAM_BOT_TOKEN || '8575110002:AAF1T5Nb2qCp7XnZcpkrIEjJsChFmlitAkE';
const CHANNEL_ID =
  process.env.TELEGRAM_CHAT_ID || '-1004417957029';

const COURSES = {
  c_mat_kids: 'Matematika Kids',
  c_mat_abi: 'Matematika (Abituriyentlar)',
  c_kimyo: 'Kimyo (Abituriyentlar)',
  c_bio: 'Biologiya (Abituriyentlar)',
  c_cefr: 'Ingliz tili — CEFR',
  c_ielts: 'Ingliz tili — IELTS',
  c_it: 'IT Kurslar',
};

// In-memory session cache for serverless invocation
// Note: User course selection stored per user_id in lightweight cache
const userSelections = new Map();

export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // GET: Webhook status or Setup helper
  if (req.method === 'GET') {
    const { action, domain } = req.query || {};

    // Auto setup webhook: /api/webhook?action=set&domain=https://your-domain.vercel.app
    if (action === 'set' && domain) {
      const webhookUrl = `${domain.replace(/\/$/, '')}/api/webhook`;
      const tgRes = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/setWebhook?url=${encodeURIComponent(webhookUrl)}`
      );
      const tgData = await tgRes.json();
      return res.status(200).json({
        success: tgData.ok,
        message: tgData.description || 'Webhook sozlandi',
        webhookUrl,
        telegramResponse: tgData,
      });
    }

    // Info
    return res.status(200).json({
      status: 'active',
      bot: '@locus_academy_robot',
      channel: CHANNEL_ID,
      info: 'Lokus Academy Telegram Bot Webhook endpoint is running.',
    });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const update = req.body;
  if (!update) {
    return res.status(200).json({ ok: true });
  }

  try {
    // 1. Callback query handling (Inline button clicks)
    if (update.callback_query) {
      await handleCallbackQuery(update.callback_query);
      return res.status(200).json({ ok: true });
    }

    // 2. Normal text message or contact
    if (update.message) {
      await handleMessage(update.message);
      return res.status(200).json({ ok: true });
    }
  } catch (err) {
    console.error('[Webhook Error]:', err.message);
  }

  return res.status(200).json({ ok: true });
}

// Telegram API Helper
async function tg(method, payload) {
  const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/${method}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return res.json();
}

function escapeMd(str) {
  return String(str || '').replace(/[_*[\]()~`>#+\-=|{}.!]/g, '\\$&');
}

function getNowDate() {
  return new Date().toLocaleString('uz-UZ', {
    timeZone: 'Asia/Tashkent',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
}

// Handle Incoming Message
async function handleMessage(msg) {
  const chatId = msg.chat.id;
  const from = msg.from || {};
  const text = (msg.text || '').trim();
  const userName = [from.first_name, from.last_name].filter(Boolean).join(' ') || 'Foydalanuvchi';
  const usernameText = from.username ? `@${from.username}` : 'Mavjud emas';

  // 1. /start command
  if (text === '/start' || text.startsWith('/start')) {
    const welcome =
      `Assalomu alaykum, *${escapeMd(userName)}*! 🎓\n\n` +
      `*Lokus Academy* o'quv markazining rasmiy botiga xush kelibsiz!\n\n` +
      `Bizda quyidagi yo'nalishlar bo'yicha sifatli ta'lim olishingiz mumkin:\n` +
      `• Matematika Kids va Abituriyentlar\n` +
      `• Kimyo va Biologiya\n` +
      `• Ingliz tili (CEFR & IELTS)\n` +
      `• IT Kurslar (Dasturlash)\n\n` +
      `Quyidagi tugmalar orqali kursga yozilishingiz yoki markaz bilan bog'lanishingiz mumkin:`;

    const keyboard = {
      inline_keyboard: [
        [{ text: '📝 Kursga yozilish', callback_data: 'enroll_start' }],
        [
          { text: '📞 Bog‘lanish', callback_data: 'contact_info' },
          { text: 'ℹ️ Markaz haqida', callback_data: 'about_info' },
        ],
      ],
    };

    await tg('sendMessage', {
      chat_id: chatId,
      text: welcome,
      parse_mode: 'Markdown',
      reply_markup: keyboard,
    });
    return;
  }

  // 2. User shared contact button
  if (msg.contact && msg.contact.phone_number) {
    let phone = msg.contact.phone_number;
    if (!phone.startsWith('+')) phone = '+' + phone;
    const course = userSelections.get(from.id) || "Umumiy konsultatsiya";

    // Send to channel
    const channelText = [
      '🎓 *YANGI ARIZA (Telegram Bot orqali)*',
      '━━━━━━━━━━━━━━━━━━━━━',
      `👤 *Ism:* ${escapeMd(userName)}`,
      `📞 *Telefon:* ${escapeMd(phone)}`,
      `📚 *Tanlangan kurs:* ${escapeMd(course)}`,
      `💬 *Telegram:* ${escapeMd(usernameText)} (ID: \`${from.id}\`)`,
      '━━━━━━━━━━━━━━━━━━━━━',
      `🕐 *Vaqt:* ${getNowDate()} (Toshkent)`,
    ].join('\n');

    await tg('sendMessage', {
      chat_id: CHANNEL_ID,
      text: channelText,
      parse_mode: 'Markdown',
    });

    // Confirmation to user
    await tg('sendMessage', {
      chat_id: chatId,
      text: `Rahmat, *${escapeMd(userName)}*! 🎉\n\nArizangiz qabul qilindi. Tez orada *${escapeMd(phone)}* raqamingizga qo'ng'iroq qilib, kurslar haqida batafsil ma'lumot beramiz.`,
      parse_mode: 'Markdown',
      reply_markup: { remove_keyboard: true },
    });

    userSelections.delete(from.id);
    return;
  }

  // 3. User typed phone number manually (e.g. +998901234567 or 901234567)
  const phoneMatch = text.match(/(\+?998\s?\d{2}\s?\d{3}\s?\d{2}\s?\d{2}|\b\d{9}\b)/);
  if (phoneMatch) {
    let phone = phoneMatch[0].replace(/\s/g, '');
    if (!phone.startsWith('+')) {
      phone = phone.startsWith('998') ? '+' + phone : '+998' + phone;
    }
    const course = userSelections.get(from.id) || "Umumiy konsultatsiya";

    const channelText = [
      '🎓 *YANGI ARIZA (Telegram Bot orqali)*',
      '━━━━━━━━━━━━━━━━━━━━━',
      `👤 *Ism / Xabar:* ${escapeMd(text.slice(0, 80))}`,
      `📞 *Telefon:* ${escapeMd(phone)}`,
      `📚 *Tanlangan kurs:* ${escapeMd(course)}`,
      `💬 *Telegram:* ${escapeMd(usernameText)} (ID: \`${from.id}\`)`,
      '━━━━━━━━━━━━━━━━━━━━━',
      `🕐 *Vaqt:* ${getNowDate()} (Toshkent)`,
    ].join('\n');

    await tg('sendMessage', {
      chat_id: CHANNEL_ID,
      text: channelText,
      parse_mode: 'Markdown',
    });

    await tg('sendMessage', {
      chat_id: chatId,
      text: `Rahmat, *${escapeMd(userName)}*! 🎉\n\nArizangiz qabul qilindi. Lokus Academy mutaxassislari tez orada siz bilan bog'lanishadi!`,
      parse_mode: 'Markdown',
      reply_markup: { remove_keyboard: true },
    });

    userSelections.delete(from.id);
    return;
  }

  // Fallback reply
  await tg('sendMessage', {
    chat_id: chatId,
    text: `Kursga yozilish uchun quyidagi tugmani bosing yoki telefon raqamingizni yozib qoldiring:`,
    reply_markup: {
      inline_keyboard: [
        [{ text: '📝 Kursga yozilish', callback_data: 'enroll_start' }],
        [{ text: '📞 Bog‘lanish', callback_data: 'contact_info' }],
      ],
    },
  });
}

// Handle Callback Queries (Button Clicks)
async function handleCallbackQuery(cb) {
  const chatId = cb.message.chat.id;
  const messageId = cb.message.message_id;
  const from = cb.from || {};
  const data = cb.data;

  // Answer callback to stop loading spinner
  await tg('answerCallbackQuery', { callback_query_id: cb.id });

  // 1. Show Courses list
  if (data === 'enroll_start') {
    const courseButtons = [
      [{ text: '🧮 Matematika Kids', callback_data: 'c_mat_kids' }],
      [{ text: '📐 Matematika (Abituriyent)', callback_data: 'c_mat_abi' }],
      [{ text: '🧪 Kimyo (Abituriyent)', callback_data: 'c_kimyo' }],
      [{ text: '🔬 Biologiya (Abituriyent)', callback_data: 'c_bio' }],
      [{ text: '🇬🇧 Ingliz tili — CEFR', callback_data: 'c_cefr' }],
      [{ text: '🎖 Ingliz tili — IELTS', callback_data: 'c_ielts' }],
      [{ text: '💻 IT Kurslar (Dasturlash)', callback_data: 'c_it' }],
    ];

    await tg('editMessageText', {
      chat_id: chatId,
      message_id: messageId,
      text: `Qaysi kursga yozilmoqchisiz? Quyidagi kurslardan birini tanlang:`,
      reply_markup: { inline_keyboard: courseButtons },
    });
    return;
  }

  // 2. User chose a course
  if (COURSES[data]) {
    const selectedCourse = COURSES[data];
    userSelections.set(from.id, selectedCourse);

    await tg('sendMessage', {
      chat_id: chatId,
      text:
        `Tanlangan kurs: *${escapeMd(selectedCourse)}* ✅\n\n` +
        `Ro'yxatdan o'tishni yakunlash uchun pastdagi *📱 Telefon raqamni yuborish* tugmasini bosing yoki telefon raqamingizni yozib yuboring (Masalan: \`+998901234567\`):`,
      parse_mode: 'Markdown',
      reply_markup: {
        keyboard: [
          [{ text: '📱 Telefon raqamni yuborish', request_contact: true }],
        ],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    });
    return;
  }

  // 3. Contact Info
  if (data === 'contact_info') {
    await tg('sendMessage', {
      chat_id: chatId,
      text:
        `📞 *Lokus Academy bilan bog'lanish:*\n\n` +
        `• Telefon: +998 77 699 46 46\n` +
        `• Telefon: +998 77 699 47 47\n` +
        `• Telegram kanal: @Lokus\\_academy\n` +
        `• Instagram: @lokus\\_academy\n\n` +
        `Har kuni 08:00 dan 20:00 gacha xizmatingizdamiz!`,
      parse_mode: 'Markdown',
    });
    return;
  }

  // 4. About Info
  if (data === 'about_info') {
    await tg('sendMessage', {
      chat_id: chatId,
      text:
        `🎓 *Lokus Academy haqida:*\n\n` +
        `Biz — matematika, xorijiy tillar, tabiiy fanlar va IT yo'nalishlarida professional ta'lim beruvchi zamonaviy o'quv markazimiz.\n\n` +
        `Kurslarimiz narxi oyiga *549 000 so'mdan* boshlanadi.\n` +
        `Barcha o'quvchilarimizga individual yondashuv va qulay o'quv muhiti kafolatlanadi.`,
      parse_mode: 'Markdown',
    });
  }
}
