import styled, {keyframes} from 'styled-components'

const loadExpense = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`

export const ExpenseContainer = styled.div`
  transform: ${props => props.editing ? 'translate(0, -5px) scale(1.03)' : 'none'};
  transition: ease-out .5s;
  form {
    display: flex;
    felx-direction: row;
    justify-content: space-around;
    flex-wrap: no-wrap;
    width: 100%;
    height: 100px;
    background: ${props => props.editing ? '#fff' : '#f4f5f6'};
    border-radius: 20px;
    animation: ${loadExpense};
    animation-duration: .5s;
    animation-delay: .${props => props.index}s;
    -webkit-animation-fill-mode: forwards;
    -moz-animation-fill-mode: forwards;
    -ms-animation-fill-mode: forwards;
    -o-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    transition: ease-out .3s;
    box-shadow: ${props => props.editing ? '0px 10px 20px #333' : '-2px 2px 5px #555'};
    opacity: 0;
    input, select {
      font-family: Arial, sans-serif;
      font-size: 1.6vw;
      width: 21%;
      text-align: center;
      border: none;
      background: transparent;
    }
    input:focus {
      outline: none;
    }
    div {
      font-family: Arial, sans-serif;
      font-size: 1.6vw;
      transform: translate(0, 40px);
      width: 21%;
      height: 30px;
    }
      .options {
        width: 120px;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        button {
          cursor: pointer;
          background: transparent;
          border: none;
          transform: scale(1) translate(0, -8px);
          transition: 0.2s ease-in;
          height: 35px;
          img {
            height: 35px;
          }
            :hover {
              transition: 0.2s ease-in;
              transform: scale(1.15) translate(0, -8px);
            }
        }
      }

    input[type='date'] {
      ::-webkit-calendar-picker-indicator {
        transform: translate(25px, 50px) scale(0.1);
        transition: 0.4s ease-in;
        cursor: pointer;
        width: 0;
        margin: 0;
      }
        :hover, :focus {
          ::-webkit-calendar-picker-indicator {
            width: 20px;
            transform: translate(0px, 3px) scale(1);
            transition: 0.4s ease-out;
          }
        }
    }
  }
`
