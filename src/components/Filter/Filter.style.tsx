import styled, { css } from 'styled-components';
import { FaChevronDown } from "react-icons/fa";

interface FilterProps {
    isOpen: boolean;
}

export const Container = styled.div`
  position: relative;
  height: 40px;
  
  &:not(:last-child) {
    margin-right: 15px;
  }
`;

export const FilterContainer = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  width: 170px;
  height: 40px;
  background-color: #ffffff;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;


export const FilterWrapper = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  width: 170px;
  height: 40px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin: 0;
`;

export const Chevron = styled(FaChevronDown)<FilterProps>`
  color: #d0043c;
  transition: transform 0.2s;

  ${(props) =>
    props.isOpen &&
    css`
      transform: scaleY(-1);
    `}
`;

export const OptionsContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 42px;
  left: 0;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 8px;
  box-shadow: 0 0 4px lightgrey;
`;

export const OptionContainer = styled.label`
  display: flex;
  align-items: center;

  &:not(:first-child) {
    margin-top: 8px;
  }
`;

export const OptionText = styled.span`
width: -webkit-fill-available;
position: absolute;
top: 42px;
left: 0;
border: 1px solid #e0e0e0;
border-radius: 2px;
background-color: #fff;
display: flex;
flex-direction: column;
align-items: stretch;
padding: 8px;
box-shadow: 0 0 4px lightgrey;
`;

export const Title = styled.h3`
  font-size: 14px;
  margin: 0;

  &:not(:first-child) {
    margin-top: 12px;
  }
`;
