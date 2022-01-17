async function apiCall(url) {

    let response = await fetch(url)
    let data =  await response.json()
    console.log(data)
    return data;


    //add api call logic here


}


function appendArticles(articles, main) {

    //add append logic here

}

export { apiCall, appendArticles }