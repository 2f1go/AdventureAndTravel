var load;  

function loAder(){
    load = setTimeout(showPage, 2000);
    document.getElementById("oi").style.backgroundColor = "white";
    document.getElementById("myDiv").style.display = "none";
}

function showPage(){
    document.getElementById("oi").style.backgroundColor = "#fff6e9";
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";  
}