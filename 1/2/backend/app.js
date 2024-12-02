const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:3001',
    credentials: true,
};

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.use(cors(corsOptions));

// Temporary in-memory storage for users
let users = [
    {
        id: 0,
        username: "atd",
        password: "123456"
    }
];

// Route to get all users
app.get('/users', (req, res) => {
    res.json(users);
});

// Route to get a user by ID
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    const user = users.find(u => u.id == userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// Route to login a user
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);

    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.json({ status: 'success' });
    } else {
        res.status(401).json({ status: 'error' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
