function checkNumber() {
    let input = document.getElementById("numberInput").value;
    let result = document.getElementById("result");
    let number = parseInt(input);

    if (number >= 1 && number <= 100) {
        result.textContent = "Valid entry";

    } else {
        result.textContent = "Invalid entry";

    }
}


function checkAlphabet() {
    let input = document.getElementById("charInput").value.trim();
    let result = document.getElementById("Char");
    let alphabetRegex = /^[a-zA-Z]$/;

    if (alphabetRegex.test(input)) {
        result.textContent = "Valid entry";

    } else {
        result.textContent = "Invalid entry: Not an alphabet";

    }
}