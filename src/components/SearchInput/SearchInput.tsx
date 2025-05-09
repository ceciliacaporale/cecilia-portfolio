import React from "react";
import {
  InputWrapper,
  InputField,
  TagsWrapper,
  TagItem,
} from "./SearchInput.styles";

interface SearchInputProps {
  searchQuery: string;
  onChange: (value: string) => void;
  placeholder?: string;
  tags?: string[];
  activeTag?: string;
  onTagClick?: (tag: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  searchQuery,
  onChange,
  placeholder = "Buscar...",
  tags = [],
  activeTag,
  onTagClick,
}) => {
  return (
    <InputWrapper>
      <InputField
        type="text"
        value={searchQuery}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />

      {tags.length > 0 && (
        <TagsWrapper>
          {tags.map((tag) => (
            <TagItem
              key={tag}
              onClick={() => onTagClick?.(tag)}
              $active={tag === activeTag}
            >
              {tag}
            </TagItem>
          ))}
        </TagsWrapper>
      )}
    </InputWrapper>
  );
};

export default SearchInput;
