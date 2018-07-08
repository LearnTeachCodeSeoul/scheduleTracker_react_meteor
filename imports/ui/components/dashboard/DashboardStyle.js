import styled from 'styled-components'
import * as variables from '../../styles/variables'

const Navbar = styled.div`

display : grid;
grid-template-columns : 1fr 10rem 1fr;
justify-items : center;
align-items : center;
border-bottom : ${variables.PrimaryColor} 0.5rem solid;

div{
    justify-self : start;
}

nav{
    justify-self : end;
  }
  
  nav ul{
    display : grid;
    grid-template-columns : repeat(3,minmax(100px,1fr));
    justify-items: center;
  }
  li{
    list-style :none;
  }
  a{
    text-decoration : none;
    color : black;
  }

`

const WeekButton = styled.button`
  background-color: #14213d;
  border: none;
  padding: 5px;
  border-radius: 5px;
  width:auto;
  height: auto;
  box-shadow: 0 -2px 5px 3px #697183 inset, 0 5px 5px rgba(3, 25, 41, 0.17),
    0 15px rgba(255, 255, 255, 0.25) inset;
  font-size: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  color: #e9e9e9;
  /* text-shadow: 2px 2px #818181; */
  cursor: pointer;
  &:hover {
    background-color: #3e4960;
    color: #fca311;
  }
  &:focus{
        outline: none;
    }
`;
const GeneralButton = styled.button`
  border: none;
  margin: 0 5px 0 5px;
  padding: 2px 7px 2px 7px;
  font-size: 20px;
  width: auto;
  height: auto;
  background: none;
  cursor: pointer;
  color: #14213d;
  &:hover {
    color: #fca311;
  }
  &:focus{
        outline: none;
    }
`;


export { Navbar, WeekButton, GeneralButton } ;