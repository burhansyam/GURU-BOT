import axios from 'axios'

let handler = async(m, { conn, usedPrefix, command }) => {
let res = await axios("https://api.beetv.my.id/bot/injek/menu.json")
let json = res.data
let injek = json.menu
conn.reply(m.chat, `${injek}` .trim(), m)

}

// Tambah sendiri kalo mau
handler.help = ['menu']
handler.tags = ['general']
handler.command = /^(menu)$/i

export default handler
