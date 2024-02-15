import { Image } from "../Header/Header.style";
import { StyledFooter } from "./Footer.style";

const Footer = () => (
  <StyledFooter>
    <Image
      src="/huguenot_logo.svg"
      alt="Huguenot Services Limited"
      width={40}
      height={40}
    />
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa eos rem
      nemo odio vero rerum. Error dolore perferendis veritatis, nobis dolorum
      deleniti. Maiores ut magnam ad ab dolore quae doloribus. Lorem ipsum dolor
      sit, amet consectetur adipisicing elit. Laboriosam, doloremque in,
      incidunt commodi sequi officiis nemo est repellat veritatis dolorum dolore
      necessitatibus repudiandae aut laudantium vero, deserunt non enim facere!
    </p>
    <div className="links">
      <a href="#">Terms of Use</a>
      <a href="#">Legal Terms</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Cookie Policy</a>
    </div>
  </StyledFooter>
);

export default Footer;
