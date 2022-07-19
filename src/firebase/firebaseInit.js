import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCHGRkSCpU983yYZDWdcFraM5Oecf4DFzQ",

	authDomain: "invoice-app-2ffe8.firebaseapp.com",

	projectId: "invoice-app-2ffe8",

	storageBucket: "invoice-app-2ffe8.appspot.com",

	messagingSenderId: "365644641888",

	appId: "1:365644641888:web:89108065c0e53def927505",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
