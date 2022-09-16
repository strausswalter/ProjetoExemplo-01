//Programação Orientada a Objeto. Antes, no React, usavam o conceito de 'class' para programar. Mas com impesilios como necessidade de usar 'this', 'constructor'...
import React, { Component } from 'react';

class Header extends Component {
    render(){
        return (
            <>
        <h2>Olá mundo no cabeçalho!!!</h2>
            <h2>Linha 2</h2>
        </>
        )
    }

}

export default Header; //exportei, dei direito de outro importar este arquivo.