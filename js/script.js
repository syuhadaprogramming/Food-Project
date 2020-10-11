// items foods
const menu = [
  {
    id: 2,
    title: "Diner Double",
    category: "lunch",
    price: 13.99,
    img: "img/item-2.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 4,
    title: "Country Delight",
    category: "breakfast",
    price: 20.99,
    img: "img/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "Egg Attack",
    category: "lunch",
    price: 22.99,
    img: "img/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "Oreo Dream",
    category: "shakes",
    price: 18.99,
    img: "img/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "Bacon Overflow",
    category: "breakfast",
    price: 8.99,
    img: "img/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "American Classic",
    category: "lunch",
    price: 12.99,
    img: "img/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "Quarantine Buddy",
    category: "shakes",
    price: 16.99,
    img: "img/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const sectionCenter = document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded", function () {
  let displayMenu = menu.map(function (item) {
    return `<div class="col-md-4 ">
    <div class="card shadow-sm bg-white rounded mb-3"  >
    <img
      src=${item.img}
      class="card-img-top"
      alt=${item.title}
    />
    <div class="card-body">
      <div
        class="group d-flex justify-content-between align-items-center border-bottom"
      >
        <h6 class="card-title">${item.title}</h6>
        <h6 class="card-subtitle mb-2 text-muted">${item.price}</h6>
      </div>
      <p class="card-text mt-2">${item.desc}
      </p>
    </div>
  </div>
  </div>
`;
  });

  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
});
