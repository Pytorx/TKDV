let image1 = document.getElementById("image1");



const o1 = document.getElementById('o1');
const i1 = document.getElementById('i1');

const o2 = document.getElementById('o2');
const i2 = document.getElementById('i2');

const o3 = document.getElementById('o3');
const i3 = document.getElementById('i3');

i1.style.border = "solid white 3.5px";
o1.style.backgroundColor = "#709775";

//#ABAFB2
//#EDE0D4
//#DEE0DF

i1.addEventListener('click', () => {
    i1.style.border = "solid white 3.5px";
    i2.style.border = "";
    i3.style.border = "";

    o1.style.backgroundColor = "#709775";
    o2.style.backgroundColor = "#EDE0D4";
    o3.style.backgroundColor = "#DEE0DF";

    image1.setAttribute("src" , "/Produkt-Ansicht/laptop_fotos/laptop_gray.jpg");
});

i2.addEventListener('click', () => {
    i2.style.border = "solid white 3.5px";
    i1.style.border = "";
    i3.style.border = "";

    o2.style.backgroundColor = "#709775";
    o1.style.backgroundColor = "#ABAFB2";
    o3.style.backgroundColor = "#DEE0DF";

    image1.setAttribute("src" , "/Produkt-Ansicht/laptop_fotos/laptop_gold.jpg");
});

i3.addEventListener('click', () => {
    i3.style.border = "solid white 3.5px";
    i2.style.border = "";
    i1.style.border = "";

    o3.style.backgroundColor = "#709775";
    o1.style.backgroundColor = "#ABAFB2";
    o2.style.backgroundColor = "#EDE0D4";

    image1.setAttribute("src" , "/Produkt-Ansicht/laptop_fotos/laptop_silber.jpg");

});

const p1 = document.getElementById("256");
const p2 = document.getElementById("512");
const p3 = document.getElementById("1");
const p4 = document.getElementById("2");

p1.addEventListener('click', ()=>{
    document.getElementsByClassName("price")[0].innerHTML = p1.value;
});
p2.addEventListener('click', ()=>{
    document.getElementsByClassName("price")[0].innerHTML = p2.value;
});
p3.addEventListener('click', ()=>{
    document.getElementsByClassName("price")[0].innerHTML = p3.value;
});
p4.addEventListener('click', ()=>{
    document.getElementsByClassName("price")[0].innerHTML = p4.value;
});