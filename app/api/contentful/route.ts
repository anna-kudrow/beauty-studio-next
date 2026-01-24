import { createClient } from "contentful";
import { type NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

function getClient() {
  const space = process.env.CONTENTFUL_SPACE_ID;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

  if (!space || !accessToken) {
    throw new Error("Contentful env variables are missing");
  }

  return createClient({
    space,
    accessToken,
    environment: "master",
  });
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return NextResponse.json(
      { error: "slug is required" },
      { status: 400 },
    );
  }

  try {
    const client = getClient();
    const response = await client.getEntries({
      content_type: slug,
    });

    const data = response.items.map((item) => item.fields);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Contentful fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 },
    );
  }
}
