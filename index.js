const list = document.querySelectorAll(".projects-item");

for (const el of list) {
    el.addEventListener("mouseleave", function(event) {
        console.log(event);
        if(event.fromElement.classList.contains("projects-item")){
            event.fromElement.classList.add("out");
            setTimeout(function(){
                event.fromElement.classList.remove("out")
            }, 1000);
        }
    });
}


 