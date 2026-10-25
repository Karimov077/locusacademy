# 🎓 Lokus Academy — Landing Page

## Loyiha Holati
✅ Build muvaffaqiyatli  
✅ Xatosiz  
✅ Vercel Free Plan bilan mos  

---

## Fayl Tuzilishi

```
locus_lpage/
├── api/
│   └── submit.js              ← Vercel Serverless Function (Telegram Bot)
├── public/
│   └── favicon.svg            ← Yashil "L" logotipi
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         ← Sticky navbar + hamburger menyu
│   │   ├── Hero.jsx           ← Hero section + animatsiyalar
│   │   ├── Features.jsx       ← Afzalliklar (4 ta karta)
│   │   ├── Courses.jsx        ← Kurslar (7 ta karta)
│   │   ├── Why.jsx            ← Nega Lokus Academy? section
│   │   ├── ContactForm.jsx    ← Ariza formasi + validatsiya
│   │   └── Footer.jsx         ← Kontaktlar + ijtimoiy tarmoqlar
│   ├── hooks/
│   │   └── useScrollReveal.js ← IntersectionObserver hook
│   ├── App.jsx
│   ├── index.css              ← Barcha global stillar
│   └── main.jsx
├── .env.example               ← Environment variables namuna
├── .gitignore
├── index.html                 ← SEO meta tags
├── vercel.json                ← Vercel konfiguratsiya
└── package.json
```

---

## Mahalliy Ishga Tushirish

```bash
npm install
npm run dev
# http://localhost:5173/ da oching
```

---

## Vercel Deploy

1. GitHub'ga push qiling
2. vercel.com → "New Project" → repo'ni tanlang
3. Environment Variables qo'shing (quyida)
4. Deploy ✅

---

## Telegram Bot Sozlash

### Qadam 1: Bot yarating
1. [@BotFather](https://t.me/BotFather) → `/newbot`
2. **Bot Token**ni saqlang

### Qadam 2: Chat ID oling
1. Botni guruhga qo'shing
2. `https://api.telegram.org/bot<TOKEN>/getUpdates` → `chat.id` ni toping

### Qadam 3: Vercel Environment Variables
| Variable | Value |
|---|---|
| `TELEGRAM_BOT_TOKEN` | Bot token |
| `TELEGRAM_CHAT_ID` | Guruh ID (odatda manfiy) |

---

## Hozirda Tayyor Bo'lmagan Integratsiyalar

| Integratsiya | Holat |
|---|---|
| Telegram Bot | 🔧 Token va Chat ID kerak |
| Google Analytics | ❌ Qo'shilmagan |
| Admin panel | ❌ Kerak emas |
| Ma'lumotlar bazasi | ❌ Kerak emas |
