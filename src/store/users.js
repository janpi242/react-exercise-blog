import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialUsers = { users: [] }

function usersReducer(state = initialUsers, action) {
    switch (action.type) {
        case 'ADD_USERS':
            return {
                ...state, users: action.users
            }
        default:
            return state
    }
}
const store = createStore(usersReducer, composeWithDevTools())

export default store