import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
        <header>
        <img src="https://avatars2.githubusercontent.com/u/44441254?s=460&u=9b9fad4dfdf539853131f359812f98f65be72205&v=4" alt="Andre Torquato"/>    
        <div>
            <strong>André Torquato</strong>
            <span>Fisica</span>
        </div>
        </header>   
        <p>
            Andre Andre Andre
            <br/> <br/>
            Andre Andre Andre
            Andre Andre Andre
        </p>
        <footer>
            <p>
                Preço/Hora
                <strong>R$ 1000,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato
            </button>
        </footer>
        </article>  
    );
}

export default TeacherItem;