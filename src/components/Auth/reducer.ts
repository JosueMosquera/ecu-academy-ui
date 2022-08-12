import { useReducer } from 'react'
import axios from 'src/utils/axios'
import Swal from 'sweetalert2'

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
    username: string | null
    password: string | null
}
const initialFormValues: FormValues = {
    email: null,
    username: null,
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
    sendUserData: () => void
    login: () => void
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
    const sendUserData = async () => {
        const { username, password, email } = state.formValues
        if (username && password && email !== null) {
            try {
                await axios.post('/users', {
                    username,
                    password,
                    email
                })
                Swal.fire({ title: 'Felicidades te has registrado exitosamente', icon: 'success' })

            } catch (error) {
                Swal.fire({ title: 'Algo sucedio al momento de registrarte', icon: 'error' })
                console.error(error)
            }
        }
    }
    const login = () => {
        const { username, password } = state.formValues
        if (username && password !== null) {
            try {

            } catch (error) {

            }
        }
    }
    return {
        ...state,
        changeFormValues,
        sendUserData,
        login
    }
}