
const counters = document.querySelectorAll('.counter');

counters.forEach((counter)=>{
     //console.log(counters);
     counter.innerHTML=0;
     const updateCounter=()=>{
          const targetCount = +counter.getAttribute('data-target');
          //console.log( typepf targetCount);
          const startingCount = Number(counter.innerHTML);
          const incr = targetCount / 100;
          if(startingCount < targetCount){
               counter.innerHTML='${Math.round(startingCount + incr)}';  //problem is in this line??**
               setTimeout(updateCounter,10)
          }else{
               counter.innerHTML=targetCount;
          }
     }
     updateCounter();
})