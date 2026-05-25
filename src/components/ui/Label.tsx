import React from 'react';
interface LabelProps {
  children: React.ReactNode;
  className?: string;
}
export function Label({ children, className = '' }: LabelProps) {
  return (
    <span
      className={`text-[10px] uppercase tracking-widest font-medium ${className}`}>
      
      {children}
    </span>);

}