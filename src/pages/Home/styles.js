import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-radius: 5px;
  border: 4px solid #2b73ba;
  margin: 20px auto;
  padding: 30px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  span {
    margin-bottom: 7px;
    font-weight: bold;
  }

  input {
    flex: 1 1;
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 5px 10px;
    margin-right: 15px;
  }

  button {
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: space-between;
    max-width: 110px;
    background-color: #ffcc30;
    color: #191920;
    border: 0;
    font-family: 'Roboto', sans-serif;
    padding: 0 10px;
    font-size: 15px;
    height: 35px;
    text-transform: uppercase;
    border-radius: 4px;
    flex: 1;
  }
`;

export const List = styled.ul`
  display: flex;
  width: 100%;

  li {
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-top: 20px;
    padding: 10px;
    list-style: none;
    display: flex;
    align-items: center;

    figure {
      margin-right: 20px;
    }

    div {
      display: flex;
      flex-direction: column;

      span {
        font-size: 14px;
        margin-bottom: 7px;
        text-transform: capitalize;

        strong {
          margin-right: 3px;
        }
      }
    }
  }
`;
