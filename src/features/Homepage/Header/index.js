import { Caption, Content, Article, Image, Name, Text, ButtonIcon } from "./styled";
import { BaseButton } from "../../../components/Button";
import personalPhoto from '../../../components/Resources/personal-photo.jpg';
import { Switcher } from "../Switcher";
import { resources } from "../../../components/Resources/resources";

const Header = () => (
    <Article>
        <Switcher />
        <Image src={personalPhoto} alt="Maksim Padrabinkin" />
        <Content>
            <Caption>THIS IS</Caption>
            <Name>{`${resources.name}`}</Name>
            <Text>👨🏻‍💻  I’m a passionate Frontend Developer in love with React, currently looking for new job opportunities.</Text>
            <BaseButton href={`mailto:${resources.email}`} target="_blank" title="My email">
                <ButtonIcon />
                Hire Me
            </BaseButton>
        </Content>
    </Article>
);

export default Header;