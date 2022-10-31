const readLine = require('readline');
const fs = require('fs');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

const folderPath = './backup';
if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
}

const filePath = './backup/contacts.json';

if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '[]', 'utf-8');
}

const createQuestion = (question) => {
    return new Promise((resolve, rejects) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

const saveContact = (name, phoneNumber) => {
    contacts = { name, phoneNumber };
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) throw err;
        fileBuffer = JSON.parse(data);
        fileBuffer.push(contacts)
        fs.writeFile(filePath, JSON.stringify(fileBuffer), (e) => {
            if (e) throw e
            console.log(`Thanks ${name}, about your confirm`);
            rl.close();
        })
    })
}

module.exports = { saveContact, createQuestion }