let Like = document.getElementById("like")
let dislike = document.getElementById("dislike")
let card = document.getElementById("Card_box")

// Add Like
Like.addEventListener("click",()=>{
    Like.style.color = "#34FF70"
})

// Remove Like
Like.addEventListener("dblclick",()=>{
    dislike.style.color = "#000000"
})

// Add Dislike
dislike.addEventListener("click",()=>{
    dislike.style.color = "#34FF70"
})

// Remove Dislike
dislike.addEventListener("dblclick",()=>{
    dislike.style.color = "#000000"
})
