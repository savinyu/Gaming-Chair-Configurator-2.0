import {Canvas, useLoader} from '@react-three/fiber'
import { ContactShadows,
  Environment, 
  Lightformer, 
  PresentationControls,
 } from '@react-three/drei'
import {Perf} from 'r3f-perf'
import Experience from './pages/Experience'
import { CustomisationProvider } from './contexts/Customisation'
import CameraControls from './pages/CameraControls'
import './App.css'
import { TextureLoader } from 'three'
import Configurator from './pages/Configurator'

function App() {
  const texture = useLoader(TextureLoader,'/bg.png');
  return (
    <CustomisationProvider>
      <div className="App">
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

          <PresentationControls
            enabled={false}
            global={true}
            cursor={true}
            config={ { mass: 2, tension: 400 } }
            snap={ { mass: 3, tension: 400 } }
          >
          {/* Main Model  */}
          <Experience/>

          </PresentationControls>

          {/* Shadows  */}
          <ContactShadows 
                  position-x={0}
                  position-y={-4}
                  scale={20}
                  opacity={1}
                  blur={2.4}   
        />

        </Canvas>

        {/* Configurator  */}
        <Configurator/>
        
        
        
      </div>
    </CustomisationProvider>
  )
}

export default App
