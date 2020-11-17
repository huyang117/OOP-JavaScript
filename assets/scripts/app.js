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
    this.render();
  }

  render() {}

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

class ProductItem extends Component {
  constructor(product, renderHookId) {
    super(renderHookId);
    this.renderProduct(product);
  }

  addToCart() {
    App.addProductToCart(this.product);
  }

  render() {}

  renderProduct(product) {
    this.product = product;
    const productElement = this.createRootElement("li", "product-item");
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
  }
}

class ProductList extends Component {
  products = [];

  constructor(renderHookId) {
    super(renderHookId);
    this.fetchProducts();
  }

  fetchProducts() {
    this.products = [
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
    this.renderProducts();
  }

  render() {
    // create product list component
    this.createRootElement("ul", "product-list", [new ElementAttribute('id', 'prod-list')]);
  }

  renderProducts() {
    // pass the id of the product list component to each product item component as the renderHookId
    for (const product of this.products) {
      new ProductItem(product, 'prod-list');
    }
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

  orderProducts() {
    console.log('Ordering...');
    console.log(this.items);
  }

  render() {
    const cartElement = this.createRootElement("section", "cart");
    cartElement.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Place Order</button>
    `;
    this.totalAmountElement = cartElement.querySelector("h2");
    const orderButton = cartElement.querySelector('button');
    orderButton.addEventListener('click', this.orderProducts.bind(this));
  }
}

class Shop {
  render() {
    const renderHook = document.getElementById("app");

    this.cart = new Cart('app'); // render() will be called everytime an instance is created

    new ProductList('app');
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
