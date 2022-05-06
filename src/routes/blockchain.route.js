import { Router } from  'express'
import { createBlockchain, deleteBlockchain, getBlockchain, getBlockchains, updateBlockchain } from '../services/blockchain.service.js'

export const blockchainRouter = Router()

blockchainRouter.post('/blockchain', async (req, res) => {
    const blockchain = req.body //defining the body of the message to be sent
    const id = await createBlockchain(blockchain)
    res.send(id.toString())
})


blockchainRouter.get('/blockchain/', async (req, res) => {
    const id = await getBlockchains()
    res.status(200).send(id)
})

blockchainRouter.get('/blockchain/:name', async (req, res) => {
    const blockchain = req.params.name
    const id = await getBlockchain(blockchain)
    res.status(200).send(id)
})


blockchainRouter.patch('/blockchain/:name', async (req, res) => {
    const blockchainName = req.params.name
    const updatedBlockchain = req.body
    await updateBlockchain(blockchainName, updatedBlockchain)
    res.status(200).send({message: "Updated Successfully"})
})

blockchainRouter.delete('/blockchain/:name', async (req, res) => {
    const id = req.params.name
    await deleteBlockchain(id)
    res.status(200).send("Successfully deleted")
})