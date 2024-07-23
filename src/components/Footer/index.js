import { Caption, Content, Article, Link, Text, Icons, LinkSocialMedia } from "./styled";
import { socialIcons } from './socialIcons';

const Footer = () => (
    <Article>
        <Content>
            <Caption>LET’S TALK!</Caption>
            <Link href="mailto:maxfadet@gmail.com" target="_blank" title="My email">
                maxfadet@gmail.com
            </Link>
            <Text>
                I’m always open to new projects whenever I have the time.
                If you have a website, dashboard or mobile app in mind and need
                some help to make your ideas come to life, feel free to contact me 🤟
            </Text>
            <Icons>
                {socialIcons.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                        <LinkSocialMedia key={index} href={social.url} target="_blank" title={social.name}>
                            <IconComponent />
                        </LinkSocialMedia>
                    );
                })}
            </Icons>
        </Content>
    </Article>
);

export default Footer;
