import { useEffect, useReducer } from 'react'
import { Course } from 'src/Types/course'
import axios from 'src/utils/axios'

type GetCourses = {
    type: 'get-courses',
    payload: {
        courses: Course[]
    }
}

type ActionTypes = GetCourses


type State = {
    courses: Course[]
}
const initialState: State = {
    courses: []
}

const reducer = (state: State, action: ActionTypes) => {
    switch (action.type) {
        case 'get-courses':
            const { courses } = action.payload
            return {
                ...state,
                courses
            }
        default:
            return state
    }
}
export interface ReducerValue {


}
export const useCoursesReducer = (): ReducerValue => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const getCourses = async () => {
        const { data: courses } = await axios.get('/courses')
        dispatch({
            type: 'get-courses',
            payload: {
                courses
            }
        })
    }
    useEffect(() => {
        getCourses()
    }, [])
    return {
        ...state
    }
}