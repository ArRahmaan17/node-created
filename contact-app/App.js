const { saveContact, createQuestion } = require('./Contacts');

const main = async () => {
    const name = await createQuestion("Whats Is Your Name :");
    const phoneNumber = await createQuestion("Whats Is Your Phone Number :");

    saveContact(name, phoneNumber);
}

main()