const express = require('express');
const axios = require('axios');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const app = express();
const port = 3002;
const aspNetApiUrl = 'https://localhost:7047/api/v1/mobile-provider/QueryBillDetailed?subscriberNo=30&month=2024%201%201&pageNumber=1';

app.get('/api/info', async (req, res) => {
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
    console.log(`Service B listening on port ${port}`);
});