import React from "react";
import {
  SocialMediaWrapper,
  Header,
  Content,
  IconWrapper,
  Tooltip,
  SmileWrapper,
} from "./SocialMedia.styles";
import { FaGithubAlt } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { PiInstagramLogoBold } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";
import { FaMedium } from "react-icons/fa6";
import Smile from "../../assets/smileface.svg?url";
import { useTheme } from "styled-components";

interface SocialIcon {
  id: string;
  icon: string | React.ReactElement;
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

const DEFAULT_ICON_SIZE = "33px";

const SocialMedia: React.FC<SocialMediaProps> = ({
  title,
  iconSize = DEFAULT_ICON_SIZE,
}) => {

  const theme = useTheme();

  const socialIcons: SocialIcon[] = [
    {
      id: "github",
      icon: <FaGithubAlt size={parseInt(iconSize)} />,
      alt: "GitHub",
      url: "https://github.com/ceciliacaporale",
      tooltip: "GitHub",
      bgColor: theme.colors.pink,
    },
    {
      id: "linkedin",
      icon: <AiOutlineLinkedin size={parseInt(iconSize)} />,
      alt: "LinkedIn",
      url: "https://www.linkedin.com/in/mariaceciliacaporale/",
      tooltip: "LinkedIn",
      bgColor: theme.colors.blue,
    },
    {
      id: "instagram",
      icon: <PiInstagramLogoBold size={parseInt(iconSize)} />,
      alt: "Instagram",
      url: "https://www.instagram.com/cecicaporale/",
      tooltip: "Instagram",
      bgColor: theme.colors.orange,
    },
    {
      id: "email",
      icon: <MdOutlineEmail size={parseInt(iconSize)} />,
      alt: "E-mail",
      url: "mailto:cecicaporale16@gmail.com",
      tooltip: "E-mail",
      bgColor: theme.colors.yellow,
    },
    {
      id: "medium",
      icon: <FaMedium size={parseInt(iconSize)} />,
      alt: "Medium",
      url: "https://medium.com/@cecicaporale16",
      tooltip: "Medium",
      bgColor: theme.colors.lime,
    },
  ];

  return (
    <SocialMediaWrapper>
      <SmileWrapper>
        <img src={Smile} alt="Smile" width="100" height="100" />
      </SmileWrapper>

      {title && <Header>{title}</Header>}

      <Content>
        {socialIcons.map(({ id, icon, alt, url, tooltip, bgColor }) => (
          <IconWrapper key={id} $bgColor={bgColor}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {typeof icon === "string" ? (
                <img src={icon} alt={alt} width={iconSize} height={iconSize} />
              ) : (
                icon
              )}
              <Tooltip $bgColor={bgColor}>{tooltip}</Tooltip>
            </a>
          </IconWrapper>
        ))}
      </Content>
    </SocialMediaWrapper>
  );
};

export default SocialMedia;
