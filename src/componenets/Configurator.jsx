import { useState } from 'react';
import {  CameraModes,
    cushionColors,
    bodyColors,
    threadColors,
    useCustomisation
    } from '../contexts/Customisation.jsx'

export default function Scene(){
    return  <Configurator/>
}

const Configurator = () =>{
    
    const {cushionColor, setCushionColor, bodyColor, setBodyColor, threadColor,setThreadColor,setEmbedText,cameraMode, setCameraMode,setIntro} = useCustomisation();

    function openHideBig(e) {
		const p = e.currentTarget.nextElementSibling
		e.currentTarget.parentNode.classList.toggle('active')
		p.offsetHeight === 0 ? (p.style.maxHeight = `200px`) : (p.style.maxHeight = 0)
	}
	function openHide(e) {
		const p = e.currentTarget.nextElementSibling
		e.currentTarget.parentNode.classList.toggle('active')
		p.offsetHeight === 0 ? (p.style.maxHeight = `50px`) : (p.style.maxHeight = 0)
	}


    return <>
    <main>
        <div className='container'>
            <div>
                <div className='title-container'>
                    <h2 onClick={()=>setIntro(true)}>PLAY HARD, SIT COMFORTABLY!</h2>
                    <p>YOUR SEAT YOUR STYLE</p>
                </div>
                <div className='grid'>
                    <hr />
                    <div className='content-container'>
                        <div onClick={openHideBig}>
                            <div>
                                <h3>Body</h3>
                            </div>
                        </div>
                        <div className='color-container' >
                            {bodyColors.map((value,index) => (
                                <button
                                    key={index}
                                    className={`color-${value.name}${value.color == bodyColor ? ' active' : ''}`}
                                    onClick={() => {
                                        setBodyColor(value.color);
                                        setCameraMode(CameraModes.Back);
                                    }}
                                >
                                    {value.name}
                                </button>
                            ))}
                        </div>
                    </div>
                    <hr />
                    <div className='content-container'>
                        <div onClick={openHideBig}>
                            <div>
                                <h3>Cushions</h3>
                            </div>
                        </div>
                        <div className='color-container' >
                            {cushionColors.map((value,index) => (
                                <button
                                    key={index}
                                    className={`color-${value.name}${value.color == cushionColor ? ' active' : ''}`}
                                    onClick={() => {
                                        setCushionColor(value.color);
                                        setCameraMode(CameraModes.Middle);
                                    }}
                                >
                                    {value.name}
                                </button>
                            ))}
                        </div>
                    </div>
                    <hr />
                    <div className='content-container'>
                        <div onClick={openHideBig}>
                            <div>
                                <h3>Thread</h3>
                            </div>
                        </div>
                        <div className='color-container'>
                            {threadColors.map((value,index) => (
                                <button
                                    key={index}
                                    className={`color-${value.name}${value.color == threadColor ? ' active' : ''}`}
                                    onClick={() => {
                                        setThreadColor(value.color);
                                        setCameraMode(CameraModes.Back);
                                    }}
                                >
                                    {value.name}
                                </button>
                            ))}
                        </div>
                    </div>
                    <hr/>
                    <div className='content-container'>
                        <div onClick={openHideBig}>
                            <div>
                                <h3>Embed</h3>
                            </div>
                        </div>
                        <div className='color-container'>
                            <input 
                                className='input' 
                                type="text" 
                                placeholder='Embed Text'
                                onChange={(e)=>{
                                    setEmbedText(e.target.value);
                                    setCameraMode(CameraModes.Top);
                                }}    
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    </>}


