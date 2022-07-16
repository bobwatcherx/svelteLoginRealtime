<script>
	import {onMount} from 'svelte'
	import {getfinger} from '../fingerprint/'
import {
app,
 doc,
 setDoc,
   onSnapshot,
collection,
updateDoc,
query,
where,
getDocs,
addDoc,
getFirestore,
getDoc,

} from '../firebase/'

const db = getFirestore(app)
let adminresult = []
onMount(()=>{
  pagerealtime();
})
async function pagerealtime(){
  const unsub = await onSnapshot(doc(db, "users", "field_users"), (doc) => {
    if(doc.data().is_login == false){
      window.location.href="/"
    }
   adminresult = doc.data();
});
}
async function btnlogout(){
  const washingtonRef = doc(db, "users", "field_users");

// Set the "capital" field of the city 'DC'
await updateDoc(washingtonRef, {
  is_login: false
});
}
</script>

<div>
  welcome {adminresult.username}
  <br/>
  <button
  on:click={btnlogout}
  >logout</button>
</div>