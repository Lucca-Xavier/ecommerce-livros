const express = require("express");
const Product = require("../models/Product");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
      const produtos = await Product.findAll();
      res.status(200).json(produtos);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
      res.status(500).json({ error: "Erro ao buscar produtos" });
    }
  });
  
router.post("/add", async (req, res) => {
  const { name, author, category, sinopse, year, image, price, qntEstoque } =
    req.body;

  if (
    !name ||
    !author ||
    !category ||
    !sinopse ||
    !year ||
    !price ||
    !qntEstoque
  ) {
    return res.status(422).json({ error: "Preencha todos os campos" });
  }

  try {
    const productExists = await Product.findOne({ where: { name } });

    if (productExists) {
      const quantidadeAtualizada = productExists.qntEstoque + qntEstoque;
      await Product.update(
        { qntEstoque: quantidadeAtualizada },
        { where: { id: productExists.id } }
      );

      return res
        .status(200)
        .json({ message: "Quantidade atualizada no estoque" });
    } else {
      const product = new Product({
        name,
        author,
        category,
        sinopse,
        year,
        image,
        price,
        qntEstoque,
      });

      await product.save();
      return res
        .status(201)
        .json({ message: "Produto adicionado com sucesso", product });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao adicionar produto" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Excluindo o produto pelo ID
    const produtosDeletados = await Product.destroy({ where: { id } });

    // Verifica se algum produto foi deletado
    if (produtosDeletados === 0) {
      return res.status(404).json({ error: "Produto não encontrado" });
    }

    // Produto deletado com sucesso
    res.status(200).json({ message: "Produto deletado" });
  } catch (error) {
    console.error("Erro ao deletar produto:", error);
    res.status(500).json({ error: "Erro ao tentar deletar produto" });
  }
});


router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, author, category, sinopse, year, image, price, qntEstoque } =
      req.body;

      const produto = await Product.findByPk(id)
      if(!produto){
        return res.status(404).json({error: "Produto não encontrado"})
      }

    if (
      !name ||
      !author ||
      !category ||
      !sinopse ||
      !year ||
      !image ||
      !price ||
      !qntEstoque
    ) {
      return res.status(422).json({ error: "Preencha todos os campos" });
    }

    await Product.update(
        { name,  author, category, sinopse, year, image, price, qntEstoque },
        { where: { id } }
    )

    res.status(200).json({message: "Produto editado"})
    console.log(message)


  } catch (error) {
    console.log("Erro ao editar produto")
  }
});

module.exports = router;
