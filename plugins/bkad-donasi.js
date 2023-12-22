import axios from 'axios'

let handler = async(m, { conn, usedPrefix, command }) => {
let res = await axios("https://api.beetv.my.id/bot/donasi/donasi.json")
let json = res.data
let injek = json.injek
conn.reply(m.chat, `${injek}` .trim(), m)

}
// Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['bkad']
handler.command = /^(donasi)$/i

export default handler
