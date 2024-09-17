import { HeaderCaption, ContentWrapper, HeaderArticle, ProfileImage, DeveloperName, DeveloperText, EmailIconWrapper } from "./styled";
import { BaseButton } from "../../../components/Button";
import personalPhoto from "../../../components/Resources/personal-photo.jpg";
import { ThemeSwitcher } from "../Switcher";
import { resources } from "../../../components/Resources/resources";

const Header = () => (
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
            <BaseButton
                href={`mailto:${resources.email}`}
                target="_blank"
                title="My email"
            >
                <EmailIconWrapper />
                Hire Me
            </BaseButton>
        </ContentWrapper>
    </HeaderArticle>
);

export default Header;