import express from 'express'
import notesRoutes from './routes/notesRoute.js'

const app = express()

app.use('/api/notes', notesRoutes)

const PORT = 5001
app.listen(PORT, () => console.log(`Server running on port:${PORT}`))