/*===Typing animation===*/

var typed = new Typed(".typing", {
 strings:["","Student","Web Designer","Web Developer","Gamer"],
 typeSpeed:100,
  BackSpeed:60,
 loop:true
})

/*===Aside ===*/

const nav = document.querySelector(".nav"),
 navList = nav.querySelectorAll("li"), 
 totalNavList = navList.length;
 for(let i=0; i<totalNavList; i++)
{
 const a =navList[i].querySelector("a");
 a.addEventListener("click", function()
{
 for(let j=0; j<totalNavList; j++)
 {
  //if(  navList[j].querySelector("a").classList.contains("active"))
/*  {
	allSection[j].classList.add("back-section");
  } 
  
 */
  navList[j].querySelector("a").classList.remove("active");
 }
 this.classList.add("active")
// showSection(this);

 if(window.innerWidth < 1200)
{
asideSectionTogglerBtn();
}

})
}



const navTogglerBtn = document.querySelector(".nav-toggler"),
	aside = document.querySelector(".aside");
 	section = document.querySelector(".section");
	about = document.getElementById("about");
	portfolio = document.getElementById("portfolio");
	services = document.getElementById("services");
	contact = document.getElementById("contact");
	 navTogglerBtn.addEventListener("click", () => {
	asideSectionTogglerBtn();
})
function asideSectionTogglerBtn(){
aside.classList.toggle("open");
navTogglerBtn.classList.toggle("open");
section.classList.toggle("open");
about.classList.toggle("open");
portfolio.classList.toggle("open");
services.classList.toggle("open");
contact.classList.toggle("open");


}
