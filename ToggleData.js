import React from 'react'
import {MdArrowForward} from 'react-icons/md'
export const ToggleData = [
    {
        title:'Home',
        path:'/',
        className: 'home'
    },
    {
        title:'Cars',
        path:'/Cars',
        icon: <MdArrowForward/>,
        className: 'cars'
    },
    {
        title:'Trees',
        path:'/Trees',
        className: 'Trees'
    },
    {
        title:'Water',
        path:'/Water',
        className: 'water'
    }
]