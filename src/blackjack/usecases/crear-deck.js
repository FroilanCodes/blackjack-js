// Esta función crea un nuevo deck

import _ from 'underscore';

// ese doc se hace con '/** */', en mitad haciendolo apretas tab y se autocompleta
//el Array tiene que ir con A mayus.

/**
 * 
 * @param {Array<string>} tiposDeCarta 
 * @param {Array<string>} tiposEspeciales 
 * @returns {Array} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if (!tiposDeCarta || tiposDeCarta.length === 0)
        throw new Error('TiposDeCarta es obligatorio como un arreglo de string');
    
    if (!tiposEspeciales || tiposEspeciales.length === 0) 
        throw new Error('TiposEspeciales es obligatorio como un arreglo de string');



    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}


//export default crearDeck;