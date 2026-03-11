import { forwardRef } from 'react';
import { MemeConfig } from '../App';

interface MemeCanvasProps {
  config: MemeConfig;
}

const BoomerCharacter = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    {/* Face */}
    <circle cx="100" cy="100" r="70" fill="#FFD699" stroke="#8B4513" strokeWidth="3" />
    {/* Hair - balding with sides */}
    <ellipse cx="60" cy="55" rx="25" ry="15" fill="#808080" />
    <ellipse cx="140" cy="55" rx="25" ry="15" fill="#808080" />
    {/* Eyebrows - angry/confused */}
    <path d="M60 75 L90 85" stroke="#4A4A4A" strokeWidth="4" strokeLinecap="round" />
    <path d="M140 75 L110 85" stroke="#4A4A4A" strokeWidth="4" strokeLinecap="round" />
    {/* Glasses */}
    <rect x="55" y="85" width="35" height="25" rx="3" fill="none" stroke="#333" strokeWidth="3" />
    <rect x="110" y="85" width="35" height="25" rx="3" fill="none" stroke="#333" strokeWidth="3" />
    <line x1="90" y1="97" x2="110" y2="97" stroke="#333" strokeWidth="3" />
    {/* Eyes */}
    <circle cx="72" cy="97" r="5" fill="#333" />
    <circle cx="128" cy="97" r="5" fill="#333" />
    {/* Mustache */}
    <path d="M80 125 Q100 140 120 125 Q100 135 80 125" fill="#808080" />
    {/* Mouth - frowning */}
    <path d="M80 145 Q100 135 120 145" stroke="#8B4513" strokeWidth="3" fill="none" />
    {/* Wrinkles */}
    <path d="M45 100 Q40 110 45 120" stroke="#CC9966" strokeWidth="2" fill="none" />
    <path d="M155 100 Q160 110 155 120" stroke="#CC9966" strokeWidth="2" fill="none" />
  </svg>
);

const ZoomerCharacter = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    {/* Face */}
    <circle cx="100" cy="100" r="70" fill="#FFE4C9" stroke="#FF69B4" strokeWidth="3" />
    {/* Broccoli hair */}
    <ellipse cx="100" cy="40" rx="45" ry="25" fill="#1a1a1a" />
    <circle cx="70" cy="35" r="15" fill="#1a1a1a" />
    <circle cx="100" cy="25" r="18" fill="#1a1a1a" />
    <circle cx="130" cy="35" r="15" fill="#1a1a1a" />
    {/* Dyed tips */}
    <circle cx="70" cy="30" r="8" fill="#00FFFF" />
    <circle cx="100" cy="20" r="10" fill="#FF1493" />
    <circle cx="130" cy="30" r="8" fill="#00FFFF" />
    {/* Dead inside eyes */}
    <circle cx="75" cy="95" r="20" fill="white" stroke="#333" strokeWidth="2" />
    <circle cx="125" cy="95" r="20" fill="white" stroke="#333" strokeWidth="2" />
    <circle cx="75" cy="95" r="8" fill="#333" />
    <circle cx="125" cy="95" r="8" fill="#333" />
    {/* Eye bags */}
    <path d="M55 110 Q75 120 95 110" stroke="#DDA0DD" strokeWidth="2" fill="none" />
    <path d="M105 110 Q125 120 145 110" stroke="#DDA0DD" strokeWidth="2" fill="none" />
    {/* Expressionless mouth */}
    <line x1="85" y1="140" x2="115" y2="140" stroke="#333" strokeWidth="4" strokeLinecap="round" />
    {/* Airpods */}
    <ellipse cx="35" cy="110" rx="8" ry="15" fill="white" stroke="#ccc" strokeWidth="1" />
    <ellipse cx="165" cy="110" rx="8" ry="15" fill="white" stroke="#ccc" strokeWidth="1" />
  </svg>
);

const MemeCanvas = forwardRef<HTMLDivElement, MemeCanvasProps>(({ config }, ref) => {
  const backgrounds = {
    boomer: [
      'bg-gradient-to-b from-amber-100 to-amber-200',
      'bg-gradient-to-br from-yellow-100 via-amber-100 to-orange-100',
      'bg-gradient-to-r from-amber-50 to-yellow-100',
      'bg-gradient-to-b from-orange-100 to-amber-200',
    ],
    genz: [
      'bg-gradient-to-br from-purple-900 via-pink-800 to-cyan-700',
      'bg-gradient-to-r from-black via-purple-900 to-pink-900',
      'bg-gradient-to-bl from-cyan-600 via-purple-800 to-pink-600',
      'bg-gradient-to-t from-black via-pink-900 to-purple-800',
    ],
    clash: [
      'bg-gradient-to-r from-amber-200 via-purple-500 to-cyan-500',
      'bg-gradient-to-br from-yellow-200 via-pink-600 to-black',
      'bg-gradient-to-bl from-amber-100 via-purple-700 to-pink-500',
      'bg-gradient-to-t from-orange-200 via-purple-600 to-cyan-400',
    ],
  };

  const currentBg = backgrounds[config.mode][config.background % 4];

  return (
    <div
      ref={ref}
      className={`relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 ${currentBg} ${
        config.mode === 'genz' ? 'shadow-[0_0_60px_rgba(236,72,153,0.4)]' : 'shadow-[8px_8px_0px_rgba(0,0,0,0.2)]'
      }`}
    >
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Glitch lines for Gen Z */}
      {config.mode === 'genz' && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[20%] left-0 right-0 h-1 bg-cyan-400 opacity-50 animate-pulse" style={{ animationDelay: '0.1s' }} />
          <div className="absolute top-[45%] left-0 right-0 h-0.5 bg-pink-500 opacity-60 animate-pulse" style={{ animationDelay: '0.3s' }} />
          <div className="absolute top-[70%] left-0 right-0 h-1 bg-purple-400 opacity-40 animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
      )}

      {/* Top Text */}
      <div className={`absolute top-4 left-4 right-4 text-center transition-all duration-300 ${
        config.mode === 'boomer'
          ? 'font-display'
          : 'font-body'
      }`}>
        <span className={`inline-block px-4 py-2 text-lg sm:text-xl md:text-2xl font-black uppercase leading-tight break-words ${
          config.mode === 'boomer'
            ? 'text-amber-900 bg-white/80 rounded-lg shadow-[4px_4px_0px_#92400e] border-2 border-amber-900'
            : config.mode === 'genz'
              ? 'text-white bg-black/60 rounded-none border-l-4 border-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.5)]'
              : 'text-white bg-gradient-to-r from-amber-900/80 to-pink-600/80 rounded-lg'
        }`}>
          {config.topText || 'TOP TEXT'}
        </span>
      </div>

      {/* Character */}
      <div className={`absolute inset-0 flex items-center justify-center p-12 md:p-16 transition-all duration-500 ${
        config.mode === 'genz' ? 'animate-bounce' : ''
      }`} style={{ animationDuration: '3s' }}>
        <div className={`w-full h-full max-w-[200px] max-h-[200px] transition-transform duration-300 ${
          config.mode === 'genz' ? 'hover:scale-110 hover:rotate-3' : 'hover:scale-105'
        }`}>
          {config.character === 'boomer' ? <BoomerCharacter /> : <ZoomerCharacter />}
        </div>
      </div>

      {/* Bottom Text */}
      <div className={`absolute bottom-4 left-4 right-4 text-center transition-all duration-300 ${
        config.mode === 'boomer'
          ? 'font-display'
          : 'font-body'
      }`}>
        <span className={`inline-block px-4 py-2 text-lg sm:text-xl md:text-2xl font-black uppercase leading-tight break-words ${
          config.mode === 'boomer'
            ? 'text-amber-900 bg-white/80 rounded-lg shadow-[4px_4px_0px_#92400e] border-2 border-amber-900'
            : config.mode === 'genz'
              ? 'text-white bg-black/60 rounded-none border-r-4 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.5)]'
              : 'text-white bg-gradient-to-r from-pink-600/80 to-cyan-500/80 rounded-lg'
        }`}>
          {config.bottomText || 'BOTTOM TEXT'}
        </span>
      </div>

      {/* Decorative elements */}
      {config.mode === 'boomer' && (
        <>
          <div className="absolute top-2 right-2 text-2xl opacity-60">📰</div>
          <div className="absolute bottom-2 left-2 text-xl opacity-40">☎️</div>
        </>
      )}
      {config.mode === 'genz' && (
        <>
          <div className="absolute top-2 left-2 text-2xl animate-spin" style={{ animationDuration: '4s' }}>💀</div>
          <div className="absolute bottom-2 right-2 text-xl animate-pulse">✨</div>
          <div className="absolute top-1/4 right-2 text-lg animate-bounce" style={{ animationDuration: '2s' }}>🔥</div>
        </>
      )}
    </div>
  );
});

MemeCanvas.displayName = 'MemeCanvas';

export default MemeCanvas;
