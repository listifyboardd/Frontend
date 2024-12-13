interface BorderEelementProps {
  children: React.ReactNode;
}

function ItemBorderElement({ children }: BorderEelementProps) {
  return (
    <div
      className="
        font-worksans
        font-regular
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

export default ItemBorderElement;
