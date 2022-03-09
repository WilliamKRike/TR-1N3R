// const play = require('play-dl');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { getVoiceConnection } = require('@discordjs/voice');
const playYoutube = require('./playYoutube.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('skip')
		.setDescription('skip song'),
	async execute(message) {
		message.reply('Skipping current song');
		const command = message.client.commands.get('play');
		//	command.data.options.setString = 'one piece op 3';
		console.log(command.vars);
		//	command.execute(message);


		// const serverQueue = queue.get(message.guild.id);
		// console.log('push song here');
		// // serverQueue.songs.push(args);
		// // console.log('current queue');
		// // console.log(serverQueue);
		// // console.log('song being appended to queue');
		// // console.log(args);
		// const connection = getVoiceConnection(message.guildId);
		// connection.on('stateChange', (oldState, newState) => {
		// 	console.log(`Connection transitioned from ${oldState.status} to ${newState.status}`);
		// });
		// // player.on('stateChange', (oldState, newState) => {
		// // 	console.log(`Audio player transitioned from ${oldState.status} to ${newState.status}`);
		// // });

	},
};
