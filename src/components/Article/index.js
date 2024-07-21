import React from 'react';
import { Container, Content, Header, Table, List, Item, Bullet, Text } from "./styled";

const Section = ({ title, body }) => {
    return (
        <Container>
            <Content>
                <Header>
                    {title}
                </Header>
                <Table>
                    <List>
                        {body.map((skill) => (
                            <Item key={skill}>
                                <Bullet />
                                <Text>
                                    {skill}
                                </Text>
                            </Item>
                        ))}
                    </List>
                </Table>
            </Content>
        </Container>
    );
};

export default Section;