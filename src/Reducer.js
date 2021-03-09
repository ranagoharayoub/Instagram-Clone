export const initialState = {
    user: null,
    name: null
}

export const actiontype = {
    SetUser: 'SetUser'
}

export const reducer = (state, action) =>{
    switch (action.type) {
        case actiontype.SetUser:
            return {
                name: action.name,
                user: action.user }

        default:
            return state
    }
}

export default reducer