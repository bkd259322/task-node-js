const http = require('http'); 
let users = [
    { id: 1, name: "bhargav" },
    { id: 2, name: "punit" },
    { id: 3, name: "rutik" },
    { id: 4, name: "hiten" },
    { id: 5, name: "ranjit" }
];

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === "/users") {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.end(JSON.stringify(users));
    } 
    if (req.method === 'POST' && req.url === '/users') {
        let body = '';
        
        
        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            const newUser = JSON.parse(body); 
            newUser.id = users.length + 1; 
            users.push(newUser); 

            res.statusCode = 201;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ message: 'User created', user: newUser }));
        });
    } else if (req.method === 'DELETE' && req.url.startsWith('/users/')) {
        const userId = parseInt(req.url.split('/')[2]);  
        users = users.filter(user => user.id !== userId);
        res.statusCode = 200;
        res.end(JSON.stringify({ message: 'User deleted' }));
    } 
    else {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: 'Route not defined' }));
    }
});

const PORT = 4545;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
