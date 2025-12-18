const config = require('../config')
const { cmd, commands } = require('../command');
const os = require("os")
const { runtime } = require('../lib/functions')
const axios = require('axios')

// FakevCard
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
    pattern: "menu",
    alias: ["allmenu","fullmenu"],
    use: '.menu',
    desc: "menu the bot",
    category: "menu",
    react: "⚡",
    filename: __filename
}, 
async (conn, mek, m, { from, reply }) => {
    try {
        let dec = `
╭▸─────────────────▸╮
│    「 𝐒𝐈𝐋𝐀 𝐌𝐃 𝐌𝐄𝐍𝐔 」    │
╰▸─────────────────▸╯

╔► 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐒
╚► → song
╚► → play
╚► → ytmp3
╚► → ytmp4
╚► → video
╚► → audio
╚► → tiktok
╚► → fb
╚► → ig
╚► → twitter
╚► → spotify
╚► → pinterest
╚► → apk
╚► → mediafire
╚► → gdrive

╔► 𝐆𝐑𝐎𝐔𝐏
╚► → add
╚► → kick
╚► → promote
╚► → demote
╚► → ginfo
╚► → grouplink
╚► → tagall
╚► → tagadmins
╚► → hidetag
╚► → invite
╚► → setwelcome
╚► → goodbye
╚► → lockgc
╚► → unlockgc
╚► → mute
╚► → unmute

╔► 𝐎𝐖𝐍𝐄𝐑
╚► → block
╚► → unblock
╚► → restart
╚► → shutdown
╚► → setpp
╚► → broadcast
╚► → eval
╚► → exec

╔► 𝐅𝐔𝐍 & 𝐆𝐀𝐌𝐄𝐒
╚► → sticker
╚► → emojimix
╚► → rate
╚► → ship
╚► → joke
╚► → truth
╚► → dare
╚► → fact
╚► → character
╚► → pickup

╔► 𝐀𝐈 & 𝐓𝐎𝐎𝐋𝐒
╚► → ai
╚► → gpt
╚► → gpt4
╚► → bing
╚► → imagine
╚► → trt
╚► → tts
╚► → fancy
╚► → base64
╚► → binary

╔► 𝐈𝐍𝐅𝐎
╚► → alive
╚► → ping
╚► → speed
╚► → runtime
╚► → owner
╚► → repo
╚► → menu

╔► 𝐎𝐓𝐇𝐄𝐑𝐒
╚► → anime
╚► → waifu
╚► → logo
╚► → weather
╚► → news
╚► → wikipedia
╚► → githubstalk

╭▸─────────────────▸╮
│    — 𝐒𝐈𝐋𝐀 𝐓𝐄𝐂𝐇 —    │
╰▸─────────────────▸╯
> ${config.DESCRIPTION}`

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/jwmx1j.jpg` },
                caption: dec,
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
        console.log(e);
        reply(`${e}`);
    }
});
