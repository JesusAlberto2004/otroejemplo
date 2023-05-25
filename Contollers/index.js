import{login_auth,Popup} from "./global.js"

const boton=document.getElementById('btnlogin');
const boton2=document.getElementById('btnloginF');
const boton3=document.getElementById('btncrea');

async function validar(){
    const user=document.getElementById('emailuser').value
    const pws=document.getElementById('pwuser').value

    const sesion=login_auth(user,pws)
    const confirmacion= await sesion
  .then((confirmacion) => {
    alert("El usuario: "+user+" existe")
    window.location.href="../Templates/registrar.html"
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("El usuario: "+user+" no existe")
  });
}
window.addEventListener('DOMContentLoaded',async()=>{
  boton.addEventListener('click',validar)
})

async function registeruser(){
  window.location.href="../Templates/inicio.html"
}
window.addEventListener('DOMContentLoaded',async()=>{
  boton3.addEventListener('click',registeruser)
})


async function validarf(){
 const sesion2=Popup();
 const result=await sesion2  
  .then((result) => {
    // The signed-in user info.
    const user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;

    // IdP data available using getAdditionalUserInfo(result)
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

    // ...
  });
}
window.addEventListener('DOMContentLoaded',async()=>{
  boton2.addEventListener('click',validarf)
})