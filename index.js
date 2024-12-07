const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const rashiData = {
    aries: { rashiName: "Mesha", luckyColor: "Red" },
    taurus: { rashiName: "Vrishabha", luckyColor: "Green" },
    gemini: { rashiName: "Mithuna", luckyColor: "Yellow" },
    cancer: { rashiName: "Karka", luckyColor: "White" },
    leo: { rashiName: "Simha", luckyColor: "Gold" },
    virgo: { rashiName: "Kanya", luckyColor: "Blue" },
    libra: { rashiName: "Tula", luckyColor: "Pink" },
    scorpio: { rashiName: "Vrishchika", luckyColor: "Maroon" },
    sagittarius: { rashiName: "Dhanu", luckyColor: "Purple" },
    capricorn: { rashiName: "Makara", luckyColor: "Brown" },
    aquarius: { rashiName: "Kumbha", luckyColor: "Cyan" },
    pisces: { rashiName: "Meena", luckyColor: "Sea Green" }
};

// API endpoint using query parameters
app.get('/getRashiDetails', (req, res) => {
    const { name, zodiacSign } = req.query;

    // Validate input
    if (!name || !zodiacSign) {
        return res.status(400).json({ error: "Please provide 'name' and 'zodiacSign' as query parameters." });
    }

    const rashi = rashiData[zodiacSign.toLowerCase()];
    if (!rashi) {
        return res.status(400).json({ error: "Invalid zodiac sign. Use valid signs like 'aries', 'leo', etc." });
    }

    // Respond with rashi name and lucky color
    res.json({
        name: name,
        rashiName: rashi.rashiName,
        luckyColor: rashi.luckyColor
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
