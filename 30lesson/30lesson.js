/*function sayHelloWorld(){
    alert("helloWold!")
}

    function showUserAge (userage, age) {
        UserAge=10;
        let name="cdc";
        alert(UserAge);
    }
function showUserInfo(a,b){
    return a + b;
}
let sum=showUserInfo(4,2);
alert(sum);

function Multi(a,b){
    return a*b;
}
let sum=Multi(2,5)
alert(sum);

function checkUserAge(age) {
    if (age > 18) {
    return true;
    } else {
    return confirm('А родители разрешили?');
    }
    }
    let age = prompt("How old are you", 18);
    if (checkUserAge(age)) {
    alert("Доступ получен")
    } else {
    alert("Доступ закрыт")
    }
    function min(a, b) {
        if (a < b) {
          return a;
        } else {
          return b;
        }
      }
      let sum=min(2,5);
      console.log(min)*/
    
      function pow(a, b) {

        let result = a;
    
        for (let i = 1; i < b; i++) {
    
          result *= a;
    
        }
    
        return result;
    
      }
    
    
    
      let a = prompt ("number", 2);
    
     let b = prompt ("numbersecond", 2);
    
    
    
     console.log(pow(a, b));
      
      
      
     
