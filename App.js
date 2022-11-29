import * as shell from './src/shell.js'

let doc = document.getElementById('container')

shell.Sidebar(doc, {})
shell.SidebarArticle(doc, {})
shell.Body(doc, {
    titre: '🚀 Accueil',
    contenu: `<div class="contenu__body_accueil">
    <h1>Ludovic LEVENEUR</h1>
    <h2>Bienvenue sur mon portfolio</h2>
    <p>Développeur web </p>
    <a href="https://www.linkedin.com/in/ludovic-leveneur-26117817b/" target="_blank"><img src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-linkedin-social-media-justicon-lineal-color-justicon.png"/></a>
    <a href="mailto:ludovic.lvnr@gmail.com"><img src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-gmail-social-media-justicon-flat-justicon.png"/></a>
    </div>`
});

shell.mode(doc, {})

shell.evenements(doc, {})
