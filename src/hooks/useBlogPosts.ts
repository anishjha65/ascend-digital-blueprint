
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { Tables } from '@/integrations/supabase/types';

type BlogPost = Tables<'blog_posts'>;
type Category = Tables<'categories'>;

export const useBlogPosts = () => {
  return useQuery({
    queryKey: ['blog-posts'],
    queryFn: async () => {
      console.log('Fetching blog posts...');
      const { data, error } = await supabase
        .from('blog_posts')
        .select(`
          *,
          categories (
            id,
            name,
            slug
          )
        `)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching blog posts:', error);
        throw error;
      }

      console.log('Blog posts fetched:', data);
      return data as (BlogPost & { categories: Category | null })[];
    },
  });
};

export const usePublishedBlogPosts = () => {
  return useQuery({
    queryKey: ['published-blog-posts'],
    queryFn: async () => {
      console.log('Fetching published blog posts...');
      const { data, error } = await supabase
        .from('blog_posts')
        .select(`
          *,
          categories (
            id,
            name,
            slug
          )
        `)
        .eq('published', true)
        .order('published_at', { ascending: false });

      if (error) {
        console.error('Error fetching published blog posts:', error);
        throw error;
      }

      console.log('Published blog posts fetched:', data);
      return data as (BlogPost & { categories: Category | null })[];
    },
  });
};

export const useFeaturedPost = () => {
  return useQuery({
    queryKey: ['featured-post'],
    queryFn: async () => {
      console.log('Fetching featured post...');
      const { data, error } = await supabase
        .from('blog_posts')
        .select(`
          *,
          categories (
            id,
            name,
            slug
          )
        `)
        .eq('published', true)
        .eq('featured', true)
        .order('published_at', { ascending: false })
        .limit(1)
        .maybeSingle();

      if (error) {
        console.error('Error fetching featured post:', error);
        throw error;
      }

      console.log('Featured post fetched:', data);
      return data as (BlogPost & { categories: Category | null }) | null;
    },
  });
};

export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      console.log('Fetching categories...');
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('name');

      if (error) {
        console.error('Error fetching categories:', error);
        throw error;
      }

      console.log('Categories fetched:', data);
      return data as Category[];
    },
  });
};
