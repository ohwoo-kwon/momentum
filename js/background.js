const images = [
  "ARIN_5.jpg",
  "BINNIE_2.jpg",
  "BINNIE_4.jpg",
  "BINNIE_6.jpg",
  "Concept.jpg",
  "HYOJUNG_3.jpg",
  "JIHO_6.jpg",
  "MIMI_1.jpg",
  "MIMI_3.jpg",
  "MIMI_5.jpg",
  "SEUNGHEE_3.jpg",
  "UNIT_1.jpg",
  "UNIT_2.jpg",
  "YOOA_1.jpg",
  "YOOA_2.jpg",
  "YOOA_3.jpg",
  "YOOA_4.jpg",
  "YOOA_6.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `images/${chosenImage}`;

document.body.prepend(bgImage);