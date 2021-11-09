let searchFood = () => {
   let foodName = document.getElementById('inputFoodName');
   let  foodNametext = foodName.value ;
 //  console.log(foodNametext);
 foodName.value = `` ; 



 if(foodNametext == ''){
   let  errors = document.getElementById('error');
   let h1 = document.createElement('h1');
   h1.innerHTML = "error faka" ;
   errors.appendChild(h1);
   errors.textContent= '' ;
 }

 else{
   let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodNametext}` ;

   fetch(url)
   .then(res => res.json())
   .then(data => showResult(data.meals))
  
 }

  

}

let showResult = meals =>{
   let searchReasult = document.getElementById('searchResult');

   /* remove old result */
   // searchReasult.innerHTML = `` ;
    searchReasult.textContent = `` ;
    
    if(
      meals.forEach(meal => {
         /*  console.log(meal); */
          let div = document.createElement('div');
          div.classList.add('col');
          div.innerHTML = `
          <div onclick="loadmealId('${meal.idMeal}')" class="card">
          <img src=" ${meal.strMealThumb} " class="card-img-top" width="240" height="250" alt="...">
          <div class="card-body">
            <h5 class="card-title"> ${meal.strMeal} </h5>
            <h6> Meal Number: ${meal.idMeal} </h6>
            <h6> Nationality: ${meal.strArea} </h6>
            <p class="card-text"> ${meal.strInstructions.slice(0, 250)} .</p>
          </div>
        </div>
    
          `;
          searchReasult.appendChild(div);
          
       })


    )
     
        if ( `${meals}.length == 0`){
         /*   console.log(" pLease add proper value" ) */
       /*   let divva = document.createElement('div');
         divva.innerHTML = ` please search good recipi ` ;
         searchReasult.appendChild(divva); */
         searchReasult.innerText =  `  please search good recipi
         `;
         }
        
    }
    
    



 
   let loadmealId = mealId =>{
    /*   console.log(mealId); */
      let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}` ;
      fetch(url)
      .then(res => res.json())
      .then(data =>displayAllDetails(data.meals[0]))
   }

let displayAllDetails = meal => {
 /*   console.log(meal);
 */
   let details = document.getElementById('allDetailsShow');
   let div = document.createElement('div');
   div.classList.add('card');
   div.innerHTML = `
   <img src=" ${meal.strMealThumb} " class="card-img-top" width="240" height="250" alt="...">
   <div class="card-body">
     <h5 class="card-title"> ${meal.strMeal} </h5>
     <p class="card-text"> ${ meal.strInstructions.slice(0, 150) } </p>
     <a href=" ${meal.strYoutube} " class="btn btn-primary">Go somewhere</a>
   </div>
   ` ;
   details.appendChild(div);

}





 