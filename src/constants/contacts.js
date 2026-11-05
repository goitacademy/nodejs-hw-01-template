import path from 'node:path';

const pathToWorkDir = path.join(process.cwd(), 'src', 'db');
export const PATH_DB = path.join(pathToWorkDir, 'db.json');
