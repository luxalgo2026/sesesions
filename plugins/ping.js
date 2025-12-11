const config = require('../config');
const { cmd, commands } = require('../command');

// Define fakevCard for ping commands
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

cmd({
    pattern: "ping",
    alias: ["speed","pong"],
    use: '.ping',
    desc: "Check bot's response time.",
    category: "main",
    react: "⚡",
    filename: __filename
},
async (conn, mek, m, { from, quoted, sender, reply }) => {
    try {
        const start = new Date().getTime();

        const reactionEmojis = ['🔥', '⚡', '🚀', '💨', '🎯', '🎉', '🌟', '💥', '🕐', '🔹'];
        const textEmojis = ['💎', '🏆', '⚡️', '🚀', '🎶', '🌠', '🌀', '🔱', '🛡️', '✨'];

        const reactionEmoji = reactionEmojis[Math.floor(Math.random() * reactionEmojis.length)];
        let textEmoji = textEmojis[Math.floor(Math.random() * textEmojis.length)];

        // Ensure reaction and text emojis are different
        while (textEmoji === reactionEmoji) {
            textEmoji = textEmojis[Math.floor(Math.random() * textEmojis.length)];
        }

        // Send reaction using conn.sendMessage()
        await conn.sendMessage(from, {
            react: { text: textEmoji, key: mek.key }
        });

        const end = new Date().getTime();
        const responseTime = (end - start) / 1000;

        const text = `╔═══════════════════════
║  *𝚂𝙸𝙻𝙰 𝙼𝙳 𝚂𝙿𝙴𝙴𝙳 𝚃𝙴𝚂𝚃*
╚═══════════════════════

┌─「 𝚂𝚃𝙰𝚃𝚄𝚂 」━━━━━━━━━━━━━━━
│ 
│  *🔄 Response Time:* ${responseTime.toFixed(2)}ms
│  *⚡ Status:* Active & Running
│  *📊 Performance:* Excellent
│ 
└────────────────────

*Response:* ${responseTime < 1 ? '⚡ Lightning Fast' : responseTime < 2 ? '🚀 Very Fast' : '✅ Good'}

*𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝚋𝚢 𝚂𝚒𝚕𝚊 𝚃𝚎𝚌𝚑*`;

        await conn.sendMessage(from, {
            text,
            ...fakevCard,
            contextInfo: {
                mentionedJid: [sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363402325089913@newsletter',
                    newsletterName: "SILA MD",
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in ping command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});

// ping2 command
cmd({
    pattern: "ping2",
    desc: "Check bot's response time.",
    category: "main",
    react: "🍂",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const startTime = Date.now()
        
        // Send initial message
        const message = await conn.sendMessage(from, { 
            text: '*🔍 𝙲𝙷𝙴𝙲𝙺𝙸𝙽𝙶 𝙱𝙾𝚃 𝚂𝙿𝙴𝙴𝙳...*',
            ...fakevCard
        })
        
        const endTime = Date.now()
        const ping = endTime - startTime
        
        // Determine status based on ping
        let status = '';
        let emoji = '';
        
        if (ping < 100) {
            status = '⚡ 𝙴𝚇𝙲𝙴𝙻𝙻𝙴𝙽𝚃';
            emoji = '⚡';
        } else if (ping < 300) {
            status = '🚀 𝚅𝙴𝚁𝚈 𝙵𝙰𝚂𝚃';
            emoji = '🚀';
        } else if (ping < 600) {
            status = '✅ 𝙶𝙾𝙾𝙳';
            emoji = '✅';
        } else if (ping < 1000) {
            status = '⚠️ 𝙰𝚅𝙴𝚁𝙰𝙶𝙴';
            emoji = '⚠️';
        } else {
            status = '🐢 𝚂𝙻𝙾𝚆';
            emoji = '🐢';
        }
        
        const pingText = `╔═══════════════════════
║  *𝚂𝙸𝙻𝙰 𝙼𝙳 𝙿𝙸𝙽𝙶 𝚁𝙴𝚂𝚄𝙻𝚃𝚂*
╚═══════════════════════

┌─「 𝙿𝙴𝚁𝙵𝙾𝚁𝙼𝙰𝙽𝙲𝙴 𝙰𝙽𝙰𝙻𝚈𝚂𝙸𝚂 」━━
│ 
│  *${emoji} Response Time:* ${ping}ms
│  *📈 Performance:* ${status}
│  *🎯 Accuracy:* ${ping < 200 ? 'High' : 'Normal'}
│  *🔧 Status:* Operational
│ 
└────────────────────

*📊 𝙲𝚘𝚗𝚗𝚎𝚌𝚝𝚒𝚘𝚗 𝚀𝚞𝚊𝚕𝚒𝚝𝚢:* ${ping < 100 ? 'Premium' : ping < 300 ? 'Good' : 'Standard'}

*𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝚋𝚢 𝚂𝚒𝚕𝚊 𝚃𝚎𝚌𝚑*`;

        await conn.sendMessage(from, { 
            text: pingText,
            ...fakevCard,
            contextInfo: {
                mentionedJid: [sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363402325089913@newsletter',
                    newsletterName: 'SILA MD',
                    serverMessageId: 144
                }
            }
        }, { quoted: message })
        
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
});

// ping3 command (additional ping option)
cmd({
    pattern: "ping3",
    alias: ["speedtest"],
    desc: "Advanced bot speed test.",
    category: "main",
    react: "📊",
    filename: __filename
},
async (conn, mek, m, { from, quoted, sender, reply }) => {
    try {
        const tests = [];
        const results = [];
        
        // Test 1: Basic response
        const start1 = Date.now();
        await conn.sendMessage(from, { 
            text: '🔄 𝚃𝙴𝚂𝚃𝙸𝙽𝙶...',
            ...fakevCard 
        });
        const end1 = Date.now();
        tests.push({ name: 'Basic Response', time: end1 - start1 });
        
        // Test 2: Reaction speed
        const start2 = Date.now();
        await conn.sendMessage(from, {
            react: { text: '⚡', key: mek.key }
        });
        const end2 = Date.now();
        tests.push({ name: 'Reaction Speed', time: end2 - start2 });
        
        // Test 3: Message processing
        const start3 = Date.now();
        const tempMsg = await conn.sendMessage(from, { 
            text: '📨 𝙿𝚁𝙾𝙲𝙴𝚂𝚂𝙸𝙽𝙶...',
            ...fakevCard 
        });
        const end3 = Date.now();
        tests.push({ name: 'Message Processing', time: end3 - start3 });
        
        // Calculate average
        const total = tests.reduce((sum, test) => sum + test.time, 0);
        const average = total / tests.length;
        
        // Create results text
        let resultsText = `╔═══════════════════════
║  *𝚂𝙸𝙻𝙰 𝙼𝙳 𝙰𝙳𝚅𝙰𝙽𝙲𝙴𝙳 𝚃𝙴𝚂𝚃*
╚═══════════════════════

┌─「 𝚃𝙴𝚂𝚃 𝚁𝙴𝚂𝚄𝙻𝚃𝚂 」━━━━━━━━━━━━━
│ 
│  *🔹 Basic Response:* ${tests[0].time}ms
│  *⚡ Reaction Speed:* ${tests[1].time}ms
│  *📨 Message Process:* ${tests[2].time}ms
│ 
│  *━━━━━━━━━━━━━━━━━━━━━━*
│  *📊 𝙰𝚅𝙴𝚁𝙰𝙶𝙴 𝚂𝙿𝙴𝙴𝙳:* ${average.toFixed(2)}ms
│  *🎯 𝚁𝙰𝙽𝙺𝙸𝙽𝙶:* ${average < 100 ? 'Premium' : average < 300 ? 'Gold' : average < 600 ? 'Silver' : 'Bronze'}
│ 
└────────────────────

*⚙️ 𝙱𝚘𝚝 𝚂𝚝𝚊𝚝𝚞𝚜:* ${average < 300 ? 'Optimal Performance' : 'Normal Operation'}

*𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝚋𝚢 𝚂𝚒𝚕𝚊 𝚃𝚎𝚌𝚑*`;

        await conn.sendMessage(from, {
            text: resultsText,
            ...fakevCard,
            contextInfo: {
                mentionedJid: [sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363402325089913@newsletter',
                    newsletterName: 'SILA MD',
                    serverMessageId: 145
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in ping3 command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});

// pong command (alternative)
cmd({
    pattern: "pong",
    desc: "Alternative ping command.",
    category: "main",
    react: "🏓",
    filename: __filename
},
async (conn, mek, m, { from, quoted, sender, reply }) => {
    try {
        const start = Date.now();
        
        const pingText = `╔═══════════════════════
║  *𝚂𝙸𝙻𝙰 𝙼𝙳 𝙿𝙾𝙽𝙶!*
╚═══════════════════════

┌─「 𝙱𝙾𝚃 𝚂𝚃𝙰𝚃𝚄𝚂 」━━━━━━━━━━━━━
│ 
│  *🏓 𝙿𝙾𝙽𝙶!*
│  *⚡ 𝚂𝚝𝚊𝚝𝚞𝚜:* Active
│  *🔧 𝚂𝚎𝚛𝚟𝚒𝚌𝚎:* Online
│  *📶 𝙲𝚘𝚗𝚗𝚎𝚌𝚝𝚒𝚘𝚗:* Stable
│ 
└────────────────────

*𝚃𝚑𝚎 𝚋𝚘𝚝 𝚒𝚜 𝚛𝚎𝚜𝚙𝚘𝚗𝚍𝚒𝚗𝚐 𝚗𝚘𝚛𝚖𝚊𝚕𝚕𝚢.*

*𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝚋𝚢 𝚂𝚒𝚕𝚊 𝚃𝚎𝚌𝚑*`;

        await conn.sendMessage(from, {
            text: pingText,
            ...fakevCard,
            contextInfo: {
                mentionedJid: [sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363402325089913@newsletter',
                    newsletterName: 'SILA MD',
                    serverMessageId: 146
                }
            }
        }, { quoted: mek });
        
        const end = Date.now();
        
        // Send follow-up with actual ping
        setTimeout(async () => {
            const actualPing = end - start;
            await conn.sendMessage(from, {
                text: `*📊 𝙰𝚌𝚝𝚞𝚊𝚕 𝚁𝚎𝚜𝚙𝚘𝚗𝚜𝚎: ${actualPing}ms*`,
                ...fakevCard
            });
        }, 500);

    } catch (e) {
        console.error("Error in pong command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});
