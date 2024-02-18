let selectedSeat = 0;
let seatLeft = 40;
let totalPrice = 0;
let discountPrice = 0;
let seats = document.querySelectorAll(".seat")
for(let index = 0 ; index < 40 ; index++){
    seats[index].addEventListener('click', function(){
        if(seats[index].classList.contains("seat-selected")){
            return
        }
        if(selectedSeat === 4){
            myfunc()
            alert("You cann't buy above 4 tickets at a time.")
            return
        }
        seats[index].classList.remove("seat-not-selected");
        seats[index].classList.add("seat-selected");
        seats[index].classList.add("cursor")
        let seatName = seats[index].innerText
        ticketList.insertAdjacentHTML('beforeend', `
        <div class="flex justify-between">
        <p>${seatName}</p>
        <p>Economy</p>
        <p>550</p>
        </div>
        `);
        let seatIs = document.getElementById("seatSelected")
        selectedSeat = selectedSeat + 1
        if(selectedSeat === 4){
            document.getElementById("apply").removeAttribute("disabled")
            document.getElementById("apply").classList.remove("cursor-not-allowed")
        }
        seatIs.innerText = selectedSeat
        seatLeft = seatLeft - 1
        let seatRemain = document.getElementById("seatLeft")
        seatRemain.innerText = seatLeft
        totalPrice = totalPrice + 550;       
        document.getElementById('totalP').innerText = totalPrice
        document.getElementById('finalPrice').innerText = totalPrice;
        if(selectedSeat === 4){
            seats[index].classList.add("cursor")
        }
    })
}
let apply = document.getElementById("apply")
apply.addEventListener("click", function(){
    let input = document.getElementById("inputBtn")
    let inputText = input.value
    if(inputText === "NEW15"){
        discountPrice = totalPrice * (15 / 100)
        totalPrice = totalPrice - discountPrice
        let discountedPrice = Math.floor(totalPrice)
        document.getElementById("discount-section").classList.remove("hidden")
        document.getElementById("discount-section").classList.add("flex")
        document.getElementById("showDiscount").innerText = discountPrice
        document.getElementById('finalPrice').innerText = discountedPrice
        document.getElementById("coupon-container").classList.add("hidden")
        document.getElementById("error").classList.add("hidden")
    } else if(inputText === "Couple 20"){
        discountPrice = totalPrice * (20 / 100)
        totalPrice = totalPrice - discountPrice
        let discountedPrice = Math.floor(totalPrice)
        document.getElementById("discount-section").classList.remove("hidden")
        document.getElementById("discount-section").classList.add("flex")
        document.getElementById("showDiscount").innerText = discountPrice
        document.getElementById('finalPrice').innerText = discountedPrice
        document.getElementById("coupon-container").classList.add("hidden")
        document.getElementById("error").classList.add("hidden")
    } else{
        document.getElementById("error").classList.remove("hidden")
    }
})

function myfunc(){
    if(selectedSeat === 4){
        for(let index = 0 ; index < 40 ; index++){
            seats[index].classList.add("cursor")
        } 
    }
}
function showHidePopUp(){
    document.getElementById('popUp').classList.toggle("hidden")
}