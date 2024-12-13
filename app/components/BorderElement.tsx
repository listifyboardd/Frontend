interface BorderEelementProps {
  children: React.ReactNode;
}

function BorderElement({ children }: BorderEelementProps) {
  return (
    <div
      className="
        rounded-3xl
				flex
				items-center
				justify-center
				border
				border-[#FFFFFF]
				text-white
				px-4
				py-2.5
      "
    >
      {children}
    </div>
  );
}

export default BorderElement;
