import styled from 'styled-components'

export const OptionsContainer = styled.button`
  width: 100%;
  height: 43px;
  font-size: 30px;
  color: white;
  vertical-align: center;
  text-align: center;
  background: none;
  border: 5px solid #2b2b3a;
  border-right-color: ${props => props.pressed ? "#eafc40" : "#2b2b3a"};
  cursor: pointer;
  margin-bottom: 45px;
  transition: ease-in-out .5s;

  :hover {
    border-left-color: #eafc40;
    transition: ease-in-out: .2s;
  }
`
