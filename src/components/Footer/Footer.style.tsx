import styled from 'styled-components';

export const StyledFooter = styled.footer`
padding: 30px 50px;
background-color: #063156;
color: #ffffff;
font-size: 14px;

img {
  margin: 20px 0;
}

p {
  max-width: 700px;
}

.links {
  display: flex;
  align-items: center;
  margin: 15px 0;
}

.links a {
  margin-right: 20px;
  color: #ffffff;
  text-decoration: none;
}

.links a:hover {
  text-decoration: underline;
}
`;