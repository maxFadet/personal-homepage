import {
    HeaderCaption,
    ContentWrapper,
    HeaderArticle,
    ProfileImage,
    DeveloperName,
    DeveloperText,
    EmailIconWrapper
} from "./styled";
import { ButtonLink } from "../../../components/Button";
import personalPhoto from "../../../components/Resources/personal-photo.jpg";
import { ThemeSwitcher } from "../Switcher";
import { resources } from "../../../components/Resources/resources";

const Header = ({ darkMode, toggleTheme }) => (
    <HeaderArticle>
        <ThemeSwitcher />
        <ProfileImage src={personalPhoto} alt="Maksim Padrabinkin" />
        <ContentWrapper>
            <HeaderCaption>
                This is
            </HeaderCaption>
            <DeveloperName>
                {`${resources.name}`}
            </DeveloperName>
            <DeveloperText>
                👨🏻‍💻  I'm a dedicated Frontend Developer with a passion for React, actively seeking new job opportunities.
            </DeveloperText>
            <ButtonLink
                href={`mailto:${resources.email}`}
                target="_blank"
                title="My email"
            >
                <EmailIconWrapper />
                Hire Me
            </ButtonLink>
        </ContentWrapper>
    </HeaderArticle>
);

export default Header;