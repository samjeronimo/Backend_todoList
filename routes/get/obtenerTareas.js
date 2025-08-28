const db = require('../../config/database');
const express = require('express');
const router = express.Router();   


router.get('/tareas', async (req, res) => {
    try {
        let [todasLasTareas] = await db.query("SELECT * FROM tareas");
        res.json(todasLasTareas); 
    } catch (error) {
        console.error("Error en /tareas:", error);
        res.status(500).json({ error: "Error al obtener tareas" }); 
    }
});



module.exports = router;