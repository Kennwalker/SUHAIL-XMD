const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_51_11_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI4LFxuICAgICAgICAyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDExMSxcbiAgICAgICAgNSxcbiAgICAgICAgMTkzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQwLFxuICAgICAgICA5MixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzksXG4gICAgICAgIDM1LFxuICAgICAgICAyMDksXG4gICAgICAgIDk1LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOCxcbiAgICAgICAgODAsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNSxcbiAgICAgICAgODYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTkwLFxuICAgICAgICA1NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzksXG4gICAgICAgIDg4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDk5LFxuICAgICAgICA3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTY2LFxuICAgICAgICA4MyxcbiAgICAgICAgODAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDIsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTg1LFxuICAgICAgICA0LFxuICAgICAgICA3NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTU1LFxuICAgICAgICA3MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTI4LFxuICAgICAgICA5MixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDgwLFxuICAgICAgICA0LFxuICAgICAgICA3OCxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzAsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODIsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjIxLFxuICAgICAgICA1NixcbiAgICAgICAgMTI0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTA4LFxuICAgICAgICA2MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE5LFxuICAgICAgICA4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDk0LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNixcbiAgICAgICAgMzEsXG4gICAgICAgIDExMyxcbiAgICAgICAgODcsXG4gICAgICAgIDc1LFxuICAgICAgICA5NCxcbiAgICAgICAgNjksXG4gICAgICAgIDQ3LFxuICAgICAgICA0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAzMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxLFxuICAgICAgICA1OSxcbiAgICAgICAgNixcbiAgICAgICAgMTIzLFxuICAgICAgICA0NixcbiAgICAgICAgNTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDksXG4gICAgICAgIDkwLFxuICAgICAgICA2OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzQsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDIsXG4gICAgICAgIDcwLFxuICAgICAgICA1NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDM4LFxuICAgICAgICAyLFxuICAgICAgICAxMTksXG4gICAgICAgIDE0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA1LFxuICAgICAgICA5OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNCxcbiAgICAgICAgODksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTk2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDQ0LFxuICAgICAgICAzMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTIyLFxuICAgICAgICAyLFxuICAgICAgICA2MCxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjI5LFxuICBcImFkdlNlY3JldEtleVwiOiBcInQyRXV1S1BaMWVJeDFSY3BBRW9rWWQ0WEw4TGhJV0pla1Z4cmhCeStjMkk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU1NzQ2NzY3NzE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFNThCQkY4NDA0MjBDMEVDMkJCNzQxNEYxRDM1REMyOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzI2MjE4OTNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTU3NDY3Njc3MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjg2NEY3QTAwNjBCMEREMTNGQ0Y0NDUxMDExMDBDNEJCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMjYyMTg5M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJhb181QmNhSFRQLWhnTlRnblVCaUFBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjJlMDZlZWRjLWE2MTAtNDc0OC04NzNjLWFkNDc3MTQzNjNjMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MSxcbiAgICAgIDk1LFxuICAgICAgNjMsXG4gICAgICA5MyxcbiAgICAgIDE0LFxuICAgICAgMTg0LFxuICAgICAgMjQ2LFxuICAgICAgMTczLFxuICAgICAgNTYsXG4gICAgICAyMTcsXG4gICAgICAxOCxcbiAgICAgIDExNSxcbiAgICAgIDEzNixcbiAgICAgIDE1NSxcbiAgICAgIDE3MSxcbiAgICAgIDIyNyxcbiAgICAgIDg0LFxuICAgICAgMTYzLFxuICAgICAgOTEsXG4gICAgICAyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMixcbiAgICAgIDE0MixcbiAgICAgIDE5MSxcbiAgICAgIDIwNixcbiAgICAgIDEyOSxcbiAgICAgIDI0NSxcbiAgICAgIDU5LFxuICAgICAgMTAwLFxuICAgICAgMTg1LFxuICAgICAgMzAsXG4gICAgICAxNDUsXG4gICAgICAyMzksXG4gICAgICAxMDEsXG4gICAgICAxNTUsXG4gICAgICA4OCxcbiAgICAgIDI3LFxuICAgICAgNjcsXG4gICAgICAxNDIsXG4gICAgICAxNTgsXG4gICAgICAxOTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOVQ0MU5HOFRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTc0Njc2NzcxNjoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdmaDwnZmd8J2ZlvCdmaNcIixcbiAgICBcImxpZFwiOiBcIjQ1NTczMjk0MTIxMDk6MTNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTldUbjZVSEVMenNscm9HR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ6U1ZxMHVOU1ZVS2lhWVdLNjAvb29MMGdsOWtWYlJyT1ZMRk51NmIzQzA0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInAxSFdYTUNzQ0Z3V1hiOFZjYmloNGtMd0NaRHFQaUtWc2F6VW9ySGd6NjdTUnFJTjhBbU9IcDJlYVdEUEdsUE1zMUpNcnkzamlXd213NnV1ZjNMS0N3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk9LZWtOTFk3bDFIcm12WkUreUgzT0VhWm9RWHJVczVvRHo0a29mWlF5SnVqUXNTS2t2VTRXZ043d0FGanZMNUQyMFc4aUlPS3J1eFBPWDBxL042YUN3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTc0Njc2NzcxNjoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjYyMTg4NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlLS1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSUtLLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTSt6R3lIQmlwSEhnRjVkdkNXSFB6aG1WN09keTM4ZzEzdjFXVGMzbnRXVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTU3MTUzMjM2LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzMyMDAyMTMwOTgzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
