const express = require('express');
const axios = require('axios');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const app = express();
const port = 3001;
const aspNetApiUrl = 'https://localhost:7047/api/v1/banking/QueryBill?subscriberNo=30';

app.get('/api/data', async (req, res) => {
    try {
        // Make a GET request to the ASP.NET API endpoint
        const response = await axios.get(aspNetApiUrl);
        
        // Send the response from ASP.NET API to the client
        res.status(200).json(response.data);
    } catch (error) {
        // Handle errors
        console.error('Error calling ASP.NET API:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Service A listening on port ${port}`);
});