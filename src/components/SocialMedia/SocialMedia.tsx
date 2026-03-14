import React from "react";
import {
  SocialMediaWrapper,
  Header,
  Content,
  IconWrapper,
  Tooltip,
  SmileWrapper,
} from "./SocialMedia.styles";
import Smile from "../../assets/smileface.svg?url";
import { DEFAULT_SOCIAL_ITEMS, type SocialItem } from "../../data/socialMediaData";

const DEFAULT_ICON_SIZE = 33;

export interface SocialMediaProps {
  title?: string;
  iconSize?: number;
  items?: SocialItem[];
  showSmile?: boolean;
  isDraggable?: boolean;
}

const SocialMedia: React.FC<SocialMediaProps> = ({
  title,
  iconSize = DEFAULT_ICON_SIZE,
  items = DEFAULT_SOCIAL_ITEMS,
  showSmile = true,
  isDraggable = true,
}) => {
  return (
    <SocialMediaWrapper
      style={isDraggable ? undefined : { position: "relative", top: "auto", left: "auto" }}
    >
      {showSmile && (
        <SmileWrapper>
          <img src={Smile} alt="Emoji de rosto feliz." width="100" height="100" />
        </SmileWrapper>
      )}

      {title && <Header>{title}</Header>}

      <Content>
        {items.map(({ id, icon: Icon, label, url, colorKey }) => (
          <IconWrapper key={id} $colorKey={colorKey}>
            <a
              href={url}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon size={iconSize} />
              <Tooltip $colorKey={colorKey}>{label}</Tooltip>
            </a>
          </IconWrapper>
        ))}
      </Content>
    </SocialMediaWrapper>
  );
};

export default SocialMedia;