let pokemonList = document.getElementById('kStarters')
fetch("https://pokeapi.co/api/v2/pokemon?limit=9&offset=0.")
    .then(function (response)
    {
        console.log(response);
        return response.json();
    })
    .then(function(json)
    {
        console.log(json);
        let pokemon = json.results;
        console.log(pokemon);
        for(let pokemons of pokemon){
            let listItem =document.createElement('li');
            listItem.innerText = pokemons.name;
            pokemonList.appendChild(listItem);
        }
    })

    let pokemonList2 = document.getElementById("jStarters")
fetch("https://pokeapi.co/api/v2/pokemon?limit=9&offset=151.")
    .then(function (response)
    {
        console.log(response);
        return response.json();
    })
    .then(function(json)
    {
        console.log(json);
        let pokemon1 = json.results;
        console.log(pokemon1);
        for(let pokemons2 of pokemon1){
            let listItem2 =document.createElement('li');
            listItem2.innerText = pokemons2.name;
            pokemonList2.appendChild(listItem2);
        }
    })

    let pokemonList3 = document.getElementById("heStart")
    fetch("https://pokeapi.co/api/v2/pokemon?limit=9&offset=251.")
        .then(function (response)
        {
            console.log(response);
            return response.json();
        })
        .then(function(json)
        {
            console.log(json);
            let pokemon3 = json.results;
            console.log(pokemon3);
            for(let pokemons3 of pokemon3){
                let listItem3 =document.createElement('li');
                listItem3.innerText = pokemons3.name;
                pokemonList3.appendChild(listItem3);
            }
        })

let pokemonList4 = document.getElementById("sStart")
    fetch("https://pokeapi.co/api/v2/pokemon?limit=9&offset=386.")
        .then(function (response)
        {
            console.log(response);
            return response.json();
        })
        .then(function(json)
        {
            console.log(json);
            let pokemon4 = json.results;
            console.log(pokemon4);
            for(let pokemons4 of pokemon4){
                let listItem4 =document.createElement('li');
                listItem4.innerText = pokemons4.name;
                pokemonList4.appendChild(listItem4);
            }
        })

        let pokemonList5 = document.getElementById("unovaStarters")
        fetch("https://pokeapi.co/api/v2/pokemon?limit=9&offset=494.")
            .then(function (response)
            {
                console.log(response);
                return response.json();
            })
            .then(function(json)
            {
                console.log(json);
                let pokemon5 = json.results;
                console.log(pokemon5);
                for(let pokemons5 of pokemon5){
                    let listItem5 =document.createElement('li');
                    listItem5.innerText = pokemons5.name;
                    pokemonList5.appendChild(listItem5);
                }
            })

let pokemonList6 = document.getElementById("kalosStart")
fetch("https://pokeapi.co/api/v2/pokemon?limit=9&offset=649.")
            .then(function (response)
            {
                console.log(response);
                return response.json();
            })
            .then(function(json)
            {
                console.log(json);
                let pokemon6 = json.results;
                console.log(pokemon6);
                for(let pokemons6 of pokemon6){
                    let listItem6 =document.createElement('li');
                    listItem6.innerText = pokemons6.name;
                    pokemonList6.appendChild(listItem6);
                }
            })

let pokemonList7 = document.getElementById("alola")
fetch("https://pokeapi.co/api/v2/pokemon?limit=9&offset=721.")
    .then(function (response)
        {
            console.log(response);
            return response.json();
        })
        .then(function(json)
        {
            console.log(json);
            let pokemon7 = json.results;
            console.log(pokemon7);
            for(let pokemons7 of pokemon7){
                let listItem7 =document.createElement('li');
                listItem7.innerText = pokemons7.name;
                pokemonList7.appendChild(listItem7);
            }
        })

let pokemonList8 = document.getElementById("galarStart")
fetch("https://pokeapi.co/api/v2/pokemon?limit=9&offset=809.")
    .then(function (response)
        {
            console.log(response);
            return response.json();
        })
        .then(function(json)
        {
            console.log(json);
            let pokemon8 = json.results;
            console.log(pokemon8);
            for(let pokemons8 of pokemon8){
                let listItem8 =document.createElement('li');
                listItem8.innerText = pokemons8.name;
                pokemonList8.appendChild(listItem8);
            }
        })

let pokemonList9 = document.getElementById("paldeaStart")
fetch("https://pokeapi.co/api/v2/pokemon?limit=9&offset=905.")
    .then(function (response)
        {
            console.log(response);
            return response.json();
        })
        .then(function(json)
        {
            console.log(json);
            let pokemon9 = json.results;
            console.log(pokemon9);
            for(let pokemons9 of pokemon9){
                let listItem9 =document.createElement('li');
                listItem9.innerText = pokemons9.name;
                pokemonList9.appendChild(listItem9);
            }
        })

        let pokemonAbility17 = document.getElementById("pokeAbility17");

        fetch("https://pokeapi.co/api/v2/ability/17")
          .then(function (response) {
            console.log(response);
            return response.json();
          })
          .then(function (json) {
            console.log(json);
            let ability17 = json.effect_entries[1].effect; 
        
            let pItem = document.createElement('p');
            pItem.innerText = ability17;
            pokemonAbility17.appendChild(pItem);
          })
          .catch(function (error) {
            console.error('Error:', error);
          });

let pokeMovesLists = document.getElementById('pokeMoves1'); 
fetch("https://pokeapi.co/api/v2/move?limit=5&offset=10")
    .then(function (response) {
        return response.json();
    })
    .then(function(json) {
        let moveList = json.results;
        for (let move of moveList) {
            fetch(move.url)
            .then(function(response) {
            return response.json();
            })
            .then(function(moveDetails) {
                let moveDescription = document.createElement('li');
                moveDescription.innerHTML = `
                    Name: ${moveDetails.name}<br>
                    Power: ${moveDetails.power}<br>
                    PP: ${moveDetails.pp}<br>
                    Description: ${moveDetails.flavor_text_entries[1].flavor_text}<br>
                `;
                pokeMovesLists.appendChild(moveDescription);
            })
                
                  }
              });
              
          