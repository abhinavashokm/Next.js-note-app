import Link from "next/link";
import notes from "../data/notes";
import Image from "next/image";

export default function Home({ notes }) {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="mb-8 text-4xl font-bold text-black">
        My Notes
      </h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {notes.map((note) => (
          <div
            key={note.id}
            className="rounded-lg bg-white p-6 shadow"
          >
            <Image
              src={'/note.jpg'}
              alt="note"
              width={200}
              height={50}
              className="mb-4 rounded"
            />
            <h2 className="mb-2 text-xl font-semibold text-black">
              {note.title}
            </h2>

            <p className="text-gray-600">
              {note.content}
            </p>

            <Link
              href={`/notes/${note.id}`}
              className="font-medium text-blue-600"
            >
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}


export async function getStaticProps(params) {
  return {
    props: {
      notes,
    }
  }
}