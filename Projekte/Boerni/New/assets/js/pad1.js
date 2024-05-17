const bilddata=[{
    imag1:'/Produkt-Ansicht/pad1_photos/Blau/1.jpg',
    imag2: '/Produkt-Ansicht/pad1_photos/Blau/2.jpg',
    imag3:'/Produkt-Ansicht/pad1_photos/Blau/3.jpg'
},
{
    imag1:'/Produkt-Ansicht/pad1_photos/Gelb/1.jpg',
    imag2: '/Produkt-Ansicht/pad1_photos/Gelb/2.jpg',
    imag3:'/Produkt-Ansicht/pad1_photos/Gelb/3.jpg'
},
{
    imag1:'/Produkt-Ansicht/pad1_photos/Rosa/1.jpg',
    imag2: '/Produkt-Ansicht/pad1_photos/Rosa/2.jpg',
    imag3:'/Produkt-Ansicht/pad1_photos/Rosa/3.jpg'    
},
{
    imag1:'/Produkt-Ansicht/pad1_photos/Silber/1.jpg',
    imag2: '/Produkt-Ansicht/pad1_photos/Silber/2.jpg',
    imag3:'/Produkt-Ansicht/pad1_photos/Silber/3.jpg'   
}
];
let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");



const o1 = document.getElementById('o1');
const i1 = document.getElementById('i1');

const o2 = document.getElementById('o2');
const i2 = document.getElementById('i2');

const o3 = document.getElementById('o3');
const i3 = document.getElementById('i3');

const o4 = document.getElementById('o4');
const i4 = document.getElementById('i4');

i1.style.border = "solid white 3.5px";
o1.style.backgroundColor = "#709775";

i1.addEventListener('click', () => {
    i1.style.border = "solid white 3.5px";
    i2.style.border = "";
    i3.style.border = "";
    i4.style.border = "";

    o1.style.backgroundColor = "#709775";
    o2.style.backgroundColor = "#edd861";
    o3.style.backgroundColor = "#f17084";
    o4.style.backgroundColor = "#d8d9db";

    image1.setAttribute("src" , bilddata[0].imag1);
    image2.setAttribute("src" , bilddata[0].imag2);
    image3.setAttribute("src" , bilddata[0].imag3);
});

i2.addEventListener('click', () => {
    i2.style.border = "solid white 3.5px";
    i1.style.border = "";
    i3.style.border = "";
    i4.style.border = "";

    o1.style.backgroundColor = "#93B2C1";
    o2.style.backgroundColor = "#709775";
    o3.style.backgroundColor = "#f17084";
    o4.style.backgroundColor = "#d8d9db";

    image1.setAttribute("src" , bilddata[1].imag1);
    image2.setAttribute("src" , bilddata[1].imag2);
    image3.setAttribute("src" , bilddata[1].imag3);
});

i3.addEventListener('click', () => {
    i3.style.border = "solid white 3.5px";
    i2.style.border = "";
    i1.style.border = "";
    i4.style.border = "";
    
    o2.style.backgroundColor = "#edd861";
    o1.style.backgroundColor = "#93B2C1";
    o3.style.backgroundColor = "#709775";
    o4.style.backgroundColor = "#d8d9db";

    image1.setAttribute("src" , bilddata[2].imag1);
    image2.setAttribute("src" , bilddata[2].imag2);
    image3.setAttribute("src" , bilddata[2].imag3);

});

i4.addEventListener('click', () => {
    i4.style.border = "solid white 3.5px";
    i2.style.border = "";
    i3.style.border = "";
    i1.style.border = "";

    o1.style.backgroundColor = "#93B2C1";
    o4.style.backgroundColor = "#709775";
    o3.style.backgroundColor = "#f17084";
    o2.style.backgroundColor = "#edd861";

    image1.setAttribute("src" , bilddata[3].imag1);
    image2.setAttribute("src" , bilddata[3].imag2);
    image3.setAttribute("src" , bilddata[3].imag3);

});

const p1 = document.getElementById("64");
const p2 = document.getElementById("256");

p1.addEventListener('click', ()=>{
    document.getElementsByClassName("price")[0].innerHTML = p1.value;
});
p2.addEventListener('click', ()=>{
    document.getElementsByClassName("price")[0].innerHTML = p2.value;
});

const zumwarenkorb = document.getElementsByClassName("zumWarenkorb")[0];
const warenkorbStatus = document.getElementsByClassName("cart_status")[0];

zumwarenkorb.addEventListener('click', ()=>{
    warenkorbStatus.innerHTML = Number(warenkorbStatus.innerHTML) + 1;
});