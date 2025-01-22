import { hashSync } from "bcrypt-ts-edge";

const sampleData = {
  users: [
    {
      name: "Potzyn",
      email: "potzyn@example.com",
      password: hashSync("123456", 10),
      role: "admin",
    },
    {
      name: "Jane",
      email: "user@example.com",
      password: hashSync("123456", 10),
      role: "user",
    },
  ],
  products: [
    // Potted Flowers
    {
      name: "Blooming Lavender Pot",
      slug: "blooming-lavender-pot",
      category: "Flowers",
      description: "Elegant lavender flowers in a decorative pot.",
      images: [
        "/images/sample-products/product-1-1.jpeg",
        "/images/sample-products/product-1-2.jpeg",
      ],
      price: 59.99,
      rating: 4.8,
      numReviews: 256,
      stock: 0,
      isFeatured: true,
    },
    {
      name: "Snake Plant",
      slug: "snake-plant",
      category: "Indoor",
      description: "Perfect for low light and known for improving air quality.",
      images: ["/images/sample-products/product-2.jpeg"],
      price: 182.99,
      rating: 4.7,
      numReviews: 478,
      stock: 9,
      isFeatured: true,
    },
    {
      name: "Colorful Daisy Bouquet Pot",
      slug: "colorful-daisy-bouquet-pot",
      category: "Flowers",
      description: "A vibrant mix of daisies in a rustic pot.",
      images: ["/images/sample-products/product-3.jpeg"],
      price: 249.49,
      rating: 4.6,
      numReviews: 129,
      stock: 10,
      isFeatured: true,
    },
    {
      name: "Japanese Maple Sapling",
      slug: "japanese-maple-sapling",
      category: "Outdoor",
      description: "A stunning tree with vibrant foliage.",
      images: ["/images/sample-products/product-4.jpeg"],
      price: 106.99,
      rating: 4.9,
      numReviews: 255,
      stock: 3,
      isFeatured: false,
    },
    {
      name: "Peace Lily Plant",
      slug: "peace-lily-plant",
      category: "Indoor",
      description: "A low-maintenance plant with air-purifying properties.",
      images: [
        "/images/sample-products/product-5-1.jpeg",
        "/images/sample-products/product-5-2.jpeg",
      ],
      price: 59.99,
      rating: 4.9,
      numReviews: 223,
      stock: 6,
      isFeatured: true,
    },
    {
      name: "Mini Rose Bush",
      slug: "mini-rose-bush",
      category: "Flowers",
      description: "A compact rose plant perfect for brightening your space.",
      images: ["/images/sample-products/product-6.jpeg"],
      price: 343.99,
      rating: 4.7,
      numReviews: 18,
      stock: 8,
      isFeatured: false,
    },
    {
      name: "Fiddle Leaf Fig",
      slug: "fiddle-leaf-fig",
      category: "Indoor",
      description: "A statement plant with broad, glossy leaves.",
      images: ["/images/sample-products/product-7.jpeg"],
      price: 93.99,
      rating: 4.8,
      numReviews: 1485,
      stock: 5,
      isFeatured: true,
    },
    {
      name: "Boxwood Shrub",
      slug: "boxwood-shrub",
      category: "Outdoor",
      description: "Ideal for hedges or decorative garden accents.",
      images: [
        "/images/sample-products/product-8-1.jpeg",
        "/images/sample-products/product-8-2.jpeg",
      ],
      price: 355.99,
      rating: 4.6,
      numReviews: 104,
      stock: 7,
      isFeatured: true,
    },
    {
      name: "Mini Succulent Garden",
      slug: "mini-succulent-garden",
      category: "Indoor",
      description: "A charming set of small succulents.",
      images: [
        "/images/sample-products/product-9-1.jpeg",
        "/images/sample-products/product-9-2.jpeg",
        "/images/sample-products/product-9-3.jpeg",
        "/images/sample-products/product-9-4.jpeg",
      ],
      price: 159.99,
      rating: 4.8,
      numReviews: 2067,
      stock: 35,
      isFeatured: false,
    },
    {
      name: "Lavender Hedge Plant",
      slug: "lavender-hedge-plant",
      category: "Outdoor",
      description: "Fragrant lavender, perfect for garden borders.",
      images: ["/images/sample-products/product-10.jpeg"],
      price: 27.99,
      rating: 4.7,
      numReviews: 16,
      stock: 4,
      isFeatured: true,
    },
    {
      name: "Sunflower Pot",
      slug: "sunflower-pot",
      category: "Flowers",
      description: "Bright sunflowers to light up any space.",
      images: ["/images/sample-products/product-11.jpeg"],
      price: 25.99,
      rating: 4.7,
      numReviews: 190,
      stock: 10,
      isFeatured: true,
    },
    {
      name: "Bonsai Tree",
      slug: "bonsai-tree",
      category: "Indoor",
      description: "A serene miniature tree for your indoor spaces.",
      images: [
        "/images/sample-products/product-12-1.jpeg",
        "/images/sample-products/product-12-2.jpeg",
      ],
      price: 506.99,
      rating: 4.9,
      numReviews: 22,
      stock: 4,
      isFeatured: true,
    },
    {
      name: "Hanging Fern Basket",
      slug: "hanging-fern-basket",
      category: "Outdoor",
      description: "A lush fern perfect for hanging outdoors.",
      images: [
        "/images/sample-products/product-13-1.jpeg",
        "/images/sample-products/product-13-2.jpeg",
      ],
      price: 25.99,
      rating: 4.6,
      numReviews: 1244,
      stock: 10,
      isFeatured: false,
    },
    {
      name: "Mini Monstera",
      slug: "mini-monstera",
      category: "Indoor",
      description: "A stylish mini monstera that thrives in low-light spaces.",
      images: [
        "/images/sample-products/product-14-1.jpeg",
        "/images/sample-products/product-14-2.jpeg",
        "/images/sample-products/product-14-3.jpeg",
      ],
      price: 18.99,
      rating: 4.7,
      numReviews: 2289,
      stock: 15,
      isFeatured: true,
    },
    {
      name: "Terracotta Succulent Set",
      slug: "terracotta-succulent-set",
      category: "Outdoor",
      description:
        "A charming set of succulents in terracotta pots, ideal for patios.",
      images: ["/images/sample-products/product-15.jpeg"],
      price: 869.99,
      rating: 4.8,
      numReviews: 300,
      stock: 20,
      isFeatured: true,
    },
    {
      name: "Dainty Daisy Pot",
      slug: "dainty-daisy-pot",
      category: "Flowers",
      description:
        "Brighten up your space with this adorable pot of white daisies.",
      images: [
        "/images/sample-products/product-16-1.jpeg",
        "/images/sample-products/product-16-2.jpeg",
      ],
      price: 35.99,
      rating: 4.5,
      numReviews: 1892,
      stock: 8,
      isFeatured: true,
    },
    {
      name: "Radiant Rose Pot",
      slug: "radiant-rose-pot",
      category: "Flowers",
      description:
        "A delightful pot of mini roses to add vibrant color to your space.",
      images: [
        "/images/sample-products/product-17-1.jpeg",
        "/images/sample-products/product-17-2.jpeg",
      ],
      price: 215.99,
      rating: 4.7,
      numReviews: 325,
      stock: 6,
      isFeatured: true,
    },
    {
      name: "Mini Bamboo",
      slug: "mini-bamboo",
      category: "Indoor",
      description:
        "A charming mini bamboo plant that brings serenity to any space.",
      images: ["/images/sample-products/product-18.jpeg"],
      price: 182.49,
      rating: 4.9,
      numReviews: 450,
      stock: 12,
      isFeatured: true,
    },
  ],
  blogPosts: [
    {
      title: "Creating a Plant-Friendly Garden at Home",
      images: "/images/sample-blog/blog-1.jpeg",

      published: true,
      featured: true,
      tag: "Gardening Tips",
      sub: "Transform your garden into a plant paradise with these expert gardening tips. From preparing your garden bed to selecting the right plants for your space, this post will help you create a thriving garden filled with your favorite plants.",
      content: `Sed at turpis eget magna egestas venenatis. Donec vulputate ex lorem, sed aliquet magna laoreet eu. Pellentesque magna eros, interdum vitae aliquam at, varius sed orci. Sed cursus vel lacus id cursus. Maecenas vulputate risus erat, sit amet condimentum est porta ac. Morbi in dolor tincidunt, ultrices sapien nec, posuere nibh. Vestibulum hendrerit risus id laoreet varius. Praesent gravida ante ex, vitae commodo odio consequat ac. Cras et est nec mi consequat volutpat quis id eros. Aenean condimentum dui sed turpis varius, ac commodo leo dignissim. Ut fringilla lacus quis lacus molestie convallis. Phasellus rhoncus ante ante. Curabitur vitae tincidunt dolor. 
Aliquam sollicitudin elit sapien, sed mollis metus cursus sit amet. Donec euismod augue arcu, nec aliquet mauris elementum in. Pellentesque efficitur erat eu risus lacinia, ac fringilla diam euismod. Sed porta ac sem non pretium. Curabitur consectetur turpis non erat facilisis, sed tristique diam tincidunt. Donec congue posuere dapibus. Nullam at ultrices est, in pretium purus. Duis varius fermentum odio nec feugiat. Ut pretium fringilla tortor at auctor. Aliquam maximus bibendum odio, vitae pulvinar lectus malesuada id.

Maecenas fringilla metus vitae nisi rhoncus convallis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce gravida lorem et neque tempus, eget auctor odio accumsan. Sed fermentum, velit in viverra cursus, leo tellus ultricies est, vitae interdum quam sem tempus tortor. Quisque et ligula varius justo mattis pharetra vitae et urna. Curabitur finibus est vel suscipit auctor. Fusce convallis luctus tortor ac ornare. Morbi id tristique nibh. Etiam commodo vel elit vel lobortis. In ornare porta ante, pulvinar porttitor justo ullamcorper id. Cras sed urna ante. Donec eget enim at felis mollis iaculis ac vitae mi. Donec luctus dui eget felis lacinia, vel pharetra ex dapibus. Suspendisse quis quam a lorem imperdiet efficitur quis vitae mi.

Phasellus vel elit ac risus condimentum cursus. Quisque nisl enim, pretium et faucibus vitae, tempor vitae augue. Nulla facilisi. Nullam fringilla fermentum est. Vestibulum quis quam id est pellentesque congue id ut mauris. Sed turpis diam, euismod quis velit a, vestibulum lobortis ex. Fusce ac tincidunt dolor, eget maximus libero. Aliquam suscipit, lorem non malesuada maximus, tellus leo pretium massa, ac imperdiet mauris mi et turpis. Phasellus lectus ex, rutrum sit amet ligula et, cursus dictum nibh. Vestibulum vehicula turpis vitae augue porttitor, vel volutpat nibh tincidunt. Morbi mollis risus in ornare pellentesque. Quisque maximus enim et neque dapibus suscipit. Phasellus luctus feugiat imperdiet. Donec fringilla porttitor nulla.

Suspendisse porttitor malesuada tristique. Ut id ex eros. Suspendisse scelerisque mauris eget mauris consectetur, mollis congue ligula elementum. Duis eu finibus tortor. Maecenas placerat orci vel ipsum suscipit bibendum. Praesent efficitur odio vel ex suscipit, id rutrum odio luctus. Aliquam sollicitudin, libero nec volutpat convallis, nunc nisl elementum ligula, at condimentum odio lacus ac massa. In eu ex feugiat, posuere eros non, interdum felis. In ornare nisl sed tortor dapibus ornare. Vestibulum id laoreet neque, eu feugiat neque. Sed volutpat accumsan urna eu sodales. Donec convallis eros a elit tempus, quis mattis urna aliquam. Suspendisse potenti. Phasellus pharetra dolor nunc, vel suscipit tellus malesuada in. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras non elit a leo mattis tempor.

Etiam ac convallis urna. Phasellus tincidunt ipsum quis velit bibendum semper. In id lacus a ante dictum malesuada a et arcu. Curabitur pharetra tempor sapien, eu maximus dolor ultricies vel. Etiam mattis mi tellus, et tincidunt nisi consequat quis. Sed eget lacinia lorem. Vestibulum pulvinar dignissim leo pellentesque malesuada.

Donec massa leo, rhoncus non augue vel, elementum posuere felis. Nunc ex nulla, interdum quis vestibulum non, euismod sit amet augue. Aliquam fringilla pharetra rhoncus. Donec libero mi, luctus et laoreet et, dictum in dolor. Vivamus metus elit, faucibus non placerat et, luctus id justo. Fusce sed porttitor mauris, et viverra nulla. Praesent rutrum suscipit risus. Curabitur vel sem eu ante fringilla congue et ut metus. Ut pellentesque dui a ligula pellentesque feugiat. Duis molestie convallis imperdiet. Praesent ac efficitur quam, non placerat eros. Integer ut vulputate magna, sit amet vulputate libero.

Donec sagittis arcu ante, vel blandit neque posuere sit amet. Nunc mattis nisl orci, a lobortis ex faucibus quis. Quisque erat velit, viverra sed commodo in, finibus ac nisl. Sed rutrum tellus ligula, nec ornare tortor aliquet ac. Integer bibendum massa id tortor rhoncus, sollicitudin facilisis arcu sodales. Maecenas eu purus enim. Nunc efficitur scelerisque orci, et posuere mi vestibulum at. Vestibulum id dolor sagittis, ultrices dolor non, luctus neque. Mauris sit amet aliquam tortor. Duis egestas vehicula sapien. Nullam faucibus porta libero in laoreet. In congue sapien erat, quis consectetur urna dictum ac. Sed arcu leo, gravida in dignissim sed, tempus mattis eros. Gravida vehicula eros in maximus. Etiam quis fermentum odio. Integer malesuada massa ut tempor sollicitudin. Nulla eu quam neque. Sed placerat, sapien vitae porta hendrerit, nibh lectus sagittis ipsum, eu elementum leo felis at est. Sed mattis sit amet mi id condimentum. Aliquam erat volutpat.

Nunc rutrum laoreet condimentum. Phasellus dapibus porttitor tempor. Nulla cursus magna non mauris elementum varius. Vivamus nec consectetur nisl, et dictum elit. Etiam dapibus non nunc quis pretium. Duis ornare placerat leo, vel consequat risus hendrerit in. Donec enim lacus, congue in commodo ultricies, lacinia vitae tellus. Nunc efficitur fermentum cursus. Nulla lobortis ligula quis diam iaculis luctus. Etiam vel luctus magna.`,
    },
    {
      title: "How Much Water Does Your Plant Really Need?",
      images: "/images/sample-blog/blog-2.jpeg",

      published: true,
      featured: false,
      tag: "Watering Tips",
      sub: "Watering is one of the most common challenges for plant owners. In this post, we'll dive into how to determine the right amount of water for different types of plants, signs of overwatering or underwatering, and how to create a watering schedule.",
      content: `Sed at turpis eget magna egestas venenatis. Donec vulputate ex lorem, sed aliquet magna laoreet eu. Pellentesque magna eros, interdum vitae aliquam at, varius sed orci. Sed cursus vel lacus id cursus. Maecenas vulputate risus erat, sit amet condimentum est porta ac. Morbi in dolor tincidunt, ultrices sapien nec, posuere nibh. Vestibulum hendrerit risus id laoreet varius. Praesent gravida ante ex, vitae commodo odio consequat ac. Cras et est nec mi consequat volutpat quis id eros. Aenean condimentum dui sed turpis varius, ac commodo leo dignissim. Ut fringilla lacus quis lacus molestie convallis. Phasellus rhoncus ante ante. Curabitur vitae tincidunt dolor. 
Aliquam sollicitudin elit sapien, sed mollis metus cursus sit amet. Donec euismod augue arcu, nec aliquet mauris elementum in. Pellentesque efficitur erat eu risus lacinia, ac fringilla diam euismod. Sed porta ac sem non pretium. Curabitur consectetur turpis non erat facilisis, sed tristique diam tincidunt. Donec congue posuere dapibus. Nullam at ultrices est, in pretium purus. Duis varius fermentum odio nec feugiat. Ut pretium fringilla tortor at auctor. Aliquam maximus bibendum odio, vitae pulvinar lectus malesuada id.

Maecenas fringilla metus vitae nisi rhoncus convallis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce gravida lorem et neque tempus, eget auctor odio accumsan. Sed fermentum, velit in viverra cursus, leo tellus ultricies est, vitae interdum quam sem tempus tortor. Quisque et ligula varius justo mattis pharetra vitae et urna. Curabitur finibus est vel suscipit auctor. Fusce convallis luctus tortor ac ornare. Morbi id tristique nibh. Etiam commodo vel elit vel lobortis. In ornare porta ante, pulvinar porttitor justo ullamcorper id. Cras sed urna ante. Donec eget enim at felis mollis iaculis ac vitae mi. Donec luctus dui eget felis lacinia, vel pharetra ex dapibus. Suspendisse quis quam a lorem imperdiet efficitur quis vitae mi.

Phasellus vel elit ac risus condimentum cursus. Quisque nisl enim, pretium et faucibus vitae, tempor vitae augue. Nulla facilisi. Nullam fringilla fermentum est. Vestibulum quis quam id est pellentesque congue id ut mauris. Sed turpis diam, euismod quis velit a, vestibulum lobortis ex. Fusce ac tincidunt dolor, eget maximus libero. Aliquam suscipit, lorem non malesuada maximus, tellus leo pretium massa, ac imperdiet mauris mi et turpis. Phasellus lectus ex, rutrum sit amet ligula et, cursus dictum nibh. Vestibulum vehicula turpis vitae augue porttitor, vel volutpat nibh tincidunt. Morbi mollis risus in ornare pellentesque. Quisque maximus enim et neque dapibus suscipit. Phasellus luctus feugiat imperdiet. Donec fringilla porttitor nulla.

Suspendisse porttitor malesuada tristique. Ut id ex eros. Suspendisse scelerisque mauris eget mauris consectetur, mollis congue ligula elementum. Duis eu finibus tortor. Maecenas placerat orci vel ipsum suscipit bibendum. Praesent efficitur odio vel ex suscipit, id rutrum odio luctus. Aliquam sollicitudin, libero nec volutpat convallis, nunc nisl elementum ligula, at condimentum odio lacus ac massa. In eu ex feugiat, posuere eros non, interdum felis. In ornare nisl sed tortor dapibus ornare. Vestibulum id laoreet neque, eu feugiat neque. Sed volutpat accumsan urna eu sodales. Donec convallis eros a elit tempus, quis mattis urna aliquam. Suspendisse potenti. Phasellus pharetra dolor nunc, vel suscipit tellus malesuada in. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras non elit a leo mattis tempor.

Etiam ac convallis urna. Phasellus tincidunt ipsum quis velit bibendum semper. In id lacus a ante dictum malesuada a et arcu. Curabitur pharetra tempor sapien, eu maximus dolor ultricies vel. Etiam mattis mi tellus, et tincidunt nisi consequat quis. Sed eget lacinia lorem. Vestibulum pulvinar dignissim leo pellentesque malesuada.

Donec massa leo, rhoncus non augue vel, elementum posuere felis. Nunc ex nulla, interdum quis vestibulum non, euismod sit amet augue. Aliquam fringilla pharetra rhoncus. Donec libero mi, luctus et laoreet et, dictum in dolor. Vivamus metus elit, faucibus non placerat et, luctus id justo. Fusce sed porttitor mauris, et viverra nulla. Praesent rutrum suscipit risus. Curabitur vel sem eu ante fringilla congue et ut metus. Ut pellentesque dui a ligula pellentesque feugiat. Duis molestie convallis imperdiet. Praesent ac efficitur quam, non placerat eros. Integer ut vulputate magna, sit amet vulputate libero.

Donec sagittis arcu ante, vel blandit neque posuere sit amet. Nunc mattis nisl orci, a lobortis ex faucibus quis. Quisque erat velit, viverra sed commodo in, finibus ac nisl. Sed rutrum tellus ligula, nec ornare tortor aliquet ac. Integer bibendum massa id tortor rhoncus, sollicitudin facilisis arcu sodales. Maecenas eu purus enim. Nunc efficitur scelerisque orci, et posuere mi vestibulum at. Vestibulum id dolor sagittis, ultrices dolor non, luctus neque. Mauris sit amet aliquam tortor. Duis egestas vehicula sapien. Nullam faucibus porta libero in laoreet. In congue sapien erat, quis consectetur urna dictum ac. Sed arcu leo, gravida in dignissim sed, tempus mattis eros. Gravida vehicula eros in maximus. Etiam quis fermentum odio. Integer malesuada massa ut tempor sollicitudin. Nulla eu quam neque. Sed placerat, sapien vitae porta hendrerit, nibh lectus sagittis ipsum, eu elementum leo felis at est. Sed mattis sit amet mi id condimentum. Aliquam erat volutpat.

Nunc rutrum laoreet condimentum. Phasellus dapibus porttitor tempor. Nulla cursus magna non mauris elementum varius. Vivamus nec consectetur nisl, et dictum elit. Etiam dapibus non nunc quis pretium. Duis ornare placerat leo, vel consequat risus hendrerit in. Donec enim lacus, congue in commodo ultricies, lacinia vitae tellus. Nunc efficitur fermentum cursus. Nulla lobortis ligula quis diam iaculis luctus. Etiam vel luctus magna.`,
    },

    {
      title: "How to Keep Your Indoor Plants Thriving",
      images: "/images/sample-blog/blog-7.jpeg",

      published: true,
      featured: true,
      tag: "Indoor Care",
      sub: "Learn the essential steps to provide the best care for your indoor plants, from the right lighting and humidity to selecting the best soil. Discover tips for keeping your plants healthy all year round, regardless of the season.",
      content: `Etiam non blandit nulla. Cras sodales placerat libero sed venenatis. Sed nunc ligula, suscipit non viverra at, pellentesque eu nibh. Duis vitae aliquam leo, nec laoreet augue. In tristique lacus eu felis rhoncus, a aliquam dolor rhoncus. Ut tincidunt eget libero id aliquet. Cras non maximus turpis, eu dictum augue. Ut consequat urna finibus, blandit massa quis, elementum diam. Nam rutrum lectus et mollis efficitur. Sed vehicula elementum massa, at elementum lectus elementum a.

Pellentesque in ante vitae massa suscipit maximus vitae a ligula. Nunc semper nibh id mauris fringilla, vel consectetur purus tempor. Nullam vel dapibus ante, et posuere mauris. Fusce fringilla justo vitae ligula finibus, eu tempor tellus tempor. Donec eleifend felis erat, in consequat est volutpat et. Duis eu sem ipsum. Phasellus pharetra eros luctus malesuada ornare. Sed accumsan elementum nibh, in ornare erat sollicitudin gravida. Nam pulvinar augue a dictum varius. Nunc lorem odio, lobortis eu nulla et, hendrerit ullamcorper justo. Ut leo metus, varius vitae faucibus nec, ultrices at nisi. Pellentesque at leo porta lorem fermentum tincidunt gravida eget neque.

Donec at ligula ut eros vestibulum maximus eget sit amet elit. Integer feugiat vitae urna eu mollis. Nunc nec sagittis massa. Nullam in laoreet nunc. Maecenas interdum sem ut augue sagittis, id efficitur elit euismod. In laoreet sollicitudin magna sit amet porttitor. Proin sollicitudin congue augue id pharetra. Nulla sollicitudin commodo facilisis.

Duis malesuada vel neque ac semper. Nam eget odio at elit venenatis feugiat at egestas tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultrices, purus vel tempor pellentesque, felis sem vehicula massa, sollicitudin feugiat magna arcu et enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam eu elementum odio. Nam placerat nibh nisl, ac ultrices turpis mattis non. Integer tincidunt risus libero, id volutpat dolor sollicitudin eget.

Praesent sed interdum tortor, vel lobortis ligula. Nam nec vestibulum lectus. Donec congue at turpis vel congue. Aliquam ante enim, facilisis laoreet pharetra in, sollicitudin a sem. Nunc vitae consequat massa. Aliquam at ante mauris. Nam nisi augue, aliquet eu interdum sit amet, ornare quis erat. Quisque bibendum arcu ut eros tristique pretium. Cras consectetur massa vel nisl lobortis lacinia. Nam sit amet risus suscipit, tempor neque luctus, gravida nibh. In tempus ante nec placerat aliquam. Nunc eget congue tortor. Fusce ut orci at felis rutrum tincidunt. Proin porta, neque non vehicula gravida, quam turpis finibus lacus, in pellentesque neque nulla at nibh. Nam imperdiet, velit et scelerisque scelerisque, lectus quam auctor ex, et placerat arcu tortor quis lorem.

Sed ultrices, lorem nec malesuada viverra, diam ligula rutrum metus, sit amet mollis tellus leo et purus. Nam aliquet posuere massa. Sed at turpis sit amet arcu viverra sagittis ut in orci. Phasellus ac metus viverra ipsum tincidunt ultrices. Integer tempor euismod purus, non mollis leo fringilla sed. Donec nec tincidunt turpis. Nullam mattis ut nisi sit amet lacinia. Donec sed pretium augue, egestas suscipit enim. Duis et sem sit amet quam euismod rhoncus a et tortor. Phasellus eros orci, elementum at vulputate gravida, rhoncus vitae nibh. Donec vehicula mauris sed interdum rhoncus. Mauris dolor orci, aliquam sed libero sed, venenatis mattis libero. Morbi efficitur vel quam ut aliquam. Duis eu magna pretium, varius augue a, varius mi. Nam eleifend hendrerit ex, at mollis metus posuere consectetur. Mauris quis mi et lorem semper congue eget a lorem.

Nam sit amet neque tempus, varius quam id, pretium urna. Vivamus sit amet cursus erat. Phasellus ac pharetra eros, eget tempor nisl. Fusce congue eget lectus et bibendum. Integer non diam et neque vulputate auctor ac a lorem. In et fermentum eros. Donec nec hendrerit mi, eu tempor est. Duis ut magna non eros mollis rutrum suscipit quis nulla. Aenean faucibus dapibus ipsum, sed ultricies mauris. Nullam iaculis efficitur lectus, consectetur porta odio vestibulum sed.

Maecenas lacinia dolor diam, eget feugiat nisl tempor vitae. Quisque ligula sem, dictum ut felis sit amet, fringilla semper nibh. Suspendisse potenti. Sed cursus pellentesque quam, et molestie tortor interdum ac. In non tincidunt mi, eu placerat purus. Duis eget mi lorem. Sed venenatis sapien in feugiat lobortis. Maecenas faucibus tortor id felis iaculis sodales. Integer porttitor fermentum posuere. Phasellus eros tortor, pharetra ac maximus eget, volutpat eget lectus.

Quisque ultricies tempus euismod. Vivamus varius, arcu vitae efficitur aliquet, magna lacus euismod ex, vitae scelerisque felis eros ac dui. Nullam libero odio, hendrerit non laoreet nec, bibendum eu augue. Etiam sodales posuere auctor. Morbi pretium mi risus, in vulputate lectus suscipit in. Vivamus nec lorem quis felis vulputate faucibus id venenatis lorem. Vestibulum pellentesque, elit vitae cursus dapibus, arcu erat semper diam, eget lobortis augue nibh rhoncus neque. Morbi malesuada nibh eget urna suscipit elementum.

Etiam pretium maximus imperdiet. Duis lobortis augue quis mi placerat eleifend. Aliquam maximus nisl enim, ut sollicitudin ex imperdiet non. Pellentesque suscipit, massa eget tristique lobortis, odio elit tempus diam, non molestie leo mi eu orci. Nulla commodo elit massa, eget posuere mi sollicitudin in. Nullam at elementum eros. Integer congue lobortis iaculis. Morbi facilisis velit mauris, eget molestie orci varius nec. Nulla aliquet purus enim, at laoreet neque scelerisque in. Vivamus euismod ultricies risus quis ultrices. Etiam dictum gravida nulla, eu ullamcorper nisi dapibus a. Aliquam erat volutpat. Donec scelerisque arcu sit amet est blandit vestibulum.`,
    },
    {
      title: "Signs Your Plant is Sick and How to Fix It",
      images: "/images/sample-blog/blog-10.jpeg",

      published: true,
      featured: false,
      tag: "Plant Health",
      sub: "Plants can show signs of distress before they start to decline. Learn how to spot the signs of plant diseases, overwatering, or nutrient deficiencies, and find out how to bring your plant back to health.",
      content: `Integer dui ex, placerat id lorem sit amet, semper convallis velit. Fusce a mi ultrices nunc ultricies finibus. Cras dapibus magna in libero ornare blandit. Proin pellentesque suscipit faucibus. Sed vel magna rhoncus justo euismod tincidunt ut id mauris. Mauris ultrices, massa quis accumsan iaculis, nulla nibh malesuada dolor, id ullamcorper libero sem eget elit. Sed eget egestas odio.

Nulla in leo ornare ex tincidunt sollicitudin. Morbi porta orci quis elementum dignissim. Proin nec rhoncus ex. Vivamus pellentesque nibh eget tempor auctor. Praesent et fermentum mi. Vivamus ornare sodales massa ac laoreet. Proin id ante id neque pretium mattis et in purus. Vestibulum congue elit pretium leo maximus, id consectetur quam luctus. Integer sit amet auctor diam.

Sed ut convallis est. Phasellus pulvinar facilisis urna, in dapibus mi faucibus vel. Morbi lobortis neque nec placerat porta. Cras quis neque vitae purus vehicula lobortis. Phasellus pulvinar ipsum vel mi facilisis, non aliquet ipsum blandit. Nulla facilisi. Mauris facilisis, orci non luctus dictum, elit dolor lacinia elit, sit amet blandit mi augue vitae nulla.

Praesent vehicula velit urna, vitae tincidunt neque viverra id. Sed iaculis augue sit amet orci vulputate volutpat. Morbi dui quam, convallis ac tempor sagittis, porta posuere leo. Nam eget egestas sem, in porttitor ipsum. Aliquam sed auctor sem. Nullam quis tempor enim. Vestibulum pretium, tortor in hendrerit iaculis, sapien dolor tincidunt orci, ac ullamcorper augue mauris non risus.

Nam condimentum, felis non hendrerit scelerisque, lectus mauris fringilla nulla, in condimentum purus mauris nec dui. Nam tempus at mauris id luctus. Aliquam libero neque, rhoncus quis pulvinar in, consectetur sed dolor. Vivamus accumsan, mi non vulputate feugiat, metus augue facilisis est, ut fringilla ex purus id nulla. Sed pellentesque turpis quam, vitae volutpat nunc ullamcorper sed. Proin a justo eget tortor iaculis aliquet id ac neque. Aenean viverra nibh cursus eleifend pretium. Morbi sit amet ante non dui vulputate cursus a in nunc. Vestibulum malesuada aliquet nisi, id faucibus orci rhoncus quis. Donec mattis lectus vitae massa sollicitudin finibus. Phasellus eu egestas orci. Proin vestibulum nisi sit amet libero venenatis, eu varius urna placerat.

Suspendisse potenti. Fusce non dignissim justo. Morbi pulvinar feugiat orci, eget commodo magna dignissim eu. Morbi turpis libero, dignissim sed lacus nec, viverra faucibus leo. Curabitur ut felis in elit pharetra laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque enim est, tempor tempus dui tempor in. Curabitur tincidunt placerat accumsan. Mauris vitae enim nisi. Vestibulum commodo egestas enim, vitae blandit augue hendrerit non. Donec ut velit sit amet purus hendrerit laoreet. In mattis malesuada pharetra. Morbi congue, augue sagittis hendrerit iaculis, elit purus pulvinar felis, eu efficitur libero risus sit amet enim. Morbi non lectus augue. Vestibulum venenatis dui est, hendrerit commodo lorem finibus vel. Proin sit amet molestie erat.

Nulla facilisi. In vitae venenatis elit. Quisque metus quam, vehicula viverra urna id, pellentesque mattis dui. In massa eros, ultrices id magna sit amet, facilisis dapibus erat. Vestibulum vulputate ac nisi eget posuere. Suspendisse a tincidunt nisi. Ut eget pharetra augue. Cras laoreet nec mi ut placerat. Vivamus eget dolor nibh. Integer risus nunc, dictum at augue quis, egestas mattis elit. Ut at nibh ipsum. Nunc aliquet ipsum non leo fringilla, ut finibus diam eleifend. Integer orci erat, viverra ut commodo sed, sagittis at lectus.

Ut pharetra blandit libero vitae convallis. Fusce bibendum magna semper ante tempor, vitae faucibus leo tincidunt. Duis accumsan varius viverra. Phasellus sit amet dui ac justo tincidunt vehicula a eu ipsum. Maecenas neque lacus, pellentesque non posuere quis, dictum ut enim. Duis a risus ut eros tincidunt tincidunt vel vitae urna. Quisque aliquam, erat at accumsan sodales, sem augue sagittis tellus, et mollis mi tortor quis neque. Nullam id urna tincidunt, laoreet arcu et, egestas ligula. Praesent commodo ipsum eros. Nunc eget volutpat orci. Fusce imperdiet interdum mattis. Donec eu massa ac eros feugiat scelerisque eget eget augue. Duis sem quam, pulvinar a elementum vel, euismod at tellus. Fusce rutrum, tellus vel ullamcorper semper, arcu elit rutrum dolor, nec pellentesque neque est sed metus. Sed non dui metus.

Nulla facilisi. Donec ornare tempor tempor. Nullam vitae quam diam. Morbi dapibus, dui vitae vestibulum dapibus, nulla nisl tincidunt erat, at consectetur erat libero ac sapien. In suscipit, dui nec feugiat maximus, tellus nulla efficitur purus, id auctor est mauris et urna. Vivamus enim risus, mattis ut elit nec, rutrum venenatis felis. Etiam imperdiet metus et odio scelerisque ullamcorper. Aenean metus sem, maximus non tellus ac, blandit pulvinar nulla. Fusce quis mi nec elit euismod molestie. Donec eu fringilla tellus. Quisque hendrerit sollicitudin augue ac molestie. Nullam quis posuere elit.

Maecenas vitae hendrerit velit. Etiam vestibulum, orci ac auctor finibus, eros dui congue ipsum, et aliquet ipsum justo et eros. Maecenas quis nunc ut quam mattis suscipit. Integer varius turpis quam, ac eleifend erat sodales id. Fusce sem nulla, lacinia a convallis vitae, dictum in nisi. Nunc odio nunc, sagittis sit amet quam et, aliquet ultrices libero. Morbi et velit sit amet turpis interdum vestibulum at in dui. Morbi scelerisque congue augue vel dignissim. Mauris mollis mattis nisl sit amet tempor. Phasellus gravida efficitur eleifend. Duis interdum sem dolor, ac porta ex blandit vitae. Donec eu suscipit turpis. Nam posuere porttitor nisi, eu sodales nunc pulvinar pulvinar. Aenean mollis fringilla magna in dictum. Pellentesque euismod magna purus, a porta eros consectetur ut.`,
    },
    {
      title: "Best Practices for Your Outdoor Plants",
      images: "/images/sample-blog/blog-5.jpeg",

      published: true,
      featured: true,
      tag: "Outdoor Care",
      sub: "Outdoor plants require different care than their indoor counterparts. This post will guide you on how to protect your outdoor plants from extreme weather, pests, and how to ensure they have the proper soil and sunlight for healthy growth.",
      content: `Suspendisse et felis non elit feugiat cursus vel id sapien. Donec suscipit urna ac quam tristique varius. Fusce sed odio varius, laoreet diam sed, aliquet sem. Vestibulum sit amet mauris maximus, varius augue consectetur, aliquam risus. Vestibulum molestie, elit id vestibulum rutrum, nisi nibh pulvinar ex, vitae lacinia turpis enim suscipit arcu. Morbi viverra varius lectus euismod dictum. Integer et laoreet risus. Ut fermentum sem non malesuada sagittis.

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed ornare nisl quam. Duis accumsan lacinia libero. Vivamus tempus, diam in vehicula varius, arcu ligula suscipit mauris, nec porttitor massa dui ut magna. Quisque eu leo in lorem sollicitudin pellentesque. Vestibulum aliquam nibh sed dictum aliquet. Integer ornare orci id lectus condimentum, quis bibendum ipsum suscipit. Maecenas at odio pellentesque, maximus dui nec, congue leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus nec tortor vitae tempor. Aliquam sollicitudin sem justo, a tincidunt mauris iaculis id. Donec pretium metus nibh, vel porta tortor ornare in. Mauris eu ex ultricies, tincidunt ex finibus, sodales ex. Ut id mollis nibh.

Aliquam facilisis accumsan risus, non tincidunt ex fermentum sit amet. Phasellus mollis nulla ut ultrices eleifend. Suspendisse potenti. Nam mauris lorem, euismod et tempor vel, tincidunt ac lacus. Aliquam ultricies sapien sed nisl consectetur finibus. Suspendisse ut vestibulum lacus, sit amet mattis arcu. Etiam enim purus, interdum non eros in, pulvinar porttitor ligula. Curabitur quam nunc, feugiat ut leo vitae, venenatis semper purus.

Vestibulum eget eros molestie, convallis neque sit amet, hendrerit risus. Maecenas sagittis aliquet ante, efficitur lobortis libero iaculis nec. Phasellus tortor leo, ornare eget gravida vitae, placerat nec justo. Morbi justo mi, dapibus in ligula at, gravida tempus sapien. Morbi feugiat tortor nec eros pulvinar, sed ornare libero ultricies. Integer nec odio a dui pulvinar semper et quis nibh. Aliquam efficitur sapien erat, eget sagittis massa sodales at. In ullamcorper feugiat laoreet. Sed nec scelerisque arcu, nec tincidunt tortor.

Donec et posuere leo, ut congue tellus. Sed egestas ac nibh ut vestibulum. Nunc ullamcorper et erat nec consequat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut id posuere erat. Proin tincidunt ullamcorper est a ornare. Nam ac malesuada mi. Nulla nec porttitor dui. Fusce ultricies nunc eget erat accumsan interdum.

Cras elementum eu quam nec scelerisque. Ut sit amet nisl pulvinar, accumsan diam et, scelerisque libero. Sed mi diam, ornare vel pharetra nec, feugiat eget dui. Mauris sed bibendum nulla. Morbi sodales porttitor lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam vehicula ex quis ornare. Aenean eleifend, libero ac finibus condimentum, lorem odio maximus libero, eu bibendum dui lectus in ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra, est pharetra mattis rhoncus, dui lorem hendrerit nunc, nec vehicula urna leo eu diam. Curabitur ac ipsum eget risus fringilla malesuada vitae at metus. Nunc sit amet laoreet nisl.

Suspendisse potenti. Quisque pulvinar, purus ac consectetur efficitur, libero nulla posuere diam, mattis tempor tortor ligula eu ante. Sed eros justo, placerat sit amet tortor ut, euismod tincidunt libero. Aliquam sed auctor orci. Sed luctus ante vitae dui malesuada varius. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur laoreet eget lectus et vulputate. Fusce eget neque ut mi tincidunt varius. Mauris tincidunt laoreet dolor a elementum. Nullam vel efficitur lacus, at vestibulum justo.

Phasellus fermentum vulputate leo, malesuada tincidunt urna elementum eget. Maecenas viverra, lorem vitae imperdiet dictum, orci nisl pharetra turpis, porta condimentum purus quam nec lacus. Donec sit amet dolor porttitor, pharetra odio vitae, efficitur justo. Donec nec augue eu arcu pretium iaculis sit amet eget dolor. Nunc condimentum maximus turpis, at facilisis lorem convallis eget. In hac habitasse platea dictumst. Donec eu urna nec massa auctor gravida. Vivamus tincidunt nisl accumsan euismod tristique. Donec bibendum maximus libero sagittis pharetra. Vivamus et tempus augue. Etiam ac mattis dolor. Quisque auctor sem vitae sodales vestibulum. Morbi at nisi aliquam, viverra mi ac, lacinia neque. Ut elementum, leo a congue placerat, sem nunc maximus magna, eget dictum ligula justo non eros. Nullam elit lorem, molestie vel auctor quis, bibendum in diam.

Aliquam ultricies, tellus at blandit tempus, sapien tortor tempor nisi, nec faucibus eros odio ac felis. Mauris at pretium nibh. Donec non eros libero. Etiam vitae elementum ligula. In velit dui, finibus in tincidunt a, eleifend et ipsum. Aliquam pharetra molestie sem non blandit. Morbi volutpat eros in nunc eleifend placerat. Suspendisse urna sapien, ullamcorper a venenatis ac, rhoncus eget mauris. Ut egestas est sed efficitur aliquam. Praesent mattis semper libero, non laoreet ipsum euismod nec. Sed interdum leo nec eros mattis, nec laoreet nulla dictum. Curabitur ut faucibus dui.

Nam facilisis sagittis sapien, sit amet egestas sapien. Mauris sit amet sollicitudin risus. Phasellus ac iaculis velit. Etiam quis magna quis lacus porta pulvinar. Nullam eget velit aliquam, iaculis nulla ac, pharetra sem. Nulla malesuada dictum lobortis. Vivamus mi sapien, dictum at finibus non, facilisis a dui. Morbi ornare fringilla libero, sed venenatis magna feugiat a.`,
    },
    {
      title: "How to Make Your Plants the Center of Attention",
      images: "/images/sample-blog/blog-6.jpeg",

      published: true,
      featured: false,
      tag: "Plant Styling",
      sub: "Whether you're decorating your home or office, plants are the perfect way to bring life into any space. This blog will explore creative ways to style your plants, from grouping them by size and color to using unique planters that complement your decor.",
      content: `In hac habitasse platea dictumst. Curabitur vestibulum justo non nulla pharetra interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In egestas nisl at euismod consectetur. Suspendisse libero elit, condimentum eget dolor a, varius cursus ante. Donec consequat lorem dignissim, tincidunt sem sed, iaculis arcu. Nunc arcu purus, fringilla auctor lobortis vel, blandit venenatis lacus. Nullam euismod rhoncus leo, non luctus purus volutpat sit amet. Aenean pellentesque nisl quis ex luctus, eu ultrices diam placerat. Mauris pharetra augue et arcu dictum luctus. Integer dignissim augue odio, in scelerisque sem ornare a.

Suspendisse blandit dolor sed nisl pharetra luctus. Fusce sed nibh et erat placerat volutpat. Donec posuere, ex sit amet blandit sagittis, sem dolor venenatis tortor, eget viverra nunc nunc ultricies lacus. Pellentesque at ligula et mi venenatis vehicula ut id erat. Phasellus condimentum nulla eget tincidunt tincidunt. Morbi gravida porttitor arcu, congue ullamcorper ante laoreet sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed quis purus nibh.

Donec nisl ligula, ultrices eu lorem in, laoreet dictum quam. Integer id erat lectus. Vivamus quam justo, convallis ac orci eu, mattis mollis nulla. Phasellus vehicula, ante vitae porta egestas, dui quam dignissim dolor, at molestie sem ligula nec magna. Phasellus faucibus maximus enim eu tempus. Quisque porttitor, magna nec hendrerit molestie, nunc eros cursus turpis, id lacinia odio metus non augue. In hac habitasse platea dictumst. Nam vestibulum vestibulum velit id maximus. Maecenas commodo nec lectus vel feugiat. Etiam congue congue maximus. Aenean interdum congue odio, rutrum faucibus lorem finibus eget. Quisque tempus neque leo, tincidunt egestas orci efficitur porta. Pellentesque tristique nec quam eget maximus.

Ut ligula sapien, dignissim in efficitur nec, commodo at purus. Etiam sit amet tellus sit amet purus tempus consequat. Pellentesque sagittis dolor lacus, quis blandit risus faucibus in. Ut condimentum, dolor ut hendrerit semper, quam tortor vulputate elit, a suscipit purus nulla in nulla. Nam blandit augue a feugiat molestie. Donec ut tristique quam. Donec a tincidunt lacus. Mauris vel euismod neque, sit amet lacinia lacus. Curabitur id ullamcorper mi. Nulla non eros placerat, aliquet lectus id, pulvinar elit. Morbi porta, neque eu lobortis tincidunt, justo est dapibus quam, a ultricies dui enim non mauris. Cras porta laoreet porttitor. Duis fermentum magna et sem cursus, sed facilisis nisi rutrum. Suspendisse in justo lectus. In finibus quam in ligula sodales lacinia. Aenean massa tellus, tincidunt id pulvinar sit amet, pellentesque euismod neque.

Proin tincidunt elementum massa. Aliquam nec vestibulum nunc. Duis ornare facilisis dapibus. Etiam porttitor nibh ipsum, in imperdiet tortor ornare ut. Sed nec lectus eu sapien sagittis aliquet at et tellus. Sed non ipsum sapien. Phasellus id semper justo. Phasellus et augue turpis. Maecenas lobortis erat non nisi placerat fermentum. Suspendisse non volutpat urna. Nulla vehicula malesuada erat eget tincidunt.

Donec ultricies aliquam ultricies. Fusce ac quam quis velit maximus varius. Phasellus efficitur, mi vitae tempor venenatis, neque nisi molestie arcu, sed varius felis nibh in sapien. Cras laoreet dui id elit dignissim porttitor. Fusce metus turpis, volutpat vitae dapibus ac, auctor sed turpis. Donec eget lacus gravida justo tempus dictum quis sed lectus. Praesent mattis vel enim id convallis. Nullam id hendrerit nisi, at tempus enim. Vestibulum sodales nibh metus, et viverra est malesuada vitae. Nulla nisi est, laoreet et sodales eget, gravida a nunc. Donec at lacus in velit dictum auctor. Cras facilisis fringilla ante eget varius. Nam in viverra arcu. Aliquam a augue ligula.

Sed suscipit, nisl id egestas fringilla, urna libero vulputate lectus, quis tempus sapien magna in ipsum. Proin magna leo, dapibus at lectus vel, lacinia elementum enim. Sed ac turpis quam. Nunc faucibus dictum mauris non auctor. Nam tempor orci lorem. Etiam ornare sapien ullamcorper purus vehicula finibus. Donec vitae tempus mauris.

Cras maximus magna quis sollicitudin fringilla. Aliquam erat volutpat. Sed quis tempus mauris. Aliquam et venenatis enim. Sed eleifend ante eget augue porta, id rhoncus leo pellentesque. Vivamus rhoncus sapien nec est accumsan, vitae vehicula quam cursus. Vestibulum sagittis ex at ante semper hendrerit. Mauris in urna leo. Proin libero lacus, fermentum a volutpat vel, tincidunt vel leo. In porta velit quis mauris vehicula cursus.

Aenean dapibus ultricies felis, eget maximus nulla tristique quis. Praesent laoreet ullamcorper sapien, sed faucibus lorem hendrerit non. Suspendisse scelerisque fringilla laoreet. Sed venenatis, lectus at vulputate cursus, sapien justo lobortis risus, sollicitudin tempor dui massa et magna. Sed a leo vitae turpis hendrerit sodales. Sed tempor dictum risus, at cursus quam egestas vel. In hac habitasse platea dictumst. Pellentesque ac fringilla orci. Cras aliquam enim eget quam maximus sodales. Phasellus sit amet est odio. Maecenas vitae ornare dolor. Donec placerat eros in rutrum commodo.

Nunc consectetur aliquam nunc nec euismod. Donec iaculis consectetur ullamcorper. Morbi posuere turpis a justo pretium sagittis. Aliquam eu scelerisque justo. Donec nec magna sed neque porta vestibulum. Nullam suscipit enim in augue finibus, a ullamcorper est sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce dui ante, ultrices et lorem vitae, sagittis fringilla lacus. Pellentesque nec diam at lacus pellentesque tincidunt in interdum ante. Donec eros nulla, dapibus nec massa sed, ullamcorper finibus ex. Fusce at nunc lobortis, rhoncus mi eget, lacinia nisi. Praesent lorem neque, mattis ac purus eget, ornare molestie velit. Phasellus sed posuere dolor. Phasellus vel sollicitudin sapien, quis vestibulum orci. Sed in tincidunt nunc. Nullam nisi magna, auctor id dapibus at, sollicitudin vitae dui.`,
    },
    {
      title: "When and How to Repot Your Plants",
      images: "/images/sample-blog/blog-8.jpeg",

      published: true,
      featured: false,
      tag: "Repotting Tips",
      sub: "Repotting can be a daunting task, but it’s essential for your plant’s growth. This guide will show you when to repot your plants, how to choose the right pot size, and step-by-step instructions on how to do it without damaging your plant.",
      content: `Quisque pulvinar facilisis justo, ut viverra nulla tristique id. Curabitur tristique dui eros, at varius enim elementum eu. Aenean at imperdiet tortor, nec cursus diam. Integer non elit ut elit hendrerit volutpat. Sed tincidunt lacus nec risus facilisis porttitor. Phasellus semper non tortor lacinia fermentum. Pellentesque vel quam eu eros scelerisque molestie. Curabitur ligula massa, fringilla sed urna dictum, laoreet bibendum dolor. Curabitur porttitor vel lectus non venenatis. Mauris vel placerat nibh. Aliquam suscipit justo in lacus placerat tristique. Ut porta, enim sed facilisis consequat, ex justo suscipit nulla, placerat malesuada ipsum eros eu augue.

Etiam condimentum mauris vitae sapien dignissim bibendum. Vestibulum libero sem, pharetra sit amet ornare ut, vehicula at ante. Nunc sed pulvinar mi. Nam dapibus volutpat tempus. Etiam cursus leo dui, in dignissim est egestas ut. Duis ac gravida arcu. Etiam mollis, leo eu elementum auctor, nulla dolor porta massa, nec dictum nulla arcu a nisl. Nam eget ante faucibus, vehicula elit quis, volutpat odio. Praesent et commodo risus, eget hendrerit risus. Ut feugiat vehicula purus, at malesuada felis. Cras a urna vel arcu porttitor faucibus. Ut sodales urna vel commodo facilisis. Proin finibus auctor mattis. Praesent posuere congue enim eget cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In tristique ornare ante, sit amet varius lectus pellentesque vitae. Proin libero tellus, condimentum at molestie sit amet, varius eu libero. Mauris nec aliquet turpis. Curabitur massa turpis, egestas a dapibus tincidunt, tempor vel ipsum. In convallis neque sed pretium faucibus. Vivamus tellus risus, eleifend nec felis eu, fermentum blandit mi. Vivamus placerat elementum accumsan. Nulla pharetra erat eget massa porta mollis. Sed sit amet congue urna. Nam enim elit, mattis eget est non, tincidunt ultrices urna. Ut non nibh est.

Nullam blandit lacinia convallis. Aliquam erat volutpat. Phasellus iaculis eget ipsum at pretium. Integer purus lectus, pulvinar vitae maximus ac, rutrum eget ex. Nulla mollis orci nec risus congue bibendum. Sed justo felis, tristique ac augue id, scelerisque suscipit libero. Curabitur sed orci suscipit, pretium risus ut, porta mauris. Sed suscipit ut ipsum quis euismod. Nunc ut dolor vitae lorem bibendum semper in in nunc. Etiam ut ante ullamcorper, sagittis tellus et, semper ex. Vestibulum sit amet justo ornare, tempus massa eget, volutpat massa. Aliquam lacinia lacus nunc, vitae volutpat ante sodales eget. Suspendisse sit amet tortor a massa auctor iaculis eget vitae ante.

Curabitur luctus facilisis velit non tempus. Phasellus sed mauris ornare, faucibus mi a, fermentum urna. Aliquam in lorem ut justo interdum blandit in porttitor ante. Vestibulum non massa at turpis euismod sodales eu quis ligula. In hac habitasse platea dictumst. Nam non elit non purus ornare sollicitudin ac eget justo. Cras semper libero eget lorem feugiat, quis tincidunt odio facilisis. Sed et elit nec purus vulputate tincidunt sit amet et libero. Vestibulum finibus et ipsum eu cursus. Nam vel sem a dolor posuere congue eget vitae erat. Vivamus non rhoncus eros. Suspendisse sagittis ligula ut mauris bibendum, ac congue mi volutpat.

Nam et fringilla justo, ac congue dolor. Nullam sed libero ac ante pretium tincidunt sed vitae dui. Aenean dignissim augue nec diam pulvinar, eu placerat eros porttitor. Proin commodo sapien sem, in tempor justo sagittis pulvinar. Nunc rutrum metus sed vulputate tincidunt. Vivamus sit amet eros lacinia, varius est feugiat, lacinia odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet ante at libero interdum auctor. Sed ornare nisl tincidunt, aliquam ipsum eu, dictum leo. Ut vulputate laoreet ex, tincidunt tristique urna consectetur sed. Sed leo risus, vestibulum a quam a, mollis tristique ipsum.

Vivamus porta gravida nisi nec tristique. Nullam nec consequat dolor, vitae euismod nisi. Pellentesque lobortis arcu mi, eu porttitor neque porttitor vel. Suspendisse nec nibh a diam pretium dictum. Proin rutrum risus a dapibus sodales. Maecenas congue ut tellus ut blandit. Donec at placerat nisl. Ut diam enim, pulvinar pretium sollicitudin vel, vehicula eget ante. Nam metus eros, lacinia ac quam eget, suscipit suscipit nisl.

Nullam ultrices massa quis viverra iaculis. Morbi eu malesuada massa. In vitae lacinia tellus, vel vulputate augue. Proin vulputate, eros ac venenatis ullamcorper, elit lorem sagittis lacus, quis tincidunt tellus diam pretium sapien. Maecenas suscipit vel lorem non venenatis. Ut viverra erat in massa fermentum facilisis. Vestibulum rutrum vestibulum sodales. Phasellus commodo lobortis lobortis. Mauris imperdiet suscipit dolor sed malesuada. Morbi vitae volutpat tellus. Aenean euismod interdum ipsum. Phasellus id diam sagittis lorem finibus vulputate. Cras rhoncus hendrerit metus nec vehicula.

Nam vulputate a sapien ut cursus. Curabitur nunc ipsum, lobortis ut aliquam quis, fringilla id ex. Aliquam hendrerit elit in odio aliquet, vitae ultrices felis viverra. Aliquam quis ipsum efficitur, fringilla augue aliquam, blandit turpis. Nullam sed dapibus orci, eget blandit eros. Pellentesque in faucibus felis. Duis porttitor porttitor mi et iaculis. Cras hendrerit augue ac ligula elementum finibus. Sed quam nisi, pellentesque non fringilla eu, ultricies non est.

Aenean volutpat ex ut euismod suscipit. Donec et lacinia elit. Nullam consectetur dolor non justo imperdiet gravida vel ut ipsum. Donec dapibus augue a viverra pellentesque. Suspendisse felis metus, laoreet ut aliquam in, vehicula laoreet libero. Mauris eu tempor libero. Integer vestibulum magna est, a imperdiet diam lobortis ac. Phasellus enim ex, sodales non bibendum blandit, euismod vel odio. Aenean accumsan enim quis risus imperdiet, ut dapibus ex aliquet. Vestibulum feugiat ipsum non malesuada vestibulum. Aenean vulputate lectus ante, quis ultricies arcu congue quis. Aenean felis sapien, egestas ut rhoncus a, malesuada ut enim. Donec vulputate leo eros, quis congue diam fermentum ut.`,
    },
    {
      title: "The Secret to Beautiful, Long-Lasting Blooms",
      images: "/images/sample-blog/blog-9.jpeg",

      published: true,
      featured: false,
      tag: "Flower Care",
      sub: "Want your flowers to bloom longer and look their best? This post will teach you the secrets to proper flower care, including when to prune, how to deadhead, and the best techniques for encouraging vibrant flowers.",
      content: `Vivamus vulputate congue neque iaculis venenatis. Phasellus non elementum dolor, vitae tristique dui. Etiam lacinia purus et tellus consectetur gravida. Aenean tempor turpis in arcu gravida venenatis. Fusce id nisl aliquet magna iaculis ornare. Quisque facilisis turpis non sem pellentesque aliquet. Duis pulvinar rutrum accumsan. Donec a nunc vitae sem hendrerit elementum. Aliquam a nisi turpis. Maecenas auctor, sapien vitae congue malesuada, mauris erat convallis erat, non cursus eros risus vitae eros. Vivamus id risus aliquam, fermentum nunc quis, tristique nibh. Cras tincidunt ac lacus efficitur faucibus. Quisque in tincidunt metus.

Quisque vulputate accumsan quam a porttitor. Nulla mollis augue magna, imperdiet efficitur purus sagittis luctus. Curabitur eu est dolor. Aliquam ac augue vitae ante dapibus sagittis. In fermentum posuere massa. Duis nulla dolor, efficitur a sem consectetur, porta volutpat nisl. Curabitur maximus turpis sed venenatis iaculis. In rhoncus augue nulla, eu mollis nisl luctus vitae. Pellentesque volutpat ex eget ultricies cursus. Sed sed consectetur diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer at nunc et lorem faucibus ultrices ac ut mauris. Morbi aliquam ante vitae purus vestibulum faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent et mauris a urna lobortis sodales.

Nunc feugiat purus eget justo ultrices, non ultricies nunc sagittis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc neque arcu, condimentum eget consequat vel, elementum eu tortor. Donec blandit nisl nec massa dapibus scelerisque. Phasellus volutpat, mauris sed cursus fermentum, mauris felis luctus metus, eu auctor nisl velit at ipsum. Aenean vitae pulvinar arcu, quis interdum purus. Donec non nunc placerat sapien rhoncus mattis. Donec congue sapien non enim finibus sodales. Praesent a est augue. Sed fringilla placerat nibh, sed luctus orci auctor a. Duis eu tortor auctor nibh varius maximus. Nulla laoreet dolor ac massa pulvinar, eget condimentum erat mattis. Aliquam tempus, purus sit amet finibus aliquam, turpis justo dictum sapien, sed porta est urna quis purus. Praesent non ante accumsan, varius purus et, mollis tortor. Aliquam interdum nibh leo, eget interdum felis bibendum non.

Aliquam non tellus et augue scelerisque lacinia. Duis volutpat ex lectus, eget mattis dolor aliquam at. Suspendisse tristique, metus sed pretium vulputate, lacus elit dictum ligula, a condimentum augue sapien a ligula. In pharetra molestie tellus, eget dapibus velit ornare quis. Sed vitae sodales lectus, ut aliquam tortor. Aliquam vitae erat vitae justo feugiat condimentum. Mauris egestas blandit ultricies. Sed convallis varius arcu, a volutpat urna faucibus in. Vivamus eget dapibus dolor. Morbi et eros sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus ultricies nisl in bibendum feugiat. Suspendisse molestie interdum neque, in sagittis enim interdum at. Mauris elit nunc, cursus sit amet vulputate vitae, malesuada a sapien. Cras tincidunt fermentum quam, quis egestas orci sollicitudin quis.

Phasellus tristique magna dui, et malesuada diam luctus ac. Nam vehicula lectus in egestas sollicitudin. Praesent a fermentum velit. Nunc dignissim euismod leo sit amet consequat. Sed odio metus, vehicula ut sem a, semper vulputate nibh. Vestibulum bibendum odio quam, eu congue ante luctus at. Nam lacinia arcu quis eros molestie, sodales aliquet felis semper. Aliquam finibus enim ipsum, eget imperdiet nisi tincidunt quis. Mauris vel lacus ut ante interdum facilisis. Donec quis enim quis augue faucibus pellentesque. Morbi eu nibh sed dui vehicula sodales sit amet ut arcu.

Pellentesque consequat nunc tempus aliquet pulvinar. Cras auctor sem nulla, eu sagittis nunc vulputate vitae. Ut at purus quis ipsum porta rhoncus ut quis dolor. Aliquam suscipit neque a ligula efficitur viverra. Nunc vitae aliquet erat, nec tempor urna. Sed et commodo est, sit amet imperdiet nulla. Proin nec vehicula ex. Nulla non sapien vitae odio vehicula congue malesuada nec libero. Aliquam ornare magna eu urna dapibus laoreet. Proin lorem ligula, pulvinar ac lorem quis, auctor pharetra dolor. Aenean laoreet velit vitae tincidunt vestibulum. Duis porttitor tortor at fermentum auctor. Aenean mollis ullamcorper malesuada.

Quisque feugiat turpis nec mauris aliquam, eu rutrum nulla molestie. Nunc vel hendrerit turpis, eu pellentesque lacus. Phasellus id volutpat ante, nec tincidunt ligula. Curabitur in lobortis diam. Quisque ipsum justo, sodales vel sagittis quis, facilisis blandit metus. Vivamus nunc urna, viverra ac elit sit amet, auctor commodo erat. Duis ultricies eros nec tincidunt cursus. Pellentesque gravida accumsan dui, ut tincidunt mi ullamcorper ut. Etiam convallis volutpat fermentum.

Sed euismod mauris velit, nec consequat dolor congue at. Vivamus pretium augue elit, at molestie eros semper at. Pellentesque auctor blandit turpis nec tempus. Sed risus nulla, ornare vel accumsan ut, eleifend vel erat. Aliquam in lacus finibus, porttitor libero nec, tristique purus. Integer tempus leo ut neque sagittis, aliquam semper magna vestibulum. Quisque faucibus auctor lectus nec eleifend. Donec luctus tempus tellus eu rhoncus. Nam finibus hendrerit accumsan. Pellentesque at finibus sapien, congue bibendum quam. Duis pellentesque convallis lorem, sit amet aliquam augue placerat ac. Aliquam et tortor condimentum, vestibulum justo vitae, ornare diam. Praesent ac ullamcorper nunc. Duis nec rhoncus tellus, non euismod justo. Donec iaculis ornare malesuada. Proin ex risus, vestibulum non enim id, bibendum suscipit lacus.

Maecenas vehicula, risus non viverra fringilla, dolor felis feugiat ligula, nec molestie dui dolor ut justo. Maecenas cursus nunc dui, a vehicula lorem tempor nec. Fusce at tempor arcu. Duis quis est blandit, ultricies risus id, tempus urna. Vestibulum faucibus massa felis, id sagittis arcu ornare vel. Fusce vestibulum, tortor vitae convallis rutrum, risus ligula viverra leo, in placerat orci sapien ut purus. Maecenas rutrum ultrices lorem et varius.

Sed non sollicitudin dui. Morbi aliquam gravida interdum. Cras eget tellus a orci faucibus mollis a vel ex. Ut eget dictum arcu, in convallis eros. Donec est ipsum, semper nec posuere sed, mattis sit amet ligula. Nulla cursus turpis vitae nisi malesuada facilisis. Quisque a lorem nec purus maximus lobortis ut nec turpis. Praesent sed sem lacinia, suscipit tortor vitae, tempus leo.`,
    },
    {
      title: "How to Choose and Apply the Right Fertilizer",
      images: "/images/sample-blog/blog-4.jpeg",

      published: true,
      featured: false,
      tag: "Fertilizing",
      sub: "Fertilizing is crucial to healthy plant growth, but it can be tricky to know when and how to fertilize. This post will explain different types of fertilizers, how often you should apply them, and how to choose the best one for your plants.",
      content: `Vivamus vulputate congue neque iaculis venenatis. Phasellus non elementum dolor, vitae tristique dui. Etiam lacinia purus et tellus consectetur gravida. Aenean tempor turpis in arcu gravida venenatis. Fusce id nisl aliquet magna iaculis ornare. Quisque facilisis turpis non sem pellentesque aliquet. Duis pulvinar rutrum accumsan. Donec a nunc vitae sem hendrerit elementum. Aliquam a nisi turpis. Maecenas auctor, sapien vitae congue malesuada, mauris erat convallis erat, non cursus eros risus vitae eros. Vivamus id risus aliquam, fermentum nunc quis, tristique nibh. Cras tincidunt ac lacus efficitur faucibus. Quisque in tincidunt metus.

Quisque vulputate accumsan quam a porttitor. Nulla mollis augue magna, imperdiet efficitur purus sagittis luctus. Curabitur eu est dolor. Aliquam ac augue vitae ante dapibus sagittis. In fermentum posuere massa. Duis nulla dolor, efficitur a sem consectetur, porta volutpat nisl. Curabitur maximus turpis sed venenatis iaculis. In rhoncus augue nulla, eu mollis nisl luctus vitae. Pellentesque volutpat ex eget ultricies cursus. Sed sed consectetur diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer at nunc et lorem faucibus ultrices ac ut mauris. Morbi aliquam ante vitae purus vestibulum faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent et mauris a urna lobortis sodales.

Nunc feugiat purus eget justo ultrices, non ultricies nunc sagittis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc neque arcu, condimentum eget consequat vel, elementum eu tortor. Donec blandit nisl nec massa dapibus scelerisque. Phasellus volutpat, mauris sed cursus fermentum, mauris felis luctus metus, eu auctor nisl velit at ipsum. Aenean vitae pulvinar arcu, quis interdum purus. Donec non nunc placerat sapien rhoncus mattis. Donec congue sapien non enim finibus sodales. Praesent a est augue. Sed fringilla placerat nibh, sed luctus orci auctor a. Duis eu tortor auctor nibh varius maximus. Nulla laoreet dolor ac massa pulvinar, eget condimentum erat mattis. Aliquam tempus, purus sit amet finibus aliquam, turpis justo dictum sapien, sed porta est urna quis purus. Praesent non ante accumsan, varius purus et, mollis tortor. Aliquam interdum nibh leo, eget interdum felis bibendum non.

Aliquam non tellus et augue scelerisque lacinia. Duis volutpat ex lectus, eget mattis dolor aliquam at. Suspendisse tristique, metus sed pretium vulputate, lacus elit dictum ligula, a condimentum augue sapien a ligula. In pharetra molestie tellus, eget dapibus velit ornare quis. Sed vitae sodales lectus, ut aliquam tortor. Aliquam vitae erat vitae justo feugiat condimentum. Mauris egestas blandit ultricies. Sed convallis varius arcu, a volutpat urna faucibus in. Vivamus eget dapibus dolor. Morbi et eros sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus ultricies nisl in bibendum feugiat. Suspendisse molestie interdum neque, in sagittis enim interdum at. Mauris elit nunc, cursus sit amet vulputate vitae, malesuada a sapien. Cras tincidunt fermentum quam, quis egestas orci sollicitudin quis.

Phasellus tristique magna dui, et malesuada diam luctus ac. Nam vehicula lectus in egestas sollicitudin. Praesent a fermentum velit. Nunc dignissim euismod leo sit amet consequat. Sed odio metus, vehicula ut sem a, semper vulputate nibh. Vestibulum bibendum odio quam, eu congue ante luctus at. Nam lacinia arcu quis eros molestie, sodales aliquet felis semper. Aliquam finibus enim ipsum, eget imperdiet nisi tincidunt quis. Mauris vel lacus ut ante interdum facilisis. Donec quis enim quis augue faucibus pellentesque. Morbi eu nibh sed dui vehicula sodales sit amet ut arcu.

Pellentesque consequat nunc tempus aliquet pulvinar. Cras auctor sem nulla, eu sagittis nunc vulputate vitae. Ut at purus quis ipsum porta rhoncus ut quis dolor. Aliquam suscipit neque a ligula efficitur viverra. Nunc vitae aliquet erat, nec tempor urna. Sed et commodo est, sit amet imperdiet nulla. Proin nec vehicula ex. Nulla non sapien vitae odio vehicula congue malesuada nec libero. Aliquam ornare magna eu urna dapibus laoreet. Proin lorem ligula, pulvinar ac lorem quis, auctor pharetra dolor. Aenean laoreet velit vitae tincidunt vestibulum. Duis porttitor tortor at fermentum auctor. Aenean mollis ullamcorper malesuada.

Quisque feugiat turpis nec mauris aliquam, eu rutrum nulla molestie. Nunc vel hendrerit turpis, eu pellentesque lacus. Phasellus id volutpat ante, nec tincidunt ligula. Curabitur in lobortis diam. Quisque ipsum justo, sodales vel sagittis quis, facilisis blandit metus. Vivamus nunc urna, viverra ac elit sit amet, auctor commodo erat. Duis ultricies eros nec tincidunt cursus. Pellentesque gravida accumsan dui, ut tincidunt mi ullamcorper ut. Etiam convallis volutpat fermentum.

Sed euismod mauris velit, nec consequat dolor congue at. Vivamus pretium augue elit, at molestie eros semper at. Pellentesque auctor blandit turpis nec tempus. Sed risus nulla, ornare vel accumsan ut, eleifend vel erat. Aliquam in lacus finibus, porttitor libero nec, tristique purus. Integer tempus leo ut neque sagittis, aliquam semper magna vestibulum. Quisque faucibus auctor lectus nec eleifend. Donec luctus tempus tellus eu rhoncus. Nam finibus hendrerit accumsan. Pellentesque at finibus sapien, congue bibendum quam. Duis pellentesque convallis lorem, sit amet aliquam augue placerat ac. Aliquam et tortor condimentum, vestibulum justo vitae, ornare diam. Praesent ac ullamcorper nunc. Duis nec rhoncus tellus, non euismod justo. Donec iaculis ornare malesuada. Proin ex risus, vestibulum non enim id, bibendum suscipit lacus.

Maecenas vehicula, risus non viverra fringilla, dolor felis feugiat ligula, nec molestie dui dolor ut justo. Maecenas cursus nunc dui, a vehicula lorem tempor nec. Fusce at tempor arcu. Duis quis est blandit, ultricies risus id, tempus urna. Vestibulum faucibus massa felis, id sagittis arcu ornare vel. Fusce vestibulum, tortor vitae convallis rutrum, risus ligula viverra leo, in placerat orci sapien ut purus. Maecenas rutrum ultrices lorem et varius.

Sed non sollicitudin dui. Morbi aliquam gravida interdum. Cras eget tellus a orci faucibus mollis a vel ex. Ut eget dictum arcu, in convallis eros. Donec est ipsum, semper nec posuere sed, mattis sit amet ligula. Nulla cursus turpis vitae nisi malesuada facilisis. Quisque a lorem nec purus maximus lobortis ut nec turpis. Praesent sed sem lacinia, suscipit tortor vitae, tempus leo.`,
    },
    {
      title: "Natural Ways to Protect Your Plants from Pests",
      images: "/images/sample-blog/blog-3.jpeg",

      published: true,
      featured: false,
      tag: "Pest Control",
      sub: "Pests can wreak havoc on your plants, but you don’t have to resort to harsh chemicals. This post covers natural pest control methods like neem oil, companion planting, and essential oils to keep your plants safe from unwanted visitors.",
      content: `Morbi pharetra eleifend enim, a cursus mauris ultrices eget. Donec rutrum elit a tellus ultricies ultricies. Vivamus luctus diam laoreet lorem aliquet dictum non ut velit. Pellentesque rhoncus quam aliquam rutrum fermentum. Integer sollicitudin leo nunc, quis vulputate lacus rhoncus sed. Donec gravida pharetra nunc, sed ultricies risus condimentum et. Quisque at leo enim. Cras eget orci sit amet ipsum rutrum efficitur eu nec eros. Nullam nec elit euismod, luctus dolor non, ultricies est. Aliquam ut diam eu sapien facilisis tincidunt in vestibulum lacus. Etiam vitae massa fermentum, lobortis arcu et, sollicitudin nibh. Morbi nec vulputate ex. Donec tincidunt faucibus lacus, non pellentesque est iaculis sed.

Fusce luctus sodales dolor, id cursus magna pulvinar a. Suspendisse posuere iaculis enim, dapibus rhoncus mi molestie ut. Sed non est dolor. Pellentesque mattis augue vel fringilla mollis. Aliquam lacinia tortor id cursus mollis. Ut at ex vitae erat eleifend rutrum. Etiam pharetra maximus dui nec tincidunt.

Donec ac diam quis nibh interdum lacinia vel quis purus. Mauris eget ligula vitae lorem commodo feugiat id a orci. In sagittis nibh justo, eget viverra risus ullamcorper id. Fusce at turpis id elit mollis suscipit nec in lorem. Suspendisse eu tellus urna. Sed pulvinar purus risus, ac vehicula erat eleifend vel. Mauris vulputate congue vestibulum. Aenean aliquet neque laoreet magna lacinia eleifend. Aliquam hendrerit enim in velit ornare, eget viverra felis dapibus. Cras vel quam mattis, posuere tortor ut, gravida leo. Curabitur eu facilisis felis. Etiam a blandit est.

Integer sit amet facilisis libero. Ut vulputate viverra diam. Fusce sodales nisi et faucibus congue. Phasellus ac ornare nulla. Morbi blandit tellus eget felis luctus gravida in mattis orci. Etiam eget ullamcorper metus. Donec iaculis, turpis ac feugiat ultrices, velit leo venenatis sapien, sit amet mollis ipsum ipsum ac massa. Quisque id ipsum malesuada, ullamcorper nulla vel, iaculis tellus. Donec a rutrum orci, sit amet dapibus diam. Morbi tincidunt nisl in elit posuere gravida. Ut scelerisque ullamcorper ultrices. Phasellus iaculis metus ut tortor commodo commodo.

Maecenas et ipsum nec enim commodo blandit. Mauris a ligula vel ex varius laoreet. Aliquam facilisis, quam eu mollis auctor, ante orci convallis elit, nec sollicitudin velit est at lorem. Nullam dictum odio quis volutpat convallis. Cras vel magna varius odio accumsan fringilla. Nam sit amet ultricies purus, at bibendum purus. Nam pellentesque accumsan purus, quis rutrum elit blandit in.

Morbi iaculis at justo ut tristique. Aenean nec justo id sapien vulputate lacinia in sed tellus. Nunc cursus porttitor lacus a tempus. Donec ante nibh, commodo vitae libero quis, rutrum euismod lorem. Quisque tristique est nec convallis venenatis. Maecenas et ex eget purus hendrerit euismod vel quis risus. Duis lectus sem, pulvinar luctus bibendum id, fermentum sit amet eros. Pellentesque ac turpis leo.

Ut consectetur turpis ligula, non fermentum lacus malesuada eu. Fusce eget ex neque. Donec id urna pretium ante rutrum aliquam. Integer vitae risus commodo, varius ligula eget, feugiat libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus interdum mollis. Vivamus tempus tincidunt egestas. Vivamus sollicitudin porttitor metus sed fringilla. Sed ut ante vitae lectus iaculis cursus vel in ex. Vestibulum commodo condimentum ante a mattis. Mauris cursus ex sem, at lacinia orci commodo vitae. Integer vehicula nibh in urna iaculis tempus. Nunc rutrum aliquet lacus, in mattis metus scelerisque sed.

Proin felis libero, pellentesque id congue in, faucibus vitae nisi. Nam tempor orci quis ante fringilla, ut porta dui scelerisque. Cras at nibh odio. Suspendisse sed purus tristique, viverra massa tristique, gravida arcu. Proin cursus ex nec tortor ultrices ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce in ante nulla. Curabitur mi mi, euismod in lectus eu, hendrerit luctus libero. Vestibulum mollis venenatis iaculis. In posuere ac ipsum sit amet interdum. Maecenas hendrerit sagittis sagittis. Cras mauris turpis, condimentum ac volutpat sit amet, commodo quis ante. Cras feugiat vestibulum ante. Nunc at est ligula.

Donec pharetra sed justo a malesuada. Quisque blandit sed orci vel malesuada. Pellentesque dapibus, lectus vitae convallis ornare, nisi nisl vulputate turpis, a rutrum dolor eros et ipsum. Fusce feugiat scelerisque egestas. Pellentesque ultricies lorem leo, in cursus nisi imperdiet at. Sed blandit tempus neque, vitae tempor arcu iaculis quis. Cras nec urna sapien. Proin eu risus et mauris dictum pellentesque fermentum ac turpis. Etiam eu hendrerit mauris. Praesent eget ipsum sit amet elit lobortis pellentesque ac nec dui. Vestibulum nec pellentesque nunc, eget gravida nunc.

Proin orci nisl, efficitur vel scelerisque eu, porttitor ut diam. Integer urna risus, elementum quis consectetur et, volutpat ac sapien. Sed lobortis massa nisl, quis vehicula odio facilisis nec. Proin quis dui ornare, congue dolor in, consequat nulla. Etiam fringilla libero vel tortor faucibus dictum ut vulputate ipsum. Nulla facilisi. Nam maximus hendrerit felis, gravida lacinia tortor dictum at. In hendrerit nisl iaculis, aliquet massa in, tempus nulla.`,
    },
  ],
  // tags: [
  //   { name: "Indoor Care" },
  //   { name: "Outdoor Care" },
  //   { name: "Flower Care" },
  //   { name: "Pest Control" },
  //   { name: "Plant Styling" },
  //   { name: "Fertilizing" },
  //   { name: "Repotting Tips" },
  //   { name: "Plant Health" },
  //   { name: "Watering Tips" },
  //   { name: "Gardening Tips" },
  // ],
};
export default sampleData;
