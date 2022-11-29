import Bouton from "../src/composants/bouton.js";
import Events from "./evenements/events.js";

function Navbar(doc, options) {

    let sidebarHtml = document.createElement('div')
    sidebarHtml.classList.add('container__navbar')
    doc.append(sidebarHtml)

    Bouton(sidebarHtml, {
        action: 'home',
        url: 'https://img.icons8.com/fluency/250/000000/home.png',
        width: 40
    });

    Bouton(sidebarHtml, {
        action: 'service',
        url: 'https://img.icons8.com/plasticine/250/000000/service.png',
        width: 45
    });

    Bouton(sidebarHtml, {
        action: 'formation',
        url: 'https://img.icons8.com/external-filled-outline-lima-studio/250/000000/external-career-motivation-filled-outline-lima-studio-4.png',
        width: 45
    });

    Bouton(sidebarHtml, {
        action: 'skills',
        url: 'https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/250/000000/external-brain-engineering-icongeek26-linear-colour-icongeek26.png',
        width: 45
    });

    Bouton(sidebarHtml, {
        action: 'contact',
        url: 'https://img.icons8.com/bubbles/250/000000/information.png',
        width: 45
    });

}

function Body(doc, options){

    let bodyHtml = document.createElement('div')
    bodyHtml.classList.add('container__body')
    doc.append(bodyHtml)

    createBodyNavbar(bodyHtml, {
        titre: options.titre
    })
    createBodyContenu(bodyHtml, {
        contenu: options.contenu
    })

    function createBodyNavbar(docx, options){

        let bodyNavbarHTML = document.createElement('div')
        bodyNavbarHTML.classList.add('container__body_navbar')
        docx.append(bodyNavbarHTML)

        let bodyNavbarColonneUnHTML = document.createElement('div')
        bodyNavbarColonneUnHTML.classList.add('container__body_navbar-colonneUn')
        let h2BodyHTML = document.createElement('h2')
        h2BodyHTML.append(options.titre)
        bodyNavbarColonneUnHTML.append(h2BodyHTML)
        bodyNavbarHTML.append(bodyNavbarColonneUnHTML)

        let bodyNavbarColonneDeuxHTML = document.createElement('div')
        bodyNavbarColonneDeuxHTML.classList.add('container__body_navbar-colonneDeux')
        bodyNavbarColonneDeuxHTML.innerHTML = `
        <div>
            <input type="checkbox" class="checkbox" id="checkbox">
            <label for="checkbox" class="checkbox-label">
                <i class="fas fa-moon"></i>
                <i class="fas fa-sun"></i>
                <span class="ball"></span>
            </label>
        </div>`
        bodyNavbarHTML.append(bodyNavbarColonneDeuxHTML)

    }

    function createBodyContenu(docx, options){

        let bodyContenuHTML = document.createElement('div')
        bodyContenuHTML.classList.add('container__body_contenu')
        bodyContenuHTML.id = "contenu__body_contenu"
        bodyContenuHTML.innerHTML = options.contenu
        docx.append(bodyContenuHTML)

    }

}

function evenements(doc, options){

    Events(doc, {})

}

function mode(doc, options){

    const checkbox = document.getElementById("checkbox")
    let mode = localStorage.getItem('mode')

    if(mode == null){
        localStorage.setItem('mode', 'darkmode')
        let headID = document.getElementsByTagName('head')[0];
        let link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
    
        //link.href = 'http://fonts.googleapis.com/css?family=Oswald&effect=neon';
        link.href = 'darkmode.css'
        headID.appendChild(link);
    
    } else {
    
        if(mode == 'lightmode'){
            checkbox.checked = false
            let headID = document.getElementsByTagName('head')[0];
            let link = document.createElement('link');
            link.type = 'text/css';
            link.rel = 'stylesheet';
        
            //link.href = 'http://fonts.googleapis.com/css?family=Oswald&effect=neon';
            link.href = 'lightmode.css'
            headID.appendChild(link);
        } else if(mode == 'darkmode'){
            checkbox.checked = true
            let headID = document.getElementsByTagName('head')[0];
            let link = document.createElement('link');
            link.type = 'text/css';
            link.rel = 'stylesheet';
        
            //link.href = 'http://fonts.googleapis.com/css?family=Oswald&effect=neon';
            link.href = 'darkmode.css'
            headID.appendChild(link);
        }
    
    }
    
    checkbox.addEventListener("change", () => {
    
        if(checkbox.checked) {
            localStorage.setItem('mode', 'darkmode')
        } else {
            localStorage.setItem('mode', 'lightmode')
        }
    
        let mode = localStorage.getItem('mode')
    
        if(mode == 'lightmode'){
            let headID = document.getElementsByTagName('head')[0];
            let link = document.createElement('link');
            link.type = 'text/css';
            link.rel = 'stylesheet';
        
            //link.href = 'http://fonts.googleapis.com/css?family=Oswald&effect=neon';
            link.href = 'lightmode.css'
            headID.appendChild(link);
        } else if(mode == 'darkmode'){
            let headID = document.getElementsByTagName('head')[0];
            let link = document.createElement('link');
            link.type = 'text/css';
            link.rel = 'stylesheet';
        
            //link.href = 'http://fonts.googleapis.com/css?family=Oswald&effect=neon';
            link.href = 'darkmode.css'
            headID.appendChild(link);
        }
    
    })

}


export {
    Navbar,
    Body,
    evenements,
    mode
}