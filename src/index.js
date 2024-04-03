import { Canvas } from "@react-three/fiber";
import { createRoot } from "react-dom/client";
import Experience from './Experience';
import "./styles.css";



const root = createRoot(document.getElementById("root"));//root sirve para renderizar el componente en el html      

root.render( //
    <Canvas//
    camera= {//camara    
        {position: [2,0,5] //posicion de la camara
        } 
    }>        
        <Experience/>//componente
    </Canvas>    //canvas
);




//2d por fuera del canvas 
/*const root = createRoot(document.getElementById("root"));

root.render(
    <Experience 
        title="Squid Games"
        subtitle="react"
    />
);
*/