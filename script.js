// Smooth fade animation
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".card").forEach((el)=>{
  el.classList.add("hidden");
  observer.observe(el);
});

// Typewriter Effect
const words = [
  "AI Chatbots",
  "WhatsApp Automation",
  "Website Development",
  "Digital Marketing"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const span = document.querySelector(".hero span");

function typeEffect(){

  let current = words[wordIndex];

  if(!deleting){
    span.textContent = current.substring(0,charIndex++);
  }else{
    span.textContent = current.substring(0,charIndex--);
  }

  if(charIndex===current.length+1){
    deleting=true;
    setTimeout(typeEffect,1200);
    return;
  }

  if(charIndex===0 && deleting){
    deleting=false;
    wordIndex=(wordIndex+1)%words.length;
  }

  setTimeout(typeEffect,deleting?50:100);
}

typeEffect();


// Back To Top Button
const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.style.position="fixed";
topBtn.style.right="20px";
topBtn.style.bottom="90px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#22c55e";
topBtn.style.color="#fff";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){
topBtn.style.display="block";
}else{
topBtn.style.display="none";
}

});

topBtn.onclick=()=>{
window.scrollTo({
top:0,
behavior:"smooth"
});
};
