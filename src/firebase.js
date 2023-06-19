
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyABvZJFLzo-1scVnPKIaliKE9_Sjjzbh3Y",
    authDomain: "linkedin-clone-3fcab.firebaseapp.com",
    projectId: "linkedin-clone-3fcab",
    storageBucket: "linkedin-clone-3fcab.appspot.com",
    messagingSenderId: "301888670558",
    appId: "1:301888670558:web:6a62174e17cc2188f15dcf"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()
  const auth = firebase.auth();
  
  export {auth} ;
  export default db ;
    
