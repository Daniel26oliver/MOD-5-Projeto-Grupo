const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const flash = require('express-flash')

const app = express()

const conn = require('./db/conn')


const Tabelaitem = require('./models/Tabelaitem ')
const Usuario = require('./models/Usuario')


const itemsRoutes = require('./routes/itemsRoutes')
const usuRoutes = require('./routes/usuRoutes')


const ItemController = require('./controllers/ItemsController')


app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')


app.use(express.urlencoded({
    extended: true,
}))


app.use(express.json())


app.use(
    session({
        name: "session",
        secret: "mySecret1234",
        resave: false,
        saveUninitialized: false,
        store: new FileStore({
            logFn: function () { },
            path: require('path').join(require('os').tmpdir(), 'sessions'),
        }),
        cookie: {
            secure: false,
            maxAge: 360000,
            expires: new Date(Date.now() + 360000),
            httpOnly: true
        }
    }),
)


app.use(flash())


app.use(express.static('public'))


app.use((req, res, next) => {
    if (req.session.usuarioid) {
        res.locals.session = req.session
    }
    next()
})


app.use('/items', itemsRoutes)
app.use('/', usuRoutes)

app.get('/', ItemController.exibirHomeDashboard)

conn
    
    .sync()
    .then(() => {
        app.listen(3000)
    })
    .catch((err) => console.log(err))