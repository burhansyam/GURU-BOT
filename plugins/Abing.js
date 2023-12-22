import fetch from 'node-fetch';
import { generateImageFiles, generateImagesLinks } from 'bimg';



let handler = async (m, { conn, text, usedPrefix, command }) => {

if (!text) throw `*Deskripsikan secara detail yang mau di gambar.Max 500 huruf*\n*Contoh penggunaan* : *◉ ${usedPrefix + command} Gambar realistis kuda terbang*`;
   m.react(rwait)

    m.reply('*dalam proses...*');

    let prompt = text;
    const imageLinks = await generateImagesLinks(prompt);
    const sijjin = imageLinks[0];

    try {
      const response = await fetch(sijjin);
      if (!response.ok) throw `❎Gagal mengambil data`;
      const imageBuffer = await response.buffer();

      conn.sendFile(m.chat, imageBuffer, 'img.jpg', `*coded by @burhansyam_*`, m);

      m.react(dmoji);

    } catch (error) {
        console.error(error);
      m.reply(`❎Terjadi kesalahan server.`);
    }


  };

handler.help = ['dalle'];
handler.tags = ['AI'];
handler.command = ['bing'];
export default handler;
