import React from "react";
import {
  SocialMediaWrapper,
  Header,
  Content,
  IconWrapper,
  Tooltip,
  SmileWrapper,
  DEFAULT_WIDTH,
  DEFAULT_HEIGHT,
} from "./SocialMedia.styles";

import GitHubIcon from "../../assets/github.svg?url";
import LinkedinIcon from "../../assets/linkedin.svg?url";
import MediumIcon from "../../assets/medium.svg?url";
import MailIcon from "../../assets/mail.svg?url";
import InstagramIcon from "../../assets/instagram.svg?url";
import Smile from "../../assets/smileface.svg?url";

interface SocialIcon {
  id: string;
  icon: string;
  alt: string;
  url: string;
  tooltip: string;
  bgColor: string;
}

interface SocialMediaProps {
  title?: string;
  width?: string;
  height?: string;
  iconSize?: string;
}

const DEFAULT_ICON_SIZE = "30px";

const SocialMedia: React.FC<SocialMediaProps> = ({
  title,
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
  iconSize = DEFAULT_ICON_SIZE,
}) => {
  const socialIcons: SocialIcon[] = [
    {
      id: "github",
      icon: GitHubIcon,
      alt: "GitHub",
      url: "https://github.com/ceciliacaporale",
      tooltip: "GitHub",
      bgColor: "#FE87A4",
    },
    {
      id: "linkedin",
      icon: LinkedinIcon,
      alt: "LinkedIn",
      url: "https://www.linkedin.com/in/mariaceciliacaporale/",
      tooltip: "LinkedIn",
      bgColor: "#1CBFC1",
    },
    {
      id: "instagram",
      icon: InstagramIcon,
      alt: "Instagram",
      url: "https://www.instagram.com/cecicaporale/",
      tooltip: "Instagram",
      bgColor: "#FAC95F",
    },
    {
      id: "email",
      icon: MailIcon,
      alt: "E-mail",
      url: "mailto:cecicaporale16@gmail.com",
      tooltip: "E-mail",
      bgColor: "#FFF996",
    },
    {
      id: "medium",
      icon: MediumIcon,
      alt: "Medium",
      url: "https://medium.com/@cecicaporale16",
      tooltip: "Medium",
      bgColor: "#94EE9C",
    },
  ];

  return (
    <SocialMediaWrapper width={width} height={height}>
      <SmileWrapper>
        <img src={Smile} alt="Smile" width="100" height="100" />
      </SmileWrapper>

      {title && <Header>{title}</Header>}

      <Content>
        {socialIcons.map(({ id, icon, alt, url, tooltip, bgColor }) => (
          <IconWrapper key={id}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <img src={icon} alt={alt} width={iconSize} height={iconSize} />
              <Tooltip $bgColor={bgColor}>{tooltip}</Tooltip>
            </a>
          </IconWrapper>
        ))}
      </Content>
    </SocialMediaWrapper>
  );
};

export default SocialMedia;