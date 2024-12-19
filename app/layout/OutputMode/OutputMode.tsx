'use client';
import { useState } from 'react';
import Switcher from '@/app/components/Switcher';

interface OutputModeProps {
  children: React.ReactNode;
  title: string;
  useSwitcher: boolean;
}

function OutputMode({ children, title, useSwitcher }: OutputModeProps) {
  const [mode, setMode] = useState<string>('');

  return (
    <div className="mb-14">
      {useSwitcher ? (
        <div className="">
          <Switcher value={mode} onChange={setMode} />
        </div>
      ) : null}
      <div className="font-kreadon text-4xl font-semibold mb-8">{title}</div>
      {mode == 'list' ? (
        <div className="grid gap-y-6 m-auto max-w-[846px]">{children}</div>
      ) : mode == 'grid' ? (
        <div className="grid gap-y-6 gap-x-8 grid-cols-2 m-auto max-w-[1056px]">
          {children}
        </div>
      ) : null}
    </div>
  );
}

export default OutputMode;
