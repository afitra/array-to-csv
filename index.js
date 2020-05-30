const { convertArrayToCSV } = require("convert-array-to-csv");
const converter = require("convert-array-to-csv");

// const header = ["number", "first", "last", "handle"];
// const dataArrays = [
//   [1, "Mark", "Otto", "@mdo"],
//   [2, "Jacob", "Thornton", "@fat"],
//   [3, "Larry", "the Bird", "@twitter"],
// ];
let ceritaData = [
  {
    // scene ke-1
    status: false,
    finish: false,
    navigationNext: true,
    navigationBack: false,
    narasi: true,
    dialogAyah: false,
    objekModal: false,
    choise: false,
    isBackground: "background-kamping-0",
    isNarasi: "Suatu hari, ayah mengajak Budi untuk pergi berkemah",
    isModal: {
      wordTitle: "",
      photo: "", // untuk modal
      isGif: "",
      iconImage: "", // untuk koleksi kata (mewarnai) /  default container image index-0
      containerImage: [""],
    },
    isDialogAyah: "",
    isChoise: {
      setIndex: [17, 18, 19, 20],
      changeBackground: [],
      tochange: true,
      pattern: [
        {
          type: "",
          iconImage: " ",
          setBackground: " ",
          wordTitle: "",
        },
        {
          type: "",
          iconImage: " ",
          setBackground: " ",
          wordTitle: "",
        },
      ],
    },
  },

  {
    // scene ke-2
    finish: false,
    navigationNext: true,
    navigationBack: true,
    narasi: false,
    dialogAyah: true,
    objekModal: false,
    choise: false,
    isBackground: "background-kamping-1",
    isNarasi: "",
    isModal: {
      wordTitle: "",
      photo: "", // untuk modal
      isGif: "",
      iconImage: "", // untuk koleksi kata (mewarnai) /  default container image index-0
      containerImage: [""],
    },
    isDialogAyah: "Budi bagaimana kalau besok kita pergi berkemah",
    isChoise: {
      setIndex: "",
      pattern: [
        {
          type: "",
          iconImage: "",
          setBackground: "",
          wordTitle: "",
        },
        {
          type: "",
          iconImage: "",
          setBackground: "",
          wordTitle: "",
        },
      ],
    },
  },

  {
    // scene ke-3-4
    finish: false,
    navigationNext: true,
    navigationBack: true,
    narasi: false,
    dialogAyah: false,
    objekModal: true,
    choise: false,
    isBackground: "background-kamping-2",
    isNarasi: "",
    isModal: {
      wordTitle: "Asyik",
      photo: "asyik-default", // untuk modal
      isGif: "eja-asyik",
      iconImage: "asyik-default", // untuk koleksi kata (mewarnai) /  default container image index-0
      containerImage: [
        "asyik-default",
        "asyik-merah",
        "asyik-pink",
        "asyik-kuning",
        "asyik-hijau",
        "asyik-biru",
        "asyik-donker",
        "asyik-ungu",
      ],
    },
    isDialogAyah: "",
    isChoise: {
      setIndex: "",
      pattern: [
        {
          type: "",
          iconImage: "",
          setBackground: "",
          wordTitle: "",
        },
        {
          type: "",
          iconImage: "",
          setBackground: "",
          wordTitle: "",
        },
      ],
    },
  },

  {
    // scene ke-5
    finish: false,
    navigationNext: true,
    navigationBack: true,
    narasi: false,
    dialogAyah: true,
    objekModal: false,
    choise: false,
    isBackground: "background-kamping-3",
    isNarasi: "",
    isModal: {
      wordTitle: "",
      photo: "", // untuk modal
      isGif: "",
      iconImage: "", // untuk koleksi kata (mewarnai) /  default container image index-0
      containerImage: [""],
    },
    isDialogAyah: "Kamu ingin berkemah kemana Budi?",
    isChoise: {
      setIndex: "",
      pattern: [
        {
          type: "",
          iconImage: "",
          setBackground: "",
          wordTitle: "",
        },
        {
          type: "",
          iconImage: "",
          setBackground: "",
          wordTitle: "",
        },
      ],
    },
  },

  {
    // scene ke-6
    finish: false,
    navigationNext: true,
    navigationBack: true,
    narasi: false,
    dialogAyah: false,
    objekModal: false,
    choise: true,
    isBackground: "background-kamping-4",
    isNarasi: "",
    isModal: {
      wordTitle: "",
      photo: "", // untuk modal
      isGif: "",
      iconImage: "", // untuk koleksi kata (mewarnai) /  default container image index-0
      containerImage: [""],
    },
    isDialogAyah: "Kamu ingin berkemah kemana Budi?",
    isChoise: {
      setIndex: 17,
      pattern: [
        {
          type: "A",
          iconImage: "icon-gunung-choice",
          setBackground: "background-gunung",
          wordTitle: "Gunung",
        },
        {
          type: "B",
          iconImage: "icon-pantai-choice",
          setBackground: "background-pantai",
          wordTitle: "Pantai",
        },
      ],
    },
  },

  {
    // scene ke-7
    finish: false,
    navigationNext: true,
    navigationBack: true,
    narasi: false,
    dialogAyah: true,
    objekModal: false,
    choise: false,
    isBackground: "background-kamping-5",
    isNarasi: "",
    isModal: {
      wordTitle: "",
      photo: "", // untuk modal
      isGif: "",
      iconImage: "", // untuk koleksi kata (mewarnai) /  default container image index-0
      containerImage: [""],
    },
    isDialogAyah:
      "Bagus Budi, ayah juga suka ###, kalau begitu ayo kita bersiap",
    isChoise: {
      setIndex: "",
      pattern: [
        {
          type: "",
          iconImage: "",
          setBackground: "",
          wordTitle: "",
        },
        {
          type: "",
          iconImage: "",
          setBackground: "",
          wordTitle: "",
        },
      ],
    },
  },

  {
    // scene ke-8
    finish: false,
    navigationNext: true,
    navigationBack: true,
    narasi: true,
    dialogAyah: false,
    objekModal: false,
    choise: false,
    isBackground: "background-kamping-6",
    isNarasi: "Budi pun berlari ke kemar untuk bersiap-siap",
    isModal: {
      wordTitle: "",
      photo: "", // untuk modal
      isGif: "",
      iconImage: "", // untuk koleksi kata (mewarnai) /  default container image index-0
      containerImage: [""],
    },
    isDialogAyah: "",
    isChoise: {
      setIndex: "",
      pattern: [
        {
          type: "",
          iconImage: "",
          setBackground: "",
          wordTitle: "",
        },
        {
          type: "",
          iconImage: "",
          setBackground: "",
          wordTitle: "",
        },
      ],
    },
  },

  {
    // scene ke-9-10
    finish: false,
    navigationNext: true,
    navigationBack: true,
    narasi: false,
    dialogAyah: true,
    objekModal: false,
    choise: false,
    isBackground: "background-kamping-8",
    isNarasi: "",
    isModal: {
      wordTitle: "Ransel",
      photo: "ransel-default", // untuk modal
      isGif: "eja-ransel",
      iconImage: "ransel-default", // untuk koleksi kata (mewarnai) /  default container image index-0
      containerImage: [
        "ransel-default",
        "ransel-merah",
        "ransel-pink",
        "ransel-kuning",
        "ransel-hijau",
        "ransel-biru",
        "ransel-donker",
        "ransel-ungu",
      ],
    },
    isDialogAyah: "",
    isChoise: {
      setIndex: "",
      pattern: [
        {
          type: "",
          iconImage: "",
          setBackground: "",
          wordTitle: "",
        },
        {
          type: "",
          iconImage: "",
          setBackground: "",
          wordTitle: "",
        },
      ],
    },
  },

  {
    // scene ke-11-12
    finish: false,
    navigationNext: true,
    navigationBack: true,
    narasi: false,
    dialogAyah: true,
    objekModal: false,
    choise: false,
    isBackground: "background-kamping-9",
    isNarasi: "",
    isModal: {
      wordTitle: "Baju",
      photo: "baju-default", // untuk modal
      isGif: "eja-baju",
      iconImage: "baju-default", // untuk koleksi kata (mewarnai) /  default container image index-0
      containerImage: [
        "baju-default",
        "baju-merah",
        "baju-pink",
        "baju-kuning",
        "baju-hijau",
        "baju-biru",
        "baju-donker",
        "baju-ungu",
      ],
    },
    isDialogAyah: "",
    isChoise: {
      setIndex: "",
      pattern: [
        {
          type: "",
          iconImage: "",
          setBackground: "",
          wordTitle: "",
        },
        {
          type: "",
          iconImage: "",
          setBackground: "",
          wordTitle: "",
        },
      ],
    },
  },

  {
    // scene ke-13
    finish: false,
    navigationNext: true,
    navigationBack: true,
    narasi: false,
    dialogAyah: true,
    objekModal: false,
    choise: false,
    isBackground: "background-kamping-10",
    isNarasi: "",
    isModal: {
      wordTitle: "",
      photo: "", // untuk modal
      isGif: "",
      iconImage: "", // untuk koleksi kata (mewarnai) /  default container image index-0
      containerImage: [""],
    },
    isDialogAyah: "",
    isChoise: {
      setIndex: "",
      pattern: [
        {
          type: "",
          iconImage: "",
          setBackground: "",
          wordTitle: "",
        },
        {
          type: "",
          iconImage: "",
          setBackground: "",
          wordTitle: "",
        },
      ],
    },
  },

  {
    // scene ke-14
    finish: false,
    navigationNext: true,
    navigationBack: true,
    narasi: true,
    dialogAyah: false,
    objekModal: false,
    choise: false,
    isBackground: "background-kamping-11",
    isNarasi:
      "Setelah selesai bersiap-siap Budi pun segera tidur karena ia sangat bersemangat untuk pergi berkemah besok",
    isModal: {
      wordTitle: "",
      photo: "", // untuk modal
      isGif: "",
      iconImage: "", // untuk koleksi kata (mewarnai) /  default container image index-0
      containerImage: [""],
    },
    isDialogAyah: "",
    isChoise: {
      setIndex: "",
      pattern: [
        {
          type: "",
          iconImage: "",
          setBackground: "",
          wordTitle: "",
        },
        {
          type: "",
          iconImage: "",
          setBackground: "",
          wordTitle: "",
        },
      ],
    },
  },

  {
    // scene ke 15
    finish: false,
    navigationNext: true,
    navigationBack: true,
    narasi: true,
    dialogAyah: false,
    objekModal: false,
    choise: false,
    isBackground: "background-kamping-11.jpg",
    isNarasi: "Keesokan harinya...",
    isModal: {
      wordTitle: "",
      photo: "", // untuk modal
      isGif: "",
      iconImage: "", // untuk koleksi kata (mewarnai) /  default container image index-0
      containerImage: [],
    },
    isDialogAyah: "",
    isChoise: {
      setIndex: "",
      pattern: [
        {
          wordTitle: "Tenda",
          type: "",
          iconImage: "",
          setBackground: "",
        },
        {
          wordTitle: "Tenda",
          type: "",
          iconImage: "",
          setBackground: "",
        },
      ],
    },
  },
  {
    // scene ke 16
    finish: false,
    navigationNext: true,
    navigationBack: true,
    narasi: true,
    dialogAyah: false,
    objekModal: false,
    choise: false,
    isBackground: "background-kamping-12.jpg",
    isNarasi:
      "Setelah selesai sarapan, Budi, Ayah dan Ibu pun langsung berangkat untuk berkemah",
    isModal: {
      wordTitle: "",
      photo: "", // untuk modal
      isGif: "",
      iconImage: "", // untuk koleksi kata (mewarnai) /  default container image index-0
      containerImage: [],
    },
    isDialogAyah: "",
    isChoise: {
      setIndex: "",
      pattern: [
        {
          wordTitle: "Tenda",
          type: "",
          iconImage: "",
          setBackground: "",
        },
        {
          wordTitle: "Tenda",
          type: "",
          iconImage: "",
          setBackground: "",
        },
      ],
    },
  },
  {
    // scene ke 17
    finish: false,
    navigationNext: true,
    navigationBack: true,
    narasi: false,
    dialogAyah: true,
    objekModal: false,
    choise: false,
    isBackground: "background-kamping-13.jpg",
    isNarasi: "",
    isModal: {
      wordTitle: "",
      photo: "", // untuk modal
      isGif: "",
      iconImage: "", // untuk koleksi kata (mewarnai) /  default container image index-0
      containerImage: [],
    },
    isDialogAyah: "Budi kamu mau naik apa ke pantai?",
    isChoise: {
      setIndex: "",
      pattern: [
        {
          wordTitle: "Tenda",
          type: "",
          iconImage: "",
          setBackground: "",
        },
        {
          wordTitle: "Tenda",
          type: "",
          iconImage: "",
          setBackground: "",
        },
      ],
    },
  },
  {
    // scene ke 18
    finish: false,
    navigationNext: false,
    navigationBack: false,
    narasi: false,
    dialogAyah: false,
    objekModal: false,
    choise: true,
    isBackground: "background-kamping-14",
    isNarasi: "",
    isModal: {
      wordTitle: "",
      photo: "", // untuk modal
      isGif: "",
      iconImage: "", // untuk koleksi kata (mewarnai) /  default container image index-0
      containerImage: [],
    },
    isDialogAyah: "",
    isChoise: {
      setIndex: 15,
      pattern: [
        {
          type: "A",
          iconImage: "mobil-default",
          setBackground: "background-kamping-15",
        },
        {
          type: "B",
          iconImage: "bus-default",
          setBackground: "background-kamping-15",
        },
      ],
    },
  },
  {
    // scene ke 19
    finish: false,
    navigationNext: true,
    navigationBack: true,
    narasi: true,
    dialogAyah: false,
    objekModal: false,
    choise: false,
    isBackground: "background-kamping-15.jpg",
    isNarasi: "Selama perjalanan, Budi asyik melihat pemandangan yang indah",
    isModal: {
      wordTitle: "",
      photo: "", // untuk modal
      isGif: "",
      iconImage: "", // untuk koleksi kata (mewarnai) /  default container image index-0
      containerImage: [],
    },
    isDialogAyah: "",
    isChoise: {
      setIndex: "",
      pattern: [
        {
          wordTitle: "Tenda",
          type: "",
          iconImage: "",
          setBackground: "",
        },
        {
          wordTitle: "Tenda",
          type: "",
          iconImage: "",
          setBackground: "",
        },
      ],
    },
  },
  {
    // scene ke 20
    finish: false,
    navigationNext: true,
    navigationBack: true,
    narasi: true,
    dialogAyah: false,
    objekModal: false,
    choise: false,
    isBackground: "background-kamping-16.jpg",
    isNarasi: "Tak lama kemudian, budi, ayah dan ibu sampai di tempat berkemah",
    isModal: {
      wordTitle: "",
      photo: "", // untuk modal
      isGif: "",
      iconImage: "", // untuk koleksi kata (mewarnai) /  default container image index-0
      containerImage: [],
    },
    isDialogAyah: "",
    isChoise: {
      setIndex: "",
      pattern: [
        {
          wordTitle: "Tenda",
          type: "",
          iconImage: "",
          setBackground: "",
        },
        {
          wordTitle: "Tenda",
          type: "",
          iconImage: "",
          setBackground: "",
        },
      ],
    },
  },
  {
    // scene ke 21A -21B
    finish: false,
    navigationNext: false,
    navigationBack: false,
    narasi: false,
    dialogAyah: true,
    objekModal: true,
    choise: false,
    isBackground: "background-kamping-17.jpg",
    isNarasi: "",
    isModal: {
      wordTitle: "Tenda",
      photo: "tenda-default", // untuk modal
      isGif: "eja-tenda",
      iconImage: "tenda-default", // untuk koleksi kata (mewarnai) /  default container image index-0
      containerImage: [
        "tenda-default",
        "tenda-merah",
        "tenda-kuning",
        "tenda-hijau",
        "tenda-biru",
        "tenda-dongker",
        "tenda-ungu",
      ],
    },
    isDialogAyah:
      "Hmmm sebelum memulai berkemah apa yang kita siapkan terlebih dahulu Budi?",
    isChoise: {
      setIndex: "",
      pattern: [
        {
          wordTitle: "",
          type: "",
          iconImage: "",
          setBackground: "",
        },
        {
          wordTitle: " ",
          type: "",
          iconImage: "",
          setBackground: "",
        },
      ],
    },
  },
  {
    // scene ke 23A -23B
    finish: false,
    navigationNext: true,
    navigationBack: true,
    narasi: true,
    dialogAyah: false,
    objekModal: false,
    choise: false,
    isBackground: "background-kamping-18.jpg",
    isNarasi:
      "Setelah memasang tenda, Budi dan ayah di panggil ibu untuk makan siang bersama",
    isModal: {
      wordTitle: "",
      photo: "", // untuk modal
      isGif: "",
      iconImage: "", // untuk koleksi kata (mewarnai) /  default container image index-0
      containerImage: [],
    },
    isDialogAyah: "",
    isChoise: {
      setIndex: "",
      pattern: [
        {
          wordTitle: "",
          type: "",
          iconImage: "",
          setBackground: "",
        },
        {
          wordTitle: " ",
          type: "",
          iconImage: "",
          setBackground: "",
        },
      ],
    },
  },
  {
    // scene ke 24A -24B
    finish: false,
    navigationNext: true,
    navigationBack: true,
    narasi: true,
    dialogAyah: false,
    objekModal: false,
    choise: false,
    isBackground: "background-kamping-19.jpg",
    isNarasi:
      "Selesai makan siang, ayah mengajak budi untuk berjalan - jalan dan bermain di sekitar tempat berkemah",
    isModal: {
      wordTitle: "",
      photo: "", // untuk modal
      isGif: "",
      iconImage: "", // untuk koleksi kata (mewarnai) /  default container image index-0
      containerImage: [],
    },
    isDialogAyah: "",
    isChoise: {
      setIndex: "",
      pattern: [
        {
          wordTitle: "",
          type: "",
          iconImage: "",
          setBackground: "",
        },
        {
          wordTitle: " ",
          type: "",
          iconImage: "",
          setBackground: "",
        },
      ],
    },
  },
  {
    // scene ke 25A -25B
    finish: true,
    navigationNext: true,
    navigationBack: true,
    narasi: false,
    dialogAyah: false,
    objekModal: false,
    choise: false,
    isBackground: "background-kamping-20.jpg",
    isNarasi: "",
    isModal: {
      wordTitle: "",
      photo: "", // untuk modal
      isGif: "",
      iconImage: "", // untuk koleksi kata (mewarnai) /  default container image index-0
      containerImage: [],
    },
    isDialogAyah: "",
    isChoise: {
      setIndex: "",
      pattern: [
        {
          wordTitle: "",
          type: "",
          iconImage: "",
          setBackground: "",
        },
        {
          wordTitle: " ",
          type: "",
          iconImage: "",
          setBackground: "",
        },
      ],
    },
  },
];

let fix = {
  isRead: 0,
  storyTitle: "Kamping",
  storyImage: "kamping.jpg",
  wordColletion: [
    {
      wordTitle: "asyik",
      iconImage: "asyik.jpg",
      isGif: "eja-asyik",
    },
  ],
  scene: ceritaData,
};
const dataObjects = [
  {
    number: 1,
    first: "Mark",
    last: "Otto",
    handle: "@mdo",
  },
  {
    number: 2,
    first: "Jacob",
    last: "Thornton",
    handle: "@fat",
  },
  {
    number: 3,
    first: "Larry",
    last: "the Bird",
    handle: "@twitter",
  },
];

/*
  const csvFromArrayOfObjects  = 'number,first,last,handle\n1,Mark,Otto,@mdo\n2,Jacob,Thornton,@fat\n3,Larry,the Bird,@twitter\n';
*/
const csvFromArrayOfObjects = convertArrayToCSV(ceritaData);
// console.log(csvFromArrayOfObjects);

console.log(JSON.stringify(ceritaData));

// print;
/*
  const csvFromArrayOfArrays  = 'number;first;last;handle\n1;Mark;Otto;@mdo\n2;Jacob;Thornton;@fat\n3;Larry;the Bird;@twitter\n';
*/
// const csvFromArrayOfArrays = convertArrayToCSV(dataArrays, {
//   header,
//   separator: ";",
// });
