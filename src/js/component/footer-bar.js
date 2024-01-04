class FooterBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
        <style>
            footer {
                width: 100%;
                padding: 16px;
                font-weight: bold;
                color: white;
                background-color: rgba(55, 55, 55, 55);
                text-align: center;
                font-size: 18px;
            }
        </style>
        
        <footer id="footer">
            OEMAH FILM &#169;2024 Muhammad Abdurrahman
        </footer>
        `;
    }
}

customElements.define("footer-bar", FooterBar);