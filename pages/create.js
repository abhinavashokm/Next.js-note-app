import { useState } from "react";
import { useRouter } from "next/router";

export default function CreateNote() {
    const router = useRouter();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    async function handleSubmit(e) {
        e.preventDefault()

        const response = await fetch("/api/notes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title,
                content
            })
        })

        if(response.ok){
            router.push("/")
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="mx-auto max-w-xl rounded-lg bg-white p-6 shadow">
                <h1 className="mb-6 text-3xl font-bold">
                    Create Note
                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >
                    <input
                        type="text"
                        placeholder="Note title"
                        value={title}
                        onChange={(e) =>
                            setTitle(e.target.value)
                        }
                        className="w-full rounded border p-3"
                    />

                    <textarea
                        placeholder="Write your note..."
                        value={content}
                        onChange={(e) =>
                            setContent(e.target.value)
                        }
                        className="h-40 w-full rounded border p-3"
                    />

                    <button
                        type="submit"
                        className="rounded bg-black px-5 py-3 text-white"
                    >
                        Create Note
                    </button>
                </form>
            </div>
        </div>
    );
}