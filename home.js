const container = document.getElementById("container");
let cards = "";
let arrayEvents  = data.events




function showCards(){
    for(let info of arrayEvents) {
        cards += `
        <div  class="card" class="row row-cols-3 row-cols-sm-2 g-4">
            <img src="${info.image}" alt="${info.name} picture">
            <div class="detalles">
                <p class="name fw-bolder text-center">${info.name}</p>
                <p>${info.category}</p>
                <p>${info.description}</p>
                <p class="fw-bolder text-end">$ ${info.price}</p>
                <a href="./details.html?id=${info.id}"><i type= "button" class="btn">see more</i></a>
            </div>
        </div>
        `
    }
}
showCards()

container.innerHTML = cards


