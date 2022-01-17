async function apiCall(url) {

    let response = await fetch(url)
    let data =  await response.json()
     data = data.articles;
    console.log(data)
    return data;


    //add api call logic here


}


function appendArticles(articles, main) {

    //add append logic here
    articles.forEach(function(el){

        let p=document.createElement("p")
        p.textContent="rahul"
        p.style.fontSize="200px"
        main.append(p)
    })

}

export { apiCall, appendArticles }