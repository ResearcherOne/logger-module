const loggerModule = require("./logger-module.js")

loggerModule.info("Program starts.");

loggerModule.on("info", function(message){
    console.log("[INFO EVENT] message fired: "+message);
})

loggerModule.on("all", function(message){
    console.log("[ALL EVENT] A message fired: "+message);
})

loggerModule.info("Program continues.");
loggerModule.warn("Program warns you.");