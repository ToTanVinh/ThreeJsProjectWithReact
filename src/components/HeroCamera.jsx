import React, {useRef} from 'react'
import {useFrame} from "@react-three/fiber";
import { easing } from "maath"
const HeroCamera = ({children, isMobile}) => {
    const groupRef = useRef(null);

    useFrame((state, delta)=>{
        easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);
        if (!isMobile) {
            easing.dampE(groupRef.current.rotation, [state.pointer.y/3, -state.pointer.x/5, 0], 0.25, delta)
        }
    })

    return (
        <group ref={groupRef}>{children} scale={isMobile ? 1 : 1.3}</group>
    )
}
export default HeroCamera
