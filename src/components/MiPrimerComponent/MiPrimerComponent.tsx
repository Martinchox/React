// un componente es un bloque de codigo reutilizable el cual se puede usar en varias partes de la aplicación 

import { FC } from "react"

// para declarar interface 
interface IPropsMiPrimerComponent {
    text: string;
    color: string;
    fontSize?: number;  //con el signo de pregunta hago que no sea obligatorio usar esta variable 
}


// uso rafc para declarar
export const MiPrimerComponent : FC<IPropsMiPrimerComponent> = ({
    text, 
    color, 
    fontSize 
}) => {
  return (
    <div style = {{color: `${color}`, fontSize: `${fontSize}rem`}}>
        <p>{text}</p>
        </div>  
  )
}
