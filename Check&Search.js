const containerSearch = document.getElementById('container');
console.log(containerSearch);
const containerCheck = document.getElementById('checkbox');
console.log(containerCheck)
const input = document.querySelector('input');
console.log(input);
let arrayEvents = data.events
console.log(arrayEvents)



input.addEventListener('input',superFilter)
containerCheck.addEventListener('change',superFilter)




submitCards(arrayEvents)
addChecks(arrayEvents)



function addChecks(array){
    let checks = ''
    let repeat = array.map(element => element.category)
    let range = new Set(repeat.sort((a,b)=>{
        if(a>b){
            return 1
        }
        if(a<b){
            return -1
        }
        return 0
    }))
    range.forEach(element => {
        checks += `
        <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" name="inlineCheckbox" id=${element} value=${element}>
  <label class="form-check-label" for=${element}>${element}</label>
</div>
`
    })
    containerCheck.innerHTML = checks
}

function submitCards(array){
    
    if(array.length == 0){
        containerSearch.innerHTML = "<h2 class='display-1 fw-bolder'>Not Found</h2>"
        return
    }

    let cards = ''
    array.forEach(element =>{
        cards += `
        <div  class="card" class="row row-cols-3 row-cols-sm-3 g-4">
        <img src="${element.image}" alt="${element.name} picture">
        <div class="details">
            <p class="name fw-bolder text-center">${element.name}</p>
            <p>${element.category}</p>
            <p>${element.description}</p>
            <p class="fw-bolder text-end">$ ${element.price}</p>
            <a href="./details.html?id=${element.id}"><i type= "button" class="btn">see more</i></a>
        </div>
    </div>
    `
    }
    )
    containerSearch.innerHTML = cards
}

function filterText(array, text){
    let arrayFilter = array.filter (element => element.category.toLowerCase().includes(text.toLowerCase()))
    return arrayFilter

}

function filterCategory(array){
    let checkBoxes = document.querySelectorAll("input[type='checkbox']")
    console.log(checkBoxes);
    let checks = Array.from(checkBoxes)
    console.log(checks);
    let checksChecked = checks.filter(check => check.checked)
    console.log(checksChecked);
    if(checksChecked.length == 0){
        return array
    }
    let checkValues = checksChecked.map(check => check.value)
    console.log(checkValues);
    let arrayFilter = array.filter(element => checkValues.includes(element.category))
    console.log(arrayFilter);
    return arrayFilter
}

function superFilter(){
    let arrayFilter1 = filterText (arrayEvents, input.value)
    let arrayFilter2 = filterCategory (arrayFilter1)
    submitCards(arrayFilter2)
}




// es un paso antes del superfilter quien despues sustituye estos valores

// input.addEventListener('input',()=>{
//     let arrayFilter1 = filterText (arrayEvents, input.value)
//     let arrayFilter2 = filterCategory (arrayFilter1)
//     submitCards(arrayFilter2)
// })

// containerCheck.addEventListener('change',()=>{
//     let arrayFilter1 = filterText (arrayEvents, input.value)
//     let arrayFilter2 = filterCategory (arrayFilter1)
//     submitCards(arrayFilter2)
// })



