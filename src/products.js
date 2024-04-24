const products = [
    {
        name: "joghurt",
        title: "Erdbeer Joghurt",
        shape: "rect",
        coords: [39, 59, 94, 104],
        fillColor: "rgba(0,255,0,0.2)",
        strokeColor: "black",
        img: "/src/assets/Erdbeer_joghurt.jpg"
    },
    {
        name: "haribo_jogurts",
        title: "Haribo Jogurts",
        shape: "rect",
        coords: [104, 35, 168, 100],
        fillColor: "rgba(0,255,0,0.2)",
        strokeColor: "black",
        img: "/src/assets/haribo.jpg"
    },
    {
        name: "knusper_floken",
        title: "Knusper Floken",
        shape: "rect",
        coords: [180, 38, 234, 99],
        fillColor: "rgba(0,255,0,0.2)",
        strokeColor: "black",
        img: "/src/assets/knusper.jpg"
    },
    {
        name: "mega_chok",
        title: "Mega Chok Cookies",
        shape: "rect",
        coords: [32, 113, 62, 165],
        fillColor: "rgba(0,255,0,0.2)",
        strokeColor: "black",
        img: "/src/assets/mega_chok.jpg"
    },
    {
        name: "knoppers",
        title: "Knoppers",
        shape: "rect",
        coords: [67, 127, 95, 169],
        fillColor: "rgba(0,255,0,0.2)",
        strokeColor: "black",
        img: "/src/assets/knoppers.jpg"
    },
    {
        name: "kit-kat_white",
        title: "Kit Kat White",
        shape: "rect",
        coords: [101, 121, 132, 164],
        fillColor: "rgba(0,255,0,0.2)",
        strokeColor: "black",
        img: "/src/assets/kitkat-w.jpg"
    },
    {
        name: "kit-kat",
        title: "Kit Kat",
        shape: "rect",
        coords: [138, 125, 167, 168],
        fillColor: "rgba(0,255,0,0.2)",
        strokeColor: "black",
        img: "/src/assets/kitkat.png"
    },
    {
        name: "twix",
        title: "Twix",
        shape: "rect",
        coords: [176, 114, 203, 164],
        fillColor: "rgba(0,255,0,0.2)",
        strokeColor: "black",
        img: "/src/assets/Twix.jpg"
    },
    {
        name: "m&ms",
        title: "Chocolate M & M's",
        shape: "rect",
        coords: [207, 119, 235, 167],
        fillColor: "rgba(0,255,0,0.2)",
        strokeColor: "black",
        img: "/src/assets/m&m.jpg"
    },
    {
        name: "bueno",
        title: "Bueno",
        shape: "rect",
        coords: [28, 184, 55, 242],
        fillColor: "rgba(0,255,0,0.2)",
        strokeColor: "black",
        img: "/src/assets/bueno.jpg"
    },
    {
        name: "oreo",
        title: "Oreo Cookies",
        shape: "rect",
        coords: [70, 186, 96, 242],
        fillColor: "rgba(0,255,0,0.2)",
        strokeColor: "black",
        img: "/src/assets/oreo.png"
    },
    {
        name: "snack",
        title: "Snack Bar",
        shape: "rect",
        coords: [110, 187, 134, 242],
        fillColor: "rgba(0,255,0,0.2)",
        strokeColor: "black",
        img: "/src/assets/snack.jpg"
    },
    {
        name: "corny",
        title: "Big Corny",
        shape: "rect",
        coords: [139, 184, 169, 243],
        fillColor: "rgba(0,255,0,0.2)",
        strokeColor: "black",
        img: "/src/assets/corny.jpg"
    },
    {
        name: "hanuta",
        title: "Hanuta",
        shape: "rect",
        coords: [177, 186, 202, 242],
        fillColor: "rgba(0,255,0,0.2)",
        strokeColor: "black",
        img: "/src/assets/hanuta.png"
    },
    {
        name: "bounty",
        title: "Bounty",
        shape: "rect",
        coords: [212, 185, 243, 242],
        fillColor: "rgba(0,255,0,0.2)",
        strokeColor: "black",
        img: "/src/assets/bounty.png"
    },
    {
        name: "maltesers",
        title: "Maltesers",
        shape: "rect",
        coords: [22, 274, 60, 334],
        fillColor: "rgba(0,255,0,0.2)",
        strokeColor: "black",
        img: "/src/assets/maltesers.jpg"
    },
    {
        name: "fritt",
        title: "Fritt Fruit Bar",
        shape: "rect",
        coords: [69, 272, 95, 331],
        fillColor: "rgba(0,255,0,0.2)",
        strokeColor: "black",
        img: "/src/assets/fritt.jpg"
    },
    {
        name: "creamys",
        title: "Creamys",
        shape: "rect",
        coords: [106, 269, 136, 328],
        fillColor: "rgba(0,255,0,0.2)",
        strokeColor: "black",
        img: "/src/assets/cremys.png"
    },
    {
        name: "snickers",
        title: "Snickers",
        shape: "rect",
        coords: [145, 271, 169, 327],
        fillColor: "rgba(0,255,0,0.2)",
        strokeColor: "black",
        img: "/src/assets/snickers.png"
    },
    {
        name: "mars",
        title: "Mars Bar",
        shape: "rect",
        coords: [176, 270, 204, 329],
        fillColor: "rgba(0,255,0,0.2)",
        strokeColor: "black",
        img: "/src/assets/mars.jpeg"
    },
    {
        name: "twix_xtra",
        title: "Twix Xtra",
        shape: "rect",
        coords: [213, 261, 240, 329],
        fillColor: "rgba(0,255,0,0.2)",
        strokeColor: "black",
        img: "/src/assets/twix-xtra.jpg"
    },
    {
        name: "puks",
        title: "Puk's Chocolate",
        shape: "rect",
        coords: [30, 347, 89, 395],
        fillColor: "rgba(0,255,0,0.2)",
        strokeColor: "black",
        img: "/src/assets/pucks.jpg"
    },
    {
        name: "boom_snack",
        title: "Boom Snack",
        shape: "rect",
        coords: [100, 346, 166, 395],
        fillColor: "rgba(0,255,0,0.2)",
        strokeColor: "black",
        img: "/src/assets/nach-snack.jpg"
    },
    {
        name: "brownie",
        title: "Brownies",
        shape: "rect",
        coords: [177, 357, 239, 387],
        fillColor: "rgba(0,255,0,0.2)",
        strokeColor: "black",
        img: "/src/assets/brownie.png"
    },
    {
        name: "ranger",
        title: "Bifi Ranger Burrito",
        shape: "rect",
        coords: [24, 431, 59, 503],
        fillColor: "rgba(0,255,0,0.2)",
        strokeColor: "black",
        img: "/src/assets/bifi-ranger.jpg"
    },
    {
        name: "spliker_sandwich",
        title: "Spliker Fleisenwurst 😁",
        shape: "rect",
        coords: [66, 426, 94, 498],
        fillColor: "rgba(0,255,0,0.2)",
        strokeColor: "black",
        img: "/src/assets/spilker.png"
    },
    {
        name: "ranger2",
        title: "Bifi Ranger Burrito",
        shape: "rect",
        coords: [104, 428, 130, 495],
        fillColor: "rgba(0,255,0,0.2)",
        strokeColor: "black",
        img: "/src/assets/bifi-ranger.jpg"
    },
    {
        name: "hacksteak",
        title: "Hacksteak Sandwich",
        shape: "rect",
        coords: [134, 414, 203, 498],
        fillColor: "rgba(0,255,0,0.2)",
        strokeColor: "black",
        img: "/src/assets/hacksteak.png"
    },
    {
        name: "sausage",
        title: "Kabanos Klassik Sausage",
        shape: "rect",
        coords: [208, 418, 241, 498],
        fillColor: "rgba(0,255,0,0.2)",
        strokeColor: "black",
        img: "/src/assets/kassik.jpg"
    },
    {
        name: "coke",
        title: "Coke",
        shape: "rect",
        coords: [30, 520, 66, 602],
        fillColor: "rgba(0,255,0,0.2)",
        strokeColor: "black",
        img: "/src/assets/coke.jpg"
    },
    {
        name: "lemonaide",
        title: "Lemonaide",
        shape: "rect",
        coords: [76, 524, 100, 603],
        fillColor: "rgba(0,255,0,0.2)",
        strokeColor: "black",
        img: "/src/assets/lemonaide.png"
    },
    {
        name: "mezzo",
        title: "Mezzo Mix Zero",
        shape: "rect",
        coords: [108, 523, 136, 599],
        fillColor: "rgba(0,255,0,0.2)",
        strokeColor: "black",
        img: "/src/assets/mezzo.jpg"
    },
    {
        name: "redbull",
        title: "Red Bull",
        shape: "rect",
        coords: [144, 536, 201, 602],
        fillColor: "rgba(0,255,0,0.2)",
        strokeColor: "black",
        img: "/src/assets/redbul.png"
    },
    {
        name: "banana_drink",
        title: "Banana Drink",
        shape: "rect",
        coords: [208, 520, 242, 603],
        fillColor: "rgba(0,255,0,0.2)",
        strokeColor: "black",
        img: "/src/assets/banana.jpg"
    },

]

export default products;