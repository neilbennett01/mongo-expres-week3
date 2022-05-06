import { Router } from  'express'
import { createBlockchain, deleteBlockchain, getBlockchain, getBlockchains, updateBlockchain } from '../services/blockchain.service.js'

export const blockchainRouter = Router()

blockchainRouter.post('/blockchain', async (req, res) => {
    const blockchain = req.body //defining the body of the message to be sent
try {
    const id = await createBlockchain(blockchain)
    res.send(id.toString())

    } catch (error) {
    res.status(500).send(err)
    }

})

blockchainRouter.get('/blockchain/', async (req, res) => {
    const id = await getBlockchains()
    try {
        res.status(200).send(id)
        
    } catch (error) {
        res.status(500).send(err)
    }
})

blockchainRouter.get('/blockchain/:name', async (req, res) => {
    const blockchain = req.params.name
    try {
        const id = await getBlockchain(blockchain)
        res.status(200).send(id)
        
    } catch (error) {
        res.status(500).send(err)
    }
})


blockchainRouter.patch('/blockchain/:name', async (req, res) => {
    const blockchainName = req.params.name
    const updatedBlockchain = req.body
    try {
        await updateBlockchain(blockchainName, updatedBlockchain)
        res.status(200).send({message: "Updated Successfully"})
        
    } catch (error) {
        res.status(500).send(err)
    }
})

blockchainRouter.delete('/blockchain/:name', async (req, res) => {
    const id = req.params.name
    try {
        await deleteBlockchain(id)
        res.status(200).send("Successfully deleted")
        
    } catch (error) {
        res.status(500).send(err)
    }
})