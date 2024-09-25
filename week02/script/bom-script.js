const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener("click", function() {
    const li = document.createElement("li");
    const d_button = document.createElement("button");
    
    if (input.value.trim()!== "") {

        li.textContent = input.value;
        d_button.textContent = "❌";
        li.append(d_button);
        list.append(li);
    
        input.value = "";
        input.focus();

        d_button.addEventListener("click", function(){
            list.removeChild(li);
            input.focus();
        });
    }
});
