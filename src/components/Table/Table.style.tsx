import styled from "styled-components";

export const StyledTable = styled.table`
  margin: 30px 50px;
  border-collapse: collapse;
  width: calc(100% - 100px);
  font-size: 14px;

  tr {
    border-bottom: 1px solid #e0e0e0;
  }

  th,
  td {
    padding: 5px 10px;
    height: 50px;
  }

  th {
    color: #ffffff;
    background-color: #063156;
  }

  th:nth-child(1),
  th:nth-child(2),
  th:nth-child(3),
  th:nth-child(4) {
    background-color: #335776;
    text-align: left;
  }

  th:nth-child(2) {
    width: 85px;
  }

  th:nth-child(3) {
    width: 100px;
  }

  th:nth-child(4) {
    width: 110px;
  }

  td {
    vertical-align: bottom;
  }

  td:first-child {
    color: 335776;
    vertical-align: middle;
  }

  td:nth-child(4) {
    border-right: 1px solid #e0e0e0;
  }
`;