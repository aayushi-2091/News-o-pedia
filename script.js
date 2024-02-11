let cardData = document.querySelector("#cardData");
const apiKey = "d06fba07d8d74db79b2fd9bb69cf83c5"; 
let Btn = document.getElementById("btn");
let inputData = document.getElementById("input_data");
const options = {
    method: 'GET',
};

const getNews = (search) => {
    fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${apiKey}`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            cardData.innerHTML = "";
            response.articles.forEach(function (article) {
                console.log(article);
                let divs = document.createElement("div");
                divs.classList.add("card");
                cardData.appendChild(divs);
                divs.innerHTML = `
                    <img src="${article.urlToImage}" alt="image">
                    <h3>${article.title}</h3>
                    <p>${article.description}</p>
                `;
                divs.addEventListener("click",function(){
                    window.open(article.url);
                })
            });
        })
        .catch(err => console.error(err));
};

Btn.addEventListener("click", function () {
    let inputText = inputData.value;
    getNews(inputText);
});

getNews("India");

function head_click(headname){   
    if(headname){
        getNews("India");
    }
}
function nav_click(navname) {
    if (navname=="first") {
        document.getElementById("first").style.color="rgb(65, 60, 54)";
        document.getElementById("second").style.color="black";
        document.getElementById("third").style.color="black";
        document.getElementById("fourth").style.color="black";
    }
    if (navname=="second") {
        document.getElementById("first").style.color="black";
        document.getElementById("second").style.color="rgb(65, 60, 54)";
        document.getElementById("third").style.color="black";
        document.getElementById("fourth").style.color="black";
    }
    if (navname=="third") {
        document.getElementById("first").style.color="black";
        document.getElementById("second").style.color="black";
        document.getElementById("third").style.color="rgb(65, 60, 54)";
        document.getElementById("fourth").style.color="black";
    }
    if (navname=="fourth") {
        document.getElementById("first").style.color="black";
        document.getElementById("second").style.color="black";
        document.getElementById("third").style.color="black";
        document.getElementById("fourth").style.color="rgb(65, 60, 54)";
    }
    getNews(navname); 
}
window.onscroll = function() {
    document.getElementById("navbar").style.top = "0";
  };