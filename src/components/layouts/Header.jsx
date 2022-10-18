import '../../styles/components/layouts/Header.scss'
import React, { useState } from 'react'

function Header() {
  const [mode, setMode] = useState(false)

  function handleDarkMode() {
    setMode(!mode)

    const app = document.getElementById('App')

    app.classList.toggle('dark')
  }

  return (
    <section id='header'>
        <h1>Where in the world?</h1>
        <div id='toggle-theme'>
            <button
            className='material-symbols-outlined'
            onClick={
              handleDarkMode
            }>
              {
                mode ? 'Light_Mode' : 'Dark_Mode'
              }
            </button>
            {
              mode ? "Light Mode" : "Dark Mode"
            }
        </div>
    </section>
  )
}

export default Header