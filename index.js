// Import "telegraf" library 
const { Telegraf } = require('telegraf');
const axios = require('axios');
// Load all the configurations from ".env" file
require('dotenv').config();
// Create a bot instance.
const bot = new Telegraf(process.env.BOT_TOKEN);

// Start Command
// bot.start(ctx => ctx.reply('Hello dear Bot'))

// Function to start the bot
// function startBot() {
// 	console.log('Bot is running...');
// 	bot.launch();
// }

// // run startBot function
// startBot();

bot.start((ctx)=>{
    let msg = 'Hello World...'
    ctx.reply(msg)
})

//random Quote command
bot.command('quote', ctx => {
    ctx.reply('generating quote please wait...')
    axios.get('https://api.quotable.io/random')
    .then(res=>//console.log(res.data.content)
    ctx.reply(res.data.content)
    )
    .catch(err=>console.log(err.message))
})
bot.command('help',ctx =>{
    ctx.reply("/start" +'\n' +"/quote")
})

// bot.command('quote',async (ctx) => {
   
//    try{
//     ctx.reply('generating quote please wait...')
//      let data = await axios.get("https://api.quotable.io/random")
//      console.log(data);
//       ctx.reply(data.content)
//    } catch (error) {
//     console.log(error)
//     ctx.reply('something wrong')
// }

// })
bot.launch();