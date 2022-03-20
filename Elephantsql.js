 
 ​const​ ​{​Client​,​ Pool​}​ ​=​ ​require​(​'pg'​) 
 ​// const { Client } = require('pg/lib') 
  
 ​//This below setup is for nodejs-4 github and elephantsql-2(sql-2) (1998gaikwadketan17@gmail.com) 
  
 ​//var conString = "postgres://yyofafsn:uWALSMos0yHNSA3Brei4O355PnRX8zfL@kashin.db.elephantsql.com/yyofafsn" 
 ​//This below setup is for nodejs-2 github and elephantsql-1 (gaikwadketan1717@gmail.com) 
 ​var​ ​conString​ ​=​ ​"postgres://ulidjlzx:LbgHMtMu5-ISUtoR-07N_ch4aALeDvsA@castor.db.elephantsql.com/ulidjlzx" 
 ​//var conString = "postgres://hbbtuzptqqivzh:d4cca06523d8135b6dd12c8f4cc40adbed7818f57bd1ea758f1cd4842a8bfc3d@ec2-3-225-79-57.compute-1.amazonaws.com:5432/d231ao8kdkdodh" 
 ​const​ ​client​ ​=​ ​new​ ​Client​(​conString​) 
 ​client​.​connect​(​)​; 
  
  
 ​module​.​exports​ ​=​ ​{​client​,​ Client​}