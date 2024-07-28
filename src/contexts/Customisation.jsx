import { createContext, useContext, useState } from "react";

const CustomisationContext = createContext({});

export const cushionColors = [
    {
        name:"Black",
        color:"#222222"
    },
    {
        name:"Blue",
        color:"#24249c"
    },
    {
        name:"Brown",
        color:"#683434"
    },
    {
        name:"Silver",
        color:"#808080"
    },
    {
        name:"Green",
        color:"#013220"
    },
    {
        name:"White",
        color:"#ffffff"
    }
];

export const bodyColors = [
    {
        name:"Black",
        color:"#222222"
    },
    {
        name:"Blue",
        color:"#24249c"
    },
    {
        name:"Brown",
        color:"#683434"
    },
    {
        name:"Silver",
        color:"#808080"
    },
    {
        name:"Green",
        color:"#013220"
    },
    {
        name:"White",
        color:"#ffffff"
    }
];
export const threadColors = [
    {
        name:"Black",
        color:"#222222"
    },
    {
        name:"Blue",
        color:"#24249c"
    },
    {
        name:"Brown",
        color:"#683434"
    },
    {
        name:"Silver",
        color:"#808080"
    },
    {
        name:"Green",
        color:"#013220"
    },
    {
        name:"White",
        color:"#ffffff"
    }
];

export const CameraModes ={
    'FREE' :'FREE',
    'Top': 'Top',
    'Middle':'Middle',
    'Back':'Back'
}

export const CustomisationProvider = (props)=>{
    const [cushionColor, setCushionColor] = useState(cushionColors[0].color);
    const [bodyColor, setBodyColor] = useState(bodyColors[2].color);
    const [threadColor, setThreadColor] = useState(threadColors[5].color);
    const [embedText,setEmbedText]=useState("");
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