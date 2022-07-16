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
	let state = {
		username:"",
		password:""
	}
let finger_id = []
onMount(async()=>{
	pagerealtime()
	finger_id = await getfinger()
})	
let result = []

async function pagerealtime(){
	const unsub = await onSnapshot(doc(db, "users", "field_users"), (doc) => {
   result = doc.data();
});
}
async function btnlogin(){
try{
	await setDoc(doc(db, "users", "field_users"), {
  username:state.username,
  password:state.password,
  is_login:true,// THIS IS KEY....
  finger_id:{
  	id:finger_id.visitorId,
  	os:finger_id.components.platform.value,
  	browser:finger_id.components.vendorFlavors.value[0]
  }
});
	window.location.href="/#/admin/"
}catch(err){
	console.log("error" +err)
}
}	
</script>

<div>
{#if result.is_login == false}
<h1>Login</h1>
	username: <input bind:value={state.username}/><br/>
	password: <input bind:value={state.password}/><br/>
	<button
	on:click={btnlogin}
	>login</button>
{/if}
{#if result.is_login == true}
	<h1>sorry someone is logging.....</h1>
	<h1>maaf seseorang sedang login ......</h1>
{/if}

	</div>
