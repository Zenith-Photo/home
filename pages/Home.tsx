
import React from 'react';
import { ArrowRight, Play, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import { getPhotosByLocation } from '../services/storage';

// ==========================================
// 【重要】ここにURL化した画像のリンクを貼り付けてください
// ==========================================
const USER_WATERFALL_IMAGE_URL = 'https://images.unsplash.com/photo-1544965850-6f8a66788f9b?auto=format&fit=crop&q=80&w=1920';

const Home: React.FC = () => {
  const heroPhotos = getPhotosByLocation('hero');
  // 管理画面からアップロードされた画像があればそれを使用、なければユーザー指定の滝の画像を使用
  const heroUrl = heroPhotos.length > 0 ? heroPhotos[heroPhotos.length - 1].url : USER_WATERFALL_IMAGE_URL;

  return (
    <div className="relative overflow-hidden bg-[#05070a]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 scale-105 animate-[ken-burns_40s_ease-in-out_infinite]"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(5,7,10,0.2), rgba(5,7,10,0.8)), url('${heroUrl}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <ScrollReveal direction="down" delay={200}>
            <span className="text-xs tracking-[1.2em] text-white/60 mb-10 block uppercase">Captured Silence</span>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <h1 className="text-7xl md:text-[11rem] font-serif font-light mb-12 tracking-tighter leading-none select-none">
              Zenith <span className="italic opacity-70">Photo</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={600}>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-16 font-light leading-relaxed tracking-wide">
              滝の響き、木漏れ日の温度、静止した時間。<br/>
              その場所が持つ「頂点」の輝きを、4K映像で永遠に刻む。
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={800}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
              <Link to="/gallery" className="group relative overflow-hidden bg-white text-black px-12 py-5 rounded-full font-semibold transition-all hover:scale-105 active:scale-95">
                <span className="relative z-10">VIEW ARCHIVE</span>
                <div className="absolute inset-0 bg-gray-100 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              <a href="https://youtube.com/@zenith_jpchannel" target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-3 text-white/70 border border-white/10 px-12 py-5 rounded-full font-semibold hover:bg-white/5 transition-all hover:text-white hover:border-white/30">
                <Play className="w-4 h-4 fill-current transition-transform group-hover:scale-110" />
                <span>YOUTUBE CHANNEL</span>
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* 画面下のスクロールインジケーター */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 opacity-30">
           <span className="text-[9px] tracking-[0.6em] text-white uppercase">Discover</span>
           <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent animate-pulse" />
        </div>
      </section>

      {/* Signature Capture Section - 写真を際立たせるためのセクション */}
      <section className="py-64 bg-black overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.02] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <ScrollReveal direction="right">
              <div className="relative aspect-[3/4] group shadow-2xl">
                <div className="absolute inset-0 border border-white/10 -translate-x-6 translate-y-6 transition-transform group-hover:translate-x-0 group-hover:translate-y-0 duration-1000" />
                <img 
                  src={USER_WATERFALL_IMAGE_URL} 
                  alt="Signature Waterfall" 
                  className="w-full h-full object-cover transition-all duration-1000 relative z-10"
                />
                <div className="absolute bottom-10 -right-10 z-20 hidden md:block">
                  <span className="text-[12rem] font-serif italic text-white/5 select-none leading-none">Nature</span>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="left" delay={300}>
              <div className="space-y-12">
                <div className="flex items-center gap-4 text-white/40">
                  <Camera className="w-5 h-5" />
                  <span className="text-xs tracking-[0.6em] uppercase">Signature Archive</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-serif text-white leading-tight">
                  自然の静寂と<br/>
                  <span className="italic opacity-60 font-light">悠久の美</span>
                </h2>
                <div className="w-20 h-[1px] bg-white/20" />
                <p className="text-gray-400 text-lg font-light leading-relaxed max-w-md">
                  木漏れ日の下、岩肌を滑る水。人工の音が消え、ただ自然の旋律だけが響く場所。
                  Zenith Photoは、こうした一瞬の静寂を、4Kという極めて解像度の高い視覚言語で記録し続けています。
                </p>
                <Link to="/gallery" className="inline-flex items-center text-sm tracking-[0.4em] text-white hover:text-white/60 transition-colors uppercase group">
                  See more captures <ArrowRight className="ml-4 w-4 h-4 transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-64 bg-[#05070a] relative">
        <div className="max-w-4xl mx-auto px-6 text-center mb-48">
          <ScrollReveal>
            <h2 className="text-4xl md:text-7xl font-serif italic text-white/90 leading-tight mb-16">
              「主役はあくまで、その街の歴史、空気、そして風景です。」
            </h2>
            <div className="flex justify-center">
              <div className="w-40 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>
          </ScrollReveal>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
            {[
              { 
                num: '01', 
                title: '純粋な風景美の追求', 
                desc: '環境音と映像だけで魅せるシネマティックなスタイル。主観性を極限まで排し、街そのものの呼吸を記録します。' 
              },
              { 
                num: '02', 
                title: '4K高品質アーカイブ', 
                desc: '今しか見られない移ろいゆく街の風景を、最高画質で記録。後世に伝える文化的価値を追求します。' 
              },
              { 
                num: '03', 
                title: '技術への徹底したこだわり', 
                desc: '独学のジンバルワークとカラーグレーディング。高校生という枠を超え、プロフェッショナルな品質を。' 
              }
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 200} direction="up">
                <div className="space-y-10 group">
                  <div className="text-[10px] tracking-[0.6em] text-white/20 font-serif group-hover:text-white/50 transition-colors uppercase">Section {item.num}</div>
                  <h3 className="text-3xl font-serif tracking-wide text-white/90">{item.title}</h3>
                  <div className="w-16 h-[1px] bg-white/10 group-hover:w-full transition-all duration-1000" />
                  <p className="text-gray-500 leading-relaxed font-light text-lg group-hover:text-gray-400 transition-colors">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Overlay */}
      <section className="h-screen relative flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0 bg-fixed brightness-[0.4] grayscale"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=1920')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 text-center px-6">
          <ScrollReveal>
            <span className="text-[10px] tracking-[1.5em] text-white/40 block mb-12 uppercase">The Vision</span>
            <h2 className="text-6xl md:text-[10rem] font-serif text-white/90 select-none">Beyond the <span className="italic">Lens</span></h2>
          </ScrollReveal>
        </div>
      </section>
      
      <style>{`
        @keyframes ken-burns {
          0% { transform: scale(1) translate(0, 0); }
          50% { transform: scale(1.15) translate(-1%, 1%); }
          100% { transform: scale(1) translate(0, 0); }
        }
      `}</style>
    </div>
  );
};

export default Home;
