
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type ErrorType = string | null

export const initialState = {
    status: 'loading' as RequestStatusType,
    error: null as ErrorType
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        default:
            return state
    }
}
export type AppActionsType =
    | ReturnType<typeof setAppStatusAC>
    | SetAppErrorACType

export const setAppStatusAC = (status:RequestStatusType) => {
    return {
        type: 'APP/SET-STATUS',
        status
    } as const
}
type SetAppErrorACType = ReturnType<typeof setAppErrorAC>
export const setAppErrorAC = (error:ErrorType) => {
    return {
        type: 'APP/SET-ERROR',
        error
    } as const
}