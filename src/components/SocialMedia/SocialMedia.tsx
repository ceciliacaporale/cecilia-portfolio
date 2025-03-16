import React from "react";
import { SocialMediaWrapper, Header, Content } from "./SocialMedia.styles";

interface SocialMediaProps {
  title: string;
}

const SocialMedia: React.FC<SocialMediaProps> = ({ title }) => {
  return (
    <SocialMediaWrapper>
      <Header>
        {title}
      </Header>
      <Content>
        
      </Content>
    </SocialMediaWrapper>
  );
};

export default SocialMedia;
