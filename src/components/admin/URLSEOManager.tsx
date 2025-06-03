import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Edit, Trash2, Globe } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Switch } from '@/components/ui/switch';

const URLSEOManager = () => {
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingURL, setEditingURL] = useState<any>(null);
  const [formData, setFormData] = useState({
    url_path: '',
    page_title: '',
    meta_description: '',
    meta_keywords: '',
    og_title: '',
    og_description: '',
    og_image_url: '',
    og_image_alt: '',
    twitter_title: '',
    twitter_description: '',
    twitter_image_url: '',
    schema_markup: '',
    is_active: true
  });

  const { data: urlSEOData, refetch } = useQuery({
    queryKey: ['url-seo-settings'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('url_seo_settings')
        .select('*')
        .order('url_path');

      if (error) throw error;
      return data;
    },
  });

  const resetForm = () => {
    setFormData({
      url_path: '',
      page_title: '',
      meta_description: '',
      meta_keywords: '',
      og_title: '',
      og_description: '',
      og_image_url: '',
      og_image_alt: '',
      twitter_title: '',
      twitter_description: '',
      twitter_image_url: '',
      schema_markup: '',
      is_active: true
    });
    setEditingURL(null);
  };

  const openCreateDialog = () => {
    resetForm();
    setIsDialogOpen(true);
  };

  const openEditDialog = (urlSEO: any) => {
    setEditingURL(urlSEO);
    setFormData({
      url_path: urlSEO.url_path || '',
      page_title: urlSEO.page_title || '',
      meta_description: urlSEO.meta_description || '',
      meta_keywords: urlSEO.meta_keywords || '',
      og_title: urlSEO.og_title || '',
      og_description: urlSEO.og_description || '',
      og_image_url: urlSEO.og_image_url || '',
      og_image_alt: urlSEO.og_image_alt || '',
      twitter_title: urlSEO.twitter_title || '',
      twitter_description: urlSEO.twitter_description || '',
      twitter_image_url: urlSEO.twitter_image_url || '',
      schema_markup: urlSEO.schema_markup ? JSON.stringify(urlSEO.schema_markup, null, 2) : '',
      is_active: urlSEO.is_active ?? true
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const urlSEOData = {
      ...formData,
      schema_markup: formData.schema_markup ? JSON.parse(formData.schema_markup) : null,
    };

    try {
      if (editingURL) {
        const { error } = await supabase
          .from('url_seo_settings')
          .update(urlSEOData)
          .eq('id', editingURL.id);
        
        if (error) throw error;
        toast({ title: 'URL SEO settings updated successfully!' });
      } else {
        const { error } = await supabase
          .from('url_seo_settings')
          .insert([urlSEOData]);
        
        if (error) throw error;
        toast({ title: 'URL SEO settings created successfully!' });
      }
      
      refetch();
      setIsDialogOpen(false);
      resetForm();
    } catch (error: any) {
      toast({ 
        title: 'Error saving URL SEO settings', 
        description: error.message,
        variant: 'destructive'
      });
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete these URL SEO settings?')) return;
    
    try {
      const { error } = await supabase
        .from('url_seo_settings')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      toast({ title: 'URL SEO settings deleted successfully!' });
      refetch();
    } catch (error: any) {
      toast({ 
        title: 'Error deleting URL SEO settings', 
        description: error.message,
        variant: 'destructive'
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">URL-Specific SEO Management</h3>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openCreateDialog} className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Add URL SEO
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingURL ? 'Edit URL SEO Settings' : 'Create URL SEO Settings'}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="url_path">URL Path *</Label>
                  <Input
                    id="url_path"
                    value={formData.url_path}
                    onChange={(e) => setFormData({ ...formData, url_path: e.target.value })}
                    placeholder="/about, /services, etc."
                    required
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Basic Meta Tags</h4>
                <div>
                  <Label htmlFor="page_title">Page Title *</Label>
                  <Input
                    id="page_title"
                    value={formData.page_title}
                    onChange={(e) => setFormData({ ...formData, page_title: e.target.value })}
                    placeholder="Page Title (50-60 characters)"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="meta_description">Meta Description *</Label>
                  <Textarea
                    id="meta_description"
                    value={formData.meta_description}
                    onChange={(e) => setFormData({ ...formData, meta_description: e.target.value })}
                    placeholder="Meta description (150-160 characters)"
                    rows={3}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="meta_keywords">Meta Keywords</Label>
                  <Input
                    id="meta_keywords"
                    value={formData.meta_keywords}
                    onChange={(e) => setFormData({ ...formData, meta_keywords: e.target.value })}
                    placeholder="keyword1, keyword2, keyword3"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Open Graph (Facebook)</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="og_title">OG Title</Label>
                    <Input
                      id="og_title"
                      value={formData.og_title}
                      onChange={(e) => setFormData({ ...formData, og_title: e.target.value })}
                      placeholder="Open Graph title"
                    />
                  </div>
                  <div>
                    <Label htmlFor="og_image_url">OG Image URL</Label>
                    <Input
                      id="og_image_url"
                      value={formData.og_image_url}
                      onChange={(e) => setFormData({ ...formData, og_image_url: e.target.value })}
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="og_description">OG Description</Label>
                  <Textarea
                    id="og_description"
                    value={formData.og_description}
                    onChange={(e) => setFormData({ ...formData, og_description: e.target.value })}
                    placeholder="Open Graph description"
                    rows={3}
                  />
                </div>
                <div>
                  <Label htmlFor="og_image_alt">OG Image Alt Text</Label>
                  <Input
                    id="og_image_alt"
                    value={formData.og_image_alt}
                    onChange={(e) => setFormData({ ...formData, og_image_alt: e.target.value })}
                    placeholder="Alt text for Open Graph image"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Twitter Cards</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="twitter_title">Twitter Title</Label>
                    <Input
                      id="twitter_title"
                      value={formData.twitter_title}
                      onChange={(e) => setFormData({ ...formData, twitter_title: e.target.value })}
                      placeholder="Twitter card title"
                    />
                  </div>
                  <div>
                    <Label htmlFor="twitter_image_url">Twitter Image URL</Label>
                    <Input
                      id="twitter_image_url"
                      value={formData.twitter_image_url}
                      onChange={(e) => setFormData({ ...formData, twitter_image_url: e.target.value })}
                      placeholder="https://example.com/twitter-image.jpg"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="twitter_description">Twitter Description</Label>
                  <Textarea
                    id="twitter_description"
                    value={formData.twitter_description}
                    onChange={(e) => setFormData({ ...formData, twitter_description: e.target.value })}
                    placeholder="Twitter card description"
                    rows={3}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Schema Markup (JSON-LD)</h4>
                <div>
                  <Label htmlFor="schema_markup">Schema Markup</Label>
                  <Textarea
                    id="schema_markup"
                    value={formData.schema_markup}
                    onChange={(e) => setFormData({ ...formData, schema_markup: e.target.value })}
                    placeholder='{"@context": "https://schema.org", "@type": "WebPage", "name": "Page Name"}'
                    rows={6}
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="is_active"
                  checked={formData.is_active}
                  onCheckedChange={(checked) => setFormData({ ...formData, is_active: checked })}
                />
                <Label htmlFor="is_active">Active</Label>
              </div>

              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">
                  {editingURL ? 'Update' : 'Create'} URL SEO
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>URL Path</TableHead>
              <TableHead>Page Title</TableHead>
              <TableHead>Meta Description</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {urlSEOData?.map((urlSEO) => (
              <TableRow key={urlSEO.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-gray-500" />
                    <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                      {urlSEO.url_path}
                    </code>
                  </div>
                </TableCell>
                <TableCell className="max-w-[200px] truncate">
                  {urlSEO.page_title}
                </TableCell>
                <TableCell className="max-w-[300px] truncate">
                  {urlSEO.meta_description}
                </TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded text-xs ${
                    urlSEO.is_active 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {urlSEO.is_active ? 'Active' : 'Inactive'}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openEditDialog(urlSEO)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(urlSEO.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default URLSEOManager;
