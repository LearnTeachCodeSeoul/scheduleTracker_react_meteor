import styled from 'styled-components';

const LoginPageBackground= styled.div`
    width: 100%;
    height:100%;
    position:fixed;
    top:0;
    left:0;
    background: linear-gradient(
    to bottom,
    rgba(20, 33, 61, 1),
    rgba(41, 53, 78, 0.95)
  );
`;

const LoginPageTitle = styled.div`
  @media (max-height: 390px) {
    display: none;
  }

  justify-content: center;
  display: flex;
  align-items: center;

  font-size: 46px;
  width:100%;
  height:25%;
  color: #ffffff;
  font-family: 'Galada', cursive;
  padding:0;
  user-select:none;
  &:hover{
    color: #fca311;
  }
  transition: color .3s;
`;

export { LoginPageBackground, LoginPageTitle }