document.addEventListener('DOMContentLoaded', () => {
    const imageList = document.querySelector("#image-list")
    const showSingle = document.querySelector("#show-single")
    // console.log(imageCard)
console.log(profiles)
    showImages = profiles => {
        imageList.innerHTML = Object.keys(profiles).map((key) => {
            console.log(profiles[key], key)
            return `<div id="image-card">
             <button id=${key}><img src=${profiles[key].img} >
             <p> ${profiles[key].name}</p></button>
             </div>`
        }).join('')
    }
    showImages(profiles.profile)

    imageList.addEventListener('click', function(e) {
        console.log(e.target.parentElement.id)
        // e.target.parentElement.
        let clickedId = e.target.parentElement.id
        let clickedElement = profiles.profile[clickedId]
        console.log(clickedElement)
        showSingle.innerHTML = `
        <div id="single-image">
             <img src=${clickedElement.img} >
             <button>close</button>
             </div>
        `

    })



})