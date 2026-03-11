import { MemeConfig } from '../App';

interface ControlPanelProps {
  config: MemeConfig;
  updateConfig: (updates: Partial<MemeConfig>) => void;
  onRandomize: () => void;
  onDownload: () => void;
}

export default function ControlPanel({ config, updateConfig, onRandomize, onDownload }: ControlPanelProps) {
  const isBoomerMode = config.mode === 'boomer';
  const isGenzMode = config.mode === 'genz';

  return (
    <div className={`rounded-3xl p-4 md:p-6 transition-all duration-500 ${
      isBoomerMode
        ? 'bg-amber-100 border-4 border-amber-800 shadow-[8px_8px_0px_#92400e]'
        : isGenzMode
          ? 'bg-gray-900/90 border-2 border-pink-500/50 shadow-[0_0_40px_rgba(236,72,153,0.2)] backdrop-blur-sm'
          : 'bg-gradient-to-br from-amber-100/90 to-gray-900/90 border-2 border-purple-500/50 backdrop-blur-sm'
    }`}>
      <h2 className={`font-display text-xl md:text-2xl font-bold mb-4 md:mb-6 transition-colors duration-300 ${
        isBoomerMode
          ? 'text-amber-900'
          : isGenzMode
            ? 'text-pink-400'
            : 'text-purple-400'
      }`}>
        {isBoomerMode ? 'CUSTOMIZE YOUR MEME' : isGenzMode ? '// EDIT BRAINROT //' : 'MIX IT UP'}
      </h2>

      {/* Top Text Input */}
      <div className="mb-4">
        <label className={`block text-sm font-bold mb-2 transition-colors duration-300 ${
          isBoomerMode ? 'text-amber-800 font-serif' : isGenzMode ? 'text-cyan-400 font-mono' : 'text-purple-300'
        }`}>
          {isBoomerMode ? 'Top Caption:' : isGenzMode ? 'top_text.exe' : 'Top Text'}
        </label>
        <input
          type="text"
          value={config.topText}
          onChange={(e) => updateConfig({ topText: e.target.value.toUpperCase() })}
          maxLength={50}
          className={`w-full px-4 py-3 rounded-xl font-bold text-sm md:text-base transition-all duration-300 ${
            isBoomerMode
              ? 'bg-white border-2 border-amber-600 text-amber-900 placeholder-amber-400 focus:shadow-[4px_4px_0px_#92400e]'
              : isGenzMode
                ? 'bg-black border-2 border-pink-500 text-pink-300 placeholder-pink-700 focus:shadow-[0_0_20px_rgba(236,72,153,0.3)]'
                : 'bg-white/10 border-2 border-purple-500 text-white placeholder-purple-400'
          } outline-none`}
          placeholder={isBoomerMode ? 'BACK IN MY DAY...' : 'NO CAP...'}
        />
      </div>

      {/* Bottom Text Input */}
      <div className="mb-4 md:mb-6">
        <label className={`block text-sm font-bold mb-2 transition-colors duration-300 ${
          isBoomerMode ? 'text-amber-800 font-serif' : isGenzMode ? 'text-cyan-400 font-mono' : 'text-purple-300'
        }`}>
          {isBoomerMode ? 'Bottom Caption:' : isGenzMode ? 'bottom_text.exe' : 'Bottom Text'}
        </label>
        <input
          type="text"
          value={config.bottomText}
          onChange={(e) => updateConfig({ bottomText: e.target.value.toUpperCase() })}
          maxLength={50}
          className={`w-full px-4 py-3 rounded-xl font-bold text-sm md:text-base transition-all duration-300 ${
            isBoomerMode
              ? 'bg-white border-2 border-amber-600 text-amber-900 placeholder-amber-400 focus:shadow-[4px_4px_0px_#92400e]'
              : isGenzMode
                ? 'bg-black border-2 border-cyan-500 text-cyan-300 placeholder-cyan-700 focus:shadow-[0_0_20px_rgba(34,211,238,0.3)]'
                : 'bg-white/10 border-2 border-purple-500 text-white placeholder-purple-400'
          } outline-none`}
          placeholder={isBoomerMode ? 'WE HAD REAL PROBLEMS!' : 'FR FR NO CAP'}
        />
      </div>

      {/* Character Toggle */}
      <div className="mb-4 md:mb-6">
        <label className={`block text-sm font-bold mb-2 transition-colors duration-300 ${
          isBoomerMode ? 'text-amber-800 font-serif' : isGenzMode ? 'text-cyan-400 font-mono' : 'text-purple-300'
        }`}>
          {isBoomerMode ? 'Character:' : isGenzMode ? 'select_character:' : 'Character'}
        </label>
        <div className="flex gap-2">
          <button
            onClick={() => updateConfig({ character: 'boomer' })}
            className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
              config.character === 'boomer'
                ? isBoomerMode
                  ? 'bg-amber-600 text-white shadow-[4px_4px_0px_#78350f]'
                  : 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                : isBoomerMode
                  ? 'bg-white text-amber-700 border-2 border-amber-400'
                  : 'bg-gray-800 text-gray-400 border-2 border-gray-700'
            }`}
          >
            👴 BOOMER
          </button>
          <button
            onClick={() => updateConfig({ character: 'zoomer' })}
            className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
              config.character === 'zoomer'
                ? isGenzMode
                  ? 'bg-gradient-to-r from-pink-500 to-cyan-500 text-white shadow-[0_0_20px_rgba(236,72,153,0.4)]'
                  : 'bg-gradient-to-r from-pink-500 to-cyan-500 text-white'
                : isGenzMode
                  ? 'bg-black text-gray-500 border-2 border-gray-700'
                  : 'bg-white text-amber-700 border-2 border-amber-400'
            }`}
          >
            🧑‍💻 ZOOMER
          </button>
        </div>
      </div>

      {/* Background Selector */}
      <div className="mb-4 md:mb-6">
        <label className={`block text-sm font-bold mb-2 transition-colors duration-300 ${
          isBoomerMode ? 'text-amber-800 font-serif' : isGenzMode ? 'text-cyan-400 font-mono' : 'text-purple-300'
        }`}>
          {isBoomerMode ? 'Background:' : isGenzMode ? 'vibe_check:' : 'Background'}
        </label>
        <div className="flex gap-2">
          {[0, 1, 2, 3].map((bg) => (
            <button
              key={bg}
              onClick={() => updateConfig({ background: bg })}
              className={`flex-1 h-10 md:h-12 rounded-lg transition-all duration-300 ${
                config.background === bg
                  ? 'ring-4 ring-offset-2 scale-105'
                  : 'hover:scale-105'
              } ${
                isBoomerMode
                  ? `ring-amber-600 ring-offset-amber-100 ${
                      bg === 0 ? 'bg-gradient-to-b from-amber-100 to-amber-200' :
                      bg === 1 ? 'bg-gradient-to-br from-yellow-100 via-amber-100 to-orange-100' :
                      bg === 2 ? 'bg-gradient-to-r from-amber-50 to-yellow-100' :
                      'bg-gradient-to-b from-orange-100 to-amber-200'
                    }`
                  : isGenzMode
                    ? `ring-pink-500 ring-offset-gray-900 ${
                        bg === 0 ? 'bg-gradient-to-br from-purple-900 via-pink-800 to-cyan-700' :
                        bg === 1 ? 'bg-gradient-to-r from-black via-purple-900 to-pink-900' :
                        bg === 2 ? 'bg-gradient-to-bl from-cyan-600 via-purple-800 to-pink-600' :
                        'bg-gradient-to-t from-black via-pink-900 to-purple-800'
                      }`
                    : `ring-purple-500 ring-offset-transparent ${
                        bg === 0 ? 'bg-gradient-to-r from-amber-200 via-purple-500 to-cyan-500' :
                        bg === 1 ? 'bg-gradient-to-br from-yellow-200 via-pink-600 to-black' :
                        bg === 2 ? 'bg-gradient-to-bl from-amber-100 via-purple-700 to-pink-500' :
                        'bg-gradient-to-t from-orange-200 via-purple-600 to-cyan-400'
                      }`
              }`}
            />
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={onRandomize}
          className={`flex-1 py-3 md:py-4 rounded-xl font-display font-bold text-base md:text-lg transition-all duration-300 ${
            isBoomerMode
              ? 'bg-amber-500 text-white shadow-[4px_4px_0px_#78350f] hover:shadow-[2px_2px_0px_#78350f] hover:translate-x-[2px] hover:translate-y-[2px]'
              : isGenzMode
                ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:shadow-[0_0_30px_rgba(236,72,153,0.6)]'
                : 'bg-gradient-to-r from-amber-500 to-pink-500 text-white shadow-lg hover:shadow-xl'
          }`}
        >
          {isBoomerMode ? '🎲 RANDOMIZE' : isGenzMode ? '🎰 RANDOMIZE FR' : '🎲 RANDOM'}
        </button>
        <button
          onClick={onDownload}
          className={`flex-1 py-3 md:py-4 rounded-xl font-display font-bold text-base md:text-lg transition-all duration-300 ${
            isBoomerMode
              ? 'bg-green-600 text-white shadow-[4px_4px_0px_#14532d] hover:shadow-[2px_2px_0px_#14532d] hover:translate-x-[2px] hover:translate-y-[2px]'
              : isGenzMode
                ? 'bg-gradient-to-r from-cyan-500 to-green-500 text-white shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]'
                : 'bg-gradient-to-r from-cyan-500 to-green-500 text-white shadow-lg hover:shadow-xl'
          }`}
        >
          {isBoomerMode ? '💾 DOWNLOAD' : isGenzMode ? '⬇️ SAVE THAT' : '💾 DOWNLOAD'}
        </button>
      </div>

      {/* Fun fact */}
      <div className={`mt-4 md:mt-6 p-3 rounded-xl text-xs md:text-sm text-center transition-all duration-300 ${
        isBoomerMode
          ? 'bg-amber-200/50 text-amber-800 font-serif italic'
          : isGenzMode
            ? 'bg-black/50 text-pink-400 font-mono border border-pink-500/30'
            : 'bg-purple-900/30 text-purple-300'
      }`}>
        {isBoomerMode
          ? '"A penny saved is a meme earned!" - Ancient Proverb'
          : isGenzMode
            ? '// this meme is certified bussin no cap //'
            : 'Choose your generation, make your meme!'}
      </div>
    </div>
  );
}
