ak = "le1em4QfkSkaZ6G00nDbLPRV5715U83iLtUEF8gDX88"

const search = document.getElementById("input");
const showmore = document.getElementById("show-more");
const searchform = document.getElementById("search-form");
const searchresult = document.getElementById("search-result");
const nav=document.querySelector("nav");
const section=document.querySelector("section");
let user=
    ()=>{
        let n=document.createElement('p')
        section.append(n)
        let name=prompt('Enter your user id:(maximum 12 letter)')
        let len=name.length
        if(len<=12){
        n.innerText=`User id:${name}`;}
        else{
            len=0;
alert('try again!')
        }
    
    }



nav.addEventListener("click",user);
let keyword = "";
let page = 1;
async function imagesearch() {
    keyword = search.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${ak}&per_page=12`
    let response = await fetch(url);
    let data = await response.json();
    console.log(data)

    let results = data.results;


    if (page === 1) {
        searchresult.innerHTML = "";
    }


    results.map((result) => {
        const image = document.createElement("img")
        image.src = result.urls.small;
        const imageLink = document.createElement("a")
        imageLink.href = result.links.html;
        imageLink.target = " _blank";
        const imageDiv=document.createElement("mdiv")
        image.innerHTML=`
        <img src="
        `
        searchresult.appendChild(image)
        imageLink.appendChild(image);
        searchresult.appendChild(imageLink);
    })

    showmore.style.display = "block";
    showmore.style.margin = "20px 0px 20px 650px";
}


searchform.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    imagesearch();

})
showmore.addEventListener("click", () => {
    page++;
    imagesearch();
})