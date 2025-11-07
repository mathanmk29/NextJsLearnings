// Product data - Mock data for frontend development
export const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    description: "High-quality wireless headphones with noise cancellation",
    image: "https://via.placeholder.com/300x300?text=Headphones",
    category: "Electronics",
    inStock: true,
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 249.99,
    description: "Feature-rich smartwatch with fitness tracking",
    image: "https://via.placeholder.com/300x300?text=Smart+Watch",
    category: "Electronics",
    inStock: true,
  },
  {
    id: 3,
    name: "Laptop Stand",
    price: 49.99,
    description: "Ergonomic aluminum laptop stand for better posture",
    image: "https://via.placeholder.com/300x300?text=Laptop+Stand",
    category: "Accessories",
    inStock: true,
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 129.99,
    description: "RGB mechanical keyboard with cherry MX switches",
    image: "https://via.placeholder.com/300x300?text=Keyboard",
    category: "Electronics",
    inStock: false,
  },
  {
    id: 5,
    name: "USB-C Hub",
    price: 39.99,
    description: "Multi-port USB-C hub with HDMI and SD card reader",
    image: "https://via.placeholder.com/300x300?text=USB+Hub",
    category: "Accessories",
    inStock: true,
  },
  {
    id: 6,
    name: "Wireless Mouse",
    price: 29.99,
    description: "Ergonomic wireless mouse with precision tracking",
    image: "https://via.placeholder.com/300x300?text=Mouse",
    category: "Electronics",
    inStock: true,
  },
  {
    id: 7,
    name: "Monitor Stand",
    price: 59.99,
    description: "Adjustable monitor stand with storage space",
    image: "https://via.placeholder.com/300x300?text=Monitor+Stand",
    category: "Accessories",
    inStock: true,
  },
  {
    id: 8,
    name: "Webcam HD",
    price: 79.99,
    description: "1080p HD webcam with built-in microphone",
    image: "https://via.placeholder.com/300x300?text=Webcam",
    category: "Electronics",
    inStock: true,
  },
];

// Function to fetch all products
export const getProducts = async () => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  return products;
};

// Function to fetch a single product by ID
export const getProductById = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return products.find((product) => product.id === id);
};
