const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        event.preventDefault();
        let key = btn.getAttribute("data-key");

        if (key === "AC") {
            display.value = "";
        } 
        else if (key === "DE") {
            display.value = display.value.slice(0, -1);
        }
        else if (key === "=") {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        }
        else {
            display.value += key;
        }
    });
});
