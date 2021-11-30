'use strict'
let show = document.getElementById("show");
let divs = document.getElementById("styles");
let photoes = document.getElementById("photogrid");
let random = document.getElementById("randomizer");
show.addEventListener("click", showfunc);
let imgaaray = ['h1.jpg', 'h2.jpg', 'h3.jpg', 'h4.jpg', 'h5.jpg', 'h6.jpg', 'h7.jpg', 'h8.jpg', 'h9.jpg', 'h10.jpg', 'h11.jpg', 'h12.jpg', 'h13.jpg', 'h14.jpg', 'h15.jpg', 'h16.jpg', 'h17.jpg'];
let images1 = document.getElementById("img1");let images2 = document.getElementById("img2");let images3 = document.getElementById("img3");let images4 = document.getElementById("img4");let images5 = document.getElementById("img5");let images6 = document.getElementById("img6");let images7 = document.getElementById("img7");let images8 = document.getElementById("img8");let images9 = document.getElementById("img9");let images10 = document.getElementById("img10");let images11 = document.getElementById("img11");let images12 = document.getElementById("img12");let images13 = document.getElementById("img13");let images14 = document.getElementById("img14");let images15 = document.getElementById("img15");let images16 = document.getElementById("img16");let images17 = document.getElementById("img17");

let condition = 0;
function showfunc(){
    if(condition <= 0){
    //button show code--------------------------------------- 
    condition = 1;
    random.removeAttribute("style");
    random.setAttribute("id", "hide");
    random.textContent = "Randomize";
    divs.appendChild(random);
    show.textContent = "Hide";
    photogrid.removeAttribute("style");
}
else{
    condition = 0;
    document.getElementById("hide").remove();
    show.textContent = "Show";
    
    photoes.setAttribute("style", "display: none");
}
random.addEventListener('click', randomize) 
        function randomize(){
          let images1 = document.getElementById("img1");let images2 = document.getElementById("img2");let images3 = document.getElementById("img3");let images4 = document.getElementById("img4");let images5 = document.getElementById("img5");let images6 = document.getElementById("img6");let images7 = document.getElementById("img7");let images8 = document.getElementById("img8");let images9 = document.getElementById("img9");let images10 = document.getElementById("img10");let images11 = document.getElementById("img11");let images12 = document.getElementById("img12");let images13 = document.getElementById("img13");let images14 = document.getElementById("img14");let images15 = document.getElementById("img15");let images16 = document.getElementById("img16");let images17 = document.getElementById("img17");
            images1.remove();images2.remove();images3.remove();images4.remove();images5.remove();images6.remove();images7.remove();images8.remove();images9.remove();images10.remove();images11.remove();images12.remove();images13.remove();images14.remove();images15.remove();images16.remove();images17.remove();
            imgaaray.sort(function(){ return 0.1 - Math.random()})
            for (let i = 0; i < imgaaray.length; i++) {
              let imagescreator = document.createElement("img");
              photogrid.appendChild(imagescreator);
              imagescreator.setAttribute("src","/media/photo/"+imgaaray[i]);
              imagescreator.setAttribute("id","img"+[i+1]);
            //photogrid.innerHTML += `<img src="/media/photo/${imgaaray[i]}">` 
            //-------modifikuotas kad nereiktu naudoti sitos senienos--------
          }
        }


}

