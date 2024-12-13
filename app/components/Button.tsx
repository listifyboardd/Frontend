interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  paddingX: number;
}

function Button({ children, onClick, paddingX }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
      text-white
      text-[20px]
      bg-[#1A3C55]
      font-worksans
      font-regular
      rounded-[24px]
      py-2.5
    `}
      style={{
        paddingLeft: `${paddingX}px`,
        paddingRight: `${paddingX}px`,
      }}
    >
      {children}
    </button>
  );
}

export default Button;
