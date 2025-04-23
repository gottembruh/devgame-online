import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Контакты</h2>
        <p>Готовы обсудить детали обучения? </p>
        <p>Свяжитесь со мной любым удобным вам способом!</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:mzyrit@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:mzyrit@gmail.com">mzyrit@gmail.com</a>
        </div>
        <div>
        <a href="tel:+919630576848"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+919630576848">(+375) 256634708</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}