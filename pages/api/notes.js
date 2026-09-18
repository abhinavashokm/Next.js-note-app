import notes from "@/data/notes";


export default function handler(req, res){
    if(req.method === 'GET'){
        return res.status(200).json(notes)
    }

    if(req.method === 'POST'){
        const {title, content} = req.body
        const newNote = {
            id: notes.length + 1,
            title,
            content
        }
        notes.push(newNote)
        return res.status(201).json(newNote)
    }

    return res.status(405).json({
        message: "method not allowed"
    })
}