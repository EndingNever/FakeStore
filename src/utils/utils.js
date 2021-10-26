let baseURL = "https://fakestoreapi.com/products"

async function fakestore (action){
        const response = await fetch(baseURL)
        const data = await response.json();
        action(data)
}

export default fakestore