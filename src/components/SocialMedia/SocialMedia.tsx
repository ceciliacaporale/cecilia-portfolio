import React from "react";
import { SocialMediaWrapper, Header, Content, IconWrapper, Tooltip, SmileWrapper } from "./SocialMedia.styles";
import GitHubIcon from "../../assets/github.svg?url";
import LinkedinIcon from "../../assets/linkedin.svg?url";
import MediumIcon from "../../assets/medium.svg?url";
import MailIcon from "../../assets/mail.svg?url";
import InstagramIcon from "../../assets/instagram.svg?url";
import Smile from "../../assets/smileface.svg?url";

interface SocialMediaProps {
  title?: string;
  width?: string;
  height?: string;
  iconSize?: string;
  bgColor?: string;
}

const SocialMedia: React.FC<SocialMediaProps> = ({ title, width, height,  iconSize = "30px" }) => {
  return (
    <SocialMediaWrapper width={width} height={height}>
      <SmileWrapper>
        <img src={Smile} alt="Smile" width="100" height="100" />
      </SmileWrapper>
      
      <Header>{title}</Header>

      <Content>
        <IconWrapper>
          <a href="https://github.com/ceciliacaporale" target="_blank" rel="noopener noreferrer">
            <img src={GitHubIcon} alt="GitHub" width={iconSize} height={iconSize} />
            <Tooltip bgColor="#FE87A4">GitHub</Tooltip>
          </a>
        </IconWrapper>
        <IconWrapper>
          <a href="https://www.linkedin.com/in/mariaceciliacaporale/" target="_blank" rel="noopener noreferrer">
            <img src={LinkedinIcon} alt="LinkedIn" width={iconSize} height={iconSize} />
            <Tooltip bgColor="#1CBFC1">LinkedIn</Tooltip>
          </a>
        </IconWrapper>
        <IconWrapper>
          <a href="https://www.instagram.com/cecicaporale/" target="_blank" rel="noopener noreferrer">
            <img src={InstagramIcon} alt="Instagram" width={iconSize} height={iconSize} />
            <Tooltip bgColor="#FAC95F">Instagram</Tooltip>
          </a>
        </IconWrapper>
        <IconWrapper>
          <a href="mailto:cecicaporale16@gmail.com">
            <img src={MailIcon} alt="E-mail" width={iconSize} height={iconSize} />
            <Tooltip bgColor="#FFF996">E-mail</Tooltip>
          </a>
        </IconWrapper>
        <IconWrapper>
          <a href="https://medium.com/@cecicaporale16" target="_blank" rel="noopener noreferrer">
            <img src={MediumIcon} alt="Medium" width={iconSize} height={iconSize} />
            <Tooltip bgColor="#94EE9C">Medium</Tooltip>
          </a>
        </IconWrapper>
      </Content>
    </SocialMediaWrapper>
  );
};

export default SocialMedia;