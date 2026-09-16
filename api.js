const url = "https://jsonplaceholder.typicode.com/users"

export async function getUsers() {
    const response = await fetch(url)
    if(!response.ok){
        throw new Error(`HTTP error: ${response.status}`);        
    }
    const user = await response.json()

    return user

}