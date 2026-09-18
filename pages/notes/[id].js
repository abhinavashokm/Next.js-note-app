import notes from "@/data/notes";


export default function Note({note}) {

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

export async function getServerSideProps({params}) {
    const note = notes.find(note => note.id === Number(params.id))

    if(!note){
        return {
            notFound: true
        }
    }

    return {
        props: {
            note,
        }
    }
}