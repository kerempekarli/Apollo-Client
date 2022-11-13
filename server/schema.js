import { createSchema } from "graphql-yoga";

const books = [
  { name: "kitap1", author: "yazar1" },
  { name: "kitap1", author: "yazar1" },
  { name: "kitap1", author: "yazar1" },
  { name: "kitap1", author: "yazar1" },
  { name: "kitap1", author: "yazar1" },
  { name: "kitap1", author: "yazar1" },
  { name: "kitap1", author: "yazar1" },
  { name: "kitap1", author: "yazar1" },
  { name: "kitap1", author: "yazar1" },
];

export const schema = createSchema({
  typeDefs: /* GraphQL */ `
    type Book {
      name: String
      author: String
    }

    type Query {
      hello: String
      books: [Book]
    }
  `,
  resolvers: {
    Query: {
      books: () => books,
    },
  },
});
