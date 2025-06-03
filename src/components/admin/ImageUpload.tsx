import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ImageUploadProps {
  onImageUploaded: (url: string, altText: string) => void;
  existingImageUrl?: string;
  existingAltText?: string;
}

const ImageUpload = ({ onImageUploaded, existingImageUrl, existingAltText }: ImageUploadProps) => {
  const [imageUrl, setImageUrl] = useState(existingImageUrl || '');
  const [altText, setAltText] = useState(existingAltText || '');
  const { toast } = useToast();

  const handleSaveImage = () => {
    if (imageUrl && altText) {
      if (!imageUrl.startsWith('http')) {
        toast({ 
          title: 'Invalid Image URL',
          description: 'Please enter a valid URL starting with http:// or https://',
          variant: 'destructive'
        });
        return;
      }
      onImageUploaded(imageUrl, altText);
      toast({ title: 'Image added successfully!' });
    } else {
      toast({ 
        title: 'Please provide both image URL and alt text',
        variant: 'destructive'
      });
    }
  };

  const clearImage = () => {
    setImageUrl('');
    setAltText('');
  };

  return (
    <div className="space-y-4 p-4 border rounded-lg">
      <h4 className="font-semibold">Image Details</h4>
      
      <div className="space-y-2">
        <div>
          <Label htmlFor="image-url">Image URL</Label>
          <Input
            id="image-url"
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Enter image URL"
          />
        </div>

        <div>
          <Label htmlFor="alt-text">Alt Text</Label>
          <Input
            id="alt-text"
            value={altText}
            onChange={(e) => setAltText(e.target.value)}
            placeholder="Describe the image for accessibility"
          />
        </div>
      </div>

      {imageUrl && (
        <div className="space-y-2">
          <div className="relative">
            <img 
              src={imageUrl} 
              alt={altText || 'Preview'} 
              className="w-full h-48 object-cover rounded-lg"
            />
            <Button
              variant="destructive"
              size="sm"
              onClick={clearImage}
              className="absolute top-2 right-2"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <Button onClick={handleSaveImage} className="w-full">
            Save Image
          </Button>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
