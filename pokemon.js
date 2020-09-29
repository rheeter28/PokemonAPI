const baseURL ='https://pokeapi.co/api/v2/pokemon/?limit=20-&offset=20/sprites';
const listPoke = document.querySelector('ul'); // This is where I would like to add my variable pokeBall
document.body.style.background = '#42C50E';
fetch('https://pokeapi.co/api/v2/pokemon/?limit=20-&offset=0/')
  .then(function(response){
    // console.log(response)
    return response.json();
  }).then(function(json){
    let pokeBall = json.results; {
      console.log(pokeBall); 
      
      // My for loop will be used to iterate the value of pokeBall through the variable "bulbasaur" that will be appended to listPoke.

      // how do I attach pokeBall ???
      for(let p in pokeBall){
        console.log('pokeBall', pokeBall[p]); 
        
       let picachu = document.createElement('li'); //url
       let bulbasaur = document.createElement('li');// names
       let squirtle = document.createElement('li');
       
       listPoke.append(squirtle);
       listPoke.append(picachu);
       picachu.innerText = pokeBall[p].name;
       
       bulbasaur.innerText = pokeBall[p].url;
        listPoke.append(bulbasaur);
      }
      
      
       
      
      
    
     
     
    
     
    }  



      });

