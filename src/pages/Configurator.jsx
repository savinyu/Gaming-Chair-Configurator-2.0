import { useState } from "react"
import Button from "../components/Button"
import Checkbox from "../components/Checkbox"
import Topbar from "../components/TopBar"
import { bodyColors, cushionColors, threadColors } from "../contexts/Customisation"

const Configurator = () => {
  const [price,setPrice] = useState("14,999");
  const [quantity,setQuantity] = useState(1);
  if(quantity>5)setQuantity(5);
  else if(quantity<1)setQuantity(1);
  return (
    <>
    <Topbar/>
    <div className="flex flex-col justify-center absolute h-[810px] w-[440px] top-24 right-20 z-10 bg-white rounded-xl border border-grayBorder overflow-scroll select-none">
      <div className="h-full mx-6 ">
        <div className=" bg-head-green w-36 bg-opacity-15 rounded-3xl px-3.5 py-1 mt-[32px] ">
          <div className=" font-space-grotesk text-head-green font-bold z-10">
            Personalization
          </div>
        </div>
        <div className="font-space-grotesk font-bold mt-2 text-[28px] a">
          Configure Gaming Chair
        </div>
        <div className="font-space-grotesk font-bold text-[16px] text-textcolor text-opacity-60 mt-1">
          Configure your gaming chair. Our intuitive configurator allows you to customize your chair on your
          choices of colors of body, cushion and thread.
        </div>
        <div className="mt-[10px] text-[20px]">
          <div className="font-space-grotesk font-bold">
            Body
          </div>
          <div className="flex justify-around">
            {bodyColors.map(({name,color})=>
              <Button name={name} color={color} category={'body'} key={name}/>
              )}
          </div>
        </div>
        <div>
          <div className="font-space-grotesk font-bold text-[20px] mt-[10px]">
            Cushion
          </div>
          <div className="flex justify-around">
            {cushionColors.map(({name,color})=>
              <Button name={name} color={color} category={'cushion'} key={name}/>
              )}
          </div>
        </div>
        <div>
          <div className="font-space-grotesk font-bold text-[20px] mt-[10px]">
            Thread
          </div>
          <div className="flex justify-around">
            {threadColors.map(({name,color})=>
              <Button name={name} color={color} category={'thread'} key={name}/>
              )}
          </div>
        </div>
        <Checkbox price={price} setPrice={setPrice}/>
        <div className="flex justify-between font-space-grotesk font-bold my-4">
          <div className="flex flex-col justify-center text-[24px]">
            INR {price}
          </div>
          <div className="flex">
            <div className="mx-2 flex flex-col justify-center text-[20px]">
              {quantity}
            </div>
            <div className="flex mt-1">
              <button className="w-8 h-8 bg-gray rounded-full mx-1 "
                onClick={()=>setQuantity(quantity-1)}>
                <div className="flex justify-center scale-150 pb-0.5 opacity-50">
                  -
                </div>
              </button>
              <button className="w-8 h-8 bg-gray rounded-full mx-1"
                onClick={()=>setQuantity(quantity+1)}>
                <div className="flex justify-center scale-150 opacity-50">
                  +
                </div>
              </button>
            </div>
          </div>
        </div>
        <div>
          <button className="w-full h-[58px] text-center bg-bold-blue text-white font-space-grotesk font-bold text-[20px] p-3 px-6 rounded-full">
            Buy Now
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Configurator