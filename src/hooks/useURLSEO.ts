
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useLocation } from 'react-router-dom';
import type { Tables } from '@/integrations/supabase/types';

type URLSEOSettings = Tables<'url_seo_settings'>;

export const useURLSEO = () => {
  const location = useLocation();
  
  return useQuery({
    queryKey: ['url-seo', location.pathname],
    queryFn: async () => {
      console.log('Fetching URL-specific SEO for:', location.pathname);
      const { data, error } = await supabase
        .from('url_seo_settings')
        .select('*')
        .eq('url_path', location.pathname)
        .eq('is_active', true)
        .maybeSingle();

      if (error) {
        console.error('Error fetching URL SEO:', error);
        throw error;
      }

      console.log('URL SEO data:', data);
      return data as URLSEOSettings | null;
    },
  });
};
