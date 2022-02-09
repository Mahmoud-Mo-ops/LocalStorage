let lis =document.querySelectorAll('ul li');
let exp = document.querySelector(".experiment");

if(window.localStorage.getItem("color")){ 
    //if there are color in local storage
    //[1] add color to Div
    exp.style.backgroundColor=window.localStorage.getItem("color");
    //[2] Remove Active Class from All lis
    lis.forEach((li)=>{
        li.classList.remove('active');
    });
    // [3] Add active class to current color
    document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active")
} 

lis.forEach((ele)=>{
    ele.addEventListener('click',(li)=> {
        // console.log(li.currentTarget.dataset.color)
        // remove active classe from Lis
        lis.forEach((li)=>{
            li.classList.remove('active')
        })
        // Add Active Class To Current Element
        li.currentTarget.classList.add('active');
        //Add current Color To Local Storage
        window.localStorage.setItem("color",li.currentTarget.dataset.color);
        // change Div Background color
        exp.style.backgroundColor=li.currentTarget.dataset.color;
    })
})
