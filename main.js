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
const userCont = document.querySelector("#user")
const moreButtons = document.querySelector("#moreButtons")



const url = "https://jsonplaceholder.typicode.com/users"

async function getUser() {

    try {
        const response = await fetch(url)

        if(!response.ok){
            throw new Error(`HTTP error: ${response.status}`);
            
        }
        const user = await response.json()

        const cardUsers = user.map((user)=>{
            return `
            <div>
                <h2>${user.name}</h2>
                <p>${user.username}</p>
                <p>${user.email}</p>
                <p>${user.address.city}</p>
            </div>
            `
        })

        userCont.innerHTML = cardUsers.join("")

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

        SortAZ.addEventListener('click' , ()=>{
            const userSortAZ = [...user].sort((a,b) => {
                return a.name.localeCompare(b.name)
            })
            const cardUsersAfterSortAZ = userSortAZ.map((user)=>{
                return `
                    <div>
                    <h2>${user.name}</h2>
                        <p>${user.username}</p>
                       <p>${user.email}</p>
                       <p>${user.address.city}</p>
                    </div>
                    `
                })
            userCont.innerHTML = cardUsersAfterSortAZ.join("")
        })
        SortZA.addEventListener('click' , ()=>{
            const userSortZA = [...user].sort((a,b) => {
                return b.name.localeCompare(a.name)
            })
            const cardUsersAfterSortZA = userSortZA.map((user)=>{
                return `
                    <div>
                    <h2>${user.name}</h2>
                        <p>${user.username}</p>
                       <p>${user.email}</p>
                       <p>${user.address.city}</p>
                    </div>
                    `
                })
            userCont.innerHTML = cardUsersAfterSortZA.join("")
        })
        Reverse.addEventListener('click' , ()=>{
            const userReverse = [...user].reverse()
            const cardUsersAfterReverse = userReverse.map((user)=>{
                return `
                    <div>
                    <h2>${user.name}</h2>
                        <p>${user.username}</p>
                       <p>${user.email}</p>
                       <p>${user.address.city}</p>
                    </div>
                    `
                })
            userCont.innerHTML = cardUsersAfterReverse.join("")
        })
        Random.addEventListener('click' , ()=>{
            const userRandom = [...user].sort(() => Math.random() - 0.5)
            const cardUsersAfterRandom = userRandom.map((user)=>{
                return `
                    <div>
                    <h2>${user.name}</h2>
                        <p>${user.username}</p>
                       <p>${user.email}</p>
                       <p>${user.address.city}</p>
                    </div>
                    `
                })
            userCont.innerHTML = cardUsersAfterRandom.join("")
        })
        Search.addEventListener('click' , ()=>{
            const filterUserByName = user.filter((user) => {
                return user.name.toLowerCase().includes(searchInput.value.toLowerCase())
            })

            if(filterUserByName.length === 0){
                userCont.innerHTML = "user not found"
                return
            }

            const cardUsersAfterFilterByName = filterUserByName.map((user)=>{
                return `
                    <div>
                    <h2>${user.name}</h2>
                        <p>${user.username}</p>
                       <p>${user.email}</p>
                       <p>${user.address.city}</p>
                    </div>
                    `
                })
            userCont.innerHTML = cardUsersAfterFilterByName.join("")
        })

        


    } catch (error) {
        console.log(error.message)
    }
}


loadUserButton.addEventListener("click" , getUser)