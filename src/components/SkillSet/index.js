import { Container, Header, List, Item, Text } from "./styled";

const Section = ({ title, skills }) => (
    <Container>
        <Header>{title}</Header>
        <List>
            {skills.map(skill => (
                <Item key={skill}>
                    <Text>{skill}</Text>
                </Item>
            ))}
        </List>
    </Container>
);

export default Section;