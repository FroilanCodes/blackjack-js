import { pedirCarta, valorCarta, crearCartaHTML } from "./";


/**
 * turno de la computadora
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML elementos HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora elemento HTML para mostrar las cartas de la computadora
 * @param {Array<String>} deck 
 * @return {void}
 */

export const turnoComputadora = ( puntosMinimos,puntosHTML,divCartasComputadora, deck ) => {

    if(!puntosMinimos) throw new Error('puntosMinimos es obligatorio');
    if(!puntosHTML) throw new Error('puntosHTML es obligatorio');
    

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
    
        const imgCarta = crearCartaHTML( carta );
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}