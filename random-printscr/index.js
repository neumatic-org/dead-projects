const axios = require("axios")
const fs = require("fs")

function random () {
    const able = "abcdefghijklmnopqrstuvwxy1234567890";
    var s = "";
    while (s.length < 6) {
        s += able[Math.floor(Math.random() * able.length)];
    }
    return s;

}

let s = "";

function end () {
    fs.appendFileSync("./script.cmd", 'del /F /Q '+process.cwd()+'/script.cmd')
    process.exit(1)
}
async function a () {

    const r = "https://prnt.sc/"+random()
    if (s.length > 30) end()
        await fs.appendFileSync("./script.cmd", 'start '+r+'\n')
        console.log(r+' - '+s)
        s = s+"a"
        a()
    

}
a()
