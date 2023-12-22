import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*Deskripsikan secara detail yang mau di gambar.Max 500 huruf*\n*Contoh penggunaan* : *◉ ${usedPrefix + command} Gambar realistis kuda terbang*`;
   m.react(rwait)
try {
    m.reply('*Sek sabar tak gambare!*');

    const endpoint = `https://beetv.my.id/ai/img.php?p=${encodeURIComponent(text)}`;
    const response = await fetch(endpoint);

    if (response.ok) {
      const imageBuffer = await response.buffer();
      await conn.sendFile(m.chat, imageBuffer, 'image.png', `*coded by @burhansyam_*`, m);

    } else {
      throw '❎Gagal mengambil data';
    }
  } catch {
    throw '❎Telah terjadi kesalahan, Bing lambat merespon!.';
  }
};

handler.help = ['dalle'];
handler.tags = ['AI'];
handler.command = ['bur'];

export default handler;