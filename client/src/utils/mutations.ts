import { gql } from '@apollo/client';

export const CREATE_CONTACT = gql`
    mutation createContact($name: String!, $email: String!, $message: String!) {
        createContact(name: $name, email: $email, message: $message) {
            name
            email
            message
        }
    }
`;
