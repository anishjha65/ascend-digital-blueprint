import { useState, useEffect } from 'react';
import { supabase } from '../../integrations/supabase/client';
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Card } from "../../components/ui/card";
import { toast } from 'sonner';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Upload, X, Pencil } from 'lucide-react';
import type { Database } from '../../integrations/supabase/types';
import ImageUpload from '../../components/admin/ImageUpload';

type PortfolioItem = Database['public']['Tables']['portfolio_items']['Row'];

export default function PortfolioManager() {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [newItem, setNewItem] = useState<Omit<PortfolioItem, 'id' | 'created_at' | 'updated_at'>>({
    title: '',
    description: '',
    image_url: '',
    live_url: '',
    technologies: [],
  });
  const [techInput, setTechInput] = useState('');
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [imageAlt, setImageAlt] = useState('');

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const { data, error } = await supabase
        .from('portfolio_items')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setItems(data || []);
    } catch (error) {
      toast.error('Failed to fetch portfolio items');
    } finally {
      setLoading(false);
    }
  };

  const handleAddTechnology = () => {
    if (techInput.trim()) {
      setNewItem(prev => ({
        ...prev,
        technologies: [...prev.technologies, techInput.trim()]
      }));
      setTechInput('');
    }
  };

  const handleRemoveTechnology = (index: number) => {
    setNewItem(prev => ({
      ...prev,
      technologies: prev.technologies.filter((_, i) => i !== index)
    }));
  };

  const handleImageUploaded = (url: string, altText: string) => {
    setNewItem(prev => ({ ...prev, image_url: url }));
    setImageAlt(altText);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingId) {
        const { error } = await supabase
          .from('portfolio_items')
          .update(newItem)
          .eq('id', editingId);

        if (error) throw error;
        toast.success('Portfolio item updated successfully');
      } else {
        const { error } = await supabase
          .from('portfolio_items')
          .insert([newItem]);

        if (error) throw error;
        toast.success('Portfolio item added successfully');
      }

      resetForm();
      fetchItems();
    } catch (error) {
      toast.error(editingId ? 'Failed to update portfolio item' : 'Failed to add portfolio item');
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const { error } = await supabase
        .from('portfolio_items')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast.success('Portfolio item deleted successfully');
      fetchItems();
    } catch (error) {
      toast.error('Failed to delete portfolio item');
    }
  };

  const handleEdit = (item: PortfolioItem) => {
    setEditingId(item.id);
    setNewItem({
      title: item.title,
      description: item.description,
      image_url: item.image_url,
      live_url: item.live_url,
      technologies: item.technologies,
    });
    setImageAlt(item.title);
  };

  const resetForm = () => {
    setEditingId(null);
    setNewItem({
      title: '',
      description: '',
      image_url: '',
      live_url: '',
      technologies: [],
    });
    setImageAlt('');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Portfolio Manager</h1>

        <Card className="p-6 mb-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">
                {editingId ? 'Edit Portfolio Item' : 'Add New Portfolio Item'}
              </h2>
              {editingId && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={resetForm}
                >
                  Cancel Edit
                </Button>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Title</label>
              <Input
                value={newItem.title}
                onChange={(e) => setNewItem(prev => ({ ...prev, title: e.target.value }))}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Description</label>
              <div className="border rounded-md">
                <CKEditor
                  editor={ClassicEditor as any}
                  data={newItem.description}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setNewItem(prev => ({ ...prev, description: data }));
                  }}
                  config={{
                    toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', '|', 'undo', 'redo'],
                  }}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Project Image</label>
              <ImageUpload
                onImageUploaded={handleImageUploaded}
                existingImageUrl={newItem.image_url}
                existingAltText={imageAlt}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Live URL</label>
              <Input
                value={newItem.live_url}
                onChange={(e) => setNewItem(prev => ({ ...prev, live_url: e.target.value }))}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Technologies</label>
              <div className="flex gap-2 mb-2">
                <Input
                  value={techInput}
                  onChange={(e) => setTechInput(e.target.value)}
                  placeholder="Add technology"
                />
                <Button type="button" onClick={handleAddTechnology}>
                  Add
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {newItem.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm flex items-center gap-2"
                  >
                    {tech}
                    <button
                      type="button"
                      onClick={() => handleRemoveTechnology(index)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={uploading}>
              {uploading ? 'Uploading...' : editingId ? 'Update Portfolio Item' : 'Add Portfolio Item'}
            </Button>
          </form>
        </Card>

        <div className="space-y-4">
          {items.map((item) => (
            <Card key={item.id} className="p-4">
              <div className="flex justify-between items-start">
                <div className="flex gap-4">
                  <div className="w-32 h-32 flex-shrink-0">
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-md"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://placehold.co/600x400/1a1a1a/ffffff?text=No+Image';
                        target.onerror = null;
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <div 
                      className="text-sm text-gray-600 mt-2"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                    <div className="flex flex-wrap gap-2 mt-2">
                      {item.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-200 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEdit(item)}
                  >
                    <Pencil className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 