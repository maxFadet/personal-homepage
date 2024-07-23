import { Container, Content, Header, Table, List, Item, Bullet, Text } from "./styled";

const Section = ({ title, skills }) => (
    <Container>
        <Content>
            <Header>{title}</Header>
            <Table>
                <List>
                    {skills.map(skill => (
                        <Item key={skill}>
                            <Bullet />
                            <Text>{skill}</Text>
                        </Item>
                    ))}
                </List>
            </Table>
        </Content>
    </Container>
);

export default Section;