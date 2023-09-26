import { gql } from '@apollo/client'

export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080'

export const GET_ALL_ITEM = gql`
    query {
        shoppingItems {
            id
            itemName
            description
            count
            purchased
        }
    }
`

export const ADD_A_ITEM = gql`
    mutation AddShoppingItem(
        $itemName: String!
        $description: String!
        $count: Int!
    ) {
        addShoppingItem(
            itemName: $itemName
            description: $description
            count: $count
        ) {
            id
            itemName
            description
            count
            purchased
        }
    }
`

export const DELETE_ITEM = gql`
    mutation DeleteShoppingItem($id: Int!) {
        deleteShoppingItem(id: $id)
    }
`

export const UPDATE_PURCHASE_STATUS = gql`
    mutation UpdatePurchasedStatus($id: Int!, $purchased: Boolean!) {
        updatePurchasedStatus(id: $id, purchased: $purchased)
    }
`
