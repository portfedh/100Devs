//Get a dog photo from the dog.ceo api and place the photo in the DOM


function getFetch(){
  const url = 'https://dog.ceo/api/breeds/image/random'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => { 
        console.log(data);
        let image = String(data.message);
        document.querySelector('#dogImageHere').setAttribute("src", image);
    })
      .catch(err => { console.log(`error ${err}`)});
}

getFetch()

