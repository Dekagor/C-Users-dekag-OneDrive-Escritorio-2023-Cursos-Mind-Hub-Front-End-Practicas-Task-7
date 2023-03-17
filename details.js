
let params = new URLSearchParams (location.search)
console.log(params)
let arrayEvents  = data.events
let idParams = params.get("id")
let profile = arrayEvents.find(info => info.id == idParams)
const container = document.getElementById("card")



let html = "";
html += `
        <img src="${profile.image}" alt=${profile.name}">
        <div class="just">
            <h2>${profile.name}</h2>
                <div class="flex-detail-r fw-bolder">
                    <p>Date:<span>${profile.date}</span></p>
                    <p>Category:<span>${profile.category}</span></p>
                    <p>Place:<span>${profile.place}</span></p>
                    <p>Capacity:<span>${profile.capacity}</span></p>
                    <p>Assistance:<span>${profile.assistance}</span></p>
                    <p>Estimate:<span>${profile.estimate}</span></p>
                    <p>Description:<span>${profile.description}</span></p>
                    <p>Price:<span>${profile.price}</span></p>
                </div>
            </div>
    </div>
`

container.innerHTML= html;
