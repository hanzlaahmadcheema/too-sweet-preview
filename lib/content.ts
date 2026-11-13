/**
 * Too Sweet - Custom Cakes & Cookies — site content.
 *
 * VERIFIED = from the business's public Facebook posts via findglocal
 * (checked 2026-11-13). No owner name, phone or email is published — the
 * business asks for the customer's email address to send an invoice.
 * UNIVERSAL = standard content every home-bakery website has, added at the
 * owner's request. The disclaimer banner on the site tells the business
 * owner to correct anything that is wrong.
 */

export const clinic = {
  name: "Too Sweet - Custom Cakes & Cookies",
  shortName: "Too Sweet",
  tagline: "Family bakery · Willis, Texas",
  phoneDisplay: "",
  phoneTel: "",
  address: "13675 Cake Lane, Willis, TX 77378",
  area: "Willis, TX",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Too+Sweet+Custom+Cakes+%26+Cookies+Willis+TX",
  facebookText: "Too Sweet — find us on Facebook",
  facebookUrl: "https://www.facebook.com/239640762752306",
  instagramText: "",
  instagramUrl: "",
  owner: {
    name: "",
    title: "Family bakery",
    bio: "Too Sweet is a family-owned, faith-filled bakery in Willis, Texas — creating sweet memories since 2009. Custom cakes, decorated cookies, brownies, dessert shooters and sweet treats for every celebration, all made in a home kitchen with love. Pickup is in Willis, and delivery or meet-up can be arranged.",
  },
};

export type ServiceGroup = {
  title: string;
  blurb: string;
  items: string[];
  price?: string;
  image?: string;
  imageAlt?: string;
  verified?: boolean;
};

/** Menu grouped the way top bakery sites group it.
 *  VERIFIED groups are marked; no per-item prices are published, so all
 *  are DM. The $20 rush fee is published. */
export const serviceGroups: ServiceGroup[] = [
  {
    title: "Custom Cakes",
    blurb:
      "The heart of the bakery. Birthdays, Sweet 16s, 60ths — any celebration, in any flavor and design, from a classic vanilla cake to buttercream cheetah print with gold leaf and feathers.",
    items: ["Any flavor & design", "Birthdays & milestones", "Made fresh to order"],
    price: "DM for a quote",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Rainbow layer cake with colorful sprinkles and star decorations on a cake stand",
    verified: true,
  },
  {
    title: "Decorated Cookies",
    blurb:
      "Hand-decorated cookies for every occasion — unicorn birthdays, baby showers, gender reveals, wedding showers and milestones, in your colors and theme.",
    items: ["Hand-decorated, any theme", "Baby showers & birthdays", "Gender reveals & weddings"],
    price: "DM for a quote",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Chocolate chip cookies in a basket lined with parchment paper",
    verified: true,
  },
  {
    title: "Brownies & Dessert Shooters",
    blurb:
      "Sweet treats for the table — brownies, dessert shooters and more, for parties, showers and any gathering that needs a little something sweet.",
    items: ["Brownies", "Dessert shooters", "Sweet treats for any table"],
    price: "DM for a quote",
    image: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Happy Birthday written in chocolate sauce with truffles and a raspberry on a dark plate",
    verified: true,
  },
  {
    title: "Cake Decorating Classes",
    blurb:
      "Learn the basics of cake decorating and leave with a beautiful cake you decorated yourself — fun, laughter and plenty of buttercream along the way.",
    items: ["Hands-on, for all levels", "Leave with your own cake", "Community classes & events"],
    price: "DM for dates",
    verified: true,
  },
];

/** UNIVERSAL — standard on every home-bakery site; DM to confirm. */
export const faqs = [
  {
    q: "How do I order?",
    a: "Send us a DM on Facebook — that is how every order starts. Tell us what you want, when you need it, and how many people it is for. We will need your email address and full name, because the invoice is sent to your email.",
  },
  {
    q: "How does booking work?",
    a: "50% of the payment is due to book. Once we receive it, we send you an invoice to your email — when payment is received, you are officially on our calendar. Payment must be received within 5 days to hold your spot; if we do not receive it, we will assume you no longer wish to order.",
  },
  {
    q: "What if I need a cake in less than 7 days?",
    a: "Rush orders (7 days' notice or less) carry a $20 rush order fee, and payment must be received no later than noon the following day. There are no refunds for rush orders or last-minute cancellations.",
  },
  {
    q: "What is your cancellation policy?",
    a: "If you cancel 8 days or more ahead of your scheduled pickup date, you will receive your retainer back — or you can use it for a future order. Orders cancelled 7 days or less before pickup will not receive a refund, and orders not picked up on the agreed date are not entitled to a refund.",
  },
  {
    q: "Where do I pick up my order?",
    a: "Pickup is in Willis, Texas (13675 Cake Lane). We do deliver or meet — we can meet up with you beforehand at a designated meeting place. We cannot ship, due to the food cottage law we work under.",
  },
  {
    q: "What about allergies?",
    a: "We are a Texas cottage food baker. Our macarons and other items are made in our kitchen and contain or may contain: nuts, soy, wheat, dairy, eggs, fish, corn. Our products are made in a home kitchen and are not inspected by the department of state health or a local health department. Please also note: orders with dark reds, blues, purples or black can stain teeth and clothing, and can affect the flavor of macarons.",
  },
];

/** UNIVERSAL — the standard home-bakery ordering flow. */
export const orderSteps = [
  {
    title: "DM us on Facebook",
    body: "Tell us what you want, when you need it, and how many people it is for. Send your email address and full name too — the invoice goes to your email.",
  },
  {
    title: "We confirm & invoice you",
    body: "We confirm your order and send the invoice. Pay 50% within 5 days to hold your spot on the calendar.",
  },
  {
    title: "Pick up in Willis",
    body: "Your cakes and cookies are baked fresh, and ready at the agreed time. Pickup is in Willis — delivery or meet-up can be arranged.",
  },
];
