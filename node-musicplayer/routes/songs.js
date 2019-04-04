const router = require('express').Router();

let SongDetails = [
    {
        title:"Diam Nonummy",
        conver_image:"http://filmmusicreporter.com/wp-content/uploads/2018/05/mosaic.jpg",
        track_list:[
            {
                name:"Track 1",
                artist:"Artist 1",
                link : 'link1',
                duration:180
            },
            {
                name:"Track 2",
                artist:"Artist 2",
                link : 'link2',
                duration:186
            },
            {
                name:"Track 3",
                artist:"Artist 3",
                link : 'link3',
                duration:220
            },
            {
                name:"Track 4",
                artist:"Artist 4",
                link : 'link4',
                duration:345
            },
            {
                name:"Track 5",
                artist:"Artist 5",
                link : 'link5',
                duration:330
            },
        ]
    }
]


router.get("/",(req,res)=>{
    res.send("Songs route working ")
})

router.get('/list',(req,res)=>{
    res.status(200).send({success:true,songs:SongDetails})
})



module.exports = router;

