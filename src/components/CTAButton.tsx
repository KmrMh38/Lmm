import { ExternalLink } from 'lucide-react';

interface CTAButtonProps {
  text: string;
  large?: boolean;
  className?: string;
}

const AFFILIATE_LINK = 'https://refpa3665.com/L?tag=d_4161265m_45415c_&site=4161265&ad=45415';

export default function CTAButton({ text, large = false, className = '' }: CTAButtonProps) {
  return (
    <a
      href={AFFILIATE_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-yellow-500/50 ${
        large ? 'text-lg sm:text-xl px-8 py-4' : 'text-base px-6 py-3'
      } ${className}`}
    >
      {text}
      <ExternalLink size={large ? 24 : 20} />
    </a>
  );
}
