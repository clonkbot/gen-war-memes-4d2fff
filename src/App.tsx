import { useState, useRef } from 'react';
import MemeCanvas from './components/MemeCanvas';
import ControlPanel from './components/ControlPanel';
import GenerationToggle from './components/GenerationToggle';

export type GenerationMode = 'boomer' | 'genz' | 'clash';

export interface MemeConfig {
  topText: string;
  bottomText: string;
  character: 'boomer' | 'zoomer';
  mode: GenerationMode;
  background: number;
}

const defaultConfig: MemeConfig = {
  topText: 'BACK IN MY DAY...',
  bottomText: 'WE HAD REAL PROBLEMS!',
  character: 'boomer',
  mode: 'boomer',
  background: 0,
};

function App() {
  const [config, setConfig] = useState<MemeConfig>(defaultConfig);
  const canvasRef = useRef<HTMLDivElement>(null);

  const updateConfig = (updates: Partial<MemeConfig>) => {
    setConfig(prev => ({ ...prev, ...updates }));
  };

  const downloadMeme = () => {
    if (!canvasRef.current) return;

    import('html-to-image').then(({ toPng }) => {
      toPng(canvasRef.current!, { cacheBust: true })
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.download = `${config.mode}-meme-${Date.now()}.png`;
          link.href = dataUrl;
          link.click();
        });
    });
  };

  const randomize = () => {
    const boomerTexts = [
      { top: 'BACK IN MY DAY...', bottom: 'WE PLAYED OUTSIDE!' },
      { top: 'MILLENNIALS THINK...', bottom: 'AVOCADO TOAST IS A PERSONALITY' },
      { top: 'WHY WON\'T YOU...', bottom: 'JUST BUY A HOUSE??' },
      { top: 'HAVE YOU TRIED...', bottom: 'WALKING INTO THE STORE AND ASKING FOR A JOB?' },
      { top: 'KIDS THESE DAYS...', bottom: 'CAN\'T EVEN USE A ROTARY PHONE!' },
    ];

    const genzTexts = [
      { top: 'NO CAP...', bottom: 'THIS IS LOWKEY BUSSIN FR FR' },
      { top: 'ME WHEN...', bottom: 'THE SKIBIDI TOILET HITS DIFFERENT' },
      { top: 'POV:', bottom: 'YOU\'RE LITERALLY SO UNSERIOUS RN' },
      { top: 'IT\'S GIVING...', bottom: 'MAIN CHARACTER ENERGY' },
      { top: 'SLAY?', bottom: 'SLAY. PERIOD. QUEEN. ICONIC.' },
    ];

    const isBoomer = config.mode === 'boomer' || (config.mode === 'clash' && Math.random() > 0.5);
    const texts = isBoomer ? boomerTexts : genzTexts;
    const randomText = texts[Math.floor(Math.random() * texts.length)];

    updateConfig({
      topText: randomText.top,
      bottomText: randomText.bottom,
      character: isBoomer ? 'boomer' : 'zoomer',
      background: Math.floor(Math.random() * 4),
    });
  };

  return (
    <div className={`min-h-screen flex flex-col transition-all duration-500 ${
      config.mode === 'boomer'
        ? 'bg-amber-50'
        : config.mode === 'genz'
          ? 'bg-black'
          : 'bg-gradient-to-r from-amber-50 via-purple-900 to-black'
    }`}>
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {config.mode === 'genz' && (
          <>
            <div className="absolute top-20 left-10 w-32 h-32 md:w-64 md:h-64 bg-pink-500 rounded-full blur-3xl opacity-30 animate-pulse" />
            <div className="absolute bottom-20 right-10 w-40 h-40 md:w-80 md:h-80 bg-cyan-400 rounded-full blur-3xl opacity-20 animate-bounce" style={{ animationDuration: '3s' }} />
            <div className="absolute top-1/2 left-1/2 w-48 h-48 md:w-96 md:h-96 bg-purple-600 rounded-full blur-3xl opacity-20 animate-spin" style={{ animationDuration: '20s' }} />
          </>
        )}
        {config.mode === 'boomer' && (
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        )}
      </div>

      {/* Header */}
      <header className="relative z-10 text-center py-6 md:py-10 px-4">
        <h1 className={`font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight transition-all duration-500 ${
          config.mode === 'boomer'
            ? 'text-amber-900 drop-shadow-[4px_4px_0px_#fbbf24]'
            : config.mode === 'genz'
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-500 animate-pulse drop-shadow-[0_0_30px_rgba(236,72,153,0.5)]'
              : 'text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-pink-500 to-cyan-400'
        }`}>
          {config.mode === 'boomer' ? 'MEME-O-MATIC' : config.mode === 'genz' ? 'BRAINROT GENERATOR' : 'GENERATIONAL WARFARE'}
        </h1>
        <p className={`mt-2 md:mt-4 font-body text-base md:text-xl transition-all duration-500 ${
          config.mode === 'boomer'
            ? 'text-amber-800 font-serif italic'
            : config.mode === 'genz'
              ? 'text-cyan-400 font-mono uppercase tracking-widest'
              : 'text-purple-300'
        }`}>
          {config.mode === 'boomer'
            ? '"Kids today wouldn\'t understand..."'
            : config.mode === 'genz'
              ? '// no thoughts just vibes //'
              : 'Pick your fighter: Old vs. Young'}
        </p>
      </header>

      {/* Generation Toggle */}
      <GenerationToggle
        mode={config.mode}
        onChange={(mode) => updateConfig({ mode })}
      />

      {/* Main Content */}
      <main className="flex-1 flex flex-col lg:flex-row gap-6 md:gap-8 p-4 md:p-8 relative z-10">
        {/* Meme Preview */}
        <div className="flex-1 flex items-center justify-center">
          <MemeCanvas ref={canvasRef} config={config} />
        </div>

        {/* Controls */}
        <div className="w-full lg:w-96 flex-shrink-0">
          <ControlPanel
            config={config}
            updateConfig={updateConfig}
            onRandomize={randomize}
            onDownload={downloadMeme}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className={`relative z-10 text-center py-4 px-4 ${
        config.mode === 'boomer'
          ? 'text-amber-700/50'
          : config.mode === 'genz'
            ? 'text-white/30'
            : 'text-purple-400/40'
      }`}>
        <p className="text-xs font-body">
          Requested by @web-user · Built by @clonkbot
        </p>
      </footer>
    </div>
  );
}

export default App;
