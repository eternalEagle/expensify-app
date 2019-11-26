import * as firebase from "firebase";
import moment from "moment";

const firebaseConfig = {
  apiKey: "AIzaSyCMFB1nLGzOZEmz4WjndPEcrPxtHFuv6oI",
  authDomain: "react-expensify-course-app.firebaseapp.com",
  databaseURL: "https://react-expensify-course-app.firebaseio.com",
  projectId: "react-expensify-course-app",
  storageBucket: "react-expensify-course-app.appspot.com",
  messagingSenderId: "118902712921",
  appId: "1:118902712921:web:c06a1af22877ca9f279f48",
  measurementId: "G-0MCWWNYEZ7"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// database.ref("/expenses").on("child_added", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// setTimeout(
//   () =>
//     database.ref("/expenses").push({
//       description: "OLLS",
//       note: "",
//       amount: 999999999999999999,
//       createdAt: -10000
//     }),
//   7500
// );

// database.ref("/expenses").on("child_changed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("/expenses").on("child_removed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("/expenses").on("value", snapshot => {
//   const expenses = [];
//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// setTimeout(
//   () =>
//     database.ref("/expenses").push({
//       description: "OLLS",
//       note: "",
//       amount: 999999999999999999,
//       createdAt: -10000
//     }),
//   3500
// );

// database.ref("/notes").push({
//   title: "Course Topics",
//   bode: "React Native, Angular, Python"
// });

// const notes = [
//   {
//     id: 12,
//     title: "First note",
//     body: "This is my note"
//   },
//   {
//     id: "768dafsdf",
//     title: "Another note",
//     body: "This is my note"
//   }
// ];

// database.ref("/notes").set(notes);

// database.ref("/").on("value", snapshot => {
//   console.log(
//     `${snapshot.val().name} is a ${snapshot.val().job.title} at ${
//       snapshot.val().job.company
//     }`
//   );
// });

// setTimeout(() => {
//   database.ref("/job/title").set("Senior Web Developper");
// }, 10500);

// const onValueChange = database.ref("/").on(
//   "value",
//   snapshot => {
//     console.log(snapshot.val());
//   },
//   e => {
//     console.log("Error with data fetching ", e);
//   }
// );

// setTimeout(() => {
//   database.ref("/age").set(29);
// }, 3500);

// setTimeout(() => {
//   database.ref("/").off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref("/age").set(30);
// }, 10500);

// database
//   .ref("/location/city")
//   .once("value")
//   .then(snapshot => {
//     const data = snapshot.val();
//     console.log(data);
//   })
//   .catch(error => {
//     console.log("Data fetching failed", error);
//   });

// database
//   .ref("/")
//   .set({
//     name: "Stef",
//     age: 16,
//     stressLevel: 8,
//     job: {
//       title: "Software developer",
//       company: "Google"
//     },
//     location: {
//       city: "Balti",
//       country: "Moldova"
//     }
//   })
//   .then(() => {
//     console.log("Data is saved successfully");
//   })
//   .catch(error => {
//     console.log("Data saving failed", error);
//   });

// database
//   .ref("/isSingle")
//   .remove()
//   .then(() => {
//     console.log("Data is deleted successfully");
//   })
//   .catch(error => {
//     console.log("Data removeing failed", error);
//   });

// database
//   .ref("/")
//   .set(null)
//   .then(() => {
//     console.log("Data is saved successfully");
//   })
//   .catch(error => {
//     console.log("Data saving failed", error);
//   });

// database
//   .ref("/")
//   .update({
//     stressLevel: 9,
//     "job/company": "Amazon",
//     "location/city": "Seattle"
//   })
//   .then(() => {
//     console.log("Data is updated successfully");
//   })
//   .catch(error => {
//     console.log("Data updateing failed", error);
//   });;
