import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

import { getEnvVar } from './utils/getEnvVar.js';
import { getAllStudents, getStudentById } from './services/student.js';

const PORT = Number(getEnvVar('PORT', '3000'));

export const startServer = () => {
    const app = express();
    app.use(express.json());



    app.use(pino({
            transport: {
                target: 'pino-pretty',
            },
        }),
    );

    app.use(cors());

    app.get('/students', async (req,res) => {
        const students = await getAllStudents();
        res.status(200).json({
            data:students,
        });
    });

    app.get('/students/:studentId', async (req,res, next) => {
        const { studentId } = req.params;
        const student = await getStudentById(studentId);

        if(!student){
            res.status(404).json({
                message:"Student no found"
            });
            return;
        }

        res.status(200).json({
            data:student,
        });
    });

    app.use((req, res, next)=> {
        res.status(404).json({
            message: 'Not found',
        });
    });

    app.use((err, req, res, next) =>{
        res.status(500).json({
            message:"Something went wrong",
        });
    });

    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
    });

};
