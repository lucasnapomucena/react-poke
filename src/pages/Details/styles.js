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

  div.row {
    display: flex;
    width: 100%;
    flex-direction: row;

    figure {
      margin-right: 20px;
    }
    div {
      display: flex;
      flex-direction: column;

      span {
        margin-bottom: 10px;
        text-transform: capitalize;

        strong {
          margin-right: 5px;
        }
      }
    }
  }
`;
