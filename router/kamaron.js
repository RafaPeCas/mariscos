let express = require('express');
let router = express.Router();
let kamaron = require('../models/kamaron'); 

router.get('/', async(req, res)=>{
    try{
     const arraykamaronDB = await kamaron.find();
     res.render("kamaron", {
         arraykamaron : arraykamaronDB,
         successMessage: req.flash('success'),
         errorMessage: req.flash('error')
     });
    } catch (error){
     console.error(error);
     req.flash('error', 'Error al cargar la lista de platos de la carta.');
     res.redirect('/ruta-de-error'); // Redirige a una ruta de error
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
        req.flash('success', 'Plato de la carta añadido correctamente.');
        res.redirect('/kamaron');
    } catch (error) {
        console.log('error', error)
        req.flash('error', 'Error al añadir el plato de la carta.');
    }
});

router.delete('/:id', async(req,res) => {
    const id = req.params.id;
    console.log("_id desde backend", id)
    try {
        const kamaronDB = await kamaron.findByIdAndDelete({_id: id});
        console.log(kamaronDB);
        if(!kamaronDB){
            req.flash('error', 'No se pudo eliminar el plato de la carta.');
            res.json({
                estado: false,
                mensaje: "No se puede eliminar al kamaron"
            })
        } else {
            req.flash('success', 'Plato de la carta eliminado correctamente.');
            res.json({
                estado:true,
                mensaje: "Kamaron eliminado"
            })
        }
    } catch (error) {
        console.log(error);
        req.flash('error', 'Error al eliminar el plato de la carta.');
    }
})

router.put('/:id', async(req,res) => {
    const id = req.params.id;
    const body = req.body;
    console.log(id)
    console.log("EDITANDOOOOOOOOOOOOOOOOOOOOOOO")
    console.log("body", body)
    try {
        const kamaronDB = await kamaron.findByIdAndUpdate(id, body, {useFindAndModify: false});
        console.log(kamaronDB);
        req.flash('success', 'Plato de la carta editado correctamente.');
        res.json({
            estado: true,
            mensaje: "Plato de la carta editado correctamente."
        })

    } catch (error) {
        console.log(error);
        req.flash('error', 'Error al editar el plato de la carta.');
    }
})

module.exports = router;
