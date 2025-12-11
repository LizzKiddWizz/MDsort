// dataSetVersion = "2019-11-26"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSetVersion = "2025-12-03";
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
    {
        name: "Filter by Group",
        key: "area",
        tooltip: "Check options below to filter characters by identifying groups.",
        checked: true,
        sub: [
            { name: "Athalmus", key: "THAL" },
            { name: "Ascension", key: "ASC" },
            { name: "Purgatory", key: "PURG" },
            { name: "Lacrimae", key: "LAC" },
            { name: "Alive", tooltip: "This group is comprised of mortals who have not died yet.", key: "LIV" }
        ]
    },
    {
        name: "Filter by Status",
        key: "status",
        tooltip: "Check this to filter characters by status.",
        checked: false,
        sub: [
            { name: "Ascencia", tooltip: "Defined by their angelic appearence and residence in Ascension.", key: "ASC" },
            { name: "Circlean", tooltip: "Beings created with the purpose of reaping souls, they reside in Purgatory.", key: "CIR" },
            { name: "Death Brigade", tooltip: "Death Brigade members reside in Purgatory and venture out to reap souls.", key: "DB" },
            { name: "Cursed", tooltip: "Lacra who have been branded with a specific sin.", key: "CRS" },
            { name: "Endi", tooltip: "Empowered Lacra, they live within Lacrimae.", key: "ENDI" },
            { name: "Sev", tooltip: "Regular Lacra who live in Lacrimae.", key: "SEV" },
            { name: "Mortal", tooltip: "They have died, and now exist within an Arcana.", key: "MORT" }
        ]
    },
    {   name: "Filter by Gender",
        key: "gender",
        tooltip: "Check options below to filter by gender.",
        checked: true,
        sub: [
            { name: "Male", key: "M", checked: true },
            { name: "Female", key: "F", checked: true }
        ]
    },
    {
        name: "Hair",
        key: "H",
        tooltip: "Check this to filter by certain hair colors.",
        checked: false,
        sub: [
            { name: "Red", key: "R"},
            { name: "Orange", key: "O" },
            { name: "Blonde", key: "BLO" },
            { name: "Green", key: "G" },
            { name: "Blue", key: "BLU" },
            { name: "Purple", key: "PUR" },
            { name: "Pink", key: "PI" },
            { name: "Brown", key: "BRN" },
            { name: "White", key: "W" },
            { name: "Grey", key: "GRY" },
            { name: "Black", key: "BLK" },
            { name: "Multicolored", key: "MC" },
            { name: "Bald", key: "BAL" }
        ]
    },
    {
        name: "Eyes",
        key: "E",
        tooltip: "Check this to filter by certain eye colors.",
        checked: false,
        sub: [
            { name: "Red", key: "R" },
            { name: "Orange", key: "O" },
            { name: "Yellow", key: "Y" },
            { name: "Green", key: "G" },
            { name: "Blue", key: "B" },
            { name: "Purple", key: "PUR" },
            { name: "Pink", key: "PI" },
            { name: "Brown", key: "BRN" },
            { name: "White", key: "W" },
            { name: "Grey", key: "GRY" },
            { name: "Black", key: "BLK" },
            { name: "Multicolored", key: "MC" },
            { name: "Unknown", key: "UN" }
        ]
    },
    {
        name: "Remove all Glacius Rex",
        key: "GR",
        tooltip: "Check this to remove all Endi apart of the Glacius Rex.",
        checked: false
    }
];

dataSet[dataSetVersion].characterData = [
    {
        name: "Aberri Taurn",
        img: "rdjHz0K.png",
        opts: {
            area: ["LAC"],
            status: ["MORT"],
            gender: ["M"],
            H: ["BAL"],
            E: ["R"],
            GR: false
        }
    },
    {
        name: "Adamos Serim",
        img: "2GP8Gql.png",
        opts: {
            area: ["ASC"],
            status: ["ASC"],
            gender: ["M"],
            H: ["BLO"],
            E: ["G"],
            GR: false
        }
    },
    {
        name: "Aim Ledoux",
        img: "jiqSKRy.png",
        opts: {
            area: ["LAC"],
            status: ["ENDI"],
            gender: ["M"],
            H: ["BRN"],
            E: ["O"],
            GR: true
        }
    },
    {
        name: "Airmes Altos",
        img: "q7G2HsB.png",
        opts: {
            area: ["LAC"],
            status: ["SEV"],
            gender: ["M"],
            H: ["W"],
            E: ["W"],
            GR: false
        }
    },
    {
        name: "Alamon Crescens",
        img: "JXjk9gA.png",
        opts: {
            area: ["THAL"],
            gender: ["M"],
            H: ["PI"],
            E: ["G"],
            GR: false
        }
    },
    {
        name: "Alheitham Oroboras",
        img: "dR8AO5K.png",
        opts: {
            area: ["THAL"],
            gender: ["M"],
            H: ["PI"],
            E: ["B"],
            GR: false
        }
    },
    {
        name: "Alicestasia Lovely",
        img: "uRHvqb1.png",
        opts: {
            area: ["THAL"],
            gender: ["F"],
            H: ["BLO"],
            E: ["B"],
            GR: false
        }
    },
    {
        name: "Amodeus Constanza",
        img: "yEWJuf5.png",
        opts: {
            area: ["THAL"],
            gender: ["M"],
            H: ["BLO"],
            E: ["B"],
            GR: false
        }
    },
    {
        name: "Amy Callipso",
        img: "xrBJ0DF.png",
        opts: {
            area: ["LAC"],
            status: ["ENDI"],
            gender: ["F"],
            H: ["BLK"],
            E: ["G"],
            GR: true
        }
    },
    {
        name: "Arastmus Luciendo",
        img: "XKnQhcn.png",
        opts: {
            area: ["LAC"],
            status: ["SEV"],
            gender: ["M"],
            H: ["W"],
            E: ["B"],
            GR: false
        }
    },
    {
        name: "Artorias Poe",
        img: "9vKCvnw.png",
        opts: {
            area: ["PURG"],
            status: ["CIR"],
            gender: ["M"],
            H: ["MC", "BLK", "W"],
            E: ["MC", "GRY", "PUR"],
            GR: false
        }
    },
    {
        name: "Asmoday Catullus",
        img: "TCVDMYC.png",
        opts: {
            area: ["LAC"],
            status: ["ENDI"],
            gender: ["M"],
            H: ["PUR"],
            E: ["B"],
            GR: true
        }
    },
    {
        name: "Astaroth Guile",
        img: "aN0i2Et.png",
        opts: {
            area: ["LAC"],
            status: ["ENDI"],
            gender: ["M"],
            H: ["MC", "BRN", "W"],
            E: ["Y"],
            GR: true
        }
    },
    {
        name: "Azazel Mistral-O'Malley",
        img: "rJQxGJt.png",
        opts: {
            area: ["LAC"],
            status: ["ENDI"],
            gender: ["M"],
            H: ["BLK"],
            E: ["R"],
            GR: false
        }
    },
    {
        name: "Bael Ragna",
        img: "HvmpqjN.png",
        opts: {
            area: ["LAC"],
            status: ["ENDI"],
            gender: ["F"],
            H: ["BRN"],
            E: ["R"],
            GR: true
        }
    },
    {
        name: "Bahri Metem",
        img: "Q9MEQ1I.png",
        opts: {
            area: ["LAC"],
            status: ["ENDI"],
            gender: ["M"],
            H: ["BLK"],
            E: ["Y"],
            GR: false
        }
    },
    {
        name: "Balamn Laurent",
        img: "0MZNXyw.png",
        opts: {
            area: ["LAC"],
            status: ["ENDI"],
            gender: ["F"],
            H: ["PI"],
            E: ["O"],
            GR: true
        }
    },
    {
        name: "Balheitham Plastisum",
        img: "E6EcpzK.png",
        opts: {
            area: ["THAL"],
            gender: ["M"],
            H: ["BLK"],
            E: ["W"],
            GR: false
        }
    },
    {
        name: "Barbatos Iraklidis",
        img: "p32pTVm.png",
        opts: {
            area: ["LAC"],
            status: ["ENDI"],
            gender: ["M"],
            H: ["MC", "G", "BRN"],
            E: ["B"],
            GR: true
        }
    },
    {
        name: "Barchiel Ouroboros",
        img: "vnbiOev.png",
        opts: {
            area: ["LAC"],
            status: ["ENDI"],
            gender: ["M"],
            H: ["BLK"],
            E: ["MC", "Y", "B"],
            GR: false
        }
    },
    {
        name: "BECC BSoD",
        img: "Mb8pPeA.png",
        opts: {
            area: ["PURG"],
            status: ["MORT", "DB"],
            gender: ["M"],
            H: ["PI"],
            E: ["PI"],
            GR: false
        }
    },
    {
        name: "Beelzephan Eras",
        img: "5Di47iB.png",
        opts: {
            area: ["ASC"],
            status: ["ASC"],
            gender: ["M"],
            H: ["W"],
            E: ["MC", "O", "PUR"],
            GR: false
        }
    },
    {
        name: "Blackwood",
        img: "8QIPGKR.png",
        opts: {
            area: ["THAL"],
            gender: ["M"],
            H: ["B"],
            E: ["B"],
            GR: false
        }
    },
    {
        name: "Cassiel Thors",
        img: "QKnDzr9.png",
        opts: {
            area: ["ASC"],
            status: ["ASC"],
            gender: ["M"],
            H: ["B"],
            E: ["Y"],
            GR: false
        }
    },
    {
        name: "Castor Bellows",
        img: "tFHBN0v.png",
        opts: {
            area: ["THAL"],
            gender: ["M"],
            H: ["W"],
            E: ["Y"],
            GR: false
        }
    },
    {
        name: "Celestra Kephriel",
        img: "Y7do6JZ.png",
        opts: {
            area: ["ASC"],
            status: ["ASC"],
            gender: ["F"],
            H: ["PI"],
            E: ["Y"],
            GR: false
        }
    },
    {
        name: "Cetus Lambdin",
        img: "iEaZks9.png",
        opts: {
            area: ["LAC"],
            status: ["SEV"],
            gender: ["M"],
            H: ["MC", "PI", "GRY"],
            E: ["B"],
            GR: false
        }
    },
    {
        name: "Corvus Menander",
        img: "lc4loje.png",
        opts: {
            area: ["PURG"],
            status: ["CIR"],
            gender: ["M"],
            H: ["MC", "BLK", "PUR"],
            E: ["PUR"],
            GR: false
        }
    },
    {
        name: "Damione Hathos",
        img: "LJxST5e.png",
        opts: {
            area: ["LAC"],
            status: ["CRS"],
            gender: ["M"],
            H: ["BRN"],
            E: ["PUR"],
            GR: false
        }
    },
    {
        name: "Dantalion Rex",
        img: "cIWhp8e.png",
        opts: {
            area: ["LAC"],
            status: ["ENDI"],
            gender: ["M"],
            H: ["BRN"],
            E: ["R"],
            GR: true
        }
    },
    {
        name: "Decarabia Deluge",
        img: "K0S2GIq.png",
        opts: {
            area: ["LAC"],
            status: ["ENDI"],
            gender: ["M"],
            H: ["O"],
            E: ["O"],
            GR: true
        }
    },
    {
        name: "Delphine Apotheosis",
        img: "RJi5vsc.png",
        opts: {
            area: ["LAC"],
            status: ["SEV"],
            gender: ["F"],
            H: ["R", "PI"],
            E: ["B"],
            GR: false
        }
    },
    {
        name: "Delphi Quantum",
        img: "VeQzdvQ.png",
        opts: {
            area: ["PURG"],
            status: ["CIR"],
            gender: ["F"],
            H: ["MC", "BLK", "W"],
            E: ["B"],
            GR: false
        }
    },
    {
        name: "Diablossa Lizeh",
        img: "CN3QLuQ.png",
        opts: {
            area: ["PURG"],
            status: ["MORT"],
            gender: ["F"],
            H: ["PUR"],
            E: ["MC", "PUR", "O", "Y", "G", "B"],
            GR: false
        }
    },
    {
        name: "Dreyar Melcossa",
        img: "i6CekRm.png",
        opts: {
            area: ["PURG"],
            status: ["CIR"],
            gender: ["M"],
            H: ["MC", "BLK", "W"],
            E: ["MC", "G", "W"],
            GR: false
        }
    },
    {
        name: "Evanadne Onise",
        img: "5sqVG63.png",
        opts: {
            area: ["ASC"],
            status: ["MORT"],
            gender: ["F"],
            H: ["BLK"],
            E: ["BLK"],
            GR: false
        }
    },
    {
        name: "Evengeline Alu",
        img: "JRwPmJn.png",
        opts: {
            area: ["LAC"],
            status: ["ENDI"],
            gender: ["F"],
            H: ["MC", "BLO", "PI"],
            E: ["MC", "Y", "O"],
            GR: false
        }
    },
    {
        name: "Exodus Erzimion",
        img: "KsVbvZV.png",
        opts: {
            area: ["LAC"],
            status: ["ENDI"],
            gender: ["M"],
            H: ["W"],
            E: ["BLK"],
            GR: true
        }
    },
    {
        name: "Ezralibub Calidulce",
        img: "2ZrQDdw.png",
        opts: {
            area: ["LAC"],
            status: ["CRS"],
            gender: ["M"],
            H: ["BLO"],
            E: ["G"],
            GR: false
        }
    },
    {
        name: "FAFNIR",
        img: "OIjLmCt.png",
        opts: {
            area: ["THAL"],
            gender: ["M"],
            H: ["BAL"],
            E: ["Y"],
            GR: false
        }
    },
    {
        name: "Felisance Meteoris",
        img: "4aIRthP.png",
        opts: {
            area: ["THAL"],
            gender: ["M"],
            H: ["MC", "W", "BLK"],
            E: ["W"],
            GR: false
        }
    },
    {
        name: "Feryl Donahue",
        img: "USq5xnc.png",
        opts: {
            area: ["LAC"],
            status: ["SEV"],
            gender: ["M"],
            H: ["MC", "PUR", "B"],
            E: ["B"],
            GR: false
        }
    },
    {
        name: "Freyas Sienan",
        img: "eSnMxtT.png",
        opts: {
            area: ["PURG"],
            status: ["DB"],
            gender: ["F"],
            H: ["B"],
            E: ["G"],
            GR: false
        }
    },
    {
        name: "Frida Areza",
        img: "cY5Jfxz.png",
        opts: {
            area: ["ASC", "LIV"],
            gender: ["F"],
            H: ["BRN"],
            E: ["MC", "B", "PUR"],
            GR: false
        }
    },
    {
        name: "Genevieve La Cruz",
        img: "NTCPWQT.png",
        opts: {
            area: ["THAL"],
            gender: ["F"],
            H: ["BLO"],
            E: ["BRN"],
            GR: false
        }
    },
    {
        name: "Geranigor Ishtarinavani",
        img: "yD1Iutx.png",
        opts: {
            area: ["LAC"],
            status: ["CRS"],
            gender: ["M"],
            H: ["W"],
            E: ["B"],
            GR: false
        }
    },
    {
        name: "Giavanna Alighieri",
        img: "BZN2bRR.png",
        opts: {
            area: ["PURG"],
            status: ["CIR"],
            gender: ["F"],
            H: ["MC", "BRN", "W"],
            E: ["MC", "PUR", "PI"],
            GR: false
        }
    },
    {
        name: "Godellious Gabriel",
        img: "pCGoE5O.png",
        opts: {
            area: ["THAL"],
            gender: ["F", "M"],
            H: ["W"],
            E: ["G"],
            GR: false
        }
    },
    {
        name: "Gremory Modus",
        img: "PpEQxCt.png",
        opts: {
            area: ["LAC"],
            status: ["ENDI"],
            gender: ["M"],
            H: ["BLO"],
            E: ["Y"],
            GR: true
        }
    },
    {
        name: "Haagenti Dellora",
        img: "UWMYMy7.png",
        opts: {
            area: ["LAC"],
            status: ["ENDI"],
            gender: ["F"],
            H: ["MC", "BRN", "GRY"],
            E: ["MC", "B", "BRN"],
            GR: true
        }
    },
    {
        name: "Halcyon Galia",
        img: "6QOnnyH.png",
        opts: {
            area: ["LAC"],
            status: ["ENDI"],
            gender: ["M"],
            H: ["MC", "W", "R"],
            E: ["MC", "R", "B"],
            GR: false
        }
    },
    {
        name: "Hisleschtevatkana 'Kana' Constanza",
        img: "XsU7fkG.png",
        opts: {
            area: ["THAL"],
            gender: ["M"],
            H: ["MC", "BLO", "BRN"],
            E: ["MC", "R", "B"],
            GR: false
        }
    },
    {
        name: "Hisleschtevatkana 'Lahty' Constanza",
        img: "JwLVGlq.png",
        opts: {
            area: ["THAL"],
            gender: ["M"],
            H: ["BRN"],
            E: ["B"],
            GR: false
        }
    },
    {
        name: "Ipos Anais",
        img: "BxTkQ4c.png",
        opts: {
            area: ["LAC"],
            status: ["ENDI"],
            gender: ["M"],
            H: ["BRN"],
            E: ["Y"],
            GR: false
        }
    },
    {
        name: "Ivris Quin",
        img: "2MRkXWO.png",
        opts: {
            area: ["LAC"],
            status: ["SEV"],
            gender: ["M"],
            H: ["W"],
            E: ["Y"],
            GR: false
        }
    },
    {
        name: "Jebidiah Leonard",
        img: "LMuK7XO.png",
        opts: {
            area: ["THAL"],
            gender: ["M"],
            H: ["BRN"],
            E: ["Y"],
            GR: false
        }
    },
    {
        name: "Kacellius Voltama",
        img: "qtGpLoX.png",
        opts: {
            area: ["LAC"],
            status: ["MORT"],
            gender: ["M"],
            H: ["PI"],
            E: ["Y"],
            GR: false
        }
    },
    {
        name: "Koda Rookwood",
        img: "QUx2Lof.png",
        opts: {
            area: ["PURG"],
            status: ["DB"],
            gender: ["M"],
            H: ["BLK"],
            E: ["G"],
            GR: false
        }
    },
    {
        name: "Kushiel Prower",
        img: "k6gKA1D.png",
        opts: {
            area: ["ASC"],
            status: ["ASC"],
            gender: ["M"],
            H: ["BLO"],
            E: ["PUR"],
            GR: false
        }
    },
    {
        name: "Law Huntsman",
        img: "1hDHxOC.png",
        opts: {
            area: ["PURG"],
            status: ["MORT"],
            gender: ["M"],
            H: ["MC", "W", "BLO"],
            E: ["Y"],
            GR: false
        }
    },
    {
        name: "Lazaezel Mistral",
        img: "P8SC9EY.png",
        opts: {
            area: ["LAC"],
            status: ["CRS"],
            gender: ["F"],
            H: ["G"],
            E: ["B"],
            GR: false
        }
    },
    {
        name: "Lazarus Leander",
        img: "8JImInC.png",
        opts: {
            area: ["LAC"],
            status: ["ENDI"],
            gender: ["F"],
            H: ["PUR"],
            E: ["G"],
            GR: false
        }
    },
    {
        name: "Leraje Ecahedrin",
        img: "auEsxvV.png",
        opts: {
            area: ["LAC"],
            status: ["ENDI"],
            gender: ["M"],
            H: ["BLO"],
            E: ["Y"],
            GR: true
        }
    },
    {
        name: "Lucian Nightingale",
        img: "sHuBFUC.png",
        opts: {
            area: ["LAC"],
            status: ["CRS"],
            gender: ["M"],
            H: ["MC", "B", "BLK"],
            E: ["B"],
            GR: false
        }
    },
    {
        name: "Luciel Seraphina",
        img: "aJKPB0M.png",
        opts: {
            area: ["ASC"],
            status: ["ASC"],
            gender: ["M"],
            H: ["MC", "BLO", "B"],
            E: ["B"],
            GR: false
        }
    },
    {
        name: "Magnus Aueralis",
        img: "eXQzLUG.png",
        opts: {
            area: ["PURG"],
            status: ["MORT"],
            gender: ["M"],
            H: ["BAL"],
            E: ["G", "B"],
            GR: false
        }
    },
    {
        name: "Maksim Laumes",
        img: "XwnxKJs.png",
        opts: {
            area: ["LAC"],
            status: ["SEV"],
            gender: ["M"],
            H: ["PUR"],
            E: ["B"],
            GR: false
        }
    },
    {
        name: "Malthus Sonus Inferni",
        img: "aoTKVLd.png",
        opts: {
            area: ["LAC"],
            status: ["ENDI"],
            gender: ["M"],
            H: ["BAL"],
            E: ["UN"],
            GR: false
        }
    },
    {
        name: "Mameel Phimos",
        img: "2riXEV7.png",
        opts: {
            area: ["ASC"],
            status: ["ASC"],
            gender: ["M"],
            H: ["MC", "BLO", "B"],
            E: ["MC", "G", "B"],
            GR: false
        }
    },
    {
        name: "Mamoru Uki",
        img: "Pu5o1Ma.png",
        opts: {
            area: ["LAC"],
            status: ["MORT"],
            gender: ["M"],
            H: ["PUR"],
            E: ["B"],
            GR: false
        }
    },
    {
        name: "Marbas Vincent",
        img: "VUlRI7o.png",
        opts: {
            area: ["LAC"],
            status: ["ENDI"],
            gender: ["M"],
            H: ["B"],
            E: ["B"],
            GR: true
        }
    },
    {
        name: "Marguerite Leglise",
        img: "9YjFltl.png",
        opts: {
            area: ["THAL"],
            gender: ["F"],
            H: ["MC", "BLO", "BRN"],
            E: ["BRN"],
            GR: false
        }
    },
    {
        name: "Mercusious Thiabult",
        img: "ihbp3x1.png",
        opts: {
            area: ["THAL"],
            gender: ["M"],
            H: ["B"],
            E: ["MC", "O", "BLK"],
            GR: false
        }
    },
    {
        name: "Merlin Lagrange",
        img: "28izoKG.png",
        opts: {
            area: ["ASC"],
            status: ["MORT"],
            gender: ["M"],
            H: ["R"],
            E: ["G"],
            GR: false
        }
    },
    {
        name: "Midge Orwell",
        img: "dqr4qZp.png",
        opts: {
            area: ["PURG"],
            status: ["CIR"],
            gender: ["M"],
            H: ["MC", "BRN", "W"],
            E: ["W"],
            GR: false
        }
    },
    {
        name: "Mildred Levier Heaven",
        img: "v9QYT1f.png",
        opts: {
            area: ["ASC"],
            status: ["ASC"],
            gender: ["F"],
            H: ["BLK"],
            E: ["Y"],
            GR: false
        }
    },
    {
        name: "Montmorency Montmercy",
        img: "qWRS19i.png",
        opts: {
            area: ["PURG"],
            status: ["MORT"],
            gender: ["M"],
            H: ["BRN"],
            E: ["BRN"],
            GR: false
        }
    },
    {
        name: "Morgan Faymore",
        img: "ZV8exNQ.png",
        opts: {
            area: ["PURG"],
            status: ["MORT"],
            gender: ["F"],
            H: ["PUR"],
            E: ["B"],
            GR: false
        }
    },
    {
        name: "Murmos",
        img: "OXFxciO.png",
        opts: {
            area: ["PURG"],
            status: ["MORT"],
            gender: ["M"],
            H: ["BAL"],
            E: ["MC", "G", "Y", "O"],
            GR: false
        }
    },
    {
        name: "Naberius Gehenna",
        img: "Si7TB6N.png",
        opts: {
            area: ["LAC"],
            status: ["ENDI"],
            gender: ["M"],
            H: ["W"],
            E: ["R"],
            GR: true
        }
    },
    {
        name: "Nezhar Lenyard",
        img: "nVFIva7.png",
        opts: {
            area: ["PURG"],
            status: ["DB"],
            gender: ["M"],
            H: ["PUR"],
            E: ["MC", "GRY", "G"],
            GR: false
        }
    },
    {
        name: "Nyem Vidal",
        img: "EkP1Qw1.png",
        opts: {
            area: ["LAC"],
            status: ["SEV"],
            gender: ["F"],
            H: ["BRN"],
            E: ["PUR"],
            GR: false
        }
    },
    {
        name: "Odelavathan Vesuvian",
        img: "0KW5MaA.png",
        opts: {
            area: ["LAC"],
            status: ["CRS"],
            gender: ["M"],
            H: ["G"],
            E: ["G"],
            GR: false
        }
    },
    {
        name: "Paymon Palistinous",
        img: "e3jP406.png",
        opts: {
            area: ["LAC"],
            status: ["CRS"],
            gender: ["M"],
            H: ["W"],
            E: ["B"],
            GR: false
        }
    },
    {
        name: "Qalas Ramos",
        img: "tj4Sc24.png",
        opts: {
            area: ["THAL"],
            gender: ["M"],
            H: ["GRY"],
            E: ["BRN"],
            GR: false
        }
    },
    {
        name: "Raguel Prin",
        img: "eIbPhy1.png",
        opts: {
            area: ["ASC"],
            status: ["ASC"],
            gender: ["M"],
            H: ["PUR"],
            E: ["G"],
            GR: false
        }
    },
    {
        name: "Ragwell Prin",
        img: "IRqUEpN.png",
        opts: {
            area: ["ASC"],
            status: ["ASC"],
            gender: ["M"],
            H: ["PUR"],
            E: ["G"],
            GR: false
        }
    },
    {
        name: "Resfaredna Nata Mia",
        img: "3pHzlAV.png",
        opts: {
            area: ["THAL"],
            gender: ["M"],
            H: ["MC", "G", "Y"],
            E: ["B"],
            GR: false
        }
    },
    {
        name: "Raziel Ebrum",
        img: "mCZ73qL.png",
        opts: {
            area: ["LAC"],
            status: ["ENDI"],
            gender: ["M"],
            H: ["PI"],
            E: ["R"],
            GR: false
        }
    },
    {
        name: "Reiheitham Vivaldi",
        img: "Ra5TTbB.png",
        opts: {
            area: ["THAL"],
            gender: ["M"],
            H: ["PI"],
            E: ["Y"],
            GR: false
        }
    },
    {
        name: "Remmon Stolas",
        img: "HYqO74V.png",
        opts: {
            area: ["LAC"],
            status: ["ENDI"],
            gender: ["M"],
            H: ["G"],
            E: ["Y"],
            GR: false
        }
    },
    {
        name: "Remus Saveur",
        img: "G4gUxRJ.png",
        opts: {
            area: ["ASC"],
            status: ["MORT"],
            gender: ["M"],
            H: ["BAL"],
            E: ["O"],
            GR: false
        }
    },
    {
        name: "River Westley",
        img: "nyHIdhp.png",
        opts: {
            area: ["PURG"],
            status: ["DB"],
            gender: ["M"],
            H: ["BLO"],
            E: ["UN"],
            GR: false
        }
    },
    {
        name: "Rosen Lovecraft",
        img: "l7K6z9V.png",
        opts: {
            area: ["PURG"],
            status: ["CIR"],
            gender: ["M"],
            H: ["O"],
            E: ["MC", "Y", "G"],
            GR: false
        }
    },
    {
        name: "Roxanne Desiree",
        img: "FkANSUx.png",
        opts: {
            area: ["LAC"],
            status: ["SEV"],
            gender: ["F"],
            H: ["BAL"],
            E: ["G"],
            GR: false
        }
    },
    {
        name: "Saelen Sombia",
        img: "AvN4Vyn.png",
        opts: {
            area: ["LAC"],
            status: ["CRS"],
            gender: ["M"],
            H: ["R"],
            E: ["PUR"],
            GR: false
        }
    },
    {
        name: "Sahamin Kokabiel",
        img: "vMQdNcK.png",
        opts: {
            area: ["LAC"],
            status: ["ENDI"],
            gender: ["M"],
            H: ["BRN"],
            E: ["Y"],
            GR: false
        }
    },
    {
        name: "Selaphiel Santos",
        img: "XuTtxLZ.png",
        opts: {
            area: ["ASC"],
            status: ["ASC"],
            gender: ["M"],
            H: ["BAL"],
            E: ["UN"],
            GR: false
        }
    },
    {
        name: "Sennebrie Hova",
        img: "QkMD3WN.png",
        opts: {
            area: ["LAC"],
            status: ["SEV"],
            gender: ["F"],
            H: ["MC", "O", "Y", "PI", "PUR"],
            E: ["Y"],
            GR: false
        }
    },
    {
        name: "Serilda Mephistopheles",
        img: "4QHMLMj.png",
        opts: {
            area: ["LAC"],
            status: ["ENDI"],
            gender: ["F"],
            H: ["PI"],
            E: ["PUR"],
            GR: false
        }
    },
    {
        name: "Sitri Adorome",
        img: "R2JjBlE.png",
        opts: {
            area: ["LAC"],
            status: ["ENDI"],
            gender: ["M"],
            H: ["B"],
            E: ["B"],
            GR: false
        }
    },
    {
        name: "Stucca Miriona",
        img: "I8Jhqy2.png",
        opts: {
            area: ["THAL"],
            gender: ["F"],
            H: ["PI"],
            E: ["B"],
            GR: false
        }
    },
    {
        name: "Tannis Scythe",
        img: "AwsuXJ7.png",
        opts: {
            area: ["THAL"],
            gender: ["M"],
            H: ["BAL"],
            E: ["UN"],
            GR: false
        }
    },
    {
        name: "Titanus Belrose",
        img: "pE0WPK7.png",
        opts: {
            area: ["LAC"],
            status: ["ENDI"],
            gender: ["M"],
            H: ["PI"],
            E: ["G"],
            GR: false
        }
    },
    {
        name: "Una Atlanta",
        img: "BqGLgLz.png",
        opts: {
            area: ["THAL"],
            gender: ["M"],
            H: ["BLO"],
            E: ["B"],
            GR: false
        }
    },
    {
        name: "Uriel Eraphin",
        img: "wBHDVtI.png",
        opts: {
            area: ["ASC"],
            status: ["ASC"],
            gender: ["M"],
            H: ["MC", "PI", "BRN", "BLO"],
            E: ["G"],
            GR: false
        }
    },
    {
        name: "Valheitham Corrundum",
        img: "nul9Vqw.png",
        opts: {
            area: ["THAL"],
            gender: ["M"],
            H: ["GRY"],
            E: ["PI"],
            GR: false
        }
    },
    {
        name: "Victor Valefor",
        img: "QkFYhJ3.png",
        opts: {
            area: ["LAC"],
            status: ["ENDI"],
            gender: ["M"],
            H: ["W"],
            E: ["R"],
            GR: true
        }
    },
    {
        name: "Viles Xenophage",
        img: "0LHYWIJ.png",
        opts: {
            area: ["LAC"],
            status: ["SEV"],
            gender: ["M"],
            H: ["W"],
            E: ["B"],
            GR: false
        }
    },
    {
        name: "Xulphry Pearlescence",
        img: "PJpPDNK.png",
        opts: {
            area: ["THAL"],
            gender: ["F"],
            H: ["PI"],
            E: ["B"],
            GR: false
        }
    },
    {
        name: "Yen Agares",
        img: "3tudS1E.png",
        opts: {
            area: ["LAC"],
            status: ["ENDI"],
            gender: ["M"],
            H: ["W"],
            E: ["O"],
            GR: true
        }
    },
    {
        name: "Zelial Urano",
        img: "CVE2drp.png",
        opts: {
            area: ["LAC"],
            status: ["CRS"],
            gender: ["F"],
            H: ["BLK"],
            E: ["BLK"],
            GR: false
        }
    },
    {
        name: "",
        img: "",
        opts: {
            area: [""],
            status: [""],
            gender: [""],
            H: [""],
            E: [""],
            GR: false
        }
    }
]