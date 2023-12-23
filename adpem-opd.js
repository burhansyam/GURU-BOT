import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
if (!text) throw `*[❗INFO❗] Masukan Nor urut OPD* \n Contoh : .opd 26`
  //await m.reply('Sabar kak saya cek dulu...')
m.react(rwait)
 let res = await fetch(`https://api.beetv.my.id/bot/adpem/lraopd.php?k=${text}`)
if (!res.ok) throw await res.text()

let json = await res.json()
let { opd } = json

conn.reply(m.chat, opd, m)
m.react(done)
}

handler.command = ['bkad']
handler.tags = ['adpem']
handler.command = /^(opd)$/i

export default handler
