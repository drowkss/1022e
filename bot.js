#!/usr/bin/env node

const fs = require('fs');

const { exec, execFile } = require('child_process');

var undef;

function setup(check){
	exec(check, (err,stdout,stderr) => {
		if (err) {
			console.error(err);
		  	return;
		  }
		})
};

if (! fs.existsSync('./adminID')) {setup('touch ./adminID')}; // ID del administrador
if (! fs.existsSync('./token')) {setup('touch ./token')};     // token de su bot creado en @BotFather
if (! fs.existsSync('./userID')) {setup('touch ./userID')};   // IDs de usuarios

// ==============================================================================
const token = fs.readFileSync('./token', 'utf-8').split("\n").join(""); // <<<<< token de su bot creado en @BotFather

if (token == '') {console.log('aun no ingrsa su toke'); return};

const TelegramBot = require('node-telegram-bot-api'); // <<<<< api de telegram

const bot = new TelegramBot(token, {polling: true}); // <<<<<< ecucha del bot
// ==============================================================================

// ==========================VARIABLES Y CONSTANTES==============================

const barra = "•✦─────────────────•✧\n";
const barra2 = "════════════════════════\n";
const barra3 = "◆═════════✷✦✷═════════◆\n";
const owner = "@drowkid01\n";

const titbar = "═════|⚡𝘿𝙧𝙤𝙬𝙆𝙂𝙚𝙣𝘽𝙤𝙩⚡|═════\n";
const welcome = titbar + barra2;
const bienvenida = barra2 + "                ⚡ 𝘿𝙧𝙤𝙬𝙆𝙂𝙚𝙣𝘽𝙤𝙩 ⚡ 	\n" + barra2;

const a = "		   		🔑|𝕃𝔸𝕋𝔸𝕄|🔑		";
const b = "\n	 	 		🔑|ℂℍ𝕌𝕄𝕆𝔾ℍ|🔑		";
const c = "\n				🔑|𝕃𝔸ℂ𝔸𝕊𝕀𝕋𝔸𝕄𝕏|		🔑\n";
const d = a + b + c + barra2;
const bienvenida2 = "      💎🚀𝐆𝐄𝐍𝐄𝐑𝐀𝐃𝐎𝐑 𝐃𝐄 𝐊𝐄𝐘𝐒🚀💎\n" + barra2 + d;

const start_boton = {caption: '', parse_mode: 'HTML',chat_id: '', message_id: '',
    reply_markup: {
      inline_keyboard: [
      						[
      						 {text: '🚀|𝐕𝐄𝐑 𝐌𝐄𝐍𝐔|🚀', callback_data: '/menu'}],
      					]
      				}
      			};

const menuID_boton = {parse_mode: 'HTML',chat_id: '', message_id: '',
    reply_markup: {
      inline_keyboard: [
      						[
      						 {text: '⬅️ Menu', callback_data: '/menu'},
      						 {text: 'Dell id 🗑', callback_data: '/dell'}],
      					]
      				}
      			};
      			
const deleted_ID_boton = {parse_mode: 'HTML',
    reply_markup: {
      inline_keyboard: [
      						[
      						 {text: '⬅️ Menu', callback_data: '/menu'},
      						 {text: 'List id 🗒', callback_data: '/list'}],
      					]
      				}
      			};

const nouser_boton = {parse_mode: 'HTML',chat_id: '', message_id: '',
    reply_markup: {
      inline_keyboard: [
      						[
      						 {text: '🔓Solicitar acceso🔓', callback_data: '/access'}],
      					]
      				}
      			};

const user_boton = {parse_mode: 'HTML',chat_id: '', message_id: '',
    reply_markup: {
      inline_keyboard: [
      						[
      						//text: 'Ajustes ⚙', callback_data: '/ajustes'},
      						 {text: '🔑 𝗸𝗲𝘆𝗴𝗲𝗻 🔑', callback_data: '/keygen'}]
      					]
      				}
      			};

const ask_boton = {parse_mode: 'HTML',chat_id: '', message_id: '',
    reply_markup: {
      inline_keyboard: [
      						[
      						 {text: 'Autorizar', callback_data: '/askID'}],
      					]
      				}
      			};

const menu_boton = {parse_mode: 'HTML',chat_id: '', message_id: '',
    reply_markup: {
      inline_keyboard: [
      						[
      						 {text: '📝𝗮𝗱𝗱📝', callback_data: '/add'},
      						 {text: '👤𝗿𝗲𝘀𝘀👤', callback_data: '/list'},
      						 {text: '🔓𝗶𝗱🔓', callback_data: '/id'}],
      						[
      						 //{text: 'Info syst ℹ', callback_data: '/infosys'},
      						 {text: '🖥️ 𝗹𝗶𝗺𝗽𝗶𝗮𝗿 𝗿𝗮𝗺 🖥️', callback_data: '/clear'},
      						 {text: '⚙️ 𝗮𝗷𝘂𝘀𝘁𝗲𝘀 ⚙️', callback_data: '/setting'}],
      						[
      						 {text: '✅ 𝗼𝗻/𝗼𝗳𝗳 ❌', callback_data: '/power'},
      						 {text: '🔑 𝗸𝗲𝘆𝗴𝗲𝗻 🔑', callback_data: '/keygen'}]
      					]
      				}
      			};

const setting_boton = {parse_mode: 'HTML',chat_id: '', message_id: '',
    reply_markup: {
      inline_keyboard: [
      						[
      						 {text: '⬅️ Menu', callback_data: '/menu'}],
      						[
      						 {text: '⚡ACTUALIZAR FICHEROS DEL BOT⚡', callback_data: '/update'}],
      						[
      						 {text: '⬅️ Menu', callback_data: '/menu'}]
      					]
      				}
      			};

// ==============================================================================

// ================================funciones=====================================
function bienvenida_fun(id, user) {

	bot.sendMessage(id, welcome + bienvenida2, start_boton);
};

function texto(text){

	return out = barra+text+barra2;
}

function user(id){
	const arch = './adminID';
	
	if (fs.existsSync(arch)){
		const adm = fs.readFileSync(arch, 'utf-8');
		console.log(adm);
	}else{
		console.log('el archovo no exite');
	};
};

function id_fun(id, msg_id, type) {
  const userId = "<u>su id de telegram.</u>\n"+"━━━━━━━━━━━━━━\n      "+id+ "\n━━━━━━━━━━━━━━";
  
  if (type == true) {
  	start_boton.chat_id = id
  	start_boton.message_id = msg_id
  	bot.editMessageText(userId, start_boton);
  } else {
  	bot.sendMessage(id, userId, start_boton);
  }
};

function permit_fun(id, permit, msg_id, reply) {
	const archivo = 'userID';
	var echo = {a: 'echo "'+permit+'" > userID', b: 'echo "'+permit+'" >> userID'}

	if (fs.existsSync(archivo)){
		exec(echo.b, (err,stdout,stderr) => {
			if (err) {
				console.error(err);
		  		return;
		  	}
		  })
	}else{
		exec(echo.a, (err,stdout,stderr) => {
			if (err) {
				console.error(err);
		  		return;
		  	}
		  })
	};
		bot.sendMessage(id, 'id:    <u>'+permit+'</u><i>\n✔️|𝙐𝙎𝙐𝘼𝙍𝙄𝙊 𝘼𝙂𝙍𝙀𝙂𝘼𝘿𝙊 𝙀𝙓𝙄𝙏𝙊𝙎𝘼𝙈𝙀𝙉𝙏𝙀|✔️</i>', deleted_ID_boton);
		var text = texto('<i>✔️ |𝐒𝐨𝐥𝐢𝐜𝐢𝐭𝐮𝐝 𝐝𝐞 𝐚𝐜𝐞𝐬𝐬𝐨 𝐚𝐜𝐞𝐩𝐭𝐚𝐝𝐚, 𝐲𝐚 𝐩𝐮𝐞𝐝𝐞𝐬 𝐮𝐬𝐚𝐫 𝐞𝐥 𝐛𝐨𝐭 | ✔️</i>');
		bot.sendMessage(permit, text, start_boton);
		if (reply == undef) {
			bot.deleteMessage(id, reply);
		}
		bot.deleteMessage(id, msg_id);
};

function dell_fun(id, arg, msg_id, reply){
	var sed = {list: 'sed -n '+arg+'p ./userID', dell: 'sed -i '+arg+'d ./userID'};

	exec(sed.list, (err,stdout,stderr) => {
		exec(sed.dell, (err,stdout,stderr) => {
		  if (err) {
		  	console.error(err);
		  	return;
		  }
		})

		if (stdout == '') {
			const dellId = '<i>numero de linea no encontrado.</i>';
			bot.sendMessage(id, dellId, deleted_ID_boton);
		} else {
			const dellId = 'id:    <u>'+stdout+'</u><i>Removido con exito.</i>';
			bot.sendMessage(id, dellId, deleted_ID_boton);
		}

		bot.deleteMessage(id, reply);
		bot.deleteMessage(id, msg_id);
	})
};

function list_fun(id, msg_id, type){
	exec('cat -n ./userID', (err,stdout,stderr) => {
		  if (err) {
		  	console.error(err);
		  	return;
		  }
		const salida = '<i>•✦───────────•✧\n'+' 𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙄𝘿 \n'+'•✦───────────•✧\n'+stdout+'━━━━━━━━━━━━━━\n</i>';

		if (type == true) {
			menuID_boton.chat_id = id
			menuID_boton.message_id = msg_id
			bot.editMessageText(salida, menuID_boton);
		} else {
			bot.sendMessage(id, salida, menuID_boton);
		}
	})
};

function sources_fun(id, onclic, arg, msg_id, type) {
  	const child = execFile('./shell.sh',[arg, id], (error,stdout,stderror) => {
  		if (error) throw (error);

		if (type == true) {
			onclic.chat_id = id
			onclic.message_id = msg_id
			bot.editMessageText(stdout, onclic);
		} else {
			bot.sendMessage(id, stdout, onclic);
		}

		var doc = {a: './keytxt/key_'+id+'.txt', b: 'rm ./keytxt/key_'+id+'.txt'};

		if (fs.existsSync(doc.a)) {
			bot.sendDocument(id, doc.a, {caption: '<u>key.txt</u>', parse_mode: 'HTML'});

			exec(doc.b, (err,stdout,stderr) => {
			if (err) {
				console.error(err);
		  		return;
		  	}
		  });
		}
  })
};

function setting_fun (id, msg_id, type) {
	var titulo = '💎| Menu Gen |💎';

	if (type == true) {
		setting_boton.chat_id = id
		setting_boton.message_id = msg_id
		bot.editMessageText(titulo, setting_boton);
	} else {
		bot.sendMessage(id, titulo, setting_boton);
	}
};

//function comandos_fun(id, user, data) {
function comandos_fun(dat) {
		//console.log(dat);

		const toNumbers = fs.readFileSync('./userID', 'utf-8').split("\n");
		const userIDS = toNumbers.map((i) => Number(i));
		var user = userIDS.includes(Number(dat.id));
		const admin = fs.readFileSync('./adminID', 'utf-8').split("\n").join("");
		

		if (dat.id == admin){

			switch(dat.data) {
				case "/start":
							bienvenida_fun(dat.id, dat.user);
							break;
				case "/menu":
							sources_fun(dat.id, menu_boton, 'admin', dat.msg_id, dat.type);
							break;
				case "/id":
							id_fun(dat.id, dat.msg_id, dat.type);
							break;
				case "/power":
							sources_fun(dat.id, menu_boton, 'on/off', dat.msg_id, dat.type);
							break;
				case "/clear":
							sources_fun(dat.id, start_boton, 'refresh', dat.msg_id, dat.type);
							break;
				case "/add":
							bot.sendMessage(dat.id, '<u>𝙄𝙣𝙜𝙧𝙚𝙨𝙖 𝙚𝙡 𝙄𝘿 𝙦𝙪𝙚 𝙙𝙚𝙨𝙚𝙖 𝙖𝙪𝙩𝙤𝙧𝙞𝙯𝙖𝙧..</u>', {parse_mode: 'HTML', reply_markup:{force_reply: true}});
							break;
				case "/borrar":
							if (dat.reply == undef) {
								bot.sendMessage(dat.id, '<i>Para borrar un mensaje\ndeve responder con el\n<u>comando:</u></i> /borrar', {parse_mode: 'HTML'});
								return;
							}
							bot.deleteMessage(dat.id, dat.reply);
							bot.deleteMessage(dat.id, dat.msg_id);
							break;
				case "/askID":
							permit_fun(dat.id, dat.permit, dat.msg_id, dat.type);
							break;
				case "/list":
							list_fun(dat.id, dat.msg_id, dat.type);
							break;
				case "/dell":
							bot.sendMessage(dat.id, '<u>Numero de linea a eliminar.</u>', {parse_mode: 'HTML', reply_markup:{force_reply: true}});
							break;
				case "/keygen":
							sources_fun(dat.id, start_boton, 'keygen', dat.msg_id, dat.type);
							break;
				case "/setting":
							setting_fun(dat.id, dat.msg_id, dat.type);
							break;
				case "/update":
							const wget = 'wget -O "./update.sh" https://raw.githubusercontent.com/rudi9999/TeleBotGen-node/main/update.sh &>/dev/null';
							const premisos = 'chmod +x ./update.sh';
							const up = 'screen -dmS upbot ./update.sh';
							exec(wget, (err,stdout,stderr) => {
								if (err) {
									console.error(err);
									return;
								}
							});
							exec(premisos, (err,stdout,stderr) => {
								if (err) {
									console.error(err);
									return;
								}
							});
							exec(up, (err,stdout,stderr) => {
								if (err) {
									console.error(err);
									return;
								}
							});

							
							break;
				default:
							var convert = Number(dat.data);
							var check = isNaN(convert);

							if (check == true || dat.reply == undef ) {
								bot.sendMessage(dat.id, "<i>comando incorrecto.</i>", {parse_mode: 'HTML'});
								bot.deleteMessage(dat.id, dat.msg_id);
								return;
							};

							if (convert > 100000000){
								permit_fun(dat.id, convert, dat.msg_id, dat.reply);
							} else if (convert < 200){
								dell_fun(dat.id, convert, dat.msg_id, dat.reply);
							} else {
								bot.sendMessage(dat.id, "<i>comando incorrecto.</i>", {parse_mode: 'HTML'});
								bot.deleteMessage(dat.id, dat.msg_id);
							};
			}
		}

		else if (user == true){
			switch(dat.data) {
				case "/start":
							bienvenida_fun(dat.id, dat.user);
							break;
				case "/menu":
							sources_fun(dat.id, user_boton, 'user', dat.msg_id, dat.type);
							break;
				case "/keygen":
							sources_fun(dat.id, start_boton, 'keygen', dat.msg_id, dat.type);
							break;
				default:
							bot.sendMessage(dat.id, "<i>comando incorrecto.</i>", {parse_mode: 'HTML'});
			}
		}

		else {

			switch(dat.data) {
				case "/start":
							bienvenida_fun(dat.id, dat.user);
							break;
				case "/menu":
							sources_fun(dat.id, nouser_boton, 'no_user', dat.msg_id, dat.type);
							break;
				case "/access":
							bot.sendMessage(admin, dat.id, ask_boton);
							var text = texto('<i>Tu solicitud de autorización fue enviada..</i>');
							start_boton.chat_id = dat.id
							start_boton.message_id = dat.msg_id
							bot.editMessageText(text, start_boton);
							break;
				default:
							bot.sendMessage(dat.id, "<i>❌𝐍𝐎 𝐂𝐔𝐄𝐍𝐓𝐀𝐒 𝐂𝐎𝐍 𝐀𝐂𝐂𝐄𝐒𝐎❌</i>", {parse_mode: 'HTML'});

			}
		}
};


// ==============================================================================
bot.on('polling_error', function(error){

	console.log(error);
});

// Matches /echo [whatever]
bot.onText(/\/comando (.+)/, function onEchoText(msg, match) {
	const resp = match[1];

			exec(resp, (err,stdout,stderr) => {
			if (err) {
				console.error(err);
		  		return;
		  	}
		  	bot.sendMessage(msg.chat.id, stdout);
		  });
	return;
});

bot.on('callback_query', function(msg){
	//console.log(msg);
    if (msg.message.chat.type == 'supergroup'){
        return;
    }
    else if (msg.message.chat.type == 'group'){
        return;
    }
    else if (msg.message.chat.type == 'channel'){
        return;
    }

    const id = msg.message.chat.id;
	const user = msg.message.chat.username;
	const data = msg.data;
	const permit = msg.message.text;
	const msg_id = msg.message.message_id;
	const type = true;

    const datos = {id, user, data, permit, msg_id, type}

    comandos_fun(datos);
});

bot.on('message', function(msg){
	//console.log(msg);
    if (msg.chat.type == 'supergroup'){
        return;
    }
    else if (msg.chat.type == 'group'){
        return;
    }
    else if (msg.chat.type == 'channel'){
        return;
    }

	const id = msg.chat.id;
	const msg_id = msg.message_id;
	const user = msg.chat.username;
	const data = msg.text;

    if (msg.reply_to_message == undef){
        	const datos = {id, user, data, msg_id};
        	comandos_fun(datos);
    } else {	
        	const reply = msg.reply_to_message.message_id;
        	const datos = {id, user, data, reply, msg_id};
        	//console.log(datos);
        	comandos_fun(datos);
    }
});




















//consultar los comandos
/* bot.onText(/^\/comandos/, (msg) => {
    bot.getMyCommands().then(function (info) {
        console.log(info)
    });
});

//añadir comandos nuevos
 bot.onText(/^\/newcomandos/, (msg) => {

    const opts = [
        { command: 'menu', description: 'muestra el menu' },
        { command: 'borrar', description: 'borrar mensajes' },
        { command: 'infosys', description: 'informacion del sistema' },
        { command: 'id', description: 'tu ID de telegram' },
        { command: 'clear', description: 'limpia la Ram' }
    ];

    bot.setMyCommands(opts).then(function (info) {
        console.log(info)
    });;
});*/
