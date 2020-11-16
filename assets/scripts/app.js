class Product {
  constructor(title, imageURL, description, price) {
    this.title = title;
    this.imageURL = imageURL;
    this.description = description;
    this.price = price;
  }
}

class ElementAttribute {
  constructor(attrName, attrValue) {
    this.name = attrName;
    this.value = attrValue;
  }
}

class Component {
  constructor(renderHookId) {
    this.renderHookId = renderHookId;
  }

  createRootElement(elementTag, cssClassName, attributes) {
    const rootElement = document.createElement(elementTag);
    if (cssClassName) {
      rootElement.className = cssClassName;
    }
    if (attributes) {
      for (const attr of attributes) {
        rootElement.setAttribute(attr.name, attr.value);
      }
    }
    const renderHook = document.getElementById(this.renderHookId);
    renderHook.append(rootElement);
    return rootElement;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    App.addProductToCart(this.product);
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
    const addToCartBtn = productElement.querySelector("button");
    addToCartBtn.addEventListener("click", this.addToCart.bind(this));
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
    const productListSection = document.createElement("ul");
    productListSection.className = "product-list";
    for (const product of this.products) {
      const productItem = new ProductItem(product);
      const productElement = productItem.render();
      productListSection.append(productElement);
    }
    return productListSection;
  }
}

class Cart extends Component {
  items = [];

  constructor(renderHookId) {
    super(renderHookId);
  }

  set cartItems(value) {
    this.items = value;
    this.totalAmountElement.innerHTML = `<h2>Total: \$${this.totalPrice.toFixed(
      2
    )}</h2>`;
  }

  get totalPrice() {
    return this.items.reduce(
      (accumulator, currentValue) => accumulator + currentValue.price,
      0
    );
  }

  addItem(product) {
    this.cartItems = [...this.items, product];
  }

  render() {
    const cartElement = this.createRootElement("section", "cart");
    cartElement.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Place Order</button>
    `;
    this.totalAmountElement = cartElement.querySelector("h2");
  }
}

class Shop {
  render() {
    const renderHook = document.getElementById("app");

    this.cart = new Cart('app');
    this.cart.render();

    const productList = new ProductList();
    const productListSection = productList.render();

    renderHook.append(productListSection);
  }
}

class App {
  static cart;

  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addItem(product);
  }
}

App.init();
