
console.log("Hello! We're practicing Ajax.");
    
document.addEventListener("DOMContentLoaded", function() {
    let button_1 = document.getElementById('b1')

    button_1.addEventListener('click', clickHandler1);

    function clickHandler1() {
        console.log("BUTTON 1 HAS BEEN CLICKED!");
        makeAjaxRequest();
    }

    function makeAjaxRequest() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'test.txt', true);

        xhr.onprogress = function() {
            console.log("on progress");
        }

        xhr.onload = function() {
            if (this.status == 200) {
                console.log("This is response text: ", this.responseText);
            } else {
                console.error("Failed to fetch the file. Status: ", this.status);
            }
        }

        xhr.onerror = function() {
            console.error("Request error...");
        }

        xhr.send();
    }
});