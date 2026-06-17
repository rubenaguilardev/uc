import express from 'express'

const app = express()

app.get('/api/notes', (req, res) => {
  res.send("You got 8 notes")
})

const PORT = 5001
app.listen(PORT, () => console.log(`Server running on port:${PORT}`))