import {
  FooterHeading,
  FooterContent,
  Article,
  EmailLink,
  FooterText,
  SocialIcons,
  SocialMediaLink
} from "./styled";
import { resources } from "../../../components/Resources/resources";

const Footer = () => (
  <Article>
    <FooterContent>
      <FooterHeading>
        Let’s talk!
      </FooterHeading>
      <EmailLink
        href={`mailto:${resources.email}`}
        target="_blank"
        title="My email"
      >
        {resources.email}
      </EmailLink>
      <FooterText>
        I’m always open to new projects whenever I have the time.
        If you have a website, dashboard or mobile app in mind and need
        some help to make your ideas come to life, feel free to contact me 🤟
      </FooterText>
      <SocialIcons>
        {resources.socialIcons.map((social, index) => (
          <SocialMediaLink
            key={index}
            href={social.url}
            target="_blank"
            title={social.name}
          >
            <social.icon />
          </SocialMediaLink>
        ))}
      </SocialIcons>
    </FooterContent>
  </Article>
);

export default Footer;