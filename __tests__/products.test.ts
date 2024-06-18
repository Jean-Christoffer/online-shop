/**
 * @jest-environment node
 */


import mockData from "../__snapshot__/mockData.json";
import { GET } from "../src/app/api/products/route";
import { createClient } from "@supabase/supabase-js";

jest.mock("@supabase/supabase-js");

describe("GET /api/products", () => {
  const supabase = createClient(
    process.env.SUPABASE_URL as string,
    process.env.SUPABASE_DEV_KEY as string
  );
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return products data with status 200", async () => {

    (supabase.from("products").select as jest.Mock).mockResolvedValue({ data: mockData.data, error: null });

    const response = await GET();
    const json = await response.json();

    expect(response.status).toBe(200);
    expect(json.data).toEqual(mockData.data);
  });

  it("should return an error with status 401 if data is null", async () => {
    const mockError = { message: "An error occurred" };

    (supabase.from("products").select as jest.Mock).mockResolvedValue({ data: null, error: mockError });
    const response = await GET();
    const json = await response.json();
    expect(response.status).toBe(401);
    expect(json.message).toBe(mockError.message);
  });

});


