var startupsound = document.getElementById("startup")

function togglestartmenu(){
    var startmenu = document.getElementById("menuid")
    var documentbutton = document.getElementById("documentbuttonid")
    var systembutton = document.getElementById("systembuttonid")
    var programbutton = document.getElementById("programbuttonid")

    if (startmenu.style.display == "none"){
        startmenu.style.display = "block";
        programbutton.style.display = "block";
        documentbutton.style.display = "block";
        systembutton.style.display = "block";
    }
    
    else{
        startmenu.style.display = "none";
        programbutton.style.display = "none";
        documentbutton.style.display = "none";
        systembutton.style.display = "none";
    }
}

function programbuttonfunc(){
    var programfolder = document.getElementById("programfolderid")
    var programfolderx = document.getElementById("programfolderxid")
    programfolder.style.display = "block";
    programfolderx.style.display = "block";
}

function documentbuttonfunc(){
    var documentfolderx = document.getElementById("documentfolderxid")
    var documentfolder = document.getElementById("documentfolderid")
    documentfolder.style.display = "block";
    documentfolderx.style.display = "block";
}

function systempagefunc(){
    var systempage = document.getElementById("systempageid")
    var systempagex = document.getElementById("systempagexid")
    //var systempageok = document.getElementById("systempageokid") Fix this at some point
    //systempageok.style.display = "block";
    systempagex.style.display = "block";
    systempage.style.display = "block";
}

function quitprogrambuttonfunc(){
    var programfolder = document.getElementById("programfolderid")
    var programfolderx = document.getElementById("programfolderxid")
    programfolder.style.display = "none";
    programfolderx.style.display = "none";
}

function quitdocumentbuttonfunc(){
    var documentfolderx = document.getElementById("documentfolderxid")
    var documentfolder = document.getElementById("documentfolderid")
    documentfolder.style.display = "none";
    documentfolderx.style.display = "none";
}

function quitsystempagefunc(){
    var systempage = document.getElementById("systempageid")
    var systempagex = document.getElementById("systempagexid")
    //var systempageok = document.getElementById("systempageokid") Fix this at some point
    //systempageok.style.display = "none";
    systempagex.style.display = "none";
    systempage.style.display = "none";
}


window.onload = function(){
    document.getElementById("startup").play()
}
startupsound.volume = 0.03;