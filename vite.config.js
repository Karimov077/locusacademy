import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      {
        name: 'api-submit-dev-middleware',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if (req.url === '/api/submit' && req.method === 'POST') {
              let body = ''
              req.on('data', (chunk) => {
                body += chunk
              })
              req.on('end', async () => {
                try {
                  const data = JSON.parse(body || '{}')
                  const { name, phone, course } = data

                  const BOT_TOKEN =
                    env.TELEGRAM_BOT_TOKEN || process.env.TELEGRAM_BOT_TOKEN
                  const CHAT_ID =
                    env.TELEGRAM_CHAT_ID || process.env.TELEGRAM_CHAT_ID

                  if (!BOT_TOKEN || !CHAT_ID) {
                    res.statusCode = 503
                    res.setHeader('Content-Type', 'application/json')
                    res.end(
                      JSON.stringify({
                        success: false,
                        message: 'Bot sozlanmagan',
                      })
                    )
                    return
                  }

                  const now = new Date()
                  const formattedDate = now.toLocaleString('uz-UZ', {
                    timeZone: 'Asia/Tashkent',
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                  })

                  const escapeMd = (str) =>
                    String(str || '').replace(/[_*[\]()~`>#+\-=|{}.!]/g, '\\$&')

                  const text = [
                    '🎓 *YANGI ARIZA — Lokus Academy*',
                    '━━━━━━━━━━━━━━━━━━━━━',
                    `👤 *Ism:* ${escapeMd(name)}`,
                    `📞 *Telefon:* ${escapeMd(phone)}`,
                    `📚 *Kurs:* ${escapeMd(course)}`,
                    '━━━━━━━━━━━━━━━━━━━━━',
                    `🕐 *Vaqt:* ${formattedDate} (Toshkent)`,
                  ].join('\n')

                  const tgRes = await fetch(
                    `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
                    {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                        chat_id: CHAT_ID,
                        text,
                        parse_mode: 'Markdown',
                      }),
                    }
                  )

                  const tgData = await tgRes.json()
                  res.setHeader('Content-Type', 'application/json')
                  if (tgRes.ok && tgData.ok) {
                    res.statusCode = 200
                    res.end(
                      JSON.stringify({
                        success: true,
                        message: 'Ariza muvaffaqiyatli yuborildi!',
                      })
                    )
                  } else {
                    res.statusCode = 502
                    res.end(
                      JSON.stringify({
                        success: false,
                        message: tgData.description || 'Telegram xatosi',
                      })
                    )
                  }
                } catch (e) {
                  res.statusCode = 500
                  res.setHeader('Content-Type', 'application/json')
                  res.end(JSON.stringify({ success: false, message: e.message }))
                }
              })
              return
            }
            next()
          })
        },
      },
    ],
  }
})
