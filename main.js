"use strict";

const products = [
  {
    id: 2334,
    title: "Рабочая лампа на струбцине KD-312",
    price: 1148,
    priceType: "Руб.",
    description: "Рабочая лампа на струбцине KD-312 белого цвета служит для освещения рабочего места дома и в офисе.",
    properties: [
      {
        key: "price",
        text: "Стоимость",
        unit: "руб",
        groupType: 1,
      },
      {
        key: "width",
        text: "Ширина",
        value: 12.5,
        unit: "см",
        groupType: 1,
      },
      {
        key: "height",
        text: "Высота",
        value: 41,
        unit: "см",
        groupType: 1,
      },
      {
        key: "weight",
        text: "Вес",
        value: 1.449,
        unit: "кг",
        groupType: 1,
      },
      {
        key: "voltage",
        text: "Напряжение",
        value: 230,
        unit: "В",
        groupType: 2,
      },
      {
        // 1 - сеть, 2 - батарейки, 3- аккум
        key: "powerSupply",
        text: "Источник питания",
        value: 1,
        unit: "",
        groupType: 2,
      },
      {
        key: "colorTemperature",
        text: "Температура свечения",
        value: 4000,
        unit: "в К",
        groupType: 2,
      },
    ],
    watts: [
      { id: 1, text: 14, unit: "wt" },
      { id: 2, text: 24, unit: "wt" },
      { id: 3, text: 34, unit: "wt" },
      { id: 4, text: 44, unit: "wt" },
      { id: 5, text: 54, unit: "wt" },
    ],
    colors: [
      { id: 1, text: "white", unit: "", img: "extra_white.jpg" },
      { id: 2, text: "black", unit: "", img: "black.jpg" },
      { id: 3, text: "grey", unit: "", img: "light_grey.jpg" },
      { id: 4, text: "metallic", unit: "", img: "metallic.jpg" },
    ],
  },
  {
    id: 2345,
    title: "Настольная лампа светодиодная Эра LED-506-10W-W регулируемый",
    price: 997,
    priceType: "Руб.",
    description: "предназначена для установки на столе в рабочем кабинете, парте школьника. Оснащена широким и устойчивым основанием",
    properties: [
      {
        key: "price",
        text: "Стоимость",
        unit: "руб",
        groupType: 1,
      },
      {
        key: "width",
        text: "Ширина",
        value: 13.5,
        unit: "см",
        groupType: 1,
      },
      {
        key: "height",
        text: "Высота",
        value: 43,
        unit: "см",
        groupType: 1,
      },
      {
        key: "weight",
        text: "Вес",
        value: 2.449,
        unit: "кг",
        groupType: 1,
      },
      {
        key: "voltage",
        text: "Напряжение",
        value: 220,
        unit: "В",
        groupType: 2,
      },
      {
        key: "powerSupply",
        text: "Источник питания",
        value: 2,
        unit: "",
        groupType: 2,
      },
      {
        key: "colorTemperature",
        text: "Температура свечения",
        value: 4000,
        unit: "в К",
        groupType: 2,
      },
    ],
    watts: [
      { id: 1, text: 14, unit: "wt" },
      { id: 2, text: 24, unit: "wt" },
      { id: 3, text: 34, unit: "wt" },
    ],
    colors: [
      { id: 1, text: "white", unit: "", img: "lamp_2_white.jpg" },
      { id: 2, text: "black", unit: "", img: "lamp_2_black.jpg" },
    ],
  },
  {
    id: 278,
    title: "Напольный светильник I торшер 60023-24",
    price: 5748,
    priceType: "Руб.",
    description: "Напольная лампа на мраморном основании с деревянной структурой. Возможны несколько вариантов отделки.",
    properties: [
      {
        key: "price",
        text: "Стоимость",
        unit: "руб",
        groupType: 1,
      },
      {
        key: "width",
        text: "Ширина",
        value: 45.5,
        unit: "см",
        groupType: 1,
      },
      {
        key: "height",
        text: "Высота",
        value: 90,
        unit: "см",
        groupType: 1,
      },
      {
        key: "weight",
        text: "Вес",
        value: 5.4,
        unit: "кг",
        groupType: 1,
      },
      {
        key: "voltage",
        text: "Напряжение",
        value: 250,
        unit: "В",
        groupType: 2,
      },
      {
        key: "powerSupply",
        text: "Источник питания",
        value: 1,
        unit: "",
        groupType: 2,
      },
      {
        key: "colorTemperature",
        text: "Температура свечения",
        value: 5000,
        unit: "в К",
        groupType: 2,
      },
    ],
    watts: [
      { id: 1, text: 14, unit: "wt" },
      { id: 2, text: 24, unit: "wt" },
      { id: 3, text: 34, unit: "wt" },
      { id: 4, text: 44, unit: "wt" },
      { id: 5, text: 54, unit: "wt" },
    ],
    colors: [
      { id: 1, text: "white", unit: "", img: "lamp_white.png" },
      { id: 2, text: "black", unit: "", img: "lamp_black.png" },
    ],
  },
];

const filterCategories = [
  // 1 - input от/до 2 - select
  {
    key: "price",
    text: "Цена",
    unit: "руб",
    groupType: 1,
  },
  {
    key: "width",
    text: "Ширина",
    unit: "см",
    groupType: 1,
  },
  {
    key: "height",
    text: "Высота",
    unit: "см",
    groupType: 1,
  },
  {
    key: "weight",
    text: "Вес",
    unit: "кг",
    groupType: 1,
  },
  {
    key: "voltage",
    text: "Напряжение",
    unit: "В",
    options: [
      {
        value: 220,
        text: 220,
      },
      {
        value: 230,
        text: 230,
      },
      {
        value: 250,
        text: 250,
      },
    ],
    groupType: 2,
  },
  {
    key: "powerSupply",
    text: "Источник питания",
    type: 1,
    unit: "",
    options: [
      {
        value: 1,
        text: "батарейки",
      },
      {
        value: 2,
        text: "аккумулятор",
      },
      {
        value: 3,
        text: "сеть",
      },
    ],
    groupType: 2,
  },
  {
    key: "colorTemperature",
    text: "Температура свечения",
    unit: "в К",
    options: [
      {
        value: 1000,
        text: 1000,
      },
      {
        value: 2000,
        text: 2000,
      },
      {
        value: 3000,
        text: 3000,
      },
      {
        value: 4000,
        text: 4000,
      },
      {
        value: 5000,
        text: 5000,
      },
      {
        value: 6000,
        text: 6000,
      },
    ],
    groupType: 2,
  },
];

function createElement(html) {
  const root = document.createElement("div");
  root.insertAdjacentHTML("beforeend", html);
  return root.firstElementChild;
}

class BasicComponent {
  _element = null;
  _subElements = {};

  constructor() {}

  _init() {
    this._element = createElement(this._getTemplate());
    this._subElements = this._getSubElements();
  }

  _getSubElements() {
    return Array.from(this._element.querySelectorAll("[data-element]")).reduce((acc, el) => {
      return {
        ...acc,
        [el.getAttribute("data-element")]: el,
      };
    }, {});
  }

  get element() {
    return this._element;
  }
}

class ProductList extends BasicComponent {
  _state = {
    filter: {},
  };

  constructor(Product, products, Choice, ChoiceItem) {
    super();
    this._products = products;
    this._Product = Product;
    this._Choice = Choice;
    this._ChoiceItem = ChoiceItem;
    this._init();
  }

  _init() {
    super._init();
    this._render();
  }

  _setStateFilter(filterParams) {
    this._state.filter = { ...this._state.filter, ...filterParams };
  }

  _render() {
    this._element.innerHTML = "";
    this._element.append(...this._addProducts());
    this._emptyList();
  }

  update(filterParams) {
    this._setStateFilter(filterParams);
    this._render();
  }

  _emptyList() {
    if (this._element.innerHTML === "") {
      return (this._element.innerHTML = `<div class="products-list__empty">Товар не найден</div>`);
    }
  }
  _getFilterValue(filterParams) {
    return (product) => {
      return Object.keys(filterParams).every((key) => {
        const currentProperty = product.properties.find((property) => property.key === key);
        if (currentProperty === undefined) {
          return;
        }
        return (
          filterParams[key] === currentProperty.value ||
          (typeof filterParams[key] === "object" && filterParams[key].min <= currentProperty.value && filterParams[key].max >= currentProperty.value) ||
          (Array.isArray(filterParams[key]) && filterParams[key].includes(currentProperty.value))
        );
      });
    };
  }

  _addProducts() {
    if (this._state.filter.searchText && this._state.filter.searchText.length > 0) {
      return this._products
        .filter((product) => {
          return product.title.toLowerCase().includes(this._state.filter.searchText);
        })
        .map((product) => new this._Product(product, this._Choice, this._ChoiceItem, this._state.filter.searchText).element);
    }
    return this._products
      .filter(this._getFilterValue(this._state.filter))
      .map((product) => new this._Product(product, this._Choice, this._ChoiceItem, this._state.filter.searchText).element);
  }

  _getTemplate() {
    return `<div class="product-list"></div>`;
  }
}

class Product extends BasicComponent {
  _state = {
    favorite: false,
    watts: 1,
    colors: 1,
    isFirstRender: true,
  };

  constructor({ id, title, price, priceType, description, properties, watts, colors }, Choice, ChoiceItem, filterParams) {
    super();
    this._id = id;
    this._title = title;
    this._price = price;
    this._priceType = priceType;
    this._description = description;
    this._properties = properties;
    this._watts = watts;
    this._colors = colors;
    this._Choice = Choice;
    this._ChoiceItem = ChoiceItem;
    this._filterParams = filterParams;
    this._init();
  }

  _init() {
    super._init();
    this._addListener();
    this._render();
  }

  _addListener() {
    this._subElements.favorites.addEventListener("click", () => {
      this._state.favorite = !this._state.favorite;
      this._render();
    });

    this._subElements.imgWrapper.addEventListener("click", (e) => {
      e.target.dispatchEvent(
        new CustomEvent("openImage", {
          bubbles: true,
          detail: {
            src: this._colors[this._state.colors - 1].img,
          },
        })
      );
    });

    this._subElements.more.addEventListener("click", (e) => {
      e.target.dispatchEvent(
        new CustomEvent("openProperties", {
          bubbles: true,
          detail: {
            properties: this._properties,
          },
        })
      );
    });

    this._subElements.buy.addEventListener("click", (e) => {
      e.target.dispatchEvent(
        new CustomEvent("buy", {
          bubbles: true,
          detail: {
            productTitle: this._title,
          },
        })
      );
    });

    this._subElements.buy.addEventListener("click", (e) => {
      e.target.dispatchEvent(
        new CustomEvent("addToCart", {
          bubbles: true,
          detail: {
            id: this._id,
            title: this._title,
            price: this._price,
            priceType: this._priceType,
            src: this._colors[this._state.colors - 1].img,
          },
        })
      );
    });
  }

  _render() {
    this._subElements.favorites.innerHTML = this._state.favorite ? `<i class="fa-solid fa-star"></i>` : `<i class="fa-regular fa-star"></i>`;

    this._subElements.img.src = `img/${this._colors[this._state.colors - 1].img}`;

    if (this._watts[this._state.watts - 1]) {
      this._subElements.imgWrapper.className = `product__image-wrapper--light-${this._watts[this._state.watts - 1].text}`;
    } else {
      this._subElements.imgWrapper.className = `product__image-wrapper`;
    }

    if (this._state.isFirstRender) {
      this._subElements.options.insertAdjacentElement(
        "beforeend",
        new this._Choice({ title: "Watts", data: this._watts }, this._ChoiceItem, this._getWatt.bind(this)).element
      );
      this._subElements.options.insertAdjacentElement(
        "beforeend",
        new this._Choice({ title: "Colors", data: this._colors }, this._ChoiceItem, this._getColor.bind(this)).element
      );
    }

    if (this._state.isFirstRender) {
      this._state.isFirstRender = false;
    }

    if (this._title.toLowerCase().includes(this._filterParams)) {
      this._subElements.title.innerHTML = this._generateTitleMarker();
    }
  }

  _generateTitleMarker() {
    const start = this._title.toLowerCase().indexOf(this._filterParams);
    const end = start + this._filterParams.length;
    return `${this._title.slice(0, start)}<span class="product__title-marker">${this._title.slice(start, end)}</span>${this._title.slice(end)}`;
  }

  _getWatt(itemId) {
    this._state.watts = itemId;
    this._render();
  }

  _getColor(itemId) {
    this._state.colors = itemId;
    this._render();
  }

  _getTemplate() {
    return `
		<div class="product">
			<div class="product__main">
				<div class="product__more" data-element="more">
					<i class="fa-solid fa-angles-right"></i>
				</div>
				<div class="product__favorites" data-element="favorites"></div>
        <div class="product__image-wrapper" data-element="imgWrapper">
          <img class="product__image" data-element="img" src="" alt="img" />
        </div>
        <div class="product__info">
          <h4 class="product__title" data-element="title">${this._title}</h4>
          <span class="product__price">${this._price} ${this._priceType}</span>
          <div class="product__options" data-element="options"></div>
          <div class="product__description">${this._description}</div>
				</div>
			</div>
			<div class="product__btn" data-element="buy">
				<button class="btn btn--buy">Buy</button>
			</div>
     </div>`;
  }
}

class Choice extends BasicComponent {
  _state = {
    active: false,
    activeItem: 1,
  };

  constructor({ title, data }, ChoiceItem, callback) {
    super();
    this._title = title;
    this._data = data;
    this._ChoiceItem = ChoiceItem;
    this._callback = callback;
    this._init();
  }

  _init() {
    super._init();
    this._addListener();
  }

  _addListener() {
    this._subElements.btn.addEventListener("click", () => {
      this._state.active = !this._state.active;
      this._render();
    });
  }

  _render() {
    if (this._state.active) {
      this._subElements.menu.classList.add("choice__menu--active");
    } else {
      this._subElements.menu.classList.remove("choice__menu--active");
    }
    this._subElements.menu.innerHTML = "";
    this._subElements.menu.append(...this._addItem());
  }

  _getActiveItemId(itemId) {
    this._state.activeItem = itemId;
    this._callback(itemId);
    this._render();
  }

  _addItem() {
    return this._data.map((el) => {
      if (this._state.activeItem === el.id) {
        return new this._ChoiceItem({ ...el, active: true }, this._getActiveItemId.bind(this)).element;
      } else {
        return new this._ChoiceItem({ ...el, active: false }, this._getActiveItemId.bind(this)).element;
      }
    });
  }

  _getTemplate() {
    return `
			<div class="choice">
        	<button class="btn choice__btn" data-element="btn">${this._title}</button>
          <ul class="choice__menu" data-element="menu"></ul>
      </div>
		`;
  }
}

class ChoiceItem extends BasicComponent {
  constructor({ id, text, unit, active }, itemId) {
    super();
    this._id = id;
    this._text = text;
    this._unit = unit;
    this._active = active;
    this._itemId = itemId;
    this._init();
  }

  _init() {
    super._init();
    this._addListener();
  }

  _addListener() {
    this._element.addEventListener("click", (e) => {
      this._itemId(+e.target.getAttribute("data-key"));
    });
  }

  _getTemplate() {
    return `<li class="choice-item ${this._active ? "choice-item--active" : ""}" data-key="${this._id}">${this._text}${this._unit}</li>`;
  }
}

class Popup extends BasicComponent {
  _state = {};

  constructor() {
    super();
    this._init();
  }

  _init() {
    super._init();
    this._handleKeyDocument = this._handleKeyDocument.bind(this);
    this._addListeners();
  }

  _addListeners() {
    this._subElements.btn.addEventListener("click", () => this.close());

    this._element.addEventListener("click", (e) => {
      if (e.target === this._subElements.wrapper) {
        this.close();
      }
    });
  }

  _handleKeyDocument(e) {
    if (e.key === "Escape") {
      this.close();
    }
  }

  open() {
    document.addEventListener("keydown", this._handleKeyDocument);
    this._element.classList.add("popup--active");
  }

  close() {
    document.addEventListener("keydown", this._handleKeyDocument);
    this._element.classList.remove("popup--active");
  }

  _getTemplate() {
    return `it's base template. Change it.`;
  }
}

class PopupProperties extends Popup {
  constructor(PropertyItem) {
    super();
    this._PropertyItem = PropertyItem;
  }

  _generateItems() {
    return this._state.properties.map((property) => {
      return new this._PropertyItem({ ...property }).element;
    });
  }

  _render() {
    this._subElements.list.innerHTML = "";
    this._subElements.list.append(...this._generateItems());
  }

  open(properties) {
    this._state.properties = properties;
    this._render();
    super.open();
  }

  _getTemplate() {
    return `
		<div class="popup">
      <div class="popup__wrapper" data-element="wrapper">
        <div class="popup__container" data-element="container">
					<button class="popup__btn btn--close btn" data-element="btn">x</button>
				  <h3 class="popup__title">Характеристики:</h3>
  				<div class="properties-list" data-element="list"></div>
				</div>
      </div>
    </div>
		`;
  }
}

class PropertyItem extends BasicComponent {
  constructor({ key, text, value, unit }) {
    super();
    this._key = key;
    this._text = text;
    this._value = value;
    this._unit = unit;
    this._init();
  }

  _init() {
    super._init();
  }

  _getTemplate() {
    return `
			<div class="product-property">
				<div class="product-property__icon">
					<i class="fa-solid fa-angles-right"></i>
				</div>
				<div class="product-property__info">
					<h4 class="product-property__title">${this._text}</h4>
					<span class="product-property__text">${this._value} ${this._unit}</span>
				</div>
			</div>`;
  }
}

class PopupBuy extends Popup {
  _render(productTitle) {
    return (this._subElements.text.textContent = `Вы выбрали товар "${productTitle}", хороший выбор!`);
  }

  open(productTitle) {
    this._render(productTitle);
    super.open();
  }

  _getTemplate() {
    return `
		<div class="popup">
      <div class="popup__wrapper" data-element="wrapper">
			<div class="popup__container" data-element="container">
				<button class="popup__btn btn--close btn" data-element="btn">x</button>
				<h3 class="popup__title">Товар в корзине:</h3>
      	<p class="popup__text" data-element="text"></p>
      	<div class="popup__buttons">
        	<button class="popup__btn btn--continue btn">Продолжить покупки</button>
        	<button class="popup__btn btn--cart btn">В корзину</button>
      	</div>
			</div>
    </div>
  </div>
		`;
  }
}

class PopupImage extends Popup {
  _render(src) {
    this._subElements.img.src = `img/${src}`;
  }

  open(src) {
    this._render(src);
    super.open();
  }

  _getTemplate() {
    return `
		<div class="popup">
      <div class="popup__wrapper" data-element="wrapper">
        <div class="popup__container" data-element="container">
					<button class="popup__btn btn--close btn" data-element="btn">x</button>
				  <img class="popup__image" data-element="img" src="" alt="img" />
				</div>
      </div>
    </div>
		`;
  }
}

class Header extends BasicComponent {
  constructor(miniCart, Search) {
    super();
    this._miniCart = miniCart;
    this._search = new Search();
    this._init();
  }

  _init() {
    super._init();
    this._render();
  }

  _render() {
    this._subElements.miniCart.insertAdjacentElement("afterbegin", this._miniCart.element);
    this._subElements.search.insertAdjacentElement("afterbegin", this._search.element);
  }

  _getTemplate() {
    return `
		    <header class="header">
        	<div class="header__logo">
          	<i class="fa-regular fa-lightbulb"></i>
						<span class="header__logo-name">Lamp</span>
        	</div>
					<nav class="header__menu">
						<ul class="menu__list">
							<li class="menu__item">Главная</li>
							<li class="menu__item">Каталог</li>
							<li class="menu__item">Контакты</li>
						</ul>
					</nav>
					<div class="header__actions">
						<div class="header__search" data-element="search"></div>
						<div class="header__mini-cart" data-element="miniCart"></div>
					</div>
      	</header>`;
  }
}

class MiniCart extends BasicComponent {
  _state = {
    active: false,
    totalPrice: 0,
    products: [],
  };

  constructor(MiniCartItem) {
    super();
    this._MiniCartItem = MiniCartItem;
    this._init();
  }

  _init() {
    super._init();
    this._handleClickDocument = this._handleClickDocument.bind(this);
    this._handleKeyDocument = this._handleKeyDocument.bind(this);
    this._addListeners();
    this._render();
  }

  _addListeners() {
    this._subElements.wrapper.addEventListener("click", () => {
      this._setStateActive();
      this._render();
    });
  }

  addItem(product) {
    this._state.products.push(product);
    this._render();
  }

  removeItem(id) {
    this._state.products = this._state.products.filter((product) => product.id !== id);
    this._render();
  }

  _generateItems() {
    return this._state.products.map((product) => {
      return new this._MiniCartItem(product, this.removeItem.bind(this)).element;
    });
  }

  _calcTotalProductsAmount() {
    return this._state.products.length;
  }

  _calcTotalProductsPrice() {
    return this._state.products.map((product) => product.price).reduce((acc, el) => acc + el, 0);
  }

  _render() {
    this._subElements.cartList.innerHTML = "";
    this._subElements.cartList.append(...this._generateItems());

    this._state.active ? this._open() : this._close();

    this._subElements.price.textContent = `${this._calcTotalProductsPrice()} руб`;

    if (this._calcTotalProductsAmount() === 0) {
      this._subElements.product.textContent = `${this._calcTotalProductsAmount()} товаров`;
      this._subElements.cartList.textContent = `В корзине пока нет товаров`;
    } else if (this._calcTotalProductsAmount() === 1) {
      this._subElements.product.textContent = `${this._calcTotalProductsAmount()} товар`;
    } else if (this._calcTotalProductsAmount() < 5) {
      this._subElements.product.textContent = `${this._calcTotalProductsAmount()} товара`;
    } else {
      this._subElements.product.textContent = `${this._calcTotalProductsAmount()} товаров`;
    }
  }

  _setStateActive() {
    this._state.active = !this._state.active;
  }

  _handleClickDocument(e) {
    if (!e.target.closest(".mini-cart") && !e.target.closest(".btn")) {
      this._setStateActive();
      this._close();
    }
  }

  _handleKeyDocument(e) {
    if (e.key === "Escape") {
      this._setStateActive();
      this._close();
    }
  }
  _open() {
    document.addEventListener("keydown", this._handleKeyDocument);
    document.addEventListener("click", this._handleClickDocument);
    this._subElements.productsWrapper.classList.add("mini-cart__products-wrapper--active");
  }

  _close() {
    document.removeEventListener("keydown", this._handleKeyDocument);
    document.removeEventListener("click", this._handleClickDocument);
    this._subElements.productsWrapper.classList.remove("mini-cart__products-wrapper--active");
  }

  _getTemplate() {
    return `
		<div class="mini-cart">
			<div class="mini-cart__wrapper" data-element="wrapper">
        <div class="mini-cart__icon" data-element="icon">
          <i class="fa-solid fa-cart-shopping"></i>
        </div>
				<div class="mini-cart__info">
					<span class="mini-cart__price" data-element="price"></span>
					<span class="mini-cart__product" data-element="product"></span>
				</div>
			</div>
      <div class="mini-cart__products-wrapper" data-element="productsWrapper">
        <h3 class="mini-cart__title">Товары в корзине:</h3>
        <div class="mini-cart__list" data-element="cartList"></div>
        <button class="btn btn--order" data-element="btn">Оформить заказ</button>
      </div>
    </div>
		`;
  }
}

class MiniCartItem extends BasicComponent {
  constructor({ id, title, price, priceType, src }, removeItemCallback) {
    super();
    this._removeItemCallback = removeItemCallback;
    this._id = id;
    this._title = title;
    this._price = price;
    this._priceType = priceType;
    this._src = src;
    this._init();
  }

  _init() {
    super._init();
    this._addListeners();
    this._render();
  }

  _addListeners() {
    this._subElements.close.addEventListener("click", (e) => {
      e.target.dispatchEvent(
        new CustomEvent("removeMiniCartItem", {
          bubbles: true,
          detail: {
            title: this._title,
            price: this._price,
            priceType: this._priceType,
          },
        })
      );
    });

    this._subElements.close.addEventListener("click", (e) => {
      this._removeItemCallback(this._id);
      console.log(e.target);
      this._remove();
    });
  }

  _render() {
    this._subElements.productTitle.textContent = `${this._title}`;
    this._subElements.productAmount.textContent = `${this._price} ${this._priceType}`;
    this._subElements.productImage.src = `img/${this._src}`;
  }
  _remove() {
    this._element.remove();
  }

  _getTemplate() {
    return `
		    <div class="mini-item">
					<div class="mini-item__image" >
						<img src="" data-element="productImage" alt="image" />
					</div>
					<div class="mini-item__details">
						<div class="mini-item__title" data-element="productTitle"></div>
						<div class="mini-item__amount" data-element="productAmount"></div>
					</div>
					<button class="btn btn--closeItem" data-element="close">x</button>
    		</div>
		`;
  }
}

class AlertList extends BasicComponent {
  _state = {
    alertQueue: [],
  };
  constructor() {
    super();
    this._init();
  }

  _init() {
    super._init();
    this._addListeners();
  }

  _addListeners() {
    this._subElements.btnHide.addEventListener("click", () => {
      this._state.alertQueue.forEach((alert) => {
        this._removeAlert(alert);
        alert.destroy();
      });
    });
  }

  addAlert(product) {
    this._state.alertQueue.push(product);
    this._subElements.list.innerHTML = "";
    this._subElements.list.append(...this._generateAlerts());
    this._render();
  }

  _calcAlertNumber() {
    return this._state.alertQueue.length;
  }

  _calcHeight() {
    this._subElements.list.style.height = `${2 * 1 + this._state.alertQueue.slice(0, 1).reduce((acc, el) => acc + el.getSize().height, 0)}px`;
  }

  _generateAlerts() {
    return this._state.alertQueue.map((alert) => {
      return alert.render(this._removeAlert.bind(this));
    });
  }

  _setActiveState() {
    if (this._calcAlertNumber() > 1) {
      this._subElements.control.classList.add("remove-list__control--active");
      this._calcHeight();
    } else {
      this._subElements.control.classList.remove("remove-list__control--active");
      this._subElements.list.style.height = "auto";
    }
  }

  _render() {
    this._setActiveState();

    this._subElements.number.textContent = `+${this._calcAlertNumber() - 1}`;
  }

  _removeAlert(context) {
    this._state.alertQueue = this._state.alertQueue.filter((alert) => context !== alert);
    this._render();
  }

  _getTemplate() {
    return `<div class="remove-list">
							<div class="remove-list__control" data-element="control">
								<div class="remove-list__triangle">
									<span class="remove-list__number-alerts" data-element="number"></span>
								</div>
								<button class="btn btn--hide remove-list__hide-alerts" data-element="btnHide">Скрыть всё</button>
							</div>
							<div class="remove-list__list" data-element="list"></div>
						</div>`;
  }
}

class Alert extends BasicComponent {
  _timerId;
  _callback;

  constructor({ title, price, priceType }) {
    super();
    this._title = title;
    this._price = price;
    this._priceType = priceType;

    this._init();
  }

  _init() {
    super._init();
    this.render();
  }

  _createTimer() {
    this._timerId = setTimeout(() => {
      this._remove();
      this._callback(this);
    }, 5000);
  }

  _remove() {
    this._element.remove();
  }

  destroy() {
    clearTimeout(this._timerId);
    return this._remove();
  }

  getSize() {
    return {
      height: this._element.getBoundingClientRect().height,
      width: this._element.getBoundingClientRect().width,
    };
  }

  render(callback) {
    this._callback = callback;
    this._createTimer();
    return this._element;
  }

  _getTemplate() {
    return `<div class="remove-alert">
							<div class="remove-alert__timer"></div>
								<p class="remove-alert__text" data-element="text">
									<span class="remove-alert__product-title" data-element="data">${this._title} за ${this._price}${this._priceType}</span>
									был удалён из корзины.
								</p>
        		</div>`;
  }
}

class Search extends BasicComponent {
  _state = {
    active: false,
    input: "",
  };

  constructor() {
    super();
    this._init();
  }

  _init() {
    super._init();
    this._handleKeyDocument = this._handleKeyDocument.bind(this);
    this._handleClickDocument = this._handleClickDocument.bind(this);
    this._addListeners();
  }

  _addListeners() {
    this._subElements.icon.addEventListener("click", () => {
      document.addEventListener("keydown", this._handleKeyDocument);
      document.addEventListener("click", this._handleClickDocument);
      this._setActiveState();
      this._render();
    });

    this._subElements.field.addEventListener("input", (e) => {
      e.target.dispatchEvent(
        new CustomEvent("getInput", {
          bubbles: true,
          detail: {
            inputValue: e.target.value.trim(),
          },
        })
      );
    });
  }

  _setActiveState() {
    this._state.active = !this._state.active;
  }

  _open() {
    this._subElements.wrapper.classList.add("search__wrapper--active");
  }

  _handleKeyDocument(e) {
    if (e.key === "Escape") {
      this._close();
    }
  }

  _handleClickDocument(e) {
    if (!e.target.closest(".search")) {
      this._close();
    }
  }

  _close() {
    document.removeEventListener("keydown", this._handleKeyDocument);
    document.removeEventListener("click", this._handleClickDocument);
    this._subElements.wrapper.classList.remove("search__wrapper--active");
  }

  _render() {
    this._state.active ? this._open() : this._close();
  }

  _getTemplate() {
    return `<div class="search">
							<div class="search__icon" data-element="icon">
								<i class="fa-solid fa-magnifying-glass"></i>
							</div>
							<div class="search__wrapper" data-element="wrapper">
								<form class="search__form" action="#">
									<input class="search__field" type="text" data-element="field" placeholder="Ищите товар"/>
								</form>
							</div>
    				</div>`;
  }
}

class Filter extends BasicComponent {
  _state = {
    filterData: {},
  };

  constructor(filterCategories, FilterWrapper, FilterFieldGroup, FilterControlLabel, FilterControlField, FormControlSelect, Option, filterBetween) {
    super();
    this._filterCategories = filterCategories;
    this._FilterWrapper = FilterWrapper;
    this._FilterFieldGroup = FilterFieldGroup;
    this._FilterControlLabel = FilterControlLabel;
    this._FilterControlField = FilterControlField;
    this._FormControlSelect = FormControlSelect;
    this._Option = Option;
    this._filterBetween = filterBetween;
    this._init();
  }

  _init() {
    super._init();
    this._render();
  }

  _setStateFilterData(obj) {
    this._state.filterData = {
      ...this._state.filterData,
      ...obj,
    };
  }

  _setStateFilterDataHandler(obj) {
    this._setStateFilterData(obj);

    this._element.dispatchEvent(
      new CustomEvent("filter", {
        bubbles: true,
        detail: this._state.filterData,
      })
    );
    console.log(this._state);
  }

  _generateItems() {
    return this._filterCategories.map(
      (category) =>
        new this._FilterWrapper(
          category,
          this._FilterFieldGroup,
          this._FilterControlLabel,
          this._FilterControlField,
          this._FormControlSelect,
          this._Option,
          this._filterBetween,
          this._setStateFilterDataHandler.bind(this)
        ).element
    );
  }

  _render() {
    this._element.append(...this._generateItems());
  }

  _getTemplate() {
    return `<form class="filter" action="#" method="post"></form>`;
  }
}

class FilterWrapper extends BasicComponent {
  _state = {};

  constructor(category, FilterFieldGroup, FilterControlLabel, FilterControlField, FormControlSelect, Option, filterBetween, setStateFilterDataHandler) {
    super();
    this._category = category;
    this._FilterFieldGroup = FilterFieldGroup;
    this._FilterControlLabel = FilterControlLabel;
    this._FilterControlField = FilterControlField;
    this._FormControlSelect = FormControlSelect;
    this._Option = Option;
    this._filterBetween = filterBetween;
    this._setStateFilterDataHandler = setStateFilterDataHandler;
    this._init();
  }

  _init() {
    super._init();
    if (this._category.groupType === 1) {
      this._setStateProperty({
        [this._category.key]: {
          min: this._filterBetween[this._category.key].at(0),
          max: this._filterBetween[this._category.key].at(1),
        },
      });
    } else if (this._category.groupType === 2) {
      this._setStateProperty({ [this._category.key]: this._category.options[0].value });
    }
    this._render();
  }

  _setStateProperty(obj) {
    this._state = obj;
  }

  _setStateBetweenProperty({ key, position, value }) {
    if (this._state[key]) {
      this._state[key][position] = value;
    }
  }

  _setStateFilterWrapperBetweenHandler = (obj) => {
    this._setStateBetweenProperty(obj);
    this._setStateFilterDataHandler(this._state);
  };

  _setStateFilterWrapperHandler(obj) {
    this._setStateProperty(obj);
    this._setStateFilterDataHandler(this._state);
  }

  _render() {
    if (this._category.groupType === 1) {
      this._subElements.holder.insertAdjacentElement(
        "beforeend",
        new this._FilterFieldGroup(
          { key: this._category.key, textMarker: "от", forMarker: "from", placeholder: this._filterBetween[this._category.key].at(0), position: "min" },
          this._FilterControlLabel,
          this._FilterControlField,
          this._setStateFilterWrapperBetweenHandler.bind(this)
        ).element
      );
      this._subElements.holder.insertAdjacentElement(
        "beforeend",
        new this._FilterFieldGroup(
          { key: this._category.key, textMarker: "до", forMarker: "to", placeholder: this._filterBetween[this._category.key].at(-1), position: "max" },
          this._FilterControlLabel,
          this._FilterControlField,
          this._setStateFilterWrapperBetweenHandler.bind(this)
        ).element
      );
    }

    if (this._category.groupType === 2) {
      this._subElements.holder.insertAdjacentElement(
        "beforeend",
        new this._FormControlSelect(this._category, this._Option, this._setStateFilterWrapperHandler.bind(this)).element
      );
    }
  }

  _getTemplate() {
    return `<div class="filter-wrapper">
							<h4 class="filter-wrapper__title">${this._category.text}</h4>
							<div class="filter-wrapper__holder" data-element="holder"></div>
						</div>`;
  }
}

class FilterFieldGroup extends BasicComponent {
  constructor({ key, textMarker, forMarker, placeholder, position }, FilterControlLabel, FilterControlField, setStateFilterWrapperBetweenHandler) {
    super();
    this._key = key;
    this._textMarker = textMarker;
    this._forMarker = forMarker;
    this._placeholder = placeholder;
    this._position = position;
    this._FilterControlLabel = FilterControlLabel;
    this._FilterControlField = FilterControlField;
    this._setStateFilterWrapperBetweenHandler = setStateFilterWrapperBetweenHandler;
    this._init();
  }

  _init() {
    super._init();
    this._render();
  }

  _render() {
    this._element.insertAdjacentElement(
      "beforeend",
      new this._FilterControlLabel({ key: this._key, textMarker: this._textMarker, forMarker: this._forMarker }).element
    );
    this._element.insertAdjacentElement(
      "beforeend",
      new this._FilterControlField(
        { key: this._key, forMarker: this._forMarker, placeholder: this._placeholder, position: this._position },
        this._setStateFilterWrapperBetweenHandler
      ).element
    );
  }

  _getTemplate() {
    return `<div class="filter-field-group"></div>`;
  }
}

class FilterControlLabel extends BasicComponent {
  constructor({ key, textMarker, forMarker }) {
    super();
    this._key = key;
    this._textMarker = textMarker;
    this._forMarker = forMarker;
    this._init();
  }

  _init() {
    super._init();
  }

  _getTemplate() {
    return `<label class="form-control-label" for="${this._forMarker}-${this._key}">${this._textMarker}</label>`;
  }
}

class FilterControlField extends BasicComponent {
  _state = {
    propertyKey: [],
    propertyValue: [],
  };

  constructor({ key, forMarker, placeholder, position }, setStateFilterWrapperBetweenHandler) {
    super();
    this._key = key;
    this._forMarker = forMarker;
    this._placeholder = placeholder;
    this._position = position;
    this._setStateFilterWrapperBetweenHandler = setStateFilterWrapperBetweenHandler;
    this._init();
  }

  _init() {
    super._init();
    this._addListeners();
  }

  _addListeners() {
    this._element.addEventListener("input", (e) => {
      this._setStateFilterWrapperBetweenHandler({
        key: this._key,
        position: this._position,
        value: +e.target.value,
      });
    });
  }

  _getTemplate() {
    return `<input class="form-control-field" name="${this._forMarker}-${this._key}" type="number" id="${this._forMarker}-${this._key}" placeholder="${this._placeholder}" />`;
  }
}

class FormControlSelect extends BasicComponent {
  _state = {
    value: undefined,
  };

  constructor(category, Option, setStateFilterWrapperHandler) {
    super();
    this._category = category;
    this._Option = Option;
    this._setStateFilterWrapperHandler = setStateFilterWrapperHandler;
    this._init();
  }

  _init() {
    super._init();
    this._render();
    this._addListeners();
  }

  _addListeners() {
    this._element.addEventListener("change", (e) => {
      this._setStateValue(+e.target.value);
      this._setStateFilterWrapperHandler({
        [this._category.key]: +e.target.value,
      });
    });
  }

  _setStateValue(value) {
    this._state.value = value;
  }

  _generateOptions() {
    return this._category.options.map((option) => {
      return new this._Option(option).element;
    });
  }

  _render() {
    this._element.append(...this._generateOptions());
  }

  _getTemplate() {
    return `<select class="form-control-select" name="${this._category.key}"></select>`;
  }
}

class Option extends BasicComponent {
  constructor({ value, text }) {
    super();
    this._value = value;
    this._text = text;
    this._init();
  }

  _init() {
    super._init();
  }

  _getTemplate() {
    return `<option value="${this._value}">${this._text}</option>`;
  }
}

const root = document.querySelector(".root");
const productList = new ProductList(Product, products, Choice, ChoiceItem);
const filter = new Filter(
  filterCategories,
  FilterWrapper,
  FilterFieldGroup,
  FilterControlLabel,
  FilterControlField,
  FormControlSelect,
  Option,
  getFilterBetween(products)
);
const popupProperties = new PopupProperties(PropertyItem);
const popupBuy = new PopupBuy();
const popupImage = new PopupImage();
const miniCart = new MiniCart(MiniCartItem);
const alertList = new AlertList();

//================Custom Events
root.addEventListener("buy", (e) => {
  popupBuy.open(e.detail.productTitle);
});

root.addEventListener("openProperties", (e) => {
  popupProperties.open(e.detail.properties);
});

root.addEventListener("openImage", (e) => {
  popupImage.open(e.detail.src);
});

root.addEventListener("addToCart", (e) => {
  miniCart.addItem(e.detail);
});

root.addEventListener("removeMiniCartItem", (e) => {
  alertList.addAlert(
    new Alert({
      title: e.detail.title,
      price: e.detail.price,
      priceType: e.detail.priceType,
    })
  );
});

root.addEventListener("getInput", (e) => {
  productList.update({ searchText: e.detail.inputValue });
});

root.addEventListener("filter", (e) => {
  productList.update(e.detail);
});

//================Debounce
function debounce(handler, ms) {
  let timeoutID;
  return (...args) => {
    clearTimeout(timeoutID);

    timeoutID = setTimeout(() => {
      timeoutID = null;
      return handler.apply(this, args);
    }, ms);
  };
}

//================Filter
function getFilterBetween(products) {
  const temporaryArr = [];

  products.forEach((product) => {
    product.properties.forEach((property) => {
      if (property.groupType === 1) {
        temporaryArr.push(property);
        if (property.value === undefined) {
          property.value = product.price;
        }
      }
    });
  });
  console.log(temporaryArr);
  return temporaryArr.reduce((acc, el) => {
    if (acc[el.key] === undefined) {
      acc[el.key] = [el.value];
    } else {
      acc[el.key] = [...acc[el.key], el.value];
    }

    acc[el.key].sort((a, b) => a - b);
    acc[el.key] = [...acc[el.key].slice(0, 1), ...acc[el.key].slice(-1)];
    return acc;
  }, {});
}

root.insertAdjacentElement("beforeend", new Header(miniCart, Search).element);
root.insertAdjacentElement("beforeend", filter.element);
root.insertAdjacentElement("beforeend", productList.element);
root.insertAdjacentElement("beforeend", popupBuy.element);
root.insertAdjacentElement("beforeend", popupProperties.element);
root.insertAdjacentElement("beforeend", popupImage.element);
root.insertAdjacentElement("beforeend", alertList.element);

//удаляет 2 товара из миникарта при повторном клике, исправить
//корзина каждый раз закрывается
