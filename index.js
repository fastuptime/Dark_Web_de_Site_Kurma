const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
    <center>
    <h1>R10.NET <3</h1>
    <form action="/post" method="post">
        <input type="text" name="name" placeholder="R10.NET Kullanıcı Adınızı Giriniz" />
        <input type="submit" value="Gönder" />
    </form>
    </center>
    `)
});

app.use('/post', (req, res) => {
    let {
        name
    } = req.body;
    if (!name) return res.send('Lütfen bir kullanıcı adı giriniz.');
    console.log(`${name} kullanıcısı test yaptı.`);
    res.send(`Hoşgeldin ${name}`);
});

app.listen(80, () => {
    console.log('Server started on port 80');
});
