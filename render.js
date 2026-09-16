export function renderUsers(users , userCont){
    const cardUsers = users.map((user)=>{
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
} 
