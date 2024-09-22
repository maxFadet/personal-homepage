import {
    SectionContainer,
    SectionHeader,
    SkillList,
    SkillItem,
    SkillText,
    Bullet
} from "./styled";

const Section = ({ title, skills }) => (
    <SectionContainer>
        <SectionHeader>
            {title}
        </SectionHeader>
        <SkillList>
            {skills.map(skill => (
                <SkillItem key={skill}>
                    <Bullet />
                    <SkillText>{skill}</SkillText>
                </SkillItem>
            ))}
        </SkillList>
    </SectionContainer>
);

export default Section;