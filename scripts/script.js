let searchButton = document.querySelector("#search")

searchButton.addEventListener("click", ()=>{
  console.log("botton pressed")
  sendApiRequest()
})

async function sendApiRequest(){
  let API_KEY = "JEKvjv6x2jpYaW4QEkGQHAAJCX7zxfdGD71bSwSI"
  let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
  console.log(response)
  let data = await response.json()
  console.log(data)
  useApiData(data)
}

function useApiData(data){
  document.querySelector("#content").innerHTML += data.explanation
  document.querySelector("#content").innerHTML += `<img src="${data.url}" >`
}


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

