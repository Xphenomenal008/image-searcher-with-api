 
let acessKey="QHNjrWk5M9IeEZEq3WcJ7NWphTIJMLktmgBwFix_6Mg"
let form=document.getElementById("form")
let inputfield=document.getElementById("inputfield")
 let imgShower=document.querySelector(".imgShower")
let showBtn=document.getElementById("btn")
 let inputData=""
 let page=1

async function getData(){
    inputData=inputfield.value;
    let url=`https://api.unsplash.com/search/photos?page${page}&query=${inputData}&client_id=${acessKey}`;

 
    let response=await fetch(url);
    let data= await response.json()
    
    if(page===1){
        imgShower.innerHTML=""  //it makes empty our  image shower div before loading the new result;
    }
    let results=data.results //it produce bulky nonuseful result
    results.map((result)=>{   //we use mapping to find only useful result ,from bulkresults
        let imges=document.createElement("img")
        imges.src=result.urls.regular
        imgShower.append(imges)
       
    })
    showBtn.style.display="block" //after executing meaningful result ,it will show ou show more button,every time with the result 



}
form.addEventListener("submit",(e)=>{
    console.log(getData())
e.preventDefault()
page=1 //give our page value one
getData()//fetch data from this async function
})
showBtn.addEventListener("click",()=>{
    page++ //if we click this new page will load 
    getData()  //fetch data from this async function
    
})