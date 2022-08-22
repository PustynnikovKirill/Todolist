
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'


export const initialState = {
    status: 'loading' as RequestStatusType
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        default:
            return state
    }
}

export type AppActionsType =
    | ReturnType<typeof setAppStatusAC>


export const setAppStatusAC = (status:RequestStatusType) => {
    return {
        type: 'APP/SET-STATUS',
        status
    }
}