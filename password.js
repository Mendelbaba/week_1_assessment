// i initially did some googling and came accross the window.prompt function but it wasnt working so i did some more googling 
// and installed this npm thing in my console and then copied the the first line of code without understanding it and it worked. 
// my original solution was the same thing starting from line 4. (what i read on code academy (thats where i found this npm)was that 
// it cant be run in the terminal but only in chrome where it can actually give yoou a prompt  window)
const prompt = require('prompt-sync')();
 
const password = prompt('enter your password');
if ( password.length >= 10 ){
    console.log("great success!!")
} else {
    console.log("not so great success.")}