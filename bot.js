// Require the necessary discord.js classes
const fs = require('fs');
// gets the information from discord.js
const { Client, Collection, Intents } = require('discord.js');
// used for token and guild values
const { token } = require('./config.json');


// Create a new client instance
// Add flags such as guild_membors or guilds

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_PRESENCES,
	Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_VOICE_STATES] });


client.commands = new Collection();

// creates an array of commands from the command file
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
}

// creates an array of files from the commands file
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
// Whenever you add an event make sure the flag for the event is enabled in Intents
for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	}
	else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

/*
client.on('interactionCreate', interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {

		command.execute(interaction);
	}
	catch (error) {
		console.error(error);
		interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});*/

// Login to Discord with your client's token
client.login(token);