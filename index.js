const TelegramBot = require('node-telegram-bot-api');
require("dotenv").config()
const token = process.env.TOKEN
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {
    polling: true
});

//  command for sending the welcome 
bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "welcome")
})

// command for sending photo 
bot.onText(/\/sendpic/, (msg) => {
    // console.log(msg);
    bot.sendPhoto(msg.chat.id, "/home/priyanka/Desktop/moutain.jpeg")
})



// keyboard 

bot.onText(/\/start/, (msg) => {

    bot.sendMessage(msg.chat.id, "Welcome", {
        "reply_markup": {
            "keyboard": [
                ["how are you ", "what's going on"],
                ["hii", "I'm priyanka"],

            ],
            resize_keyboard: true,
            one_time_keyboard: true
        }
    });

});

//  in which first message  also includ and we can includ whatever message  we want send 

bot.on('message', (msg) => {
    console.log(msg);
    // console.log(msg.text.id);
    var Hi = "hi";
    if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
        bot.sendMessage(msg.from.id, "Hello dear " + msg.from.first_name);

    }
    var bye = "bye";
    if (msg.text.toString().toLowerCase().includes(bye)) {
        bot.sendMessage(msg.from.id, "Hope to see you around again ,Bye .." + msg.from.first_name);
    }
    var name = "I'm priyanka";
    if (msg.text.indexOf(name) === 0) {
        bot.sendMessage(msg.chat.id, "Yes priyanka");
    }
    var ans = "how are you"
    if (msg.text.indexOf(ans) == 0) {
        bot.sendMessage(msg.chat.id, "i am fine")
    }
    var activity = "what's going on"
    if (msg.text.indexOf(activity) == 0) {
        bot.sendMessage(msg.chat.id, " Nothing ")
    }
});


// Location 

bot.on('message', (msg) => {
    var location = "location";
    if (msg.text.indexOf(location) === 0) {
        bot.sendLocation(msg.chat.id, 44.97108, -104.27719);
        bot.sendMessage(msg.chat.id, "Here is the point");

    }
});

bot.on('message', (msg) => {

    var bye = "bye";
    if (msg.text.toString().toLowerCase().includes(bye)) {
        bot.sendMessage(msg.chat.id, "Have a nice day " + msg.from.first_name);
    }

});


bot.on('message', (msg) => {

    var what = "idiot";
    if (msg.text.includes(what)) {
    bot.kickChatMember(msg.chat.id,  msg.from.id);
    }
    
    });