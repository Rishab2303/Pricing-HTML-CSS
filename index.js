let basic_m = document.querySelector("#b-m")
let prof_m = document.querySelector("#p-m")
let mast_m = document.querySelector("#m-m")

let checkbox = document.querySelector(".toggle")
checkbox.addEventListener('change', (event) => {
    if (event.target.checked) {
        basic_m.innerText = "$19.99";
        prof_m.innerText = "$24.99";
        mast_m.innerText = "$39.99"
            ;
    } else {
        basic_m.innerText = "$199.9";
        prof_m.innerText = "$249.9";
        mast_m.innerText = "$399.9"
    }
})
console.log("ram")