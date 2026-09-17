import notes from "../data/notes";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="mb-8 text-4xl font-bold">
        My Notes
      </h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {notes.map((note) => (
          <div
            key={note.id}
            className="rounded-lg bg-white p-6 shadow"
          >
            <h2 className="mb-2 text-xl font-semibold">
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