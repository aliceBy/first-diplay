const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')()
//const router = require('./router') // ./router/index.js 생략됨.
const sequelize = require('./models').sequelize
const notice = require('./api/notice')
const auth = require('./api/auth')
const upload = require('./api/upload')

app.use(cors)

sequelize.sync()

app.use(bodyParser.json({
  extended: true,
  limit: '100mb'
}))
app.use(bodyParser.urlencoded(
{
  extended: true,
  limit: '100mb'
}))

app.use(express.static('public'))

app.post('/notice', notice.create) // 데이터 넣을때
 // : 을 파람으로 받을수있음, 노드쪽문법
app.get('/notice/:noticeId', notice.detail)

app.get('/notice', notice.list) // 데이터 가져올때

app.put('/notice/:noticeId', notice.modify) 
//app.use(router)

// app.use('/notice/register', (req,res) =>{
//     console.log('=== notice ===');
// })

app.post('/login', auth.login)

//app.post('/popup', require('./api/popup').create)

app.post('/popup', upload.single('image'), require('./api/popup').create) 

app.post('/registration', auth.join)

// app.use((req, res, next) => {
//   res.status = 404
//   next(Error('not found'))
// })
  
// app.use((err, req, res, next) => {
// console.log(err)
// res.status(res.statusCode || 500)
// res.json({ error: err.message || 'internal server error' })
// })

app.listen(3000, () => {
    console.log("80port 대기중!")
})

