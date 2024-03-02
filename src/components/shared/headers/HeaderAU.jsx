import { Button } from "@material-tailwind/react";

const HeaderAU = () => {
  return (
    <>
      <div className="min-w-[183px] max-w-[183px] h-[45px] grid grid-cols-2 bg-[#00000033] rounded-[10px] py-1">
        <Button className="shadow-none hover:shadow-none w-full h-full text-white bg-transparent normal-case font-normal text-[15px] font-bakbak-one p-0 m-0 flex justify-center items-center border-r border-[#373737] rounded-none">
          Account
        </Button>
        <Button className="shadow-none hover:shadow-none w-full h-full text-white bg-transparent normal-case font-normal text-[15px] font-bakbak-one p-0 m-0 flex justify-center items-center rounded-none">
          Upload
        </Button>
      </div>
    </>
  );
};

export default HeaderAU;
