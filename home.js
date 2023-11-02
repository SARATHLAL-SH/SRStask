let menuIcon = document.querySelector("#menuIcon");
let navlinks = document.querySelector("#nav-links");
menuIcon.addEventListener("click", () => {
  navlinks.classList.toggle("active");
  menuIcon.classList.toggle("activebtn");
});
let popupClose = document.querySelector(".popupClose");
let loginbtn = document.querySelector(".btn-login");
let popupContainer = document.querySelector(".popupContainer");
popupClose.addEventListener("click", () => {
  popupContainer.style.display = "none";
});

loginbtn.addEventListener("click", () => {
  popupContainer.style.display = "block";
});

let inputDetails = document.getElementsByClassName("popupContainer");
function redirect(e){
    e.preventDefault();
    setTimeout(()=>{ window.history.back();},5000)
   
}
// function emailsend(e) {
  
//   Email.send({
//     Host: "smtp.elasticemail.com",
//     Username: "srstest@gmail.com",
//     Password: "EF6A54D67DBA6D19B43DD342E37F542A42D3",
//     To: "sarathlalsh@gmail.com",
//     From: "sarathlalsh@gmail.com",
//     Subject: "Check user Details",
//     Body: "this is my e-mail testing",
//   }).then((message) => alert(message));

// }
let finalrotation = document.querySelector('.finalrotation');
let finalsection =document.querySelector('.finalsectionContainer');
let greyball1 =document.querySelector('.greyball1');
let greyball2 =document.querySelector('.greyball2');
let greyball3 =document.querySelector('.greyball3');
let greyball4 =document.querySelector('.greyball4');
let greyball5 =document.querySelector('.greyball5');
let greyball6 =document.querySelector('.greyball6');
let hoverContent = document.querySelector('.hoverContent');
let hoverContent2 = document.querySelector('.hoverContent2');
let hoverContent3 = document.querySelector('.hoverContent3');
let hoverContent4 = document.querySelector('.hoverContent4');
let hoverContent5 = document.querySelector('.hoverContent5');
let hoverContent6 = document.querySelector('.hoverContent6');
let timout;
finalsection.addEventListener('mouseover',(e)=>{
    clearTimeout(timout);
    timout=setTimeout(()=>{
        
        if(e.target.className==='grey greyball1'){
            finalrotation.style.boxShadow = '1px 2px 29px red';
            hoverContent.style.display='block';
            cancelAnimationFrame(finalrotation);
            
        hoverContent.innerHTML='"I was amazed by the web design work done by ABC Web Solutions. They transformed our outdated website into a modern and visually appealing masterpiece. Their attention to detail and dedication to our vision were outstanding. We couldnt be happier with the results!"'
        }
        else if(e.target.className==='grey greyball2'){
            finalrotation.style.boxShadow = '1px 2px 29px red';
            hoverContent2.style.display='block';
        hoverContent2.innerHTML='""Working with Jane, my personal fitness trainer, has been a game-changer. Her customized workouts and nutritional guidance have helped me achieve my fitness goals faster than I ever thought possible. Janes enthusiasm and encouragement make every session enjoyable."'
        }
        else if(e.target.className=='grey greyball3')
        {
            finalrotation.style.boxShadow = '1px 2px 29px red';
            hoverContent3.style.display='block';
        hoverContent3.innerHTML='Ive been a loyal customer of XYZ Shop for years. The product quality is consistently excellent, and their customer service is top-notch. I recently had an issue with a delivery, and their team resolved it promptly and professionally. I highly recommend XYZ Shop for all your shopping needs."'
        }
        else if(e.target.className=='greyR greyball4'){
            finalrotation.style.boxShadow = '1px 2px 29px red';
            hoverContent4.style.display='block';
            hoverContent4.innerHTML='Dining at The Garden Table was a delightful experience. The ambiance was charming, and the food was simply delicious. The staffs friendly and attentive service made our visit even more enjoyable. Well definitely be back'
        }
        else if(e.target.className=='greyR greyball5'){
            finalrotation.style.boxShadow = '1px 2px 29px red';
            hoverContent5.style.display='block';
            hoverContent5.innerHTML='"We ve been using the software developed by Pinnacle Solutions for our business, and it has streamlined our operations and increased efficiency. The software is robust and user-friendly. Anytime we ve had questions or needed support, their team has been quick to respond and assist us."'
        }
        else if(e.target.className=='greyR greyball6'){
            finalrotation.style.boxShadow = '1px 2px 29px red';
            hoverContent6.style.display='block';
        hoverContent6.innerHTML='Ive been using ABC Learning for online courses, and Im extremely impressed. The courses are well-structured, and the instructors are knowledgeable and engaging. Ive gained valuable skills that have advanced my career. ABC Learning is a fantastic resource for lifelong learners'
        }
    },300)
   
});
greyball1.addEventListener('mouseout',()=>{
        hoverContent.style.display='none';
        finalrotation.style.boxShadow = '1px 2px 29px blue';
    });

   

greyball2.addEventListener('mouseout',()=>{
    hoverContent2.style.display='none';
    finalrotation.style.boxShadow = '1px 2px 29px blue';
});

greyball3.addEventListener('mouseout',()=>{
    hoverContent3.style.display='none';
    finalrotation.style.boxShadow = '1px 2px 29px blue';
});

greyball4.addEventListener('mouseout',()=>{
    hoverContent4.style.display='none';
    finalrotation.style.boxShadow = '1px 2px 29px blue';
});

greyball5.addEventListener('mouseout',()=>{
    hoverContent5.style.display='none';
    finalrotation.style.boxShadow = '1px 2px 29px blue';
});

greyball6.addEventListener('mouseout',()=>{
    hoverContent6.style.display='none';
    finalrotation.style.boxShadow = '1px 2px 29px blue';
});