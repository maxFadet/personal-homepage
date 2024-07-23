import { Button, Caption, Content, Article, Image, Name, Text, ButtonIcon, ButtonText } from "./styled";
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
            <Button>
                <ButtonIcon />
                <ButtonText>Hire Me</ButtonText>
            </Button>
        </Content>
    </Article>
);

export default Header;