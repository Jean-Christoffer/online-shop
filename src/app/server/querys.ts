"use server"

import type { ProductResponse, ProductsResponse, ProductData } from "@/src/lib/interface";
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
    process.env.SUPABASE_URL as string,
    process.env.SUPABASE_DEV_KEY as string
);
export async function getProducts(): Promise<ProductsResponse> {
    const { data, error } = await supabase
        .from("products")
        .select(`
        *,
        reviews(*),
        product_tags!inner(*, tags(*))
      `);

    if (error) {
        return { data: null, error };
    }

    return { data, error: null };
}

export async function getProduct(id: string): Promise<ProductResponse> {
    const parsedId = parseInt(id);
    const { data, error } = await supabase
        .from("products")
        .select(
            `
    *,
    reviews(*),
    product_tags!inner(*, tags(*))
  `
        )
        .eq("id", parsedId)
        .limit(1);
    if (error) {
        return { data: null, error };
    }
    return { data: data[0], error: null };
}