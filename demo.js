const http = require('http')
const fs = require('fs')
const url = require('url')
const path = require('path')
const uuid = require('uuid')
const EventEmitter = require('events')

let eventEmitter = new EventEmitter();

class Item {
    constructor(sName, nQuantity, nPrice, sStatus) {
        this.iId = uuid.v1();
        this.sName = sName;
        this.nQuantity = nQuantity;
        this.nPrice = nPrice;
        this.sStatus = sStatus;
        this.dCreatedAt = new Date();
        this.dUpdatedAt = new Date();
        this.isDeleted = false;
    }
}

// ✅ Validation function
const validateItem = (item) => {
    if (!item.sName || typeof item.sName !== 'string' || item.sName.trim() === '') {
        return { isValid: false, message: 'Invalid item name' };
    }
    if (!item.nQuantity || typeof item.nQuantity !== 'number' || item.nQuantity <= 0) {
        return { isValid: false, message: 'Invalid quantity. Must be a positive number' };
    }
    if (!item.nPrice || typeof item.nPrice !== 'number' || item.nPrice <= 0) {
        return { isValid: false, message: 'Invalid price. Must be a positive number' };
    }
   
    return { isValid: true };
};

http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/api/data') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const data = fs.readFileSync('data.json');
        res.write(data);
        res.end();
        return;

    } else if (req.method === 'GET' && req.url.startsWith('/api/data/')) {
        const id = req.url.split('/').pop();
        let data = JSON.parse(fs.readFileSync('data.json'));

        const item = data.find(i => i.iId === id);
        if (!item) {
            res.writeHead(404);
            res.write('Item not found');
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify(item));
        }
        res.end();
    
    } else if (req.method === 'POST' && req.url === '/api/data') {
        let body = '';

        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', () => {
            let newItem = JSON.parse(body);

            // ✅ Validate the item
            const validation = validateItem(newItem);
            if (!validation.isValid) {
                res.writeHead(400);
                res.write(`Validation error: ${validation.message}`);
                res.end();
                return;
            }

            let data = JSON.parse(fs.readFileSync('data.json'));
            const item = new Item(newItem.sName, newItem.nQuantity, newItem.nPrice);
            data.push(item);

            fs.writeFileSync('data.json', JSON.stringify(data));
            res.writeHead(201);
            res.write('Item added successfully');
            res.end();
        });

    } else if (req.method === 'PUT' && req.url.startsWith('/api/data/')) {
        const id = req.url.split('/').pop();
        let body = '';

        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', () => {
            let updatedItem = JSON.parse(body);
            
            // ✅ Validate the updated item
            const validation = validateItem(updatedItem);
            if (!validation.isValid) {
                res.writeHead(400);
                res.write(`Validation error: ${validation.message}`);
                res.end();
                return;
            }

            let data = JSON.parse(fs.readFileSync('data.json'));
            const index = data.findIndex(i => i.iId === id);

            if (index === -1) {
                res.writeHead(404);
                res.write('Item not found');
            } else {
                updatedItem.iId = id;  // Preserve the ID
                updatedItem.dUpdatedAt = new Date();
                data[index] = updatedItem;

                fs.writeFileSync('data.json', JSON.stringify(data));
                res.writeHead(200);
                res.write('Item updated successfully');
            }
            res.end();
        });

    } else if (req.method === 'DELETE' && req.url.startsWith('/api/data/')) {
        const id = req.url.split('/').pop();
        let data = JSON.parse(fs.readFileSync('data.json'));

        const filteredData = data.filter(i => i.iId !== id);

        if (data.length === filteredData.length) {
            res.writeHead(404);
            res.write('Item not found');
        } else {
            fs.writeFileSync('data.json', JSON.stringify(filteredData));
            res.writeHead(200);
            res.write('Item deleted successfully');
        }
        res.end();

    } else {
        res.writeHead(404);
        res.write('URL not found');
        res.end();
    }

}).listen(5000, () => {
    console.log(`Server is running on port 5000`);
});
