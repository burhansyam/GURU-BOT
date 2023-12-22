
import fetch from 'node-fetch'

export async function before(m, { conn }) {
if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let user = global.db.data.users[m.sender]
    
      if (!user.chatbot)
        return !0
        let api = await fetch(`https://xzn.wtf/api/openai?apikey=semangat&text=${m.text}`)
        let res = await api.json()
        m.reply(res.success.replace('simsimi', 'Burhansyam').replace('Simsimi', 'burhansyam').replace('sim simi', 'Burhansyam'))
    
}
