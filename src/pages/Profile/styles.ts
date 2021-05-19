import styled from 'styled-components';
import { shade } from 'polished';


export const Container = styled.header`
   background: var(--background);
   display: collumn;

`;

export const Header = styled.div`
   background: var(--green);
   max-width: 600px;
   margin: 0 auto;

   padding: 0 1rem;
   display: flex;
   align-items: center;
   justify-content: space-between;

   button {
      border: 0;
      font-size: 3rem;
      width: 50px;
      height: 50px;
      margin-top: 0.5rem;
      color: #FFF;
      background-color: var(--green);
      transition: filter 0.2s;   
      svg {
        width: 50px;
        height: 50px;
         &:hover {
         filter: brightness(0.9);   
         }
      }
   }
`

export const AvatarInput = styled.div`
  margin-top: 100px;
  position: relative;
  align-self: center;

  img {
    width: 186px;
    height: 186px;
    border-radius: 15%;
  }

  label {
    position: absolute;
    right: 0px;
    bottom: 0px;
    width: 48px;
    height: 48px;
    background: var(--shape);
    border-radius: 50%;
    border: 0;
    cursor: pointer;
    transition: background 0.2s;

    display: flex;
    justify-content: center;
    align-items: center;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: #312e28;
    }

    &:hover {
      background: ${shade(0.2, '#FFFF')};
    }
  }
`;

export const Content = styled.div`
   max-width: 600px;
   margin: -75px auto 0;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background: var(--body);
   padding: 50px;
   border-radius: 20px;

   h1 {
      font-size: 1.2rem;
      padding-top: 3rem;
   }
   p {
     font-size: 0.8rem;
     margin-top: 0.3rem;
   }
`