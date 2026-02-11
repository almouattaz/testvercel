"use server";

export type RandomState = { value: number | null };

export async function getRandomAfterPauseAction(
  _prevState: RandomState,
  _formData: FormData,
): Promise<RandomState> {
  await new Promise((r) => setTimeout(r, 20000));
  const value = Math.floor(Math.random() * 41) + 10; // 10..50
  return { value };
}
