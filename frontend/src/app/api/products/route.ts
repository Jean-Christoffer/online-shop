import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_DEV_KEY as string
);

export async function GET() {
  const { data, error } = await supabase.from("products").select(`   
      *,
      reviews(*),
      product_tags!inner(*, tags(*))
    `);

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
