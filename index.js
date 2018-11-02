var jsonFile = require('jsonfile')

var fileName = 'intent.json'




function getIntentAction(intentAction)
{
    
    // getMenuItem('R10')
    //Loop through the Menu Options/intent actions
    jsonFile.readFile(fileName, function(err, jsonData) {

        // console.log(jsonData.intent.length);

       if(intentAction=='Airtime')
       {


            console.log("");
            console.log(intentAction);
            for(let i = 0; i<jsonData.intent[0].sub_menu.length ; i++ )
            {
                    console.log(jsonData.intent[0].sub_menu[i]);

            }

       }else if(intentAction =='Data')
       {
           for(let i = 0; i< jsonData.intent[1].sub_menu.length; i++)
           {
            if(jsonData.intent[1].sub_menu[i]=='RushHour')
            {
                 
                    console.log("");
                    console.log(jsonData.intent[1].sub_menu[i]);
                   for(let x = 0; x< jsonData.intent[1].RushHour.length; x++)
                   {
                    console.log(jsonData.intent[1].RushHour[x]);

                   }

            }else if(jsonData.intent[1].sub_menu[i]=='Daily')
            {
                console.log("");
                console.log(jsonData.intent[1].sub_menu[i]);
               for(let x = 0; x< jsonData.intent[1].Daily.length; x++)
               {
                console.log(jsonData.intent[1].Daily[x]);

               }

            }else if(jsonData.intent[1].sub_menu[i]=='Weekly')
            {

                console.log("");
                console.log(jsonData.intent[1].sub_menu[i]);
               for(let x = 0; x< jsonData.intent[1].Weekly.length; x++)
               {
                console.log(jsonData.intent[1].Weekly[x]);

               }
            }else if(jsonData.intent[1].sub_menu[i]=='Monthly')
            {

                console.log("");
                console.log(jsonData.intent[1].sub_menu[i]);
               for(let x = 0; x< jsonData.intent[1].Monthly.length; x++)
               {
                console.log(jsonData.intent[1].Monthly[x]);

               }

            }

           }


       }else if(intentAction =='Social Bundles')
       {
           
        for(let i = 0; i< jsonData.intent[2].sub_menu.length; i++)
        {
         if(jsonData.intent[1].sub_menu[i]=='Youtube')
         {
              
                 console.log("");
                 console.log(jsonData.intent[2].sub_menu[i]);
                for(let x = 0; x< jsonData.intent[1].Youtube.length; x++)
                {
                 console.log(jsonData.intent[2].Youtube[x]);

                }

         }else if(jsonData.intent[2].sub_menu[i]=='WhatsApp')
         {
    
             console.log("");
             console.log(jsonData.intent[2].sub_menu[i]);
            for(let x = 0; x< jsonData.intent[2].WhatsApp.length; x++)
            {
             console.log(jsonData.intent[2].WhatsApp[x]);

            }

         }else if(jsonData.intent[2].sub_menu[i
        ]=='Twitter')
         {

             console.log("");
             console.log(jsonData.intent[2].sub_menu[i]);
            for(let x = 0; x< jsonData.intent[2].Twitter.length; x++)
            {
             console.log(jsonData.intent[2].Twitter[x]);

            }

         }else if(jsonData.intent[2].sub_menu[i]=='Facebook')
         {

             console.log("");
             console.log(jsonData.intent[2].sub_menu[i]);
            for(let x = 0; x< jsonData.intent[2].Facebook.length; x++)
            {
             console.log(jsonData.intent[2].Facebook[x]);

            }
         }

        }
       }else if(intentAction=='Call center')
       {

            console.log("");
            console.log(intentAction);
            for(let i =0; i<jsonData.intent[3].sub_menu.length ; i++ )
            {
                    console.log(jsonData.intent[3].sub_menu[i]);

            }

       }


  
    });

   
}
//getIntentAction("Airtime");

//Creating a new function to filter through array from json file

function getData(theAction)
{

    
    jsonFile.readFile(fileName,function(err,jsonData){

        let result = jsonData.intent.filter(data=>{

             return data.action == theAction;

           
        })
        // console.log(result);
        
        //For loop to switch conditions
        let index;
        for(let v = 0; v < jsonData.intent.length; v++){

            if(jsonData.intent[v].action === theAction){
                index = v;
            }
        }
         console.log(index);

            let arr = [];
            let temp = jsonData.intent[index].sub_menu;
    

        for(let y = 0;y<temp.length;y++){
                arr.push(temp[y].menuItem); 
        }
   

        ///Filter function
        let unique_array = arr.filter(function(elem, index, self) {
            return index == self.indexOf(elem);
        });
        arr = [];
         for(let x= 0 ;x<unique_array.length;x++){
             obj = {};
             obj[unique_array[x]] = [];
            
            for(let y = 0;y<temp.length;y++){

               if(temp[y].menuItem === unique_array[x])
               obj[unique_array[x]].push(temp[y].callbackData);
            }
            arr.push(obj);
           
         }
        //  return arr;
           
         console.log(arr);
    });
    
}

 getData("Social Bundles");

// function getReduceArray(total, num)
// {

//     jsonFile.readFile(fileName,function(err,jsonData){

//         let theReduce = jsonData.intent.reduce(infor=>{
//             return total + num;
//         })
//         console.log(infor);
//     })
// }
// getReduceArray("Data");
