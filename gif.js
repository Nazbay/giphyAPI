
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');


searchForm.addEventListener('submit', function(e){
    e.preventDefault()
    const q = searchInput.value
    search(q)
})

function search(q){
    const apikey = 'gkhXWFTAuGWNXadsaGbAiQ2pOJhi8S50';
    const path = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${q}&limit=8`;

    fetch(path).then(function(res) {
        return res.json()
    }).then(function(json){
        console.log(json.data[0].images.fixed_width.url)
        const resultsEl = document.getElementById('results')
        let resultsHTML = ''

        json.data.map(function(obj){
            console.log(obj)

            const url = obj.images.fixed_width.url
            const width = obj.images.fixed_width.width
            const height = obj.images.fixed_height.height
            const title = obj.title

            resultsHTML += `<img
            src="${url}"
            width="${width}"
            height="${height}"
            alt="${title}"
            >`
        })
        resultsEl.innerHTML = resultsHTML
    }).catch(function(err){
        console.log(err.message)
    })
}
