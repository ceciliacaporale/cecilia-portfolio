import React from "react";
import HeroSection from "../../components/HeroSection";
import ResponsiveLayout from "../ResponsiveLayout";
import FileIcon from "../../components/FileIcon";
import { BackLink, PostsGrid, EmptyState } from "./CategoryView.styles";
import ThemeWrapper from "../../ThemeWrapper";
import type { BlogCategory } from "../../data/blogCategories";

export interface CategoryPostSummary {
  slug: string;
  title: string;
  formattedDate: string;
  minutes: number;
}

interface CategoryViewProps {
  category: BlogCategory;
  posts: CategoryPostSummary[];
}

const CategoryView: React.FC<CategoryViewProps> = ({ category, posts }) => {
  return (
    <ThemeWrapper>
      <ResponsiveLayout>
        <HeroSection
          titleStrings={[category.label]}
          description={category.description}
        >
          <BackLink href="/files">&larr; Back to Files</BackLink>
          <PostsGrid>
            {posts.length === 0 && (
              <EmptyState>No posts here yet, check back soon.</EmptyState>
            )}
            {posts.map((post) => (
              <FileIcon
                key={post.slug}
                title={post.title}
                href={`/files/${category.id}/${post.slug}`}
                colorKey={category.colorKey}
                meta={`${post.formattedDate} · ${post.minutes} min read`}
              />
            ))}
          </PostsGrid>
        </HeroSection>
      </ResponsiveLayout>
    </ThemeWrapper>
  );
};

export default CategoryView;
