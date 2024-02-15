import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const ProductFinder = styled.div`
  background-color: #f8f9fa;
  padding: 30px 50px;
  height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Heading = styled.h1`
  font-size: 28px;
`;

export const Options = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  position: sticky;
  top: 0;
  background-color: inherit;
`;

export const Filters = styled.div`
  display: flex;
  margin-top: 30px;
  flex-wrap: wrap;
`;
