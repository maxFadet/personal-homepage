import React from 'react';
import { Caption, Content, Article, Link, Text, Icons, LinkSocialMedia } from './styled';
import { resources } from '../../../components/Resources/resources';

const Footer = () => (
  <Article>
    <Content>
      <Caption>let’s talk!</Caption>
      <Link href={`mailto:${resources.email}`} target="_blank" title="My email">
        {resources.email}
      </Link>
      <Text>
        I’m always open to new projects whenever I have the time.
        If you have a website, dashboard or mobile app in mind and need
        some help to make your ideas come to life, feel free to contact me 🤟
      </Text>
      <Icons>
        {resources.socialIcons.map((social, index) => (
          <LinkSocialMedia key={index} href={social.url} target="_blank" title={social.name}>
            <social.icon />
          </LinkSocialMedia>
        ))}
      </Icons>
    </Content>
  </Article>
);

export default Footer;