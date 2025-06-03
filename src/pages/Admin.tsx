import SEOHead from '@/components/SEOHead';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BlogPostsManager from '@/components/admin/BlogPostsManager';
import CategoriesManager from '@/components/admin/CategoriesManager';
import URLSEOManager from '@/components/admin/URLSEOManager';
import ContactSubmissionsManager from '@/components/admin/ContactSubmissionsManager';
import TestimonialsManager from '@/components/admin/TestimonialsManager';
import { FileText, FolderOpen, Globe, Mail, Star, Briefcase } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Admin = () => {
  const { user } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8">
      <SEOHead 
        title="Admin Dashboard"
        description="Content management system for Click Katha website"
      />
      
      <div className="flex flex-col items-center mb-8">
        <img src="/logo.png" alt="Click Katha Logo" className="h-16 w-16 mb-4" />
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">
          Welcome back, {user?.email}! Manage your website content, blog posts, and SEO settings
        </p>
      </div>

      <div className="flex justify-end mb-6">
        <Link to="/admin/portfolio">
          <Button className="flex items-center gap-2">
            <Briefcase className="h-4 w-4" />
            Manage Portfolio
          </Button>
        </Link>
      </div>

      <Tabs defaultValue="posts" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="posts" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Blog Posts
          </TabsTrigger>
          <TabsTrigger value="categories" className="flex items-center gap-2">
            <FolderOpen className="h-4 w-4" />
            Categories
          </TabsTrigger>
          <TabsTrigger value="url-seo" className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            URL SEO
          </TabsTrigger>
          <TabsTrigger value="contact" className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            Contact Forms
          </TabsTrigger>
          <TabsTrigger value="testimonials" className="flex items-center gap-2">
            <Star className="h-4 w-4" />
            Testimonials
          </TabsTrigger>
        </TabsList>

        <TabsContent value="posts">
          <Card>
            <CardHeader>
              <CardTitle>Blog Posts Management</CardTitle>
              <CardDescription>
                Create, edit, and manage your blog posts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <BlogPostsManager />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="categories">
          <Card>
            <CardHeader>
              <CardTitle>Categories Management</CardTitle>
              <CardDescription>
                Organize your blog posts with categories
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CategoriesManager />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="url-seo">
          <Card>
            <CardHeader>
              <CardTitle>URL SEO Management</CardTitle>
              <CardDescription>
                Manage SEO settings for specific URLs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <URLSEOManager />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact">
          <Card>
            <CardHeader>
              <CardTitle>Contact Form Submissions</CardTitle>
              <CardDescription>
                View and manage contact form submissions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactSubmissionsManager />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="testimonials">
          <Card>
            <CardHeader>
              <CardTitle>Testimonials Management</CardTitle>
              <CardDescription>
                Add, edit, and manage client testimonials
              </CardDescription>
            </CardHeader>
            <CardContent>
              <TestimonialsManager />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Admin;
