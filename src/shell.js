import Article from "./composants/article.js"
import Bouton from "./composants/bouton.js"
import Input from "./composants/input.js"
import Events from './evenements/events.js'

function Sidebar(doc, options) {

    let sidebarHtml = document.createElement('div')
    sidebarHtml.classList.add('container__colonneUn')
    doc.append(sidebarHtml)

    Bouton(sidebarHtml, {
        action: 'home',
        url: 'https://img.icons8.com/stickers/250/000000/home.png',
        width: 60
    });

    let hrHTML = document.createElement('hr')
    sidebarHtml.append(hrHTML)

    Bouton(sidebarHtml, {
        action: 'service',
        url: 'https://img.icons8.com/stickers/250/000000/services.png',
        width: 60
    });

    Bouton(sidebarHtml, {
        action: 'formation',
        url: 'https://img.icons8.com/stickers/250/000000/toolbox.png',
        width: 60
    });

    Bouton(sidebarHtml, {
        action: 'application',
        url: 'https://img.icons8.com/stickers/250/000000/apps-tab.png',
        width: 60
    });

    Bouton(sidebarHtml, {
        action: 'cmd',
        url: 'https://img.icons8.com/stickers/250/000000/command-line.png',
        width: 60
    });

    Bouton(sidebarHtml, {
        action: 'skills',
        url: 'https://img.icons8.com/stickers/250/000000/brain.png',
        width: 60
    });

    Bouton(sidebarHtml, {
        action: 'contact',
        url: 'https://img.icons8.com/stickers/250/000000/info.png',
        width: 60
    });

    // console.log('Chargement sidebar...');

}

function SidebarArticle(doc, options) {

    let sidebarArticleHtml = document.createElement('div')
    sidebarArticleHtml.classList.add('container__colonneDeux')
    doc.append(sidebarArticleHtml)

    headerSidebar(sidebarArticleHtml, {})
    bodySidebar(sidebarArticleHtml, {})
    footerSidebar(sidebarArticleHtml, {})

    function headerSidebar(docx, options) {

        let headerSidebarHTML = document.createElement('div')
        headerSidebarHTML.classList.add('container__colonneDeux-header')
        let titreHeaderHTML = document.createElement('h2') 
        titreHeaderHTML.append('Informations')
        headerSidebarHTML.append(titreHeaderHTML)
        docx.append(headerSidebarHTML)

    }

    function bodySidebar(docx, options){

        let bodySidebarHTML = document.createElement('div')
        bodySidebarHTML.classList.add('container__colonneDeux-body')
        docx.append(bodySidebarHTML)

        
        fetch("config.json")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
            // console.log(data)

            data.forEach(element => {

                if(element.enable){
                    Article(bodySidebarHTML, {
                        titre: element.titre,
                        fichier: element.fichier
                    })
                } 

            });
            
        })

    }

    function footerSidebar(docx, options){

        let footerSidebarHTML = document.createElement('div')
        footerSidebarHTML.classList.add('container__colonneDeux-footer')
        docx.append(footerSidebarHTML)
    
        let pHTML = document.createElement('p')
        let profilHTML = document.createElement('img')
        profilHTML.src = 'assets/profil.png'
        profilHTML.classList.add('button')
        profilHTML.width = 40
        profilHTML.style = "float:left;"
        pHTML.append(profilHTML)
        let brHTML = document.createElement('br')
        pHTML.append(brHTML)
        pHTML.append('Ludovic LEVENEUR \n\r Développeur Web')
        footerSidebarHTML.append(pHTML)

    }

    // console.log('Chargement sidebar articles...');

}

function Body(doc, options) {

    let bodyHtml = document.createElement('div')
    bodyHtml.classList.add('container__colonneTrois')
    doc.append(bodyHtml)

    colonneTroisHeader(bodyHtml, {
        titre: options.titre
    })
    colonneTroisBody(bodyHtml, {
        contenu: options.contenu
    })
    colonneTroisFooter(bodyHtml, {
        tab: options.tab,
        input: options.input
    })

    function colonneTroisHeader(docx, options){

        let headerBodyHTML = document.createElement('div')
        headerBodyHTML.classList.add('container__colonneTrois-header')
        docx.append(headerBodyHTML)
        let headerBodyColonneUnHTML = document.createElement('div')
        headerBodyColonneUnHTML.classList.add('header__colonneUn')
        let h2BodyHTML = document.createElement('h2')
        h2BodyHTML.append(options.titre)
        headerBodyColonneUnHTML.append(h2BodyHTML)
        headerBodyHTML.append(headerBodyColonneUnHTML)
        let headerBodyColonneDeuxHTML = document.createElement('div')
        headerBodyColonneDeuxHTML.classList.add('header__colonneDeux')
        headerBodyColonneDeuxHTML.innerHTML = `
        <div>
            <input type="checkbox" class="checkbox" id="checkbox">
            <label for="checkbox" class="checkbox-label">
                <i class="fas fa-moon"></i>
                <i class="fas fa-sun"></i>
                <span class="ball"></span>
            </label>
        </div>`
        // let iconeLightModeHTML = document.createElement('img')
        // iconeLightModeHTML.src = "https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/50/000000/external-night-healthy-lifestyle-icongeek26-linear-colour-icongeek26.png"
        // let iconeDarkModeHTML = document.createElement('img')
        // iconeDarkModeHTML.src = "https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/50/000000/external-sun-desert-icongeek26-linear-colour-icongeek26.png"
        // headerBodyColonneDeuxHTML.append(iconeLightModeHTML)
        // headerBodyColonneDeuxHTML.append(iconeDarkModeHTML)
        headerBodyHTML.append(headerBodyColonneDeuxHTML)  

    }

    function colonneTroisBody(docx, options){

        // container__colonneTrois-body
        let bodyHTML = document.createElement('div')
        bodyHTML.classList.add('container__colonneTrois-body')
        docx.append(bodyHTML)

        let conteneurBodyHTML = document.createElement('div')
        conteneurBodyHTML.classList.add('contenu__body')
        conteneurBodyHTML.id = "contenu__body"
        conteneurBodyHTML.innerHTML = options.contenu
        bodyHTML.append(conteneurBodyHTML)

    }

    function colonneTroisFooter(docx, options){

        let footerHTML = document.createElement('div')
        footerHTML.classList.add('container__colonneTrois-footer')
        docx.append(footerHTML)

        if(options.input){
            Input(footerHTML, {
                tableau: options.tab
            })
        }

    }

}

function evenements(doc, options){

    Events(doc, {})

}

function mode(doc, options){

    const checkbox = document.getElementById("checkbox")
    let mode = localStorage.getItem('mode')

    let linkmode = document.getElementById('mode')

    if(mode == null){
        localStorage.setItem('mode', 'darkmode')
        linkmode.type = 'text/css';
        linkmode.rel = 'stylesheet';
    
        //link.href = 'http://fonts.googleapis.com/css?family=Oswald&effect=neon';
        linkmode.href = 'darkmode.css'
    
    } else {
    
        if(mode == 'lightmode'){
            checkbox.checked = false
            linkmode.type = 'text/css';
            linkmode.rel = 'stylesheet';
        
            //link.href = 'http://fonts.googleapis.com/css?family=Oswald&effect=neon';
            linkmode.href = 'lightmode.css'
        } else if(mode == 'darkmode'){
            checkbox.checked = true
            linkmode.type = 'text/css';
            linkmode.rel = 'stylesheet';
        
            //link.href = 'http://fonts.googleapis.com/css?family=Oswald&effect=neon';
            linkmode.href = 'darkmode.css'
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
            linkmode.type = 'text/css';
            linkmode.rel = 'stylesheet';
        
            //link.href = 'http://fonts.googleapis.com/css?family=Oswald&effect=neon';
            linkmode.href = 'lightmode.css'
        } else if(mode == 'darkmode'){
            linkmode.type = 'text/css';
            linkmode.rel = 'stylesheet';
        
            //link.href = 'http://fonts.googleapis.com/css?family=Oswald&effect=neon';
            linkmode.href = 'darkmode.css'
        }
    
    })

}

export {
    Sidebar,
    SidebarArticle,
    Body,
    evenements,
    mode
}

