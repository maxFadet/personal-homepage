import { Caption, Content, Article, Image, Name, Text, ButtonIcon } from "./styled";
import { BaseButton } from "../Button";
import personalPhoto from '../../images/personal-photo.jpg';
import { Switcher } from "./Switcher";

const Header = () => (
    <Article>
        <Switcher />
        <Image src={personalPhoto} alt="Maksim Padrabinkin" />
        <Content>
            <Caption>THIS IS</Caption>
            <Name>Maksim Padrabinkin</Name>
            <Text>👨🏻‍💻  I’m a passionate Frontend Developer in love with React, currently looking for new job opportunities.</Text>
            <BaseButton href="mailto:maxfadet@gmail.com" target="_blank" title="My email">
                <ButtonIcon />
                Hire Me
            </BaseButton>
        </Content>
    </Article>
);

export default Header;