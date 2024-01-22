import { config } from 'dotenv';
import express from 'express';
import fetch from 'node-fetch';
config();
var app = express();
app.use(express.static('public')); // publicディレクトリを静的ファイルのために使用
app.get('/weather', function (req, res) {
    var cityName = req.query.cityName;
    var apiKey = process.env.OPENWEATHER_API_KEY;
    if (!apiKey) {
        res.status(500).json({ error: 'APIキーが設定されていません。' });
        return;
    }
    var url = "https://api.openweathermap.org/data/2.5/weather?q=".concat(cityName, "&appid=").concat(apiKey, "&units=metric");
    fetch(url)
        .then(function (response) { return response.json(); })
        .then(function (data) { return res.json(data); })
        .catch(function (error) { return res.status(500).json({ error: 'リクエストに失敗しました' }); });
});
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () { return console.log("\u30B5\u30FC\u30D0\u30FC\u304C\u30DD\u30FC\u30C8".concat(PORT, "\u3067\u8D77\u52D5\u3057\u307E\u3057\u305F\u3002")); });
//# sourceMappingURL=server.js.map