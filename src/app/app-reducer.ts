export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    status: 'loading' as RequestStatusType
}

type InitialStateType = typeof initialState

export const appReducer = (state:InitialStateType = initialState, action: AppActionsType) => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        default:
            return state
    }
}

export const setAppStatusAC = (status:RequestStatusType) => ({type:'APP/SET-STATUS',status}as const)
type setAppStatusAC = ReturnType<typeof setAppStatusAC>
export  type AppActionsType = setAppStatusAC