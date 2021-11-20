var elForm = document.querySelector("#form_submit");
var elInput = document.querySelector("#input_check");


elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
    var inputDialo = Number(elInput.value.trim());
    result = []

    if (inputDialo <= 0){
        alert("Minimalniy bir kiritishingiz mumkin");
        return console.log("Minimalniy bir kiritishingiz mumkin");
    }else if (isNaN(inputDialo)) {
        alert("Son kiriting");
        return result;
    }
})