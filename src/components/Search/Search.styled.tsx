import styled from "styled-components";

export const StyledSearch = styled.label`
  border-bottom: 2px solid #063156;
  display: flex;
  align-items: center;
  color: #d0043c;

  h2 {
    margin: 0 10px;
    font-size: 20px;
  }

  input {
    flex-grow: 1;
    border: 0;
    height: 30px;
    padding: 0 10px;
    margin-left: 30px;
    background: transparent;
  }

  input::placeholder {
    font-style: italic;
  }
`;
