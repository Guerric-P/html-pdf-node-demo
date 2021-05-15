const express = require('express')
const html_to_pdf = require('html-pdf-node')

const app = express()
const port = 3000

app.use(express.static('src/public'))

const server = app.listen(port, async () => {
    const url = `http://localhost:${port}`
    const options = { format: 'A4', path: 'output.pdf' }
    const file = { url }
    const pdf = await html_to_pdf.generatePdf(file, options)

    server.close()
})