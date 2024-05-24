let d=document.querySelector(".tim");
let aud=new Audio("mat.mp3");


let arr=[{img:"https://upload.wikimedia.org/wikipedia/en/a/af/Alan_Walker_-_On_My_Way.png",
        text1:"On My Way",
        text2:"Alan Walker",
        aud1:"On My Way-(PagalSongs.Com.IN).mp3"   
    },

    {img:"https://i1.sndcdn.com/artworks-58592561-949e-4c32-a7f8-931901776e74-0-t240x240.jpg",
        text1:"Mary on a Cross",
        text2:"Seven Inches Of Satanic Panic",
        aud1:"Mary-On-A-Cross(PagalWorld).mp3"   
},
    {
        img:"https://i.pinimg.com/564x/f9/1a/d3/f91ad305cdd7d6f2d3b32661b175e6e2.jpg",
        text1:"Unstoppable",
        text2:"Sia",
        aud1:"Unstoppable.mp3"   
    },
    
];
let count=0;
let len=arr.length;
let left=document.querySelector(".left_1")
let right=document.querySelector(".right_1")
let a=document.querySelector(".x");
let b=document.querySelector(".y");
let c=document.querySelector(".z");



left.addEventListener("click",function()
{

//   a.setAttribute()
if(d.firstElementChild.classList.contains("fa-play"))
{
d.firstElementChild.classList.remove("fa-play");
    d.firstElementChild.classList.add("fa-pause");
}
else{
    d.firstElementChild.classList.remove("fa-pause")
    d.firstElementChild.classList.add("fa-play");
}

aud.setAttribute("src",arr[count%len].aud1)

a.setAttribute("src",arr[count%len].img)
b.innerText=arr[count%len].text1;

c.innerText=arr[count%len].text2;
count++;
  

});


d.addEventListener("click",function()
{
    
   
if(d.firstElementChild.classList.contains("fa-play"))
{
   
    aud.play();
    d.firstElementChild.classList.remove("fa-play");
    d.firstElementChild.classList.add("fa-pause");
}
else{
    aud.pause();

    d.firstElementChild.classList.remove("fa-pause")
    d.firstElementChild.classList.add("fa-play");
}

});
let inp=document.querySelector("input");
aud.addEventListener("timeupdate",function()
{
// let curr=aud.currentTime;
inp.value=aud.currentTime*100/aud.duration;
});
let g=document.querySelector(".cook");
g.addEventListener("change",function()
{
aud.currentTime=(inp.value*aud.duration)/100;
});

