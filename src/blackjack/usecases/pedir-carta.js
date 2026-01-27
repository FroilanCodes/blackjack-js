// Esta función me permite tomar una carta

/**
 * 
 * @param {Array<String>} deck es un arreglo de string
 * @returns {String} retorna la carta del deck
 */

export const pedirCarta = (deck) => {

    if(!deck || deck.length === 0) throw new Error('El deck es obligatorio y no puede estar vacio');



    const carta = deck.pop();
    return carta;
}




