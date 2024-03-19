import { createClient } from "@supabase/supabase-js";
import { NextRequest } from "next/server";

const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_DEV_KEY as string
);

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const parsedID = parseInt(id);

  const { data, error } = await supabase
    .from("products")
    .select(
      `
    *,
    reviews(*),
    product_tags!inner(*, tags(*))
  `
    )
    .eq("id", parsedID);
  if (error) {
    return new Response(JSON.stringify(error), {
      status: 401,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return new Response(JSON.stringify({ data }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
