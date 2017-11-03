// Promises are, just like callbacks, a way of dealing with things being asynchronous - when we don't know for certain in what order things will happen. But promises are more powerful than callbacks because they compose - you can combine promises and chain them, all kinds of cool stuff - I've showed you some in this video, but there is WAY more you'll be able to do when you get comfortable with promises.

import loadImagePromised
from './load-image-promised'

let whenCatLoaded =
  loadImagePromised('images/cat3.jpg')

whenCatLoaded.then((img) => {
  let imgElement =
    document.createElement("img")
  imgElement.src = img.src
  document.body.appendChild(imgElement)
})


// Another Example

import loadImage from './load-image'

let addImg = (src) => {
  let imgElement =
    document.createElement("img")
  imgElement.src = src
  document.body.appendChild(imgElement)
}

Promise.all([
  loadImage('images/cat1.jpg'),
  loadImage('images/cat2.jpg'),
  loadImage('images/cat3.jpg'),
  loadImage('images/cat4.jpg')
]).then((images) => {
  images.forEach(img => addImg(img.src))
}).catch((error) => {
  // handle error later
