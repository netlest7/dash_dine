import {gql} from 'apollo-server-express';
const ownerTypeDef = gql`#graphql

type User{
    id: ID!
    owner_name: String!
    owner_phoneNumber: String
    owner_aadharCard: Int
    owner_email: String!
    owner_password: String!
    owner_isVerified: Boolean!
    owner_storeId: [String!]
    owner_paymentDetails: String   
}

type Query{
    getAllUsers : [User]
    getUserByID(id:ID!) : User
    getContext: String

}


type Mutation{
    createUser(owner_name: String!,owner_email: String!, owner_password: String! ) : User
    loginUser(owner_email: String!, owner_password: String! ) : User
}
`

export default ownerTypeDef;