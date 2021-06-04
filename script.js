const area=document.querySelector('.drag-area');
//const rickroll=document.querySelector('.rickroll');
dragtext=area.querySelector("header");
button=area.querySelector("button");
input=area.querySelector("input");
video=area.querySelector("video")

let file;

video.style.visibility="hidden"


button.onclick=()=>{
	input.click()
}


input.addEventListener("change", function(){
	file=this.files[0];
	showfile();
});

area.addEventListener("dragover", (lol)=>{
	lol.preventDefault();	
	area.classList.add("active");
	dragtext.textContent= "Release For Ultimate Pleasure";
})	

area.addEventListener("dragleave", (lol)=>{
	lol.preventDefault();
	area.classList.remove("active");
	dragtext.textContent= "Drag & Drop to Upload File";
});

area.addEventListener("drop", (lol)=>{
	lol.preventDefault();
	file = lol.dataTransfer.files[0]; //getting user select file, [0] if selscted multiple, only 1st is selscted.
	showfile();

});

function showfile(){
	let type = file.type;
	let validExtensions=["image/jpeg", "image/jpg", "image/png"]

	if (validExtensions.includes(type)){
		area.classList.add("rolled");
		video.style.visibility='visible';
		video.play();

		/*filereader= new filereader();
		filereader.onload=()=>{
			let fileurl=filereader.result;
			let output= `<img src="${fileurl} alt="">`;
			area.innerHTML=output;
		}*/
	}else{
		alert("Please insert an image!");
		area.classList.remove("active");
		dragtext.textContent= "Drag & Drop to Upload File";

	}
}