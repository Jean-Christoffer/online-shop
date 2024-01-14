import { Router } from "express";
import { resolveProductID } from "../middelware/resolveProductID.mjs";
import supabase from "../db/supabase.mjs";
const router = Router();


router.post("/api/products", async (req, res) => {
  const { error } = await supabase.from("reviews").insert({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
  });
  if (error) {
    res.send(error);
  }
  res.send("created!!");
});



router.delete("/api/products/:id", async (req, res) => {
  const { error } = await supabase
    .from("products")
    .delete()
    .eq("id", req.params.id);
  if (error) {
    res.send(error);
  }
  res.send("deleted!!");
});

export default router;
