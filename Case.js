case 'tagall': {
    if (!m.isGroup) return reply('Perintah ini hanya bisa digunakan di grup!');
    
    // Ambil pesan setelah '.taggall'
    let message = m.body.slice(8).trim(); // Mengambil semua teks setelah perintah '.taggall'
    
    // Tambahkan hiasan pada teks tag
    let text = "✧･ﾟ: *✧･ﾟ:* *Tag All Members* *:･ﾟ✧*:･ﾟ✧\n\n";
    
    let mentions = [];

    // Jika ada pesan yang diketik setelah '.taggall', tambahkan ke dalam teks dengan hiasan
    if (message.length > 0) {
        text += `✨ ${message} ✨\n\n`;
    }

    // Loop melalui peserta grup dan tambahkan ke teks
    participants.forEach(participant => {
        mentions.push(participant.id);
        text += `@${participant.id.split('@')[0]}\n\n`;  // Setiap peserta di baris baru dengan jarak antar mention
    });

    // Kirim pesan dengan mention
    Rifky.sendMessage(from, { text: text, mentions: mentions });
}
break;
