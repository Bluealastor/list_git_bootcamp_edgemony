const q = (attribute) => document.querySelector(attribute);
const popup = q('#popup');
const links = document.querySelectorAll('a');

function popupGenerator (link, githubLink, linkedinLink){
    popup.classList.add('hidden');
    popup.innerHTML = `
    <div class="closeBtn">X</div>
    <div class="moveToRight">></div>
    <div class="moveToLeft"><</div>
    <h1>${link.textContent}</h1>
    <h2>Scegli la piattaforma:</h2>
    <div class="groupBtn">
    <a href="${githubLink}" target="_blank">
    <button>GitHub</button>
    </a>
    <a href="${linkedinLink}" target="_blank" class="linkedinBtn">
    <button>Linkedin</button>
    </a>
    </div>
    `;
    if(linkedinLink === ''){
        q('.linkedinBtn').classList.add('inactive');
        const att = q('.linkedinBtn button').setAttribute("title", "Linkedin non presente");
    };
    
    const closeBtn = q('.closeBtn');
    
    closeBtn.addEventListener("click", () => {
        popup.classList.remove('hidden');
        popup.innerHTML = '';
    })

}

//Fine funzione

links.forEach((link, i, allLink) => {

    let githubLink = link.getAttribute("data-git");
    let linkedinLink = link.getAttribute("data-linkedin");
    link.addEventListener('click', () => {
    popupGenerator(link, githubLink, linkedinLink);
    const leftBtn = q('.moveToLeft');
    const rightBtn = q('.moveToRight');
        leftBtn.addEventListener("click", () => {
            githubLink = allLink[i-1].getAttribute("data-git");
            linkedinLink = allLink[i-1].getAttribute("data-linkedin");
            popupGenerator(allLink[i-1], githubLink, linkedinLink);
        console.log("hai cliccato");
        })

        console.log(allLink[i-1]);


    })
})