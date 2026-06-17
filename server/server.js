import express from 'express'

const app = express()

app.get('/api/notes', (req, res) => {
  res.send("You got 8 notes")
})

app.post('/api/notes', (req, res) => {
  res.status(201).json({ message: "Note created successfully!" })
})

app.put('/api/notes/:id', (req, res) => {
  res.status(200).json({ message: "Note updated successfully!" })
})

app.delete('/api/notes/:id', (req, res) => {
  res.status(200).json({ message: "Note deleted successfully!" })
})

const PORT = 5001
app.listen(PORT, () => console.log(`Server running on port:${PORT}`))