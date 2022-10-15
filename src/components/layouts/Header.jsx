import '../../styles/Header.scss'
import React from 'react'

function Header() {
  return (
    <section id='header'>
        <h1>Where in the world?</h1>
        <div id='toggle-theme'>
            <button className='material-symbols-outlined'></button>
            <p>Dark Mode</p>
        </div>
    </section>
  )
}

export default Header