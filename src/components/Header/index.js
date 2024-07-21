import { Button, Caption, Content, Article, Image, Title, Text, ButtonIcon, ButtonText } from "./styled";
import personalPhoto from '../../images/personal-photo.jpg';

const Header = () => {
    return (
        <Article>
            <Image src={personalPhoto} alt="Maksim Padrabinkin" />
            <Content>
                <Caption>
                    THIS IS
                </Caption>
                <Title>
                    Maksim Padrabinkin
                </Title>
                <Text>
                    👨🏻‍💻  I’m a passionate Frontend Developer in love with React, currently looking for new job opportunities.
                </Text>
                <Button>
                    <ButtonIcon />
                    <ButtonText>
                        Hire Me
                    </ButtonText>
                </Button>
            </Content>
        </Article>
    );
};

export default Header;
