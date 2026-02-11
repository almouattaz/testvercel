// Client component to display the result using useFormState
"use client";

import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import { getRandomAfterPause } from "./actions";

type State = { value: number | null };

async function action(prev: State): Promise<State> {
  const value = await getRandomAfterPause();
  return { value };
}

function Result() {
  const [state, formAction] = useFormState(action, { value: null });
  const { pending } = useFormStatus();

  return (
    <div style={{ marginTop: 16 }}>
      <form action={formAction}>
        <button type="submit" disabled={pending}>
          {pending ? "Waiting…" : "Run action"}
        </button>
      </form>

      <p style={{ marginTop: 12 }}>
        Result: <b>{state.value ?? "—"}</b>
      </p>
    </div>
  );
}
