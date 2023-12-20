class PreLoader extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
      <style>
      #preloader section{
        margin-top: 45vh;
      }   
      
      .loading-bar{
         height: 100vh;
        width: 100vw;
        font-size: 10rem;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        z-index: 10000;
        background-color: black;
        /* color: darkgreen; */
      }
      
      .loading-bar-done{
        opacity: 0;
        visibility: hidden;
      }
      
      #preloader .waviy {
        position: relative;
        display: flex;
         justify-content: center;
       
      }
      #preloader .waviy span {
        position: relative;
        display: inline-block;
        font-size: clamp(2rem, 12vw, 5rem);
        font-weight: bold;
        background-image: linear-gradient(to top, #FFFFFF, #FFFFFF);
        -webkit-background-clip: text;
        -moz-background-clip: text;
        background-clip: text;
        color: transparent;
        font-family: 'Audiowide', cursive;
        text-transform: uppercase;
        animation: flip 2s infinite;
        animation-delay: calc(.2s * var(--i));
      }
      @keyframes flip {
        0%,80% {
          transform: rotateY(360deg); 
        }
      </style>
  <div class="loading-bar" id="preloader">
    <section id="detail" class="detail">
      <div class="container">
        <div class="section-title">
          <h2>
            <div class="waviy">
           
              <span style="--i:10">A</span>
              <span style="--i:11">N</span>
              <span style="--i:12">A</span>
              <span style="--i:13">N</span>
              <span style="--i:14">T</span>
              <span style="--i:15">A</span>
              <span style="--i:16">'</span>
              <span style="--i:17">2</span>
              <span style="--i:18">2</span>
            </div>
          </h2>
        </div>
      </div>
    </section>
  </div>
      `;
    }
}

customElements.define('preloader-component', PreLoader);