import React from "react";
import {
  Container,
  Section,
  SectionImg,
  SectionContext,
  SectionContextHeading,
  SectionContextDescription,
  SectionButton,
  SectionLink,
} from "./LandingPage.elements";
import Section1Img from "../../assets/images/section1.svg";
import Section2Img from "../../assets/images/section2.svg";
import Section3Img from "../../assets/images/section3.svg";

const LandingPage = () => {
  return (
    <Container>
      <Section reverse={false} backgroundColor={true}>
        <SectionImg src={Section1Img} />
        <SectionContext reverse={false}>
          <SectionContextHeading heading={true}>
            Welcome peeps 👋 ! ( Meteor {"=>"} Meeting + Your )
          </SectionContextHeading>
         
        </SectionContext>
      </Section>

      <Section reverse={true} backgroundColor={false}>
        <SectionImg src={Section2Img} />
        <SectionContext reverse={true}>
          <SectionContextHeading heading={false}>
            Register → Login → Add your meeting data → Use whenever needed.
          </SectionContextHeading>
        </SectionContext>
      </Section>

      <Section reverse={false} backgroundColor={true}>
        <SectionImg src={Section3Img} />
        <SectionContext reverse={false}>
          <SectionContextHeading heading={true}>
            Start a quick meeting.
          </SectionContextHeading>
          <SectionContextDescription>
            <SectionLink href="https://meet.google.com/" target="_blank">
              <SectionButton>Google Meet</SectionButton>
            </SectionLink>
            <SectionLink href="https://zoom.us/meetings" target="_blank">
              <SectionButton>Zoom</SectionButton>
            </SectionLink>
          </SectionContextDescription>
        </SectionContext>
      </Section>
    </Container>
  );
};

export default LandingPage;
