const { cmd } = require('../command');
const axios = require('axios');
const yts = require('yt-search');
const { silainfo, myquoted } = require('../config');

const AXIOS_DEFAULTS = {
    timeout: 60000,
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'application/json, text/plain, */*'
    }
};

async function tryRequest(getter, attempts = 3) {
    let lastError;
    for (let attempt = 1; attempt <= attempts; attempt++) {
        try {
            return await getter();
        } catch (err) {
            lastError = err;
            if (attempt < attempts) {
                await new Promise(r => setTimeout(r, 1000 * attempt));
            }
        }
    }
    throw lastError;
}

async function getIzumiDownloadByUrl(youtubeUrl) {
    const apiUrl = `https://izumiiiiiiii.dpdns.org/downloader/youtube?url=${encodeURIComponent(youtubeUrl)}&format=mp3`;
    const res = await tryRequest(() => axios.get(apiUrl, AXIOS_DEFAULTS));
    if (res?.data?.result?.download) return res.data.result;
    throw new Error('Izumi API error');
}

async function getIzumiDownloadByQuery(query) {
    const apiUrl = `https://izumiiiiiiii.dpdns.org/downloader/youtube-play?query=${encodeURIComponent(query)}`;
    const res = await tryRequest(() => axios.get(apiUrl, AXIOS_DEFAULTS));
    if (res?.data?.result?.download) return res.data.result;
    throw new Error('Izumi search error');
}

async function getOkatsuDownloadByUrl(youtubeUrl) {
    const apiUrl = `https://okatsu-rolezapiiz.vercel.app/downloader/ytmp3?url=${encodeURIComponent(youtubeUrl)}`;
    const res = await tryRequest(() => axios.get(apiUrl, AXIOS_DEFAULTS));
    if (res?.data?.dl) {
        return {
            download: res.data.dl,
            title: res.data.title,
            thumbnail: res.data.thumb
        };
    }
    throw new Error('Okatsu API error');
}

//=========== SONG COMMAND ===========//
cmd({
    pattern: "song",
    alias: ["music", "mp3"],
    desc: "Download YouTube audio",
    category: "media",
    react: "🎵",
    filename: __filename
},
async (conn, mek, m, { from, reply, args }) => {
    try {
        if (!args || args.length === 0) {
            await conn.sendMessage(
                from,
                {
                    text: `
╔► 𝐄𝐫𝐫𝐨𝐫: ❌
╚► → 𝐏𝐥𝐞𝐚𝐬𝐞 𝐞𝐧𝐭𝐞𝐫 𝐬𝐨𝐧𝐠 𝐧𝐚𝐦𝐞
╚► → .𝐬𝐨𝐧𝐠 <𝐘𝐨𝐮𝐓𝐮𝐛𝐞 𝐥𝐢𝐧𝐤>
`,
                    ...silainfo()
                },
                { quoted: myquoted }
            );
            return;
        }

        const text = args.join(' ');
        
        // Searching message
        await conn.sendMessage(
            from,
            {
                text: `
╔► 𝐒𝐞𝐚𝐫𝐜𝐡𝐢𝐧𝐠: 🔍
╚► → 𝐏𝐫𝐨𝐜𝐞𝐬𝐬𝐢𝐧𝐠...
`,
                ...silainfo()
            },
            { quoted: myquoted }
        );

        let video;
        if (text.includes('youtube.com') || text.includes('youtu.be')) {
            video = { url: text, title: 'YouTube Link' };
        } else {
            const search = await yts(text);
            if (!search || !search.videos.length) {
                throw new Error('No results found');
            }
            video = search.videos[0];
        }

        // Send song info
        await conn.sendMessage(
            from,
            {
                text: `╭▸───────────────▸╮
│   「 𝐒𝐈𝐋𝐀 𝐌𝐃 𝐒𝐎𝐍𝐆 」   │
╰▸───────────────▸╯
╔► 𝐒𝐨𝐧𝐠 𝐈𝐧𝐟𝐨: 🎵
╚► → 𝐓𝐢𝐭𝐥𝐞: ${video.title || 'Unknown'}
╚► → 𝐃𝐮𝐫𝐚𝐭𝐢𝐨𝐧: ${video.timestamp || 'Unknown'}
╚► → 𝐀𝐫𝐭𝐢𝐬𝐭: ${video.author?.name || 'Unknown'}
╔► 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝𝐢𝐧𝐠: ⬇️
╚► → 𝐏𝐥𝐞𝐚𝐬𝐞 𝐰𝐚𝐢𝐭...
╭▸───────────────▸╮
│    — 𝐒𝐈𝐋𝐀 𝐓𝐄𝐂𝐇 —    │
╰▸───────────────▸╯`,
                ...silainfo()
            },
            { quoted: myquoted }
        );

        // Try multiple APIs
        let audioData;
        try {
            audioData = await getIzumiDownloadByUrl(video.url);
        } catch (e1) {
            try {
                const query = video.title || text;
                audioData = await getIzumiDownloadByQuery(query);
            } catch (e2) {
                audioData = await getOkatsuDownloadByUrl(video.url);
            }
        }

        // Send audio
        await conn.sendMessage(
            from,
            {
                audio: { url: audioData.download || audioData.dl || audioData.url },
                mimetype: 'audio/mpeg',
                fileName: `${(audioData.title || video.title || 'song').replace(/[<>:"/\\|?*]/g, '')}.mp3`,
                ptt: false,
                ...silainfo()
            },
            { quoted: myquoted }
        );

        // Success message
        await conn.sendMessage(
            from,
            {
                text: `
╔► 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝: ✅
╚► → 𝐒𝐭𝐚𝐭𝐮𝐬: 𝐂𝐨𝐦𝐩𝐥𝐞𝐭𝐞
`,
                ...silainfo()
            },
            { quoted: myquoted }
        );

    } catch (error) {
        console.error("Song command error:", error);
        
        await conn.sendMessage(
            from,
            {
                text: `
╔► 𝐄𝐫𝐫𝐨𝐫: ❌
╚► → ${error.message || 'Unknown error'}
`,
                ...silainfo()
            },
            { quoted: myquoted }
        );
    }
});