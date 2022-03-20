 
 ​var​ ​firebase​ ​=​ ​require​(​'firebase'​)​; 
 ​const​ ​firebaseConfig​ ​=​ ​{ 
 ​    ​apiKey​: ​"AIzaSyBjnEbRIFgpcz2t_YAo1ueQHIlzzuSEq2E"​, 
 ​    ​authDomain​: ​"my-nap-df482.firebaseapp.com"​, 
 ​    ​projectId​: ​"my-nap-df482"​, 
 ​    ​storageBucket​: ​"my-nap-df482.appspot.com"​, 
 ​    ​messagingSenderId​: ​"625304073220"​, 
 ​    ​appId​: ​"1:625304073220:web:34031d317f61361cfdb151" 
 ​}​; 
  
 ​firebase​.​initializeApp​(​firebaseConfig​)​; 
 ​const​ ​db​ ​=​ ​firebase​.​firestore​(​)​; 
 ​const​ ​User​ ​=​ ​db​.​collection​(​"Procs"​)​; 
 ​const​ ​JobList​ ​=​ ​db​.​collection​(​"JobList"​)​; 
 ​const​ ​DataUser​ ​=​ ​firebase​.​database​(​)​.​ref​(​'Client DB'​) 
 ​const​ ​baseUrl​ ​=​ ​"http://localhost:8081" 
 ​const​ ​Chart​ ​=​ ​db​.​collection​(​"Charts"​)​; 
  
 ​module​.​exports​ ​=​ ​{ 
 ​    User​,​ DataUser​,​ JobList​,​baseUrl​,​ Chart​,​ db 
 ​}​;