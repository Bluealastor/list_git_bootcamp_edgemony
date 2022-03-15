const q = (attribute) => document.querySelector(attribute);
const popup = q('#popup');
const links = document.querySelectorAll('a');

//Button tag
{/* <button class="moveToRight">></button>
<button class="moveToLeft"><</button> */}

function popupGenerator (link, githubLink, linkedinLink){
    popup.classList.add('hidden');
    popup.innerHTML = `
    <img src="./assets/img/closeBtn.png" class="closeBtn">

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

    let githubLink = allLink[i].getAttribute("data-git");
    let linkedinLink = allLink[i].getAttribute("data-linkedin");
    
    allLink[i].addEventListener('click', () => {


    popupGenerator(allLink[i], githubLink, linkedinLink);

    // const leftBtn = q('.moveToLeft');
    // console.log(leftBtn.clicked);
    // const rightBtn = q('.moveToRight');
    
    // leftBtn.addEventListener("click", () => {
    //     let index = 10;
    //     popupGenerator(allLink[index], allLink[index].getAttribute("data-git"), allLink[i].getAttribute("data-linkedin"));
    //     index --;
    // })
        
        
    })
})
