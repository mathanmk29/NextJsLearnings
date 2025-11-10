import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const offset = searchParams.get("offset") || "0";
  const limit = searchParams.get("limit") || "20";

  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data from Pokemon API");
  }

  const data = await res.json();

  const customProps = {
    count: data.count,
    next: data.next,
    previous: data.previous,
    results: data.results,
    error: "this is a custom error message",
    status: 200
  };

  return NextResponse.json(customProps);
}
