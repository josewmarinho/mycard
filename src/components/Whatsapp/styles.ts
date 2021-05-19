import styled from 'styled-components';

export const Container = styled.div`
   margin-top: 20px;
   width: 400px;

  a {
    background: #C8CEB4;
    border-radius: 20px;
    width: 100%;
    padding: 14px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
    margin-top: 10px;

    }

    svg {
      color: #090909;
      width: 45px;
      height: 45px;
      border-radius: 5px;
      margin-left: 10px;
    }

    div {
      margin: 0px 56px;
      margin-top: -40px;
      flex: 1;

      h1 {
        font-size: 22px;
        color: #090909;
      }

      p {
        font-size: 13px;
        color: #A8A8B3;
        margin-top: 1px;
      }
    }
  }
`