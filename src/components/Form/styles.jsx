import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 24px;

  font-family: Arial, Helvetica, sans-serif;
`;

export const Form = styled.form`
  Input {
    flex: 1;
    padding: 10px 15px;
  }
  label {
    align-items: left;
    text-align: left;
  }

  input {
  }
`;

export const Container = styled.div`
margin-top:0%;
  max-width: 100%;
  background: black;
  border-color: #004d40;
  padding: 1%;

  border-radius: 4px;
`;

export const Card = styled.div`
  max-width: 30%;
`;

export const Result = styled.div`
  border: black;
  background: #fafafa;
  height: flex;
  width: flex;
  padding: 2%;
  display: flex;
`;
