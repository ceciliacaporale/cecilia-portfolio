import React from "react";
import { useTheme } from "styled-components";
import {
  FileIconWrapper,
  FileShape,
  FileTag,
  FileLine,
  FileLabel,
  FileMeta,
} from "./FileIcon.styles";
import type { ColorKey } from "../../styles/theme";

export interface FileIconProps {
  title: string;
  href: string;
  colorKey?: ColorKey;
  meta?: string;
}

const FileIcon: React.FC<FileIconProps> = ({
  title,
  href,
  colorKey = "blue",
  meta,
}) => {
  const theme = useTheme();

  return (
    <a href={href} aria-label={title}>
      <FileIconWrapper>
        <FileShape>
          <FileTag $color={theme.colors[colorKey]} />
          <FileLine />
          <FileLine />
          <FileLine />
        </FileShape>
        <FileLabel>{title}</FileLabel>
        {meta && <FileMeta>{meta}</FileMeta>}
      </FileIconWrapper>
    </a>
  );
};

export default FileIcon;
