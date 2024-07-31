import { Caption, Content, Article, Image, Name, Text, ButtonIcon } from "./styled";
import { ButtonWithIcon } from "../Button";
import personalPhoto from '../../images/personal-photo.jpg';
import { Switch } from "./Switch";

const Header = () => (
    <Article>
        <Switch />
        <Image src={personalPhoto} alt="Maksim Padrabinkin" />
        <Content>
            <Caption>THIS IS</Caption>
            <Name>Maksim Padrabinkin</Name>
            <Text>👨🏻‍💻  I’m a passionate Frontend Developer in love with React, currently looking for new job opportunities.</Text>
            <ButtonWithIcon href="mailto:maxfadet@gmail.com" target="_blank" title="My email">
                <ButtonIcon />
                Hire Me
            </ButtonWithIcon>
        </Content>
    </Article>
);

export default Header;