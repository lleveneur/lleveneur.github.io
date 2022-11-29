import * as shell from './srcMobile/shell.js'

let doc = document.getElementById('container')

shell.Body(doc, {
    titre: '🚀 Accueil',
    contenu: `<p>
    Bienvenue ! 👋 <br/>
    Je m'appelle Ludovic, je suis originaire de la réunion et je suis développeur web autodidacte. <br/>
    J'ai appris le développement à travers une multitude de projets personnel et des mises en situation dans des cas concret pour pouvoir me surpasser et apprendre dans des conditions réelles. <br/>
    A travers l'open-source, j'ai pour objectif de partager des connaissances et peut-être monter des projets utiles aux autres.
    <br/> <br/> Ce que j'aime : <br/>
    <ul>
        <li>❓ Découvrir de nouvelles choses</li>
        <li>💡 Trouver des idées</li>
        <li>💻 Développer des projets</li>
        <li>💪 Langage préférer : PHP</li>
        <li>Framework préférer : Laravel 😍</li>
        <li>💎 Cryptos & blockchain</li>
        <li>💼 Entreprenariat</li>
    </ul>
    </p>`
})
shell.Navbar(doc, {})

shell.mode(doc, {})

shell.evenements(doc, {})