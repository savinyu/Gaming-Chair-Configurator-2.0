import { useState } from "react"
import { CameraModes, useCustomisation } from "../contexts/Customisation";

const Checkbox = ({price,setPrice}) => {
    const {setEmbedText,setCameraMode} = useCustomisation();
    const [engraving,setEngraving] = useState(false);
    const handleCheckbox =(event)=>{
        const checked = event.target.checked;
        setEngraving(checked);
        if(checked){
            setPrice("16,498");
        }else{
            setPrice("14,999");
            setEmbedText("");
            setCameraMode(CameraModes.Back);
        }
    }
  return (
    <>
    <div className="font-space-grotesk border border-checkboxBorder mt-[12px] font-bold text-14px p-[12px] rounded-lg overflow-scroll">
        <div className="flex justify-between">
            <div className="flex">
                <div>
                    <input type="checkbox" className="w-6 h-6 mb- focus:outline-none" 
                        onChange={handleCheckbox}
                    />
                </div>
                <div className="ml-2">
                    Add Engraving
                </div>
            </div>
            <div className="text-textcolor text-opacity-60 text-[16px]">
                +INR 1499
            </div>
        </div>
        {engraving && 
        <div className="border border-dashed rounded-lg mt-[12px]">
            <input type="text" placeholder="Embed Text" className="p-1 pl-6 focus:outline-none"
                checked={engraving}
                onChange={(e)=>{
                    setEmbedText(e.target.value);
                    setCameraMode(CameraModes.Top);
                }}/>
        </div>
        }
    </div>
    
    </>
  )
}


export default Checkbox