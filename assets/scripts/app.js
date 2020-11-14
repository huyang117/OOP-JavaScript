class Product {
  constructor(title, imageURL, description, price) {
    this.title = title;
    this.imageURL = imageURL;
    this.description = description;
    this.price = price;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    console.log(this.product);
  }

  render() {
    const productElement = document.createElement("li");
    productElement.className = "product-item";
    productElement.innerHTML = `
        <div>
            <img src=${this.product.imageURL} alt=${this.product.description} />
            <div class="product-item__content">
                <h2>${this.product.title}</h2>
                <h3>\$${this.product.price}</h3>
                <p>${this.product.description}</p>
                <button>Add to Cart</button>
            </div>
        </div>
      `;
    const addToCartBtn = productElement.querySelector('button');
    addToCartBtn.addEventListener('click', this.addToCart.bind(this));
    return productElement;
  }
}

class ProductList {
  products = [
    new Product(
      "A Pillow",
      "https://www.maxpixels.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg",
      "A soft pillow!",
      19.99
    ),
    new Product(
      "A Carpet",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg",
      "A carpet which you might like - or not.",
      89.99
    ),
  ];

  render() {
    const renderHook = document.getElementById("app");
    const productListSection = document.createElement("ul");
    productListSection.className = "product-list";
    for (const product of this.products) {
      const productItem = new ProductItem(product);
      const productElement = productItem.render();
      productListSection.append(productElement);
    }
    renderHook.append(productListSection);
  }
}

const productList = new ProductList();

productList.render();
