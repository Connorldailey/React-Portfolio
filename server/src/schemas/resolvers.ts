import Contact, { IContact } from '../models/Contact.js';

interface CreateContactArgs {
    name: string;
    email: string;
    message: string;
}

const resolvers = {
    Mutation: {
        createContact: async (_parent: any, args: CreateContactArgs): Promise<IContact> => {
            const contact = await Contact.create(args);
            return contact;
        },
    },
};

export default resolvers;