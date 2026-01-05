
import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

const Project: React.FC = () => {
  const returns = [
    { title: '応援コース', price: '1,000円', desc: '感謝のメッセージをメールにてお届けします。' },
    { title: 'エンドロールにお名前掲載', price: '3,000円', desc: '公開する動画のエンドロールに、サポーターとしてお名前を掲載します。' },
    { title: '撮影現場の風景フォト', price: '5,000円', desc: '機材や風景を切り取った高画質なデジタル写真を数枚セットでお届け。' },
    { title: '限定公開：未編集素材', price: '8,000円', desc: '編集でカットした「美しい一瞬」の映像データを限定公開でお届け。' },
    { title: '撮影設定ガイド', price: '10,000円', desc: '撮影ルートやカメラ設定（F値等）をまとめた技術資料（PDF）をお届け。' },
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-24">
            <span className="text-xs tracking-[0.5em] text-white/40 uppercase block mb-4">Crowdfunding</span>
            <h1 className="text-5xl md:text-7xl font-serif">Project Zenith</h1>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32">
          <ScrollReveal direction="right">
            <div className="space-y-12">
              <h2 className="text-3xl font-serif">We need your support</h2>
              <p className="text-gray-400 font-light leading-relaxed text-lg">
                高品質な映像を撮るための機材は、中学生・高校生には非常に高価なものです。
                自分を映すタレント的な活動ではなく、「純粋に美しい映像作品を作りたい」という職人的な挑戦のために、皆様のお力をお借りしたいと考えました。
              </p>
              <div className="bg-white/5 p-8 rounded-lg border border-white/10">
                 <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-white/60">Current Goal</span>
                    <span className="text-xl font-bold">¥500,000</span>
                 </div>
                 <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-white" />
                 </div>
                 <p className="mt-4 text-sm text-right text-white/40 italic">Coming soon: 2026.03 Kick-off</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={200}>
            <div className="aspect-video rounded-lg overflow-hidden relative group">
              <img 
                src="https://picsum.photos/seed/camera-rig/1200/800" 
                className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                alt="Camera Rig"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-2" />
                 </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <h2 className="text-3xl font-serif mb-12 text-center uppercase tracking-[0.2em]">Returns</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {returns.map((ret, idx) => (
            <ScrollReveal key={idx} delay={idx * 100}>
              <div className="h-full p-10 bg-[#0a0a0a] border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-serif mb-2">{ret.title}</h3>
                  <p className="text-2xl font-light text-white mb-6 tracking-tight">{ret.price}</p>
                  <p className="text-gray-500 font-light text-sm leading-relaxed">{ret.desc}</p>
                </div>
                <button className="mt-10 w-full py-3 border border-white/10 text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all">
                  Support
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
