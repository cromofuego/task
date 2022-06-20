import React, { useState } from 'react';
import '../body.css';
import './Task.css';


function Task( {todoComplete, todoDescriptionTask, onChange, onDelete}) {

  let task;
  if(todoComplete){
    task = 'Tarea Completada';    
  } else {
    task = '¡Trabajando en Ello!';
  }


    return (
        <React.Fragment>
            <div className='main-container_li'>
                <div className='li-container_top_span_p' >
                    <span 
                        onClick={() => onChange(todoDescriptionTask)}
                        className={`span ${todoComplete && 'span--active '}`}
                        ></span>
                    <p className='li-container_top_span_p_p'>{task}</p>
                </div>
                <div className={`li-container_middle_p ${todoComplete && 'li-p--active'} `}>
                    <p>
                        {todoDescriptionTask}
                    </p>
                </div>
                <div className='li-container_bottom_buttons'>
                    <button>
                        Editar
                    </button>
                    <div className='li-container_bottom_buttons_delete_add ' >
                        <button 
                            onClick={() => onDelete(todoDescriptionTask)}
                        >
                            Eliminar
                        </button>
                        <button>
                            Agregar
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export { Task };