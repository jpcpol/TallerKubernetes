const fetchManage = ( endpoint, body, method = 'GET' ) => {
    const url = 'http://34.151.254.33/' + endpoint;

    if ( method === 'GET' ) {
        return fetch( url );
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( body )
        });
    }
        

}

export {
    fetchManage
}