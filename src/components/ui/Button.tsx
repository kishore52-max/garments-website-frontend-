import React from 'react';
import { motion } from 'framer-motion';
import { Label } from './Label';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
  className?: string;
  href?: string;
}
export function Button({
  variant = 'primary',
  children,
  className = '',
  href,
  ...props
}: ButtonProps) {
  const baseStyles =
  'inline-flex items-center justify-center transition-all duration-500 ease-out rounded-none relative overflow-hidden group px-8 py-4';
  const variants = {
    primary: 'bg-cream text-black hover:bg-white',
    outline: 'border border-gold text-gold hover:bg-gold hover:text-black',
    ghost: 'text-cream hover:text-gold'
  };
  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;
  const content =
  <>
      <Label className="relative z-10">{children}</Label>
      {variant === 'primary' &&
    <div className="absolute inset-0 bg-white transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0" />
    }
    </>;

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {content}
      </a>);

  }
  return (
    <motion.button
      whileTap={{
        scale: 0.98
      }}
      className={combinedClassName}
      {...props}>
      
      {content}
    </motion.button>);

}