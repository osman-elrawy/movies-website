


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

var up=document.getElementsByClassName("up")[0]
//  window.addEventListener('onscroll' ,goup);
window.onscroll=function  (){
    if(window.scrollY>=2000){
        console.log(window.onscrollY)
        document.getElementsByClassName("up")[0].style.display="block"
    }else{
        document.getElementsByClassName("up")[0].style.display="none"
    }
}
document.getElementsByClassName("up")[0].onclick= function (){
 window.scrollTo({
     top:0,behavior:"smooth"
 })

} 
// 2092.800048828125 test
// 