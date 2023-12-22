import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
if (!text) throw `*[❗INFO❗] Masukan Nomor X diawali 62 \n Contoh :cekpxl 6281808032100`
  await m.reply('🕵️ Sabar kak, saya cek dulu...')
let res = await fetch(`https://api.beetv.my.id/bot/xl/?no=${text}`)
let json = await res.json()
let hajar = json.result
           conn.reply(m.chat, hajar, m)
}

handler.help = ['cekxl <nomorxl>']
handler.tags = ['info']
handler.command = /^(cekxl)$/i



handler.private = false
export default handler
