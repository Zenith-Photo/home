
import React from 'react';
import { Upload, Trash2, Layout, Image as ImageIcon, CheckCircle } from 'lucide-react';
import { PhotoLocation, Photo } from '../types';
import { savePhoto, getPhotos, deletePhoto } from '../services/storage';
import ScrollReveal from '../components/ScrollReveal';

const AdminDashboard: React.FC = () => {
  const [photos, setPhotos] = React.useState<Photo[]>([]);
  const [title, setTitle] = React.useState('');
  const [url, setUrl] = React.useState('');
  const [location, setLocation] = React.useState<PhotoLocation>('gallery');
  const [isSuccess, setIsSuccess] = React.useState(false);

  React.useEffect(() => {
    setPhotos(getPhotos());
  }, []);

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    const newPhoto: Photo = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      url,
      location,
      timestamp: Date.now(),
    };
    savePhoto(newPhoto);
    setPhotos(getPhotos());
    setTitle('');
    setUrl('');
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 3000);
  };

  const handleDelete = (id: string) => {
    deletePhoto(id);
    setPhotos(getPhotos());
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
            <div>
              <span className="text-xs tracking-[0.5em] text-white/40 uppercase block mb-4">Admin Dashboard</span>
              <h1 className="text-4xl font-serif">Manage Content</h1>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Upload Form */}
          <ScrollReveal direction="right" className="lg:col-span-1">
            <div className="bg-[#0a0a0a] p-8 border border-white/5 rounded-lg sticky top-32">
              <h2 className="text-xl font-serif mb-8 flex items-center gap-3">
                <Upload className="w-5 h-5" />
                <span>Upload New Asset</span>
              </h2>

              <form onSubmit={handleUpload} className="space-y-6">
                {isSuccess && (
                  <div className="flex items-center gap-2 text-green-400 bg-green-400/10 p-4 rounded-sm border border-green-400/20 animate-in fade-in">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Success! Image archived.</span>
                  </div>
                )}

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500">Asset Title</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full bg-black border border-white/10 rounded-sm p-4 text-white focus:outline-none focus:border-white/40"
                    placeholder="e.g. Kyoto Sunset"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500">Image URL</label>
                  <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="w-full bg-black border border-white/10 rounded-sm p-4 text-white focus:outline-none focus:border-white/40"
                    placeholder="https://images..."
                    required
                  />
                  <p className="text-[10px] text-gray-600 mt-1 italic">Use a high-quality direct image link (JPEG/PNG/WebP)</p>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500">Placement</label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value as PhotoLocation)}
                    className="w-full bg-black border border-white/10 rounded-sm p-4 text-white focus:outline-none focus:border-white/40"
                  >
                    <option value="gallery">Main Gallery</option>
                    <option value="hero">Hero Background</option>
                    <option value="background">Section Background</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-black py-4 font-bold tracking-widest uppercase hover:bg-gray-200 transition-all rounded-sm"
                >
                  Confirm Upload
                </button>
              </form>
            </div>
          </ScrollReveal>

          {/* Asset List */}
          <div className="lg:col-span-2 space-y-8">
            <ScrollReveal direction="left" delay={200}>
              <div className="bg-[#0a0a0a] border border-white/5 rounded-lg overflow-hidden">
                <div className="p-6 border-b border-white/5 flex items-center justify-between">
                  <h2 className="font-serif text-lg">Current Archives</h2>
                  <span className="text-xs text-gray-500 uppercase tracking-widest">{photos.length} total</span>
                </div>

                <div className="divide-y divide-white/5">
                  {photos.length === 0 ? (
                    <div className="p-12 text-center">
                      <ImageIcon className="w-12 h-12 text-gray-800 mx-auto mb-4" />
                      <p className="text-gray-500">No custom photos uploaded yet.</p>
                    </div>
                  ) : (
                    photos.map((photo) => (
                      <div key={photo.id} className="p-6 flex items-center gap-6 group hover:bg-white/5 transition-colors">
                        <div className="w-20 h-20 bg-zinc-900 rounded-sm overflow-hidden flex-shrink-0">
                          <img src={photo.url} className="w-full h-full object-cover" alt="" />
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-medium text-white">{photo.title}</h4>
                          <div className="flex items-center gap-4 mt-2">
                            <span className="flex items-center gap-1 text-[10px] uppercase tracking-widest text-gray-500">
                              <Layout className="w-3 h-3" /> {photo.location}
                            </span>
                            <span className="text-[10px] uppercase tracking-widest text-gray-500">
                              {new Date(photo.timestamp).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => handleDelete(photo.id)}
                          className="p-3 text-gray-600 hover:text-red-400 hover:bg-red-400/10 rounded-full transition-all"
                          title="Delete"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
