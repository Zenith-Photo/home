
import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-20">
            <span className="text-xs tracking-[0.5em] text-white/40 uppercase block mb-4">The Creator</span>
            <h1 className="text-5xl md:text-8xl font-serif mb-8">Profile & Vision</h1>
            <div className="w-20 h-[1px] bg-white/20" />
          </div>
        </ScrollReveal>

        <div className="space-y-32">
          {/* Intro Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
            <ScrollReveal direction="right">
              <div className="aspect-[3/4] overflow-hidden rounded-sm bg-zinc-900 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&q=80&w=800" 
                  alt="Zenith Profile" 
                  className="w-full h-full object-cover opacity-80 transition-all duration-1000 hover:scale-105 hover:opacity-100"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={200}>
              <div className="space-y-8">
                <h2 className="text-4xl font-serif tracking-tight">自己紹介</h2>
                <div className="space-y-6 text-gray-400 leading-relaxed font-light text-lg">
                  <p>
                    はじめまして。YouTubeチャンネル「Zenith Photo」の運営者です。私は現在中学3年生で、この4月から高校生になります。
                  </p>
                  <p>
                    私は、自分自身が表に出るタイプではありません。むしろ、カメラのレンズ越しに広がる「自分以外の美しい世界」を見つめ、それを記録することに強い喜びを感じます。
                  </p>
                  <p>
                    「Zenith Photo」という名前には、その場所が持つ最高の輝き（頂点）を、余計なものを削ぎ落として映像に収めたいという願いを込めています。
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* Realization Section */}
          <ScrollReveal direction="up">
            <div className="bg-[#0a0a0a] p-12 md:p-24 border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-24 h-[1px] bg-white/20 translate-x-12 translate-y-12 transition-all group-hover:w-48 group-hover:bg-white/40" />
              <div className="absolute top-0 left-0 w-[1px] h-24 bg-white/20 translate-x-12 translate-y-12 transition-all group-hover:h-48 group-hover:bg-white/40" />
              
              <div className="relative z-10">
                <h2 className="text-4xl font-serif mb-12 tracking-tight">このプロジェクトで実現したいこと</h2>
                <div className="space-y-10 max-w-2xl">
                  <p className="text-2xl text-white font-light italic border-l-2 border-white/20 pl-8 py-2">
                    「撮影者の存在を感じさせない、没入感100%の街歩き映像」の制作。
                  </p>
                  <p className="text-gray-400 leading-relaxed font-light text-lg">
                    ジンバルを使用し、まるで視聴者の方が透明人間になって街を歩いているような、滑らかで美しい映像体験を届けます。私の姿を映すことはありません。主役はあくまで、その街の歴史、空気、そこで流れる景色です。
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Motivation Section */}
          <section className="space-y-16 pb-12">
            <ScrollReveal>
              <h2 className="text-4xl font-serif mb-12 tracking-tight">映像制作への想い</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-gray-400 font-light leading-relaxed text-lg">
                <ScrollReveal delay={100} direction="up">
                  <p>
                    私は昔から、静かな路地裏や古い建物が並ぶ街並みを眺めるのが好きでした。しかし、そうした場所をスマートフォンの手持ちで撮ると、どうしても手ブレが発生し、その場の「静寂」や「美しさ」が壊れてしまいます。
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={300} direction="up">
                  <p>
                    「映画のような、滑らかに流れる景色を自分も撮ってみたい」。そう思い、ジンバル映像の世界に惹かれました。言葉や姿ではなく、完成した映像そのもので皆様に街の魅力を伝えたいと考えています。
                  </p>
                </ScrollReveal>
              </div>
            </ScrollReveal>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
