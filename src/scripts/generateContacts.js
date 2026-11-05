import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";

const generateContacts = async (number) => {
    try {
        const readResult = await readContacts();
        for(let i = 0; i < number; i++){
            readResult.push(createFakeContact());
        }
        await writeContacts(readResult);
    } catch (error) {
        console.error("Не вийшло додати один контакти: ", error);
    }
};

generateContacts(5);
