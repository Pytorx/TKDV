const bilddata=[{
    imag1:'/Produkt-Ansicht/pad_pro_fotos/pad_pro gray.jpg',
    imag2: '/Produkt-Ansicht/pad_pro_fotos/pad_pro gray 2.jpg',
    imag3:'/Produkt-Ansicht/pad_pro_fotos/pad_pro gray 3.jpg'
},
{
    imag1:'/Produkt-Ansicht/pad_pro_fotos/pad_pro silber.jpg',
    imag2: '/Produkt-Ansicht/pad_pro_fotos/pad_pro silber 2.jpg',
    imag3:'/Produkt-Ansicht/pad_pro_fotos/pad_pro silber 3.jpg'
},
];
let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");



const o1 = document.getElementById('o1');
const i1 = document.getElementById('i1');

const o2 = document.getElementById('o2');
const i2 = document.getElementById('i2');

i1.style.border = "solid white 3.5px";
o1.style.backgroundColor = "#709775";

//#ABAFB2
//#DEE0DF

i1.addEventListener('click', () => {
    i1.style.border = "solid white 3.5px";
    i2.style.border = "";

    o1.style.backgroundColor = "#709775";
    o2.style.backgroundColor = "#DEE0DF";

    image1.setAttribute("src" , bilddata[0].imag1);
    image2.setAttribute("src" , bilddata[0].imag2);
    image3.setAttribute("src" , bilddata[0].imag3);
});

i2.addEventListener('click', () => {
    i2.style.border = "solid white 3.5px";
    i1.style.border = "";

    o1.style.backgroundColor = "#ABAFB2";
    o2.style.backgroundColor = "#709775";

    image1.setAttribute("src" , bilddata[1].imag1);
    image2.setAttribute("src" , bilddata[1].imag2);
    image3.setAttribute("src" , bilddata[1].imag3);
});

const p1 = document.getElementById("64");
const p2 = document.getElementById("128");
const p3 = document.getElementById("256");
const p4 = document.getElementById("512");

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

const zumwarenkorb = document.getElementsByClassName("zumWarenkorb")[0];
const warenkorbStatus = document.getElementsByClassName("cart_status")[0];

zumwarenkorb.addEventListener('click', ()=>{
    warenkorbStatus.innerHTML = Number(warenkorbStatus.innerHTML) + 1;
});