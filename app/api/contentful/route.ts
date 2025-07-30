import { createClient } from "contentful";
import { type NextRequest, NextResponse } from "next/server";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
  environment: "master",
});

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const slug = searchParams.get("slug");

  if (slug) {
    try {
      const response = await client.getEntries({
        content_type: slug,
      });
      const data = response.items.map((item) => item.fields);
      return NextResponse.json(data);
    } catch (error) {
      console.error("Contentful fetch error:", error);
      return NextResponse.json(
        { error: "Failed to fetch photos" },
        { status: 500 },
      );
    }
  }
}
