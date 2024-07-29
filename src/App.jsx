import {Canvas,
  useLoader} from '@react-three/fiber'
import { AccumulativeShadows, ContactShadows,
  Environment, 
  Lightformer,
 } from '@react-three/drei'
import {Perf} from 'r3f-perf'
import Experience from './pages/Experience'
import { CustomisationProvider } from './contexts/Customisation'
import CameraControls from './pages/CameraControls'
import { TextureLoader } from 'three'
import Configurator from './pages/Configurator'
import './App.css'


function App() {
  const texture = useLoader(TextureLoader,'/bg.png');
  return (
    <CustomisationProvider>
      <div className="App" >
        <Canvas 
          camera={{
            fov:60,
            position:[0,0,10],
            near:0.1,
            far:100
          }} 
        >   
          {/* Background  */}
          <color attach="background" args={['#F5F5F5']}  /> 
          <primitive attach="background" object={texture} />

          {/* Performance Usage  */}
          {/* <Perf position="bottom-left" /> */}

          {/* Lighting */}
          <ambientLight intensity={1}/>
          {/* <directionalLight position={[0,10,5]} intensity={1}/> */}
          <Environment  environmentIntensity={0.2}>
          <Lightformer form='ring' intensity={20} color={'white'} position={[0,8,10]} scale={[10,10]} rotation={[Math.PI/2,0,0]}/>
          </Environment>
          <CameraControls/>

          {/* Main Model  */}
          <Experience/>

          {/* Shadows  */}
          <ContactShadows 
            position-x={0}
            position-y={-4}
            scale={10}
            opacity={1}
            blur={2.4}   
          />
        </Canvas>
      </div>
      {/* Configurator  */}
      <Configurator/>

      <Canvas style={{width:'20vw',height:'100vh',float:'right'}}>
        <color attach="background" args={['#ffffff']} />
        <primitive attach="background" object={texture} />
      </Canvas>
    </CustomisationProvider>
  )
}

export default App
