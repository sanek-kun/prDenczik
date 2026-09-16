export function sortAZ(users){
    return [...users].sort((a,b) => {
        return a.name.localeCompare(b.name)
    })
}
export function sortZA(users){
    return [...users].sort((a,b) => {
        return b.name.localeCompare(a.name)
    })
}
export function reverse(users){
    return [...users].reverse()
}
export function random(users){
    return [...users].sort(() => Math.random() - 0.5)
}
export function search(users , input){
    return users.filter((user) => {
        return user.name.toLowerCase().includes(input.toLowerCase()) 
    })
}