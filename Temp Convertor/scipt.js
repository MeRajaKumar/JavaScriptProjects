const calculateTemp = ()=>{
     const numberTemp = document.getElementById('temp').value;
     //console.log(numberTemp);

     const tempSelected = document.getElementById('temp_diff');
     const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

     const celToFah=(cel)=>{
          let fahrenheit = math.round((cel * 9/5)+32);
          return fahrenheit;
     }

     const fehTocel=(fehr)=>{
          let celsius = math.round((fehr - 32)*5/9);
          return celsius;
     }
     let result;

     if (valurTemp == 'cel'){
          result = celToFah(numberTemp);
          document.getElementById('resultContainer').innerHTML = '= ${result}*Fahrenheit';
     }else{
          result = fehToCel(numberTemp);
          document.getElementById('resultContainer').innerHTML = '= ${result}*celsius';
     }
}