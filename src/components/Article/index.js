import { Container, Header, List, Item, Bullet, Text } from "./styled";

const Section = ({ title, skills }) => (
    <Container>
            <Header>{title}</Header>
                <List>
                    {skills.map(skill => (
                        <Item key={skill}>
                            <Bullet />
                            <Text>{skill}</Text>
                        </Item>
                    ))}
                </List>
    </Container>
);

export default Section;