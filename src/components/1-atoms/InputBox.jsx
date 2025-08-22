const InputBox = ({
  type = "text",
  placeholder = "Masukkan Data",
  ...rest
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full border-2 border-[#E7E3FC3B] bg-transparent rounded-[24px] font-normal text-[#ffffff] focus: border1 focus:border-white px-[12px] py-[12px] text-[12px] lg:px-[14px] lg:py-[20px] lg:text-[16px]"
    />
  );
};

export default InputBox;
