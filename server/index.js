const MerkleTree = require('../utils/MerkleTree');
const niceList = require('../utils/niceList');
const verifyProof = require('../utils/verifyProof');

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 3000



// We are using our packages here
app.use( bodyParser.json() );       // to support JSON-encoded bodies

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
 extended: true})); 
app.use(cors())

//You can use this to check if your server is working
app.get('/', (req, res)=>{
res.send("Welcome to your server")
})


//Route that handles login logic
app.post('/client', (req, res) =>{
    const name = req.body.name;
    const merkleTree = new MerkleTree(niceList);
    const root = merkleTree.getRoot();
    const index = niceList.findIndex(n => n === name);
    const proof = merkleTree.getProof(index);
    console.log( verifyProof(proof, name, root) ); // true, Norman Block is in the list!
})

//Start your server on a specified port
app.listen(port, ()=>{
    console.log(`Server is runing on port ${port}`)
})