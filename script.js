//your JS code here. If required
function f1(){
let h1Tag= document.createElement("h1"); //we create new tag that is h1 tag
let para=document.querySelector("#status");
h1Tag.innerText="Entered Metaverse"; //in this we add some text
let parent= document.querySelector("#mainBody");
parent.insertBefore(h1Tag,para);
para.remove();
}



