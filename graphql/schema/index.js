const {buildSchema} = require('graphql')

module.exports = buildSchema(`

    scalar Date
    
    type User{
        _id : ID!
        user_name: String!
        user_email: String!
        user_contact: String!
        user_password: String!
        session_id: String
        is_session_active: Boolean
    }

    type Stratup{
        slug : ID!
        title: String!
        content: String!
    }

    type Partner{
        slug : ID!
        logo: String!
        title: String!
        about: String!
        url: String!
    }

    type Quote {
        slug : ID!
        content: String!
        author: String!
        designation: String! 
    }

    type Circular {
        slug : ID!
        title: String!
        about: String!
        attachment: String!
        date: Date!
    }

    type Report {
        slug: ID!
        title: String!
        about: String!
        attechment: String!
        date: Date!
    }

    type Inquire {
        slug : ID!
        email: String!
        start_up_title: String!
        name: String!
        city: String!
        contact: String! 
        incorporated: String!
        description: String!
        startup_stage: String!
        needed_support: String!
        incubated: String!
        team_size: String!
        raisedFundAmount: Int!
        funding_agency: String!
        pitch_deck_url: String!
    }

    type Incubation{
        slug : ID!
        start_up_title: String!
        city: String!
        founders_name: String!
        founders_email: String!
        founders_contact: String!
        cofounders_name: String!
        cofounders_email: String!
        cofounders_contact: String!
        teamsize: Int!
        domain: String!
        description: String!
        aadhar_url: String
        incubation_form_url: String!
    }

    type Reachout{
        slug : ID!
        email : String!
        name : String!
        contact : String!
        message : String!
    }

    input incubationInput {
        start_up_title: String!
        city: String!
        founders_name: String!
        founders_email: String!
        founders_contact: String!
        cofounders_name: String!
        cofounders_email: String!
        cofounders_contact: String!
        team_size: Int!
        domain: String!
        description: String!
        aadhar_url: String
        incubation_form_url: String!
    }
    input startupInput {
        title: String!
        content: String!
    }

    input partnerInput {
        logo: String!
        title: String!
        about: String!
    }

    input quoteInput {
        content: String!
        author: String!
        designation: String!
    }

    input inquireInput {
        email: String!
        start_up_title: String!
        name: String!
        city: String!
        contact: String! 
        incorporated: String!
        description: String!
        startup_stage: String!
        needed_support: String!
        incubated: String!
        team_size: String!
        raised_fund_amount: Int!
        funding_agency: String!
        pitch_deck_url: String!
    }


    input reachoutInput {
        email : String!
        name : String!
        contact : String!
        message : String!
    }

    type RootQuery{
        hello: String!
        startups: [Stratup!]!
        partners: [Partner!]!
        quotes: [Quote!]!
        inquires: [Inquire!]!
        incubations: [Incubation]!
        reachouts: [Reachout!]!
        circulars: [Circular!]!
    }
    type RootMutation{
        welcome: String!
        add_startup(startup_input: startupInput): Stratup!
        add_partner(partner_input: partnerInput): Partner!
        add_quote(quote_input: quoteInput): Quote!
        add_inquire(inquire_input: inquireInput): Inquire!
        add_incubation(incubation_input: incubationInput): Incubation!
        add_query(reachout_input: reachoutInput): Reachout!
    }

    schema{
        query: RootQuery
        mutation: RootMutation
    }
`)