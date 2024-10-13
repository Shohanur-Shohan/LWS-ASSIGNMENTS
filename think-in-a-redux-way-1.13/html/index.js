const INCREMENT = document.querySelector(".lws-increment")
const DECREMENT = document.querySelector(".lws-decrement")
const IncrementForm = document.querySelector(".incrementForm")
const DecrementForm = document.querySelector(".decrementForm")
const DeleteItem = document.querySelector(".lws-delete")
const AddMatch = document.querySelector(".lws-addMatch")
const PointResult = document.querySelector(".lws-singleResult")
const Reset = document.querySelector(".lws-reset")

const increment = () => {
  const point = PointResult
  console.log(point.innerHTML)
}

AddMatch.addEventListener("click", () => {
  console.log("clicked")
  increment()
})
