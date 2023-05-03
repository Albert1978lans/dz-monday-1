export type ThemeStateType = {
    themeId: number
}

const initState = {
    themeId: 1,
}

type ActionType = ChangeThemeIdType

export const themeReducer = (state:ThemeStateType = initState, action: ActionType): ThemeStateType => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":
            return {
                ...state,
                themeId: action.id
            }
        default:
            return state
    }
}

type ChangeThemeIdType = {
    type: 'SET_THEME_ID'
    id: number
}

export const changeThemeId = (id: number): ChangeThemeIdType => ({ type: 'SET_THEME_ID', id }) // fix any
