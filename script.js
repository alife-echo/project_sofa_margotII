let show = true
document.querySelector('.toggle-icon').addEventListener('click',(e)=>{
     if(show){
        document.querySelector('.toggle-img').src = './assets/imgs/couch.gif'
        e.target.src = './assets/vectors/vector_close.png'
        show = false
     }
     else{
        document.querySelector('.toggle-img').src = './assets/imgs/couch_main.png'
        e.target.src = './assets/vectors/vector_360.png'
        show = true
     }
})
