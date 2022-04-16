
function component() {
    const element = document.createElement('div');
    element.innerHTML = [ 'Hello', new Date(), Math.random(), 'world' ].join( ' ' );
    return element;
}


document.body.appendChild( component() );