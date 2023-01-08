function getData(){
    return document.getElementById('dataSearch').ariaValueMax;
}

async function call() {
    let request = '';
    fetch("./secrets.json").then(response => {
        return response.json();
    }).then(async function (myJSON) {
        request = `https://api.nasa.gov/planetary/apod?api_key=JEKvjv6x2jpYaW4QEkGQHAAJCX7zxfdGD71bSwSI` + getData()
            await fetch(request).then(function (response) {
                return response.json();    
        }).then(function (myJSON) {

            p = document.getElementById("description");
            p.innerHTML - myJSON.explanation;


            img = document.getElementById("spacePic");
            img.src = myJSON.url;
        })
    });
}