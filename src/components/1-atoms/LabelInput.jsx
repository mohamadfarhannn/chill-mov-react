const LabelInput = ({
  htmlFor = "username",
  textColor = "white",
  children = "ini label",
}) => {
  const baseStyle = "text-[10px] font-medium lg:text-[18px]";
  const textColorStyles = {
    white: "text-[#FFFFFF]",
    black: "text-[#000000]",
    gray: "text-[#C1C2C4]",
  };
  const combinedStyle = `${baseStyle} ${textColorStyles[textColor]}`;
  return (
    <label htmlFor={htmlFor} className={combinedStyle}>
      {children}
    </label>
  );
};

export default LabelInput;
