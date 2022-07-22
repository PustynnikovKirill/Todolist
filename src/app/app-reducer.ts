export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    status: 'loading' as RequestStatusType,
    error: null as null | string
}

type InitialStateType = typeof initialState

export const appReducer = (state:InitialStateType = initialState, action: AppActionsType) => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case "APP-ERROR":
            return {...state, error: action.error}
        default:
            return state
    }
}

export const setAppStatusAC = (status:RequestStatusType) => ({type:'APP/SET-STATUS',status} as const)
type setAppStatusAC = ReturnType<typeof setAppStatusAC>

export const setAppErrorAC = ( error: null | string) => ({type: "APP-ERROR", error} as const)
type  setAppErrorACType = ReturnType<typeof setAppErrorAC>

export  type AppActionsType =
    setAppStatusAC |
    setAppErrorACType