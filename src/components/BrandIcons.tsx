import React from 'react';

export function BrandIcon({ symbol, className = 'w-6 h-6' }: { symbol: string; className?: string }) {
  switch (symbol) {
    case 'Py': // Python
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M11.91 2c-5.26 0-4.93 2.28-4.93 2.28l.01 2.37h5.02v.71H4.99S2 7.02 2 12.3c0 5.27 2.61 5.09 2.61 5.09h1.56v-2.18s-.08-2.61 2.56-2.61h4.37s2.48.04 2.48-2.43V4.43S15.98 2 11.91 2zm-2.7 1.63c.52 0 .94.42.94.94s-.42.94-.94.94-.94-.42-.94-.94.42-.94.94-.94z"
            fill="#3776AB"
          />
          <path
            d="M12.09 22c5.26 0 4.93-2.28 4.93-2.28l-.01-2.37h-5.02v-.71h7.02s2.99.34 2.99-4.94c0-5.27-2.61-5.09-2.61-5.09h-1.56v2.18s.08 2.61-2.56 2.61h-4.37s-2.48-.04-2.48 2.43v5.74S8.02 22 12.09 22zm2.7-1.63c-.52 0-.94-.42-.94-.94s.42-.94.94-.94.94.42.94.94-.42.94-.94.94z"
            fill="#FFD43B"
          />
        </svg>
      );

    case 'Js': // JavaScript
      return (
        <svg className={className} viewBox="0 0 24 24">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path
            d="M7.5 17.5c.7.4 1.5.6 2.3.6 1.4 0 2.2-.7 2.2-2v-6.3h-2v6.2c0 .6-.3.9-.9.9-.4 0-.8-.1-1.1-.3l-.5.9zm8.1-7.7c-1.3 0-2.3.7-2.7 1.8l1.7.9c.3-.6.6-.9 1.1-.9.6 0 1 .3 1 .8v.1c-.4-.2-.9-.3-1.5-.3-1.6 0-2.6.9-2.6 2.3 0 1.4 1 2.3 2.3 2.3 1 0 1.6-.4 2-1v.9h1.9v-4.5c0-1.6-1.3-2.5-3.2-2.5zm.3 4.8c-.3.3-.7.5-1.1.5-.6 0-.9-.3-.9-.8 0-.6.4-.8 1.1-.8.4 0 .7.1.9.2v.9z"
            fill="#000000"
          />
        </svg>
      );

    case 'Ts': // TypeScript
      return (
        <svg className={className} viewBox="0 0 24 24">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path
            d="M4 8.5h6v1.8H7.9V19H5.9v-8.7H4V8.5zm10.7 3.5c-1.1 0-1.8.6-1.8 1.5 0 1.8 3.5 1.4 3.5 3.5 0 1.3-1.1 2.1-2.5 2.1-1.3 0-2.2-.6-2.6-1.5l1.6-1c.2.5.6.8 1.1.8.5 0 .8-.3.8-.6 0-1.7-3.4-1.3-3.4-3.4 0-1.3 1-2.1 2.4-2.1 1.1 0 2 .5 2.4 1.3l-1.6 1c-.3-.5-.6-.7-1-.7z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case 'Sq': // SQL / Relational
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#CC292B" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      );

    case 'Fa': // FastAPI
      return (
        <svg className={className} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="11" fill="#009688" />
          <path
            d="M12.5 4L7 13h5l-1.5 7L17 11h-5l1.5-7z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case 'Fk': // Flask
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2">
          <path d="M10 2v5.5a4.5 4.5 0 0 1-1.5 3.37L4.5 15A4 4 0 0 0 8 21h8a4 4 0 0 0 3.5-6l-4-4.13A4.5 4.5 0 0 1 14 7.5V2" />
          <line x1="8.5" y1="2" x2="15.5" y2="2" />
        </svg>
      );

    case 'Lc': // LangChain
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#1C3C3C" />
          <path
            d="M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0zm-4-1a3 3 0 0 1 5-1.5M19 13a3 3 0 0 1-5 1.5"
            stroke="#10B981"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'Lg': // LangGraph
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="6" cy="6" r="3" fill="#FF6F00" />
          <circle cx="18" cy="8" r="3" fill="#FF6F00" />
          <circle cx="12" cy="18" r="3" fill="#FF6F00" />
          <path d="M8.5 7.5l7 1.5M7.5 8.5l3.5 7M16.5 10l-3.5 5.5" stroke="#FF6F00" strokeWidth="1.5" />
        </svg>
      );

    case 'Dc': // Docling / Docker
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#2496ED" />
          <path
            d="M4 14.5c.5-3 3-5 7-5 4 0 7 2 7 5 0 3-4 4.5-8 4.5-3 0-5.5-1.5-6-4.5zM6 10h2v2H6zm3 0h2v2H9zm3 0h2v2h-2zm3 0h2v2h-2zm-3-3h2v2h-2z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case 'Rc': // React
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(150 12 12)" />
          <circle cx="12" cy="12" r="2" fill="#61DAFB" />
        </svg>
      );

    case 'Nd': // Node.js
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#339933">
          <path d="M12 2l9 5.2v10.4l-9 5.2-9-5.2V7.2L12 2zm0 2.3L4.8 8.5v8l7.2 4.2 7.2-4.2v-8L12 4.3z" />
        </svg>
      );

    case 'Oa': // OpenAI
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" color="#10A37F">
          <path d="M22.28 10.63a5.57 5.57 0 0 0-.46-4.47 5.72 5.72 0 0 0-4.66-2.82 5.58 5.58 0 0 0-4.14-1.84 5.68 5.68 0 0 0-5.18 3.37 5.6 5.6 0 0 0-3.8 2.65 5.7 5.7 0 0 0 .66 5.43 5.57 5.57 0 0 0 .46 4.47 5.72 5.72 0 0 0 4.66 2.82 5.58 5.58 0 0 0 4.14 1.84 5.68 5.68 0 0 0 5.18-3.37 5.6 5.6 0 0 0 3.8-2.65 5.7 5.7 0 0 0-.66-5.43zM12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
        </svg>
      );

    case 'Cl': // Anthropic Claude
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#D97706">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 15l4-7 4 7-2 0-2-3.5L10 15z" fill="#FFFFFF" />
        </svg>
      );

    case 'Gm': // Google Gemini
      return (
        <svg className={className} viewBox="0 0 24 24">
          <path
            d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z"
            fill="#1A73E8"
          />
        </svg>
      );

    case 'Br': // AWS Bedrock
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#232F3E" />
          <path
            d="M6 14.5c3.5 2 8.5 2 12 0m-1.5-1.5l1.5 1.5-1.5 1.5"
            stroke="#FF9900"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path d="M8 8l4 4 4-4" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );

    case 'Ol': // Ollama
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" color="#000000">
          <rect x="3" y="5" width="18" height="14" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="8.5" cy="11.5" r="1.5" />
          <circle cx="15.5" cy="11.5" r="1.5" />
          <path d="M10 15h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case 'Dg': // Deepgram
      return (
        <svg className={className} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="#13EF95" />
          <circle cx="12" cy="12" r="4" fill="#0D0D0D" />
        </svg>
      );

    case 'Ph': // Arize Phoenix
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#E11D48">
          <polygon points="12,2 22,20 2,20" />
          <polygon points="12,8 18,18 6,18" fill="#FFFFFF" />
        </svg>
      );

    case 'Ls': // LangSmith
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#2563EB" strokeWidth="2" />
          <path d="M8 12h8M12 8v8" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'Pg': // PostgreSQL
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#4169E1">
          <path d="M12 3C7 3 4 6 4 10c0 4 2 7 5 8.5V20l3-1 2 .5c3-.5 6-3 6-7.5 0-4-3-7-8-7z" />
        </svg>
      );

    case 'Sb': // Supabase
      return (
        <svg className={className} viewBox="0 0 24 24">
          <path
            d="M13.5 2L3 14.5h8.5V22l10.5-12.5H13.5V2z"
            fill="#3ECF8E"
          />
        </svg>
      );

    case 'Es': // Elasticsearch
      return (
        <svg className={className} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="#005571" />
          <rect x="6" y="10" width="12" height="4" rx="1" fill="#FED136" />
        </svg>
      );

    case 'Cr': // ChromaDB
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#F59E0B">
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="3" fill="#FFFFFF" />
        </svg>
      );

    case 'Pn': // Pinecone
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#000000">
          <path d="M12 2l3 5h-6l3-5zm-5 6l3 5H4l3-5zm10 0l3 5h-6l3-5zm-5 6l3 5h-6l3-5z" />
        </svg>
      );

    case 'Aw': // AWS
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#FF9900">
          <path d="M18.8 15.2c-2.3 1.5-5.3 2.3-8.3 2.3-4.1 0-7.8-1.5-10.5-4.1-.2-.2 0-.5.3-.4 2.8 1.4 6.2 2.2 9.7 2.2 2.7 0 5.6-.6 8.2-1.8.4-.2.7.2.6.4v1.4z" />
          <path d="M19.7 13.7c-.3-.4-1.8-.2-2.5-.1-.2 0-.3-.2-.1-.3 1.2-.9 3.1-.6 3.4-.2.2.4-.2 2.2-1.3 3.1-.2.1-.3 0-.3-.1.2-.7.8-2 .8-2.4z" />
        </svg>
      );

    case 'Dk': // Dokploy
      return (
        <svg className={className} viewBox="0 0 24 24">
          <rect width="24" height="24" rx="5" fill="#6366F1" />
          <path d="M7 16V8l5 4-5 4zm5-4l5-4v8l-5-4z" fill="#FFFFFF" />
        </svg>
      );

    case 'N8': // n8n
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#EA4B71">
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="7" r="3" />
          <circle cx="18" cy="17" r="3" />
          <line x1="9" y1="12" x2="15" y2="7" stroke="#EA4B71" strokeWidth="2" />
          <line x1="9" y1="12" x2="15" y2="17" stroke="#EA4B71" strokeWidth="2" />
        </svg>
      );

    case 'Ws': // WebSockets
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2">
          <path d="M4 12l4-4 4 4-4 4-4-4zm8 0l4-4 4 4-4 4-4-4z" />
        </svg>
      );

    default:
      return (
        <div className={`${className} rounded bg-ink/10 flex items-center justify-center font-mono text-[10px] font-bold text-ink`}>
          {symbol}
        </div>
      );
  }
}
