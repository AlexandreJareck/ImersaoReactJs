import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
        <header>
            <img src="https://avatars1.githubusercontent.com/u/49285794?s=400&u=ea4ddbb8ff30286480a713882ff8c8064c54f852&v=4" alt="Alexandre Jareck"/>
            <div>
                <strong>Alexandre Jareck</strong>
                <span>Algoritmo</span>
            </div>
        </header>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        </p>
        <footer>
            <p>
                Preço/Hora
                <strong>R$80,00</strong>
                <button type="button">
                    <img src={whatsappIcon} alt=""/>
                    Entrar em contato
                </button>
            </p>
        </footer>
    </article>
    );
}

export default TeacherItem;