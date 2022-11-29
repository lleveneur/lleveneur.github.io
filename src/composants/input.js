function Input(doc, options){

    let inputHTML = document.createElement('input')
    inputHTML.type = "text"
    inputHTML.autofocus = true
    inputHTML.classList.add('form-control')
    doc.append(inputHTML)

    inputHTML.addEventListener("keyup", function(evt) {
        // Number 13 is the "Enter" key on the keyboard
        let key = evt.key;

        if (key === 'Enter') {
          // Cancel the default action, if needed
          evt.preventDefault();
          
            let event = new CustomEvent('button-event', {
                detail: {
                    action: 'command',
                    element: inputHTML,
                    value: inputHTML.value,
                    tableau: options.tableau
                }
            });

            document.dispatchEvent(event);

        }

    });

}

export default Input;