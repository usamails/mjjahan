import React, { useState } from 'react';
import { Play, ExternalLink, Check, Copy, Sparkles, MonitorPlay } from 'lucide-react';

interface VideoTutorialPlayerProps {
  videoId: string;
  title: string;
  subtitle: string;
  platformName: string;
  badgeColor?: string;
  accentColor?: string;
  keyStepsSummary?: string[];
}

export const VideoTutorialPlayer: React.FC<VideoTutorialPlayerProps> = ({
  videoId,
  title,
  subtitle,
  platformName,
  badgeColor = 'bg-red-500/20 text-red-400 border-red-500/30',
  accentColor = 'border-blue-500/30',
  keyStepsSummary = []
}) => {
  const [copied, setCopied] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const youtubeUrl = `https://youtu.be/${videoId}`;
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(youtubeUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`rounded-3xl bg-slate-900/90 border ${accentColor} p-5 sm:p-7 space-y-5 shadow-2xl overflow-hidden`}>
      {/* Header with Title & Badges */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-800/80">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border flex items-center gap-1.5 ${badgeColor}`}>
              <MonitorPlay className="w-3 h-3" />
              {platformName} Official Video Guide
            </span>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              Live Embed
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
            {title}
          </h3>
          <p className="text-xs text-slate-400">
            {subtitle}
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={handleCopyLink}
            className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 border border-slate-700 transition-all cursor-pointer"
            title="Copy YouTube Link"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Link Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Share Video</span>
              </>
            )}
          </button>

          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-xl bg-red-600/90 hover:bg-red-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-md shadow-red-600/20"
          >
            <Play className="w-3 h-3 fill-white" />
            <span>Open in YouTube</span>
            <ExternalLink className="w-3 h-3 ml-0.5" />
          </a>
        </div>
      </div>

      {/* Responsive 16:9 IFrame Video Player Container */}
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl group">
        {!isLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950 text-slate-400 gap-2 z-0">
            <div className="w-8 h-8 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
            <span className="text-xs font-mono">Loading tutorial video player...</span>
          </div>
        )}

        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          onLoad={() => setIsLoaded(true)}
          className="w-full h-full border-0 relative z-10"
        />
      </div>

      {/* Key Highlights / Summary Points */}
      {keyStepsSummary.length > 0 && (
        <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
          <div className="text-[11px] font-mono font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Key Video Highlights for Faster Transfer
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-400">
            {keyStepsSummary.map((step, idx) => (
              <div key={idx} className="flex items-start gap-2 bg-slate-900/70 p-2 rounded-lg border border-slate-800">
                <span className="w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center text-[10px] font-mono font-bold flex-shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="text-[11px] text-slate-300 leading-snug">{step}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
