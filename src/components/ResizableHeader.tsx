
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface ResizableHeaderProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  id: string;
  width?: number;
  minWidth?: number;
  onWidthChange?: (id: string, width: number) => void;
}

export const ResizableHeader: React.FC<ResizableHeaderProps> = ({
  id,
  width: initialWidth,
  minWidth = 100,
  onWidthChange,
  className,
  children,
  ...props
}) => {
  const [width, setWidth] = useState<number>(initialWidth || 0);
  const [isResizing, setIsResizing] = useState(false);
  const headerRef = useRef<HTMLTableCellElement>(null);
  const startXRef = useRef<number>(0);
  const startWidthRef = useRef<number>(0);

  // Initialize width from ref on first render if not provided
  useEffect(() => {
    if (!initialWidth && headerRef.current) {
      setWidth(headerRef.current.offsetWidth);
    } else if (initialWidth) {
      setWidth(initialWidth);
    }
  }, [initialWidth]);

  // Handle mouse events for resizing
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);
    startXRef.current = e.clientX;
    startWidthRef.current = width;
    
    // Add global event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isResizing) return;
    
    const deltaX = e.clientX - startXRef.current;
    const newWidth = Math.max(minWidth, startWidthRef.current + deltaX);
    
    setWidth(newWidth);
  };

  const handleMouseUp = () => {
    setIsResizing(false);
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
    
    // Notify parent about width change for persistence
    if (onWidthChange) {
      onWidthChange(id, width);
    }
  };

  return (
    <th 
      ref={headerRef}
      className={cn(
        "h-12 px-4 text-left align-middle font-medium text-muted-foreground relative group",
        isResizing && "select-none",
        className
      )}
      style={{ width: `${width}px` }}
      {...props}
    >
      {children}
      <div
        className="absolute top-0 right-0 h-full w-4 cursor-col-resize opacity-0 group-hover:opacity-100 bg-blue-300/20 hover:bg-blue-400/40 transition-colors"
        onMouseDown={handleMouseDown}
      />
    </th>
  );
};
