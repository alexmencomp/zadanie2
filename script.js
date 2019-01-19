'use strict';

let money = prompt("Ваш бюджет на месяц?");

let time = prompt("Введите дату в формате YYYY-MM-DD");

let appDate = {
    buget:money,
    timeDate:time,
    expenses : [],
    optionalExpenses : null,
    income : [],
    savings : false 
};

 
 /*for (let i = 0;  i<2; i++) {
     debugger;
    let statya = prompt("Введите обязательную статью расходов в этом месяце?");
    let howMany = prompt("Во сколько обойдется?");  
    if (typeof(statya) === 'string' && typeof(statya) != null && typeof(howMany)!= null && statya!=''&&howMany!='' && statya.length < 50) {
        console.log('done');
        appDate.expenses[statya] = howMany;
    }   else     {
        i--;
    }                                                             
 }
*/

 /*let i = 0;
 while  (i<2) {
   let statya = prompt("Введите обязательную статью расходов в этом месяце?");
   let howMany = prompt("Во сколько обойдется?");  
   if (typeof(statya) === 'string' && typeof(statya) != null && typeof(howMany)!= null && statya!=''&&howMany!='' && statya.length < 50) {
       console.log('done');
       appDate.expenses[statya] = howMany;
       i++;
   }   else     {
       i--;
   }                                                             
 }*/

 let i = 0;
do {
    let statya = prompt("Введите обязательную статью расходов в этом месяце?");
    let howMany = prompt("Во сколько обойдется?");  
    if (typeof(statya) === 'string' && typeof(statya) != null && typeof(howMany)!= null && statya!=''&&howMany!='' && statya.length < 50) {
        console.log('done');
        appDate.expenses[statya] = howMany;
        i++;
    }   else     {
        i--;
    } 
} while (i<2);
    
appDate.moneyPerDay = appDate.buget/30; 
alert("Бюджет на 1 день  = " + appDate.moneyPerDay);
if (appDate.moneyPerDay < 100) {
     console.log('Минимальный уровень достатка');
} else if (appDate.moneyPerDay >= 100 && appDate.moneyPerDay < 2000) {
    console.log('Средний уровень достатка');
} else if (appDate.moneyPerDay >= 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка!');
}


