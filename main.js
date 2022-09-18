var startmenu = document.getElementById("menu")
var startupsound = document.getElementById("startup")

function togglestartmenu(){
    if (startmenu.style.display == "none"){
        startmenu.style.display = "block";
    }
    
    else{
        startmenu.style.display = "none";
    }
}

startupsound.volume = 0.03;