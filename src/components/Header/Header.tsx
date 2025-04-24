import { Container } from './styles'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState } from 'react'
import Resume from '../../assets/Andrei_Usatau_CV_eng.pdf'

export function Header() {
  const [isActive, setActive] = useState(false)
  function toggleTheme() {
    let html = document.getElementsByTagName('html')[0]
    html.classList.toggle('light')
  }
  function closeMenu() {
    setActive(false)
  }
  return (
    <Container className="header-fixed">
      {/* <Router> */}
        <HashLink smooth to="#home" className="logo">
          <span>{"<Создай "}</span>
          <span>{" игру :) />"}</span>
        </HashLink>
        <input
          onChange={toggleTheme}
          className="container_toggle"
          type="checkbox"
          id="switch"
          name="mode"
        />
        <label htmlFor="switch">Toggle</label>
        <nav className={isActive ? 'active' : ''}>
          <NavHashLink smooth to="#home" onClick={closeMenu}>
            Начало сайта
          </NavHashLink>
          <NavHashLink smooth to="#about" onClick={closeMenu}>
            Обо мне
          </NavHashLink>
          <NavHashLink smooth to="#project" onClick={closeMenu}>
            Отзывы
          </NavHashLink>
          <NavHashLink smooth to="#contact" onClick={closeMenu}>
            Контакты
          </NavHashLink>
          <a href={Resume} download className="button">
            Резюме
          </a>
        </nav>
        <div
          aria-expanded={isActive ? 'true' : 'false'}
          aria-haspopup="true"
          className={isActive ? 'menu active' : 'menu'}
          onClick={() => {
            setActive(!isActive)
          }}
        ></div>
      {/* </Router> */}
    </Container>
  )
}
