const result = document.getElementById("result");
const btnPrint = document.getElementById("btnPrint");

const startRange = document.getElementById("startRange");
const endRange = document.getElementById("endRange");

function isEven(number) {
    return number % 2 === 0;
}

function createElementAndAppendToResult(content) {
    const newElement = document.createElement("p");
    newElement.textContent = content;
    result.appendChild(newElement);
}

function showResult(type, startRange, endRange) {
    for (let i = startRange; i <= endRange; i++) {
        if (type === "even") {
            if (isEven(i)) {
                createElementAndAppendToResult(i);
            }
        } else {
            if (!isEven(i)) {
                createElementAndAppendToResult(i);
            }
        }
        
    }
}

function validateValue(input) {
    let inputValue = parseInt(input.value);
    let maxValue = parseInt(input.max);
    let minValue = parseInt(input.min);

    if (inputValue > maxValue) {
        input.value = maxValue;
    }

    if (inputValue < minValue) {
        input.value = minValue;
    }
}

btnPrint.addEventListener("click", () => {
    result.textContent = "";

    const startRangeNumber = startRange.value;
    const endRangeNumber = endRange.value;
    const type = document.getElementById("type").value;

    showResult(type, startRangeNumber, endRangeNumber);
})


startRange.addEventListener('input', function() {
    validateValue(this);
});

endRange.addEventListener('input', function() {
    validateValue(this);
});
