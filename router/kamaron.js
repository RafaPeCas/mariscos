let express = require('express');
let router = express.Router();
let kamaron = require('../models/kamaron'); 

router.get('/', async(req, res)=>{
   try{
    const arraykamaronDB = await kamaron.find();
    console.log(arraykamaronDB);
    res.render("kamaron", {
        arraykamaron : arraykamaronDB
    })
   } catch (error){
    console.error(error)
   }
});

router.get('/crear', function(req, res){
    res.render('crear', { titulo: "Crear", contenido: "Crear kamaron" });
});

router.post('/', async (req, res)=>{
    const body = req.body;
    console.log(body);
    try {
        const kamaronDB = new kamaron(body);
        await kamaronDB.save();
        res.redirect('/kamaron');
    } catch (error) {
        console.log('error', error)
    }
});

router.get('/:id', async(req,res) => {
    const id = req.params.id
    try {
        const kamaronDB = await kamaron.findOne({_id: id});
        console.log(kamaronDB);
        res.render('detalle', {
            kamaron : kamaronDB,
            error: false
        });
    } catch (error) {
        console.log('Se ha producido un error', error)
        res.render('detalle', {
            mensaje : 'kamaron no encontrado',
            error: true
        });
    }
})

router.delete('/:id', async(req,res) => {
    const id = req.params.id;
    console.log("_id desde backend", id)
    try {
        const kamaronDB = await kamaron.findByIdAndDelete({_id: id});
        console.log(kamaronDB);
        if(!kamaronDB){
            res.json({
                estado: false,
                mensaje: "No se puede eliminar al kamaron"
            })
        } else {
            res.json({
                estado:true,
                mensaje: "Kamaron eliminado"
            })
        }
    } catch (error) {
        console.log(error);
    }
})

router.put('/:id', async(req,res) => {
    const id = req.params.id;
    const body = req.body;
    console.log(id)
    console.log("body", body)
    try {
        const kamaronDB = await kamaron.findByIdAndUpdate(id, body, {useFindAndModify: false}
            )
        console.log(kamaronDB);
        
            res.json({
                estado: true,
                mensaje: "Es true, claro"
            })

    } catch (error) {
        console.log(error);
        res.json({
            estado: false,
            mensaje: "problema al editar al kamaron"
        })
    }
})

module.exports = router;