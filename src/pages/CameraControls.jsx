import { CameraControls, OrbitControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { CameraModes, useCustomisation } from "../contexts/Customisation"
import { useRef} from "react"



const cameraPositions = {
    [CameraModes.Top]:{
        position: new THREE.Vector3(0,4,2),
        target: new THREE.Vector3(0,3,0)
    },
    [CameraModes.Middle]:{
        position: new THREE.Vector3(0,2,5),
        target: new THREE.Vector3(0,1,0)
    },
    [CameraModes.Back]:{
        position: new THREE.Vector3(0,0,9),
        target: new THREE.Vector3(0,0,0)
    }
}
export default function CameraComponent(){
    const { cameraMode, setCameraMode} = useCustomisation();
    const orbitControls = useRef();
    
    useFrame((state,delta)=>{
        if(cameraMode == CameraModes.FREE){
            return;
        }

        state.camera.position.lerp(cameraPositions[cameraMode].position, 2 * delta);
        orbitControls.current.target.lerp(cameraPositions[cameraMode].target, 2 * delta);
    })
    return(
        <>
            <OrbitControls 
                ref={orbitControls}
                onStart={()=>{
                    setCameraMode(CameraModes.FREE)
                }}
                makeDefault
                enabled={true}
                enableDamping={true}
                enablePan={false}
                enableZoom={true}
                maxPolarAngle={Math.PI/1.6} 
                minPolarAngle={Math.PI/8}
                maxDistance={10}
                minDistance={2}
            />
        </>
    )
}