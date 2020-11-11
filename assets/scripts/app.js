const products = [
  {
    title: "A Pillow",
    imageURL:
      "https://www.maxpixels.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg",
    description: "A soft pillow!",
    price: 19.99,
  },
  {
    title: "A Carpet",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg",
    description: "A carpet which you might like - or not.",
    price: 89.99,
  },
];

const productList = {
  products,
  render() {
    const renderHook = document.getElementById("app");
    const productListSection = document.createElement("ul");
    productListSection.className = "product-list";
    for (const product of this.products) {
      const productElement = document.createElement("li");
      productElement.className = "product-item";
      productElement.innerHTML = `
        <div>
            <img src=${product.imageURL} alt=${product.description} />
            <div class="product-item__content">
                <h2>${product.title}</h2>
                <h3>\$${product.price}</h3>
                <p>${product.description}</p>
                <button>Add to Cart</button>
            </div>
        </div>
      `;
      productListSection.append(productElement);
    }
    renderHook.append(productListSection);
  },
};

productList.render(); 
