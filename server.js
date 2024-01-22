import { config } from 'dotenv';
import express from 'express';
import fetch from 'node-fetch';
config();
const app = express();

app.use(express.static('public')); // publicディレクトリを静的ファイルのために使用

app.get('/weather', (req, res) => {
    const cityName = req.query.cityName;
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => res.json(data))
        .catch(error => res.status(500).json({ error: 'リクエストに失敗しました' }));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`サーバーがポート${PORT}で起動しました。`));