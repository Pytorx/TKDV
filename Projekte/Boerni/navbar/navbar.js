const searchbar = document.getElementById("searchArea");
const lupe = document.getElementsByClassName("search")[0];

let clicked = false;

lupe.addEventListener("click", ()=>{
    if(clicked == false){
        searchbar.style.opacity = 1;
        searchbar.style.width = 180 + "px";
        searchbar.style.padding = 10 + "px"
        lupe.style.color = "#709775";
        clicked = true;
    }
    else{
        searchbar.style.opacity = 0;
        searchbar.style.width = 0 + "px";
        searchbar.style.padding = 0 + "px"
        lupe.style.color = "";
        clicked = false;
    }
});

const searchBar = document.getElementById('searchArea');
searchBar.addEventListener('keypress', (e)=>{
    if (e.keyCode === 13) {
        window.location = window.location.origin + "/search/search.html?search=" + searchBar.value;
    }
});