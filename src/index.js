const baseURL = 'http://localhost:3000/ramens'
fetch(baseURL)
  .then(response => response.json())
  .then(data => data.forEach(allRamen => {

    const img = document.createElement('img')
    img.src = allRamen.image
   const ramenMenu = document.querySelector('#ramen-menu')
    ramenMenu.append(img)

img.addEventListener('click', () => {

        const detailImage = document.querySelector('.detail-image')
        detailImage.src = allRamen.image
        detailImage.alt = allRamen.name

        const name = document.querySelector('.name')
        name.innerText = allRamen.name

        const restaurant = document.querySelector('.restaurant')
        restaurant.innerText = allRamen.restaurant

        const ratingDisplay = document.querySelector('#rating-display')
        ratingDisplay.innerText = allRamen.rating

        const commentDisplay = document.querySelector('#comment-display')
        commentDisplay.innerText = allRamen.comment
    })
  }))

const newRamenForm = document.getElementById('new-ramen')
newRamenForm.addEventListener('submit', (event) => {
    event.preventDefault() 
    const newRamenObject = {}
    newRamenObject.name = document.querySelector('#new-name').value
    newRamenObject.restaurant = document.querySelector('#new-restaurant').value
    newRamenObject.image = document.querySelector('#new-image').value
    newRamenObject.rating = document.querySelector('#new-rating').value
    newRamenObject.comment = document.querySelector('#new-comment').value
    console.log(newRamenObject)

    
    const ramenMenu = document.querySelector('#ramen-menu')
    const newRamenItem = document.createElement('img')
    newRamenItem.src = newRamenObject.image
    ramenMenu.append(newRamenItem)
})