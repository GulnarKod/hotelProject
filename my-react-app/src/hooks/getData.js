import { db } from "firebase/database";
const database=db();
const reference = database.ref('https://console.firebase.google.com/project/crmanagementsystemproject/firestore/data/~2FRooms');
reference.on('value',(snapshot)=>{
    const data=snapshot.val();
    console.log(data);

},
(error)=>{
    console.error(error);
})