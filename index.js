const text=document.getElementById("text")
const lowerdiv=document.getElementById("lowerdiv")

async function search() {
    lowerdiv.innerHTML=""
    console.log("hello");
    const response=await fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${text.value}?key=0386bca9-7411-4e24-b36e-18f10f344072`)
    const data=await response.json()
    console.log(data);
    lowerdiv.innerHTML=`<p>${data[0].shortdef[0]}</p>`
}