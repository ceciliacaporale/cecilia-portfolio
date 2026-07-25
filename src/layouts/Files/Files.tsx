import React, { useState } from "react";
import HeroSection from "../../components/HeroSection";
import ResponsiveLayout from "../ResponsiveLayout";
import { CategoriesGrid, CategoryTile, EmptyState } from "./Files.styles";
import Folder from "../../components/Folder";
import ThemeWrapper from "../../ThemeWrapper";
import SearchInput from "@components/SearchInput";
import { blogCategories } from "../../data/blogCategories";

const FilesPage: React.FC = () => {
  const [activeTag, setActiveTag] = useState<string | undefined>(undefined);

  const filteredCategories = blogCategories.filter(
    (category) => !activeTag || category.label === activeTag
  );

  return (
    <ThemeWrapper>
      <ResponsiveLayout>
        <HeroSection
          titleStrings={["Files", "Arquivos", "Archivos"]}
          description="Welcome to my file collection! Here you'll find a mix of studies, notes, documents, and content related to my learning and evolution as a developer. Each item reflects a part of my journey, sharing the knowledge acquired, insights, and reflections along the way. Feel free to explore and follow my professional growth!"
        >
          <SearchInput
            searchQuery=""
            onChange={() => {}}
            showInput={false}
            tags={blogCategories.map((category) => category.label)}
            activeTag={activeTag}
            onTagClick={(tag) =>
              setActiveTag((current) => (current === tag ? undefined : tag))
            }
          />
          <CategoriesGrid>
            {filteredCategories.length === 0 && (
              <EmptyState>No categories match this filter.</EmptyState>
            )}
            {filteredCategories.map((category) => (
              <CategoryTile key={category.id}>
                <Folder
                  href={`/files/${category.id}`}
                  tooltipText={category.label}
                  isDraggable={false}
                  standalone
                  showStar={false}
                  colorKey={category.folderColorKey}
                  tooltipColorKey={category.colorKey}
                />
                <span>{category.label}</span>
                <p>{category.description}</p>
              </CategoryTile>
            ))}
          </CategoriesGrid>
        </HeroSection>
      </ResponsiveLayout>
    </ThemeWrapper>
  );
};

export default FilesPage;
