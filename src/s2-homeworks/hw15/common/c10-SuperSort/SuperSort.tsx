import React from 'react'
// добавить в проект иконки и импортировать
import upUrl from '../../icons/sort-up-svgrepo-com.svg'
import downUrl from '../../icons/sort-down-svgrepo-com.svg'
import upDownUrl from '../../icons/sort-1-svgrepo-com.svg'

// const downIcon = '[\\/]'
// const upIcon = '[/\\]'
// const noneIcon = '[--]'

const downIcon = downUrl
const upIcon = upUrl
const noneIcon = upDownUrl

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    if (sort === '') {
        return down
    } else if (sort === down) {
        return up
    } else {
        return ''
    }
    // return up // исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon


    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {/*сделать иконку*/}
            <img
                id={id + '-icon-' + sort}
                src={icon}
                style={{width: '25px'}}
            />

            {/*{icon} /!*а это убрать*!/*/}

        </span>
    )
}

// <span className="material-icons-outlined">
// expand_circle_down
// </span>

export default SuperSort
