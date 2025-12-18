const { cmd } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const { silainfo, myquoted } = require('../config');

//=========== ALIVE COMMAND ===========//
cmd({
    pattern: "alive",
    alias: ["status", "runtime", "uptime", "on", "active"],
    desc: "Check bot status and system info",
    category: "main",
    react: "⚡",
    filename: __filename
},
async (conn, mek, m, { from, reply, pushName, sender }) => {
    try {
        // Calculate memory usage
        const used = process.memoryUsage();
        const usedMB = (used.heapUsed / 1024 / 1024).toFixed(2);
        const totalMB = (os.totalmem() / 1024 / 1024).toFixed(2);
        const freeMB = (os.freemem() / 1024 / 1024).toFixed(2);
        
        // Platform info
        const platform = os.platform();
        const arch = os.arch();
        const cpus = os.cpus().length;
        
        // Create status message with custom fonts
        const txt = `━━━〔 🎅 𝚂𝙸𝙻𝙰 𝙼𝙳 𝚂𝚃𝙰𝚃𝚄𝚂 🎅 〕━━━┈⊷
┃🎅│ 𝚄𝙿𝚃𝙸𝙼𝙴 :❯ ${runtime(process.uptime())}
┃🎅│ 𝚁𝙰𝙼 :❯ ${usedMB}MB / ${totalMB}MB
┃🎅│ 𝙵𝚁𝙴𝙴 𝚁𝙰𝙼 :❯ ${freeMB}MB
┃🎅│ 𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼 :❯ ${platform} ${arch}
┃🎅│ 𝙲𝙿𝚄𝚂 :❯ ${cpus} 𝙲𝙾𝚁𝙴𝚂
┃🎅│ 𝙾𝚆𝙽𝙴𝚁 :❯ 𝚂𝙸𝙻𝙰 𝙰𝙸
┃🎅│ 𝚅𝙴𝚁𝚂𝙸𝙾𝙽 :❯ 3.0 𝙱𝙴𝚃𝙰
╰━━━━━━━━━━━━━━━┈⊷

*𝙱𝙾𝚃 𝙸𝚂 𝙰𝙲𝚃𝙸𝚅𝙴 & 𝚁𝚄𝙽𝙽𝙸𝙽𝙶 ⚡*`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/jwmx1j.jpg` },
                caption: txt,
                ...silainfo()
            },
            { quoted: myquoted }
        );

    } catch (e) {
        console.error("Alive command error:", e);
        reply(`Error: ${e.message}`);
    }
});
