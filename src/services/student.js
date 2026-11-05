import { StudentsCollections } from "../db/models/student.js";

export const getAllStudents = async () =>{
    const students = await StudentsCollections.find();
    return students;
};

export const getStudentById = async (studentId) => {
    const student = await StudentsCollections.findById(studentId);
    return student;
};
