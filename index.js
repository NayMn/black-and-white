import express from 'express'
import 'dotenv/config'
import { engine } from 'express-handlebars'
import path from 'path'


const __dirname = import.meta.dirname

const app = express()
app.use(express.static(path.join(__dirname + '/public')))


app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
});

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`servidor escuchando en puerto ${PORT}`)
})

