export async function callApi(url, params, methodType, header) {
    let token = localStorage.getItem('token');
    let heads = {};
    let body = params;

    if (!checkIfJSONisEmpty(header)) {
        heads = header;
    }

    if (token !== null && token !== undefined && token !== '') {
        heads['token'] = token;
    }

    heads["Content-Type"] = "application/json";
    body = params && JSON.stringify(params);

    let options = {
        mode: "cors",
        method: methodType,
        headers: heads
    };

    if (body) options['body'] = body;

    const response = await fetch(url, options);
    const res = await response.json();
    return res;
}

export async function callLoginApi(url, heads) {
    let token = localStorage.getItem('token');

    if (token !== null && token !== undefined && token !== '') {
        heads['token'] = token;
    }

    let options = {
        mode: "cors",
        method: 'GET',
        headers: heads
    };

    try {
        const response = await fetch(url, options);
        const res = await response.json();
        window.localStorage.setItem('token', JSON.stringify(res));
    } catch {

        return 'failure';
    }

    return 'success';
}

function checkIfJSONisEmpty(obj){
    return obj === null || Object.keys(obj).length === 0;
}