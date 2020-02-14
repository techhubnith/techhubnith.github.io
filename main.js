// for typewriter effect
let j=0,text = 'A technical society for electrical engineers.';
let motto = document.querySelector('.c1title p');
function typing(){
    if(j<text.length){
        motto.innerHTML += text.charAt(j);
        j++;
    }
    setTimeout(typing,100);   
}
typing();

let title = document.querySelectorAll('.c1heading');
let title_text = 'TechHub';
let i =0;
function display(){
    if(i<title.length){
        title[i].innerHTML = title_text.charAt(i);
        i++;
    }
    setTimeout(display,500);
}
display();
