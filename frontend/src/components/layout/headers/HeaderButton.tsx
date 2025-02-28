interface HeaderButtonProps {
  name: string;
}

const HeaderButton = ({ name }: HeaderButtonProps) => {
  return (
    <button
      className={
        "font-phil text-xl text-bold p-2 m-3 w-max cursor-pointer hover:bg-white rounded-lg"
      }
    >
      {name}
    </button>
  );
};

export default HeaderButton;
