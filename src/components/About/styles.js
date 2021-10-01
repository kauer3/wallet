import styled, {keyframes} from 'styled-components'

const loadAbout = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const AboutContainer = styled.div`
  position: absolute;
  width: 55%;
  background: ${props => props.menu ? 'green' : 'none'}%;
  padding: 7vh 5%;
  font-size: 25px;
  color: #050505;
  font-family: Arial, sans-serif;
  text-align: justify;
  index-z: -1;
  animation: ${loadAbout};
  animation-duration: 1.8s;
  animation-timing-function: ease-out;
  transform: ${props => props.menu ? 'translate(100px)' : 'none'};
  transition: ease-in-out .5s;
  z-index: -1;
  h2 {
    margin-bottom: 7vh;
    text-align: center;
  }
`
