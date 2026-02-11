"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { getRandomAfterPauseAction, type RandomState } from "./actions";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-amber-300 border border-amber-800 min-w-6 min-h-6 p-2 rounded-lg"
    >
      {pending ? "Waiting 20s…" : "Get random (10–50)"}
    </button>
  );
}

export default function Page() {
  const [state, formAction] = useActionState<RandomState, FormData>(
    getRandomAfterPauseAction,
    { value: null },
  );

  return (
    <main style={{ padding: 24 }}>
      <h1>Random number</h1>

      <form action={formAction}>
        <SubmitButton />
      </form>

      <p style={{ marginTop: 12 }}>
        Result: <b>{state.value ?? "—"}</b>
      </p>
    </main>
  );
}
