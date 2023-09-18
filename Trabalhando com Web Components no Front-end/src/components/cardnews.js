class CardNews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        const componentRoot = document.createElement('div');
        componentRoot.setAttribute('class', 'card');

        const cardLeft = document.createElement('div');
        cardLeft.setAttribute('class', 'cardleft');

        const autor = document.createElement('span');
        autor.textContent = "By "+(this.getAttribute('autor') || "Anonymous");

        const link = document.createElement('a');
        link.textContent = this.getAttribute('title');
        link.href = this.getAttribute('link-url');
        const newsContent = document.createElement('p');
        newsContent.textContent = this.getAttribute('content');

        cardLeft.appendChild(autor);
        cardLeft.appendChild(link);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement('div');
        cardRight.setAttribute('class', 'cardright');

        const newsImage = document.createElement('img');
        newsImage.src= this.getAttribute("photo")|| "assets/defaultPhoto.png";
        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles(){
        const style = document.createElement('style');
        style.textContent = `
        
            .card{
                width: 80%;
                box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
                -webkit-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
                -moz-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }

            .cardleft{
                display: flex;
                flex-direction: column;
                justify-content: center;
                justify-content: center;
                padding-left: 10px;
            }

            .cardleft span{
                font-weight: 400;
            }

            .cardleft h1{
                margin-top: 10px;
                font-size: 25px;
            }

            .cardleft p{
                color: gray;
            }

            img{
                width: 100%;
            }
        `
        return style;

    }
}

customElements.define('card-news', CardNews);