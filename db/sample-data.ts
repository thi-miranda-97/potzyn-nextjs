const productData = {
  user: [],
  products: [
    // Potted Flowers
    {
      name: "Blooming Lavender Pot",
      slug: "blooming-lavender-pot",
      category: "Flowers",
      description: "Elegant lavender flowers in a decorative pot.",
      images: [
        "/images/sample-products/p3-1.jpeg",
        "/images/sample-products/p3-2.jpeg",
      ],
      price: 19.99,
      brand: "Green Paradise",
      rating: 4.8,
      numReviews: 15,
      stock: 12,
      isFeatured: true,
      banner: "/images/banner-lavender.jpg",
    },
    {
      name: "Snake Plant",
      slug: "snake-plant",
      category: "Indoor",
      description: "Perfect for low light and known for improving air quality.",
      images: [
        "/images/sample-products/p10.jpeg",
        "/images/sample-products/snake-plant-2.jpg",
      ],
      price: 18.99,
      brand: "Plant Haven",
      rating: 4.7,
      numReviews: 30,
      stock: 9,
      isFeatured: false,
      banner: "/images/banner-snake-plant.jpg",
    },
    {
      name: "Colorful Daisy Bouquet Pot",
      slug: "colorful-daisy-bouquet-pot",
      category: "Flowers",
      description: "A vibrant mix of daisies in a rustic pot.",
      images: [
        "/images/sample-products/p7.jpeg",
        "/images/sample-products/daisy-2.jpg",
      ],
      price: 22.49,
      brand: "Fresh Blooms",
      rating: 4.6,
      numReviews: 12,
      stock: 10,
      isFeatured: true,
      banner: "/images/banner-daisy.jpg",
    },
    {
      name: "Japanese Maple Sapling",
      slug: "japanese-maple-sapling",
      category: "Outdoor",
      description: "A stunning tree with vibrant foliage.",
      images: [
        "/images/sample-products/maple-1.jpg",
        "/images/sample-products/maple-2.jpg",
      ],
      price: 49.99,
      brand: "Garden Essentials",
      rating: 4.9,
      numReviews: 25,
      stock: 3,
      isFeatured: true,
      banner: "/images/banner-maple.jpg",
    },
    {
      name: "Peace Lily Plant",
      slug: "peace-lily-plant",
      category: "Indoor",
      description: "A low-maintenance plant with air-purifying properties.",
      images: [
        "/images/sample-products/peace-lily-1.jpg",
        "/images/sample-products/peace-lily-2.jpg",
      ],
      price: 29.99,
      brand: "Indoor Oasis",
      rating: 4.9,
      numReviews: 22,
      stock: 6,
      isFeatured: true,
      banner: "/images/banner-peace-lily.jpg",
    },
    {
      name: "Mini Rose Bush",
      slug: "mini-rose-bush",
      category: "Flowers",
      description: "A compact rose plant perfect for brightening your space.",
      images: [
        "/images/sample-products/rose-1.jpg",
        "/images/sample-products/rose-2.jpg",
      ],
      price: 24.99,
      brand: "BloomCo",
      rating: 4.7,
      numReviews: 18,
      stock: 8,
      isFeatured: false,
      banner: "/images/banner-rose.jpg",
    },
    {
      name: "Fiddle Leaf Fig",
      slug: "fiddle-leaf-fig",
      category: "Indoor",
      description: "A statement plant with broad, glossy leaves.",
      images: [
        "/images/sample-products/fiddle-leaf-1.jpg",
        "/images/sample-products/fiddle-leaf-2.jpg",
      ],
      price: 39.99,
      brand: "Urban Green",
      rating: 4.8,
      numReviews: 14,
      stock: 5,
      isFeatured: true,
      banner: "/images/banner-fiddle-leaf.jpg",
    },
    {
      name: "Boxwood Shrub",
      slug: "boxwood-shrub",
      category: "Outdoor",
      description: "Ideal for hedges or decorative garden accents.",
      images: [
        "/images/sample-products/boxwood-1.jpg",
        "/images/sample-products/boxwood-2.jpg",
      ],
      price: 35.99,
      brand: "Green Thumb",
      rating: 4.6,
      numReviews: 10,
      stock: 7,
      isFeatured: false,
      banner: "/images/banner-boxwood.jpg",
    },
    {
      name: "Mini Succulent Garden",
      slug: "mini-succulent-garden",
      category: "Indoor",
      description: "A charming set of small succulents.",
      images: [
        "/images/sample-products/succulent-1.jpg",
        "/images/sample-products/succulent-2.jpg",
      ],
      price: 15.99,
      brand: "Succulent Bliss",
      rating: 4.5,
      numReviews: 20,
      stock: 15,
      isFeatured: false,
      banner: "/images/banner-succulent.jpg",
    },
    {
      name: "Lavender Hedge Plant",
      slug: "lavender-hedge-plant",
      category: "Outdoor",
      description: "Fragrant lavender, perfect for garden borders.",
      images: [
        "/images/sample-products/lavender-hedge-1.jpg",
        "/images/sample-products/lavender-hedge-2.jpg",
      ],
      price: 27.99,
      brand: "Nature's Touch",
      rating: 4.7,
      numReviews: 16,
      stock: 4,
      isFeatured: true,
      banner: "/images/banner-lavender-hedge.jpg",
    },
    {
      name: "Sunflower Pot",
      slug: "sunflower-pot",
      category: "Flowers",
      description: "Bright sunflowers to light up any space.",
      images: [
        "/images/sample-products/sunflower-1.jpg",
        "/images/sample-products/sunflower-2.jpg",
      ],
      price: 20.99,
      brand: "Sunny Blooms",
      rating: 4.7,
      numReviews: 19,
      stock: 10,
      isFeatured: false,
      banner: "/images/banner-sunflower.jpg",
    },
    {
      name: "Bonsai Tree",
      slug: "bonsai-tree",
      category: "Indoor",
      description: "A serene miniature tree for your indoor spaces.",
      images: [
        "/images/sample-products/bonsai-1.jpg",
        "/images/sample-products/bonsai-2.jpg",
      ],
      price: 45.99,
      brand: "Zen Gardens",
      rating: 4.9,
      numReviews: 22,
      stock: 4,
      isFeatured: true,
      banner: "/images/banner-bonsai.jpg",
    },
    {
      name: "Hanging Fern Basket",
      slug: "hanging-fern-basket",
      category: "Outdoor",
      description: "A lush fern perfect for hanging outdoors.",
      images: [
        "/images/sample-products/fern-1.jpg",
        "/images/sample-products/fern-2.jpg",
      ],
      price: 25.99,
      brand: "Fern Friends",
      rating: 4.6,
      numReviews: 12,
      stock: 10,
      isFeatured: false,
      banner: "/images/banner-fern.jpg",
    },
  ],
};
export default productData;
