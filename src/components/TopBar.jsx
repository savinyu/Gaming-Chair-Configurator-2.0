
const Topbar = () => {
    return (
      <>
      <div className="flex justify-between absolute top-0 left-0 z-10 w-full py-8 px-10 select-none">
        <div className="w-2/5 ">
          <div className="font-LogoFont">
            FRAGMENT
          </div>
          <div className="font-space-grotesk font-extrabold">
            3D Product Configurators
          </div>
        </div>
        <div className="flex flex-col justify-between w-[393px] mr-[62px]">
          <div className="flex justify-between w-96">
            <div className="flex flex-col justify-center mr-[20px]  font-bold text-xl font-space-grotesk text-head-green">
              For businesses
            </div>
            <div className="bg-bold-blue text-white font-bold text-[20px] font-space-grotesk p-3 px-6 rounded-full text-center">
              Build your own
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
  
  export default Topbar