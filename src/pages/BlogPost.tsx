import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { format } from 'date-fns';
import SEOHead from '@/components/SEOHead';
import { Facebook, Twitter, Linkedin, Link2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const BlogPost = () => {
  const { slug } = useParams();
  const { toast } = useToast();

  const { data: post, isLoading } = useQuery({
    queryKey: ['blog-post', slug],
    queryFn: async () => {
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
        .eq('slug', slug)
        .eq('published', true)
        .single();

      if (error) throw error;
      return data;
    },
  });

  const { data: latestPosts } = useQuery({
    queryKey: ['latest-blogs'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('id, title, slug, published_at, featured_image_url')
        .eq('published', true)
        .order('published_at', { ascending: false })
        .limit(5);
      if (error) throw error;
      return data;
    },
  });

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = post?.title || '';
    let shareUrl = '';

    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        toast({ title: 'Link copied to clipboard!' });
        return;
    }

    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  if (isLoading) {
    return (
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading blog post...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Post Not Found</h1>
            <p className="text-gray-600">The blog post you're looking for doesn't exist or has been removed.</p>
          </div>
        </div>
      </div>
    );
  }

  // Generate schema markup for the blog post
  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.featured_image_url,
    "author": {
      "@type": "Person",
      "name": post.author_name
    },
    "publisher": {
      "@type": "Organization",
      "name": "Click Katha",
      "logo": {
        "@type": "ImageObject",
        "url": `${window.location.origin}/favicon.ico`
      }
    },
    "datePublished": post.published_at,
    "dateModified": post.updated_at,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": window.location.href
    }
  };

  return (
    <div className="py-20">
      <SEOHead 
        title={post.title}
        schemaMarkup={blogPostSchema}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12">
        <article className="flex-1 max-w-4xl mx-auto lg:mx-0">
          {/* Header */}
          <header className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              {post.categories && (
                <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
                  {post.categories.name}
                </span>
              )}
              <span className="text-gray-500">
                {post.published_at ? format(new Date(post.published_at), 'MMMM d, yyyy') : 'Recently'}
              </span>
              <span className="text-gray-500">{post.read_time_minutes} min read</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 mb-6">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-center gap-4">
              <div className="text-gray-600">
                By {post.author_name}
              </div>
            </div>
          </header>

          {/* Featured Image */}
          {post.featured_image_url && (
            <div className="mb-12">
              <img 
                src={post.featured_image_url} 
                alt={post.title}
                title={post.title}
                className="w-full h-[400px] object-cover rounded-2xl"
              />
            </div>
          )}

          {/* Content */}
          <div 
            className="prose prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Social Share */}
          <div className="border-t border-gray-200 pt-8">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Share this article</h3>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleShare('facebook')}
                  className="hover:bg-blue-50 hover:text-blue-600"
                >
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleShare('twitter')}
                  className="hover:bg-blue-50 hover:text-blue-600"
                >
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleShare('linkedin')}
                  className="hover:bg-blue-50 hover:text-blue-600"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleShare('copy')}
                  className="hover:bg-blue-50 hover:text-blue-600"
                >
                  <Link2 className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </article>
        {/* Sidebar: Latest Blogs */}
        <aside className="w-full lg:w-80 flex-shrink-0">
          <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6 mb-8">
            <h3 className="text-xl font-bold mb-4 text-blue-700">Latest Blogs</h3>
            <ul className="space-y-4">
              {latestPosts?.map((item) => (
                <li key={item.id} className="flex items-center gap-3">
                  {item.featured_image_url && (
                    <img
                      src={item.featured_image_url}
                      alt={item.title}
                      className="w-14 h-14 object-cover rounded-lg border border-gray-200 shadow-sm"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/blog/${item.slug}`}
                      className="block font-medium text-gray-900 hover:text-blue-600 transition-colors"
                    >
                      {item.title}
                    </Link>
                    <div className="text-xs text-gray-500 mt-1">
                      {item.published_at ? format(new Date(item.published_at), 'MMM d, yyyy') : 'Recently'}
                    </div>
                  </div>
                </li>
              ))}
              {!latestPosts && (
                <li className="text-gray-400">No recent blogs.</li>
              )}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogPost; 