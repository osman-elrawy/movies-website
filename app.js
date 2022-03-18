


const bodyy =document.querySelector('.body');
let longbtn =document.querySelector('.btn-1');
let closebtn =document.querySelector(".close1");
let upto =document.querySelector('.up')


longbtn.addEventListener('click',open1)

function open1(){
    bodyy.style.display='block';
};
closebtn.addEventListener('click' ,closein);
function closein (){
    bodyy.style.display='none'
}

window.addEventListener('click' ,outside );
function outside(e){
 if(e.target===bodyy){
     closein()

 }
}



  
//  window.onscroll= function(){
//     if( window.onscrollY >=50){
//         console.log(window.onscrollY)
//         upto.style.display='block'
        
   
        
//     }

// }
window.addEventListener('onscroll' ,goup);
function goup (){
    if(window.onscrollY>=600){
        console.log(window.onscrollY)
        upto.style.display='block'
    }
}