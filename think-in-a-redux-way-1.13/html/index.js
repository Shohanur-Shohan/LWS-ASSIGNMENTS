//dom elements
const deleteBtn = document.querySelector(".lws-delete")
const addMatchBtn = document.querySelector(".lws-addMatch")
const resetBtn = document.querySelector(".lws-reset")
const allMatchesContainer = document.getElementById("all-matches-container")
const increment = document.querySelector(".lws-increment");
const decrement = document.querySelector(".lws-decrement")

//action indentifiers
const INCREMENT = "score/increment"
const DECREMENT = "score/decrement"
const RESET = "score/reset"
const DELETE = "score/deleteMatch"
const ADDANOTHERMATCH = "score/addAnotherMatch"


deleteBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("delete");
});

addMatchBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("addMatch");
});

resetBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("resetBtn");
});

allMatchesContainer.addEventListener("click", () => {
  console.log("allMatchesContainer");
});

increment.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("lws-increment");
});

decrement.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("lws-decrement");
});

//////////////////////////////

//action creators
// const increment = (payload) => {
//   return {
//     type: INCREMENT,
//     payload,
//   }
// }

// const decrement = (payload) => {
//   return {
//     type: DECREMENT,
//     payload,
//   }
// }

// const reset = (payload) => {
//   return {
//     type: RESET,
//     payload,
//   }
// }

// const addAnotherMatch = (payload) => {
//   return {
//     type: ADDANOTHERMATCH,
//     payload,
//   }
// }

// const deleteMatch = (payload) => {
//   return {
//     type: DELETE,
//     payload,
//   }
// }

//initial state
// const initialState = [
//   {
//     id: 1,
//     score: 0,
//   },
// ]

//reducer function
// const StoreReducer = (state = initialState, action) => {}

//create store
// const store = Redux.createStore(StoreReducer)

// //onclick eventlisteners
// addMatchBtn.addEventListener("click", () => {
//   store.dispatch(addAnotherMatch())
// })

// deleteBtn.addEventListener("click", () => {
//   store.dispatch(deleteMatch())
// })

// resetBtn.addEventListener("click", () => {
//   store.dispatch(reset())
// })

// const incrementHandler = (id, formEl) => {
//   e.preventDefault()
//   const inputValue = Number(
//     document.querySelectorAll("lws-increment").innerHtml
//   )
//   console.log(inputValue)
// }

// const newMatchHtml = `
//       <div class="match">
//         <div class="wrapper">
//           <button class="lws-delete">
//             <img src="./image/delete.svg" alt="" />
//           </button>
//           <h3 class="lws-matchName">Match 1</h3>
//         </div>
//         <div class="inc-dec">
//           <form class="incrementForm">
//             <h4>Increment</h4>
//             <input type="number" name="increment" class="lws-increment" />
//           </form>
//           <form class="decrementForm">
//             <h4>Decrement</h4>
//             <input type="number" name="decrement" class="lws-decrement" />
//           </form>
//         </div>
//         <div class="numbers">
//           <h2 class="lws-singleResult">120</h2>
//         </div>
//       </div>
// `
