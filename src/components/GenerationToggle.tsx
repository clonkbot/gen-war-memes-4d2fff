import { GenerationMode } from '../App';

interface GenerationToggleProps {
  mode: GenerationMode;
  onChange: (mode: GenerationMode) => void;
}

export default function GenerationToggle({ mode, onChange }: GenerationToggleProps) {
  return (
    <div className="flex justify-center px-4 mb-4 md:mb-8">
      <div className={`inline-flex rounded-full p-1 md:p-2 transition-all duration-500 ${
        mode === 'boomer'
          ? 'bg-amber-200 shadow-lg'
          : mode === 'genz'
            ? 'bg-gray-900 shadow-[0_0_30px_rgba(236,72,153,0.3)]'
            : 'bg-gradient-to-r from-amber-200 to-gray-900'
      }`}>
        <button
          onClick={() => onChange('boomer')}
          className={`relative px-4 py-2 md:px-8 md:py-3 rounded-full font-display text-sm md:text-lg font-bold transition-all duration-300 min-w-[80px] md:min-w-[120px] ${
            mode === 'boomer'
              ? 'bg-amber-600 text-white shadow-[4px_4px_0px_#92400e] translate-x-0 translate-y-0 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#92400e]'
              : 'text-amber-700 hover:bg-amber-100'
          }`}
        >
          BOOMER
        </button>
        <button
          onClick={() => onChange('clash')}
          className={`relative px-4 py-2 md:px-8 md:py-3 rounded-full font-display text-sm md:text-lg font-bold transition-all duration-300 mx-1 min-w-[60px] md:min-w-[100px] ${
            mode === 'clash'
              ? 'bg-gradient-to-r from-amber-500 to-pink-500 text-white shadow-lg animate-pulse'
              : mode === 'boomer'
                ? 'text-amber-600 hover:bg-amber-100'
                : 'text-pink-400 hover:bg-gray-800'
          }`}
        >
          VS
        </button>
        <button
          onClick={() => onChange('genz')}
          className={`relative px-4 py-2 md:px-8 md:py-3 rounded-full font-display text-sm md:text-lg font-bold transition-all duration-300 min-w-[80px] md:min-w-[120px] ${
            mode === 'genz'
              ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-white shadow-[0_0_20px_rgba(236,72,153,0.5)]'
              : 'text-cyan-500 hover:bg-gray-800'
          }`}
        >
          GEN Z
        </button>
      </div>
    </div>
  );
}
