
const events=data.events
const currentDate=data.currentDate
const eventFuture=[]

console.log(events)
console.log(currentDate)

function futureEvent(array) {
for (let i = 0; i < array.length; i++){
    if (array[i].date>currentDate){
        eventFuture.push(array[i])
    }
}
} 

futureEvent(events)
console.log(eventFuture)

function paintDOM(events){
    let card = ``;
    const containerElement=document.querySelector("#container")
    console.log(containerElement)

    for (let i = 0; i < events.length; i++){
        card += `
        <div class="col">
        <div class="card">
          <img src=${events[i].image} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title"><b>${events[i].name}</b></h5>
            <p class="card-text"><b>${events[i].date}</b></p>
            <p class="card-text">${events[i].description}</p>
            <div class="footer-card d-flex">
               <p><strong>Precio $${events[i].price}</strong></p>
              <a href="./details.html?id=${events[i].id}" class="btn btn-primary">see more</a>
            </div>
          </div>
        </div>
      </div>`
    }

    containerElement.innerHTML = card;
    console.log("card")
}
paintDOM(eventFuture);
