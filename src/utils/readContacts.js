import { PATH_DB } from '../constants/contacts.js';
import path from 'node:path';
import fs from 'node:fs/promises';

export const readContacts = async () => {
    try{
        const fileContent = await fs.readFile(path.resolve(PATH_DB), "utf8");
        return JSON.parse(fileContent);
    }
    catch(err){
        console.error("Помилка читання контактів:", err);
    }
};
