import { Suspense } from "react";
import {Float} from "@react-three/drei";
import { Chair} from "./Chair";

export default function Experience(){
    
    return<>
        <Suspense fallback={null}>
            <Float 
                floatIntensity={0}
                rotationIntensity={0}
                speed={1.5}
            >
            <mesh scale={7} position={[0,-4,0]} >
                <Chair/>
            </mesh>
            </Float>
        </Suspense>
    </>
}