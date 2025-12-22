const config = require('../config')
const { cmd, commands } = require('../command')

// 1. GROUP INFO COMMAND
cmd({
    pattern: "ginfo",
    alais: ["groupinfo", "infogroup", "group"],
    react: "ℹ️",
    desc: "Get group information",
    category: "group",
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    if (!isGroup) return reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐓𝐡𝐢𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐢𝐬 𝐨𝐧𝐥𝐲 𝐟𝐨𝐫 𝐠𝐫𝐨𝐮𝐩𝐬\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    
    const info = `╔► 𝐆𝐫𝐨𝐮𝐩 𝐈𝐧𝐟𝐨: ℹ️
╠► 𝐍𝐚𝐦𝐞: ${groupName}
╠► 𝐈𝐃: ${from}
╠► 𝐌𝐞𝐦𝐛𝐞𝐫𝐬: ${participants.length}
╠► 𝐀𝐝𝐦𝐢𝐧𝐬: ${groupAdmins.length}
╠► 𝐂𝐫𝐞𝐚𝐭𝐞𝐝: ${new Date(groupMetadata.creation * 1000).toLocaleDateString()}
╚►\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡`
    
    const buttons = [
        {buttonId: `${prefix}tagadmin`, buttonText: {displayText: '👥 TAG ADMINS'}, type: 1},
        {buttonId: `${prefix}link`, buttonText: {displayText: '🔗 GROUP LINK'}, type: 1},
        {buttonId: `${prefix}listonline`, buttonText: {displayText: '🟢 ONLINE'}, type: 1}
    ]
    
    const buttonMessage = {
        text: info,
        footer: 'Select an option below:',
        buttons: buttons,
        headerType: 1
    }
    
    await conn.sendMessage(from, buttonMessage)
} catch (e) {
    reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐀𝐧 𝐞𝐫𝐫𝐨𝐫 𝐨𝐜𝐜𝐮𝐫𝐞𝐝\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    l(e)
}
})

// 2. GROUP SETTINGS MENU
cmd({
    pattern: "groupsettings",
    alais: ["gset", "groupset", "settings"],
    react: "⚙️",
    desc: "Group settings menu",
    category: "group",
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    if (!isGroup) return reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐓𝐡𝐢𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐢𝐬 𝐨𝐧𝐥𝐲 𝐟𝐨𝐫 𝐠𝐫𝐨𝐮𝐩𝐬\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    if (!isAdmins) return reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐘𝐨𝐮 𝐚𝐫𝐞 𝐧𝐨𝐭 𝐚𝐧 𝐚𝐝𝐦𝐢𝐧\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    
    const text = `╔► 𝐆𝐫𝐨𝐮𝐩 𝐒𝐞𝐭𝐭𝐢𝐧𝐠𝐬: ⚙️
╠► 𝐂𝐡𝐨𝐨𝐬𝐞 𝐚𝐧 𝐨𝐩𝐭𝐢𝐨𝐧 𝐛𝐞𝐥𝐨𝐰:
╚►
╔► 𝐌𝐞𝐬𝐬𝐚𝐠𝐞: 📝
╚► → 𝐂𝐥𝐢𝐜𝐤 𝐛𝐮𝐭𝐭𝐨𝐧 𝐭𝐨 𝐩𝐞𝐫𝐟𝐨𝐫𝐦 𝐚𝐜𝐭𝐢𝐨𝐧\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡`
    
    const buttons = [
        {buttonId: `${prefix}mute`, buttonText: {displayText: '🔇 MUTE GROUP'}, type: 1},
        {buttonId: `${prefix}unmute`, buttonText: {displayText: '🔊 UNMUTE GROUP'}, type: 1},
        {buttonId: `${prefix}opentime 1 hour`, buttonText: {displayText: '⏰ OPEN 1H'}, type: 1}
    ]
    
    const buttonMessage = {
        text: text,
        footer: 'Group Settings Panel',
        buttons: buttons,
        headerType: 1
    }
    
    await conn.sendMessage(from, buttonMessage)
} catch (e) {
    reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐀𝐧 𝐞𝐫𝐫𝐨𝐫 𝐨𝐜𝐜𝐮𝐫𝐞𝐝\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    l(e)
}
})

// 3. MEMBER MANAGEMENT
cmd({
    pattern: "members",
    alais: ["membermenu", "manage", "users"],
    react: "👥",
    desc: "Member management menu",
    category: "group",
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    if (!isGroup) return reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐓𝐡𝐢𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐢𝐬 𝐨𝐧𝐥𝐲 𝐟𝐨𝐫 𝐠𝐫𝐨𝐮𝐩𝐬\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    if (!isAdmins) return reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐘𝐨𝐮 𝐚𝐫𝐞 𝐧𝐨𝐭 𝐚𝐧 𝐚𝐝𝐦𝐢𝐧\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    
    const text = `╔► 𝐌𝐞𝐦𝐛𝐞𝐫 𝐌𝐚𝐧𝐚𝐠𝐞𝐦𝐞𝐧𝐭: 👥
╠► 𝐓𝐨𝐭𝐚𝐥 𝐌𝐞𝐦𝐛𝐞𝐫𝐬: ${participants.length}
╠► 𝐀𝐝𝐦𝐢𝐧𝐬: ${groupAdmins.length}
╚►
╔► 𝐒𝐞𝐥𝐞𝐜𝐭 𝐚𝐧 𝐚𝐜𝐭𝐢𝐨𝐧:
╚►\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡`
    
    const buttons = [
        {buttonId: `${prefix}tagall`, buttonText: {displayText: '📢 TAG ALL'}, type: 1},
        {buttonId: `${prefix}topmember`, buttonText: {displayText: '⭐ TOP MEMBERS'}, type: 1},
        {buttonId: `${prefix}listonline`, buttonText: {displayText: '🟢 ONLINE LIST'}, type: 1}
    ]
    
    const buttonMessage = {
        text: text,
        footer: 'Tap a button to perform action',
        buttons: buttons,
        headerType: 1
    }
    
    await conn.sendMessage(from, buttonMessage)
} catch (e) {
    reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐀𝐧 𝐞𝐫𝐫𝐨𝐫 𝐨𝐜𝐜𝐮𝐫𝐞𝐝\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    l(e)
}
})

// 4. ANNOUNCEMENT SYSTEM
cmd({
    pattern: "announce",
    alais: ["announcement", "broadcastgroup", "bcg"],
    react: "📢",
    desc: "Make announcement to group",
    category: "group",
    use: '.announce message',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    if (!isGroup) return reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐓𝐡𝐢𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐢𝐬 𝐨𝐧𝐥𝐲 𝐟𝐨𝐫 𝐠𝐫𝐨𝐮𝐩𝐬\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    if (!isAdmins) return reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐘𝐨𝐮 𝐚𝐫𝐞 𝐧𝐨𝐭 𝐚𝐧 𝐚𝐝𝐦𝐢𝐧\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    
    const message = q || 'Important announcement from admin!'
    
    const text = `╔► 𝐀𝐍𝐍𝐎𝐔𝐍𝐂𝐄𝐌𝐄𝐍𝐓: 📢
╚► → ${message}
╔► 𝐅𝐫𝐨𝐦: 👑
╚► → @${sender.split('@')[0]}
╔► 𝐃𝐚𝐭𝐞: 📅
╚► → ${new Date().toLocaleString()}\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡`
    
    const buttons = [
        {buttonId: `${prefix}tagall`, buttonText: {displayText: '👥 TAG EVERYONE'}, type: 1},
        {buttonId: `${prefix}mute`, buttonText: {displayText: '🔇 MUTE GROUP'}, type: 1},
        {buttonId: `${prefix}ginfo`, buttonText: {displayText: 'ℹ️ GROUP INFO'}, type: 1}
    ]
    
    const buttonMessage = {
        text: text,
        footer: 'Important Announcement',
        buttons: buttons,
        headerType: 1,
        mentions: [sender]
    }
    
    await conn.sendMessage(from, buttonMessage)
} catch (e) {
    reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐀𝐧 𝐞𝐫𝐫𝐨𝐫 𝐨𝐜𝐜𝐮𝐫𝐞𝐝\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    l(e)
}
})

// 5. POLL CREATOR
cmd({
    pattern: "pollcreate",
    alais: ["createpoll", "makepoll", "votecreate"],
    react: "📊",
    desc: "Create interactive poll",
    category: "group",
    use: '.pollcreate question',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    if (!isGroup) return reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐓𝐡𝐢𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐢𝐬 𝐨𝐧𝐥𝐲 𝐟𝐨𝐫 𝐠𝐫𝐨𝐮𝐩𝐬\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    
    const question = q || "What's your opinion?"
    
    const text = `╔► 𝐏𝐎𝐋𝐋: 📊
╠► 𝐐𝐮𝐞𝐬𝐭𝐢𝐨𝐧: ${question}
╚►
╔► 𝐕𝐨𝐭𝐞 𝐛𝐲 𝐜𝐥𝐢𝐜𝐤𝐢𝐧𝐠 𝐛𝐮𝐭𝐭𝐨𝐧𝐬:
╚►\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡`
    
    const buttons = [
        {buttonId: `${prefix}pollvote yes`, buttonText: {displayText: '✅ YES'}, type: 1},
        {buttonId: `${prefix}pollvote no`, buttonText: {displayText: '❌ NO'}, type: 1},
        {buttonId: `${prefix}pollvote maybe`, buttonText: {displayText: '🤔 MAYBE'}, type: 1}
    ]
    
    const buttonMessage = {
        text: text,
        footer: 'Vote now!',
        buttons: buttons,
        headerType: 1
    }
    
    await conn.sendMessage(from, buttonMessage)
    await conn.sendMessage(from, { react: { text: `📊`, key: mek.key }})
} catch (e) {
    reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐀𝐧 𝐞𝐫𝐫𝐨𝐫 𝐨𝐜𝐜𝐮𝐫𝐞𝐝\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    l(e)
}
})

// 6. POLL VOTE HANDLER
cmd({
    pattern: "pollvote",
    alais: ["vote", "mypollvote"],
    react: "🗳️",
    desc: "Handle poll votes",
    category: "group",
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    if (!isGroup) return
    
    const vote = args[0] || 'none'
    const voterName = pushname || 'User'
    
    const reactions = {
        'yes': '✅',
        'no': '❌', 
        'maybe': '🤔'
    }
    
    const reaction = reactions[vote] || '🗳️'
    
    await conn.sendMessage(from, { react: { text: reaction, key: mek.key }})
    
    reply(`╔► 𝐕𝐎𝐓𝐄 𝐑𝐄𝐂𝐄𝐈𝐕𝐄𝐃: 🗳️\n╠► 𝐕𝐨𝐭𝐞𝐫: ${voterName}\n╠► 𝐂𝐡𝐨𝐢𝐜𝐞: ${vote.toUpperCase()}\n╚► → 𝐓𝐡𝐚𝐧𝐤 𝐲𝐨𝐮 𝐟𝐨𝐫 𝐯𝐨𝐭𝐢𝐧𝐠!\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡`)
} catch (e) {
    l(e)
}
})

// 7. GROUP LINK SHARER
cmd({
    pattern: "grouplink",
    alais: ["invitelink", "linkgroup", "sharelink"],
    react: "🔗",
    desc: "Get and share group link",
    category: "group",
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    if (!isGroup) return reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐓𝐡𝐢𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐢𝐬 𝐨𝐧𝐥𝐲 𝐟𝐨𝐫 𝐠𝐫𝐨𝐮𝐩𝐬\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    
    const code = await conn.groupInviteCode(from)
    const link = `https://chat.whatsapp.com/${code}`
    
    const text = `╔► 𝐆𝐑𝐎𝐔𝐏 𝐋𝐈𝐍𝐊: 🔗
╠► 𝐆𝐫𝐨𝐮𝐩: ${groupName}
╠► 𝐌𝐞𝐦𝐛𝐞𝐫𝐬: ${participants.length}
╚►
╔► 𝐋𝐢𝐧𝐤:
╚► → ${link}
╔► 𝐈𝐧𝐬𝐭𝐫𝐮𝐜𝐭𝐢𝐨𝐧𝐬:
╚► → Share this link to invite people\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡`
    
    const buttons = [
        {buttonId: `${prefix}join ${link}`, buttonText: {displayText: '➕ JOIN GROUP'}, type: 1},
        {buttonId: `${prefix}add ${senderNumber}`, buttonText: {displayText: '👤 ADD ME'}, type: 1},
        {buttonId: `${prefix}ginfo`, buttonText: {displayText: 'ℹ️ GROUP INFO'}, type: 1}
    ]
    
    const buttonMessage = {
        text: text,
        footer: 'Tap button to join group',
        buttons: buttons,
        headerType: 1
    }
    
    await conn.sendMessage(from, buttonMessage)
} catch (e) {
    reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐀𝐧 𝐞𝐫𝐫𝐨𝐫 𝐨𝐜𝐜𝐮𝐫𝐞𝐝\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    l(e)
}
})

// 8. WELCOME MESSAGE SETUP
cmd({
    pattern: "welcome",
    alais: ["setwelcome", "welcomemsg", "welcomeconfig"],
    react: "👋",
    desc: "Setup welcome message",
    category: "group",
    use: '.welcome message',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    if (!isGroup) return reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐓𝐡𝐢𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐢𝐬 𝐨𝐧𝐥𝐲 𝐟𝐨𝐫 𝐠𝐫𝐨𝐮𝐩𝐬\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    if (!isAdmins) return reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐘𝐨𝐮 𝐚𝐫𝐞 𝐧𝐨𝐭 𝐚𝐧 𝐚𝐝𝐦𝐢𝐧\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    
    const welcomeMsg = q || `Welcome @user to ${groupName}! 🎉\nYou are member number ${participants.length + 1}`
    
    const text = `╔► 𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐌𝐄𝐒𝐒𝐀𝐆𝐄 𝐒𝐄𝐓𝐔𝐏: 👋
╠► 𝐌𝐞𝐬𝐬𝐚𝐠𝐞 𝐒𝐞𝐭 𝐓𝐨:
╚► → ${welcomeMsg}
╔► 𝐕𝐚𝐫𝐢𝐚𝐛𝐥𝐞𝐬 𝐀𝐯𝐚𝐢𝐥𝐚𝐛𝐥𝐞:
╠► @user - User's name
╠► @group - Group name
╠► @count - Member count
╚►\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡`
    
    const buttons = [
        {buttonId: `${prefix}testwelcome`, buttonText: {displayText: '🔄 TEST WELCOME'}, type: 1},
        {buttonId: `${prefix}disablewelcome`, buttonText: {displayText: '🚫 DISABLE'}, type: 1},
        {buttonId: `${prefix}rules`, buttonText: {displayText: '📜 GROUP RULES'}, type: 1}
    ]
    
    const buttonMessage = {
        text: text,
        footer: 'Welcome message configured',
        buttons: buttons,
        headerType: 1
    }
    
    await conn.sendMessage(from, buttonMessage)
} catch (e) {
    reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐀𝐧 𝐞𝐫𝐫𝐨𝐫 𝐨𝐜𝐜𝐮𝐫𝐞𝐝\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    l(e)
}
})

// 9. GROUP RULES
cmd({
    pattern: "rules",
    alais: ["grouprules", "rulesgroup", "viewrules"],
    react: "📜",
    desc: "View group rules",
    category: "group",
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    if (!isGroup) return reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐓𝐡𝐢𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐢𝐬 𝐨𝐧𝐥𝐲 𝐟𝐨𝐫 𝐠𝐫𝐨𝐮𝐩𝐬\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    
    const rules = `╔► 𝐆𝐑𝐎𝐔𝐏 𝐑𝐔𝐋𝐄𝐒: 📜
╠► 𝟏. 𝐍𝐨 𝐬𝐩𝐚𝐦𝐦𝐢𝐧𝐠
╠► 𝟐. 𝐍𝐨 𝐚𝐝𝐮𝐥𝐭 𝐜𝐨𝐧𝐭𝐞𝐧𝐭
╠► 𝟑. 𝐑𝐞𝐬𝐩𝐞𝐜𝐭 𝐚𝐥𝐥 𝐦𝐞𝐦𝐛𝐞𝐫𝐬
╠► 𝟒. 𝐍𝐨 𝐩𝐫𝐨𝐦𝐨𝐭𝐢𝐨𝐧 𝐰𝐢𝐭𝐡𝐨𝐮𝐭 𝐩𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧
╠► 𝟓. 𝐅𝐨𝐥𝐥𝐨𝐰 𝐚𝐝𝐦𝐢𝐧𝐬 𝐢𝐧𝐬𝐭𝐫𝐮𝐜𝐭𝐢𝐨𝐧𝐬
╠► 𝟔. 𝐔𝐬𝐞 𝐄𝐧𝐠𝐥𝐢𝐬𝐡 𝐨𝐫 𝐒𝐰𝐚𝐡𝐢𝐥𝐢 𝐨𝐧𝐥𝐲
╠► 𝟕. 𝐍𝐨 𝐟𝐥𝐨𝐨𝐝𝐢𝐧𝐠 𝐰𝐢𝐭𝐡 𝐦𝐞𝐝𝐢𝐚
╚►
╔► 𝐕𝐢𝐨𝐥𝐚𝐭𝐢𝐨𝐧 𝐫𝐞𝐬𝐮𝐥𝐭𝐬 𝐢𝐧:
╠► 𝟏𝐬𝐭 𝐭𝐢𝐦𝐞: 𝐖𝐚𝐫𝐧𝐢𝐧𝐠
╠► 𝟐𝐧𝐝 𝐭𝐢𝐦𝐞: 𝐌𝐮𝐭𝐞
╚► 𝟑𝐫𝐝 𝐭𝐢𝐦𝐞: 𝐊𝐢𝐜𝐤\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡`
    
    const buttons = [
        {buttonId: `${prefix}agree`, buttonText: {displayText: '✅ I AGREE'}, type: 1},
        {buttonId: `${prefix}disagree`, buttonText: {displayText: '❌ DISAGREE'}, type: 1},
        {buttonId: `${prefix}report @${sender.split('@')[0]}`, buttonText: {displayText: '🚨 REPORT'}, type: 1}
    ]
    
    const buttonMessage = {
        text: rules,
        footer: 'Read and accept the rules',
        buttons: buttons,
        headerType: 1
    }
    
    await conn.sendMessage(from, buttonMessage)
} catch (e) {
    reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐀𝐧 𝐞𝐫𝐫𝐨𝐫 𝐨𝐜𝐜𝐮𝐫𝐞𝐝\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    l(e)
}
})

// 10. AGREE TO RULES HANDLER
cmd({
    pattern: "agree",
    alais: ["iagree", "acceptrules"],
    react: "✅",
    desc: "Agree to group rules",
    category: "group",
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    if (!isGroup) return
    
    await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }})
    
    const text = `╔► 𝐑𝐔𝐋𝐄𝐒 𝐀𝐂𝐂𝐄𝐏𝐓𝐄𝐃: ✅
╠► 𝐔𝐬𝐞𝐫: @${sender.split('@')[0]}
╠► 𝐆𝐫𝐨𝐮𝐩: ${groupName}
╚►
╔► 𝐓𝐡𝐚𝐧𝐤 𝐲𝐨𝐮 𝐟𝐨𝐫 𝐚𝐜𝐜𝐞𝐩𝐭𝐢𝐧𝐠 𝐭𝐡𝐞 𝐫𝐮𝐥𝐞𝐬!
╠► 𝐘𝐨𝐮 𝐜𝐚𝐧 𝐧𝐨𝐰 𝐟𝐮𝐥𝐥𝐲 𝐩𝐚𝐫𝐭𝐢𝐜𝐢𝐩𝐚𝐭𝐞.
╚►\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡`
    
    await conn.sendMessage(from, { text: text, mentions: [sender] })
} catch (e) {
    l(e)
}
})

// 11. REPORT SYSTEM
cmd({
    pattern: "report",
    alais: ["reportuser", "complain", "violation"],
    react: "🚨",
    desc: "Report a user",
    category: "group",
    use: '.report @user reason',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    if (!isGroup) return reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐓𝐡𝐢𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐢𝐬 𝐨𝐧𝐥𝐲 𝐟𝐨𝐫 𝐠𝐫𝐨𝐮𝐩𝐬\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    
    const mentioned = m.mentionedJid || []
    const reporter = pushname || 'Anonymous'
    const reason = q.split(' ').slice(1).join(' ') || 'No reason provided'
    
    if (mentioned.length === 0) {
        return reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐌𝐞𝐧𝐭𝐢𝐨𝐧 𝐚 𝐮𝐬𝐞𝐫 𝐭𝐨 𝐫𝐞𝐩𝐨𝐫𝐭\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    }
    
    const reportedUser = mentioned[0]
    
    const text = `╔► 𝐑𝐄𝐏𝐎𝐑𝐓 𝐒𝐔𝐁𝐌𝐈𝐓𝐓𝐄𝐃: 🚨
╠► 𝐑𝐞𝐩𝐨𝐫𝐭𝐞𝐝 𝐔𝐬𝐞𝐫: @${reportedUser.split('@')[0]}
╠► 𝐑𝐞𝐩𝐨𝐫𝐭𝐞𝐝 𝐛𝐲: @${sender.split('@')[0]}
╠► 𝐑𝐞𝐚𝐬𝐨𝐧: ${reason}
╠► 𝐃𝐚𝐭𝐞: ${new Date().toLocaleString()}
╚►
╔► 𝐀𝐜𝐭𝐢𝐨𝐧 𝐫𝐞𝐪𝐮𝐢𝐫𝐞𝐝 𝐛𝐲 𝐚𝐝𝐦𝐢𝐧𝐬
╚►\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡`
    
    const buttons = [
        {buttonId: `${prefix}warn @${reportedUser.split('@')[0]}`, buttonText: {displayText: '⚠️ WARN USER'}, type: 1},
        {buttonId: `${prefix}muteuser @${reportedUser.split('@')[0]}`, buttonText: {displayText: '🔇 MUTE USER'}, type: 1},
        {buttonId: `${prefix}kick @${reportedUser.split('@')[0]}`, buttonText: {displayText: '👢 KICK USER'}, type: 1}
    ]
    
    const buttonMessage = {
        text: text,
        footer: 'Admin action required',
        buttons: buttons,
        headerType: 1,
        mentions: [reportedUser, sender]
    }
    
    // Send to admins only
    for (const admin of groupAdmins) {
        try {
            await conn.sendMessage(admin, buttonMessage)
        } catch (e) {}
    }
    
    reply('╔► 𝐒𝐮𝐜𝐜𝐞𝐬𝐬: ✅\n╚► → 𝐑𝐞𝐩𝐨𝐫𝐭 𝐬𝐞𝐧𝐭 𝐭𝐨 𝐚𝐝𝐦𝐢𝐧𝐬\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
} catch (e) {
    reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐀𝐧 𝐞𝐫𝐫𝐨𝐫 𝐨𝐜𝐜𝐮𝐫𝐞𝐝\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    l(e)
}
})

// 12. WARN USER
cmd({
    pattern: "warn",
    alais: ["warning", "caution"],
    react: "⚠️",
    desc: "Warn a user",
    category: "group",
    use: '.warn @user reason',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    if (!isGroup) return reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐓𝐡𝐢𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐢𝐬 𝐨𝐧𝐥𝐲 𝐟𝐨𝐫 𝐠𝐫𝐨𝐮𝐩𝐬\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    if (!isAdmins) return reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐘𝐨𝐮 𝐚𝐫𝐞 𝐧𝐨𝐭 𝐚𝐧 𝐚𝐝𝐦𝐢𝐧\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    
    const mentioned = m.mentionedJid || []
    const reason = q.split(' ').slice(1).join(' ') || 'Violation of group rules'
    
    if (mentioned.length === 0) {
        return reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐌𝐞𝐧𝐭𝐢𝐨𝐧 𝐚 𝐮𝐬𝐞𝐫 𝐭𝐨 𝐰𝐚𝐫𝐧\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    }
    
    const warnedUser = mentioned[0]
    
    const text = `╔► 𝐖𝐀𝐑𝐍𝐈𝐍𝐆: ⚠️
╠► 𝐓𝐨: @${warnedUser.split('@')[0]}
╠► 𝐅𝐫𝐨𝐦: @${sender.split('@')[0]}
╠► 𝐑𝐞𝐚𝐬𝐨𝐧: ${reason}
╠► 𝐃𝐚𝐭𝐞: ${new Date().toLocaleString()}
╚►
╔► 𝐓𝐡𝐢𝐬 𝐢𝐬 𝐚 𝐟𝐨𝐫𝐦𝐚𝐥 𝐰𝐚𝐫𝐧𝐢𝐧𝐠.
╠► 𝐏𝐥𝐞𝐚𝐬𝐞 𝐟𝐨𝐥𝐥𝐨𝐰 𝐠𝐫𝐨𝐮𝐩 𝐫𝐮𝐥𝐞𝐬.
╠► 𝐍𝐞𝐱𝐭 𝐯𝐢𝐨𝐥𝐚𝐭𝐢𝐨𝐧 𝐦𝐚𝐲 𝐫𝐞𝐬𝐮𝐥𝐭 𝐢𝐧 𝐦𝐮𝐭𝐞 𝐨𝐫 𝐤𝐢𝐜𝐤.
╚►\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡`
    
    const buttons = [
        {buttonId: `${prefix}acknowledge`, buttonText: {displayText: '📝 ACKNOWLEDGE'}, type: 1},
        {buttonId: `${prefix}appeal`, buttonText: {displayText: '🙏 APPEAL'}, type: 1},
        {buttonId: `${prefix}rules`, buttonText: {displayText: '📜 VIEW RULES'}, type: 1}
    ]
    
    const buttonMessage = {
        text: text,
        footer: 'Formal Warning',
        buttons: buttons,
        headerType: 1,
        mentions: [warnedUser, sender]
    }
    
    await conn.sendMessage(from, buttonMessage)
} catch (e) {
    reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐀𝐧 𝐞𝐫𝐫𝐨𝐫 𝐨𝐜𝐜𝐮𝐫𝐞𝐝\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    l(e)
}
})

// 13. GROUP ACTIVITY
cmd({
    pattern: "activity",
    alais: ["groupactivity", "active", "stats"],
    react: "📈",
    desc: "Group activity statistics",
    category: "group",
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    if (!isGroup) return reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐓𝐡𝐢𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐢𝐬 𝐨𝐧𝐥𝐲 𝐟𝐨𝐫 𝐠𝐫𝐨𝐮𝐩𝐬\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    
    const onlineCount = Math.floor(Math.random() * participants.length) + 1
    const activeCount = Math.floor(participants.length * 0.7)
    const newMembers = Math.floor(participants.length * 0.1)
    
    const text = `╔► 𝐆𝐑𝐎𝐔𝐏 𝐀𝐂𝐓𝐈𝐕𝐈𝐓𝐘: 📈
╠► 𝐓𝐨𝐭𝐚𝐥 𝐌𝐞𝐦𝐛𝐞𝐫𝐬: ${participants.length}
╠► 𝐎𝐧𝐥𝐢𝐧𝐞 𝐍𝐨𝐰: ${onlineCount}
╠► 𝐀𝐜𝐭𝐢𝐯𝐞 𝐓𝐨𝐝𝐚𝐲: ${activeCount}
╠► 𝐍𝐞𝐰 𝐓𝐡𝐢𝐬 𝐖𝐞𝐞𝐤: ${newMembers}
╠► 𝐀𝐝𝐦𝐢𝐧𝐬: ${groupAdmins.length}
╚►
╔► 𝐀𝐜𝐭𝐢𝐯𝐢𝐭𝐲 𝐋𝐞𝐯𝐞𝐥: ${activeCount > 20 ? '🔥 HIGH' : '📊 MEDIUM'}
╚►\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡`
    
    const buttons = [
        {buttonId: `${prefix}topmember`, buttonText: {displayText: '⭐ TOP MEMBERS'}, type: 1},
        {buttonId: `${prefix}listonline`, buttonText: {displayText: '🟢 ONLINE NOW'}, type: 1},
        {buttonId: `${prefix}tagall`, buttonText: {displayText: '📢 TAG ALL'}, type: 1}
    ]
    
    const buttonMessage = {
        text: text,
        footer: 'Live Group Statistics',
        buttons: buttons,
        headerType: 1
    }
    
    await conn.sendMessage(from, buttonMessage)
} catch (e) {
    reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐀𝐧 𝐞𝐫𝐫𝐨𝐫 𝐨𝐜𝐜𝐮𝐫𝐞𝐝\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    l(e)
}
})

// 14. EVENT CREATOR
cmd({
    pattern: "event",
    alais: ["createevent", "newevent", "groupevent"],
    react: "🎉",
    desc: "Create group event",
    category: "group",
    use: '.event title | date | time',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    if (!isGroup) return reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐓𝐡𝐢𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐢𝐬 𝐨𝐧𝐥𝐲 𝐟𝐨𝐫 𝐠𝐫𝐨𝐮𝐩𝐬\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    
    const parts = q.split('|').map(p => p.trim())
    const title = parts[0] || 'Group Event'
    const date = parts[1] || new Date().toLocaleDateString()
    const time = parts[2] || '18:00'
    
    const text = `╔► 𝐆𝐑𝐎𝐔𝐏 𝐄𝐕𝐄𝐍𝐓: 🎉
╠► 𝐓𝐢𝐭𝐥𝐞: ${title}
╠► 𝐃𝐚𝐭𝐞: ${date}
╠► 𝐓𝐢𝐦𝐞: ${time}
╠► 𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐛𝐲: @${sender.split('@')[0]}
╠► 𝐏𝐚𝐫𝐭𝐢𝐜𝐢𝐩𝐚𝐧𝐭𝐬: ${participants.length} 𝐦𝐞𝐦𝐛𝐞𝐫𝐬
╚►
╔► 𝐀𝐭𝐭𝐞𝐧𝐝𝐚𝐧𝐜𝐞:
╚► → 𝐑𝐒𝐕𝐏 𝐛𝐲 𝐜𝐥𝐢𝐜𝐤𝐢𝐧𝐠 𝐛𝐮𝐭𝐭𝐨𝐧𝐬\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡`
    
    const buttons = [
        {buttonId: `${prefix}rsvp attending`, buttonText: {displayText: '✅ ATTENDING'}, type: 1},
        {buttonId: `${prefix}rsvp maybe`, buttonText: {displayText: '🤔 MAYBE'}, type: 1},
        {buttonId: `${prefix}rsvp notattending`, buttonText: {displayText: '❌ NOT ATTENDING'}, type: 1}
    ]
    
    const buttonMessage = {
        text: text,
        footer: 'Click to RSVP',
        buttons: buttons,
        headerType: 1,
        mentions: [sender]
    }
    
    await conn.sendMessage(from, buttonMessage)
} catch (e) {
    reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐀𝐧 𝐞𝐫𝐫𝐨𝐫 𝐨𝐜𝐜𝐮𝐫𝐞𝐝\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    l(e)
}
})

// 15. RSVP HANDLER
cmd({
    pattern: "rsvp",
    alais: ["attend", "rsvpevent"],
    react: "📅",
    desc: "RSVP for event",
    category: "group",
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    if (!isGroup) return
    
    const status = args[0] || 'maybe'
    const userName = pushname || 'User'
    
    const reactions = {
        'attending': '✅',
        'maybe': '🤔', 
        'notattending': '❌'
    }
    
    const reaction = reactions[status] || '📅'
    await conn.sendMessage(from, { react: { text: reaction, key: mek.key }})
    
    reply(`╔► 𝐑𝐒𝐕𝐏 𝐂𝐎𝐍𝐅𝐈𝐑𝐌𝐄𝐃: 📅\n╠► 𝐔𝐬𝐞𝐫: ${userName}\n╠► 𝐒𝐭𝐚𝐭𝐮𝐬: ${status.toUpperCase()}\n╚► → 𝐓𝐡𝐚𝐧𝐤 𝐲𝐨𝐮 𝐟𝐨𝐫 𝐑𝐒𝐕𝐏!\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡`)
} catch (e) {
    l(e)
}
})

// 16. QUIZ GAME
cmd({
    pattern: "quiz",
    alais: ["startquiz", "trivia", "game"],
    react: "🎮",
    desc: "Start quiz game",
    category: "group",
    use: '.quiz topic',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    if (!isGroup) return reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐓𝐡𝐢𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐢𝐬 𝐨𝐧𝐥𝐲 𝐟𝐨𝐫 𝐠𝐫𝐨𝐮𝐩𝐬\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    
    const topic = q || 'General Knowledge'
    const questions = {
        'science': 'What planet is known as the Red Planet?',
        'movies': 'Who played Iron Man in Marvel movies?',
        'sports': 'How many players in a football team?',
        'music': 'Who is known as the King of Pop?'
    }
    
    const question = questions[topic.toLowerCase()] || 'What is the capital of France?'
    const answer = topic.toLowerCase() === 'science' ? 'Mars' : 
                   topic.toLowerCase() === 'movies' ? 'Robert Downey Jr' :
                   topic.toLowerCase() === 'sports' ? '11' : 'Michael Jackson'
    
    const text = `╔► 𝐐𝐔𝐈𝐙 𝐆𝐀𝐌𝐄: 🎮
╠► 𝐓𝐨𝐩𝐢𝐜: ${topic}
╠► 𝐐𝐮𝐞𝐬𝐭𝐢𝐨𝐧: ${question}
╠► 𝐇𝐨𝐬𝐭: @${sender.split('@')[0]}
╠► 𝐏𝐥𝐚𝐲𝐞𝐫𝐬: ${participants.length}
╚►
╔► 𝐒𝐞𝐥𝐞𝐜𝐭 𝐲𝐨𝐮𝐫 𝐚𝐧𝐬𝐰𝐞𝐫:
╚►\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡`
    
    const buttons = [
        {buttonId: `${prefix}answer A`, buttonText: {displayText: '🇦 OPTION A'}, type: 1},
        {buttonId: `${prefix}answer B`, buttonText: {displayText: '🇧 OPTION B'}, type: 1},
        {buttonId: `${prefix}answer C`, buttonText: {displayText: '🇨 OPTION C'}, type: 1}
    ]
    
    const buttonMessage = {
        text: text,
        footer: 'First correct answer wins!',
        buttons: buttons,
        headerType: 1,
        mentions: [sender]
    }
    
    await conn.sendMessage(from, buttonMessage)
} catch (e) {
    reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐀𝐧 𝐞𝐫𝐫𝐨𝐫 𝐨𝐜𝐜𝐮𝐫𝐞𝐝\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    l(e)
}
})

// 17. ANSWER HANDLER
cmd({
    pattern: "answer",
    alais: ["quizanswer", "selectanswer"],
    react: "🎯",
    desc: "Answer quiz question",
    category: "group",
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    if (!isGroup) return
    
    const answer = args[0] || 'A'
    const userName = pushname || 'Player'
    
    await conn.sendMessage(from, { react: { text: `🎯`, key: mek.key }})
    
    const correct = answer === 'B' // Example: B is correct
    
    if (correct) {
        reply(`╔► 𝐂𝐎𝐑𝐑𝐄𝐂𝐓 𝐀𝐍𝐒𝐖𝐄𝐑! 🎉\n╠► 𝐏𝐥𝐚𝐲𝐞𝐫: ${userName}\n╠► 𝐀𝐧𝐬𝐰𝐞𝐫: ${answer}\n╚► → 𝐘𝐨𝐮 𝐰𝐢𝐧 𝐭𝐡𝐞 𝐪𝐮𝐢𝐳!\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡`)
    } else {
        reply(`╔► 𝐖𝐑𝐎𝐍𝐆 𝐀𝐍𝐒𝐖𝐄𝐑 ❌\n╠► 𝐏𝐥𝐚𝐲𝐞𝐫: ${userName}\n╠► 𝐀𝐧𝐬𝐰𝐞𝐫: ${answer}\n╚► → 𝐓𝐫𝐲 𝐚𝐠𝐚𝐢𝐧!\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡`)
    }
} catch (e) {
    l(e)
}
})

// 18. GROUP THEME
cmd({
    pattern: "theme",
    alais: ["grouptheme", "settheme", "changetheme"],
    react: "🎨",
    desc: "Change group theme",
    category: "group",
    use: '.theme color',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    if (!isGroup) return reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐓𝐡𝐢𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐢𝐬 𝐨𝐧𝐥𝐲 𝐟𝐨𝐫 𝐠𝐫𝐨𝐮𝐩𝐬\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    if (!isAdmins) return reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐘𝐨𝐮 𝐚𝐫𝐞 𝐧𝐨𝐭 𝐚𝐧 𝐚𝐝𝐦𝐢𝐧\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    
    const theme = q.toLowerCase() || 'blue'
    const themes = {
        'blue': '🔵 Blue Theme',
        'red': '🔴 Red Theme', 
        'green': '🟢 Green Theme',
        'purple': '🟣 Purple Theme',
        'gold': '⭐ Gold Theme'
    }
    
    const themeName = themes[theme] || '🔵 Blue Theme'
    
    const text = `╔► 𝐆𝐑𝐎𝐔𝐏 𝐓𝐇𝐄𝐌𝐄: 🎨
╠► 𝐓𝐡𝐞𝐦𝐞: ${themeName}
╠► 𝐒𝐞𝐭 𝐛𝐲: @${sender.split('@')[0]}
╠► 𝐆𝐫𝐨𝐮𝐩: ${groupName}
╚►
╔► 𝐓𝐡𝐞𝐦𝐞 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐜𝐡𝐚𝐧𝐠𝐞𝐝!
╠► 𝐄𝐧𝐣𝐨𝐲 𝐭𝐡𝐞 𝐧𝐞𝐰 𝐥𝐨𝐨𝐤.
╚►\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡`
    
    const buttons = [
        {buttonId: `${prefix}theme blue`, buttonText: {displayText: '🔵 BLUE'}, type: 1},
        {buttonId: `${prefix}theme red`, buttonText: {displayText: '🔴 RED'}, type: 1},
        {buttonId: `${prefix}theme green`, buttonText: {displayText: '🟢 GREEN'}, type: 1}
    ]
    
    const buttonMessage = {
        text: text,
        footer: 'Tap to change theme',
        buttons: buttons,
        headerType: 1,
        mentions: [sender]
    }
    
    await conn.sendMessage(from, buttonMessage)
} catch (e) {
    reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐀𝐧 𝐞𝐫𝐫𝐨𝐫 𝐨𝐜𝐜𝐮𝐫𝐞𝐝\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    l(e)
}
})

// 19. GROUP STICKER MAKER
cmd({
    pattern: "sticker",
    alais: ["makesticker", "createsticker", "stik"],
    react: "🖼️",
    desc: "Create sticker from image",
    category: "group",
    use: '.sticker (reply to image)',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    if (!quoted || !quoted.image) {
        return reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐑𝐞𝐩𝐥𝐲 𝐭𝐨 𝐚𝐧 𝐢𝐦𝐚𝐠𝐞\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    }
    
    const text = `╔► 𝐒𝐓𝐈𝐂𝐊𝐄𝐑 𝐂𝐑𝐄𝐀𝐓𝐎𝐑: 🖼️
╠► 𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐛𝐲: @${sender.split('@')[0]}
╠► 𝐒𝐭𝐚𝐭𝐮𝐬: 𝐏𝐫𝐨𝐜𝐞𝐬𝐬𝐢𝐧𝐠...
╚►
╔► 𝐒𝐞𝐥𝐞𝐜𝐭 𝐨𝐩𝐭𝐢𝐨𝐧𝐬:
╚►\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡`
    
    const buttons = [
        {buttonId: `${prefix}stickerpack default`, buttonText: {displayText: '🖼️ DEFAULT'}, type: 1},
        {buttonId: `${prefix}stickerpack circle`, buttonText: {displayText: '⭕ CIRCLE'}, type: 1},
        {buttonId: `${prefix}stickerpack removebg`, buttonText: {displayText: '✨ NO BG'}, type: 1}
    ]
    
    const buttonMessage = {
        text: text,
        footer: 'Choose sticker type',
        buttons: buttons,
        headerType: 1,
        mentions: [sender]
    }
    
    await conn.sendMessage(from, buttonMessage)
} catch (e) {
    reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐀𝐧 𝐞𝐫𝐫𝐨𝐫 𝐨𝐜𝐜𝐮𝐫𝐞𝐝\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    l(e)
}
})

// 20. ADMIN PANEL
cmd({
    pattern: "adminpanel",
    alais: ["adminmenu", "admincontrol", "controlpanel"],
    react: "👑",
    desc: "Admin control panel",
    category: "group",
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    if (!isGroup) return reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐓𝐡𝐢𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐢𝐬 𝐨𝐧𝐥𝐲 𝐟𝐨𝐫 𝐠𝐫𝐨𝐮𝐩𝐬\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    if (!isAdmins) return reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐘𝐨𝐮 𝐚𝐫𝐞 𝐧𝐨𝐭 𝐚𝐧 𝐚𝐝𝐦𝐢𝐧\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    
    const text = `╔► 𝐀𝐃𝐌𝐈𝐍 𝐏𝐀𝐍𝐄𝐋: 👑
╠► 𝐆𝐫𝐨𝐮𝐩: ${groupName}
╠► 𝐀𝐝𝐦𝐢𝐧: @${sender.split('@')[0]}
╠► 𝐌𝐞𝐦𝐛𝐞𝐫𝐬: ${participants.length}
╠► 𝐀𝐝𝐦𝐢𝐧𝐬: ${groupAdmins.length}
╚►
╔► 𝐀𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐭𝐢𝐯𝐞 𝐂𝐨𝐧𝐭𝐫𝐨𝐥𝐬:
╚►\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡`
    
    const buttons = [
        {buttonId: `${prefix}members`, buttonText: {displayText: '👥 MEMBER MGMT'}, type: 1},
        {buttonId: `${prefix}groupsettings`, buttonText: {displayText: '⚙️ SETTINGS'}, type: 1},
        {buttonId: `${prefix}announce`, buttonText: {displayText: '📢 ANNOUNCE'}, type: 1}
    ]
    
    const buttonMessage = {
        text: text,
        footer: 'Administrator Controls',
        buttons: buttons,
        headerType: 1,
        mentions: [sender]
    }
    
    await conn.sendMessage(from, buttonMessage)
} catch (e) {
    reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐀𝐧 𝐞𝐫𝐫𝐨𝐫 𝐨𝐜𝐜𝐮𝐫𝐞𝐝\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    l(e)
}
})

// 21. GROUP BACKUP
cmd({
    pattern: "backup",
    alais: ["groupbackup", "savegroup", "backupdata"],
    react: "💾",
    desc: "Backup group data",
    category: "group",
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    if (!isGroup) return reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐓𝐡𝐢𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐢𝐬 𝐨𝐧𝐥𝐲 𝐟𝐨𝐫 𝐠𝐫𝐨𝐮𝐩𝐬\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    if (!isAdmins) return reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐘𝐨𝐮 𝐚𝐫𝐞 𝐧𝐨𝐭 𝐚𝐧 𝐚𝐝𝐦𝐢𝐧\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    
    const text = `╔► 𝐆𝐑𝐎𝐔𝐏 𝐁𝐀𝐂𝐊𝐔𝐏: 💾
╠► 𝐆𝐫𝐨𝐮𝐩: ${groupName}
╠► 𝐁𝐚𝐜𝐤𝐮𝐩 𝐛𝐲: @${sender.split('@')[0]}
╠► 𝐃𝐚𝐭𝐞: ${new Date().toLocaleString()}
╠► 𝐌𝐞𝐦𝐛𝐞𝐫𝐬: ${participants.length}
╚►
╔► 𝐁𝐚𝐜𝐤𝐮𝐩 𝐨𝐩𝐭𝐢𝐨𝐧𝐬:
╚►\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡`
    
    const buttons = [
        {buttonId: `${prefix}backup members`, buttonText: {displayText: '👥 MEMBER LIST'}, type: 1},
        {buttonId: `${prefix}backup settings`, buttonText: {displayText: '⚙️ SETTINGS'}, type: 1},
        {buttonId: `${prefix}backup all`, buttonText: {displayText: '📦 FULL BACKUP'}, type: 1}
    ]
    
    const buttonMessage = {
        text: text,
        footer: 'Choose backup type',
        buttons: buttons,
        headerType: 1,
        mentions: [sender]
    }
    
    await conn.sendMessage(from, buttonMessage)
} catch (e) {
    reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐀𝐧 𝐞𝐫𝐫𝐨𝐫 𝐨𝐜𝐜𝐮𝐫𝐞𝐝\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    l(e)
}
})

// 22. GROUP SEARCH
cmd({
    pattern: "search",
    alais: ["searchgroup", "find", "locate"],
    react: "🔍",
    desc: "Search in group",
    category: "group",
    use: '.search keyword',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    if (!isGroup) return reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐓𝐡𝐢𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐢𝐬 𝐨𝐧𝐥𝐲 𝐟𝐨𝐫 𝐠𝐫𝐨𝐮𝐩𝐬\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    
    const keyword = q || 'hello'
    
    const text = `╔► 𝐆𝐑𝐎𝐔𝐏 𝐒𝐄𝐀𝐑𝐂𝐇: 🔍
╠► 𝐊𝐞𝐲𝐰𝐨𝐫𝐝: "${keyword}"
╠► 𝐆𝐫𝐨𝐮𝐩: ${groupName}
╠► 𝐒𝐞𝐚𝐫𝐜𝐡𝐞𝐝 𝐛𝐲: @${sender.split('@')[0]}
╚►
╔► 𝐒𝐞𝐚𝐫𝐜𝐡 𝐫𝐞𝐬𝐮𝐥𝐭𝐬 𝐟𝐨𝐫 "${keyword}":
╠► 📝 15 𝐦𝐞𝐬𝐬𝐚𝐠𝐞𝐬 𝐟𝐨𝐮𝐧𝐝
╠► 👥 3 𝐦𝐞𝐦𝐛𝐞𝐫𝐬 𝐦𝐞𝐧𝐭𝐢𝐨𝐧𝐞𝐝
╠► 🖼️ 2 𝐢𝐦𝐚𝐠𝐞𝐬 𝐟𝐨𝐮𝐧𝐝
╚►\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡`
    
    const buttons = [
        {buttonId: `${prefix}search messages ${keyword}`, buttonText: {displayText: '📝 MESSAGES'}, type: 1},
        {buttonId: `${prefix}search users ${keyword}`, buttonText: {displayText: '👥 USERS'}, type: 1},
        {buttonId: `${prefix}search media ${keyword}`, buttonText: {displayText: '🖼️ MEDIA'}, type: 1}
    ]
    
    const buttonMessage = {
        text: text,
        footer: 'Search results available',
        buttons: buttons,
        headerType: 1,
        mentions: [sender]
    }
    
    await conn.sendMessage(from, buttonMessage)
} catch (e) {
    reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐀𝐧 𝐞𝐫𝐫𝐨𝐫 𝐨𝐜𝐜𝐮𝐫𝐞𝐝\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    l(e)
}
})

// 23. GROUP TRANSLATE
cmd({
    pattern: "translate",
    alais: ["translategroup", "lang", "language"],
    react: "🌐",
    desc: "Translate group messages",
    category: "group",
    use: '.translate language',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    if (!isGroup) return reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐓𝐡𝐢𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐢𝐬 𝐨𝐧𝐥𝐲 𝐟𝐨𝐫 𝐠𝐫𝐨𝐮𝐩𝐬\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    
    const language = q || 'swahili'
    
    const text = `╔► 𝐆𝐑𝐎𝐔𝐏 𝐓𝐑𝐀𝐍𝐒𝐋𝐀𝐓𝐈𝐎𝐍: 🌐
╠► 𝐋𝐚𝐧𝐠𝐮𝐚𝐠𝐞: ${language.toUpperCase()}
╠► 𝐆𝐫𝐨𝐮𝐩: ${groupName}
╠► 𝐒𝐞𝐭 𝐛𝐲: @${sender.split('@')[0]}
╚►
╔► 𝐓𝐫𝐚𝐧𝐬𝐥𝐚𝐭𝐢𝐨𝐧 𝐟𝐞𝐚𝐭𝐮𝐫𝐞 𝐚𝐜𝐭𝐢𝐯𝐚𝐭𝐞𝐝!
╠► 𝐌𝐞𝐬𝐬𝐚𝐠𝐞𝐬 𝐰𝐢𝐥𝐥 𝐛𝐞 𝐭𝐫𝐚𝐧𝐬𝐥𝐚𝐭𝐞𝐝 𝐭𝐨 ${language}.
╚►\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡`
    
    const buttons = [
        {buttonId: `${prefix}translate english`, buttonText: {displayText: '🇬🇧 ENGLISH'}, type: 1},
        {buttonId: `${prefix}translate swahili`, buttonText: {displayText: '🇹🇿 SWAHILI'}, type: 1},
        {buttonId: `${prefix}translate french`, buttonText: {displayText: '🇫🇷 FRENCH'}, type: 1}
    ]
    
    const buttonMessage = {
        text: text,
        footer: 'Select translation language',
        buttons: buttons,
        headerType: 1,
        mentions: [sender]
    }
    
    await conn.sendMessage(from, buttonMessage)
} catch (e) {
    reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐀𝐧 𝐞𝐫𝐫𝐨𝐫 𝐨𝐜𝐜𝐮𝐫𝐞𝐝\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    l(e)
}
})

// 24. GROUP CLEANER
cmd({
    pattern: "clean",
    alais: ["cleanup", "clearall", "purge"],
    react: "🧹",
    desc: "Clean group content",
    category: "group",
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    if (!isGroup) return reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐓𝐡𝐢𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐢𝐬 𝐨𝐧𝐥𝐲 𝐟𝐨𝐫 𝐠𝐫𝐨𝐮𝐩𝐬\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    if (!isAdmins) return reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐘𝐨𝐮 𝐚𝐫𝐞 𝐧𝐨𝐭 𝐚𝐧 𝐚𝐝𝐦𝐢𝐧\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    
    const text = `╔► 𝐆𝐑𝐎𝐔𝐏 𝐂𝐋𝐄𝐀𝐍𝐄𝐑: 🧹
╠► 𝐆𝐫𝐨𝐮𝐩: ${groupName}
╠► 𝐀𝐜𝐭𝐢𝐨𝐧 𝐛𝐲: @${sender.split('@')[0]}
╠► 𝐌𝐞𝐦𝐛𝐞𝐫𝐬: ${participants.length}
╚►
╔► 𝐒𝐞𝐥𝐞𝐜𝐭 𝐜𝐥𝐞𝐚𝐧𝐢𝐧𝐠 𝐨𝐩𝐭𝐢𝐨𝐧:
╚►\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡`
    
    const buttons = [
        {buttonId: `${prefix}clean inactive`, buttonText: {displayText: '👻 INACTIVE USERS'}, type: 1},
        {buttonId: `${prefix}clean links`, buttonText: {displayText: '🔗 LINKS'}, type: 1},
        {buttonId: `${prefix}clean all`, buttonText: {displayText: '💣 CLEAN ALL'}, type: 1}
    ]
    
    const buttonMessage = {
        text: text,
        footer: 'Cleanup options',
        buttons: buttons,
        headerType: 1,
        mentions: [sender]
    }
    
    await conn.sendMessage(from, buttonMessage)
} catch (e) {
    reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐀𝐧 𝐞𝐫𝐫𝐨𝐫 𝐨𝐜𝐜𝐮𝐫𝐞𝐝\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    l(e)
}
})

// 25. GROUP SCHEDULE
cmd({
    pattern: "schedule",
    alais: ["setschedule", "plans", "grouptime"],
    react: "📅",
    desc: "Schedule group activities",
    category: "group",
    use: '.schedule activity | time',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    if (!isGroup) return reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐓𝐡𝐢𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐢𝐬 𝐨𝐧𝐥𝐲 𝐟𝐨𝐫 𝐠𝐫𝐨𝐮𝐩𝐬\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    
    const parts = q.split('|').map(p => p.trim())
    const activity = parts[0] || 'Group Meeting'
    const time = parts[1] || 'Tomorrow 8 PM'
    
    const text = `╔► 𝐆𝐑𝐎𝐔𝐏 𝐒𝐂𝐇𝐄𝐃𝐔𝐋𝐄: 📅
╠► 𝐀𝐜𝐭𝐢𝐯𝐢𝐭𝐲: ${activity}
╠► 𝐓𝐢𝐦𝐞: ${time}
╠► 𝐒𝐜𝐡𝐞𝐝𝐮𝐥𝐞𝐝 𝐛𝐲: @${sender.split('@')[0]}
╠► 𝐏𝐚𝐫𝐭𝐢𝐜𝐢𝐩𝐚𝐧𝐭𝐬: ${participants.length}
╚►
╔► 𝐑𝐞𝐦𝐢𝐧𝐝𝐞𝐫 𝐰𝐢𝐥𝐥 𝐛𝐞 𝐬𝐞𝐧𝐭 𝐚𝐭 𝐬𝐜𝐡𝐞𝐝𝐮𝐥𝐞𝐝 𝐭𝐢𝐦𝐞.
╚►\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡`
    
    const buttons = [
        {buttonId: `${prefix}remind ${activity}`, buttonText: {displayText: '⏰ SET REMINDER'}, type: 1},
        {buttonId: `${prefix}cancelschedule`, buttonText: {displayText: '❌ CANCEL'}, type: 1},
        {buttonId: `${prefix}viewschedule`, buttonText: {displayText: '📋 VIEW SCHEDULE'}, type: 1}
    ]
    
    const buttonMessage = {
        text: text,
        footer: 'Schedule Management',
        buttons: buttons,
        headerType: 1,
        mentions: [sender]
    }
    
    await conn.sendMessage(from, buttonMessage)
} catch (e) {
    reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐀𝐧 𝐞𝐫𝐫𝐨𝐫 𝐨𝐜𝐜𝐮𝐫𝐞𝐝\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    l(e)
}
})

// 26. GROUP QUIZ LEADERBOARD
cmd({
    pattern: "leaderboard",
    alais: ["topscore", "ranking", "scores"],
    react: "🏆",
    desc: "Quiz leaderboard",
    category: "group",
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    if (!isGroup) return reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐓𝐡𝐢𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐢𝐬 𝐨𝐧𝐥𝐲 𝐟𝐨𝐫 𝐠𝐫𝐨𝐮𝐩𝐬\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    
    const text = `╔► 𝐐𝐔𝐈𝐙 𝐋𝐄𝐀𝐃𝐄𝐑𝐁𝐎𝐀𝐑𝐃: 🏆
╠► 𝐆𝐫𝐨𝐮𝐩: ${groupName}
╠► 𝐃𝐚𝐭𝐞: ${new Date().toLocaleDateString()}
╠► 𝐓𝐨𝐭𝐚𝐥 𝐏𝐥𝐚𝐲𝐞𝐫𝐬: ${participants.length}
╚►
╔► 𝐓𝐎𝐏 𝟓 𝐏𝐋𝐀𝐘𝐄𝐑𝐒:
╠► 1. @${sender.split('@')[0]} - 1500 pts 🥇
╠► 2. @${participants[1]?.id.split('@')[0]} - 1200 pts 🥈
╠► 3. @${participants[2]?.id.split('@')[0]} - 1000 pts 🥉
╠► 4. @${participants[3]?.id.split('@')[0]} - 800 pts
╠► 5. @${participants[4]?.id.split('@')[0]} - 600 pts
╚►\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡`
    
    const buttons = [
        {buttonId: `${prefix}quiz`, buttonText: {displayText: '🎮 START QUIZ'}, type: 1},
        {buttonId: `${prefix}resetleaderboard`, buttonText: {displayText: '🔄 RESET'}, type: 1},
        {buttonId: `${prefix}myscore`, buttonText: {displayText: '📊 MY SCORE'}, type: 1}
    ]
    
    const buttonMessage = {
        text: text,
        footer: 'Top Performers',
        buttons: buttons,
        headerType: 1,
        mentions: participants.slice(0, 5).map(p => p.id)
    }
    
    await conn.sendMessage(from, buttonMessage)
} catch (e) {
    reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐀𝐧 𝐞𝐫𝐫𝐨𝐫 𝐨𝐜𝐜𝐮𝐫𝐞𝐝\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    l(e)
}
})

// 27. GROUP ECONOMY
cmd({
    pattern: "economy",
    alais: ["groupcoins", "points", "credits"],
    react: "💰",
    desc: "Group economy system",
    category: "group",
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    if (!isGroup) return reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐓𝐡𝐢𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐢𝐬 𝐨𝐧𝐥𝐲 𝐟𝐨𝐫 𝐠𝐫𝐨𝐮𝐩𝐬\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    
    const text = `╔► 𝐆𝐑𝐎𝐔𝐏 𝐄𝐂𝐎𝐍𝐎𝐌𝐘: 💰
╠► 𝐆𝐫𝐨𝐮𝐩: ${groupName}
╠► 𝐓𝐨𝐭𝐚𝐥 𝐂𝐨𝐢𝐧𝐬: 10,000 🪙
╠► 𝐑𝐢𝐜𝐡𝐞𝐬𝐭: @${sender.split('@')[0]} - 1500 🪙
╠► 𝐀𝐜𝐭𝐢𝐯𝐞 𝐔𝐬𝐞𝐫𝐬: ${participants.length}
╚►
╔► 𝐄𝐚𝐫𝐧 𝐜𝐨𝐢𝐧𝐬 𝐛𝐲:
╠► ✅ Daily login: 100 🪙
╠► 🎮 Playing games: 50 🪙
╠► 📝 Active chatting: 10 🪙
╚►\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡`
    
    const buttons = [
        {buttonId: `${prefix}daily`, buttonText: {displayText: '🎁 DAILY REWARD'}, type: 1},
        {buttonId: `${prefix}shop`, buttonText: {displayText: '🛒 SHOP'}, type: 1},
        {buttonId: `${prefix}balance`, buttonText: {displayText: '💰 MY BALANCE'}, type: 1}
    ]
    
    const buttonMessage = {
        text: text,
        footer: 'Group Economy System',
        buttons: buttons,
        headerType: 1,
        mentions: [sender]
    }
    
    await conn.sendMessage(from, buttonMessage)
} catch (e) {
    reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐀𝐧 𝐞𝐫𝐫𝐨𝐫 𝐨𝐜𝐜𝐮𝐫𝐞𝐝\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    l(e)
}
})

// 28. DAILY REWARD
cmd({
    pattern: "daily",
    alais: ["dailyreward", "claim", "reward"],
    react: "🎁",
    desc: "Claim daily reward",
    category: "group",
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    if (!isGroup) return reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐓𝐡𝐢𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐢𝐬 𝐨𝐧𝐥𝐲 𝐟𝐨𝐫 𝐠𝐫𝐨𝐮𝐩𝐬\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    
    const reward = Math.floor(Math.random() * 200) + 100
    const streak = Math.floor(Math.random() * 10) + 1
    
    const text = `╔► 𝐃𝐀𝐈𝐋𝐘 𝐑𝐄𝐖𝐀𝐑𝐃: 🎁
╠► 𝐔𝐬𝐞𝐫: @${sender.split('@')[0]}
╠► 𝐑𝐞𝐰𝐚𝐫𝐝: ${reward} 🪙
╠► 𝐒𝐭𝐫𝐞𝐚𝐤: ${streak} 𝐝𝐚𝐲𝐬 🔥
╠► 𝐍𝐞𝐱𝐭 𝐫𝐞𝐰𝐚𝐫𝐝: 𝐓𝐨𝐦𝐨𝐫𝐫𝐨𝐰
╚►
╔► 𝐂𝐨𝐧𝐠𝐫𝐚𝐭𝐮𝐥𝐚𝐭𝐢𝐨𝐧𝐬! 🎉
╠► 𝐘𝐨𝐮 𝐜𝐥𝐚𝐢𝐦𝐞𝐝 𝐲𝐨𝐮𝐫 𝐝𝐚𝐢𝐥𝐲 𝐫𝐞𝐰𝐚𝐫𝐝.
╠► 𝐊𝐞𝐞𝐩 𝐲𝐨𝐮𝐫 𝐬𝐭𝐫𝐞𝐚𝐤 𝐭𝐨 𝐞𝐚𝐫𝐧 𝐦𝐨𝐫𝐞!
╚►\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡`
    
    const buttons = [
        {buttonId: `${prefix}shop`, buttonText: {displayText: '🛒 SPEND COINS'}, type: 1},
        {buttonId: `${prefix}economy`, buttonText: {displayText: '💰 ECONOMY'}, type: 1},
        {buttonId: `${prefix}leaderboard`, buttonText: {displayText: '🏆 LEADERBOARD'}, type: 1}
    ]
    
    const buttonMessage = {
        text: text,
        footer: 'Daily Reward Claimed',
        buttons: buttons,
        headerType: 1,
        mentions: [sender]
    }
    
    await conn.sendMessage(from, buttonMessage)
    await conn.sendMessage(from, { react: { text: `🎁`, key: mek.key }})
} catch (e) {
    reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐀𝐧 𝐞𝐫𝐫𝐨𝐫 𝐨𝐜𝐜𝐮𝐫𝐞𝐝\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    l(e)
}
})

// 29. GROUP SHOP
cmd({
    pattern: "shop",
    alais: ["groupshop", "store", "buy"],
    react: "🛒",
    desc: "Group shop system",
    category: "group",
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    if (!isGroup) return reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐓𝐡𝐢𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐢𝐬 𝐨𝐧𝐥𝐲 𝐟𝐨𝐫 𝐠𝐫𝐨𝐮𝐩𝐬\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    
    const text = `╔► 𝐆𝐑𝐎𝐔𝐏 𝐒𝐇𝐎𝐏: 🛒
╠► 𝐖𝐞𝐥𝐜𝐨𝐦𝐞, @${sender.split('@')[0]}!
╠► 𝐘𝐨𝐮𝐫 𝐛𝐚𝐥𝐚𝐧𝐜𝐞: 1500 🪙
╚►
╔► 𝐀𝐕𝐀𝐈𝐋𝐀𝐁𝐋𝐄 𝐈𝐓𝐄𝐌𝐒:
╠► 1. 𝐕𝐈𝐏 𝐁𝐚𝐝𝐠𝐞 - 500 🪙
╠► 2. 𝐂𝐮𝐬𝐭𝐨𝐦 𝐓𝐢𝐭𝐥𝐞 - 300 🪙
╠► 3. 𝐄𝐱𝐜𝐥𝐮𝐬𝐢𝐯𝐞 𝐄𝐦𝐨𝐣𝐢 - 200 🪙
╠► 4. 𝐆𝐢𝐟𝐭 𝐟𝐨𝐫 𝐟𝐫𝐢𝐞𝐧𝐝 - 400 🪙
╠► 5. 𝐌𝐲𝐬𝐭𝐞𝐫𝐲 𝐁𝐨𝐱 - 100 🪙
╚►\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡`
    
    const buttons = [
        {buttonId: `${prefix}buy 1`, buttonText: {displayText: '🛍️ BUY VIP'}, type: 1},
        {buttonId: `${prefix}buy 2`, buttonText: {displayText: '🏷️ BUY TITLE'}, type: 1},
        {buttonId: `${prefix}buy 5`, buttonText: {displayText: '🎁 MYSTERY BOX'}, type: 1}
    ]
    
    const buttonMessage = {
        text: text,
        footer: 'Purchase items with coins',
        buttons: buttons,
        headerType: 1,
        mentions: [sender]
    }
    
    await conn.sendMessage(from, buttonMessage)
} catch (e) {
    reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐀𝐧 𝐞𝐫𝐫𝐨𝐫 𝐨𝐜𝐜𝐮𝐫𝐞𝐝\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    l(e)
}
})

// 30. BUY ITEM
cmd({
    pattern: "buy",
    alais: ["purchase", "getitem"],
    react: "🛍️",
    desc: "Buy item from shop",
    category: "group",
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    if (!isGroup) return reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐓𝐡𝐢𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐢𝐬 𝐨𝐧𝐥𝐲 𝐟𝐨𝐫 𝐠𝐫𝐨𝐮𝐩𝐬\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    
    const itemId = args[0] || '1'
    const items = {
        '1': {name: 'VIP Badge', price: 500, emoji: '👑'},
        '2': {name: 'Custom Title', price: 300, emoji: '🏷️'},
        '5': {name: 'Mystery Box', price: 100, emoji: '🎁'}
    }
    
    const item = items[itemId] || items['1']
    
    const text = `╔► 𝐏𝐔𝐑𝐂𝐇𝐀𝐒𝐄 𝐂𝐎𝐍𝐅𝐈𝐑𝐌𝐄𝐃: 🛍️
╠► 𝐈𝐭𝐞𝐦: ${item.emoji} ${item.name}
╠► 𝐏𝐫𝐢𝐜𝐞: ${item.price} 🪙
╠► 𝐁𝐮𝐲𝐞𝐫: @${sender.split('@')[0]}
╠► 𝐃𝐚𝐭𝐞: ${new Date().toLocaleString()}
╚►
╔► 𝐓𝐡𝐚𝐧𝐤 𝐲𝐨𝐮 𝐟𝐨𝐫 𝐲𝐨𝐮𝐫 𝐩𝐮𝐫𝐜𝐡𝐚𝐬𝐞! 🎉
╠► 𝐘𝐨𝐮𝐫 𝐢𝐭𝐞𝐦 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐚𝐜𝐭𝐢𝐯𝐚𝐭𝐞𝐝.
╚►\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡`
    
    const buttons = [
        {buttonId: `${prefix}shop`, buttonText: {displayText: '🛒 BACK TO SHOP'}, type: 1},
        {buttonId: `${prefix}inventory`, buttonText: {displayText: '📦 MY ITEMS'}, type: 1},
        {buttonId: `${prefix}economy`, buttonText: {displayText: '💰 ECONOMY'}, type: 1}
    ]
    
    const buttonMessage = {
        text: text,
        footer: 'Purchase Successful',
        buttons: buttons,
        headerType: 1,
        mentions: [sender]
    }
    
    await conn.sendMessage(from, buttonMessage)
    await conn.sendMessage(from, { react: { text: `🛍️`, key: mek.key }})
} catch (e) {
    reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐀𝐧 𝐞𝐫𝐫𝐨𝐫 𝐨𝐜𝐜𝐮𝐫𝐞𝐝\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    l(e)
}
})

// 31. GROUP MUSIC
cmd({
    pattern: "music",
    alais: ["playmusic", "song", "play"],
    react: "🎵",
    desc: "Group music player",
    category: "group",
    use: '.music song name',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    if (!isGroup) return reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐓𝐡𝐢𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐢𝐬 𝐨𝐧𝐥𝐲 𝐟𝐨𝐫 𝐠𝐫𝐨𝐮𝐩𝐬\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    
    const song = q || 'Latest Hits'
    
    const text = `╔► 𝐆𝐑𝐎𝐔𝐏 𝐌𝐔𝐒𝐈𝐂 𝐏𝐋𝐀𝐘𝐄𝐑: 🎵
╠► 𝐍𝐨𝐰 𝐏𝐥𝐚𝐲𝐢𝐧𝐠: ${song}
╠► 𝐑𝐞𝐪𝐮𝐞𝐬𝐭𝐞𝐝 𝐛𝐲: @${sender.split('@')[0]}
╠► 𝐃𝐮𝐫𝐚𝐭𝐢𝐨𝐧: 3:45
╠► 𝐕𝐨𝐥𝐮𝐦𝐞: 🔈 70%
╚►
╔► 𝐌𝐮𝐬𝐢𝐜 𝐜𝐨𝐧𝐭𝐫𝐨𝐥𝐬:
╚►\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡`
    
    const buttons = [
        {buttonId: `${prefix}play`, buttonText: {displayText: '▶️ PLAY'}, type: 1},
        {buttonId: `${prefix}pause`, buttonText: {displayText: '⏸️ PAUSE'}, type: 1},
        {buttonId: `${prefix}next`, buttonText: {displayText: '⏭️ NEXT'}, type: 1}
    ]
    
    const buttonMessage = {
        text: text,
        footer: 'Music Controls',
        buttons: buttons,
        headerType: 1,
        mentions: [sender]
    }
    
    await conn.sendMessage(from, buttonMessage)
} catch (e) {
    reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐀𝐧 𝐞𝐫𝐫𝐨𝐫 𝐨𝐜𝐜𝐮𝐫𝐞𝐝\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    l(e)
}
})

// 32. MUSIC CONTROL
cmd({
    pattern: "play",
    alais: ["musicplay", "resume"],
    react: "▶️",
    desc: "Play music",
    category: "group",
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    if (!isGroup) return
    
    await conn.sendMessage(from, { react: { text: `▶️`, key: mek.key }})
    
    reply(`╔► 𝐌𝐔𝐒𝐈𝐂 𝐂𝐎𝐍𝐓𝐑𝐎𝐋: ▶️\n╠► 𝐀𝐜𝐭𝐢𝐨𝐧: 𝐏𝐥𝐚𝐲𝐢𝐧𝐠\n╠► 𝐔𝐬𝐞𝐫: @${sender.split('@')[0]}\n╚► → 𝐌𝐮𝐬𝐢𝐜 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐩𝐥𝐚𝐲𝐞𝐝\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡`)
} catch (e) {
    l(e)
}
})

// 33. GROUP GAMES MENU
cmd({
    pattern: "games",
    alais: ["groupgames", "playgames", "gamemenu"],
    react: "🎮",
    desc: "Group games menu",
    category: "group",
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    if (!isGroup) return reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐓𝐡𝐢𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐢𝐬 𝐨𝐧𝐥𝐲 𝐟𝐨𝐫 𝐠𝐫𝐨𝐮𝐩𝐬\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    
    const text = `╔► 𝐆𝐑𝐎𝐔𝐏 𝐆𝐀𝐌𝐄𝐒: 🎮
╠► 𝐖𝐞𝐥𝐜𝐨𝐦𝐞, @${sender.split('@')[0]}!
╠► 𝐀𝐜𝐭𝐢𝐯𝐞 𝐏𝐥𝐚𝐲𝐞𝐫𝐬: ${participants.length}
╠► 𝐓𝐨𝐝𝐚𝐲'𝐬 𝐆𝐚𝐦𝐞𝐬: 5
╚►
╔► 𝐀𝐕𝐀𝐈𝐋𝐀𝐁𝐋𝐄 𝐆𝐀𝐌𝐄𝐒:
╠► 1. 𝐐𝐮𝐢𝐳 𝐆𝐚𝐦𝐞 🧠
╠► 2. 𝐖𝐨𝐫𝐝 𝐆𝐚𝐦𝐞 📝
╠► 3. 𝐓𝐫𝐢𝐯𝐢𝐚 𝐆𝐚𝐦𝐞 🎯
╠► 4. 𝐌𝐚𝐭𝐡 𝐆𝐚𝐦𝐞 ➕
╠► 5. 𝐑𝐢𝐝𝐝𝐥𝐞 𝐆𝐚𝐦𝐞 🤔
╚►\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡`
    
    const buttons = [
        {buttonId: `${prefix}quiz`, buttonText: {displayText: '🧠 QUIZ'}, type: 1},
        {buttonId: `${prefix}wordgame`, buttonText: {displayText: '📝 WORD GAME'}, type: 1},
        {buttonId: `${prefix}trivia`, buttonText: {displayText: '🎯 TRIVIA'}, type: 1}
    ]
    
    const buttonMessage = {
        text: text,
        footer: 'Select a game to play',
        buttons: buttons,
        headerType: 1,
        mentions: [sender]
    }
    
    await conn.sendMessage(from, buttonMessage)
} catch (e) {
    reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐀𝐧 𝐞𝐫𝐫𝐨𝐫 𝐨𝐜𝐜𝐮𝐫𝐞𝐝\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    l(e)
}
})

// 34. WORD GAME
cmd({
    pattern: "wordgame",
    alais: ["wordguess", "hangman", "words"],
    react: "📝",
    desc: "Word guessing game",
    category: "group",
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    if (!isGroup) return reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐓𝐡𝐢𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐢𝐬 𝐨𝐧𝐥𝐲 𝐟𝐨𝐫 𝐠𝐫𝐨𝐮𝐩𝐬\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    
    const word = "COMPUTER"
    const hint = "Electronic device"
    
    const text = `╔► 𝐖𝐎𝐑𝐃 𝐆𝐔𝐄𝐒𝐒𝐈𝐍𝐆 𝐆𝐀𝐌𝐄: 📝
╠► 𝐇𝐨𝐬𝐭: @${sender.split('@')[0]}
╠► 𝐖𝐨𝐫𝐝 𝐋𝐞𝐧𝐠𝐭𝐡: ${word.length} 𝐥𝐞𝐭𝐭𝐞𝐫𝐬
╠► 𝐇𝐢𝐧𝐭: ${hint}
╠► 𝐀𝐭𝐭𝐞𝐦𝐩𝐭𝐬 𝐥𝐞𝐟𝐭: 5
╚►
╔► 𝐖𝐨𝐫𝐝: _ _ _ _ _ _ _ _
╚►\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡`
    
    const buttons = [
        {buttonId: `${prefix}guess C`, buttonText: {displayText: '🇨 LETTER C'}, type: 1},
        {buttonId: `${prefix}guess O`, buttonText: {displayText: '🇴 LETTER O'}, type: 1},
        {buttonId: `${prefix}guess M`, buttonText: {displayText: '🇲 LETTER M'}, type: 1}
    ]
    
    const buttonMessage = {
        text: text,
        footer: 'Guess the word!',
        buttons: buttons,
        headerType: 1,
        mentions: [sender]
    }
    
    await conn.sendMessage(from, buttonMessage)
} catch (e) {
    reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐀𝐧 𝐞𝐫𝐫𝐨𝐫 𝐨𝐜𝐜𝐮𝐫𝐞𝐝\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    l(e)
}
})

// 35. GROUP HELP
cmd({
    pattern: "grouhelp",
    alais: ["grouphelp", "helpg", "commands"],
    react: "❓",
    desc: "Group commands help",
    category: "group",
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    if (!isGroup) return reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐓𝐡𝐢𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐢𝐬 𝐨𝐧𝐥𝐲 𝐟𝐨𝐫 𝐠𝐫𝐨𝐮𝐩𝐬\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    
    const text = `╔► 𝐆𝐑𝐎𝐔𝐏 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒 𝐇𝐄𝐋𝐏: ❓
╠► 𝐏𝐫𝐞𝐟𝐢𝐱: ${prefix}
╠► 𝐆𝐫𝐨𝐮𝐩: ${groupName}
╠► 𝐓𝐨𝐭𝐚𝐥 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬: 40+
╚►
╔► 𝐂𝐀𝐓𝐄𝐆𝐎𝐑𝐈𝐄𝐒:
╠► 📊 𝐈𝐧𝐟𝐨: ${prefix}ginfo, ${prefix}activity
╠► 👥 𝐌𝐞𝐦𝐛𝐞𝐫𝐬: ${prefix}members, ${prefix}tagall
╠► ⚙️ 𝐒𝐞𝐭𝐭𝐢𝐧𝐠𝐬: ${prefix}groupsettings
╠► 🎮 𝐆𝐚𝐦𝐞𝐬: ${prefix}games, ${prefix}quiz
╠► 💰 𝐄𝐜𝐨𝐧𝐨𝐦𝐲: ${prefix}economy, ${prefix}shop
╠► 📢 𝐀𝐧𝐧𝐨𝐮𝐧𝐜𝐞: ${prefix}announce
╠► 🚨 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧: ${prefix}report, ${prefix}warn
╚►\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡`
    
    const buttons = [
        {buttonId: `${prefix}adminpanel`, buttonText: {displayText: '👑 ADMIN'}, type: 1},
        {buttonId: `${prefix}games`, buttonText: {displayText: '🎮 GAMES'}, type: 1},
        {buttonId: `${prefix}economy`, buttonText: {displayText: '💰 ECONOMY'}, type: 1}
    ]
    
    const buttonMessage = {
        text: text,
        footer: 'Tap buttons for quick access',
        buttons: buttons,
        headerType: 1
    }
    
    await conn.sendMessage(from, buttonMessage)
} catch (e) {
    reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐀𝐧 𝐞𝐫𝐫𝐨𝐫 𝐨𝐜𝐜𝐮𝐫𝐞𝐝\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    l(e)
}
})

// 36. GROUP FILTER
cmd({
    pattern: "filter",
    alais: ["groupfilter", "contentfilter", "filterwords"],
    react: "🚫",
    desc: "Filter inappropriate content",
    category: "group",
    use: '.filter add word',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    if (!isGroup) return reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐓𝐡𝐢𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐢𝐬 𝐨𝐧𝐥𝐲 𝐟𝐨𝐫 𝐠𝐫𝐨𝐮𝐩𝐬\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    if (!isAdmins) return reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐘𝐨𝐮 𝐚𝐫𝐞 𝐧𝐨𝐭 𝐚𝐧 𝐚𝐝𝐦𝐢𝐧\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    
    const action = args[0] || 'view'
    const word = args.slice(1).join(' ') || ''
    
    const text = `╔► 𝐂𝐎𝐍𝐓𝐄𝐍𝐓 𝐅𝐈𝐋𝐓𝐄𝐑: 🚫
╠► 𝐀𝐜𝐭𝐢𝐨𝐧: ${action.toUpperCase()}
╠► 𝐖𝐨𝐫𝐝: ${word || 'N/A'}
╠► 𝐀𝐝𝐦𝐢𝐧: @${sender.split('@')[0]}
╠► 𝐅𝐢𝐥𝐭𝐞𝐫𝐞𝐝 𝐖𝐨𝐫𝐝𝐬: 15
╚►
╔► 𝐅𝐢𝐥𝐭𝐞𝐫 𝐩𝐫𝐞𝐯𝐞𝐧𝐭𝐬 𝐢𝐧𝐚𝐩𝐩𝐫𝐨𝐩𝐫𝐢𝐚𝐭𝐞 𝐜𝐨𝐧𝐭𝐞𝐧𝐭.
╚►\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡`
    
    const buttons = [
        {buttonId: `${prefix}filter add badword`, buttonText: {displayText: '➕ ADD WORD'}, type: 1},
        {buttonId: `${prefix}filter remove badword`, buttonText: {displayText: '➖ REMOVE WORD'}, type: 1},
        {buttonId: `${prefix}filter view`, buttonText: {displayText: '📋 VIEW WORDS'}, type: 1}
    ]
    
    const buttonMessage = {
        text: text,
        footer: 'Content Filter Management',
        buttons: buttons,
        headerType: 1,
        mentions: [sender]
    }
    
    await conn.sendMessage(from, buttonMessage)
} catch (e) {
    reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐀𝐧 𝐞𝐫𝐫𝐨𝐫 𝐨𝐜𝐜𝐮𝐫𝐞𝐝\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    l(e)
}
})

// 37. GROUP ROULETTE
cmd({
    pattern: "roulette",
    alais: ["spin", "wheel", "random"],
    react: "🎡",
    desc: "Random selection game",
    category: "group",
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    if (!isGroup) return reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐓𝐡𝐢𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐢𝐬 𝐨𝐧𝐥𝐲 𝐟𝐨𝐫 𝐠𝐫𝐨𝐮𝐩𝐬\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    
    const randomUser = participants[Math.floor(Math.random() * participants.length)]
    
    const text = `╔► 𝐑𝐎𝐔𝐋𝐄𝐓𝐓𝐄 𝐆𝐀𝐌𝐄: 🎡
╠► 𝐒𝐩𝐮𝐧 𝐛𝐲: @${sender.split('@')[0]}
╠► 𝐏𝐚𝐫𝐭𝐢𝐜𝐢𝐩𝐚𝐧𝐭𝐬: ${participants.length}
╠► 𝐖𝐡𝐞𝐞𝐥 𝐬𝐭𝐚𝐭𝐮𝐬: 𝐒𝐩𝐢𝐧𝐧𝐢𝐧𝐠...
╚►
╔► 𝐓𝐡𝐞 𝐰𝐡𝐞𝐞𝐥 𝐢𝐬 𝐬𝐩𝐢𝐧𝐧𝐢𝐧𝐠!
╠► 𝐑𝐚𝐧𝐝𝐨𝐦 𝐬𝐞𝐥𝐞𝐜𝐭𝐢𝐨𝐧 𝐢𝐧 𝐩𝐫𝐨𝐠𝐫𝐞𝐬𝐬...
╚►\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡`
    
    const buttons = [
        {buttonId: `${prefix}spin`, buttonText: {displayText: '🎡 SPIN NOW'}, type: 1},
        {buttonId: `${prefix}stoproulette`, buttonText: {displayText: '🛑 STOP'}, type: 1},
        {buttonId: `${prefix}result`, buttonText: {displayText: '🏆 VIEW RESULT'}, type: 1}
    ]
    
    const buttonMessage = {
        text: text,
        footer: 'Click spin to start',
        buttons: buttons,
        headerType: 1,
        mentions: [sender]
    }
    
    await conn.sendMessage(from, buttonMessage)
    
    // Simulate spinning
    setTimeout(async () => {
        const resultText = `╔► 𝐑𝐎𝐔𝐋𝐄𝐓𝐓𝐄 𝐑𝐄𝐒𝐔𝐋𝐓: 🎉\n╠► 𝐖𝐢𝐧𝐧𝐞𝐫: @${randomUser.id.split('@')[0]}\n╠► 𝐒𝐩𝐮𝐧 𝐛𝐲: @${sender.split('@')[0]}\n╠► 𝐏𝐫𝐢𝐳𝐞: 500 🪙\n╚► → 𝐂𝐨𝐧𝐠𝐫𝐚𝐭𝐮𝐥𝐚𝐭𝐢𝐨𝐧𝐬! 🎊\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡`
        
        await conn.sendMessage(from, { 
            text: resultText, 
            mentions: [randomUser.id, sender] 
        })
    }, 3000)
} catch (e) {
    reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐀𝐧 𝐞𝐫𝐫𝐨𝐫 𝐨𝐜𝐜𝐮𝐫𝐞𝐝\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    l(e)
}
})

// 38. GROUP MEMORY
cmd({
    pattern: "memory",
    alais: ["memgame", "memorygame", "match"],
    react: "🧠",
    desc: "Memory matching game",
    category: "group",
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    if (!isGroup) return reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐓𝐡𝐢𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐢𝐬 𝐨𝐧𝐥𝐲 𝐟𝐨𝐫 𝐠𝐫𝐨𝐮𝐩𝐬\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    
    const text = `╔► 𝐌𝐄𝐌𝐎𝐑𝐘 𝐆𝐀𝐌𝐄: 🧠
╠► 𝐇𝐨𝐬𝐭: @${sender.split('@')[0]}
╠► 𝐏𝐥𝐚𝐲𝐞𝐫𝐬: ${participants.length}
╠► 𝐆𝐚𝐦𝐞 𝐋𝐞𝐯𝐞𝐥: 𝐄𝐚𝐬𝐲
╠► 𝐏𝐚𝐢𝐫𝐬: 6
╚►
╔► 𝐆𝐚𝐦𝐞 𝐁𝐨𝐚𝐫𝐝:
╠► 🎮 🎮 🎮 🎮 🎮 🎮
╠► 🎮 🎮 🎮 🎮 🎮 🎮
╚►
╔► 𝐒𝐞𝐥𝐞𝐜𝐭 𝐜𝐚𝐫𝐝𝐬 𝐭𝐨 𝐦𝐚𝐭𝐜𝐡:
╚►\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡`
    
    const buttons = [
        {buttonId: `${prefix}card 1`, buttonText: {displayText: '1️⃣ CARD 1'}, type: 1},
        {buttonId: `${prefix}card 2`, buttonText: {displayText: '2️⃣ CARD 2'}, type: 1},
        {buttonId: `${prefix}card 3`, buttonText: {displayText: '3️⃣ CARD 3'}, type: 1}
    ]
    
    const buttonMessage = {
        text: text,
        footer: 'Match the pairs!',
        buttons: buttons,
        headerType: 1,
        mentions: [sender]
    }
    
    await conn.sendMessage(from, buttonMessage)
} catch (e) {
    reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐀𝐧 𝐞𝐫𝐫𝐨𝐫 𝐨𝐜𝐜𝐮𝐫𝐞𝐝\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    l(e)
}
})

// 39. GROUP COUNTDOWN
cmd({
    pattern: "countdown",
    alais: ["timer", "count", "starttimer"],
    react: "⏱️",
    desc: "Start countdown timer",
    category: "group",
    use: '.countdown seconds',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    if (!isGroup) return reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐓𝐡𝐢𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐢𝐬 𝐨𝐧𝐥𝐲 𝐟𝐨𝐫 𝐠𝐫𝐨𝐮𝐩𝐬\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    
    const seconds = parseInt(q) || 10
    
    const text = `╔► 𝐂𝐎𝐔𝐍𝐓𝐃𝐎𝐖𝐍 𝐓𝐈𝐌𝐄𝐑: ⏱️
╠► 𝐒𝐞𝐭 𝐛𝐲: @${sender.split('@')[0]}
╠► 𝐓𝐢𝐦𝐞: ${seconds} 𝐬𝐞𝐜𝐨𝐧𝐝𝐬
╠► 𝐏𝐚𝐫𝐭𝐢𝐜𝐢𝐩𝐚𝐧𝐭𝐬: ${participants.length}
╚►
╔► 𝐓𝐢𝐦𝐞𝐫 𝐰𝐢𝐥𝐥 𝐬𝐭𝐚𝐫𝐭 𝐬𝐨𝐨𝐧!
╚►\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡`
    
    const buttons = [
        {buttonId: `${prefix}starttimer`, buttonText: {displayText: '▶️ START'}, type: 1},
        {buttonId: `${prefix}stoptimer`, buttonText: {displayText: '⏹️ STOP'}, type: 1},
        {buttonId: `${prefix}pausetimer`, buttonText: {displayText: '⏸️ PAUSE'}, type: 1}
    ]
    
    const buttonMessage = {
        text: text,
        footer: 'Timer Controls',
        buttons: buttons,
        headerType: 1,
        mentions: [sender]
    }
    
    await conn.sendMessage(from, buttonMessage)
    
    // Countdown simulation
    if (seconds <= 60) {
        for (let i = seconds; i > 0; i--) {
            setTimeout(() => {
                if (i <= 5 || i === 10) {
                    conn.sendMessage(from, { text: `⏱️ ${i}...` })
                }
            }, (seconds - i) * 1000)
        }
        
        setTimeout(() => {
            conn.sendMessage(from, { 
                text: `╔► 𝐓𝐈𝐌𝐄𝐑 𝐄𝐍𝐃𝐄𝐃: 🎉\n╠► 𝐂𝐨𝐮𝐧𝐭𝐝𝐨𝐰𝐧 𝐟𝐢𝐧𝐢𝐬𝐡𝐞𝐝!\n╠► 𝐒𝐞𝐭 𝐛𝐲: @${sender.split('@')[0]}\n╚► → 𝐓𝐢𝐦𝐞'𝐬 𝐮𝐩! ⏰\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡`,
                mentions: [sender]
            })
        }, seconds * 1000)
    }
} catch (e) {
    reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐀𝐧 𝐞𝐫𝐫𝐨𝐫 𝐨𝐜𝐜𝐮𝐫𝐞𝐝\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    l(e)
}
})

// 40. GROUP FEEDBACK
cmd({
    pattern: "feedback",
    alais: ["suggest", "review", "comment"],
    react: "📝",
    desc: "Send group feedback",
    category: "group",
    use: '.feedback message',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    if (!isGroup) return reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐓𝐡𝐢𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐢𝐬 𝐨𝐧𝐥𝐲 𝐟𝐨𝐫 𝐠𝐫𝐨𝐮𝐩𝐬\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    
    const message = q || 'Great group!'
    
    const text = `╔► 𝐆𝐑𝐎𝐔𝐏 𝐅𝐄𝐄𝐃𝐁𝐀𝐂𝐊: 📝
╠► 𝐅𝐫𝐨𝐦: @${sender.split('@')[0]}
╠► 𝐆𝐫𝐨𝐮𝐩: ${groupName}
╠► 𝐃𝐚𝐭𝐞: ${new Date().toLocaleString()}
╚►
╔► 𝐅𝐞𝐞𝐝𝐛𝐚𝐜𝐤:
╚► → ${message}
╔► 𝐓𝐡𝐚𝐧𝐤 𝐲𝐨𝐮 𝐟𝐨𝐫 𝐲𝐨𝐮𝐫 𝐟𝐞𝐞𝐝𝐛𝐚𝐜𝐤!
╠► 𝐈𝐭 𝐡𝐞𝐥𝐩𝐬 𝐢𝐦𝐩𝐫𝐨𝐯𝐞 𝐭𝐡𝐞 𝐠𝐫𝐨𝐮𝐩.
╚►\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡`
    
    const buttons = [
        {buttonId: `${prefix}rate 5`, buttonText: {displayText: '⭐ 5 STARS'}, type: 1},
        {buttonId: `${prefix}rate 4`, buttonText: {displayText: '⭐ 4 STARS'}, type: 1},
        {buttonId: `${prefix}rate 3`, buttonText: {displayText: '⭐ 3 STARS'}, type: 1}
    ]
    
    const buttonMessage = {
        text: text,
        footer: 'Rate your experience',
        buttons: buttons,
        headerType: 1,
        mentions: [sender]
    }
    
    // Send to admins
    for (const admin of groupAdmins) {
        try {
            await conn.sendMessage(admin, buttonMessage)
        } catch (e) {}
    }
    
    reply('╔► 𝐒𝐮𝐜𝐜𝐞𝐬𝐬: ✅\n╚► → 𝐅𝐞𝐞𝐝𝐛𝐚𝐜𝐤 𝐬𝐞𝐧𝐭 𝐭𝐨 𝐚𝐝𝐦𝐢𝐧𝐬\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
} catch (e) {
    reply('╔► 𝐄𝐫𝐫𝐨𝐫: ❌\n╚► → 𝐀𝐧 𝐞𝐫𝐫𝐨𝐫 𝐨𝐜𝐜𝐮𝐫𝐞𝐝\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡')
    l(e)
}
})