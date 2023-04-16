import React from 'react'
import {Slider, SliderProps} from '@mui/material'
import {green} from "@mui/material/colors";

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                color: '#00CC22',
                width: 300,
                height: 10,
                padding: '13px 0',
                '& .MuiSlider-thumb': {
                    height: 27,
                    width: 27,
                    backgroundColor: '#fff',
                    border: '2px solid currentColor',
                    '&:before': {
                        width: 12,
                        height: 12,
                        backgroundColor: '#00CC22',
                        borderRadius: 5,
                        boxShadow: 'none'
                    },
                },
                '& .MuiSlider-track': {
                    height: 10,
                },
                '& .MuiSlider-rail': {
                    color: '#8B8B8B'
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
