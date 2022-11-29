function Bouton(doc, options){

    let boutonHTML = document.createElement('img')
    boutonHTML.classList.add('button')
    boutonHTML.src = options.url
    boutonHTML.width = options.width
    doc.append(boutonHTML)

    boutonHTML.addEventListener('click', function() {
        
        let event = new CustomEvent('button-event', {
            detail: {
                action: options.action,
            }
        });

        document.dispatchEvent(event);

    })

}

export default Bouton;