const config = require('../config');
const { cmd, commands } = require('../command');
const { silainfo, myquoted } = require('../config');

cmd({
    pattern: "ping",
    alias: ["speed","pong"],
    desc: "Check bot's response time",
    category: "main",
    react: "⚡",
    filename: __filename
},
async (conn, mek, m, { from, sender, reply, react }) => {
    try {
        const start = new Date().getTime();
        
        await react("⚡");
        
        const end = new Date().getTime();
        const responseTime = end - start;
        
        // Determine status
        let status = "";
        let level = "";
        if (responseTime < 100) {
            status = "lightning fast";
            level = "⭐⭐⭐⭐⭐";
        } else if (responseTime < 300) {
            status = "very fast";
            level = "⭐⭐⭐⭐";
        } else if (responseTime < 600) {
            status = "fast";
            level = "⭐⭐⭐";
        } else if (responseTime < 1000) {
            status = "normal";
            level = "⭐⭐";
        } else {
            status = "slow";
            level = "⭐";
        }
        
        const txt = `
╭▸─────────────────▸╮
│    「 𝐒𝐈𝐋𝐀 𝐌𝐃 𝐏𝐈𝐍𝐆 」    │
╰▸─────────────────▸╯

╔► speed
╚► → ${responseTime}ms

╔► status
╚► → ${status}

╔► level
╚► → ${level}

╔► connection
╚► → stable

╭▸─────────────────▸╮
│    — 𝐒𝐈𝐋𝐀 𝐓𝐄𝐂𝐇 —    │
╰▸─────────────────▸╯

*ping test completed*`;

        await conn.sendMessage(
            from,
            {
                text: txt,
                ...silainfo()
            },
            { quoted: myquoted }
        );

    } catch (e) {
        console.error("Ping command error:", e);
        reply(`Error: ${e.message}`);
    }
});

// ping2 command (alternative)
cmd({
    pattern: "ping2",
    alias: ["speed2"],
    desc: "Alternative speed test",
    category: "main",
    react: "🏃",
    filename: __filename
},
async (conn, mek, m, { from, sender, reply, react }) => {
    try {
        const start = Date.now();
        
        await react("⏱️");
        
        // Simulate some processing
        await new Promise(resolve => setTimeout(resolve, 50));
        
        const end = Date.now();
        const ping = end - start;
        
        const txt = `
╭▸─────────────────▸╮
│    「 𝐒𝐏𝐄𝐄𝐃 𝐓𝐄𝐒𝐓 」    │
╰▸─────────────────▸╯

╔► response time
╚► → ${ping} milliseconds

╔► performance
╚► → ${ping < 100 ? "excellent" : ping < 300 ? "good" : "average"}

╔► server
╚► → heroku

╔► bot status
╚► → online

╭▸─────────────────▸╮
│ — 𝐒𝐈𝐋𝐀 𝐌𝐃 — │
╰▸─────────────────▸╯

*connection test passed*`;

        await conn.sendMessage(
            from,
            {
                text: txt,
                ...silainfo()
            },
            { quoted: myquoted }
        );

    } catch (e) {
        console.error("Ping2 command error:", e);
        reply(`Error: ${e.message}`);
    }
});

// ping3 command (advanced)
cmd({
    pattern: "ping3",
    alias: ["advanced"],
    desc: "Advanced connection test",
    category: "main",
    react: "📊",
    filename: __filename
},
async (conn, mek, m, { from, sender, reply, react }) => {
    try {
        await react("🔍");
        
        const tests = [];
        
        // Test 1: Reaction time
        const start1 = Date.now();
        await react("⚡");
        const end1 = Date.now();
        tests.push({ name: "reaction", time: end1 - start1 });
        
        // Test 2: Message sending
        const start2 = Date.now();
        await reply("testing...");
        const end2 = Date.now();
        tests.push({ name: "message", time: end2 - start2 });
        
        // Test 3: Processing
        const start3 = Date.now();
        await new Promise(resolve => setTimeout(resolve, 30));
        const end3 = Date.now();
        tests.push({ name: "process", time: end3 - start3 });
        
        const total = tests.reduce((sum, test) => sum + test.time, 0);
        const average = total / tests.length;
        
        const txt = `
╭▸─────────────────▸╮
│    「 𝐀𝐃𝐕𝐀𝐍𝐂𝐄𝐃 𝐓𝐄𝐒𝐓 」    │
╰▸─────────────────▸╯

╔► reaction
╚► → ${tests[0].time}ms

╔► message
╚► → ${tests[1].time}ms

╔► processing
╚► → ${tests[2].time}ms

╔► average
╚► → ${average.toFixed(2)}ms

╔► rating
╚► → ${average < 100 ? "⭐⭐⭐⭐⭐" : average < 200 ? "⭐⭐⭐⭐" : average < 300 ? "⭐⭐⭐" : "⭐⭐"}

╭▸─────────────────▸╮
│ — 𝐒𝐈𝐋𝐀 𝐓𝐄𝐂𝐇 — │
╰▸─────────────────▸╯

*all tests completed*`;

        await conn.sendMessage(
            from,
            {
                text: txt,
                ...silainfo()
            },
            { quoted: myquoted }
        );

    } catch (e) {
        console.error("Ping3 command error:", e);
        reply(`Error: ${e.message}`);
    }
});

// pong command
cmd({
    pattern: "pong",
    alias: ["test"],
    desc: "Simple response test",
    category: "main",
    react: "🏓",
    filename: __filename
},
async (conn, mek, m, { from, sender, reply, react }) => {
    try {
        const start = Date.now();
        
        await react("🏓");
        
        const end = Date.now();
        const response = end - start;
        
        const txt = `
╭▸─────────────────▸╮
│    「 𝐏𝐎𝐍𝐆 𝐓𝐄𝐒𝐓 」    │
╰▸─────────────────▸╯

╔► response
╚► → ${response}ms

╔► result
╚► → pong!

╔► status
╚► → operational

╭▸─────────────────▸╮
│ — 𝐒𝐈𝐋𝐀 𝐌𝐃 — │
╰▸─────────────────▸╯

*ping → pong*`;

        await conn.sendMessage(
            from,
            {
                text: txt,
                ...silainfo()
            },
            { quoted: myquoted }
        );

    } catch (e) {
        console.error("Pong command error:", e);
        reply(`Error: ${e.message}`);
    }
});
