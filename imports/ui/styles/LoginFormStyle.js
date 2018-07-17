import styled from 'styled-components';

const LoginInputContainer = styled.div`
display: flex;
justify-content: center;
margin: 10px;
`

const LoginInput = styled.input`
&:focus{
  border: 1px solid #fca311;
  color: #fca311;
}
width: 80%;
height: 60px;
background-color: transparent;
border: 1px solid dimgray;
border-radius: 5px;
font-size: 20px;
`

const LoginSubmitButton = styled.button`
width:80%;
background-color: rgba(41, 53, 78, 0.95);
&:hover{
  background-color: #fca311;
}
height: 60px;
border: none;
border-radius: 5px;

`

const LoginFormContainer = styled.form`
margin:auto;
flex:1;
`

const LoginFormRoot = styled.div`
width: 30%;
margin: auto;
margin-top: 30px;
height: 40%;
background: white;
box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
display: flex;
`

export { LoginFormRoot, LoginFormContainer, LoginInputContainer, LoginInput, LoginSubmitButton };