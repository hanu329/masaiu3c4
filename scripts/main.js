async function apiCall(url) {

    let response = await fetch(url)
    let data =  await response.json()
    console.log(data)
    return data;


    //add api call logic here


}


function appendArticles(articles, main) {

    //add append logic here
    articles.forEach(function(el){

        let p=document.createElement("p")
        p.textContent="rahul"
        main.append(p)
    })

}

export { apiCall, appendArticles }