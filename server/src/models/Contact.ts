import { Schema, model, type Document } from 'mongoose';

export interface IContact extends Document {
    name: string;
    email: string;
    message: string;
}

const contactSchema = new Schema<IContact>(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            match: /.+\@.+\..+/,
        },
        message: {
            type: String,
            required: true,
            trim: true,
        },
    },
    { timestamps: true }
);

const Contact = model('Contact', contactSchema);

export default Contact;