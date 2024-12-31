import React from 'react';

export const Avatar = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`}
  >
    {children}
  </div>
);

export const AvatarImage = ({
  src,
  alt = '',
  className,
}: {
  src: string;
  alt?: string;
  className?: string;
}) => (
  <img
    src={src}
    alt={alt}
    className={`aspect-square h-full w-full object-cover ${className}`}
  />
);

export const AvatarFallback = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`flex h-full w-full items-center justify-center rounded-full bg-gray-100 ${className}`}
  >
    {children}
  </div>
);
