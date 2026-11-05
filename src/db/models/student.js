import { model, Schema } from "mongoose";

const StudentsSchema = new Schema(
    {
        name:{
            type: String,
            required: true,
        },
        age:{
            type: Number,
            required: true,
        },
        gender:{
            type: String,
            required: true,
            enum: ['male', 'female', 'other'],
        },
        avgMark:{
            type:Number,
            required: true,
        },
        onDuty:{
            type: Boolean,
            required: true,
            default: false,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);

export const StudentsCollections = model( 'students', StudentsSchema);
