import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name

            let copyState: UserType[] = []

            // if (action.payload === 'up') {
            //     copyState = state.sort((a, b) => a.age - b.age)  // сортировка по возрастанию возраста
            // } else if (action.payload === 'down') {
            //     copyState = state.sort((a, b) => b.age - a.age)  // сортировка по убыванию возраста
            // }

            // (a, b) => a.name > b.name ? 1 : -1      //! функция сравнения строк по алфавиту
            // (a, b) => a.name.localeCompare(b.name)  //! более правлильная функция сравнения строк по алфавиту

            if (action.payload === 'up') {
                copyState = state.sort((a, b) => a.name.localeCompare(b.name))
            } else if (action.payload === 'down') {
                copyState = state.sort((a, b) => b.name.localeCompare(a.name))
            }
            return copyState // need to fix
        }
        case 'check': {
            let copyState = state.sort((a, b) => a._id - b._id)
            return copyState.filter(p => p.age >= action.payload)                         // need to fix
        }
        default:
            return state
    }
}
