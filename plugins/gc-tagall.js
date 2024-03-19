const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = ` ${pesan}`;
  let teks = `*𝐑𝐞𝐯𝐢𝐯𝐚𝐧 𝐏𝐚𝐫 𝐃𝐞 𝐃𝐢𝐛𝐮𝐣𝐢𝐭𝐱𝐬 🪽*\n──────────\n ${oi} 𝐏𝐚𝐫𝐭𝐢𝐜𝐢𝐩𝐚𝐧𝐭𝐞𝐬!!\n`;
  for (const mem of participants) {
    teks += `✫ @${mem.id.split('@')[0]}\n`;
  }
  teks += `*└* 𝕯𝖎𝖝-𝖍𝖚𝖎𝖙ㅤ𝕭𝖔𝖙 🕷 🇸🇾`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;