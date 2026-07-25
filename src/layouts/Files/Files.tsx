import React, { useState } from "react";
import HeroSection from "../../components/HeroSection";
import ResponsiveLayout from "../ResponsiveLayout";
import { CategoriesGrid, CategoryTile, EmptyState } from "./Files.styles";
import Folder from "../../components/Folder";
import ThemeWrapper from "../../ThemeWrapper";
import LanguageWrapper, { useLanguage } from "../../LanguageWrapper";
import SearchInput from "@components/SearchInput";
import { blogCategories } from "../../data/blogCategories";
import { PAGE_DESCRIPTIONS, CATEGORY_LABELS, CATEGORY_DESCRIPTIONS, UI_STRINGS } from "../../i18n/translations";

const FilesContent: React.FC = () => {
  const { language } = useLanguage();
  const [activeTag, setActiveTag] = useState<string | undefined>(undefined);

  const filteredCategories = blogCategories.filter(
    (category) => !activeTag || category.id === activeTag
  );

  return (
    <ResponsiveLayout>
      <HeroSection
        titleStrings={["Files", "Arquivos", "Archivos"]}
        description={PAGE_DESCRIPTIONS.files[language]}
      >
        <SearchInput
          searchQuery=""
          onChange={() => {}}
          showInput={false}
          tags={blogCategories.map((category) => ({
            id: category.id,
            label: CATEGORY_LABELS[category.id]?.[language] ?? category.label,
          }))}
          activeTag={activeTag}
          onTagClick={(tagId) =>
            setActiveTag((current) => (current === tagId ? undefined : tagId))
          }
        />
        <CategoriesGrid>
          {filteredCategories.length === 0 && (
            <EmptyState>{UI_STRINGS.noCategoriesMatch[language]}</EmptyState>
          )}
          {filteredCategories.map((category) => {
            const label = CATEGORY_LABELS[category.id]?.[language] ?? category.label;
            const description = CATEGORY_DESCRIPTIONS[category.id]?.[language] ?? category.description;

            return (
              <CategoryTile key={category.id}>
                <Folder
                  href={`/files/${category.id}`}
                  tooltipText={label}
                  compactTooltip
                  isDraggable={false}
                  standalone
                  showStar={false}
                  colorKey={category.folderColorKey}
                  tooltipColorKey={category.colorKey}
                />
                <span>{label}</span>
                <p>{description}</p>
              </CategoryTile>
            );
          })}
        </CategoriesGrid>
      </HeroSection>
    </ResponsiveLayout>
  );
};

const FilesPage: React.FC = () => {
  return (
    <ThemeWrapper>
      <LanguageWrapper>
        <FilesContent />
      </LanguageWrapper>
    </ThemeWrapper>
  );
};

export default FilesPage;
