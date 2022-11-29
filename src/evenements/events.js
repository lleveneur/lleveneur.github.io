import * as shell from '../shell.js'

function Events(doc, options) {

    document.addEventListener('button-event', function (event) {

        event.preventDefault()

        let action = event.detail.action

        switch (action) {
            case 'home':

                doc.innerHTML = ''

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
                    </div>`,
                    input: false
                });
                shell.mode(doc, {})

                break;
            case 'service':

                doc.innerHTML = ''

                shell.Sidebar(doc, {})
                shell.SidebarArticle(doc, {})
                shell.Body(doc, {
                    titre: '🚀 Service',
                    contenu: `
                    <div style="text-align: center;">
                        <h2>Mes services</h2>
                        <p style="color: #E8505B;">Ce que je suis capable de faire...</p>
                    </div>
                    <center>
                        <div class="parentService">
                            <div class="divService1">
                                <img src="https://img.icons8.com/color/100/000000/web-design.png">
                                <h2>Site internet Wordpress</h2> 
                                <p>Landingpage, site vitrine</p>
                            </div>
                            <div class="divService2">
                                <img src="https://img.icons8.com/fluency/100/000000/themes.png">
                                <h2>Application web</h2> 
                                <p>Sur mesure ou solution clé en main</p>
                            </div>
                            <div class="divService3">
                                <img src="https://img.icons8.com/dusk/100/000000/pen.png">
                                <h2>Etude de projet</h2> 
                                <p>Cahier des charges, maquette de projet, mcd...</p>
                            </div>
                        </div>  
                    </center>  
                    <div style="text-align: center;">
                        <h2>Quelques réalisations</h2>
                        <p style="color: #E8505B;">Mes différents projets professionnels et personnels.</p>
                    </div>  
                    <center>
                        <div class="parentService">
                            <div class="divService1">
                                <img src="./assets/application-agrums.png" width="100%" height="400">
                            </div>
                            <div class="divService2">
                                <img src="./assets/sunriver-location-saisonniere.jpg" width="100%" height="400">
                            </div>
                            <div class="divService3">
                                <img src="./assets/application-reservation-sunriver-location-saisonniere.jpg" width="100%" height="400">
                            </div>
                        </div> 
                        <div class="parentService">
                            <div class="divService1">
                                <img src="./assets/lvndistrib_wallpaper-1024x515.png" width="100%" height="400">
                            </div>
                            <div class="divService2">
                                <img src="./assets/application-help-population.png" width="100%" height="400">
                            </div>
                            <div class="divService3">
                            </div>
                        </div>   
                    </center>  
                    `,
                    input: false
                });
                shell.mode(doc, {})

                break;
            case 'formation':
                doc.innerHTML = ''

                shell.Sidebar(doc, {})
                shell.SidebarArticle(doc, {})
                shell.Body(doc, {
                    titre: '🚀 Mon parcours',
                    contenu: `
                        <div style="text-align: center;">
                        <h2>Parcours professionnelle</h2>
                        <p style="color: #E8505B;">Mes expériences</p>
                        </div>
                        <h2>NetKoders</h2>
                        <small><span class='badge'>Novembre 2021 - A présent</span> - Développeur web / Formateur / Lead Tech</small>
                        <p>
                        - Développement d'application interne <br/>
                        - Développement d'application pour des clients <br/>
                        - Rédaction de contenu (article) <br/>
                        - Formation Stagiaire <br/>
                        - Auto-formation Udemy : React.js, NodeJS (API), VueJS <br/>
                        </p>
                        <hr/>
                        <h2>CCAS Saint-Louis</h2>
                        <small><span class='badge'>Mars 2020 - Juin 2021</span> - Développeur web en alternance</small>
                        <p>Mise en place d'un projet complet sur le développement d'une application métier en laravel spécialement dédiée à la gestion des usagers du CCAS. 
                        <br/> Communication et mise en place avec le partenaire mes-aides.org. Prise en charge de deux stagiaires. 
                        Création d'un site internet. Formation des utilisateurs.</p>
                        <hr/>
                        <h2>Sunriver</h2>
                        <small><span class='badge'>Avril 2019 - Janvier 2020</span> - Hôte et développeur à mon compte</small>
                        <p>Gestion location saisonnière, création du projet, check-in, check-out, accueil des clients, création du site internet, 
                        création de mon système de réservation, prospection client, gestion offre promotionnelle, gestion publicité.</p>
                        <hr/>
                        <h2>Gesa</h2>
                        <small><span class='badge'>Novembre 2012 - Décembre 2016</span> -Technicien informatique</small>
                        <p>Conseil client, montage et démontage pc fixe et portable, installation caisse et maintenance, installation point d’accès, installation et configuration imprimante réseau et usb, 
                        installation logiciel sage comptabilité et gestión, développement web application spécifique (simple).</p>
                        <hr/>
                        <h2>Delbos informatique</h2>
                        <small><span class='badge'>Juin - Juillet 2010</span> - Stag. Tech. Informatique</small>
                        <p>Montage à la chaine pc fixe / Résolution divers / problème technique & logistique sur pc / Gestion SAV / Maintenance informatique réseau d’école primaire / Conseil achat client.</p>
                        <hr/>
                        <h2>Pc Univers</h2>
                        <small><span class='badge'>Mars - Avril 2009</span> - Stag. Tech. Informatique</small>
                        <p>Archivages, Démonter/ remonter pc fixe / Résolution divers problèmes technique & logistique sur pc.</p>
                        <hr/>
                        <div style="text-align: center;">
                        <h2>Education</h2>
                        <p style="color: #E8505B;">Mon apprentissage</p>
                        </div>
                        <h2>Formation Simplon</h2>
                        <small><span class='badge'>Mars 2020 - Juin 2021</span> - Formation Développeur web & web mobile</small>
                        <p>Formation qualifiante et diplomante développeur web et web mobile bac +2</p>
                        <hr/>
                        <h2>Formation KapNumerik</h2>
                        <small><span class='badge'>Septembre 2018 - Février 2019</span> - Formation application mobile & découverte tech.</small>
                        <p>Développement application mobile (android / iOs) - Non qualifiante.</p>
                        <hr/>
                        <h2>Formation autodidacte online</h2>
                        <small><span class='badge'>2012 - 2018</span> - Formation application mobile & découverte tech.</small>
                        <p>Exploration technologique sur : HTML / CSS / PHP / LARAVEL /JS / JQUERY / BOOTSTRAP / REACT / REACT-NATIVE / WORDPRESS / SHOPIFY / (niveau intermédiaire - débutant</p>
                        <hr/>
                        <h2>Lycée Paul Langevin</h2>
                        <small><span class='badge'>2011</span> - Saint-Joseph</small>
                        <p>Bac Pro Télécommunication et Réseau</p>
                        <hr/>
                        <h2>Collège Joseph Hubert</h2>
                        <small><span class='badge'>2008</span> - Saint-Joseph</small>
                        <p>Brevet des collèges</p>
                        <hr/>
                    `,
                    input: false
                });
                shell.mode(doc, {})

                break;
            case 'application':

                    doc.innerHTML = ''
    
                    shell.Sidebar(doc, {})
                    shell.SidebarArticle(doc, {})
                    shell.Body(doc, {
                        titre: '🚀 AppStore',
                        contenu: `<p>Vous trouverez ici l'ensemble de mes travaux open-source.</p>
                        <div class="parentApp">
                            <div class="app1">
                                <img src="https://img.icons8.com/stickers/100/000000/discord.png"/><br>
                                <p>Discord Self Bot <br>
                                <a href="https://github.com/ludovicl974/discord-self-bot" target="_blank">Github</a></p>
                            </div>
                            <div class="app2">
                                <div class="app1">
                                    <img src="https://img.icons8.com/stickers/100/000000/sugar-cube.png"/><br>
                                    <p>Kube <br>
                                    <a href="https://github.com/ludovicl974/kube" target="_blank">Github</a></p>
                                </div>
                            </div>
                            <div class="app3"> </div>
                            <div class="app4"> </div>
                            <div class="app5"> </div>
                        </div>`,
                        input: false
                    });
                    shell.mode(doc, {})
    
                    break;
            case 'cmd':
                doc.innerHTML = ''

                let spiritBot = ['[SpiritBot] > ' + navigator.appVersion,
                    '[SpiritBot] > ' + navigator.appCodeName + ' - ' + navigator.product,
                    '[SpiritBot] > (c) Ludovic Corporation. Tous droits réservés',
                    '[SpiritBot] > [version 1.0.0.0]',
                    '------------------------------------------------------------------------------------------------------------------------------------',
                    '[SpiritBot] > Entrez une commande ou tapez "Help" pour obtenir de l\'aide.'
                ]

                let cmd = ''

                spiritBot.map(function(element){
                    cmd += element + '<br/>'
                })

                shell.Sidebar(doc, {})
                shell.SidebarArticle(doc, {})
                shell.Body(doc, {
                    titre: '🚀 Invite de commande',
                    contenu: `<p>` + cmd + `</p>`,
                    tab: spiritBot,
                    input: true
                });
                shell.mode(doc, {})
                
                break;
            case 'skills':
                doc.innerHTML = ''

                shell.Sidebar(doc, {})
                shell.SidebarArticle(doc, {})
                shell.Body(doc, {
                    titre: '🚀 Mes compétences',
                    contenu: `
                    <div style="text-align: center;">
                        <h2>Skills</h2>
                        <p style="color: #E8505B;">Mes compétences</p>
                    </div>
                    <div class="parent">
                        <div class="div1"><img src="https://www.anthonyliu.org/wp-content/uploads/2017/09/HTML5.png" width="100%" height="100%"></div>
                        <div class="div2"><img src="https://media.vlpt.us/images/padd60/post/73874c7b-8786-4e28-9d66-6e707bced45f/css%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.webp" width="100%" height="100%"></div>
                        <div class="div3"><img src="https://miro.medium.com/max/1838/1*bxEkHw1xewxOFjmGunb-Cw.png" width="100%" height="100%"></div>
                        <div class="div4"><img src="https://fr-images.tuto.net/gallery/91/91611/10572851.jpg" width="100%" height="100%"></div>
                        <div class="div5"><img src="https://cartodb.github.io/labs_vuejs_intro/src/common/vue_banner.jpg" width="100%" height="100%"></div>
                        <div class="div6"><img src="https://www.geeksforgeeks.org/wp-content/uploads/jquery-banner.png" width="100%" height="100%"></div>
                        <div class="div7"><img src="https://ps.w.org/php-everywhere/assets/banner-1544x500.png?rev=1933734" width="100%" height="100%"></div>
                        <div class="div8"><img src="https://bijaydas.com/wp-content/uploads/2021/06/1617556322_laravel-banner.png" width="100%" height="100%"></div>
                        <div class="div9"><img src="https://techvedika.com/wp-content/uploads/2018/01/react.jpg" width="100%" height="100%"></div>
                        <div class="div10"><img src="https://blog.edenpulse.com/wp-content/uploads/2017/01/wordpress-banner-1200x500.png" width="100%" height="100%"></div>
                        <div class="div11"><img src="https://www.prisma.io/blog/posts/documenting_web_apis.png" width="100%" height="100%"></div>
                        <div class="div12"><img src="https://www.smartt.com/sites/default/files/public/banner-blog-002-opt.png" width="100%" height="100%"></div>
                    </div>
                    
                    <div style="text-align: center;">
                        <h2>ExtraSkills</h2>
                        <p style="color: #E8505B;">En complément des compétences...</p>
                    </div>

                    <div class="parent">
                        <div class="div1"><img src="https://larocqueinc.com/wp-content/uploads/2020/04/Notion-Logo.png" width="100%" height="100%"></div>
                        <div class="div2"><img src="http://www.tailormadesolutions.com.au/wp-content/uploads/2013/12/trello-banner-621x250.png" width="100%" height="100%"></div>
                        <div class="div3"><img src="https://sectorgeek.com/content/images/2020/08/github-features-banner-1.jpg" width="100%" height="100%"></div>
                        <div class="div4"><img src="https://habrastorage.org/webt/84/01/5-/84015-1ckbajbqepfamtimj-6b0.jpeg" width="100%" height="100%"></div>
                        <div class="div5"><img src="https://www.krishnapariyar.com.np/wp-content/uploads/2017/07/linux-banner.jpg" width="100%" height="100%"></div>
                        <div class="div6"><img src="http://owendismuke.github.io/assets/images/postman_banner.png" width="100%" height="100%"></div>
                        <div class="div7"><img src="https://dustyjuhl.com/wp-content/uploads/2020/01/20200115-AzureDevOps_icons_banner.png" width="100%" height="100%"></div>
                    </div>
                    `,
                    input: false
                });
                shell.mode(doc, {})

                break;
            case 'contact':
                doc.innerHTML = ''

                shell.Sidebar(doc, {})
                shell.SidebarArticle(doc, {})
                shell.Body(doc, {
                    titre: '🚀 Contact',
                    contenu: `<p>Besoin d'informations supplémentaire ? N'hésitez pas à prendre contact avec moi ! 
                    <br/>
                    Sinon vous pouvez également me retrouver ici : <br/>
                    <br/>
                    - Linkedin : <a href="https://www.linkedin.com/in/ludovic-leveneur-26117817b/">https://www.linkedin.com/in/ludovic-leveneur-26117817b/</a> <br/>
                    - Github : <a href="https://github.com/ludovicl974">https://github.com/ludovicl974</a> <br/>
                    - Discord : Cyberghost#0463 <br/>
                    - Email : ludovic.lvnr.freelance@gmail.com <br/>
                    </p>`,
                    input: false
                });
                shell.mode(doc, {})

                break;
            case 'article':
                doc.innerHTML = ''


                fetch("articles/" + event.detail.fichier)
                .then((response) => {
                  return response.text();
                })
                .then((data) => {
                    // console.log(data)
                    
                    shell.Sidebar(doc, {})
                    shell.SidebarArticle(doc, {})
                    shell.Body(doc, {
                        titre: '🚀 ' + event.detail.fichier,
                        contenu: parseMarkdown(data),
                        input: false
                    });
                    shell.mode(doc, {})

                })

                function parseMarkdown(markdownText) {
                    const htmlText = markdownText
                        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
                        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
                        .replace(/^# (.*$)/gim, '<h1>$1</h1>')
                        .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
                        .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
                        .replace(/\*(.*)\*/gim, '<i>$1</i>')
                        .replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
                        .replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")
                        .replace(/\n$/gim, '<br />')
                
                    return htmlText.trim()
                }
                
                break;
            case 'command':
                let commande = event.detail.value
                let newTab = event.detail.tableau
                let inputElement = event.detail.element
                let bodyContainerHTML = document.getElementById('contenu__body')
                bodyContainerHTML.innerHTML = ''

                let newcmd

                switch (commande) {
                    case 'help':
                        newTab.push('[Vous] > ' + commande)
                        newTab.push(`[SpiritBot] > Vous avez demander de laide ! <br/>
                        [SpiritBot] > help : Permet d'obtenir la liste des commandes. <br/>
                        [SpiritBot] > clear : Efface toute la fenêtre. <br/>
                        [SpiritBot] > version : Obtenir la version de l'application. <br/>
                        [SpiritBot] > Plus de commande bientôt...`)
                                
                        newcmd = ''

                        newTab.map(function(element){
                            newcmd += element + '<br/>'
                        })
        
                        bodyContainerHTML.innerHTML = `<p>` + newcmd + `</p>`
                        inputElement.value = ''

                        break;
                    case 'clear':
                        
                        doc.innerHTML = ''

                        let spiritBot = ['[SpiritBot] > ' + navigator.appVersion,
                            '[SpiritBot] > ' + navigator.appCodeName + ' - ' + navigator.product,
                            '[SpiritBot] > (c) Ludovic Corporation. Tous droits réservés',
                            '[SpiritBot] > [version 1.0.0.0]',
                            '------------------------------------------------------------------------------------------------------------------------------------',
                            '[SpiritBot] > Entrez une commande ou tapez "Help" pour obtenir de l\'aide.'
                        ]
        
                        let cmd = ''
        
                        spiritBot.map(function(element){
                            cmd += element + '<br/>'
                        })
        
                        shell.Sidebar(doc, {})
                        shell.SidebarArticle(doc, {})
                        shell.Body(doc, {
                            titre: '🚀 Invite de commande',
                            contenu: `<p>` + cmd + `</p>`,
                            tab: spiritBot,
                            input: true
                        });
                        shell.mode(doc, {})  
                        
                        break;
                    case 'version':
                        newTab.push('[Vous] > ' + commande)
                        newTab.push(`[SpiritBot] > Version 1.0.0.0`)
                                
                        newcmd = ''

                        newTab.map(function(element){
                            newcmd += element + '<br/>'
                        })
        
                        bodyContainerHTML.innerHTML = `<p>` + newcmd + `</p>`
                        inputElement.value = ''
                        break;
                    default:
                        newTab.push('[Vous] > ' + commande)
                        newTab.push(`[SpiritBot] > Cette commande n'existe pas... Tapez "help".`)
                                
                        newcmd = ''

                        newTab.map(function(element){
                            newcmd += element + '<br/>'
                        })
        
                        bodyContainerHTML.innerHTML = `<p>` + newcmd + `</p>`
                        inputElement.value = ''
                        break;
                }

                break;
            default:
                break;
        }

    });

}

export default Events;