/**
 * @jest-environment node
 */

import { NextRequest } from "next/server";
import { GET } from "../src/app/api/product/[id]/route";
import mockData from "../__snapshot__/mockData.json";
import { createClient } from "@supabase/supabase-js"; // Importing the mock

jest.mock("@supabase/supabase-js");

describe("GET /api/product", () => {
    const supabase = createClient(
        process.env.SUPABASE_URL as string,
        process.env.SUPABASE_DEV_KEY as string
    );

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should return a specific product data based on id with status 200", async () => {
        const productId = "2";
        const productData = mockData.data.find(product => product.id === parseInt(productId));

        (supabase.from("products").select().eq as jest.Mock).mockResolvedValue({ data: [productData], error: null });

        const req = new NextRequest(new URL(process.env.API_URL as string));

        const response = await GET(
            req,
            { params: { id: productId } }
        );
        const json = await response.json();

        expect(response.status).toBe(200);
        expect(json.data).toEqual([productData]);
    });

    it("should return an error with status 401 if data is null", async () => {
        const productId = "999";
        const mockError = { message: "An error occurred" };

        (supabase.from("products").select().eq as jest.Mock).mockResolvedValue({ data: null, error: mockError });

        const req = new NextRequest(new URL(process.env.API_URL as string));

        const response = await GET(
            req,
            { params: { id: productId } }
        );
        const json = await response.json();

        expect(response.status).toBe(401);
        expect(json.message).toBe(mockError.message);
    });
});
