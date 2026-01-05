import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { getPhotosByLocation } from '../services/storage';
import { Photo } from '../types';
import { X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [photos, setPhotos] = React.useState<Photo[]>([]);
  const [selectedPhoto, setSelectedPhoto] = React.useState<Photo | null>(null);

  React.useEffect(() => {
    const uploaded = getPhotosByLocation('gallery');
    const placeholders: Photo[] = [
      { id: 'p-1', url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=800', title: 'Tokyo Night', location: 'gallery', timestamp: Date.now() },
      { id: 'p-2', url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800', title: 'Kyoto Temple', location: 'gallery', timestamp: Date.now() },
      { id: 'p-3', url: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&q=80&w=800', title: 'Shibuya Crossing', location: 'gallery', timestamp: Date.now() },
      { id: 'p-4', url: 'https://images.unsplash.com/photo-1524413139048-47c45b4cdd0e?auto=format&fit=crop&q=80&w=800', title: 'Osaka Street', location: 'gallery', timestamp: Date.now() },
      { id: 'p-5', url: 'https://images.unsplash.com/photo-1490806678282-2a4d25dc9107?auto=format&fit=crop&q=80&w=800', title: 'Mount Fuji View', location: 'gallery', timestamp: Date.now() },
      { id: 'p-6', url: 'https://images.unsplash.com/photo-1528164344705-47542687990d?auto=format&fit=crop&q=80&w=800', title: 'Nara Park', location: 'gallery', timestamp: Date.now() },
    ];
    setPhotos([...uploaded, ...placeholders]);
  }, []);

  const handleOpenLightbox = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-32">
            <span className="text-xs tracking-[0.6em] text-white/40 uppercase block mb-6">Archive Selection</span>
            <h1 className="text-6xl md:text-[6rem] font-serif tracking-tight leading-none mb-4">Gallery</h1>
            <p className="text-white/30 text-sm tracking-widest uppercase">Capturing the soul of Japan</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {photos.map((photo, index) => (
            <ScrollReveal key={photo.id} delay={(index % 3) * 150} direction="up">
              <div 
                className="group relative aspect-[4/5] overflow-hidden cursor-pointer bg-zinc-900 shadow-xl"
                onClick={() => handleOpenLightbox(photo)}
              >
                <img 
                  src={photo.url} 
                  alt={photo.title}
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-10">
                   <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                     <p className="text-[10px] tracking-[0.4em] text-white/50 mb-3 uppercase">{new Date(photo.timestamp).toLocaleDateString()}</p>
                     <h3 className="text-2xl font-serif text-white">{photo.title}</h3>
                     <div className="w-0 h-[1px] bg-white/40 mt-4 group-hover:w-full transition-all duration-700 delay-200" />
                   </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-[100] bg-black/98 flex flex-col items-center justify-center p-8 cursor-default animate-in fade-in duration-700"
        >
          <button 
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-10 right-10 text-white/40 hover:text-white transition-colors z-50 p-2"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative max-w-5xl w-full flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-2/3 aspect-[4/5] md:aspect-auto md:h-[80vh] overflow-hidden">
              <img 
                src={selectedPhoto.url} 
                className="w-full h-full object-contain shadow-2xl animate-in zoom-in duration-700"
                alt={selectedPhoto.title}
              />
            </div>
            
            <div className="w-full md:w-1/3 text-left space-y-8 animate-in slide-in-from-right-10 duration-700 delay-300">
              <div>
                <span className="text-xs tracking-[0.5em] text-white/40 uppercase block mb-4">Cinematic Log</span>
                <h2 className="text-4xl font-serif text-white mb-2">{selectedPhoto.title}</h2>
                <p className="text-white/20 text-xs tracking-widest uppercase">{new Date(selectedPhoto.timestamp).toDateString()}</p>
              </div>

              <div className="pt-8 border-t border-white/10">
                <p className="text-gray-400 font-light leading-relaxed">
                  静寂の中に、その場所だけの時間が流れている。
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;