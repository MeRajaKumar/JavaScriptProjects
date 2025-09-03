const jokes = document.getElementById('joke');
const jokeBtn = document.querySelector('#jokeBtn');

// fetch ka example********************************
// const generateJokes = () => {
//      const setHeader = {
//           headers: {
//                Accept: "application/json"
//           }
//      }
//      fetch('https://icanhazdadjoke.com',setHeader)
//      .then((res)=> res.json())     
//      .then((data)=> {
//           jokes.innerHTML= data.joke;
//      }) .catch((error)=> {
//           console.log(error);
//      })
// }


// async ka example********************************
const generateJokes = async ()=>{
     try {
          const setHeader = {
               headers:{
                    Accept: "application/json"
               }
          }
     const res = await fetch('https://icanhazdadjoke.com',setHeader);
     const data = await res.json();
     jokes.innerHTML=data.joke;
}catch(err){
     console.log('the error is ${err}');
     }
}

jokeBtn.addEventListener('click',generateJokes);
generateJokes();