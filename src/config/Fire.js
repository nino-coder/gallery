import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDxhVc_5JxPY_Q6NEzwnOKes5_7GCXxFas",
    authDomain: "fir-tutorial-b4c2c.firebaseapp.com",
    databaseURL: "https://fir-tutorial-b4c2c.firebaseio.com",
    projectId: "fir-tutorial-b4c2c",
    storageBucket: "",
    messagingSenderId: "821377484005",
    appId: "1:821377484005:web:e508b1a3736f5d21"
};

const fire=firebase.initializeApp(config);
export default fire;