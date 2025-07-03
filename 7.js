document.title = "my website";
document.body.style.backgroundColor = "black";
document.body.style.border = "3px solid white";
document.body.style.padding = "20px";
document.body.style.borderRadius = "100px";
document.body.style.textAlign = "center";
document.getElementById("main-heading").innerHTML = "Welcom to MRCET";
document.body.textAlign = "center";
document.body.style.color = "white";
document.getElementById("main-heading").style.backgroundColor = "orange";
let newpara = document.createElement("p");
newpara.textContent = "this is a new paragraph 🤡";
newpara.style.color = "lavender"
newpara.style.fontSize = "20px";
document.getElementById("container").appendChild(newpara);
let newHeading = document.createElement("h1");
newHeading.innerHTML = "This is a heading added by javascript"
newHeading.style.color = "red";
document.body.appendChild(newHeading);
document.getElementById("container").appendChild(newHeading);
newHeading.setAttribute("class", "dynamic-heading")
setTimeout(() => {
    let infopara = document.getElementsByClassName("info")[0];
    if (infopara) {
        infopara.remove();
    }
}, 3000);
let mylist = document.createElement("ul")
for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li")
    li.textContent = "item " + i;
    mylist.appendChild(li);
}
mylist.children[2].remove()
document.body.appendChild(mylist)
setTimeout(() => {
    let items = mylist.getElementsByTagName("li");
    if (items[1]) {
        mylist.removeChild(items[0]);
    }
}, 4000);
mylist.style.color = "red"
let paras = document.getElementsByClassName("info");
paras[0].innerHTML = "Updated First";
paras[0].style.color = "green";
paras[0].style.fontSize = "30px";
paras[0].style.backgroundColor = "lavender";
let firstInfoo = document.querySelector(".alll");
firstInfoo.style.color = "orange";
let firstInfo = document.querySelectorAll(".query");
firstInfo.innerHtml = "FirstOnly";
firstInfo[0].style.color = "green";
firstInfo[1].style.color = "red";
firstInfo[2].style.color = "blue";
firstInfo[3].style.color = "Yellow";
let pas = document.getElementsByTagName("h4");
pas[1].style.color = "red";
pas[1].style.fontSize = "20px";