import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import telegram from '../../assets/telegram.svg'
import instagramIcon from '../../assets/instagram.svg'

export function Footer() {
  return (
    <Container className="footer">
      <a href="https://www.linkedin.com/in/ausatov/" className="logo" >
      {/* <div className="social-media floatleft">
        <img src={linkedin} alt="Linkedin"/>
        
      </div> */}
      <div className="clear">
        <span>Мой</span>
        <span> Linked</span>
        <span> in</span>
        </div>
      </a>
      <div>
        <p>
          Сайт написан на <img src={reactIcon} alt="React" />
          <span>❤️</span>
        </p>
      </div>
      <div className="social-media">
    
        <a
          href="https://api.whatsapp.com/send/?phone=%2B375256634708&text=Привет! Я нашел твой контакт на сайте devgame.online.%0A%0A"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        <a
          href="https://t.me/abusp"
          target="_blank"
          rel="noreferrer"
        >
          <img src={telegram} alt="telegram" />
        </a>
      </div>
    </Container>
  )
}
