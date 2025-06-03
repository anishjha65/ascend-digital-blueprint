import SEOHead from '@/components/SEOHead';
import { usePublishedBlogPosts, useFeaturedPost, useCategories } from '@/hooks/useBlogPosts';
import { useState } from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

const Blog = () => {
  const { data: blogPosts, isLoading: postsLoading } = usePublishedBlogPosts();
  const { data: featuredPost, isLoading: featuredLoading } = useFeaturedPost();
  const { data: categories, isLoading: categoriesLoading } = useCategories();
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter posts based on selected category
  const filteredPosts = blogPosts?.filter(post => 
    selectedCategory === 'All' || post.categories?.name === selectedCategory
  ) || [];

  // Generate schema markup for the blog page
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Click Katha Blog",
    "description": "Every Click Has Its Own Story",
    "url": `${window.location.origin}/blog`,
    "publisher": {
      "@type": "Organization",
      "name": "Click Katha",
      "logo": {
        "@type": "ImageObject",
        "url": `${window.location.origin}/favicon.ico`
      }
    }
  };

  if (postsLoading || featuredLoading || categoriesLoading) {
    return (
      <div className="py-20">
        <SEOHead 
          title="Blog"
          schemaMarkup={blogSchema}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading blog posts...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      <SEOHead 
        title="Blog"
        schemaMarkup={blogSchema}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every Click Has Its Own Story
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-6 py-2 rounded-full border transition-colors ${
              selectedCategory === 'All'
                ? 'border-blue-600 text-blue-600 bg-blue-50'
                : 'border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600'
            }`}
          >
            All
          </button>
          {categories?.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-6 py-2 rounded-full border transition-colors ${
                selectedCategory === category.name
                  ? 'border-blue-600 text-blue-600 bg-blue-50'
                  : 'border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {featuredPost && selectedCategory === 'All' && (
          <div className="mb-16">
            <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  {featuredPost.featured_image_url && (
                    <div className="text-6xl mb-4">
                      <img 
                        src={featuredPost.featured_image_url} 
                        alt={featuredPost.title}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                    </div>
                  )}
                  <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                    Featured Post
                  </span>
                  <h2 className="text-3xl font-bold mb-4">{featuredPost.title}</h2>
                  <p className="text-blue-100 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center text-blue-100 text-sm">
                    <span>{featuredPost.author_name}</span>
                    <span className="mx-2">•</span>
                    <span>{featuredPost.published_at ? format(new Date(featuredPost.published_at), 'MMM d, yyyy') : 'Recently'}</span>
                    <span className="mx-2">•</span>
                    <span>{featuredPost.read_time_minutes} min read</span>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all">
                    Read Article
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  {post.featured_image_url && (
                    <div className="mb-4">
                      <img 
                        src={post.featured_image_url} 
                        alt={post.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                  )}
                  <div className="flex items-center justify-between mb-4">
                    {post.categories && (
                      <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                        {post.categories.name}
                      </span>
                    )}
                    <span className="text-sm text-gray-500">{post.read_time_minutes} min read</span>
                  </div>
                  <Link to={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 mb-4">{post.excerpt.length > 150 ? post.excerpt.slice(0, 150) + '...' : post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <div>{post.author_name}</div>
                      <div>{post.published_at ? format(new Date(post.published_at), 'MMM d, yyyy') : 'Recently'}</div>
                    </div>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No blog posts found for the selected category.</p>
            <p className="text-gray-400 mt-2">Check back soon for new content!</p>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-20 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
          <p className="text-gray-600 mb-6">Get the latest digital marketing insights delivered to your inbox</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
