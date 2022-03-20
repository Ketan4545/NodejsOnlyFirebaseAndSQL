// run `node index.js` in the terminal



​var​ ​express​ ​=​ ​require​(​'express'​)​; 
​const​ ​cors​ ​=​ ​require​(​'cors'​)​; 
​var​ ​request​ ​=​ ​require​(​'request'​)​; 
​var​ ​fs​ ​=​ ​require​(​'fs'​)​; 
​const​ ​axios​ ​=​ ​require​(​'axios'​)​; 
 
 
​var​ ​app​ ​=​ ​express​(​)​; 
 
 
 
​app​.​use​(​cors​(​)​)​; 
​ 
 
​app​.​use​(​express​.​json​(​{​limit​: ​'50mb'​}​)​)​; 
​app​.​use​(​express​.​urlencoded​(​{​limit​: ​'50mb'​,​ ​extended​: ​true​}​)) 


​const​ ​{​User​,​ DataUser​,​ JobList​,​baseUrl​,​ Chart​}​ ​=​ ​require​(​"./config"​)​; 
​//const​ ​{​logger​}​ ​=​ ​require​(​"./logger"​) 
​const​ ​{​client​,​ Client​}​ ​=​ ​require​(​"./Elephantsql"​) 
​//const {client, Client} = require("./pgdb") 
 
 
​app​.​get​(​'/'​,​ ​function​ ​(​req​,​ ​res​)​ ​{ 
​   ​res​.​send​(​'Hello World'​)​; 
​}​)​  
 
   
​ ​// Postgres database connection and quering happen below here 
 
​ ​app​.​post​(​"/sqlrun"​,​ ​async​ ​(​req​,​ ​res​)​=>​{ 
​   ​data​ ​=​ ​req​.​body​.​data 
​   ​console​.​log​(​data​)​; 
 
​  ​//    client.connect(function(err) { 
​  ​//   if(err) { 
​  ​//     return console.error('could not connect to postgres', err); 
​  ​//   } 
​  ​//   client.query(`${data}`, function(err, result) { 
​       
​  ​//     try{ 
​  ​//       console.log("Test", result) 
​  ​//        res.send(result) 
​  ​//     } catch{ 
​  ​//       console.log("err",err) 
​  ​//       res.status(500).json({Error : `Py-sql error - ${err} `, Message : `${err.message}`}); 
​   
​  ​//     } 
​      
​  ​//  client.end; 
​  ​//   }); 
​  
​  ​// }); 
 
​  ​//client.connect(); 
 
​client​.​query​(​`​${​data​}​`​,​ ​(​err​,​ ​result​)​=>​{ 
​  ​// try{ 
​  ​//         console.log("Test", result) 
​  ​//          res.send(result) 
​  ​//       } catch (err) { 
​  ​//         console.log("err",err) 
​  ​//         res.status(500).json({Error : `Py-sql error - ${err} `, Message : `${err.message}`}); 
​     
​  ​//       } 
​  ​if​(​err​)​{ 
​    ​console​.​log​(​"err"​,​err​) 
​     ​res​.​status​(​500​)​.​json​(​{​Error​ : ​`Py-sql error - ​${​err​}​ `​,​ ​Message​ : ​`​${​err​.​message​}​`​}​)​; 
​       
​  ​}​ ​else​{ 
​    ​console​.​log​(​"Test"​,​ ​result​) 
​          ​res​.​send​(​result​) 
​  ​} 
​   ​// client.end().then(()=>console.log("Discnnected")); 
 
 
​  
​ ​}​) 
​}​) 
 
 
 
​/// Chart CRUD by Ketan 16 Feb 2022 


// Create 
 
​app​.​post​(​"/Create"​,​ ​async​ ​(​req​,​ ​res​)​ ​=>​ ​{ 
​  ​const​ ​data​ ​=​ ​req​.​body​; 
​  ​const​ ​name​ ​=​ ​req​.​body​.​name 
​  ​const​ ​path​ ​=​ ​req​.​body​.​path 
​  ​console​.​log​(​data​) 
​  ​try​{ 
​  ​const​ ​User​ ​=​ ​db​.​collection​(​`​${​path​}​`​)​; 
​  ​await​ ​User​.​doc​(​name​)​.​set​(​data​)​; 
​  ​res​.​send​(​{​ ​message​: ​`[[​${​name​}​]] has been impacted.`​ ​}​)​; 
​  ​//logger​.​log​(​'info'​,​ ​`[[​${​name​}​]] has been impacted.`​) 
​  ​}​ ​catch​(​err​)​{ 
​    ​console​.​log​(​err​) 
​    ​res​.​status​(​500​)​.​json​(​{​Error​ : ​`Create error - ​${​err​}​ `​,​ ​Message​ : ​`​${​err​.​message​}​`​}​)​; 
​       
​  ​} 
 
​}​)​; 


 
 ​// Update 
   
    ​app​.​post​(​"/Update"​,​ ​async​ ​(​req​,​ ​res​)​ ​=>​ ​{ 
     ​  ​const​ ​data​ ​=​ ​req​.​body​; 
      ​  ​const​ ​name​ ​=​ ​req​.​body​.​name 
       ​  ​const​ ​path​ ​=​ ​req​.​body​.​path 
        ​  ​console​.​log​(​data​) 
         ​  ​try​{ 
          ​  ​const​ ​User​ ​=​ ​db​.​collection​(​`​${​path​}​`​)​; 
           ​  ​await​ ​User​.​doc​(​name​)​.​set​(​data​)​; 
            ​  ​res​.​send​(​{​ ​message​: ​`[[​${​name​}​]] has been impacted.`​ ​}​)​; 
             ​ // ​logger​.​log​(​'info'​,​ ​`[[​${​name​}​]] has been impacted.`​) 
              ​  ​}​ ​catch​(​err​)​{ 
               ​    ​console​.​log​(​err​) 
                ​    ​res​.​status​(​500​)​.​json​(​{​Error​ : ​`Create error - ​${​err​}​ `​,​ ​Message​ : ​`​${​err​.​message​}​`​}​)​; 
                 ​       
                  ​  ​} 
                    
                     ​}​)​;
 
​// Fetch Chart List  
​app​.​post​(​"/Listfetch"​,​ ​async​ ​(​req​,​ ​res​)​ ​=>​ ​{ 
​ ​const​ ​path​ ​=​ ​req​.​body​.​path 
​  ​try​{ 
​  ​const​ ​User​ ​=​ ​db​.​collection​(​`​${​path​}​`​)​; 
​  ​const​ ​snapshot​ ​=​ ​await​ ​User​.​get​(​)​; 
​  ​// const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })); 
​  ​const​ ​list​ ​=​ ​snapshot​.​docs​.​map​(​(​doc​)​ ​=>​ ​(​doc​.​id​)​)​; 
​   
​   ​res​.​send​(​list​)​; 
​  ​}​catch​(​err​)​{ 
​    ​res​.​status​(​500​)​.​json​(​{​Error​ : ​`Chart fetch error - ​${​err​}​ `​,​ ​Message​ : ​`​${​err​.​message​}​`​}​)​; 
​     
​  ​} 
​}​)​; 
 
 
​// Fetch chart list object data 
​app​.​post​(​"/Listdata"​,​ ​async​ ​(​req​,​ ​res​)​ ​=>​ ​{ 
​   
​  ​const​ ​path​ ​=​ ​req​.​body​.​path​; 
​  ​const​ ​name​ ​=​ ​req​.​body​.​name​; 
​   
​  ​try​{ 
​  ​const​ ​User​ ​=​ ​db​.​collection​(​`​${​path​}​`​)​; 
​  ​const​ ​snapshot​ ​=​ ​await​ ​User​.​doc​(​name​)​; 
​   ​console​.​log​(​req​.​body​) 
​  ​snapshot​.​get​(​)​.​then​(​(​doc​)​ ​=>​ ​{ 
​     ​if​ ​(​doc​.​exists​)​ ​{ 
​                  ​res​.​send​(​doc​.​data​(​)​)​; 
​     ​}​ ​else​ ​{ 
​             ​res​.​send​(​`No such [[​${​name​}​]] documents!`​)​; 
​     ​} 
​   
​   
​  ​}​) 
​    ​}​ ​catch​ ​(​err​)​{ 
​     ​res​.​status​(​500​)​.​json​(​{​err​}​)​; 
​   
​  ​} 
​   
​}​)​; 
 
​app​.​post​(​"/Delete"​,​ ​async​ ​(​req​,​ ​res​)​ ​=>​ ​{ 
​  ​const​ ​path​ ​=​ ​req​.​body​.​path 
​  ​const​ ​name​ ​=​ ​req​.​body​.​name 
​   ​try​{ 
​   ​const​ ​User​ ​=​ ​db​.​collection​(​`​${​path​}​`​)​; 
​   ​await​ ​User​.​doc​(​name​)​.​delete​(​)​.​then​(​(​)​=>​res​.​send​(​{​Message​ : ​`Deleted ​${​name​}​ Successfully.`​}​)​)​; 
​   ​// const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })); 
​     
​   ​}​catch​(​err​)​{ 
​     ​res​.​status​(​500​)​.​json​(​{​Error​ : ​`delete error - ​${​err​}​ `​,​ ​Message​ : ​`​${​err​.​message​}​`​}​)​; 
​      
​   ​} 
​ ​}​)​; 
 
 
 
​  
 
​var​ ​server​ ​=​ ​app​.​listen​(​(​process​.​env​.​PORT​ ​||​ ​8081​)​,​ ​function​ ​(​)​ ​{ 
​   ​var​ ​host​ ​=​ ​server​.​address​(​)​.​address 
​   ​var​ ​port​ ​=​ ​server​.​address​(​)​.​port 
​    
​   ​console​.​log​(​"Example app listening at http://%s:%s"​,​ ​host​,​ ​port​) 
​   //​logger​.​log​(​'info'​,​ ​`Example app listening at ,​${​port​}​.`​) 
​}​)
​ ​
