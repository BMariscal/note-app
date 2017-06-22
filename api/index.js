import express from 'express';
import bodyParser from 'body-parser';
import data from '../src/testData';

const router = express.Router();
router.use(bodyParser.json());

router.get('/notes',(req,res) =>{
    res.send({notes: data.notes});
});


export default router;