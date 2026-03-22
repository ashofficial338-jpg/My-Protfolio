AOS.init();

// Loader
window.onload = () => document.getElementById('loader').style.display = 'none';

// Typing
const text=["Full Stack Developer","MERN Developer"];
let i=0,j=0,del=false;
function type(){
 let current=text[i];
 document.querySelector('.typing').textContent=current.substring(0,del?j--:j++);
 if(!del && j>current.length){del=true;setTimeout(type,1000);return}
 if(del && j<0){del=false;i=(i+1)%text.length}
 setTimeout(type,del?50:100);
}
type();

// Dark Mode Toggle
document.getElementById('themeToggle').onclick = () => {
 document.body.classList.toggle('light-mode');
};
