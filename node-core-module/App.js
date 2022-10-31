const fs = require('fs');
const readLine = require('readline');

// Asynchronous File Write
// fs.writeFile('exampleAsynchronous.txt', 'Asynchronous File Write', (err) => {
//     console.log(err);
// })

// fs.readFile('exampleAsynchronous.txt', 'utf8', (e, data) => {
//     if (e) throw e;
//     console.log(data);
// });

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Whats is your name : ', (name) => {
    rl.question("How Old you are : ", (age) => {
        contacts = { name, age };
        fs.readFile('exampleAsynchronous.txt', 'utf8', (err, data) => {
            if (err) throw err;
            fileBuffer = JSON.parse(data);
            fileBuffer.push(contacts)
            fs.writeFile('exampleAsynchronous.txt', JSON.stringify(fileBuffer), (e) => {
                if (e) throw e
                console.log(`Thanks ${name}, about your confirm`);
                rl.close();
            })
        })
    });
})