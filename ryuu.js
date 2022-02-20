///-------------------------SIMPLE BASE-------------------------------------\\\

const
	{
	    WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		ChatModification,
		GroupSettingChange,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		waChatKey,
		mentionedJid,
		processTime,
		prepareMessageFromContent, 
		relayWAMessage
	} = require("@adiwajshing/baileys")
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const qrcode = require('qrcode-terminal')
const qrkode = require("qrcode")
const imageToBase64 = require('image-to-base64')
const moment = require("moment-timezone")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const request = require('request')
const util = require('util')
const hx = require('hxz-api')
const base64Img = require('base64-img')
const ms = require('parse-ms')
const figlet = require('figlet')
const ytsd = require('ytsr')
const brainly = require('brainly-scraper')
const ig = require('insta-fetcher')
const cheerio = require('cheerio')
const fromData = require('form-data')
const os = require('os')
const translate = require('@vitalets/google-translate-api')
const ggs = require('google-it')
const googleImage = require('g-i-s')
const imgbb = require('imgbb-uploader')
const Math_js = require('mathjs')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const speed = require('performance-now')
const toMs = require('ms')
const crypto = require('crypto')
const fetch = require('node-fetch')
const { color, bgcolor } = require('./lib/color')
const { exec } = require('child_process')
const { fetchJson } = require('./lib/fetcher')
const { uploadimg, upload } = require('./lib/uploadimg')
const { webp2mp4File } = require('./lib/webp2mp4')
const { lirikLagu } = require('./lib/lirik.js')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { wikiSearch } = require('./lib/wiki.js')
const { herolist } = require('./lib/herolist.js')
const { herodetails } = require('./lib/herodetail.js')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { mediafireDl } = require('./lib/mediafire.js')
const { pinterest } = require('./lib/pinterest')
const { isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp')
const { yta, ytv, buffer2Stream, ytsr, baseURI, stream2Buffer, noop } = require('./lib/ytdl')
const scrapper = require('./lib/scrapper')
const { getBuffer, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const client = new WAConnection()
const dtod = "6282293271747@s.whatsapp.net"
const otod = "6282293271747@s.whatsapp.net"

// Gambar Loc
const gcm = fs.readFileSync('./picture/gcm.jpg') //group menu
const asm = fs.readFileSync('./picture/apn.jpg') //asupan menu
const cem = fs.readFileSync('./picture/cem.jpg') //cecan menu
const conm = fs.readFileSync('./picture/cnm.jpg') //convert menu
const downm = fs.readFileSync('./picture/dwm.jpg') //download menu
const gamm = fs.readFileSync('./picture/gmm.jpg') //game menu
const logm = fs.readFileSync('./picture/lgm.jpg') //logo maker
const manm = fs.readFileSync('./picture/mnm.jpg') //main menu
const ownm = fs.readFileSync('./picture/ownm.jpg') //owner menu
const rdi = fs.readFileSync('./picture/rdi.jpg') //random image
const rdm = fs.readFileSync('./picture/rdm.jpg') //random menu
const rdt = fs.readFileSync('./picture/rdt.jpg') //random text
const rdv = fs.readFileSync('./picture/rdv.jpg') //random video

// STICKER WM
//const exect = require('await-exec')
//const webp = require('webp-converter')
//const sharp = require('sharp')
const Exif = require('./lib/exif')
const atm = require("./lib/atm");
const game = require("./lib/game");
const exif = new Exif()

// DATABASE
const afk = JSON.parse(fs.readFileSync('./database/afk.json'))
const setik = JSON.parse(fs.readFileSync('./database/setik.json'))
const vien = JSON.parse(fs.readFileSync('./database/vien.json'))
const imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
const commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
const tictactoe = JSON.parse(fs.readFileSync("./database/tictactoe.json"))
const antiwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));
const antivirtex = JSON.parse(fs.readFileSync("./database/antivirtex.json"))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
const mute = JSON.parse(fs.readFileSync('./database/mute.json'))
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
const kickarea = JSON.parse(fs.readFileSync('./database/kickarea.json'))
const scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
const autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))
const yts = require( 'yt-search')
let glimit = JSON.parse(fs.readFileSync('./database/user/glimit.json'));
const tebakgambar = JSON.parse(fs.readFileSync('./database/game/tebakgambar.json'))
const caklontong = JSON.parse(fs.readFileSync('./database/game/caklontong.json'))
const family = JSON.parse(fs.readFileSync('./database/game/family100.json'))
const siapakahaku = JSON.parse(fs.readFileSync('./database/game/siapakahaku.json'))
const tebakkalimat = JSON.parse(fs.readFileSync('./database/game/tebakkalimat.json'))
const tebakkata = JSON.parse(fs.readFileSync('./database/game/tebakkata.json'))
const tebaklirik = JSON.parse(fs.readFileSync('./database/game/tebaklirik.json'))
const tekateki = JSON.parse(fs.readFileSync('./database/game/tekateki.json'))
const susunkata = JSON.parse(fs.readFileSync('./database/game/susunkata.json'))

ky_ttt = []
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
cmhit = []
fake = "RyuuOfficial";
autorespon = false
playmusic = false
menusimpel = false
menuall = false
baterai = {
battery: "" || "Not detected",
isCharge: "" || false
}
offline = false
publik = true
bugc = true
waktuafk = 'Nothing'
alasanafk = 'Nothing'
const ownerNumber = settings.ownerNumber
NamaBot = settings.NamaBot
NomorOwner = settings.NomorOwner
NomorOwner2 = settings.NomorOwner2
NamaOwner = settings.NamaOwner
multi = true
nopref = false



const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const gcount = settings.gcount

function kyun(seconds) {
	function pad(s) {
		return (s < 10 ? '0' : '') + s;
	}
	var hours = Math.floor(seconds / (60 * 60));
	var minutes = Math.floor(seconds % (60 * 60) / 60);
	var seconds = Math.floor(seconds % 60);

	//return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
	return `${pad(hours)}Jam ${pad(minutes)}Menit ${pad(seconds)}Detik`
}
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function waktu(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}
const addafk = (from) => {
    const obj = { id: from, expired: Date.now() + toMs('10m') }
    afk.push(obj)
    fs.writeFileSync('./database/afk.json', JSON.stringify(afk))
}
const cekafk = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            _dir.splice(position, 1)
            fs.writeFileSync('./database/afk.json', JSON.stringify(_dir))
        }
    }, 1000)
}

const isAfk = (idi) => {
    let status = false
    Object.keys(afk).forEach((i) => {
        if (afk[i].id === idi) {
            status = true
        }
    })
    return status
}
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}
const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}
module.exports = kurr = async (kurr, mek) => {
try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
	    if (!mek.message) return
	    if (mek.key && !mek.key.remoteJid == 'status@broadcast') return
	    if ((Object.keys(mek.message)[0] === 'ephemeralMessage' && JSON.stringify(mek.message).includes('EPHEMERAL_SETTING')) && mek.message.ephemeralMessage.message.protocolMessage.type === 3 && bugc && !mek.key.fromMe) {
		nums = mek.participant
        longkapnye = "\n".repeat(420)
        tekuss = `\`\`\`TANDAI TELAH DIBACA !!!\`\`\`${longkapnye}\`\`\`@⁨${nums.split('@')[0]} Terdeteksi Telah Mengirim Bug, @⁨${nums.split('@')[0]} Akan Dikick!\`\`\`\n`
        kurr.groupRemove(mek.key.remoteJid, [nums]).catch((e) => { reply(`*ERR:* ${e}`) })
        kurr.sendMessage(mek.key.remoteJid, tekuss, MessageType.text, {contextInfo:{mentionedJid:[nums + "@s.whatsapp.net"]}})
        }
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const typei = Object.keys(mek.message)[0]
		global.prefix
		me = kurr.user
		m = simple.smsg(kurr, mek)
		const antibot = m.isBaileys
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWita = moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss')
        const timeWit = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss')
		const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
		kurr.on("CB:action,,battery", json => {
	    const battery = json[2][0][1].value
	    const persenbat = parseInt(battery)
	    baterai.battery = `${persenbat}%`
	    baterai.isCharge = json[2][0][1].live
	    })
	    if (multi){
		    var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
        } else {
            if (nopref){
                prefix = ''
            } else {
                prefix = prefa
            }
        }
        isStc = Object.keys(mek.message)[0] == "stickerMessage" ? mek.message.stickerMessage.fileSha256.toString('hex') : ""
	    isStc = `${isStc}`
       const timestampi = speed();
					const latensyi = speed() - timestampi
         const isStcQ = isStc !== "" && content.includes("extendedTextMessage") ||
        isStc !== "" && content.includes("conversation")
        const body = (type === 'listResponseMessage' && mek.message.listResponseMessage.title) ? mek.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ""
		const budo = (typei === 'conversation') ? mek.message.conversation : (typei === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const dfrply = fs.readFileSync('./logo.jpg')
		cmhit.push(command)
        mess = {
			wait: 'Wait a minute',
			success: 'Success',
			error: {
				stick: 'Cannot access videos!',
				Iv: 'Invalid link!',
                api: 'Error'
			},
			only: {
				group: 'Only for within the group!',
				ownerG: 'Only for group owners!',
				ownerB: 'Only for bot owners!',
				admin: 'Only for group admins!',
				Badmin: 'Make the bot a group admin!'
			}
		}
		const botNumber = kurr.user.jid
		const isGroup = from.endsWith('@g.us')
		const sender = mek.key.fromMe ? kurr.user.jid : isGroup ? mek.participant : mek.key.remoteJid
		const senderNumber = sender.split("@")[0] 
		const conts = mek.key.fromMe ? kurr.user.jid : kurr.contacts[mek.sender]
        const pushname = mek.key.fromMe ? kurr.user.name : !conts ? '-' : conts.notify || conts.vname || conts.name || '-'   
		const totalchat = await kurr.chats.all()
		const chat_all = await kurr.chats.all()
		const groupMetadata = isGroup ? await kurr.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const Depe = ["6282293271747@s.whatsapp.net"]
		const isOwner = ownerNumber.includes(sender)
    	const isDev = Depe.includes(sender)
		const isNsfw = isGroup ? nsfw.includes(from) : false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isKickArea = isGroup ? kickarea.includes(from) : false
		const isAntiWame = isGroup ? antiwame.includes(from) : false
		 const isAntivirtex = isGroup ? antivirtex.includes(from) : false
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const isWelkom = isGroup ? welkom.includes(from) : false
		const isAuto = isGroup ? autosticker.includes(from) : false
		const isMuted = isGroup ? mute.includes(from) : false
		      membr = []
        const pff = groupMembers
        const go = groupMembers
        const goo = pff[Math.floor(Math.random() * pff.length)]
        const oe = go[Math.floor(Math.random() * go.length)]
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
		const q = args.join(' ')
const fakegroup = (teks) => {
            kurr.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./logo.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}
		if (antibot === true) return
		const katalog = (teks) => {
             res = kurr.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 321, "message": teks, "footerText": "*_© RyuuOfficialゑ V.3.0_*", "thumbnail": ofrply, "surface": 'CATALOG' }}, {quoted:ftrol})
             kurr.relayWAMessage(res)
        }
        const grupinv = (teks) => {
        	grup = kurr.prepareMessageFromContent(from, { "groupInviteMessage": { "groupJid": '6288213840883-1616169743@g.us', "inviteCode": 'https://chat.whatsapp.com/JI25LDtPW784GAZoRD9fW9', "groupName": `RyuuOfficialゑ V.3.0`, "footerText": "*_© RyuuOfficialゑ V.3.0_*", "jpegThumbnail": ofrply, "caption": teks}}, {quoted:finv})
            kurr.relayWAMessage(grup)
        }
		idttt = []
	    players1 = []
	    players2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
	    }
	    const isTTT = isGroup ? idttt.includes(from) : false
	    isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
		try {
		pporang = await kurr.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }
		
       const loc = fs.readFileSync('./loc.jpg')
       const logo = fs.readFileSync('./logo.jpeg')
		const ofrply = await getBuffer(pporang)		
		const sekarang = new Date().getTime();
			//-
			//WAKTU
			var ase = new Date();
                        var jamss = ase.getHours();
                         switch(jamss){
                case 0: jamss = "Dah Malam Jangan Gadang 🌚"; break;
                case 1: jamss = "Dah Malam Jangan Gadang 🌚"; break;
                case 2: jamss = "Dah Malam Jangan Gadang 🌚"; break;
                case 3: jamss = "Dah Mau Shubuh Siap Siap Shalat Ya 🌔"; break;
                case 4: jamss = "Dah Shubuh Jangan Lupa Shalat Kak🌔"; break;
                case 5: jamss = "Pagi 🌄"; break;
                case 6: jamss = "Pagi 🌄"; break;
                case 7: jamss = "Pagi 🌄"; break;
                case 8: jamss = "Pagi ☀️"; break;
                case 9: jamss = "Pagi ☀️"; break;
                case 10: jamss = "Pagi ☀️"; break;
                case 11: jamss = "Siang 🌞"; break;
                case 12: jamss = "Udh Dzuhur  Jangan Lupa Shalat Kak 🌞"; break;
                case 13: jamss = "Siang 🌞"; break;
                case 14: jamss = "Siang 🌞"; break;
                case 15: jamss = "Dah Ashar Jangan Lupa Shalat kak🌞"; break;
                case 16: jamss = "Sore ☀️"; break;
                case 17: jamss = "Sore 🌄"; break;
                case 18: jamss = "Dah Maghrib Jangan Lupa Shalat Kak 🌄"; break;
                case 19: jamss = "Malam 🌙"; break;
                case 20: jamss = "Malam 🌙"; break;
                case 21: jamss = "Malam 🌙"; break;
                case 22: jamss = "Dah Malam Jangan Gadang 🌙"; break;
                case 23: jamss = "Dah Malam Jangan Gadang 🌚"; break;
            }
            var tampilUcapan = "" + jamss;
            const jmn = moment.tz('Asia/Jakarta').format('HH:mm:ss')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 kurruari 2021').getTime()
				const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				const week = d.toLocaleDateString(locale, { weekday: 'long' })
				const calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
		       })
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/27/ee/27/27ee271709bdb24d555b2dd3de796f93.jpg')
                                        }
if(time2 < "19:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/27/ee/27/27ee271709bdb24d555b2dd3de796f93.jpg')
                                         }
if(time2 < "18:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/81/08/7b/81087b2e732dc0e25d8875b135d579b9.jpg')
                                         }
if(time2 < "15:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/81/98/aa/8198aaf07083fc9939deb0c3c5c3716c.jpg')
                                         }
if(time2 < "11:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/81/98/aa/8198aaf07083fc9939deb0c3c5c3716c.jpg')
                                         }
if(time2 < "06:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/15/8e/ea/158eea299c01433aae6744599d2fdc3a.jpg')
}

    function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

const ftok = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": imageTime //Gambarnye
					},
					"title": `${tampilUcapan} ${pushname}`, //Kasih namalu 
					"description": `${tampilUcapan} ${pushname}`, 
					"currencyCode": "USD",
					"priceAmount1000": "2000",
					"retailerId": `${tampilUcapan} ${pushname}`,
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
// TROLI
runtime = process.uptime()
const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 99999999999999999,
                            status: 1,
                            surface : 1,
                            message: `BOT AKTIF SELAMA : ${waktu(runtime)}`, //Kasih namalu
                            orderTitle: `RyuuOfficialゑ V.3.0`,
                            thumbnail: loc, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }

//kick
const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByreply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByreply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
// LOCATION
const floc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    liveLocationMessage: {
                    caption: `${tampilUcapan} ${pushname}`,
                    jpegThumbnail: dfrply
                          }
                        }
                      }
// DOCUMENT
const fdoc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: `${tampilUcapan} ${pushname}`, 
                    jpegThumbnail: dfrply
                          }
                        }
                      }
// VIDEO
const fvid = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${tampilUcapan} ${pushname}`,
                 "h": `${tampilUcapan} ${pushname}`,
                 'duration': '99999', 
                 'caption': `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
                       }
	                  }
//pin
const pinterest = (queryy) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://id.pinterest.com/search/pins/?autologin=true&q=${queryy}`, {
      headers: {
        cookie: "_auth=1; _b=\"AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg=\"; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0"
      }
    }).then(({data}) => {
      const $ = cheerio.load(data)
      const result = []
      const hasil = []
      $('div > a').get().map(b => {
        const link = $(b).find('img').attr('src')
        result.push(link)
      })
      result.forEach(function (v) {
        if (v == undefined) return
        hasil.push(v.replace(/236/g,'736'))
      })
      hasil.shift()
      resolve(hasil)
    }).catch(reject)
  })
}
// GROUPINVITE
const finv = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6288213840883-1616169743@g.us",
			"inviteCode": `${tampilUcapan} ${pushname}`,
			"groupName": `${tampilUcapan} ${pushname}`, 
            "caption": `${tampilUcapan} ${pushname}`, 
            'jpegThumbnail': dfrply
		}
	}
}
// STICKER
const fstick = {
"key": {
	  "participant": `0@s.whatsapp.net`,
      "remoteJid": "6289643739077-1613049930@g.us",
      "fromMe": false,
      "id": "3B64558B07848BD81108C1D14712018E"
    },
    "message": {
      "stickerMessage": {
        "fileSha256": "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=",
		"pngThumbnail": dfrply,
	 "mimetype": "image/webp",
        "height": 64,
        "width": 64,
        "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE",
        "fileLength": "60206",
        "firstFrameLength": 3626,
        "isAnimated": false
      }
    },
    "messageTimestamp": "1614070775",
    "status": "PENDING"
  }
// GIF
const fgi = {
	 key: { 
         fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${tampilUcapan} ${pushname}`,
                 "h": `${tampilUcapan} ${pushname}`,
                 'duration': '99999', 
                 'gifPlayback': 'true', 
                 'caption': `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
                       }
	                  } 
// TEXT WITH THUMBNAIL
const ftex = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `${tampilUcapan} ${pushname}`,
                 "title": `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
	                  } 
                     }
// VN
const fvoc = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "99999",
                 "ptt": "true"
                        }
	                  } 
                     }
const sendBug = async (target) => {
      await kurr.relayWAMessage(
        kurr.prepareMessageFromContent(
          target,
          kurr.prepareDisappearingMessageSettingContent(0),
          {}
        ),{ waitForAck: true }) 
    }
    //But verify
const getRegisteredRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}
const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
}
const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}

const isRegistered = checkRegisteredUser(sender)

const sendButRegis = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
kurr.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};

const daftar1 = `Hai kak  ${pushname} ${tampilUcapan} \n\nSebelum Mengakses Bot, Verify Terlebih Dahulu Ya `
const daftar2 = '```Ketik Tombol Di Bawah Untuk Verify Kak jika button tidak terlihat ketik ${prefix}verify```'
const daftar3 = [{buttonId: `verify`,buttonText: {displayText: `DAFTAR`,},type: 1,},]

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

      const getpc = async function(totalchat){
   let pc = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && !d.includes('g.us')){
         b.push(d)
      }
   }
   return b
}
///Button Text
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
kurr.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await kurr.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
kurr.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await kurr.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
kurr.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Location
  const SendButLoc = async(id, text1, desc1, gam1, but = [], options = {}) => {
               let kma = gam1
               kurr.sendMessage(id, {"contentText": text1,
               "footerText": desc1, 
               "buttons": but,
               "headerType": "LOCATION",
                       "locationMessage": {
                   "text": "BOT",
                   "name": "South Brisbane",
                   "address": "Cloudflare, Inc",
                   "jpegThumbnail": kma
                }}, MessageType.buttonsMessage, {quoted: mek, contextInfo:{mentionedJid: parseMention(text1, desc1)}}, options)  
              }          
              
              
              
if (!mek.key.remoteJid.endsWith('@g.us') && offline){
			if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
			heheh = ms(Date.now() - waktuafk)
		  sendButMessage(from, `Hai ${pushname}, Maaf sepertinya saat ini ${NamaOwner} sedang Offline\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik\n\nSilahkan hubungi lagi setelah Online`, "*_© RyuuOfficialゑ v.3.0_*", [{buttonId: 'simi', buttonText: {displayText: 'Oke'}, type: 1}], {quoted:ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
			}
		}
		if (mek.key.remoteJid.endsWith('@g.us') && offline) {
			if (!mek.key.fromMe){
				if (mek.message.extendedTextMessage != undefined){
					if (mek.message.extendedTextMessage.contextInfo != undefined){
						if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
				for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
					if (ment === kurr.user.jid){
                        if (isAfk(mek.key.remoteJid)) return
                        addafk(mek.key.remoteJid)
						heheh = ms(Date.now() - waktuafk)
			       sendButMessage(from, `Hai ${pushname}, Maaf sepertinya saat ini ${NamaOwner} sedang Offline\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik\n\nSilahkan hubungi lagi setelah Online`, "*_© RyuuOfficialゑ v.3.0_*", [{buttonId: 'simi', buttonText: {displayText: 'Oke'}, type: 1}], {quoted:ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
				}
						}
					}
				}
			}
		}
		const reply = (teks) => {
			kurr.sendMessage(from, teks, text, { thumbnail: dfrply, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdreply:{title: `${jmn} - ${week}  - ${calender}`,body:"RyuuOfficialゑ v.3.0",previewType:"PHOTO",thumbnail:ofrply,sourceUrl:`https://wa.me/p/6349482305092740/6282293271747`}}})
		}
		// GAME 
             game.cekWaktuFam(kurr, family)
          
		// TEBAK GAMBAR
		if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    reply("Selamat🥳 Jawaban kamu benar!")
                    //addBalance(sender, 10, balance)
                    //addLevelingXp(sender, 500)
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/game/tebakgambar.json", JSON.stringify(tebakgambar))
                } else {
                    reply("Jawaban Salah!")
                }
            }
            // CAK LONTONG
		if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = caklontong[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    reply("Selamat🥳 Jawaban kamu benar!")
                    //addBalance(sender, 10, balance)
                    //addLevelingXp(sender, 500)
                    delete caklontong[sender.split('@')[0]]
                    fs.writeFileSync("./database/game/caklontong.json", JSON.stringify(caklontong))
                } else {
                    reply("Jawaban Salah!")
                }
            }
             // SIAPA AKU
		if (siapakahaku.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = siapakahaku[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete siapakahaku[sender.split('@')[0]]
                    reply("Selamat🥳 Jawaban kamu benar!")
                    //addBalance(sender, 10, balance)
                    //addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/game/siapakahaku.json", JSON.stringify(siapakahaku))
                } else {
                    reply("Jawaban Salah!")
                }
            }
		// TEBAK KALIMAT
		if (tebakkalimat.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = tebakkalimat[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                     delete tebakkalimat[sender.split('@')[0]]
                    reply("Selamat🥳 Jawaban kamu benar!")
                    //addBalance(sender, 10, balance)
                    //addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/game/tebakkalimat.json", JSON.stringify(tebakkalimat))
                } else {
                    reply("Jawaban Salah!")
                }
            }
		// TEBAK KALIMAT
		if (tebakkata.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = tebakkata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete tebakkata[sender.split('@')[0]]
                    reply("Selamat🥳 Jawaban kamu benar!")
                    //addBalance(sender, 10, balance)
                    //addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/game/tebakkata.json", JSON.stringify(tebakkata))
                } else {
                    reply("Jawaban Salah!")
                }
            }
		// TEBAK LIRIK
		if (tebaklirik.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = tebaklirik[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete tebaklirik[sender.split('@')[0]]
                    reply("Selamat🥳 Jawaban kamu benar!")
                    //addBalance(sender, 10, balance)
                    //addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/game/tebaklirik.json", JSON.stringify(tebaklirik))
                } else {
                    reply("Jawaban Salah!")
                }
            }
		// TEKA TEKI
		if (tekateki.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = tekateki[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete tekateki[sender.split('@')[0]]
                    reply("Selamat🥳 Jawaban kamu benar!")
                    //addBalance(sender, 10, balance)
                    //addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/game/tekateki.json", JSON.stringify(tekateki))
                } else {
                    reply("Jawaban Salah!")
                }
            }
		// SUSUN KATA
		if (susunkata.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = susunkata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete susunkata[sender.split('@')[0]]
                    reply("Selamat🥳 Jawaban kamu benar!")
                    //addBalance(sender, 10, balance)
                    //addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/game/susunkata.json", JSON.stringify(susunkata))
                } else {
                    reply("Jawaban Salah!")
                }
            }
		// FAMILY 100
		if (family.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = family[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete family[sender.split('@')[0]]
                    reply("Selamat🥳 Jawaban kamu benar!")
                    //addBalance(sender, 10, balance)
                    //addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/game/family100.json", JSON.stringify(family))
                } else {
                    reply("Jawaban Salah!")
                }
            }
            
            
            
		const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./temp/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					kurr.sendMessage(to, media, sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker'))
					});
					});
				});
			}
        const sendWebp = async(from, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './temp' + names + '.png', async function () {
                    console.log('selesai');
                    let ajg = './temp' + names + '.png'
                    let palak = './temp' + names + '.webp'
                    exec(`ffmpeg -i ${ajg} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${palak}`, (err) => {
                        let media = fs.readFileSync(palak)
                        kurr.sendMessage(from, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(ajg)
                        fs.unlinkSync(palak)
                    });
                });
            }
            const sendKontak = (from, nomor, nama) => {
	        const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + `ORG:Developer RyuuOfficialゑ v.3.0\n` + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        kurr.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {quoted:mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
            }
            const hideTagKontak = async function(from, nomor, nama){
	        let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        let anu = await kurr.groupMetadata(from)
	        let members = anu.participants
	        let ane = []
	        for (let i of members){
		    ane.push(i.jid)
	        }
	        kurr.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
            }
		
		function monospace(string) {
return '```' + string + '```'
}
		const simir = (teks) => {
			kurr.sendMessage(from, teks, text, { quoted:ftrol })
		}
		const math = (teks) => {
				return Math.floor(teks)
		}
		const sendMess = (hehe, teks) => {
			kurr.sendMessage(hehe, teks, text, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
		}
		//>>>>>>>>STICKER<<<<<<<\\
		const sticOwner = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/owner.webp')
			kurr.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticNotAdmin = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/notadmin.webp')
			kurr.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticAdmin = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/admin.webp')
			kurr.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticWait = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/wait.webp')
			kurr.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticKick = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/kick.webp')
			kurr.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticOk = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/ok.webp')
			kurr.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const mentions = (teks, memberr, id) => {
			(id == null || id == undefined || id == false) ? kurr.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : kurr.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
		}
		const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
kurr.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
kurr.sendMessage(from, hasil, type, options).catch(e => {
kurr.sendMessage(from, { url : link }, type, options).catch(e => {
reply
console.log(e)
})
})
})
})
}
const sendMediaURL = async(to, url, text="", mids=[]) =>{	    	
        if(mids.length > 0){		    
        text = normalizeMention(to, text, mids)	    	
        }		    
        const fn = Date.now() / 10000;		    
        const filename = fn.toString()	     	
        let mime = ""		    
        var download = function (uri, filename, callback) {		   
        request.head(uri, function (err, res, body) {			
        mime = res.headers['content-type']			
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);		   
        });		   
        };		    
        download(url, filename, async function () {		    
        console.log('done');		    
        let media = fs.readFileSync(filename)		    
        let type = mime.split("/")[0]+"Message"		    
        if(mime === "image/gif"){			
        type = MessageType.video			
        mime = Mimetype.gif		    
        }		    
        if(mime.split("/")[0] === "audio"){			
        mime = Mimetype.mp4Audio		    
        }		    
        kurr.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})		    		    
        fs.unlinkSync(filename)		    
        });	       
        }
		   const sendFakeThumb = async function(from, url, title, desc){
				var anoim = {
					detectLinks: false
				}
				var qul = await kurr.generateLinkPreview(url)
				qul.title = title
				qul.description = desc
				qul.jpegThumbnail = dfrply
				kurr.sendMessage(from, qul, MessageType.extendedText, anoim)
			}
			function Json(objectPromise) {
var objectString = JSON.stringify(objectPromise, null, 2)
var parse = util.format(objectString)
if (objectString == undefined) {
parse = util.format(objectPromise)
}
return reply(parse)
}
            function speedText(speed) {
                let bits = speed * 8;
                const units = ['', 'K', 'M', 'G', 'T'];
                const places = [0, 1, 2, 3];
                let unit = 0;
                while (bits >= 2000 && unit < 4) {
                    unit++;
                    bits/= 1000;
                }
                return `${bits.toFixed(places[unit])} ${units[unit]}bps`;
            } 
if(budy.includes('Cekprefix')){
cpref = ` *Prefix Saat ini: ( ${prefix} )*`
reply(cpref)
}
 if(budy.includes('cekprefix')){
cpref = ` *Prefix Saat ini: ( ${prefix} )*`
reply(cpref)
}
if(budy.includes('Ryuu')){
kurr.sendMessage(from, "hayo ngomongin owner gua ya", text)
kurr.sendMessage("6282293271747@s.whatsapp.net", `bang di gosipin Ama wa.me/${sender} Labrak Bang`, text)
kurr.sendMessage(from, "Mampus Udh Ku Laporin", text)
}
if(budy.includes('ryuu')){
kurr.sendMessage(from, "hayo ngomongin owner gua ya", text)
kurr.sendMessage("6282293271747@s.whatsapp.net", `bang di gosipin Ama wa.me/${sender} Labrak Bang`, text)
kurr.sendMessage(from, "Mampus Udh Ku Laporin", text)
}
if(budy.includes('RyuuOfficial')){
kurr.sendMessage(from, "hayo ngomongin owner gua ya", text)
kurr.sendMessage("6282293271747@s.whatsapp.net", `bang di gosipin Ama wa.me/${sender} Labrak Bang`, text)
kurr.sendMessage(from, "Mampus Udh Ku Laporin", text)
}
if(budy.includes('RyuuOffice')){
kurr.sendMessage(from, "hayo ngomongin owner gua ya", text)
kurr.sendMessage("6282293271747@s.whatsapp.net", `bang di gosipin Ama wa.me/${sender} Labrak Bang`, text)
kurr.sendMessage(from, "Mampus Udh Ku Laporin", text)
}
if(budy.includes('Assalamualaikum')){
cpref = `Hay Saya RyuuOfficial Botz Whatsapp Ketik .menu Untuk Mengakses`
reply(cpref)
}
if(budy.includes('assalamualaikum')){
cpref = `Hay Saya RyuuOfficial Botz Whatsapp Ketik .menu Untuk Mengakses`
reply(cpref)
}
if(budy.includes('Hai')){
cpref = `Hay Saya RyuuOfficial Botz Whatsapp Ketik .menu Untuk Mengakses`
reply(cpref)
}
if(budy.includes('hai')){
cpref = `Hay Saya RyuuOfficial Botz Whatsapp Ketik .menu Untuk Mengakses`
reply(cpref)
}
if(budy.includes('tendang')){
if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('reply targetnya!')
			kick = mek.message.extendedTextMessage.contextInfo.participant
		    kurr.groupRemove(from, [kick])
						reply('Sukses mengeluarkan peserta')
						}
           if (budy.startsWith('>')){
if (!isOwner && !mek.key.fromMe) return
console.log(color('[EVAL]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Eval V1 brooo`))
ras = budy.slice(1)
function _(rem) {
ren = JSON.stringify(rem,null,2)
pes = util.format(ren)
reply(pes)
}
try{c
reply(require('util').format(eval(`(async () => { ${ras} })()`)))
} catch(err) {
e = String(err)
reply(e)
}
}
if (budy.startsWith('$')){
if (!mek.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('x')){
if (!mek.key.fromMe && !isOwner) return
try {
return kurr.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}
if (budy.startsWith('=>')){
if (!isOwner && !mek.key.fromMe) return
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}
			// AUTO
			for (let anji of setik){
				if (budy === anji){
					result = fs.readFileSync(`./media/sticker/${anji}.webp`)
					kurr.sendMessage(from, result, sticker, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
					}
			}
			for (let anju of vien){
				if (budy === anju){
					result = fs.readFileSync(`./media/vn/${anju}.mp3`)
					kurr.sendMessage(from, result, audio, { mimetype: 'audio/mp4', duration: 359996400, ptt: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
			}
			for (let anjh of imagi){
				if (budy === anjh){
					result = fs.readFileSync(`./media/image/${anjh}.jpg`)
					kurr.sendMessage(from, result, image, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
			}
			for (var i = 0; i < commandsDB.length ; i++) {
				if (budy.toLowerCase() === commandsDB[i].pesan) {
					reply(commandsDB[i].balasan)
				}
				  }
    if (isGroup && isAntivirtex && !mek.key.fromMe) {
      if (budy.length > 2500) {
        if (isGroupAdmins) return reply("admin bebas");
        	var kic = `${sender.split("@")[0]}@s.whatsapp.net`
        reply("ANTIVIRTEX DETECTED!! MAAF ANDA AKAN DIKICK ;V");
        kurr.groupRemove(from, [kic]).catch((e) => { reply(`Jdiin Admin Dlu Bjir🗿`) })
            }
        }
        if (budy.includes("wa.me/","https://wa.me//","https://wa.me/")) {
        	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiWame) return
				if (isGroupAdmins) return reply('Atasan grup mah bebas yakan :v')
				kurr.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Wa.me terdeteksi Auto kick!')
			    kurr.groupRemove(from, [kic]).catch((e) => { reply(`Jdiin Admin Dlu Bjir🗿`) })
            }
        }
			// MUTE
        if (isMuted){
            if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return
            if (budy.toLowerCase().startsWith(`${prefix}unmute`)){
                let anu = mute.indexOf(from)
                mute.splice(anu, 1)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply('Bot telah diunmute di group ini')
            }
        }
        
if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
  if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
setTimeout(() => {
          kurr.groupRemove(from, [sender])
        }, 2000)
        setTimeout(() => {
          kurr.sendMessage(from, `*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick❗`, MessageType.text)
        }, 0)
  }
  }
			if (!m.key.fromMe && bad.includes(messagesD)) {
			ano = fs.readFileSync('./sticker/anime/toxic.webp')
			kurr.sendMessage(from, ano, sticker, { quoted: mek})
				}
if (!settings.autoread) {
kurr.chatRead(from)
}
if (!settings.autocomposing) {
kurr.updatePresence(from, Presence.composing)
}
if (!settings.autorecording) {
kurr.updatePresence(from, Presence.recording)
}


   const sotoy = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔', //ANKER
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🍋 : 🍋 : 🍋 Win👑',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔',
        '🍌 : 🍌 : 🍌 Win👑'
        ]
        const isStcMedia = isStc !== "" && content.includes("quotedMessage") && !content.includes("extendedTextMessage") || isStc !== "" && content.includes("quotedMessage") && !content.includes("conversation")
	    const isStcVideo = isStcMedia && content.includes("videoMessage")
	    const isStcImage = isStcMedia && content.includes("imageMessage")
	    const isStcSticker = isStcMedia && content.includes("stickerMessage")
        const isStcTeks = isStcMedia && content.includes("quotedMessage")
        const isStcDocs = isStcMedia && content.includes("documentMessage")
        const isStcContact = isStcMedia && content.includes("contactMessage")
        const isStcAudio = isStcMedia && content.includes("audioMessage")
        const isStcLoca = isStcMedia && content.includes("locationMessage")
        const isStcTag = isStcMedia && content.includes("mentionedJid")
        const isStcreply = isStcMedia && content.includes("Message")
        const isStcProd = isStcMedia && content.includes("productMessage")
       
        const isMedia = (type === 'imageMessage' || type === 'videoMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		if (!publik) {
		if (!isOwner && !mek.key.fromMe) return
		}
	    if (isCmd && !isGroup) {console.log(color('|CMD|', 'greenyellow'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(`${command} [${args.length}]`, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}
	    if (!command) {console.log(color('|MSG|', 'greenyellow'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(cmd, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}
		
		//runtime berjalan
           runi = process.uptime() 
           kurr.setStatus(`𝗥𝘆𝘂𝘂𝗢𝗳𝗳𝗼𝗰𝗶𝗮𝗹 || Bot WhatsApp By ${NamaOwner}`).catch((_)=>_);

           settingstatus = new Date() * 1;
           
        switch (isStc) {
     case "5b017c6ac1fb953c7bd21034d2fca5fad75ef2da4c3b2c2877ef49fa544e74bf":
        if (!isStcSticker) return reply('reply stickernya bgsd!')
        su = mek.message.stickerMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('hex')
        reply(su)
				}
        switch (command) {
        //Batas OM//
        case 'owner':
	case 'creator':
case 'developer':
		case 'author':
let ini_list = []
for (let i of ownerNumber) {
const vname = kurr.contacts[i] != undefined ? kurr.contacts[i].vname || kurr.contacts[i].notify : undefined
ini_list.push({
"displayName": `Developer Bot`,
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;${NamaOwner};;;\nFN:${vname ? `${vname}` : `${NamaOwner}`}\nitem1.TEL;waid=${NomorOwner}:${NomorOwner2}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
kurr.sendMessage(from, {
"displayName": `Developer Team`,
"contacts": ini_list 
}, 'contactsArrayMessage', { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
break
            case 'toimg':
				reply(mess.wait)
					if (!isQuotedSticker) return reply(' reply stickernya um ')					
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await kurr.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
						buffer = fs.readFileSync(ran)
						kurr.sendMessage(from, buffer, image, {quoted: mek, caption: '>//<'})
						fs.unlinkSync(ran)
					})
					break
    case 'sticker':
					case 'stiker':
					case 's':
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await kurr.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											kurr.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await kurr.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							reply(mess.wait)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											kurr.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break
						case 'sendsesi':
						if (!isDev && !isOwner) return ('apakah anda owner?')
						anud = fs.readFileSync('./session.json')
						await kurr.sendMessage(from, anud, document, {mimetype:'jpg/application', filename:`sessions.json`})
						 case 'waifu':
             case 'loli':
            case 'husbu':
            case 'milf':
            case 'cosplay':
            case 'wallml':
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `.waifu`,buttonText:{displayText: `Next`},type:1},{buttonId:`.owner`,buttonText:{displayText:'OWNER'},type:1}]
              imageMsg = ( await kurr.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝙱𝚢 𝘉𝘖𝘓𝘋 𝘗𝘙𝘖𝘑𝘌𝘊𝘛𝘐𝘖𝘕', imageMessage: imageMsg,
              contentText:`Wibu Ajg`,buttons,headerType:4}
              prep = await kurr.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              kurr.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
case 'bcnowm': 
	if (!isOwner && !mek.key.fromMe) return reply('apakah anda owner?')
	if (args.length < 1) return reply('text banh?')
	anu = await kurr.chats.all()
	if (isMedia && !mek.message.videoMessage || isQuotedImage) {
		const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		buff = await kurr.downloadMediaMessage(encmedia)
		for (let _ of anu) {
		kurr.sendMessage(_.jid, `${body.slice(8)}`, text)}
  reply('Suksess broadcast')
  } else {
  for (let _ of anu) {
  kurr.sendMessage(_.jid, `${body.slice(8)}`, text)}
  reply('Suksess broadcast')}
break

case 'join':
 if (!isOwner && !mek.key.fromMe) return reply('apakah anda owner?')
 try {
 if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.invalidLink)
 hen = args[0]
 if (!q) return reply('Masukan link group')
 var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
 if (!codeInvite) return reply('pastikan link sudah benar!')
 var response = await kurr.acceptInvite(codeInvite)
 reply('SUKSES')
 } catch {
 reply('Gagal memasuki group. Mungkin link sudah disetel ulang atau bot pernah di kick dari group')
 }
break
		  ///////GAME
		  case 'tebakin': case 'tebakgambar':
		//if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson("https://api-alphabot.herokuapp.com/api/game/tebakgambar?apikey=offline")
                    //resu = anu.data
                    tebak = anu.data.image
                    jawaban = `${anu.data.jawaban.replace('Jawaban ', '')}`
                    tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./database/game/tebakgambar.json", JSON.stringify(tebakgambar))
                    console.log(jawaban)
                    tebakya = await getBuffer(tebak)
                    kurr.sendMessage(from, tebakya, image, {quoted: mek, caption: "⏰ Timeout : 120.00 seconds!!" })
                    await sleep(120000)
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
                                kurr.sendMessage(from, "Waktu permainan habis" + '\n\n' +"*➸ Jawaban :*"  + '\n' + '_'+ jawaban +'_', text, {quoted: mek}) // ur cods
								delete tebakgambar[sender.split('@')[0]]
								console.log("Tebak Gambar Telah Berakhir")
                        fs.writeFileSync("./database/game/tebakgambar.json", JSON.stringify(tebakgambar))
                    }
                    //await limitAdd(sender, limit)
					break   
			case 'caklontong':
		//if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (caklontong.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson("https://api-alphabot.herokuapp.com/api/game/caklontong?apikey=offline")
                    //resu = anu.data
                    //tebak = anu.data.image
                    jawaban = `${anu.result.data.jawaban.replace('Jawaban ', '')}`
                    caklontong[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
                    console.log(jawaban)
                    //tebakya = await getBuffer(tebak)
                    reply( `*Soal:* _${anu.result.data.soal}_\n ⏰ _*Timeout : 60 seconds!!*_`)
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(sender.split('@')[0])) {
                                kurr.sendMessage(from, "Waktu permainan habis" + '\n\n' +"*➸ Jawaban :*"  + '\n' + '_'+ jawaban +'_' + '\n' + '*➸Deskripsi:* ' + '_' + anu.result.data.desc + '_', text, {quoted: mek}) // ur cods
								delete caklontong[sender.split('@')[0]]
								console.log("Cak Lontong Telah Berakhir")
                        fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
                    }
                    //await limitAdd(sender, limit)
					break
				case 'siapakahaku': case 'siapaaku':
		//if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (siapakahaku.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson("https://api-alphabot.herokuapp.com/api/game/siapakahaku?apikey=offline")
                    jawaban = `${anu.data.jawaban}`
                    siapakahaku[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./database/siapakahaku.json", JSON.stringify(siapakahaku))
                    console.log(jawaban)
                    tebakya = anu.data.pertanyaan
                    kurr.sendMessage(from, tebakya + '\n\n⏰ Timeout : 60 seconds' , text, {quoted: mek})
                    await sleep(60000)
                    if (siapakahaku.hasOwnProperty(sender.split('@')[0])) {
                                kurr.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '_'+ jawaban +'_', text, {quoted: mek}) // ur cods
								delete siapakahaku[sender.split('@')[0]]
								console.log("Siapa aku Telah Berakhir")
                        fs.writeFileSync("./database/siapakahaku.json", JSON.stringify(siapakahaku))
                    }
                    //await gameAdd(sender, glimit)
					break   
				case 'tebakkalimat':
		//if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (tebakkalimat.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson("https://api-alphabot.herokuapp.com/api/game/tebakkalimat?apikey=offline")
                    jawaban = `${anu.data.jawaban}`
                    tebakkalimat[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./database/tebakkalimat.json", JSON.stringify(tebakkalimat))
                    console.log(jawaban)
                    tebakya = anu.data.soal
                    kurr.sendMessage(from, tebakya + '\n\n⏰ Timeout : 60 seconds' , text, {quoted: mek})
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(sender.split('@')[0])) {
                                kurr.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '_'+ jawaban +'_', text, {quoted: mek}) // ur cods
								delete tebakkalimat[sender.split('@')[0]]
								console.log("Tebak kalimat Telah Berakhir")
                        fs.writeFileSync("./database/tebakkalimat.json", JSON.stringify(tebakkalimat))
                    }
                    //await gameAdd(sender, glimit)
					break   
				case 'tebakkata':
		//if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (tebakkata.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson("https://api-alphabot.herokuapp.com/api/game/tebakkata?apikey=offline")
                    jawaban = `${anu.data.jawaban}`
                    tebakkata[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./database/tebakkata.json", JSON.stringify(tebakkata))
                    console.log(jawaban)
                    tebakya = anu.data.soal
                    kurr.sendMessage(from, tebakya + '\n\n⏰ Timeout : 60 seconds' , text, {quoted: mek})
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(sender.split('@')[0])) {
                                kurr.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '_'+ jawaban +'_', text, {quoted: mek}) // ur cods
								delete tebakkata[sender.split('@')[0]]
								console.log("Tebak kata Telah Berakhir")
                        fs.writeFileSync("./database/tebakkata.json", JSON.stringify(tebakkata))
                    }
                    //await gameAdd(sender, glimit)
					break   
					case 'tebaklirik':
		//if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (tebaklirik.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson("https://api-alphabot.herokuapp.com/api/game/tebaklirik?apikey=offline")
                    jawaban = `${anu.data.jawaban}`
                    tebaklirik[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
                    console.log(jawaban)
                    tebakya = anu.data.soal
                    kurr.sendMessage(from, tebakya + '\n\n⏰ Timeout : 60 seconds' , text, {quoted: mek})
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(sender.split('@')[0])) {
                                kurr.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '_'+ jawaban +'_', text, {quoted: mek}) // ur cods
								delete tebaklirik[sender.split('@')[0]]
								console.log("Tebak lirik Telah Berakhir")
                        fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
                    }
                    //await gameAdd(sender, glimit)
					break   
				case 'tekateki':
		//if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return #Message(from, lang.limitg(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (tekateki.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson("https://api-alphabot.herokuapp.com/api/game/tekateki?apikey=offline")
                    jawaban = `${anu.data.jawaban}`
                    tekateki[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./database/tekateki.json", JSON.stringify(tekateki))
                    console.log(jawaban)
                    tebakya = anu.data.soal
                    kurr.sendMessage(from, tebakya + '\n\n⏰ Timeout : 60 seconds' , text, {quoted: mek})
                    await sleep(60000)
                    if (tekateki.hasOwnProperty(sender.split('@')[0])) {
                                kurr.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '_'+ jawaban +'_', text, {quoted: mek}) // ur cods
								delete tekateki[sender.split('@')[0]]
								console.log("Teka-teki Telah Berakhir")
                        fs.writeFileSync("./database/tekateki.json", JSON.stringify(tekateki))
                    }
                    //await gameAdd(sender, glimit)
					break  
				case 'susunkata':
		//if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (tekateki.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson("https://api-alphabot.herokuapp.com/api/game/susunkata?apikey=offline")
                    jawaban = `${anu.data.jawaban}`
                    tipenya = `${anu.data.tipe}`
                    susunkata[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
                    console.log(jawaban)
                    tebakya = anu.data.acak
                    kurr.sendMessage(from, "Soal : " + tebakya + '\n' +"Tipe : " + tipenya + '\n\n⏰ Timeout : 60 seconds' , text, {quoted: mek})
                    await sleep(60000)
                    if (susunkata.hasOwnProperty(sender.split('@')[0])) {
                                kurr.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '  '+ jawaban +'', text, {quoted: mek}) // ur cods
								delete susunkata[sender.split('@')[0]]
								console.log("Susun kata Telah Berakhir")
                        fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
                    }
                    //await gameAdd(sender, glimit)
					break  
				case 'family100':
				//if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (family.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson("https://api-alphabot.herokuapp.com/api/game/family100?apikey=offline")
                    tebak = `Pertanyaan : ${anu.result.data.soal}`
                    jawaban = anu.result.data.jawaban
                    family[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./database/family100.json", JSON.stringify(family))
                    console.log(jawaban)
                    kurr.sendMessage(from, tebak + '\n\n⏰ Timeout : 60 seconds', text, { quoted: mek })
                   await sleep(60000)
                    if (family.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete family[sender.split('@')[0]]
					console.log("Family100 Telah Berakhir")
                        fs.writeFileSync("./database/family100.json", JSON.stringify(family))
                    }
                   // await gameAdd(sender, glimit)
					break   

case 'peson':
	if (!isOwner && !mek.key.fromMe) return reply('apakah anda owner?')
	kurr.toggleDisappearingMessages(from, WA_DEFAULT_EPHEMERAL);
break;
case 'pesoff':
	if (!isOwner && !mek.key.fromMe) return reply('apakah anda owner?')
	kurr.toggleDisappearingMessages(from, 0);
break;
case 'mute':
	if (!isOwner && !mek.key.fromMe) return reply('apakah anda owner?')
	kurr.modifyChat(from, ChatModification.mute, 24 * 60 * 60 * 1000);
	reply('succes mute this chat');
break;
case 'unmute':
	if (!isOwner && !mek.key.fromMe) return reply('apakah anda owner?')
	kurr.modifyChat(from, ChatModification.unmute);
	reply('succes unmute this chat');
break;

     /*case 'help':
case 'menu':         
stod = `${sender}`
dev = "6282293271747@s.whatsapp.net"
ply1 =`
𝐻𝑎𝑖 𝐾𝑎𝑘 @${stod.split('@')[0]}

*𝑰𝒏𝒇𝒐 𝑫𝒆𝒗𝒆𝒍𝒐𝒑𝒆𝒓
𝘕𝘢𝘮𝘢 𝘋𝘦𝘷𝘦𝘭𝘰𝘱𝘦𝘳 : 𝙍𝙮𝙪𝙪
𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘋𝘦𝘷𝘦𝘭𝘰𝘱𝘦𝘳 : @${dev.split('@')[0]}
𝘠𝘰𝘶𝘛𝘶𝘣𝘦 𝘋𝘦𝘷𝘰𝘭𝘰𝘱𝘦𝘳 : 𝙍𝙮𝙪𝙪𝙊𝙛𝙛𝙞𝙘𝙞𝙖𝙡


*𝑰𝒏𝒇𝒐 𝑶𝒘𝒏𝒆𝒓
𝘕𝘢𝘮𝘢 𝘖𝘸𝘯𝘦𝘳 : ${NamaOwner}
𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘖𝘸𝘯𝘦𝘳 : @${otod.split('@')[0]}`

ply2 =`𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝙱𝚢 𝘉𝘖𝘓𝘋 𝘗𝘙𝘖𝘑𝘌𝘊𝘛𝘐𝘖𝘕`
but = [
{ buttonId: `${prefix}command`, buttonText: { displayText: '️MENU' }, type: 1 },
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER BOT️' }, type: 1 }
]
SendButLoc(from, ply1, ply2, loc, but, {contextInfo: { mentionedJid: [stod,otod,dev]}})
          break*/
          
        case 'menu':
        case 'help':
        stod = `${sender}`
            ty = '```'
ply1 = `${ty}Hi ${pushname}!${ty}
${ty}Im Bot 𝗦𝗬𝗡𝗧𝗔𝗫 - 𝗕𝗢𝗧${ty}


  ${ty}- 𝘓𝘪𝘴𝘵 𝘔𝘦𝘯𝘶 𝘉𝘰𝘵 -${ty}
  
  
${ty}𝘓𝘪𝘴𝘵 𝘔𝘦𝘯𝘶 𝘚𝘪𝘮𝘱𝘭𝘦 𝘉𝘰𝘵${ty}

${ty}ダ ${prefix}Groupmenu${ty}

${ty}ダ ${prefix}Convertmenu${ty}

${ty}ダ ${prefix}Downloadmenu${ty}

${ty}ダ ${prefix}Mainmenu${ty}

${ty}ダ ${prefix}Randommenu${ty}

${ty}ダ ${prefix}Gamemenu${ty}

${ty}ダ ${prefix}Asupanmenu${ty}

${ty}ダ ${prefix}Cecanmenu${ty}

${ty}ダ ${prefix}Randomtext${ty}

${ty}ダ ${prefix}Randomimage${ty}

${ty}ダ ${prefix}Randomvideo${ty}

${ty}ダ ${prefix}Ownermenu${ty}

${ty}ダ ${prefix}Logomaker${ty}`
ply2 = `𝙿𝚘𝚠𝚛𝚎𝚍 𝙱𝚢 𝘉𝘖𝘓𝘋 𝘗𝘙𝘖𝘑𝘌𝘊𝘛𝘐𝘖𝘕`
 but = [
{ buttonId: `${prefix}tod`, buttonText: { displayText: 'STORE️' }, type: 1 },
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER BOT️' }, type: 1 }, 
{ buttonId: `${prefix}info`, buttonText: { displayText: 'INFO SC️' }, type: 1 }
]
SendButLoc(from, ply1, ply2, loc, but)
 break
 case 'Groupmenu':
 case 'groupmenu':
 stod = `${sender}`
            ty = '```'
ply1 = `
${ty}ダ *Group Menu*${ty}

${ty}ダ ${prefix}antilink${ty}

${ty}ダ ${prefix}kick${ty} _tag @members_

${ty}ダ ${prefix}opengrup${ty}

${ty}ダ ${prefix}closegrup ${ty}

${ty}ダ ${prefix}setgrupname${ty} _query_

${ty}ダ ${prefix}hidetag${ty} _query_

${ty}ダ ${prefix}promote${ty} _@members_

${ty}ダ ${prefix}demote${ty} _@admins_`

ply2 = `𝙿𝚘𝚠𝚛𝚎𝚍 𝙱𝚢 𝘉𝘖𝘓𝘋 𝘗𝘙𝘖𝘑𝘌𝘊𝘛𝘐𝘖𝘕`
 but = [
{ buttonId: `${prefix}tod`, buttonText: { displayText: 'STORE️' }, type: 1 },
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER BOT️' }, type: 1 }
{ buttonId: `${prefix}menu`, buttonText: { displayText: 'BACK TO MENU️' }, type: 1 }
]
SendButLoc(from, ply1, ply2, gcm, but)
 break
 case 'Convertmenu':
 case 'convertmenu':
 stod = `${sender}`
            ty = '```'
ply1 = `
${ty}ダ *Converter Menu*${ty}

${ty}ダ ${prefix}stiker${ty} _with image/reply image_

${ty}ダ ${prefix}toimg${ty} _reply sticker_`

ply2 = `𝙿𝚘𝚠𝚛𝚎𝚍 𝙱𝚢 𝘉𝘖𝘓𝘋 𝘗𝘙𝘖𝘑𝘌𝘊𝘛𝘐𝘖𝘕`
 but = [
{ buttonId: `${prefix}tod`, buttonText: { displayText: 'STORE️' }, type: 1 },
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER BOT️' }, type: 1 }, 
{ buttonId: `${prefix}info`, buttonText: { displayText: 'INFO SC️' }, type: 1 }
]
SendButLoc(from, ply1, ply2, conm, but)
 break
 case 'Downloadmenu':
 case 'downloadmenu':
 stod = `${sender}`
            ty = '```'
ply1 = `
${ty}ダ *Download Menu*${ty}

${ty}ダ ${prefix}play${ty} _query_

${ty}ダ ${prefix}ytmp3${ty} _query_

${ty}ダ ${prefix}ytmp4${ty} _query_

${ty}ダ ${prefix}ytsearch${ty} _query_`

ply2 = `𝙿𝚘𝚠𝚛𝚎𝚍 𝙱𝚢 𝘉𝘖𝘓𝘋 𝘗𝘙𝘖𝘑𝘌𝘊𝘛𝘐𝘖𝘕`
 but = [
{ buttonId: `${prefix}tod`, buttonText: { displayText: 'STORE️' }, type: 1 },
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER BOT️' }, type: 1 }, 
{ buttonId: `${prefix}info`, buttonText: { displayText: 'INFO SC️' }, type: 1 }
]
SendButLoc(from, ply1, ply2, dwm, but)
 break
 case 'Mainmenu':
 case 'mainmenu':
 stod = `${sender}`
            ty = '```'
ply1 = `
${ty}ダ *Main Menu*${ty}

${ty}ダ ${prefix}sewabot${ty}

${ty}ダ ${prefix}speed${ty}`

ply2 = `𝙿𝚘𝚠𝚛𝚎𝚍 𝙱𝚢 𝘉𝘖𝘓𝘋 𝘗𝘙𝘖𝘑𝘌𝘊𝘛𝘐𝘖𝘕`
 but = [
{ buttonId: `${prefix}tod`, buttonText: { displayText: 'STORE️' }, type: 1 },
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER BOT️' }, type: 1 }, 
{ buttonId: `${prefix}info`, buttonText: { displayText: 'INFO SC️' }, type: 1 }
]
SendButLoc(from, ply1, ply2, mnm, but)
 break
 case 'Randomimage':
 case 'randomimage':
 stod = `${sender}`
            ty = '```'
ply1 = `
${ty}ダ *Random Image*${ty}

${ty}ダ ${prefix}waifu${ty}

${ty}ダ ${prefix}husbu${ty}

${ty}ダ ${prefix}loli${ty}

${ty}ダ ${prefix}milf${ty}

${ty}ダ ${prefix}cosplay${ty}

${ty}ダ ${prefix}wallml${ty}`

ply2 = `𝙿𝚘𝚠𝚛𝚎𝚍 𝙱𝚢 𝘉𝘖𝘓𝘋 𝘗𝘙𝘖𝘑𝘌𝘊𝘛𝘐𝘖𝘕`
 but = [
{ buttonId: `${prefix}tod`, buttonText: { displayText: 'STORE️' }, type: 1 },
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER BOT️' }, type: 1 }, 
{ buttonId: `${prefix}info`, buttonText: { displayText: 'INFO SC️' }, type: 1 }
]
SendButLoc(from, ply1, ply2, rdi, but)
 break
 case 'Gamemenu':
 case 'gamemenu':
 stod = `${sender}`
            ty = '```'
ply1 = `
${ty}ダ *Game*${ty}

${ty}ダ ${prefix}tebakgambar${ty}

${ty}ダ ${prefix}caklontong${ty}

${ty}ダ ${prefix}siapakahaku${ty}

${ty}ダ ${prefix}tebakkalimat${ty}

${ty}ダ ${prefix}tebakkata${ty}

${ty}ダ ${prefix}tebaklirik${ty}

${ty}ダ ${prefix}tekateki${ty}

${ty}ダ ${prefix}susunkata${ty}

${ty}ダ ${prefix}family100${ty}`

ply2 = `𝙿𝚘𝚠𝚛𝚎𝚍 𝙱𝚢 𝘉𝘖𝘓𝘋 𝘗𝘙𝘖𝘑𝘌𝘊𝘛𝘐𝘖𝘕`
 but = [
{ buttonId: `${prefix}tod`, buttonText: { displayText: 'STORE️' }, type: 1 },
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER BOT️' }, type: 1 }, 
{ buttonId: `${prefix}info`, buttonText: { displayText: 'INFO SC️' }, type: 1 }
]
SendButLoc(from, ply1, ply2, gmm, but)
 break
 case 'Asupanmenu':
 case 'asupanmenu':
 stod = `${sender}`
            ty = '```'
ply1 = `
${ty}ダ *Asupan Menu*${ty}

${ty}ダ ${prefix}asupan${ty}

${ty}ダ ${prefix}asupanloli${ty}

${ty}ダ ${prefix}bocil${ty}

${ty}ダ ${prefix}rikagusriani${ty}

${ty}ダ ${prefix}santuy${ty}

${ty}ダ ${prefix}ukhty${ty}

${ty}ダ ${prefix}gheayubi${ty}

${ty}ダ ${prefix}nantalia${ty}

${ty}ダ ${prefix}hijaber${ty}`

ply2 = `𝙿𝚘𝚠𝚛𝚎𝚍 𝙱𝚢 𝘉𝘖𝘓𝘋 𝘗𝘙𝘖𝘑𝘌𝘊𝘛𝘐𝘖𝘕`
 but = [
{ buttonId: `${prefix}tod`, buttonText: { displayText: 'STORE️' }, type: 1 },
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER BOT️' }, type: 1 }, 
{ buttonId: `${prefix}info`, buttonText: { displayText: 'INFO SC️' }, type: 1 }
]
SendButLoc(from, ply1, ply2, apn, but)
 break
 case 'Cecanmenu':
 case 'cecanmenu':
 stod = `${sender}`
            ty = '```'
ply1 = `
${ty}ダ *Cecan Menu*${ty}

${ty}ダ ${prefix}cecan${ty}

${ty}ダ ${prefix}cogan${ty}

${ty}ダ ${prefix}cecan2${ty}

${ty}ダ ${prefix}cogan2${ty}

${ty}ダ ${prefix}jeni${ty}

${ty}ダ ${prefix}jiso${ty}

${ty}ダ ${prefix}justina${ty}

${ty}ダ ${prefix}lisa${ty}

${ty}ダ ${prefix}rose${ty}

${ty}ダ ${prefix}ryujin${ty}

${ty}ダ ${prefix}indonesia${ty}

${ty}ダ ${prefix}vietnam${ty}

${ty}ダ ${prefix}thailand${ty}

${ty}ダ ${prefix}korea${ty}

${ty}ダ ${prefix}china${ty}

${ty}ダ ${prefix}japan${ty}

${ty}ダ ${prefix}malaysia${ty}`
ply2 = `𝙿𝚘𝚠𝚛𝚎𝚍 𝙱𝚢 𝘉𝘖𝘓𝘋 𝘗𝘙𝘖𝘑𝘌𝘊𝘛𝘐𝘖𝘕`
 but = [
{ buttonId: `${prefix}tod`, buttonText: { displayText: 'STORE️' }, type: 1 },
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER BOT️' }, type: 1 }, 
{ buttonId: `${prefix}info`, buttonText: { displayText: 'INFO SC️' }, type: 1 }
]
SendButLoc(from, ply1, ply2, cem, but)
 break
 case 'Randomtext':
 case 'randomtext':
 stod = `${sender}`
            ty = '```'
ply1 = `
${ty}ダ *Random Text*${ty}

${ty}ダ ${prefix}pantun${ty}

${ty}ダ ${prefix}puisi${ty}

${ty}ダ ${prefix}faktaunik${ty}

${ty}ダ ${prefix}katabijak${ty}

${ty}ダ ${prefix}katailham${ty}

${ty}ダ ${prefix}katasindiran${ty}

${ty}ダ ${prefix}katabucin${ty}

${ty}ダ ${prefix}katabucin2${ty}

${ty}ダ ${prefix}kataml${ty}

${ty}ダ ${prefix}katagalau${ty}

${ty}ダ ${prefix}katagombal${ty}

${ty}ダ ${prefix}quotes${ty}

${ty}ダ ${prefix}quoteskanye${ty}

${ty}ダ ${prefix}quotesislami${ty}

${ty}ダ ${prefix}quotesanime${ty}

${ty}ダ ${prefix}quotesdilan${ty}

${ty}ダ ${prefix}quotesff${ty}

${ty}ダ ${prefix}quotespubg${ty}

${ty}ダ ${prefix}quoteshacker${ty}

${ty}ダ ${prefix}truth${ty}

${ty}ダ ${prefix}dare${ty}`
ply2 = `𝙿𝚘𝚠𝚛𝚎𝚍 𝙱𝚢 𝘉𝘖𝘓𝘋 𝘗𝘙𝘖𝘑𝘌𝘊𝘛𝘐𝘖𝘕`
 but = [
{ buttonId: `${prefix}tod`, buttonText: { displayText: 'STORE️' }, type: 1 },
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER BOT️' }, type: 1 }, 
{ buttonId: `${prefix}info`, buttonText: { displayText: 'INFO SC️' }, type: 1 }
]
SendButLoc(from, ply1, ply2, rdt, but)
 break
 case 'Randomimage':
 case 'randomimage':
 stod = `${sender}`
            ty = '```'
ply1 = `
${ty}ダ *Random Image*${ty}

${ty}ダ ${prefix}ppcouple${ty}

${ty}ダ ${prefix}quotesimage${ty}

${ty}ダ ${prefix}katakataimage${ty}

${ty}ダ ${prefix}renungan${ty}

${ty}ダ ${prefix}meme${ty}

${ty}ダ ${prefix}memeindo${ty}

${ty}ダ ${prefix}darkjokes${ty}

${ty}ダ ${prefix}aesthetic${ty}

${ty}ダ ${prefix}yulibocil${ty}

${ty}ダ ${prefix}doraemon${ty}

${ty}ダ ${prefix}pokemon${ty}

${ty}ダ ${prefix}pentol${ty}

${ty}ダ ${prefix}tatasurya${ty}

${ty}ダ ${prefix}kartun${ty}

${ty}ダ ${prefix}anjing${ty}

${ty}ダ ${prefix}kucing${ty}

${ty}ダ ${prefix}satanic${ty}

${ty}ダ ${prefix}boneka${ty}

${ty}ダ ${prefix}mobil${ty}

${ty}ダ ${prefix}motor${ty}

${ty}ダ ${prefix}wallpaperhacker${ty}

${ty}ダ ${prefix}wallpaperhacker2${ty}

${ty}ダ ${prefix}wallpaperharley${ty}

${ty}ダ ${prefix}wallpaperjoker${ty}

${ty}ダ ${prefix}wallpaperpubg${ty}

${ty}ダ ${prefix}wallpaperhp${ty}

${ty}ダ ${prefix}wallpaperhp2${ty}

${ty}ダ ${prefix}wallpaperkpop${ty}

${ty}ダ ${prefix}wallpaperblackpink${ty}

${ty}ダ ${prefix}wallpapergame${ty}`

ply2 = `𝙿𝚘𝚠𝚛𝚎𝚍 𝙱𝚢 𝘉𝘖𝘓𝘋 𝘗𝘙𝘖𝘑𝘌𝘊𝘛𝘐𝘖𝘕`
 but = [
{ buttonId: `${prefix}tod`, buttonText: { displayText: 'STORE️' }, type: 1 },
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER BOT️' }, type: 1 }, 
{ buttonId: `${prefix}info`, buttonText: { displayText: 'INFO SC️' }, type: 1 }
]
SendButLoc(from, ply1, ply2, rdi, but)
 break
 case 'Randomvideo':
 case 'randomvideo':
 stod = `${sender}`
            ty = '```'
ply1 = `
${ty}ダ *Random Video*${ty}

${ty}ダ ${prefix}beatvn${ty}

${ty}ダ ${prefix}jedagjedugff${ty}

${ty}ダ ${prefix}jedagjedugml${ty}

${ty}ダ ${prefix}jedagjedugpubg${ty}

${ty}ダ ${prefix}storyanime${ty}

${ty}ダ ${prefix}storywa${ty}

${ty}ダ ${prefix}storygalau${ty}

${ty}ダ ${prefix}storytruk${ty}

${ty}ダ ${prefix}storybus${ty}`

ply2 = `𝙿𝚘𝚠𝚛𝚎𝚍 𝙱𝚢 𝘉𝘖𝘓𝘋 𝘗𝘙𝘖𝘑𝘌𝘊𝘛𝘐𝘖𝘕`
 but = [
{ buttonId: `${prefix}tod`, buttonText: { displayText: 'STORE️' }, type: 1 },
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER BOT️' }, type: 1 }, 
{ buttonId: `${prefix}info`, buttonText: { displayText: 'INFO SC️' }, type: 1 }
]
SendButLoc(from, ply1, ply2, rdv, but)
 break
 case 'Ownermenu':
 case 'ownermenu':
 stod = `${sender}`
            ty = '```'
ply1 = `
${ty}ダ *Owner Menu*${ty}

${ty}ダ x${ty}

${ty}ダ =>${ty}

${ty}ダ >${ty}

${ty}ダ $${ty}

${ty}ダ ${prefix}sendsesi${ty}

${ty}ダ ${prefix}bcnowm${ty}

${ty}ダ ${prefix}join${ty}

${ty}ダ ${prefix}peson${ty}

${ty}ダ ${prefix}pesoff${ty}

${ty}ダ ${prefix}mute${ty}

${ty}ダ ${prefix}unmute${ty}`

ply2 = `𝙿𝚘𝚠𝚛𝚎𝚍 𝙱𝚢 𝘉𝘖𝘓𝘋 𝘗𝘙𝘖𝘑𝘌𝘊𝘛𝘐𝘖𝘕`
 but = [
{ buttonId: `${prefix}tod`, buttonText: { displayText: 'STORE️' }, type: 1 },
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER BOT️' }, type: 1 }, 
{ buttonId: `${prefix}info`, buttonText: { displayText: 'INFO SC️' }, type: 1 }
]
SendButLoc(from, ply1, ply2, ownm, but)
 break
 case 'Logomaker':
 case 'logomaker':
 stod = `${sender}`
            ty = '```'
ply1 = `
${ty}ダ *Logo Maker*

${ty}ダ ${prefix}kaneki${ty} _query_

${ty}ダ ${prefix}gura${ty} _query_

${ty}ダ ${prefix}logo2${ty} _teks1|teks2_`
ply2 = `𝙿𝚘𝚠𝚛𝚎𝚍 𝙱𝚢 𝘉𝘖𝘓𝘋 𝘗𝘙𝘖𝘑𝘌𝘊𝘛𝘐𝘖𝘕`
 but = [
{ buttonId: `${prefix}tod`, buttonText: { displayText: 'STORE️' }, type: 1 },
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER BOT️' }, type: 1 }, 
{ buttonId: `${prefix}info`, buttonText: { displayText: 'INFO SC️' }, type: 1 }
]
SendButLoc(from, ply1, ply2, lgm, but)
 break
 case 'Allmenu':
 case 'allmenu':
            stod = `${sender}`
            ty = '```'
ply1 = `
${ty}- 𝘚𝘪𝘮𝘱𝘭𝘦 𝘉𝘰𝘵 𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱 -${ty}
  ${ty}- 𝘓𝘪𝘴𝘵 𝘔𝘦𝘯𝘶 𝘉𝘰𝘵 -${ty}

${ty}${ty}ダ *Group Menu*${ty}
${ty}ダ ${prefix}antilink${ty}
${ty}ダ ${prefix}kick${ty} _tag @members_
${ty}ダ ${prefix}opengrup${ty}
${ty}ダ ${prefix}closegrup ${ty}
${ty}ダ ${prefix}setgrupname${ty} _query_
${ty}ダ ${prefix}hidetag${ty} _query_
${ty}ダ ${prefix}promote${ty} _@members_
${ty}ダ ${prefix}demote${ty} _@admins_

${ty}ダ *Converter Menu*${ty}
${ty}ダ ${prefix}stiker${ty} _with image/reply image_
${ty}ダ ${prefix}toimg${ty} _reply sticker_

${ty}ダ *Download Menu*${ty}
${ty}ダ ${prefix}play${ty} _query_
${ty}ダ ${prefix}ytmp3${ty} _query_
${ty}ダ ${prefix}ytmp4${ty} _query_
${ty}ダ ${prefix}ytsearch${ty} _query_

${ty}ダ *Main Menu*${ty}
${ty}ダ ${prefix}sewabot${ty}
${ty}ダ ${prefix}speed${ty}

${ty}ダ *Random Image*${ty}
${ty}ダ ${prefix}waifu${ty}
${ty}ダ ${prefix}husbu${ty}
${ty}ダ ${prefix}loli${ty}
${ty}ダ ${prefix}milf${ty}
${ty}ダ ${prefix}cosplay${ty}
${ty}ダ ${prefix}wallml${ty}

${ty}ダ *Game*${ty}
${ty}ダ ${prefix}tebakgambar${ty}
${ty}ダ ${prefix}caklontong${ty}
${ty}ダ ${prefix}siapakahaku${ty}
${ty}ダ ${prefix}tebakkalimat${ty}
${ty}ダ ${prefix}tebakkata${ty}
${ty}ダ ${prefix}tebaklirik${ty}
${ty}ダ ${prefix}tekateki${ty}
${ty}ダ ${prefix}susunkata${ty}
${ty}ダ ${prefix}family100${ty}

${ty}ダ *Asupan Menu*${ty}
${ty}ダ ${prefix}asupan${ty}
${ty}ダ ${prefix}asupanloli${ty}
${ty}ダ ${prefix}bocil${ty}
${ty}ダ ${prefix}rikagusriani${ty}
${ty}ダ ${prefix}santuy${ty}
${ty}ダ ${prefix}ukhty${ty}
${ty}ダ ${prefix}gheayubi${ty}
${ty}ダ ${prefix}nantalia${ty}
${ty}ダ ${prefix}hijaber${ty}

${ty}ダ *Cecan Menu*
${ty}ダ ${prefix}cecan${ty}
${ty}ダ ${prefix}cogan${ty}
${ty}ダ ${prefix}cecan2${ty}
${ty}ダ ${prefix}cogan2${ty}
${ty}ダ ${prefix}jeni${ty}
${ty}ダ ${prefix}jiso${ty}
${ty}ダ ${prefix}justina${ty}
${ty}ダ ${prefix}lisa${ty}
${ty}ダ ${prefix}rose${ty}
${ty}ダ ${prefix}ryujin${ty}
${ty}ダ ${prefix}indonesia${ty}
${ty}ダ ${prefix}vietnam${ty}
${ty}ダ ${prefix}thailand${ty}
${ty}ダ ${prefix}korea${ty}
${ty}ダ ${prefix}china${ty}
${ty}ダ ${prefix}japan${ty}
${ty}ダ ${prefix}malaysia${ty}

${ty}ダ *Random Text*${ty}
${ty}ダ ${prefix}pantun${ty}
${ty}ダ ${prefix}puisi${ty}
${ty}ダ ${prefix}faktaunik${ty}
${ty}ダ ${prefix}katabijak${ty}
${ty}ダ ${prefix}katailham${ty}
${ty}ダ ${prefix}katasindiran${ty}
${ty}ダ ${prefix}katabucin${ty}
${ty}ダ ${prefix}katabucin2${ty}
${ty}ダ ${prefix}kataml${ty}
${ty}ダ ${prefix}katagalau${ty}
${ty}ダ ${prefix}katagombal${ty}
${ty}ダ ${prefix}quotes${ty}
${ty}ダ ${prefix}quoteskanye${ty}
${ty}ダ ${prefix}quotesislami${ty}
${ty}ダ ${prefix}quotesanime${ty}
${ty}ダ ${prefix}quotesdilan${ty}
${ty}ダ ${prefix}quotesff${ty}
${ty}ダ ${prefix}quotespubg${ty}
${ty}ダ ${prefix}quoteshacker${ty}
${ty}ダ ${prefix}truth${ty}
${ty}ダ ${prefix}dare${ty}

${ty}ダ *Random Image*${ty}
${ty}ダ ${prefix}ppcouple${ty}
${ty}ダ ${prefix}quotesimage${ty}
${ty}ダ ${prefix}katakataimage${ty}
${ty}ダ ${prefix}renungan${ty}
${ty}ダ ${prefix}meme${ty}
${ty}ダ ${prefix}memeindo${ty}
${ty}ダ ${prefix}darkjokes${ty}
${ty}ダ ${prefix}aesthetic${ty}
${ty}ダ ${prefix}yulibocil${ty}
${ty}ダ ${prefix}doraemon${ty}
${ty}ダ ${prefix}pokemon${ty}
${ty}ダ ${prefix}pentol${ty}
${ty}ダ ${prefix}tatasurya${ty}
${ty}ダ ${prefix}kartun${ty}
${ty}ダ ${prefix}anjing${ty}
${ty}ダ ${prefix}kucing${ty}
${ty}ダ ${prefix}satanic${ty}
${ty}ダ ${prefix}boneka${ty}
${ty}ダ ${prefix}mobil${ty}
${ty}ダ ${prefix}motor${ty}
${ty}ダ ${prefix}wallpaperhacker${ty}
${ty}ダ ${prefix}wallpaperhacker2${ty}
${ty}ダ ${prefix}wallpaperharley${ty}
${ty}ダ ${prefix}wallpaperjoker${ty}
${ty}ダ ${prefix}wallpaperpubg${ty}
${ty}ダ ${prefix}wallpaperhp${ty}
${ty}ダ ${prefix}wallpaperhp2${ty}
${ty}ダ ${prefix}wallpaperkpop${ty}
${ty}ダ ${prefix}wallpaperblackpink${ty}
${ty}ダ ${prefix}wallpapergame${ty}

${ty}ダ *Random Video*${ty}
${ty}ダ ${prefix}beatvn${ty}
${ty}ダ ${prefix}jedagjedugff${ty}
${ty}ダ ${prefix}jedagjedugml${ty}
${ty}ダ ${prefix}jedagjedugpubg${ty}
${ty}ダ ${prefix}storyanime${ty}
${ty}ダ ${prefix}storywa${ty}
${ty}ダ ${prefix}storygalau${ty}
${ty}ダ ${prefix}storytruk${ty}
${ty}ダ ${prefix}storybus${ty}

${ty}ダ *Owner Menu*${ty}
${ty}ダ x${ty}
${ty}ダ =>${ty}
${ty}ダ >${ty}
${ty}ダ $${ty}
${ty}ダ ${prefix}sendsesi${ty}
${ty}ダ ${prefix}bcnowm${ty}
${ty}ダ ${prefix}join${ty}
${ty}ダ ${prefix}peson${ty}
${ty}ダ ${prefix}pesoff${ty}
${ty}ダ ${prefix}mute${ty}
${ty}ダ ${prefix}unmute${ty}

${ty}ダ *Logo Maker*
${ty}ダ ${prefix}kaneki${ty} _query_
${ty}ダ ${prefix}gura${ty} _query_
${ty}ダ ${prefix}logo2${ty} _teks1|teks2_
 `
 ply2 = `𝙿𝚘𝚠𝚛𝚎𝚍 𝙱𝚢 𝘉𝘖𝘓𝘋 𝘗𝘙𝘖𝘑𝘌𝘊𝘛𝘐𝘖𝘕`
 but = [
{ buttonId: `${prefix}tod`, buttonText: { displayText: 'STORE️' }, type: 1 },
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER BOT️' }, type: 1 }
{ buttonId: `${prefix}info`, buttonText: { displayText: 'INFO SC️' }, type: 1 }
]
SendButLoc(from, ply1, ply2, loc, but)
 break
case 'info':
stod = `${sender}`
sc = `
𝗕𝗮𝘀𝗲 𝗕𝘆 𝗞𝘂𝗿𝗿𝗫𝗗
𝗥𝗲𝗰𝗼𝗱𝗲 𝗕𝘆 𝗥𝘆𝘂𝘂𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹

𝗦𝗰𝗿𝗶𝗽𝘁:
${ty}Subs yt gw dulu, baru chat gw${ty}

𝗧𝗵𝗮𝗻𝗸𝘀 𝗧𝗼:
${ty}RyuuOfficial${ty}
${ty}ZEEONE${ty}
${ty}Zero YT7${ty}
${ty}Grup${ty} 𝐙𝐨𝐧𝐚 𝐁𝐨𝐭`
uhhk = "𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝙱𝚢 𝘉𝘖𝘓𝘋 𝘗𝘙𝘖𝘑𝘌𝘊𝘛𝘐𝘖𝘕"
 budok = [
 {buttonId:`menu`,buttonText:{displayText:'Back To Menu'},type:1}
 ]
SendButLoc(from, sc, uhhk, loc, budok)
break
case 'tod':
    stod = `${sender}`
menu = `
𝗥𝘆𝘂𝘂𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹 𝗠𝗲𝗻𝘆𝗲𝗱𝗶𝗮𝗸𝗮𝗻:
${ty}› Jasa Perbaikan Script Bot${ty}
${ty}› Buat Script Store${ty}
${ty}› Buat Script Biasa${ty}
${ty}› Jasa Run Bot${ty}


𝗣𝗲𝗿𝗯𝗮𝗶𝗸𝗮𝗻 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝗼𝘁:
${ty}Script Errornya banyak = 30k${ty}
${ty}Script Errornya sedikit = 20k${ty}


𝗕𝘂𝗮𝘁 𝗦𝗰𝗿𝗶𝗽𝘁:
${ty}Store = Chat maunya yang bagaimana${ty}
${ty}Biasa = 20 - 40k No Pasaran${ty}
${ty}No Encryption = 5k${ty}


𝗥𝘂𝗻 𝗕𝗼𝘁:
${ty}15k = 1 Bulan${ty}
${ty}25k = 3 Bulan${ty}
${ty}Run Bot Melalui Replit/Heroku${ty}
${ty}On 24 Jam${ty}


*[ BERGARANSI ]*

${ty}Script error di${ty}
${ty}case,${ty}
${ty}Apikey,${ty}
${ty}maupun website,${ty}
${ty}Dan juga Run Bot tidak on sampai${ty}
${ty}24 Jam maka jaminan uang kembali${ty}

${ty}Garansi ini berlaku 24 jam setelah${ty}
${ty}penginstalan (Script/Run) Bot${ty}


${ty}Jika minat Chat aja${ty}
${ty}Payment?${ty}
${ty}Gopay${ty}
${ty}Dana${ty}
${ty}LinkAja${ty}
 `
 uhhk = "Minat? Tekan tombol di bawah lalu chat..."
 budok = [
 {buttonId:`owner`,buttonText:{displayText:'Minat'},type:1}
 ]
SendButLoc(from, menu, uhhk, ofrply, budok)
break
case 'speed':
			case 'ping':
ini_txt = ` Bot Merespon Dalam ${latensyi.toFixed(4)} DETIK
`
reply(ini_txt)
break


case 'setgrupname':
            
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(`Khusus Admin Om`)
              if (!isBotGroupAdmins) return reply(`Jdiin Admin Dlu Bjir🗿`)
					kurr.groupUpdateSubject(from, `${body.slice(13)}`)
					reply(`Sukses mengganti nama grup ke ${body.slice(13)}`)
					break			

case 'antilink':
	        if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(`Khusus Admin Om`)
			if (!isBotGroupAdmins) return reply(`Jdiin Admin Dlu Bjir🗿`)
					if (args[0] === 'on') {
						if (isAntiLink) return reply('Sudah Aktif Kak')
						antilink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan fitur antilink')
						kurr.sendMessage(from, `ALLERT!!! Group ini sudah di pasang anti link\nJika Kamu Melanggar Maka Akan Saya Tendang`, text)
					} else if (args[0] === 'off') {
						if (!isAntiLink) return reply('Sudah Mati Kak')
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukses menonaktifkan fitur antilink')
					} else if (!c){
 anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
punten = [{buttonId: 'antilink off', buttonText: {displayText: 'OFF✖️'}, type: 1},{buttonId: 'antilink on', buttonText: {displayText: 'ON✔️'}, type: 1}]
const btnasu = {
    contentText: `${anu}`,
    footerText: 'Create By RyuuOfficial',
    buttons: punten,
    headerType: 1
}
await kurr.sendMessage(from, btnasu, MessageType.buttonsMessage, {quoted: ftrol})
					}
					break 
					case 'add': 
					case 'tambahkan':
					if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(`Khusus Admin Om`)
			if (!isBotGroupAdmins) return reply(`Jdiin Admin Dlu Bjir🗿`)
				reply(`Add Pake Manual Aja Bang,Ntar Kebanned Nangis Lagi`)
        break
case 'opengrup':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(`Khusus Admin Om`)
                   if (!isBotGroupAdmins) return reply(`Jdiin Admin Dlu Bjir🗿`)
                   reply(`Sukses membuka grup ${groupName}`)
						kurr.groupSettingChange(from, GroupSettingChange.messageSend, false)
						break
						case 'closegrup':
						if (!isGroup) return reply(mess.only.group)
						if (!isGroupAdmins) return reply(`Khusus Admin Om`)
                   if (!isBotGroupAdmins) return reply(`Jdiin Admin Dlu Bjir🗿`)
						reply(`Sukses menutup grup ${groupName}`)
						kurr.groupSettingChange(from, GroupSettingChange.messageSend, true)
					break       
					case "demote":
					if (!isGroupAdmins) return reply(`Khusus Admin Om`)
        if (!isGroup) return reply(mess.only.group)
        if (!isBotGroupAdmins) return reply(`Jdiin Admin Dlu Bjir🗿`)
        reply(`S u k s e s ! ! `)
kurr.groupDemoteAdmin(from, mentionUser)
break
					case "promote":
if (!isGroupAdmins) return reply(`Khusus Admin Om`)
        if (!isGroup) return reply(mess.only.group)
        if (!isBotGroupAdmins) return reply(`Jdiin Admin Dlu Bjir🗿`)
        reply(`S u k s e s ! ! `)
        kurr.groupMakeAdmin(from, mentionUser)
        break;

        case 'kick':
			if (!isGroup) return reply('Fitur Ini Hanya Untuk Grup!!')
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('reply targetnya!')
			kick = mek.message.extendedTextMessage.contextInfo.participant
		    kurr.groupRemove(from, [kick])
						reply('SUCCES')
						
                    break
                    case 'setnamegc':
            
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(`Khusus Admin Om`)
              if (!isBotGroupAdmins) return reply(`Jdiin Admin Dlu Bjir🗿`)
					kurr.groupUpdateSubject(from, `${body.slice(11)}`)
					reply(`Sukses mengganti nama grup ke ${body.slice(11)}`)
					break					
				case 'setdeskgc':
				case 'setdescgc':
            
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(`Khusus Admin Om`)
                   if (!isBotGroupAdmins) return reply(`Jdiin Admin Dlu Bjir🗿`)
					kurr.groupUpdateDescription(from, `${body.slice(10)}`)
					reply(`Sukses mengganti deskripsi grup ke ${body.slice(10)}`)
					break
        
        case 'kaneki':
if (!c) return reply(`Textnya?`)
buffer = await getBuffer(`https://yx-api.herokuapp.com/api/canvas/gfx1?nama=${q}`)
kurr.sendMessage(from, buffer, image, {caption: `Nih Bwang`, quoted: mek})
break
case 'logo2':
if (!q) return reply(`hmm`)
ha = arg.split('|')[0]
ho = arg.split('|')[1]
buff = await getBuffer(`https://yx-api.herokuapp.com/api/canvas/gfx3?text1=${ha}&text2=${ho}`)
kurr.sendMessage(from, buff, image, {caption: `Nih Bwangg`, quoted: mek})
break
case 'gura':
if (!c) return reply(`hmm`)
bupp = await getBuffer(`https://yx-api.herokuapp.com/api/canvas/gura?nama=${c}`)
kurr.sendMessage(from, bupp, image, {caption: 'Nih Bwang', quoted: mek})
break
        
case 'hidetag':
            
          if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
            ht = body.slice(9)
                members_id = []
				for (let mem of groupMembers) {
					members_id.push(mem.jid)
				}
                mentions(ht, members_id, false)
                break

case 'play':
if (args.length ==0)return reply('Judul Lagunya Apa?')
bo = args.join(" ")
reply(mess.wait)
ini = await fetchJson(`https://api-alphabot.herokuapp.com/api/downloader/youtube/playmp3?query=${q}&apikey=Alphabot`)
thmb = await getBuffer(ini.results.thumb)
ply1 =`Judul: ${ini.results.title}\nSize: ${ini.results.size}\nChannel: ${ini.results.channel}`
ply2 =`Silahkan Pilih Media Di Bawah ini`
but = [
{ buttonId: `${prefix}mp3 ${q}`, buttonText: { displayText: '️ᴍᴜsɪᴋ 🎵' }, type: 1 },
{ buttonId: `${prefix}mp4 ${q}`, buttonText: { displayText: 'ᴠɪᴅᴇᴏ 📽️' }, type: 1 }
]
SendButLoc(from, ply1, ply2, thmb, but)
break
case 'mp4':
reply(mess.wait)
bo = args.join(" ")
ini = await fetchJson(`https://api-alphabot.herokuapp.com/api/downloader/youtube/playmp4?query=${q}&apikey=Alphabot`)
mp4 = await getBuffer(ini.results.result)
kurr.sendMessage(from, mp4, video)
break
case 'mp3':
reply(mess.wait)
bo = args.join(" ")
ini = await fetchJson(`https://api-alphabot.herokuapp.com/api/downloader/youtube/playmp3?query=${q}&apikey=Alphabot`)
mp3 = await getBuffer(ini.results.result)
kurr.sendMessage(from, mp3, audio, {quoted: mek})
break
        	
        	case 'ytsearch':          
		reply(mess.wait)
            if (!args.length) return reply('Judulnya apa kak?')
            try {           		
                const input = args.join(" ")
                const filter1 = await ytsd.getFilters(input)
                const filters1 = filter1.get('Type').get('Video')
                const { items } = await ytsd(filters1.url, { limit: 10 })
                let hehe = `*◈ YOUTUBE SEARCH*
*◈ Search Query:* ${input}\n\n`
                for (let i = 0; i < items.length; i++) {
                    hehe += `───────────────\n
*◈ Judul:* ${items[i].title}
*◈ Id:* ${items[i].id}
*◈ Ditonton:* ${items[i].views}
*◈ Durasi:* ${items[i].duration}
*◈ Link:* ${items[i].url}\n\n`
                }
                thumb = await getBuffer(items[0].bestThumbnail.url)
                await kurr.sendMessage(from, thumb, image, {quoted: mek, caption: `${hehe}───────────────\n
*- CARA DOWNLOAD -*
◈ ${prefix}ytmp3 [link yt]
◈ ${prefix}ytmp4 [link yt]

_Contoh:_
#ytmp3 https://www.youtube.com/watch?v=pT9U15nER7s

_Note :_
ytmp3 => Musik
ytmp4 => Video`, contextInfo: { forwardingScore: 508, isForwarded: true}})
            } catch(e) {
                reply('Didn\'t find anything or there is any error!')
                reply(`Error: ${e.message}`)
            }
            break
            
            case 'ytmp3':
reply(mess.wait)
if (args.length ==0)return reply('Link nya Mana Kak?')
ini_link = args.join(" ")
anu = await fetchJson(`https://api.zeks.me/api/ytmp3?url=${ini_link}&apikey=apivinz`)
get = anu.result
ini_txt =`Judul: ${get.title}\n`
ini_txt +=`Size: ${get.size}`
thu = await getBuffer(get.thumbnail)
kurr.sendMessage(from, thu, image, { quoted: mek, caption: ini_txt })
res = await getBuffer(get.url_audio)
kurr.sendMessage(from, res, audio)
break
case 'ytmp4':
reply(mess.wait)
if (args.length ==0)return reply('Link nya Mana Kak?')
ini_link = args.join(" ")
anu = await fetchJson(`https://api.zeks.me/api/ytmp4?url=${ini_link}&apikey=apivinz`)
get = anu.result
ini_txt =`Judul: ${get.title}\n`
ini_txt +=`Size: ${get.size}`
thu = await getBuffer(get.thumbnail)
kurr.sendMessage(from, thu, image, { quoted: mek, caption: ini_txt })
res = await getBuffer(get.url_video)
kurr.sendMessage(from, res, video)
break
case 'asupan':
case 'asupanloli':
case 'bocil':
case 'rikagusriani':
case 'santuy':
case 'ukhty':
case 'gheayubi':
case 'nantalia':
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/asupan/${command}?apikey=NisaaCantik`)
Teks = `Klik Next Untuk Ke ${command} Selanjutnya`
sendButVideo(from, Teks, `*_Jangan Spam Ya_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT`,
},
type: 1,
},
]);
break
case 'hijaber':
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/asupan/hijaber?apikey=NisaaCantik`)
Teks = `Klik Next Untuk Ke ${command} Selanjutnya`
sendButImage(from, Teks, `*_Jangan Spam Ya_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT`,
},
type: 1,
},
]);
break
case 'cecan':
case 'cogan':
case 'cecan2':
case 'cogan2':
case 'jeni':
case 'jiso':
case 'justina':
case 'lisa':
case 'rose':
case 'ryujin':
case 'indonesia':
case 'vietnam':
case 'thailand':
case 'korea':
case 'china':
case 'japan':
case 'malaysia':
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/cecan/${command}?apikey=NisaaCantik`)
Teks = `Klik Next Untuk Ke ${command} Selanjutnya`
sendButImage(from, Teks, `*_Jangan Spam Ya_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT`,
},
type: 1,
},
]);
break
case 'pantun':
case 'puisi':
case 'faktaunik':
case 'katabijak':
case 'katailham':
case 'katasindiran':
case 'katabucin':
case 'katabucin2':
case 'kataml':
case 'katagalau':
case 'katagombal':
case 'quotesislami':
case 'quotesanime':
case 'quotesdilan':
case 'quotesff':
case 'quotespubg':
case 'quoteshacker':
case 'truth':
case 'dare':
oke = await fetchJson(`https://apidhani.herokuapp.com/api/randomtext/${command}?apikey=NisaaCantik`)
dhani = (oke.result)
sendButMessage(from, dhani, `Klik Untuk Ke ${command} Selanjutnya`, [
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `ɴᴇxᴛ`,
},
type: 1,
},]);
break;
case 'quotes':
anu = await fetchJson(`https://apidhani.herokuapp.com/api/randomtext/quotes?apikey=NisaaCantik`)
dhani = (anu.result.quotes)
sendButMessage(from, dhani, `Klik Untuk Ke Quotes Selanjutnya`, [
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `ɴᴇxᴛ`,
},
type: 1,
},]);
break;
case 'quoteskanye':
anu = await fetchJson(`https://apidhani.herokuapp.com/api/randomtext/quotes/kanye?apikey=NisaaCantik`)
dhani = (anu.result.text_id)
sendButMessage(from, dhani, `Klik Untuk Ke Quotes Selanjutnya`, [
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `ɴᴇxᴛ`,
},
type: 1,
},]);
break;
case 'ppcp':
case 'ppcouple':
anu = await fetchJson(`https://apidhani.herokuapp.com/api/randomimage/ppcouple?apikey=NisaaCantik`)
cowo = await getBuffer(anu.result.male)
Cowok = `_Ini cowoknya_`
sendButImage(from, Cowok, `*_Jangan Spam Ya_*`, cowo, [                      
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `NEXT`,
},
type: 1,
},
]);
cewe = await getBuffer(anu.result.female)
Cewek = `_Ini ceweknya_`
sendButImage(from, Cewek, `*_Jangan Spam Ya_*`, cewe, [                      
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `NEXT`,
},
type: 1,
},
]);
break
case 'meme':
anu = await fetchJson(`https://apidhani.herokuapp.com/api/randomimage/meme?apikey=NisaaCantik`)
buffer = await getBuffer(anu.result.url)
Teks = `Klik Next Untuk Ke ${command} Selanjutnya`
sendButImage(from, Teks, `*_Jangan Spam Ya_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT`,
},
type: 1,
},
]);
break
case 'wallpaperhacker':
case 'wallpaperhacker2':
case 'wallpaperharley':
case 'wallpaperjoker':
case 'wallpaperpubg':
case 'wallpaperhp':
case 'wallpaperhp2':
case 'wallpaperkpop':
case 'wallpaperblackpink':
case 'wallpapergame':
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/randomimage/${command}?apikey=NisaaCantik`)
Teks = `Klik Next Untuk Ke ${command} Selanjutnya`
sendButImage(from, Teks, `*_Jangan Spam Ya_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT`,
},
type: 1,
},
]);
break
case 'quotesimage':
case 'katakataimage':
case 'renungan':
case 'memeindo':
case 'darkjokes':
case 'aesthetic':
case 'yulibocil':
case 'doraemon':
case 'pokemon':
case 'pentol':
case 'tatasurya':
case 'kartun':
case 'anjing':
case 'kucing':
case 'satanic':
case 'boneka':
case 'mobil':
case 'motor':
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/randomimage/${command}?apikey=NisaaCantik`)
Teks = `Klik Next Untuk Ke ${command} Selanjutnya`
sendButImage(from, Teks, `*_Jangan Spam Ya_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT`,
},
type: 1,
},
]);
break
case 'beatvn':
case 'jedagjedugff':
case 'jedagjedugml':
case 'jedagjedugpubg':
case 'storyanime':
case 'storywa':
case 'storygalau':
case 'storytruk':
case 'storybus':
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/randomvideo/${command}?apikey=NisaaCantik`)
Teks = `Klik Next Untuk Ke ${command} Selanjutnya`
sendButVideo(from, Teks, `*_Jangan Spam Ya_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT`,
},
type: 1,
},
]);
break
		default:break
		}
		
	} catch (e) {
        e = String(e)
            if (!e.includes("this.isZero")) {
            if (!e.includes("Cannot read property 'conversation' of null")) {
            if (!e.includes("Cannot read property 'contextInfo' of undefined")) {
            if (!e.includes("Cannot set property 'mtype' of undefined")) {
            if (!e.includes("jid is not defined")) {
     console.log(color('|ERR|', 'red'), color(e, 'cyan'))
     kurr.sendMessage(`${settings.NomorOwner}@s.whatsapp.net`, `─────「 *ALERT-ERROR* 」─────\n\n\`\`\`${e}\`\`\`\n\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdreply:{title: "Developer  BOTZ ゑ",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./logo.jpg'),sourceUrl:"https://wa.me/p/6349482305092740/6282293271747"}}})
	}
    }
    }
    }
    }
    }
    }
    
///-------------------------------------------------------------\\\

/**
* Thx To:
RyuuOfficial
Kahfs
Zenix


**/

///----------( Thx Dah Pake Scriptnya )----------\\\