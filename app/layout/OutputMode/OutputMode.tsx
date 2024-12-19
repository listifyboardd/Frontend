'use client';
import React from 'react';
import { useState } from 'react';
import Switcher from '@/app/components/Switcher';

interface OutputModeProps {
  children: React.ReactNode;
  title: string;
  useSwitcher: boolean;
}

function OutputMode({ children, title, useSwitcher }: OutputModeProps) {
  const [mode, setMode] = useState<string>('grid');

  return (
    <div className="mt-32">
      {useSwitcher ? (
        <div className="">
          <Switcher value={mode} onChange={setMode} />
        </div>
      ) : null}
      <div className="container font-kreadon text-4xl font-semibold !mb-8">
        {title}
      </div>
      {mode == 'list' ? (
        <div className="grid gap-y-6 m-auto max-w-[846px]">{children}</div>
      ) : mode == 'grid' ? (
        <div className="grid gap-y-6 gap-x-8 grid-cols-2 m-auto max-w-[1056px] h-full">
          {React.Children.map(children, (child) => (
            <div className="h-[516px]">{child}</div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default OutputMode;
