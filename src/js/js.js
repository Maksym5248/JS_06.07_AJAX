var out = document.getElementById("content");
var button = document.getElementById("button");
var form = document.getElementById("form");
var xhr = new XMLHttpRequest();
var json;

button.addEventListener("click", function () {
    xhr.open ("get", "fragments/tsconfig.json");
    xhr.send();
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4){
            json = eval('('+xhr.responseText+')');

            for (var i = 0; i < json.length; i++){
                var label = document.createElement("label");
                form.appendChild(label);
                label.innerText = json[i].question;
                label.style.display = "block";
                var type = document.createElement(json[i].type);
                label.appendChild(type);

                    if(json[i].answer){
                        for (var j = 0; j < json[i].answer.length; j++){
                            var option = document.createElement("option");
                            option.innerText = json[i].answer[j];
                            type.appendChild(option);
                        }
                    }
            }
            var buttonSend = document.createElement("button");
            buttonSend.innerText ="Send";
            form.appendChild(buttonSend);
        }
    });
});





/*var menu = document.querySelector(".Menu");
var out = document.getElementById("content");

menu.addEventListener("click", function (e) {
    if (e.target.tagName === "A"){
        e.preventDefault();
        var a = e.target;
        var url = a.href;

        var xhr = new XMLHttpRequest();
        xhr.open ("get", url);
        xhr.send();
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === XMLHttpRequest.DONE){
                out.innerText = this.responseText;
            }
        })
    }
});*/
