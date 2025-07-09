const http =  require('http');

let data = http.get('http://jsonplaceholder.typicode.com/posts', (res) => {
    let body = '';

    res.on('data', (chunk) => {
        body += chunk.toString();
    });

    res.on('end', () => {
        try {
            const json = JSON.parse(body);
            for (i = 0; i < json.length; i++) {
                if (json[i].userId == 1)
                {
                    console.log(`Title: ${json[i].title}`);
                    console.log(`Body: ${json[i].body}`);
                    console.log(" --------------------------------- ");
                }
                            }
        } catch (error) {
            console.error('Error parsing JSON:', error);
        }
    });
    
});
data.on('error', (error) => {
    console.error('Error with request:', error);
})




