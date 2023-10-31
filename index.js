console.log("Js is working")

const ulElement = document.querySelector("#list");


async function getPokemon(){
    try{ 
        const response = await fetch("https://pokeapi.co/api/v2/pokemon") 
        const data = await response.json()
        console.log("CL data:",data)
        data.results.forEach(element => {
            let liElement = document.createElement('li');
            let h2Element = document.createElement('h2');
            h2Element.innerHTML = `${element.name}`
            liElement.appendChild(h2Element)
            ulElement.appendChild(liElement);
            liElement.setAttribute("id",`"${element.name}"`);
            //console.log(element.name)
        });
        data.results.forEach(async (element) => {
            let responseImg = await fetch(element.url)
            let dataImg = await responseImg.json()
            let imgElement = document.createElement('img')
            imgElement.setAttribute ("src", dataImg.sprites.front_default)
            //console.log("CL segundo fetch", dataImg.sprites.front_default)
    });
    

    }catch(error){console.log(error)}
}

getPokemon();