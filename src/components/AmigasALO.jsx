// Se importa el Hook
import React from "react";
import '../css/AmigasALO.css'

function listadoAmigasALO(props){

    return(
        <div className="containerAmigasALO">
            <img className="img-listado" src={require(`../img/${props.imagen}`)} alt="Amiguitas de mi colegon el nano"/>
            <div className="containerDescription">
                <p className='name'>{props.nombre}</p>
                <p className='status'>{props.cargo} en {props.empresa}</p>
                <p className='description'>"{props.descripcion}"</p>
            </div>
        </div>
    );
}

export default listadoAmigasALO;