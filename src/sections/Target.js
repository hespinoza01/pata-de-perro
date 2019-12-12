import React from 'react';
import Map from "../components/Map";

import './Target.css';


function Target() {
    return(
        <section className='displayDiv body'>
            <div className='leftTar'>
                <div className='card'>
                    <label className='valor'>Valoracion</label>
                    <h2>Esto es una prueba</h2>
                    <p>Aqui tratando de hacer un proyecto en una noche</p>
                    
                    <a  href="https://vosdaledevelopers.com/equipo" target="_blank" className='btn-pag'>Mas informacion</a>
                </div>
            </div>
            <div className='rightMap'>
                <Map></Map>
            </div>
        </section>
    );
}

export default Target;