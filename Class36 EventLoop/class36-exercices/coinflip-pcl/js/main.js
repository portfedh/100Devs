document.querySelector('#tossCoin').addEventListener('click', makeReq)
let outputParagraph = document.getElementById("result");

async function makeReq(){
  console.log('Button clicked, making request')
  const res = await fetch('/api?tossCoin=true')
  const data = await res.json()
  outputParagraph.innerHTML = data.Coinflip;
  console.log(data)
}