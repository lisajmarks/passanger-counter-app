//document.getElementById("count-el").innerText = 5

//html get me the element "count-el"
let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")

function increment() { 
    count += 1 
    countEl.textContent = count
}

function save() { 
    let sCount = " " + count + " - "
    saveEl.textContent += sCount
    count = 0
    countEl.textContent = count
}