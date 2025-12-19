const { cmd } = require('../command');
const { silainfo, myquoted } = require('../config');

//=========== PING COMMAND ===========//
cmd({
    pattern: "ping",
    alias: ["pong", "speed", "latency"],
    desc: "Check bot response speed and latency",
    category: "main",
    react: "⚡",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const start = Date.now();
        
        // Send processing message
        await conn.sendMessage(from, {
            text: "*📡 𝐏𝐈𝐍𝐆𝐈𝐍𝐆...*",
            ...silainfo()
        }, { quoted: myquoted });
        
        const end = Date.now();
        const latency = end - start;
        
        // Create ping response
        const pingMessage = `╔► 𝐏𝐨𝐧𝐠! 🏓
╚► 𝐋𝐚𝐭𝐞𝐧𝐜𝐲: ${latency}𝐦𝐬
╔► 𝐁𝐨𝐭 𝐒𝐭𝐚𝐭𝐮𝐬
╚► → 𝐎𝐧𝐥𝐢𝐧𝐞: ✓
╚► → 𝐒𝐩𝐞𝐞𝐝: ${latency < 500 ? '𝙵𝚊𝚜𝚝 ⚡' : latency < 1000 ? '𝙶𝚘𝚘𝚍 👍' : '𝚂𝚕𝚘𝚠 🐢'}

> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡`;

        await conn.sendMessage(from, {
            text: pingMessage,
            ...silainfo()
        }, { quoted: myquoted });

    } catch (error) {
        console.error("Ping command error:", error);
        await conn.sendMessage(from, {
            text: `*❌ 𝐄𝐑𝐑𝐎𝐑*\n\n𝐅𝐚𝐢𝐥𝐞𝐝 𝐭𝐨 𝐜𝐡𝐞𝐜𝐤 𝐩𝐢𝐧𝐠\n\n*𝐑𝐞𝐚𝐬𝐨𝐧:* ${error.message}`,
            ...silainfo()
        }, { quoted: myquoted });
    }
});

//=========== PING2 COMMAND (SIMPLE VERSION) ===========//
cmd({
    pattern: "ping2",
    alias: ["p", "test"],
    desc: "Simple ping test",
    category: "main",
    react: "🏓",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const start = Date.now();
        
        // Send processing message
        await conn.sendMessage(from, {
            text: "*⚡ 𝐓𝐄𝐒𝐓𝐈𝐍𝐆 𝐒𝐏𝐄𝐄𝐃...*",
            ...silainfo()
        }, { quoted: myquoted });
        
        const end = Date.now();
        const latency = end - start;
        
        // Simple response
        const pingMessage = `🏓 *𝐏𝐨𝐧𝐠!*\n⚡ 𝐒𝐩𝐞𝐞𝐝: ${latency}𝐦𝐬\n✅ 𝐁𝐨𝐭 𝐢𝐬 𝐚𝐜𝐭𝐢𝐯𝐞!\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡`;
        
        await conn.sendMessage(from, {
            text: pingMessage,
            ...silainfo()
        }, { quoted: myquoted });

    } catch (error) {
        console.error("Ping2 error:", error);
        await conn.sendMessage(from, {
            text: `*❌ 𝐄𝐑𝐑𝐎𝐑*\n\n𝐅𝐚𝐢𝐥𝐞𝐝 𝐭𝐨 𝐭𝐞𝐬𝐭 𝐩𝐢𝐧𝐠\n\n*𝐑𝐞𝐚𝐬𝐨𝐧:* ${error.message}`,
            ...silainfo()
        }, { quoted: myquoted });
    }
});
