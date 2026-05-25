import React, { useEffect, useState } from 'react';
export function CustomCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  const [isHovering, setIsHovering] = useState(false);
  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable =
      target.tagName.toLowerCase() === 'a' ||
      target.tagName.toLowerCase() === 'button' ||
      target.closest('a') ||
      target.closest('button') ||
      target.classList.contains('interactive');
      setIsHovering(!!isClickable);
    };
    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', updateHoverState);
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', updateHoverState);
    };
  }, []);
  // Don't render on touch devices
  if (
  typeof window !== 'undefined' &&
  window.matchMedia('(pointer: coarse)').matches)
  {
    return null;
  }
  return (
    <div
      className={`custom-cursor hidden md:block ${isHovering ? 'hover' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`
      }} />);


}