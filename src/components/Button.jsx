import { CameraModes, useCustomisation } from "../contexts/Customisation";

const Button = ({ name, color, category }) => {
  const { cushionColor, bodyColor, threadColor, setCushionColor, setBodyColor, setThreadColor,setCameraMode } = useCustomisation();

  const handleClick = () => {
    if (category === 'body') {
      setBodyColor(color);
      setCameraMode(CameraModes.Back);
    } 
    else if (category === 'cushion') {
      setCushionColor(color);
      setCameraMode(CameraModes.Middle);
    }
    else if (category === 'thread') {
      setThreadColor(color);
      setCameraMode(CameraModes.Back);
    }
  };

  const isSelected =
    (category === 'body' && bodyColor === color) ||
    (category === 'cushion' && cushionColor === color) ||
    (category === 'thread' && threadColor === color);

  return (
    <button className="w-14 h-18 flex-col justify-start items-center gap-1 inline-flex px-2 my-2" onClick={handleClick}>
      <div className={`w-[48px] h-[48px] relative rounded-full border-2 border-buttonborder bg-${name}`}>
        {isSelected && <img src="/tick.svg" alt="tick" className="absolute mt-6 ml-8" />}
      </div>
      <div className={`text-black text-[12px] font-bold font-space-grotesk leading-normal`}>{name}</div>
    </button>
  );
};

export default Button;
