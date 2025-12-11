const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

//=========== Fake vCard ===========//
const fakevCard = {
    key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "status@broadcast"
    },
    message: {
        contactMessage: {
            displayName: "© SILA AI 🎅",
            vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:SILA AI CHRISTMAS\nORG:SILA AI;\nTEL;type=CELL;type=VOICE;waid=255612491554:+255612491554\nEND:VCARD`
        }
    }
};

//=========== ALIVE COMMAND ===========//
cmd({
    pattern: "alive",
    alias: ["status", "runtime", "uptime"],
    desc: "Check uptime and system status",
    category: "main",
    react: "⚡",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {

        const txt = `
╔═══ ✦ *SILA MD STATUS* ✦
║
║ • ⏳ *Uptime:*  ${runtime(process.uptime())}
║ • 📟 *RAM:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
║ • ⚙ *Host:* ${os.hostname()}
║ • 👑 *Owner:* SILA AI
║ • 🚀 *Version:* 3.0 BETA
║
╚══❯  Bot is Active & Running ✓`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/jwmx1j.jpg` },
                caption: txt,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363402325089913@newsletter',
                        newsletterName: 'SILA MD',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: fakevCard }
        );

    } catch (e) {
        console.error("Alive command error:", e);
        reply(`Error: ${e.message}`);
    }
});
