const {buildSchema} = require('graphql')

module.exports = buildSchema(`
    type Profile{
        user_name: String!
        user_email: String!
        user_phone: String!
        user_password: String!
        user_region: String!
        user_role: String!
    }

    type RootQuery{
        hello: String!
    }
    type RootMutation{
        welcome: String!
    }

    schema{
        query: RootQuery
        mutation: RootMutation
    }
`)