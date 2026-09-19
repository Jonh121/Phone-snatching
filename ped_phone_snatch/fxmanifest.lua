fx_version 'cerulean'
game 'gta5'

author 'Kyes'
description 'Snatch phones from ambient peds using a polished contextual NUI prompt.'
version '1.1.1'

lua54 'yes'

ui_page 'html/index.html'

files {
    'html/index.html',
    'html/style.css',
    'html/app.js'
}

shared_script 'config.lua'
client_script 'client.lua'
server_script 'server.lua'

dependency '/assetpacks'