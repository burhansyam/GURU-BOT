import axios from 'axios'

let handler = async(m, { conn, usedPrefix, command }) => {
await m.reply('🥰 Siap ambil tokeeettt')

let res = await axios("https://api.burhansyam.com/bot/xl/mlebu.php")
let json = res.data
let status = json.statusDescription
//conn.sendButton(m.chat, "_*Quotes Bucin :*_", bucin, author, [['😍🥰 Lanjut B>
conn.reply(m.chat, status, m)
}

handler.help = ['token']
handler.tags = ['tools']
handler.command = /^(toketxl)$/i

export default handler
