import '../../styles/BackButton.scss'
import React from 'react'
import { NavLink } from 'react-router-dom'

function BackButton() {
    return <NavLink
    to={`/`}
    className='back-button'>
        <i className='material-symbols-outlined'>
            Arrow_Back
        </i>
        Back
    </NavLink>
}

export default BackButton