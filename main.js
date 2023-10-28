var area = 1;

const loginscr = document.getElementById('login');
const desktopscr = document.getElementById('desktop');

function hideAll(){
    
    
}

function setArea(){
    if (area == 0){
        desktopscr.style.display="none";
        loginscr.style.display = "block";
    }
    else if (area == 1){
        loginscr.style.display="none";
        desktopscr.style.display = "block";
    }
    else {
        hideAll();
    }
}

function setlogin(){
    area = 0;
    setArea();
}

function setmain(){
    area = 1;
    setArea();
}

let time = document.getElementById("current-time");

setInterval(() =>{
    let d = new Date
    time.innerHTML = d.toLocaleTimeString();
},1000)

