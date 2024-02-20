function importMessages(textFile) {
    var fs = require('fs');
    var array = fs.readFileSync(textFile).toString().split("\n");
    //for(i in array) {
    //    console.log(array[i]);
    //}
    return array;
}

function getRandomMessage(InInteger){
    // this function will select a random message from the imported messages
    const i = (Math.floor(Math.random() * InInteger));
    return i;
}

// import file and produce the message
const messageArray = importMessages('./messages.txt');
console.log(messageArray[getRandomMessage(messageArray.length)]);