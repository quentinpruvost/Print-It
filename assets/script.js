const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];
let numero = 0;

document.getElementById("arrow_left").addEventListener("click", function() {
	ChangeSlide(-1);
	slideDot_left();
  });

document.getElementById("arrow_right").addEventListener("click", function() {
	ChangeSlide(1);
	slideDot_right();
  });

function ChangeSlide(sens) {
	numero = numero + sens;
	if (numero > 3)
		numero = 0;
	if (numero < 0)
		numero = 3;
	document.getElementById("slide").src = "./assets/images/slideshow/" + slides[numero]["image"];
	document.getElementById("slide_text").innerHTML = slides[numero]["tagLine"];
}

function slideDot_right(){
    let dots = document.querySelectorAll(".dot");
    let dot_active = document.querySelector(".dot_selected");
    dot_active.classList.remove("dot_selected");
    if(dot_active.nextElementSibling)
    	dot_active.nextElementSibling.classList.add("dot_selected");
    else
        dots[0].classList.add("dot_selected");
}

function slideDot_left(){
    let dots = document.querySelectorAll(".dot");
    let dot_active = document.querySelector(".dot_selected");
    dot_active.classList.remove("dot_selected");
    if(dot_active.previousElementSibling)
	dot_active.previousElementSibling.classList.add("dot_selected");
    else
	dots[dots.length-1].classList.add("dot_selected");
}