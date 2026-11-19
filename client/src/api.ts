import type { Game } from "./types";

export async function loadItems(): Promise<Game[]> {
  const response = await fetch("/data.json");
  if (!response.ok) {
    throw new Error(`Unable to load data: ${response.status}`);
  }
  return response.json() as Promise<Game[]>;
}