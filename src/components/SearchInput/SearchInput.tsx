import React from "react";
import {
  InputWrapper,
  InputField,
  TagsWrapper,
  TagItem,
} from "./SearchInput.styles";

export interface SearchTag {
  id: string;
  label: string;
}

interface SearchInputProps {
  searchQuery: string;
  onChange: (value: string) => void;
  placeholder?: string;
  tags?: SearchTag[];
  activeTag?: string;
  onTagClick?: (tagId: string) => void;
  showInput?: boolean;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  searchQuery,
  onChange,
  placeholder = "Buscar...",
  tags = [],
  activeTag,
  onTagClick,
  showInput = true,
}) => {
  return (
    <InputWrapper>
      {showInput && (
        <InputField
          type="text"
          value={searchQuery}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
      )}

      {tags.length > 0 && (
        <TagsWrapper>
          {tags.map((tag) => (
            <TagItem
              key={tag.id}
              onClick={() => onTagClick?.(tag.id)}
              $active={tag.id === activeTag}
            >
              {tag.label}
            </TagItem>
          ))}
        </TagsWrapper>
      )}
    </InputWrapper>
  );
};

export default SearchInput;
