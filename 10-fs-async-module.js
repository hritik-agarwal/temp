const fs = require('fs')

fs.readFile('./folder/first.txt', 'utf-8', (err, result) => {
    if(err) {console.log(err); return;}
    const first = result

    fs.readFile('./folder/second.txt', 'utf-8', (err, result) => {
        if(err) {console.log(err); return;}
        const second = result
        
        fs.writeFile('./folder/result2.txt',`Here is result : ${first}, ${second}`, (err, result) => {
            if(err) console.log(err);
            else console.log(result);
        })
    })
})