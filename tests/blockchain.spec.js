import { createBlockchain } from "../src/services/blockchain.service"

describe("Blockchain test suite", () => {
    it("Should create a blockchain", async () => {
        await createBlockchain({
            name: "Solana",
            language: "Rust",
            marketCap: 1,
            supportsSmartContracts: true,
        })
    })
})