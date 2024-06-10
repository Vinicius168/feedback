import {ButtonContainer, CardContainer} from "./Home.styles";

import iconStarImg from "../assets/icon-star.svg"

export function Home() {
  return (
    <CardContainer>
      <iconStarImg>
        <img src ={iconStarImg} alt="icone de estrela" />
      </iconStarImg>


      <h1>como foi o atendimento?</h1>
      <p>Conte-nos como foi nossa ajuda com sua solicitação. Agradecemos muito seu feedback para podermos melhorar nosso atendimentol</p>

      <ButtonContainer>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
      </ButtonContainer>
      
      <button>Enviar</button>
    </CardContainer>
  )
}