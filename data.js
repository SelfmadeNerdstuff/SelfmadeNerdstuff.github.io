const images = [
    {
        id: "amazona",
        image: "./img/abgeschlossene-projekte/amazona (1).jpg",
        titel: "Woman-Knight",
        status: "abgeschlossen", typ: "resin", kategorie: "tabletop", dauer: "12 Std.", introText: "", align: "",
        galerie: [
            "./img/abgeschlossene-projekte/amazona (2).jpg",
            "./img/abgeschlossene-projekte/amazona (3).jpg",
            "./img/abgeschlossene-projekte/amazona (4).jpg",
            "./img/abgeschlossene-projekte/amazona (5).jpg"
        ]
    },
    {
        id: "banana-knight",
        image: "./img/abgeschlossene-projekte/banana-knight (1).jpg",
        titel: "Banana Knight",
        status: "abgeschlossen", typ: "resin", kategorie: "tabletop", dauer: "8 Std.", introText: "", align: "",
        galerie: [
            "./img/abgeschlossene-projekte/banana-knight (2).jpg", "./img/abgeschlossene-projekte/banana-knight (3).jpg",
            "./img/abgeschlossene-projekte/banana-knight (4).jpg", "./img/abgeschlossene-projekte/banana-knight (5).jpg",
            "./img/abgeschlossene-projekte/banana-knight (6).jpg", "./img/abgeschlossene-projekte/banana-knight (7).jpg",
            "./img/abgeschlossene-projekte/banana-knight (8).jpg", "./img/abgeschlossene-projekte/banana-knight (9).jpg"
        ]
    },
    {
        id: "barb1",
        image: "./img/abgeschlossene-projekte/barb1 (1).jpg",
        titel: "Barbarin - Tabletop",
        status: "abgeschlossen", typ: "resin", kategorie: "tabletop", dauer: "8 Std.", introText: "", align: "",
        galerie: ["./img/abgeschlossene-projekte/barb1 (2).jpg", "./img/abgeschlossene-projekte/barb1 (3).jpg"]
    },
    {
        id: "baymax",
        image: "./img/abgeschlossene-projekte/baymax (1).jpg",
        titel: "Baymax - gestrickt",
        status: "abgeschlossen", typ: "fdm", kategorie: "film", dauer: "5 Std.", introText: "", align: "",
        galerie: ["./img/abgeschlossene-projekte/baymax (2).jpg", "./img/abgeschlossene-projekte/baymax (3).jpg"]
    },
    {
        id: "beast-lamp",
        image: "./img/abgeschlossene-projekte/beast-lamp (1).jpg",
        titel: "Die Schöne und das Biest - Lampe",
        status: "abgeschlossen", typ: "fdm", kategorie: "film", dauer: "6,5 Std.", introText: "", align: "",
        galerie: [
            "./img/abgeschlossene-projekte/beast-lamp (2).jpg", "./img/abgeschlossene-projekte/beast-lamp (3).jpg",
            "./img/abgeschlossene-projekte/beast-lamp (4).jpg"
        ]
    },
    {
        id: "broly",
        image: "./img/abgeschlossene-projekte/broly (1).jpg",
        titel: "Broly",
        status: "abgeschlossen", typ: "resin", kategorie: "anime, tabletop", dauer: "8 Std.", introText: "", align: "",
        galerie: [
            "./img/abgeschlossene-projekte/broly (2).jpg", "./img/abgeschlossene-projekte/broly (3).jpg",
            "./img/abgeschlossene-projekte/broly (4).jpg", "./img/abgeschlossene-projekte/broly (5).jpg",
            "./img/abgeschlossene-projekte/broly (6).jpg", "./img/abgeschlossene-projekte/broly (7).jpg"
        ]
    },
    {
        id: "cap",
        image: "./img/abgeschlossene-projekte/cap (1).jpg",
        titel: "Captain America",
        status: "abgeschlossen", typ: "resin", kategorie: "film, tabletop", dauer: "8 Std.", introText: "", align: "",
        galerie: [
            "./img/abgeschlossene-projekte/cap (2).jpg", "./img/abgeschlossene-projekte/cap (3).jpg",
            "./img/abgeschlossene-projekte/cap (4).jpg", "./img/abgeschlossene-projekte/cap (5).jpg"
        ]
    },
    {
        id: "cat-abstract",
        image: "./img/abgeschlossene-projekte/cat-abstract (1).jpg",
        titel: "Katze - Abstrakt",
        status: "abgeschlossen", typ: "fdm", kategorie: "dekoration", dauer: "4 Std.", introText: "", align: "",
        galerie: ["./img/abgeschlossene-projekte/cat-abstract (2).jpg"]
    },
    {
        id: "cat-samurai",
        image: "./img/abgeschlossene-projekte/cat-samurai (1).jpg",
        titel: "Katze - Samurai",
        status: "abgeschlossen", typ: "fdm", kategorie: "dekoration", dauer: "4 Std.", introText: "", align: "",
        galerie: ["./img/abgeschlossene-projekte/cat-samurai (2).jpg", "./img/abgeschlossene-projekte/cat-samurai (3).jpg"]
    },
    {
        id: "chang",
        image: "./img/abgeschlossene-projekte/chang (1).jpg",
        titel: "Shang-Chi",
        status: "abgeschlossen", typ: "resin", kategorie: "film, tabletop", dauer: "8 Std.", introText: "", align: "",
        galerie: [
            "./img/abgeschlossene-projekte/chang (2).jpg", "./img/abgeschlossene-projekte/chang (3).jpg",
            "./img/abgeschlossene-projekte/chang (4).jpg", "./img/abgeschlossene-projekte/chang (5).jpg"
        ]
    },
    {
        id: "chibi-kaiju",
        image: "./img/abgeschlossene-projekte/chibi-kaiju (1).jpg",
        titel: "Kaiju Nr. 8 - Chibi",
        status: "abgeschlossen", typ: "resin", kategorie: "anime", dauer: "12 Std.", introText: "", align: "",
        galerie: [
            "./img/abgeschlossene-projekte/chibi-kaiju (2).jpg", "./img/abgeschlossene-projekte/chibi-kaiju (3).jpg",
            "./img/abgeschlossene-projekte/chibi-kaiju (4).jpg", "./img/abgeschlossene-projekte/chibi-kaiju (5).jpg"
        ]
    },
    {
        id: "cosmo",
        image: "./img/abgeschlossene-projekte/cosmo (1).jpg",
        titel: "Cosmo",
        status: "abgeschlossen", typ: "resin", kategorie: "film, tabletop", dauer: "8 Std.", introText: "", align: "",
        galerie: [
            "./img/abgeschlossene-projekte/cosmo (2).jpg", "./img/abgeschlossene-projekte/cosmo (3).jpg",
            "./img/abgeschlossene-projekte/cosmo (4).jpg"
        ]
    },
    {
        id: "dandadan",
        image: "./img/abgeschlossene-projekte/dandadan (1).jpg",
        titel: "Momo & Ken - Dandadan",
        status: "abgeschlossen", typ: "resin", kategorie: "anime", dauer: "24 Std.", introText: "", align: "",
        galerie: [
            "./img/abgeschlossene-projekte/dandadan (2).jpg", "./img/abgeschlossene-projekte/dandadan (3).jpg"
        ]
    },
    {
        id: "destro",
        image: "./img/abgeschlossene-projekte/destro (1).jpg",
        titel: "Destroyer",
        status: "abgeschlossen", typ: "resin", kategorie: "anime", dauer: "8 Std.", introText: "", align: "",
        galerie: [
            "./img/abgeschlossene-projekte/destro (2).jpg", "./img/abgeschlossene-projekte/destro (3).jpg",
            "./img/abgeschlossene-projekte/destro (4).jpg"
        ]
    },
    {
        id: "dicebox",
        image: "./img/abgeschlossene-projekte/dicebox (1).jpg",
        titel: "Würfelbox - D20",
        status: "abgeschlossen", typ: "fdm", kategorie: "gaming, tabletop", dauer: "3 Std.", introText: "", align: "",
        galerie: [
            "./img/abgeschlossene-projekte/dicebox (2).jpg", "./img/abgeschlossene-projekte/dicebox (3).jpg",
            "./img/abgeschlossene-projekte/dicebox (4).jpg"
        ]
    },
    {
        id: "dicetowerdrache",
        image: "./img/abgeschlossene-projekte/dicetowerdrache (1).jpg",
        titel: "Dicetower - Drache",
        status: "abgeschlossen", typ: "resin", kategorie: "gaming, tabletop", dauer: "15 Std.", introText: "", align: "",
        galerie: [
            "./img/abgeschlossene-projekte/dicetowerdrache (2).jpg", "./img/abgeschlossene-projekte/dicetowerdrache (3).jpg",
            "./img/abgeschlossene-projekte/dicetowerdrache (4).jpg"
        ]
    },
    {
        id: "dicewitcher",
        image: "./img/abgeschlossene-projekte/dicewitcher (1).jpg",
        titel: "Dicetower - Witcher",
        status: "abgeschlossen", typ: "fdm", kategorie: "gaming, tabletop, film", dauer: "8 Std.", introText: "", align: "",
        galerie: [
            "./img/abgeschlossene-projekte/dicewitcher (2).jpg", "./img/abgeschlossene-projekte/dicewitcher (3).jpg",
            "./img/abgeschlossene-projekte/dicewitcher (4).jpg", "./img/abgeschlossene-projekte/dicewitcher (5).jpg",
        ]
    },
    {
        id: "dnd-mage",
        image: "./img/abgeschlossene-projekte/dnd-mage.jpg",
        titel: "DnD - Magierin",
        status: "abgeschlossen", typ: "resin", kategorie: "tabletop", dauer: "7 Std.", introText: "", align: "",
        galerie: []
    },
    {
        id: "dnddice",
        image: "./img/abgeschlossene-projekte/dnddice (1).jpg",
        titel: "Würfeltower - D20",
        status: "abgeschlossen", typ: "fdm", kategorie: "gaming, tabletop", dauer: "18 Std.", introText: "", align: "",
        galerie: [
            "./img/abgeschlossene-projekte/dnddice (4).jpg", "./img/abgeschlossene-projekte/dnddice (5).jpg",
            "./img/abgeschlossene-projekte/dnddice (6).jpg", "./img/abgeschlossene-projekte/dnddice (7).jpg",
            "./img/abgeschlossene-projekte/dnddice (8).jpg", "./img/abgeschlossene-projekte/dnddice (9).jpg",
        ]
    },
    {
        id: "dndtracker",
        image: "./img/abgeschlossene-projekte/dndtracker (1).jpg",
        titel: "DnD - Zaubertracker",
        status: "abgeschlossen", typ: "fdm", kategorie: "gaming, tabletop", dauer: "4 Std.", introText: "", align: "",
        galerie: [
            "./img/abgeschlossene-projekte/dndtracker (2).jpg", "./img/abgeschlossene-projekte/dndtracker (3).jpg",
            "./img/abgeschlossene-projekte/dndtracker (4).jpg", 
            "./img/abgeschlossene-projekte/dndtracker (6).jpg"
        ]
    },
    {
        id: "dogs",
        image: "./img/abgeschlossene-projekte/dogs (1).jpg",
        titel: "Hunde",
        status: "abgeschlossen", typ: "resin", kategorie: "dekoration, sonstiges", dauer: "6 Std.", introText: "", align: "",
        galerie: ["./img/abgeschlossene-projekte/dogs (2).jpg", "./img/abgeschlossene-projekte/dogs (3).jpg"]
    },
    {
        id: "dragon-lamp",
        image: "./img/abgeschlossene-projekte/dragon-lamp (1).jpg",
        titel: "Drache - Lampe",
        status: "abgeschlossen", typ: "fdm", kategorie: "dekoration, sonstiges", dauer: "7 Std.", introText: "", align: "",
        galerie: [
            "./img/abgeschlossene-projekte/dragon-lamp (2).jpg", "./img/abgeschlossene-projekte/dragon-lamp (3).jpg",
            "./img/abgeschlossene-projekte/dragon-lamp (4).jpg", "./img/abgeschlossene-projekte/dragon-lamp (5).jpg",
            "./img/abgeschlossene-projekte/dragon-lamp (6).jpg"
        ]
    },
    {
        id: "DrStr",
        image: "./img/abgeschlossene-projekte/DrStr (1).jpg",
        titel: "Doctor Strange",
        status: "abgeschlossen", typ: "resin", kategorie: "film, tabletop", dauer: "30 Std.", introText: "", align: "",
        galerie: [
            "./img/abgeschlossene-projekte/DrStr (2).jpg", "./img/abgeschlossene-projekte/DrStr (3).jpg",
            "./img/abgeschlossene-projekte/DrStr (4).jpg", "./img/abgeschlossene-projekte/DrStr (5).jpg",
            "./img/abgeschlossene-projekte/DrStr (6).jpg", "./img/abgeschlossene-projekte/DrStr (7).jpg",
            "./img/abgeschlossene-projekte/DrStr (8).jpg", "./img/abgeschlossene-projekte/DrStr (9).jpg"
        ]
    },
    {
        id: "druid",
        image: "./img/abgeschlossene-projekte/druid (1).jpg",
        titel: "Druidin - Tabletop",
        status: "abgeschlossen", typ: "resin", kategorie: "tabletop", dauer: "16 Std.", introText: "", align: "",
        galerie: [
            "./img/abgeschlossene-projekte/druid (2).jpg", "./img/abgeschlossene-projekte/druid (3).jpg",
            "./img/abgeschlossene-projekte/druid (4).jpg", "./img/abgeschlossene-projekte/druid (5).jpg",
            "./img/abgeschlossene-projekte/druid (6).jpg", "./img/abgeschlossene-projekte/druid (7).jpg",
            "./img/abgeschlossene-projekte/druid (8).jpg", "./img/abgeschlossene-projekte/druid (9).jpg"
        ]
    },
    {
        id: "duo-cat",
        image: "./img/abgeschlossene-projekte/duo-cat.jpg",
        titel: "Katze - Duo",
        status: "abgeschlossen", typ: "fdm", kategorie: "dekoration, sonstiges", dauer: "5 Std.", introText: "", align: "",
        galerie: []
    },
    {
        id: "exodia",
        image: "./img/abgeschlossene-projekte/exodia (1).jpg",
        titel: "Exodia",
        status: "abgeschlossen", typ: "resin", kategorie: "anime, tabletop", dauer: "30 Std.", introText: "", align: "",
        galerie: [
            "./img/abgeschlossene-projekte/exodia (2).jpg", "./img/abgeschlossene-projekte/exodia (3).jpg",
            "./img/abgeschlossene-projekte/exodia (4).jpg", "./img/abgeschlossene-projekte/exodia (5).jpg",
            "./img/abgeschlossene-projekte/exodia (6).jpg", "./img/abgeschlossene-projekte/exodia (7).jpg",
            "./img/abgeschlossene-projekte/exodia (8).jpg", "./img/abgeschlossene-projekte/exodia (9).jpg"
        ]
    },
    {
        id: "fufur",
        image: "./img/abgeschlossene-projekte/fufur (1).jpg",
        titel: "Fuchur",
        status: "abgeschlossen", typ: "fdm", kategorie: "film", dauer: "4 Std.", introText: "", align: "",
        galerie: ["./img/abgeschlossene-projekte/fufur (2).jpg"]
    },
    {
        id: "gandalf",
        image: "./img/abgeschlossene-projekte/gandalf (1).jpg",
        titel: "Gandalf - Klemmbaustein",
        status: "abgeschlossen", typ: "fdm", kategorie: "film", dauer: "18 Std.", introText: "", align: "",
        galerie: [
            "./img/abgeschlossene-projekte/gandalf (2).jpg", "./img/abgeschlossene-projekte/gandalf (3).jpg",
            "./img/abgeschlossene-projekte/gandalf (4).jpg"
        ]
    },
    {
        id: "gg",
        image: "./img/abgeschlossene-projekte/gg (1).jpg",
        titel: "Gengar",
        status: "abgeschlossen", typ: "resin", kategorie: "film, tabletop", dauer: "14 Std.", introText: "", align: "",
        galerie: [
            "./img/abgeschlossene-projekte/gg (2).jpg", "./img/abgeschlossene-projekte/gg (3).jpg",
            "./img/abgeschlossene-projekte/gg (4).jpg"
        ]
    },
    {
        id: "gothowl",
        image: "./img/abgeschlossene-projekte/gothowl (1).jpg",
        titel: "Eule - Gothic",
        status: "abgeschlossen", typ: "fdm", kategorie: "dekoration", dauer: "7 Std.", introText: "", align: "",
        galerie: [
            "./img/abgeschlossene-projekte/gothowl (2).jpg", "./img/abgeschlossene-projekte/gothowl (3).jpg",
            "./img/abgeschlossene-projekte/gothowl (4).jpg"
        ]
    },
    {
        id: "hdr-key",
        image: "./img/abgeschlossene-projekte/hdr-key (1).jpg",
        titel: "Thorins Schlüssel",
        status: "abgeschlossen", typ: "fdm", kategorie: "film", dauer: "3 Std.", introText: "", align: "",
        galerie: ["./img/abgeschlossene-projekte/hdr-key (2).jpg", "./img/abgeschlossene-projekte/hdr-key (3).jpg"]
    },
    {
        id: "hdr-wächter",
        image: "./img/abgeschlossene-projekte/hdr-wächter (1).jpg",
        titel: "Die Argonath - „Tor der Könige“",
        status: "abgeschlossen", typ: "fdm", kategorie: "film", dauer: "5 Std.", introText: "", align: "",
        galerie: [
            "./img/abgeschlossene-projekte/hdr-wächter (2).jpg", "./img/abgeschlossene-projekte/hdr-wächter (3).jpg",
            "./img/abgeschlossene-projekte/hdr-wächter (4).jpg"
        ]
    },
    {
        id: "house1",
        image: "./img/abgeschlossene-projekte/house1 (1).jpg",
        titel: "Haus 1 - Tabletop",
        status: "abgeschlossen", typ: "fdm", kategorie: "tabletop", dauer: "4 Std.", introText: "", align: "",
        galerie: ["./img/abgeschlossene-projekte/house1 (2).jpg"]
    },
    {
        id: "house2",
        image: "./img/abgeschlossene-projekte/house2 (1).jpg",
        titel: "Haus 2 - Tabletop",
        status: "abgeschlossen", typ: "fdm", kategorie: "tabletop", dauer: "5 Std.", introText: "", align: "",
        galerie: ["./img/abgeschlossene-projekte/house2 (2).jpg"]
    },
    {
        id: "human-dog",
        image: "./img/abgeschlossene-projekte/human-dog (2).jpg",
        titel: "Human with Dog - Tabletop",
        status: "abgeschlossen", typ: "resin", kategorie: "tabletop", dauer: "6 Std.", introText: "", align: "",
        galerie: []
    },
    {
        id: "human-woman",
        image: "./img/abgeschlossene-projekte/human-woman (1).jpg",
        titel: "Woman - Tabletop",
        status: "abgeschlossen", typ: "resin", kategorie: "tabletop", dauer: "6 Std.", introText: "", align: "",
        galerie: ["./img/abgeschlossene-projekte/human-woman (2).jpg", "./img/abgeschlossene-projekte/human-woman (3).jpg"]
    },
    {
        id: "human1",
        image: "./img/abgeschlossene-projekte/human1 (1).jpg",
        titel: "Human - Tabletop",
        status: "abgeschlossen", typ: "resin", kategorie: "tabletop", dauer: "6 Std.", introText: "", align: "",
        galerie: ["./img/abgeschlossene-projekte/human1 (2).jpg"]
    },
    {
        id: "jp",
        image: "./img/abgeschlossene-projekte/jp (1).jpg",
        titel: "Jack Sparrow",
        status: "abgeschlossen", typ: "resin", kategorie: "film", dauer: "18 Std.", introText: "", align: "",
        align: "top",
        galerie: [
            "./img/abgeschlossene-projekte/jp (2).jpg", "./img/abgeschlossene-projekte/jp (3).jpg"
        ]
    },
    {
        id: "JtS",
        image: "./img/abgeschlossene-projekte/JtS (1).jpg",
        titel: "Jack Skellington - Klemmbaustein",
        status: "abgeschlossen", typ: "fdm", kategorie: "gaming, film, tabletop", dauer: "18 Std.", introText: "", align: "",
        galerie: [
            "./img/abgeschlossene-projekte/JtS (2).jpg", "./img/abgeschlossene-projekte/JtS (3).jpg",
            "./img/abgeschlossene-projekte/JtS (4).jpg", "./img/abgeschlossene-projekte/JtS (5).jpg"
        ]
    },
    {
        id: "kaiju",
        image: "./img/abgeschlossene-projekte/kaiju (1).jpg",
        titel: "Kaiju Nr. 8",
        status: "abgeschlossen", typ: "resin", kategorie: "anime", dauer: "22 Std.", introText: "", align: "",
        galerie: [
            "./img/abgeschlossene-projekte/kaiju (2).jpg", "./img/abgeschlossene-projekte/kaiju (3).jpg",
            "./img/abgeschlossene-projekte/kaiju (4).jpg", "./img/abgeschlossene-projekte/kaiju (5).jpg",
            "./img/abgeschlossene-projekte/kaiju (6).jpg", "./img/abgeschlossene-projekte/kaiju (7).jpg",
            "./img/abgeschlossene-projekte/kaiju (8).jpg"
        ]
    },
    {
        id: "kaktor",
        image: "./img/abgeschlossene-projekte/kaktor (1).jpg",
        titel: "Kaktor - Final Fantasy",
        status: "abgeschlossen", typ: "fdm", kategorie: "gaming, tabletop", dauer: "4 Std.", introText: "", align: "",
        galerie: [
            "./img/abgeschlossene-projekte/kaktor (2).jpg", "./img/abgeschlossene-projekte/kaktor (3).jpg",
            "./img/abgeschlossene-projekte/kaktor (4).jpg"
        ]
    },
    {
        id: "keltbox",
        image: "./img/abgeschlossene-projekte/keltbox (1).jpg",
        titel: "Keltische Box",
        status: "abgeschlossen", typ: "fdm", kategorie: "dekoration, sonstiges", dauer: "15 Std.", introText: "", align: "",
        galerie: [
            "./img/abgeschlossene-projekte/keltbox (2).jpg", "./img/abgeschlossene-projekte/keltbox (3).jpg",
            "./img/abgeschlossene-projekte/keltbox (4).jpg"
        ]
    },
    {
        id: "kot",
        image: "./img/abgeschlossene-projekte/kot.jpg",
        titel: "Kot",
        status: "abgeschlossen", typ: "fdm", kategorie: "anime, tabletop", dauer: "3 Std.", introText: "", align: "",
        galerie: []
    },
    {
        id: "lama-drink",
        image: "./img/abgeschlossene-projekte/lama-drink (1).jpg",
        titel: "Ein Königreich für ein Lama - Gift",
        status: "abgeschlossen", typ: "fdm", kategorie: "dekoration, sonstiges", dauer: "4 Std.", introText: "", align: "",
        galerie: ["./img/abgeschlossene-projekte/lama-drink (2).jpg"]
    },
    {
        id: "mage",
        image: "./img/abgeschlossene-projekte/mage (1).jpg",
        titel: "Schwarzes Magiermädchen",
        status: "abgeschlossen", typ: "resin", kategorie: "tabletop", dauer: "14 Std.", introText: "", align: "",
        galerie: [
            "./img/abgeschlossene-projekte/mage (2).jpg", "./img/abgeschlossene-projekte/mage (3).jpg",
            "./img/abgeschlossene-projekte/mage (4).jpg", "./img/abgeschlossene-projekte/mage (5).jpg",
            "./img/abgeschlossene-projekte/mage (6).jpg", "./img/abgeschlossene-projekte/mage (7).jpg",
            "./img/abgeschlossene-projekte/mage (8).jpg", "./img/abgeschlossene-projekte/mage (9).jpg",
            "./img/abgeschlossene-projekte/mage (10).jpg"
        ]
    },
    {
        id: "marvl-group1",
        image: "./img/abgeschlossene-projekte/marvl-group1.jpg",
        titel: "Marvel - Gruppe",
        status: "abgeschlossen", typ: "resin", kategorie: "film, tabletop", dauer: "", introText: "", align: "",
        galerie: []
    },
    {
        id: "mel",
        image: "./img/abgeschlossene-projekte/mel (1).jpg",
        titel: "Meliodas",
        status: "abgeschlossen", typ: "resin", kategorie: "anime, tabletop", dauer: "5 Std.", introText: "", align: "",
        galerie: [
            "./img/abgeschlossene-projekte/mel (2).jpg", "./img/abgeschlossene-projekte/mel (3).jpg",
            "./img/abgeschlossene-projekte/mel (4).jpg"
        ]
    },
    {
        id: "metgrey",
        image: "./img/abgeschlossene-projekte/metgrey (1).jpg",
        titel: "MetalGreymon",
        status: "abgeschlossen", typ: "fdm", kategorie: "anime", dauer: "41 Std.", introText: "", align: "",
        galerie: [
            "./img/abgeschlossene-projekte/metgrey (2).jpg", "./img/abgeschlossene-projekte/metgrey (3).jpg",
            "./img/abgeschlossene-projekte/metgrey (4).jpg", "./img/abgeschlossene-projekte/metgrey (5).jpg",
            "./img/abgeschlossene-projekte/metgrey (6).jpg", "./img/abgeschlossene-projekte/metgrey (7).jpg",
            "./img/abgeschlossene-projekte/metgrey (8).jpg"
        ]
    },
    {
        id: "might",
        image: "./img/abgeschlossene-projekte/might (1).jpg",
        titel: "All Might",
        status: "abgeschlossen", typ: "resin", kategorie: "anime, tabletop", dauer: "18 Std.", introText: "", align: "",
        galerie: ["./img/abgeschlossene-projekte/might (2).jpg", "./img/abgeschlossene-projekte/might (3).jpg"]
    },
    {
        id: "mimic-present",
        image: "./img/abgeschlossene-projekte/mimic-present (1).jpg",
        titel: "Mimic - Geschenkbox",
        status: "abgeschlossen", typ: "fdm", kategorie: "gaming, tabletop", dauer: "5 Std.", introText: "", align: "",
        galerie: [
            "./img/abgeschlossene-projekte/mimic-present (2).jpg", "./img/abgeschlossene-projekte/mimic-present (3).jpg",
            "./img/abgeschlossene-projekte/mimic-present (4).jpg"
        ]
    },
    {
        id: "miniasT",
        image: "./img/abgeschlossene-projekte/miniasT (1).jpg",
        titel: "Minas Tirith",
        status: "abgeschlossen", typ: "fdm", kategorie: "tabletop", dauer: "8 Std.", introText: "", align: "",
        galerie: [
            "./img/abgeschlossene-projekte/miniasT (2).jpg", "./img/abgeschlossene-projekte/miniasT (3).jpg",
            "./img/abgeschlossene-projekte/miniasT (4).jpg", "./img/abgeschlossene-projekte/miniasT (5).jpg"
        ]
    },
    {
        id: "owl1",
        image: "./img/abgeschlossene-projekte/owl1 (1).jpg",
        titel: "Eule - Schriftrolle",
        status: "abgeschlossen", typ: "fdm", kategorie: "dekoration", dauer: "4 Std.", introText: "", align: "",
        galerie: ["./img/abgeschlossene-projekte/owl1 (2).jpg"]
    },
    {
        id: "pant",
        image: "./img/abgeschlossene-projekte/pant (1).jpg",
        titel: "Zombie - Black Panther",
        status: "abgeschlossen", typ: "resin", kategorie: "dekoration", dauer: "7 Std.", introText: "", align: "",
        galerie: ["./img/abgeschlossene-projekte/pant (2).jpg", "./img/abgeschlossene-projekte/pant (3).jpg"]
    },
    {
        id: "pikash",
        image: "./img/abgeschlossene-projekte/pikash (1).jpg",
        titel: "Pikashi",
        status: "abgeschlossen", typ: "resin", kategorie: "anime", dauer: "16 Std.", introText: "", align: "",
        galerie: [
            "./img/abgeschlossene-projekte/pikash (2).jpg", "./img/abgeschlossene-projekte/pikash (3).jpg",
            "./img/abgeschlossene-projekte/pikash (4).jpg"
        ]
    },
    {
        id: "samurai",
        image: "./img/abgeschlossene-projekte/samurai (1).jpg",
        titel: "Samurai - Abstrakt",
        status: "abgeschlossen", typ: "fdm", kategorie: "tabletop", dauer: "5 Std.", introText: "", align: "",
        galerie: [
            "./img/abgeschlossene-projekte/samurai (2).jpg", "./img/abgeschlossene-projekte/samurai (3).jpg",
            "./img/abgeschlossene-projekte/samurai (4).jpg"
        ]
    },
    {
        id: "sleepcat",
        image: "./img/abgeschlossene-projekte/sleepcat.jpg",
        titel: "Schlafende Katze",
        status: "abgeschlossen", typ: "fdm", kategorie: "dekoration", dauer: "4 Std.", introText: "", align: "",
        galerie: []
    },
    {
        id: "stan",
        image: "./img/abgeschlossene-projekte/stan (1).jpg",
        titel: "Stan Lee",
        status: "abgeschlossen", typ: "resin", kategorie: "film", dauer: "6 Std.", introText: "", align: "",
        galerie: [
            "./img/abgeschlossene-projekte/stan (2).jpg", "./img/abgeschlossene-projekte/stan (3).jpg",
            "./img/abgeschlossene-projekte/stan (4).jpg", "./img/abgeschlossene-projekte/stan (5).jpg"
        ]
    },
    {
        id: "token",
        image: "./img/abgeschlossene-projekte/token.jpg",
        titel: "Fluch der Karibik - Verfluchte Münzen",
        status: "abgeschlossen", typ: "fdm", kategorie: "film, tabletop", dauer: "2 Std.", introText: "", align: "",
        galerie: []
    },
    {
        id: "untersetzer1",
        image: "./img/abgeschlossene-projekte/untersetzer1.jpg",
        titel: "Warhammer 40 - Untersetzer - Space Marines",
        status: "abgeschlossen", typ: "fdm", kategorie: "gaming, tabletop", dauer: "4 Std.", introText: "", align: "",
        galerie: []
    },
    {
        id: "untersetzer2",
        image: "./img/abgeschlossene-projekte/untersetzer2.jpg",
        titel: "Warhammer 40 - Untersetzer - Orks",
        status: "abgeschlossen", typ: "fdm", kategorie: "gaming, tabletop", dauer: "4 Std.", introText: "", align: "",
        galerie: []
    },
    {
        id: "untersetzer3",
        image: "./img/abgeschlossene-projekte/untersetzer3.jpg",
        titel: "Warhammer 40 - Untersetzer - Space Marines 2",
        status: "abgeschlossen", typ: "fdm", kategorie: "gaming, tabletop", dauer: "4 Std.", introText: "", align: "",
        galerie: []
    },
    {
        id: "visitenkarte",
        image: "./img/abgeschlossene-projekte/visitenkarte (1).jpg",
        titel: "Visitenkartenhalter - Drache",
        status: "abgeschlossen", typ: "fdm", kategorie: "dekoration, sonstiges", dauer: "6 Std.", introText: "", align: "",
        galerie: [
            "./img/abgeschlossene-projekte/visitenkarte (2).jpg", "./img/abgeschlossene-projekte/visitenkarte (3).jpg",
            "./img/abgeschlossene-projekte/visitenkarte (4).jpg", "./img/abgeschlossene-projekte/visitenkarte (5).jpg"
        ]
    },
    {
        id: "VvsB",
        image: "./img/abgeschlossene-projekte/VvsB (1).jpg",
        titel: "Vegeta vs. Broly",
        status: "abgeschlossen", typ: "resin", kategorie: "anime", dauer: "19 Std.", introText: "", align: "",
        galerie: ["./img/abgeschlossene-projekte/VvsB (2).jpg"]
    },
    {
        id: "what",
        image: "./img/abgeschlossene-projekte/what.jpg",
        titel: "Katze - Untersetzer",
        status: "abgeschlossen", typ: "fdm", kategorie: "dekoration, sonstiges", dauer: "4 Std.", introText: "", align: "",
        galerie: []
    },
    {
        id: "zomb1",
        image: "./img/abgeschlossene-projekte/zomb1 (1).jpg",
        titel: "Zombie 1 - Tabletop",
        status: "abgeschlossen", typ: "resin", kategorie: "tabletop", dauer: "8 Std.", introText: "", align: "",
        galerie: ["./img/abgeschlossene-projekte/zomb1 (2).jpg"]
    },
    {
        id: "zomb2",
        image: "./img/abgeschlossene-projekte/zomb2 (1).jpg",
        titel: "Zombie 2 - Tabletop",
        status: "abgeschlossen", typ: "resin", kategorie: "tabletop", dauer: "8 Std.", introText: "", align: "",
        galerie: ["./img/abgeschlossene-projekte/zomb2 (2).jpg"]
    },
    {
        id: "zomb3",
        image: "./img/abgeschlossene-projekte/zomb3 (1).jpg",
        titel: "Zombie 3 - Tabletop",
        status: "abgeschlossen", typ: "resin", kategorie: "tabletop", dauer: "8 Std.", introText: "", align: "",
        galerie: ["./img/abgeschlossene-projekte/zomb3 (2).jpg"]
    },
    {
        id: "zomb4",
        image: "./img/abgeschlossene-projekte/zomb4 (1).jpg",
        titel: "Zombie 4 - Tabletop",
        status: "abgeschlossen", typ: "resin", kategorie: "tabletop", dauer: "8 Std.", introText: "", align: "",
        galerie: ["./img/abgeschlossene-projekte/zomb4 (2).jpg"]
    },
    {
        id: "zomb5",
        image: "./img/abgeschlossene-projekte/zomb5 (1).jpg",
        titel: "Zombie 5 - Tabletop",
        status: "abgeschlossen", typ: "resin", kategorie: "tabletop", dauer: "8 Std.", introText: "", align: "",
        galerie: ["./img/abgeschlossene-projekte/zomb5 (2).jpg"]
    },
    {
        id: "zombidogs",
        image: "./img/abgeschlossene-projekte/zombidogs (1).jpg",
        titel: "Zombiehund - Tabletop",
        status: "abgeschlossen", typ: "resin", kategorie: "tabletop", dauer: "5 Std.", introText: "", align: "",
        galerie: ["./img/abgeschlossene-projekte/zombidogs (2).jpg", "./img/abgeschlossene-projekte/zombidogs (3).jpg"]
    },

    // =========================================
    // PROJEKTE IN PLANUNG
    // =========================================
    {
        id: "hades",
        image: "./img/in-planung/hades.jpg",
        titel: "Hades",
        status: "planung", typ: "resin", kategorie: "film", dauer: "", introText: "", align: "",
        galerie: []
    },
    {
        id: "momo",
        image: "./img/in-planung/momo.jpg",
        titel: "Momo - Dandadan",
        status: "planung", typ: "resin", kategorie: "anime", dauer: "", introText: "", align: "",
        galerie: []
    },
    {
        id: "zenitsu",
        image: "./img/in-planung/demonslayer2.jpg",
        titel: "Zenitsu",
        status: "planung", typ: "resin", kategorie: "anime", dauer: "", introText: "", align: "",
        galerie: []
    },
    {
        id: "inosuke",
        image: "./img/in-planung/demonslayer.jpg",
        titel: "Inosuke",
        status: "planung", typ: "resin", kategorie: "anime", dauer: "", introText: "", align: "",
        galerie: []
    },
    {
        id: "dragon2",
        image: "./img/in-planung/dragon.jpg",
        titel: "Solo Leveling - Drache",
        status: "planung", typ: "resin", kategorie: "anime", dauer: "", introText: "", align: "",
        galerie: []
    },
    {
        id: "cloud",
        image: "./img/in-planung/cloud.jpg",
        titel: "Cloud",
        status: "planung", typ: "resin", kategorie: "gaming", dauer: "", introText: "", align: "",
        galerie: []
    },
    {
        id: "budda",
        image: "./img/in-planung/budda.png",
        titel: "Buddha",
        status: "planung", typ: "resin", kategorie: "anime", dauer: "", introText: "", align: "",
        galerie: []
    },
    {
        id: "renamon",
        image: "./img/in-planung/renamon.jpg",
        titel: "Renamon",
        status: "planung", typ: "resin", kategorie: "anime", dauer: "", introText: "", align: "",
        galerie: []
    },
    {
        id: "bnb",
        image: "./img/in-planung/bnb.jpg",
        titel: "Die Schöne und das Biest - Figur",
        status: "planung", typ: "resin", kategorie: "film", dauer: "", introText: "", align: "",
        galerie: []
    },
{
        id: "halloweenuntersetzer",
        image: "./img/abgeschlossene-projekte/halloweenuntersetzer.jpg",
        titel: "Halloween - Untersetzer - Set",
        status: "abgeschlossen", typ: "fdm", kategorie: "dekoration", dauer: "4 Std.", introText: "", align: "",
        galerie: []
    },
    {
        id: "herbstdeko",
        image: "./img/abgeschlossene-projekte/herbstdeko.jpg",
        titel: "Herbstdeko",
        status: "abgeschlossen", typ: "fdm", kategorie: "dekoration", dauer: "10 Std.", introText: "", align: "",
        galerie: []
    },
    {
        id: "valkyre",
        image: "./img/abgeschlossene-projekte/valkyre (1).jpg",
        titel: "Valkyre - Tabletop",
        status: "abgeschlossen", typ: "resin", kategorie: "tabletop", dauer: "10 Std.", introText: "", align: "",
        galerie: [
            "./img/abgeschlossene-projekte/valkyre (2).jpg",
            "./img/abgeschlossene-projekte/valkyre (3).jpg",
            "./img/abgeschlossene-projekte/valkyre (4).jpg",
            "./img/abgeschlossene-projekte/valkyre (5).jpg",
            "./img/abgeschlossene-projekte/valkyre (6).jpg"

        ]
    },
{
        id: "glur",
        image: "./img/abgeschlossene-projekte/glur (1).jpg",
        titel: "Glurak",
        status: "abgeschlossen", typ: "fdm", kategorie: "anime", dauer: "25 Std.", introText: "", align: "",
        galerie: [
            "./img/abgeschlossene-projekte/glur (2).jpg", 
            "./img/abgeschlossene-projekte/glur (3).jpg"
        ]
    },
    {
        id: "fuchs-gestrickt",
        image: "./img/abgeschlossene-projekte/fuchs-gestrickt (1).jpg",
        titel: "Fuchs - Gestrickt",
        status: "abgeschlossen", typ: "fdm", kategorie: "dekoration", dauer: "8 Std.", introText: "", align: "",
        galerie: [
            "./img/abgeschlossene-projekte/fuchs-gestrickt (2).jpg", 
            "./img/abgeschlossene-projekte/fuchs-gestrickt (3).jpg"
        ]
    },
    {
        id: "dieb-dnd",
        image: "./img/abgeschlossene-projekte/dieb-dnd.jpg",
        titel: "DnD - Dieb",
        status: "abgeschlossen", typ: "resin", kategorie: "tabletop", dauer: "8 Std.", introText: "", align: "",
        galerie: []
    },
    {
        id: "wolverine",
        image: "./img/abgeschlossene-projekte/wolverine (1).jpg",
        titel: "Wolverine",
        status: "abgeschlossen", typ: "resin", kategorie: "film", dauer: "35 Std.", introText: "", align: "",
        galerie: [
            "./img/abgeschlossene-projekte/wolverine (2).jpg", 
            "./img/abgeschlossene-projekte/wolverine (3).jpg", 
            "./img/abgeschlossene-projekte/wolverine (4).jpg", 
            "./img/abgeschlossene-projekte/wolverine (5).jpg"
        ]
    },
    {
        id: "catcula",
        image: "./img/abgeschlossene-projekte/catcula.jpg",
        titel: "Catcula",
        status: "abgeschlossen", typ: "fdm", kategorie: "dekoration", dauer: "4 Std.", introText: "", align: "",
        galerie: []
    },
    {
        id: "door-cat2",
        image: "./img/abgeschlossene-projekte/door-cat2.jpg",
        titel: "Katze - Türdeko",
        status: "abgeschlossen", typ: "fdm", kategorie: "dekoration", dauer: "2 Std.", introText: "", align: "",
        galerie: []
    },
    {
        id: "door-cat1",
        image: "./img/abgeschlossene-projekte/door-cat1.jpg",
        titel: "Katze - Türdeko",
        status: "abgeschlossen", typ: "fdm", kategorie: "dekoration", dauer: "2 Std.", introText: "", align: "",
        galerie: []
    },
    {
        id: "cat-ghosts",
        image: "./img/abgeschlossene-projekte/cat-ghosts (1).jpg",
        titel: "Katze - Halloweengeister",
        status: "abgeschlossen", typ: "fdm", kategorie: "dekoration", dauer: "5 Std.", introText: "", align: "",
        galerie: [
            "./img/abgeschlossene-projekte/cat-ghosts (2).jpg", 
            "./img/abgeschlossene-projekte/cat-ghosts (3).jpg"
        ]
    },
    {
        id: "jsk-lamp",
        image: "./img/abgeschlossene-projekte/jsk-lamp (2).jpg",
        titel: "Jack Skellington - Lampe",
        status: "abgeschlossen", typ: "fdm", kategorie: "dekoration, film", dauer: "16 Std.", introText: "", align: "",
        galerie: [
            "./img/abgeschlossene-projekte/jsk-lamp (1).jpg", 
            "./img/abgeschlossene-projekte/jsk-lamp (3).jpg"
        ]
    },
    {
        id: "dnd-lamp",
        image: "./img/abgeschlossene-projekte/dnd-lamp.jpg",
        titel: "DnD - Lampe",
        status: "abgeschlossen", typ: "fdm", kategorie: "dekoration, tabletop", dauer: "10 Std.", introText: "", align: "",
        galerie: []
    },
    {
        id: "blitza",
        image: "./img/abgeschlossene-projekte/blitza (1).jpg",
        titel: "Blitza",
        status: "abgeschlossen", typ: "fdm", kategorie: "anime", dauer: "4 Std.", introText: "", align: "",
        galerie: [
            "./img/abgeschlossene-projekte/blitza (2).jpg", 
            "./img/abgeschlossene-projekte/blitza (3).jpg", 
            "./img/abgeschlossene-projekte/blitza (4).jpg"
        ]
    },
    {
        id: "dragonegg",
        image: "./img/abgeschlossene-projekte/dragonegg (1).jpg",
        titel: "Drachenei",
        status: "abgeschlossen", typ: "fdm", kategorie: "tabletop, dekoration", dauer: "3 Std.", introText: "", align: "",
        galerie: [
            "./img/abgeschlossene-projekte/dragonegg (2).jpg", 
            "./img/abgeschlossene-projekte/dragonegg (3).jpg", 
            "./img/abgeschlossene-projekte/dragonegg (4).jpg", 
            "./img/abgeschlossene-projekte/dragonegg (5).jpg", 
            "./img/abgeschlossene-projekte/dragonegg (6).jpg"
        ]
    },


















];