import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";



const Experience = () => { //componente de react 
    const boxRef = useRef (null); // referencia a la caja para poder manipularla desde el codigo de tres.js de forma directa desde el codigo de react 
     useFrame((state,delta) => { //funcion que se ejecuta en cada frame del canvas  //state es el estado de la aplicacion y delta es el tiempo que ha pasado desde el ultimo frame      
       boxRef.current.rotation.y += 1*delta; //rotacion de la caja
     })   
        return (
        <>
            <ambientLight /> //luz ambiente
            <directionalLight position={[10, 10, 5]} />//luz direccional
            <OrbitControls  makeDefault/>//control de orbita
            <mesh ref= {boxRef}>//caja con referencia a la caja
            <boxGeometry args={[1, 1, 1]} /> //geometria de la caja
            <meshStandardMaterial color={"purple"} /> //material de la caja
            </mesh>//caja
            </>
        
    );
};

export default Experience;




    /*
const Experience = ({title,subtitle}) => {
    return (
        <>
        <h1 className="title">{title}</h1>
        <span> {subtitle} </span>
        </>
    )
} 
export default Experience;
*/
