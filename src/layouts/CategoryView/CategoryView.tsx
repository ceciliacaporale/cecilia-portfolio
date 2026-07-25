import React from "react";
import HeroSection from "../../components/HeroSection";
import ResponsiveLayout from "../ResponsiveLayout";
import FileIcon from "../../components/FileIcon";
import { BackLink, PostsGrid, EmptyState } from "./CategoryView.styles";
import ThemeWrapper from "../../ThemeWrapper";
import LanguageWrapper, { useLanguage } from "../../LanguageWrapper";
import type { BlogCategory } from "../../data/blogCategories";
import { CATEGORY_DESCRIPTIONS, UI_STRINGS, type Language } from "../../i18n/translations";

export interface CategoryPostVariant {
  title: string;
  formattedDate: string;
  minutes: number;
}

export interface CategoryPostGroup {
  slug: string;
  variants: Partial<Record<Language, CategoryPostVariant>>;
}

interface CategoryViewProps {
  category: BlogCategory;
  posts: CategoryPostGroup[];
}

const CategoryContent: React.FC<CategoryViewProps> = ({ category, posts }) => {
  const { language } = useLanguage();
  const description = CATEGORY_DESCRIPTIONS[category.id]?.[language] ?? category.description;

  return (
    <ResponsiveLayout>
      {/* H1 stays exactly as before (untranslated) — only the description below it changes with language. */}
      <HeroSection titleStrings={[category.label]} description={description}>
        <BackLink href="/files">&larr; {UI_STRINGS.backToFiles[language]}</BackLink>
        <PostsGrid>
          {posts.length === 0 && (
            <EmptyState>{UI_STRINGS.noPostsYet[language]}</EmptyState>
          )}
          {posts.map((post) => {
            const variant = post.variants[language] ?? post.variants.en ?? Object.values(post.variants)[0];
            if (!variant) return null;

            return (
              <FileIcon
                key={post.slug}
                title={variant.title}
                href={`/files/${category.id}/${post.slug}`}
                colorKey={category.colorKey}
                meta={`${variant.formattedDate} · ${variant.minutes} ${UI_STRINGS.minRead[language]}`}
              />
            );
          })}
        </PostsGrid>
      </HeroSection>
    </ResponsiveLayout>
  );
};

const CategoryView: React.FC<CategoryViewProps> = (props) => {
  return (
    <ThemeWrapper>
      <LanguageWrapper>
        <CategoryContent {...props} />
      </LanguageWrapper>
    </ThemeWrapper>
  );
};

export default CategoryView;
