//dom elements
const deleteBtn = document.querySelector(".lws-delete")
const addMatchBtn = document.querySelector(".lws-addMatch")
const resetBtn = document.querySelector(".lws-reset")
const allMatchesContainer = document.getElementById("all-matches-container")

//action indentifiers
const INCREMENT = "score/increment"
const DECREMENT = "score/decrement"
const RESET = "score/reset"
const DELETE = "score/deleteMatch"
const ADDANOTHERMATCH = "score/addAnotherMatch"

//action creators
const increment = (payload) => {
  return {
    type: INCREMENT,
    payload,
  }
}

const decrement = (payload) => {
  return {
    type: DECREMENT,
    payload,
  }
}

const reset = (payload) => {
  return {
    type: RESET,
    payload,
  }
}

const addAnotherMatch = (payload) => {
  return {
    type: ADDANOTHERMATCH,
    payload,
  }
}

const deleteMatch = (payload) => {
  return {
    type: DELETE,
    payload,
  }
}

//initial state
const initialState = [
  {
    id: 1,
    score: 0,
  },
]

//reducer function
const StoreReducer = (state = initialState, action) => {}

//create store
const store = Redux.createStore(StoreReducer)
