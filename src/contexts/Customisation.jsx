import { createContext, useContext, useState } from "react";

const CustomisationContext = createContext({});

export const cushionColors = [
    {
        color:"#683434",
        name:"Brown"
    },
    {
        color:"#013220",
        name:"Green"
    },
    {
        color:"#24249c",
        name:"Blue"
    },
    {
        color:"#adacac",
        name:"Grey"
    },
    {
        color:"#222222",
        name:"Black"
    },
    {
        color:"#808080",
        name:"Silver"
    }
];

export const bodyColors = [
    {
        color:"#683434",
        name:"Brown"
    },
    {
        color:"#013220",
        name:"Green"
    },
    {
        color:"#24249c",
        name:"Blue"
    },
    {
        color:"#adacac",
        name:"Grey"
    },
    {
        color:"#222222",
        name:"Black"
    },
    {
        color:"#808080",
        name:"Silver"
    }
];
export const threadColors = [
    {
        color:"#683434",
        name:"Brown"
    },
    {
        color:"#013220",
        name:"Green"
    },
    {
        color:"#24249c",
        name:"Blue"
    },
    {
        color:"#adacac",
        name:"Grey"
    },
    {
        color:"#222222",
        name:"Black"
    },
    {
        color:"#808080",
        name:"Silver"
    }
];

export const CameraModes ={
    'FREE' :'FREE',
    'Top': 'Top',
    'Middle':'Middle',
    'Back':'Back'
}

export const CustomisationProvider = (props)=>{
    const [cushionColor, setCushionColor] = useState(cushionColors[4].color);
    const [bodyColor, setBodyColor] = useState(bodyColors[1].color);
    const [threadColor, setThreadColor] = useState(threadColors[0].color);
    const [embedText,setEmbedText]=useState("Gaming");
    const [cameraMode,setCameraMode] = useState(CameraModes.FREE);
    const [intro,setIntro] = useState(true);

    return (<CustomisationContext.Provider value={{
        cushionColor,
        setCushionColor,
        bodyColor,
        setBodyColor,
        threadColor, 
        setThreadColor,
        embedText,
        setEmbedText,
        cameraMode,
        setCameraMode,
        intro,
        setIntro
    }}>
        {props.children}
    </CustomisationContext.Provider>
    );
};

export const useCustomisation = ()=>{
    const context = useContext(CustomisationContext);
    return context;
};