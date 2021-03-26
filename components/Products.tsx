import React from "react";
import styles from "./../styles/products.module.scss";

interface ProductType {
  type: string;
  description: string;
  image: string;
}

const productTypes: ProductType[] = [
  {
    type: "Sabonetes",
    description: "Óleos vegetais e óleos essenciais",
    image: "background-1.jpg",
  },
  {
    type: "Sprays Energéticos",
    description:
      "Produto 100% natural à base de álcool de cereais e óleos essenciais.",
    image: "background-2.jpg",
  },
  {
    type: "Cosméticos artesanais",
    description:
      "Produtos feitos à base de óleos vegetais prensados a frio e óleos essenciais. Livre de essências sintéticas. Livre de produtos de origem animal.",
    image: "background-3.jpg",
  },
  {
    type: "Sais de banho",
    description:
      "Produtos feitos à base de óleos essenciais. Livre de essências sintéticas. Livre de produtos de origem animal.",
    image: "background-4.jpg",
  },
  {
    type: "Hidrolatos",
    description:
      "Produtos feitos à base de óleos essenciais. Livre de essências sintéticas. Livre de produtos de origem animal.",
    image: "background-9.jpg",
  },
];

const Products = () => (
  <div className={styles.productTypes}>
    {productTypes.map((product: ProductType) => (
      <div className={styles.typeContainer}>
        <div
          className={styles.productTypeCard}
          style={{
            backgroundImage: `url('/images/flower-backgrounds/${product.image}')`,
          }}
        >
          <h3 className="hvr-underline-from-center">{product.type}</h3>
        </div>
      </div>
    ))}
  </div>
);

export default Products;
