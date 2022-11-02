const checkResponse = (response) => {
    if (!response.ok) {
        throw new Error(
            `Status: ${response.status} Error`
        )
    }
    return response.json();
}

const deleteFetch = (id) => {
    return fetch(`http://localhost:3001/items/${id}`, {
        method: 'DELETE'
    })
    .then((response) => checkResponse(response))
}

const fetchList = () => {
    return fetch('http://localhost:3001/items')
        .then(response => checkResponse(response))
}

const postItem = (initObj) => {
    return fetch('http://localhost:3001/items', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(initObj)
    })
        .then(response => checkResponse(response))
}


export { fetchList, postItem, deleteFetch }