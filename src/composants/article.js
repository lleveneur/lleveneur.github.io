function Article(doc, options){

    let articleHTML = document.createElement('div')
    articleHTML.classList.add('article')
    let pTitreHTML = document.createElement('p')
    pTitreHTML.innerHTML = `<span class="article__titre">${options.titre}</span><br> <small>${options.fichier}</small>`
    articleHTML.append(pTitreHTML)
    doc.append(articleHTML)

    articleHTML.addEventListener('click', function() {
        
        let event = new CustomEvent('button-event', {
            detail: {
                action: 'article',
                titre: options.titre,
                fichier: options.fichier
            }
        });

        document.dispatchEvent(event);

    })

}

export default Article;