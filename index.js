


function handleClick(){

    let birthday  = document.getElementById("birthday");
    let luckyno = document.getElementById("luckyno");

    console.log(birthday.value);
    console.log(luckyno.value);

    let date = new Date(birthday.value);
    console.log(date);

    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    console.log(day,month,year)

    let sum = 0;
    while(day>0 || month>0 || year>0)
    {
        sum+= (day%10 + month%10 + year%10 );
        
        day = Math.floor(day/10);
        month = Math.floor(month/10);
        year = Math.floor(year/10);

        
    }

    if(sum === 0 || luckyno.value === "")
    {
        document.querySelector(".invalid").style.display = "contents";
        
    
    }


    
    
   else if(  sum% luckyno.value == 0)
    { 
        
      
      document.querySelector(".yes").style.display = "contents";
      document.querySelector(".no").style.display = "none";
      document.querySelector(".invalid").style.display = "none";
        

    }
    else{
            console.log(sum,"NO")
           

        document.querySelector(".yes").style.display = "none";
        document.querySelector(".invalid").style.display = "none";
        
       document.querySelector(".no").style.display = "contents";
       
        
    }




}

