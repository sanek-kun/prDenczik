// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const success = false

//         if(success){
//             resolve("user loaded")
//         }else{
//             reject("something went wrong")
//         }
//     }, 3000);
// })

// promise
//     .then((result) =>{
//         console.log(result)
//     })
//     .catch((error) => {
//         console.log(error)
//     })


// const promisOneMore = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("user loaded")
//     }, 2000);
// })

// async function getUser() {
//     const result = await promisOneMore

//     console.log(result)
// }

// getUser()

const loadUserButton = document.querySelector("#loadUser")
const moreButtons = document.querySelector("#moreButtons")
const userCont = document.querySelector("#user")
import { getUsers ,} from "./api.js"
import { renderUsers } from "./render.js"
import { sortAZ, sortZA , reverse , random , search} from "./usersRender.js"



loadUserButton.addEventListener("click" , async ()=>{
    const users = await getUsers()

    renderUsers(users , userCont)

    moreButtons.innerHTML = 
    `
    <div>
        <button id="SortA-Z">sort A - Z</button>
        <button id="SortZ-A">sort Z - A</button>
        <button id="Reverse">reverse</button>
        <button id="Random">random</button>
        <div>
            <input id="searchInput" placeholder="Search name...">
            <button id="Search">search</button>
        </div>
    </div>

    `
    const SortAZ = document.querySelector("#SortA-Z")
    const SortZA = document.querySelector("#SortZ-A")
    const Reverse = document.querySelector("#Reverse")
    const Random = document.querySelector("#Random")
    const searchInput = document.querySelector("#searchInput")
    const Search = document.querySelector("#Search")

    SortAZ.addEventListener('click' , ()=>{ renderUsers(sortAZ(users) , userCont) })
    SortZA.addEventListener('click' , ()=>{renderUsers(sortZA(users) , userCont)})
    Reverse.addEventListener('click' , ()=>{renderUsers(reverse(users) , userCont)})
    Random.addEventListener('click' , ()=>{renderUsers(random(users) , userCont)})
    Search.addEventListener('click' , ()=>{
        const filteredUsers = search(users , searchInput.value)

        if(filteredUsers.length === 0){
            userCont.innerHTML = "user not found"
            return
        }
            renderUsers(filteredUsers , userCont)
        })
})


// import { sum , multiply , subtract} from "./math(training).js"

// console.log(sum(10,5))
// console.log(subtract(10,5))
// console.log(multiply(10,5))