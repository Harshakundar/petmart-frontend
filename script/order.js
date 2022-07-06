let btn = document.querySelectorAll(".get")

btn.forEach(btn1 => {
    btn1.addEventListener("click", (ev) => {
        // Set current selected pet in localStorage
        let curItem = {
            id: ev.path[1].children[0].innerText,
            name: ev.path[1].children[1].innerText,
            img: ev.path[2].children[0].src,
            price: ev.path[1].children[3].innerText.split('Rs ')[1]
        }
        localStorage.setItem('curItem', JSON.stringify(curItem))
        console.log(JSON.parse(localStorage.getItem('curItem')));
    })
})

function getX() {
    // Take data from localStorage,convert it to object and store it in variable pet
    var pet = JSON.parse(localStorage.getItem("curItem"))
    console.log(pet);
    // Assign data to html tags
    document.getElementById("product").value = pet.name
    document.getElementById("amt").value = pet.price
    document.getElementById("pid").value = pet.id
    document.querySelector("img").src = pet.img
}

let quantity = document.querySelector("#qty")
quantity.addEventListener("change", () => {
    let price = document.querySelector("#amt")

    var pet = JSON.parse(localStorage.getItem("curItem"))
    let amt = pet.price;
    let qty = quantity.value;
    console.log("amt value" + amt + "and quantiy is" + qty)
    let val = parseInt(qty) * parseInt(amt)
    price.value = (val)
    console.log(val)


})
