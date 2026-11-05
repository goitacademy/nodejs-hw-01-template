import { PATH_DB } from '../constants/contacts.js';
import path from 'node:path';
import fs from 'node:fs/promises';


export const writeContacts = async (updatedContacts) => {
    try{
        await fs.writeFile(path.resolve(PATH_DB), JSON.stringify(updatedContacts, null, 2), "utf8");
    }catch(err){
        console.error("помилка запису контакту:", err);
    }
};
