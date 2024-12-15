'use client';

import { useEffect, useState } from 'react';

interface PopUpProps {
  children: React.ReactNode;
  popupState: boolean;
}

function PopUp({ children, popupState }: PopUpProps) {
  const [open, setOpen] = useState<boolean>(popupState);

  useEffect(() => {
    setOpen(popupState);
  }, [popupState]);

  function closePopUp() {
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div
      onClick={closePopUp}
      className="
        fixed 
        top-0 
        left-0 
        w-full 
        h-full 
        bg-[#1A3C5580] 
        bg-opacity-50 
        flex 
        items-center 
        justify-center
        z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          bg-white 
          z-60
          rounded-[24px]
          w-full
          max-w-[850px]
          h-[470px]
          flex
          justify-center"
      >
        {children}
      </div>
    </div>
  );
}

export default PopUp;
