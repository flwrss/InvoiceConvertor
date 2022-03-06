let service = ""
let usedThisService1 = false
let usedThisService2 = false
let usedThisService3 = false
let allPrice = []
let total = 0

const getTotal = ()=>{
    for(let i = 0 ; i< allPrice.length ; i++){
        total += allPrice[i]
    }
    return total
}

const getPrice = ()=>{
    if (service === "Wash Car" ){
    return price = 10
    }else if (service === "Mow Lawn" ){
     return price = 20
    }else if(service === "Pull Weeds" ){  
    return price = 30
    }
}


const washCarBtn = document.getElementById("main__washcar-btn")
const mowLawnBtn = document.getElementById("main__mowlawn-btn")
const pullWeedsBtn = document.getElementById("main__pullweeds-btn")
const tasks = document.getElementById("tasks")
const paymentTotal = document.getElementById("payment__total")
const invoiceBtn = document.getElementById("invoice-btn")

function renderTasks(service, price){
    tasks.innerHTML += `
    <div class="tasks__individual">
        <p class="tasks__name">${service}</p>  
        <button id="remove-btn">Remove</button>
        <span class="tasks__price">
            $<strong>
                ${price}
            </strong>
        </span>
    </div>`
}


washCarBtn.addEventListener("click" , ()=>{
    if(!usedThisService1){
        service = "Wash Car"
        getPrice()
        allPrice.push(price)
        renderTasks(service , price)
        getPrice()
        getTotal()
        paymentTotal.innerText = "$" + total
   }
   usedThisService1 = true
   total = 0
})
mowLawnBtn.addEventListener("click" , ()=>{
   if(!usedThisService2){
        service = "Mow Lawn"
        getPrice()
        allPrice.push(price)
        renderTasks(service , price)
        getTotal()
        paymentTotal.innerText = "$" + total
   }
   usedThisService2 = true
   total = 0
})
pullWeedsBtn.addEventListener("click" , ()=>{
    if(!usedThisService3){
        service = "Pull Weeds"
        getPrice()
        allPrice.push(price)
        renderTasks(service , price)
        getTotal()
        paymentTotal.innerText = "$" + total
    }
    usedThisService3 = true
    total = 0
})
invoiceBtn.addEventListener("click",()=>{
    tasks.innerHTML = ""
    allPrice = []
    total = 0
    paymentTotal.innerText = "$0"
    usedThisService1 = false
    usedThisService2 = false
    usedThisService3 = false
})
