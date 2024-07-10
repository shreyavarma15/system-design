//#graphql
//# Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
//# The "Query" type is special: it lists all of the available queries that
//# clients can execute, along with the return type for each.

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
// Adding ! - means mandatory fields

export const typeDefs = `#graphql

    type Author {
        id: ID!
        name: String !
        books: [Book]
    }

    type Book {
        id: ID
        title: String 
        publishedYear: Int 
        author: Author
    }

    type Query {
        authors: [Author]
        books: [Book]
    }

    type Mutation {
        addBook(title: String!, publishedYear: Int, authorId: ID! ): Book!
    }
`;
