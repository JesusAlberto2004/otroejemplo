import{UserCreate,Logout,observador} from "./global.js"
const boton2=document.getElementById('btnsignOut')
const boton3=document.getElementById('btncrear')

async function registeruser(){
  const user=document.getElementById('emailuser').value
  const pws=document.getElementById('pwuser').value
  const usercon=document.getElementById('emailusercon').value
  const pwscon=document.getElementById('pwusercon').value
    
  if(user==usercon && pws==pwscon){
    try{
      const userCredential= await UserCreate(user,pws)
      const user1 = userCredential.user;
      console.log(user1)
      alert("usuario registrado")
    }catch(error){
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage)
      alert(errorMessage)
      // ..
    };
  }else{
    alert("El usuario o la contraseña no son la mismas")
  }
}
window.addEventListener('DOMContentLoaded',async()=>{
  boton3.addEventListener('click',registeruser)
})

async function observar(){
  const user=document.getElementById('emailuser').value;
  const user2=await user();
  then((user2) => {
    if (user2) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user2.uid;
      alert("Sesión abierta")
    } else {
      alert("Sesión cerrada")
      window.location.href="../index.html"      // ...
    }
  });
}

async function cerrarsesion(){
  const boton2=document.getElementById('btnsignOut')
  const signOut=await Logout()
  .then((signOut) => {
    alert("Sesión cerrada")
    window.location.href="../index.html"
  }).catch((error) => {
    alert("Sesión no cerrada")
  })
}
window.addEventListener('DOMContentLoaded',async()=>{
  boton2.addEventListener('click',cerrarsesion)
})
