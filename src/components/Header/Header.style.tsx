import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  border-bottom: 1px solid #e0e0e0;
`;

export const SettingsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageContainer = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 50%;
  overflow: hidden;
  height: 22px;
  width: 22px;
  margin-right: 15px;
`;

export const Image = styled.img`
  height: 100%;
`;

export const SettingsText = styled.p`
  font-size: 14px;
  margin: 0;
`;