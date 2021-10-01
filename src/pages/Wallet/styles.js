import styled, {keyframes, createGlobalStyle} from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const Menu = styled.div`
  z-index: 1;
  .front, .mid, .back {
    height: 100vh;
    left: -195px;
    top: 0;
    position: fixed;
    transition: ease-in-out .5s;
    border-bottom-right-radius: 15px 20px;
  }
  .front {
    width: 200px;
    background: #2b2b3a;
    text-align: center;
    img {
      margin-top: 30px;
      margin-bottom: 80px;
      height: 140px;
      width: 140px;
      filter: hue-rotate(25deg) saturate(200%) sepia(30%);
      transition: ease-in-out .5s;
      transition-delay: .5s;
    }
  }

  .mid {
    width: 205px;
    background: #eafc40;
    transition-delay: .1s;
  }

  .back {
    width: 210px;
    background: #2b2b3a;
    transition-delay: .2s;
    .icon {
      position: absolute;
      width: 35px;
      height: 25px;
      border-bottom-right-radius: 10px;
      left: 210px;
      top: 0;
      background: #2b2b3a;
      transition: ease-in-out .5s;
      transition-delay: .2s;
      padding: 4px 0 6px 0;
      img {
        width: 30px;
        height: 25px;
        transition: ease-in-out .5s;
        transition-delay: .2s;
        filter: invert(100%);
        transform: scale(1.3);
      }
    }
  }
  :hover {
    .front, .mid, .back {
      transform: translate(195px);
      transition: ease-in-out .5s;
    }
    .front {
      transition-delay: .2s;
      img {
        transition: ease-out 1.2s;
        transition-delay: 0;
        transform: rotate(-360deg);
      }
    }

    .mid {
      transition-delay: .1s;
    }
    .icon {
      transform: translate(-30px);
      transition: ease-in-out .5s;
      img {
        opacity: 0;
        transition: ease-in-out .5s;
      }
    }

  }
`

export const ExpensesBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: center;
  text-align: center;
  transition: ease-in-out .5s;
  padding-bottom: 20px;

  .title {
    font-family: Arial, sans-serif;
    font-size: 30px;
    font-weight: bold;
    color: #2b2b3a;
    margin-top: 60px;
    margin-bottom: 40px;
  }

  .empty {
    margin-top: 35vh;
    animation: ${fadeIn};
    animation-duration: 2s;
    -webkit-animation-fill-mode: forwards;
    -moz-animation-fill-mode: forwards;
    -ms-animation-fill-mode: forwards;
    -o-animation-fill-mode: forwards;
    animation-fill-mode: forwards;

    a {
      cursor: pointer;
      color: #2b7b8a;

      :hover {
        color: #2b9baa;
      }
    }
  }

  .expenses {
    transition: ease-in-out .5s;
    transform: ${props => props.menuOpen ? 'translate(15vh)' : 'none'};
    width: ${props => props.menuOpen ? '60' : '65'}%;
    display: flex;
    flex-direction: column;
    flex-wrap: no-wrap;
    text-align: center;
    gap: 20px;

    .header {
      font-family: Arial, sans-serif;
      font-size: 1.5vw;
      color: #2b2b3a;
      font-weight: bold;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      flex-wrap: no-wrap;
      div {
        width: 21%;
        // background: grey;
      }
      .placeholder {
        width: 120px;
      }
    }
  }
`

export const AddButton = styled.div`
  .back, .mid, .front {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    transition: ease-in-out .7s;
  }

  .back, .front {
    background: #2b2b3a;
  }

  .back {
    position: fixed;
    top: 50px;
    right: 50px;

    .mid {
      background: #eafc40;

      img {
        height: 50px;
        filter: invert(100%);
        transition: ease-in-out 1s;
      }
    }

    :hover {
      transition: ease-out .2s;
      transform: scale(1.2);
      .mid {
        transition: ease-out .2s;
        transform: scale(0.9);
        .front {
          transition: ease-out .2s;
          transform: scale(0.9);
          img {
            transition: ease-out .4s;
            transform: scale(1.2) rotate(180deg);
          }
        }
      }
    }
    :active {
      .mid {
        filter: hue-rotate(100deg);
        .front {
          filter: hue-rotate(-100deg);
        }
      }
    }
  }
`

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    Background-image: linear-gradient(to right, #ddd, #f4f5f6, #ddd);
    img, button {
      -webkit-user-select: none;  
      -moz-user-select: none;    
      -ms-user-select: none;      
      user-select: none;
    }
  }
`
