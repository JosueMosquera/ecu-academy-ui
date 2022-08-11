import { useReducer } from 'react'

type ChangeFormValues = {
    type: 'change-form-values',
    payload: {
        field: any,
        value: any
    }
}
type ActionTypes = ChangeFormValues
type FormValues = {
    email: string | null
    userName: string | null
    password: string | null
}
const initialFormValues: FormValues = {
    email: null,
    userName: null,
    password: null

}
type State = {
    formValues: FormValues
}
const initialState: State = {
    formValues: initialFormValues
}

const reducer = (state: State, action: ActionTypes) => {
    switch (action.type) {
        case 'change-form-values':
            const { field, value } = action.payload
            return {
                ...state,
                formValues: {
                    ...state.formValues,
                    [field]: value
                }
            }
        default:
            return state
    }
}
export interface ReducerValue {
    changeFormValues: (field: any, value: any) => void
}
export const useAuthReducer = (): ReducerValue => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const changeFormValues = (field: any, value: any) => {
        dispatch({
            type: 'change-form-values',
            payload: {
                field,
                value
            }
        })
    }
    console.log(state.formValues)
    return {
        ...state,
        changeFormValues
    }
}