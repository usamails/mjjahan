import React from 'react';

export function BitcoinLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#F7931A" />
      <path
        d="M23.189 14.02c.314-2.096-1.283-3.223-3.465-3.975l.708-2.84-1.728-.43-.69 2.765c-.454-.114-.92-.22-1.385-.326l.695-2.783L15.596 6l-.708 2.839c-.376-.086-.745-.17-1.104-.26l.002-.007-2.384-.595-.46 1.846s1.283.294 1.256.312c.7.175.826.64.805 1.01l-.806 3.235c.048.012.11.03.179.057l-.183-.046-1.13 4.532c-.086.213-.304.533-.796.41.017.025-1.256-.314-1.256-.314l-.858 1.978 2.25.561c.418.105.828.214 1.231.318l-.715 2.872 1.727.43.708-2.84c.472.127.93.245 1.378.357l-.705 2.828 1.728.43.715-2.866c2.948.558 5.164.333 6.097-2.333.752-2.146-.037-3.385-1.587-4.192 1.129-.26 1.98-1.003 2.207-2.538zm-3.95 5.538c-.535 2.146-4.148.986-5.32.695l.95-3.805c1.17.292 4.929.87 4.37 3.11zm.535-5.567c-.488 1.954-3.497.961-4.472.718l.86-3.45c.976.243 4.12.697 3.612 2.732z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function EthereumLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#627EEA" />
      <g fill="#FFFFFF" fillRule="nonzero">
        <path d="M16.498 4v8.87l7.497 3.35z" fillOpacity="0.602" />
        <path d="M16.498 4L9 16.22l7.498-3.35z" />
        <path d="M16.498 21.968v6.027L24 17.616z" fillOpacity="0.602" />
        <path d="M16.498 27.995v-6.027L9 17.616z" />
        <path d="M16.498 20.573l7.497-4.353-7.497-3.348z" fillOpacity="0.2" />
        <path d="M9 16.22l7.498 4.353v-7.701z" fillOpacity="0.602" />
      </g>
    </svg>
  );
}

export function TetherLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#26A17B" />
      <path
        d="M17.922 17.383c-.11.008-.68.04-1.687.04-1.077 0-1.638-.035-1.787-.044-3.79-.176-6.617-.91-6.617-1.797 0-.888 2.827-1.62 6.617-1.796v2.793c.152.01.719.043 1.787.043 1.008 0 1.577-.032 1.687-.043V13.83c3.78.176 6.6 0.908 6.6 1.796 0 .887-2.82 1.62-6.6 1.797v5.932h-3.474v-5.976zm-3.474-4.805V8.89h10.457V5.5H7.095v3.39h10.457v3.688c-4.275.203-7.514 1.137-7.514 2.274 0 1.137 3.24 2.072 7.514 2.274v7.712h3.474v-7.712c4.267-.202 7.498-1.137 7.498-2.274 0-1.137-3.23-2.071-7.498-2.274z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function UsdcLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#2775CA" />
      <path
        d="M16 6.5C10.753 6.5 6.5 10.753 6.5 16s4.253 9.5 9.5 9.5 9.5-4.253 9.5-9.5S21.247 6.5 16 6.5zm.9 14.5c-2.3 0-3.4-1.1-3.4-2.5h2c0 .6.5 1.1 1.4 1.1.9 0 1.4-.4 1.4-1 0-.6-.4-.9-1.6-1.2-1.9-.5-3.1-1.1-3.1-2.7 0-1.5 1.2-2.6 3.3-2.6v-1.1h1.4v1.1c1.9.1 3 1.1 3.1 2.3h-2c-.1-.5-.5-.9-1.2-.9-.8 0-1.2.4-1.2.9 0 .5.4.8 1.6 1.1 2 .5 3.2 1.2 3.2 2.8 0 1.6-1.3 2.7-3.5 2.7v1.1h-1.4V21z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function BnbLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#F3BA2F" />
      <path
        d="M16 6.857L19.429 10.286 12.571 17.143 9.143 13.714 16 6.857zm0 18.286l-3.429-3.429 6.858-6.857 3.428 3.429L16 25.143zM6.857 16l3.429-3.429 3.428 3.429-3.428 3.429L6.857 16zm18.286 0l-3.429-3.429-3.428 3.429 3.428 3.429L25.143 16zM16 12.571l3.429 3.429L16 19.429 12.571 16 16 12.571z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function SolanaLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#000000" />
      <path
        d="M8.5 21.6c.1-.1.3-.2.5-.2h14.2c.3 0 .5.3.4.6l-1.9 3.3c-.1.2-.3.3-.5.3H7c-.3 0-.5-.3-.4-.6l1.9-3.4zm14.6-7.8c-.1-.1-.3-.2-.5-.2H8.4c-.3 0-.5.3-.4.6l1.9 3.3c.1.2.3.3.5.3h14.2c.3 0 .5-.3.4-.6l-1.9-3.4zM8.5 6.4c.1-.1.3-.2.5-.2h14.2c.3 0 .5.3.4.6l-1.9 3.3c-.1.2-.3.3-.5.3H7c-.3 0-.5-.3-.4-.6l1.9-3.4z"
        fill="url(#solana-gradient)"
      />
      <defs>
        <linearGradient id="solana-gradient" x1="7" y1="6.2" x2="24.5" y2="25.6" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00FFA3" />
          <stop offset="0.5" stopColor="#DC1FFF" />
          <stop offset="1" stopColor="#00FFA3" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function LitecoinLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#345D9D" />
      <path
        d="M15.3 7h3.4l-2.4 8.7 2.6-.9-.6 2.3-2.6.9-2.3 8h9.8l-.8 3H9.4l4.1-15-2.5.9.6-2.3 2.5-.9L15.3 7z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function TronLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#EB0029" />
      <path
        d="M7 8.5L25 6l-6.5 19.5L7 8.5zm2.8 2.2l8.8 8.9L22.8 8 9.8 10.7zm1.1 1.7L16.2 21l-5.3-8.6z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function DogeLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#C2A633" />
      <path
        d="M11 7.5h5.8c4.6 0 7.7 2.8 7.7 8.5s-3.1 8.5-7.7 8.5H11V7.5zm3.8 3.5v3.4h4v2.2h-4v4.9h2c2.6 0 4.1-1.6 4.1-5s-1.5-5-4.1-5h-2z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function RemitlyLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="120" height="32" rx="6" fill="#0C2340" />
      <path
        d="M14 8h5.2c3.3 0 5.4 1.8 5.4 4.5 0 2-1.2 3.6-3.1 4.2l3.7 6.3H21l-3.2-5.7h-1.6v5.7H14V8zm5 6.3c1.5 0 2.5-.8 2.5-2 0-1.2-1-1.9-2.5-1.9h-2.2v3.9H19z"
        fill="#00B4D8"
      />
      <text x="30" y="21" fill="#FFFFFF" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="15" letterSpacing="0.5">
        Remitly
      </text>
    </svg>
  );
}

export function PaypalLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill="#003087" />
      <path
        d="M20.6 11.2c-.3 2.1-1.9 3.5-4 3.5h-2.2l-.9 5.8h-3l2.4-15h5.5c2.3 0 3.8 1.1 3.5 3.3l-.3 2.4z"
        fill="#0079C1"
      />
      <path
        d="M17.4 14.7c-.3 2.1-1.9 3.5-4 3.5h-2.2l-.9 5.8h-3l2.4-15h5.5c2.3 0 3.8 1.1 3.5 3.3l-.3 2.4z"
        fill="#00457C"
        opacity="0.6"
      />
      <path
        d="M18.8 14.5c-.3 2.1-1.9 3.5-4 3.5h-2.2l-.9 5.8h-3l2.4-15h5.5c2.3 0 3.8 1.1 3.5 3.3l-.3 2.4z"
        fill="#0079C1"
      />
    </svg>
  );
}

export function XoomLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 110 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="110" height="32" rx="6" fill="#00457C" />
      <text x="12" y="21" fill="#00B4D8" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="16" letterSpacing="1">
        xoom
      </text>
      <text x="65" y="20" fill="#93C5FD" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" fontSize="8" letterSpacing="0.5">
        PayPal
      </text>
    </svg>
  );
}

export function WiseLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="32" rx="6" fill="#9FE870" />
      <text x="14" y="22" fill="#163300" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="17" letterSpacing="-0.5">
        // wise
      </text>
    </svg>
  );
}

export function BkashLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 110 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="110" height="32" rx="6" fill="#E2136E" />
      <g transform="translate(10, 4) scale(0.75)">
        <polygon points="16,2 24,14 18,18 10,10" fill="#FFFFFF" />
        <polygon points="2,14 10,10 14,24 6,26" fill="#FFFFFF" opacity="0.9" />
        <polygon points="18,18 28,26 14,24" fill="#FFFFFF" opacity="0.8" />
      </g>
      <text x="38" y="21" fill="#FFFFFF" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="15" letterSpacing="0.5">
        bKash
      </text>
    </svg>
  );
}

export function UpayLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 90 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="90" height="32" rx="6" fill="#0A3B80" />
      <circle cx="16" cy="16" r="8" fill="#FFC82C" />
      <text x="32" y="21" fill="#FFFFFF" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="14">
        upay
      </text>
    </svg>
  );
}

export function VisaMastercardBadge({ className = "h-5" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-slate-800 border border-slate-700 ${className}`}>
      <span className="text-[10px] font-black tracking-wider text-blue-400 font-sans">VISA</span>
      <span className="text-slate-600">|</span>
      <div className="flex -space-x-1 items-center">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500 opacity-90" />
        <div className="w-2.5 h-2.5 rounded-full bg-amber-400 opacity-90" />
      </div>
      <span className="text-[9px] font-bold text-slate-300">Mastercard</span>
    </div>
  );
}

export function WhatsAppLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.062-2.12-.533-1.637-.682-2.704-2.348-2.787-2.459-.083-.111-.668-.889-.668-1.696 0-.808.423-1.206.574-1.37.151-.164.33-.206.44-.206.111 0 .222.001.319.006.102.005.239-.039.373.284.144.35.492 1.206.536 1.295.044.089.073.193.014.31-.059.117-.089.19-.176.293-.088.103-.186.23-.266.309-.092.091-.188.191-.081.375.107.184.475.784 1.021 1.27.702.626 1.295.82 1.478.91.184.09.292.079.4-.045.109-.125.467-.543.592-.729.125-.185.251-.155.422-.092.172.062 1.092.516 1.28.61.188.093.313.14.359.219.046.079.046.458-.098.863z" />
    </svg>
  );
}

export function TelegramLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
    </svg>
  );
}
