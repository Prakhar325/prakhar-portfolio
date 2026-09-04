const menuBtn=document.querySelector(".menu-btn");const nav=document.querySelector("nav");menuBtn.addEventListener("click",()=>nav.classList.toggle("show"));document.querySelectorAll("nav a").forEach(link=>link.addEventListener("click",()=>nav.classList.remove("show")));

const typingElement=document.querySelector(".typing");const words=[" | Developer"," | Problem Solver"," | Tech Enthusiast"," | Programmer"];let wordIndex=0,charIndex=0,deleting=false;
function typeEffect(){const currentWord=words[wordIndex];if(!deleting){typingElement.textContent=currentWord.substring(0,charIndex+1);charIndex++;if(charIndex===currentWord.length){deleting=true;setTimeout(typeEffect,1500);return}}else{typingElement.textContent=currentWord.substring(0,charIndex-1);charIndex--;if(charIndex===0){deleting=false;wordIndex=(wordIndex+1)%words.length}}setTimeout(typeEffect,deleting?45:80)}typeEffect();

const revealElements=document.querySelectorAll(".reveal");const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add("active")})},{threshold:.12});revealElements.forEach(element=>observer.observe(element));

document.querySelectorAll(".tilt").forEach(card=>{card.addEventListener("mousemove",event=>{const rect=card.getBoundingClientRect(),x=event.clientX-rect.left,y=event.clientY-rect.top,cx=rect.width/2,cy=rect.height/2,rx=((y-cy)/cy)*-7,ry=((x-cx)/cx)*7;card.style.transform=`perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-5px)`});card.addEventListener("mouseleave",()=>card.style.transform="")});

const glow=document.createElement("div");glow.className="cursor-glow";document.body.appendChild(glow);
document.addEventListener("mousemove",e=>{glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px"});

