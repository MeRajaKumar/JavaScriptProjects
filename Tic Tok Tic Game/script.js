let currentPlayer = "X";
let arr = Array(9).fill(null);

function checkWinner(){
     if(
          (arr[0] !== num && arr[0] == arr[1] && arr[1] == arr[2]) ||
          (arr[3] !== num && arr[3] == arr[4] && arr[4] == arr[5]) ||
          (arr[6] !== num && arr[6] == arr[7] && arr[7] == arr[8]) ||
          (arr[0] !== num && arr[0] == arr[3] && arr[3] == arr[6]) ||
          (arr[1] !== num && arr[1] == arr[4] && arr[4] == arr[7]) ||
          (arr[2] !== num && arr[2] == arr[5] && arr[5] == arr[8]) ||
          (arr[0] !== num && arr[0] == arr[4] && arr[4] == arr[8]) ||
          (arr[2] !== num && arr[2] == arr[4] && arr[4] == arr[6]) 
     )
     {
          console.log(currentPlayer);
     }
}

function handleClick(el){
     const id = Number(el.id);
     // console.log(id);
     arr[id]=currentPlayer;
     el.innerText = currentPlayer;
     checkWinner();
     currentPlayer = currentPlayer === "X" ? "0": "X";
     
}