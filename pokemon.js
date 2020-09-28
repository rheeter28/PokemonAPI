const baseURL ='https://pokeapi.co/api/v2/pokemon/?limit=30-&offset=30/name';
const listPoke = document.querySelector('li');
  
fetch('https://pokeapi.co/api/v2/pokemon/?limit=30-&offset=0/name')
  .then(function(response){
    // console.log(response)
    return response.json();
  }).then(function(json){
    let pokeBall = json.results; {
      console.log(pokeBall);
     
      let bulbasaur = document.createElement('li')
     listPoke.append(bulbasaur);
       
    
      

     
     
    
     
    }  



      });

