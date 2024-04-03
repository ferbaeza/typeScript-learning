import express  from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json({
    Hola: "desde Pagina Principal",
  });
});

export default router;