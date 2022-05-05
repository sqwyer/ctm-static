function generateTable(content: Array<Array<any>>, headers?: Array<string|number>) {
    let t = document.createElement('table');

    if(headers && headers.length > 0) {
        let r = document.createElement('tr');
        for(let i = 0; i < headers.length; i++) {
            let e = document.createElement('th');
            e.innerText = headers[i].toString();
            r.appendChild(e);
        }
        t.appendChild(r);
    }

    for(let i = 0; i < content.length; i++) {
        let r = content[i];
        let re = document.createElement('tr');
        for(let k = 0; k < r.length; k++) {
            let e = document.createElement('td');
            e.innerText = r[k].toString();
            re.appendChild(e);
        }
        t.appendChild(re);
    }

    return t;
}