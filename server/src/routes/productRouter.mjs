import { Router } from "express";
import supabase from "../db/supabase.mjs";
const router = Router();

router.get("/api/products", async (req, res) => {
  const { data, error } = await supabase
    .from("products")
    .select(`
      *,
      reviews(*),
      product_tags!inner(*, tags(*))
    `);

  if (error) {
    return res.status(401).send(error);
  }
  
  res.send(data);
});
router.get("/api/products/:id", async (req, res) => {
  const parsedID = parseInt(req.params.id)
  
  const { data, error } = await supabase
    .from("products")
    .select(`
    *,
    reviews(*),
    product_tags!inner(*, tags(*))
  `)
    .eq("id", parsedID);
    if (error) {

      return res.status(401).send(error);
    }
  res.send(data);
});

router.post("/api/products", async (req, res) => {
  const { error } = await supabase.from("products").insert({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
  });
  if (error) {
    res.send(error);
  }
  res.send("created!!");
});

router.put("/api/products/:id", async (req, res) => {
  const { error } = await supabase
    .from("products")
    .update({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
    })
    .eq("id", req.params.id);
  if (error) {
    res.send(error);
  }
  res.send("updated!!");
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
