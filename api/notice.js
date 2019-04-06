const { notice } = require('../models')

const create = async (req,res) => {
    console.log('=== NOTICE REGISTER ===');
    console.log('req.body =', req.body);
    
    const form = req.body.form
    console.log(form.init + '');
    const register = await notice.create({
        subj: form.subj,
        conts: form.conts,
        tp: form.dpTp,
        init: form.init + ''
    })

    console.log('register = ', register)

    res.status(201).json({noticeId:register.dataValues.id})
}

const detail = async (req, res) => {
    console.log('=== NITICE DATAIL ===')
    console.log('req.params',req.params) // 노드쪽문법

    const noticeDetail = await notice.findOne({ where: { id: req.params.noticeId }}) //findOne 쿼리한개를 불러오는 것.
    
    console.log('noticeDetail = ', noticeDetail)

    if (!noticeDetail.dataValues) res.status(401).end('NOT FOUND ID')
    res.status(201).json({form: noticeDetail.dataValues})
}

const list = async (req, res) => {
    console.log('=== NOTICE LIST ===')

    const noticeList = await notice.findAll()

    console.log(' noticeList= ', noticeList[0].dataValues)

    const noticeData = []

    // noticeList.map(list => {
    //     //console.log('=== List ===', list)
    //     noticeData.push(list.dataValues)
    // })
    noticeList.map(list => noticeData.push(list.dataValues))

    console.log(noticeData)

    res.json({noticeData})
}

const modify = async (req, res) => {
    console.log('=== NOTICE MODIFY ===')
    console.log('req.params = ', req.params)
    console.log('req.body = ', req.body)

    const {subj, conts, dpTp, init} = form

    await notice.update(
        {subj, conts, tp: dpTp, init: init + ''},
        {where : {id: noticeId}}
    )

    res.json({notice})
}
module.exports = {
    create,
    detail,
    list,
    modify
}


