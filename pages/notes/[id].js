import { useRouter } from "next/router";
import notes from "@/data/notes";


export default function Note() {
    const router = useRouter()
    const { id } = router.query

    const note = notes.find(note => note.id === Number(id))

    if (!note) {
        return <h1>Note not found</h1>
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-4xl font-bold">
                {note.title}
            </h1>

            <p className="mt-4 text-gray-600">
                {note.content}
            </p>
        </div>
    )
}