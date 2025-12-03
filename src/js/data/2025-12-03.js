// dataSetVersion = "2019-11-26"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSetVersion = "2025-11-30";
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
            { name: "Endi", tooltip: "Empowered Lacra, they live within Lacrimae.", key: "END" },
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
            { name: "Bald", key: "BAL" }
        ]
    },
    {
        name: "Remove all Glacius Rex",
        key: "GR",
        tooltip: "Check this to remove all Endi apart of the Glacius Rex."
    },
    {
        name: "Filter by Element",
        key: "element",
        tooltip: "Check this to filter by specific elemental affinities.",
        checked: false,
        sub: [
            { name: "Time", key: "TIM", checked: false },
            { name: "Space", key: "SPC", checked: false },
            { name: "Darkness", key: "DRK", checked: false },
            { name: "Continuum", key: "CON", checked: false },
            { name: "Aether", key: "AE", checked: false },
            { name: "Corruption", key: "COR", checked: false },
            { name: "Haste", key: "HST", checked: false },
            { name: "Gravitas", key: "GRAV", checked: false },
            { name: "Ink", key: "INK", checked: false },
            { name: "Intermission", key: "INT", checked: false },
            { name: "Nether", key: "NET", checked: false },
            { name: "Shadows", key: "SHA", checked: false },
            { name: "Transpose", key: "TRNS", checked: false },
            { name: "Ether", key: "ETH", checked: false },
            { name: "Void", key: "VOI", checked: false },
            { name: "Light", key: "LIT", checked: false },
            { name: "Wave", key: "WAV", checked: false },
            { name: "Electricity", key: "ELTY", checked: false },
            { name: "Hard-Light", key: "HRD", checked: false },
            { name: "Atomic", key: "ATOM", checked: false },
            { name: "Acid", key: "ACID", checked: false },
            { name: "Health", key: "HEL", checked: false },
            { name: "Data", key: "DATA", checked: false },
            { name: "Cryptomancy", key: "CRYP", checked: false },
            { name: "Illusion", key: "ILL", checked: false },
            { name: "Ionization", key: "IO", checked: false },
            { name: "Electromancy", key: "ELCY", checked: false },
            { name: "Lucemancy", key: "LUC", checked: false },
            { name: "Sound", key: "SND", checked: false },
            { name: "Blank 1", key: "B1", checked: false },
            { name: "Toxin", key: "TOX", checked: false },
            { name: "Sustanance", key: "SUS", checked: false },
            { name: "Life", key: "LIF", checked: false },
            { name: "Blank 2", key: "B2", checked: false },
            { name: "Cibumancy", key: "CIBY", checked: false },
            { name: "Botanica", key: "BOT", checked: false },
            { name: "Corrosion", key: "CORS", checked: false },
            { name: "Cibumkinesis", key: "CIBM", checked: false },
            { name: "Mana", key: "MANA", checked: false },
            { name: "Poison", key: "POI", checked: false },
            { name: "Sugarmancy", key: "SGR", checked: false },
            { name: "Beastia", key: "BEST", checked: false },
            { name: "Venom", key: "VEN", checked: false },
            { name: "Blank 3", key: "B3", checked: false },
            { name: "Blank 4", key: "B4", checked: false },
            { name: "Death", key: "DTH", checked: false },
            { name: "Mind", key: "MIN", checked: false },
            { name: "Body", key: "BOD", checked: false },
            { name: "Blood", key: "BLD", checked: false },
            { name: "Cupidon", key: "CUP", checked: false },
            { name: "Camophage", key: "CAMO", checked: false },
            { name: "Bone-Smithing", key: "BS", checked: false },
            { name: "Psychokinesis", key: "PSY", checked: false },
            { name: "Aesthetica", key: "AES", checked: false },
            { name: "Necromancy", key: "NCRO", checked: false },
            { name: "Telepathy", key: "TEL", checked: false },
            { name: "Empower", key: "EMP", checked: false },
            { name: "Reincarnation", key: "REIN", checked: false },
            { name: "Blank 5", key: "B5", checked: false },
            { name: "Shapeshifting", key: "SS", checked: false },
            { name: "Water", key: "WAT", checked: false },
            { name: "Fire", key: "FIR", checked: false },
            { name: "Air", key: "AIR", checked: false },
            { name: "Ice", key: "ICE", checked: false },
            { name: "Convection", key: "CON", checked: false },
            { name: "Wind", key: "WIN", checked: false },
            { name: "Liquidation", key: "LIQ", checked: false },
            { name: "Detonation", key: "DET", checked: false },
            { name: "Pressure", key: "PRS", checked: false },
            { name: "Weather", key: "WTH", checked: false },
            { name: "Ignition", key: "IGN", checked: false },
            { name: "Blank 6", key: "B6", checked: false },
            { name: "Vapor", key: "VAP", checked: false },
            { name: "Molten", key: "MLT", checked: false },
            { name: "Aeration", key: "AER", checked: false },
            { name: "Earth", key: "ERT", checked: false },
            { name: "Alchemy", key: "ALC", checked: false },
            { name: "Crystalmancy", key: "CRY", checked: false },
            { name: "Terra", key: "TER", checked: false },
            { name: "Metallurgy", key: "METL", checked: false },
            { name: "Athalmus", tooltip: "Athalmus tend to have multiple elements, and are sometimes not classifiable.", key: "THAL", checked: false },
            { name: "Unknown", key: "UN", checked: false }
        ]
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
            GR: false,
            element: ["UN"]
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
            GR: false,
            element: ["LIT"]
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
            GR: true,
            element: ["UN"]
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
            GR: false,
            element: ["UN"]
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
            GR: false,
            element: ["THAL"]
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
            GR: false,
            element: ["THAL"]
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
            GR: false,
            element: ["THAL"]
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
            GR: false,
            element: ["THAL"]
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
            GR: false,
            element: [""]
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
            GR: false,
            element: [""]
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
            GR: false,
            element: [""]
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
            GR: false,
            element: [""]
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
            GR: false,
            element: [""]
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
            GR: false,
            element: [""]
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
            GR: false,
            element: [""]
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
            GR: false,
            element: [""]
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
            GR: false,
            element: [""]
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
            GR: false,
            element: [""]
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
            GR: false,
            element: [""]
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
            GR: false,
            element: [""]
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
            GR: false,
            element: [""]
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
            GR: false,
            element: [""]
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
            GR: false,
            element: [""]
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
            GR: false,
            element: [""]
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
            GR: false,
            element: [""]
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
            GR: false,
            element: [""]
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
            GR: false,
            element: [""]
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
            GR: false,
            element: [""]
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
            GR: false,
            element: [""]
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
            GR: false,
            element: [""]
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
            GR: false,
            element: [""]
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
            GR: false,
            element: [""]
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
            GR: false,
            element: [""]
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
            GR: false,
            element: [""]
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
            GR: false,
            element: [""]
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
            GR: false,
            element: [""]
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
            GR: false,
            element: [""]
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
            GR: false,
            element: [""]
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
            GR: false,
            element: [""]
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
            GR: false,
            element: [""]
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
            GR: false,
            element: [""]
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
            GR: false,
            element: [""]
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
            GR: false,
            element: [""]
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
            GR: false,
            element: [""]
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
            GR: false,
            element: [""]
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
            GR: false,
            element: [""]
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
            GR: false,
            element: [""]
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
            GR: false,
            element: [""]
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
            GR: false,
            element: [""]
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
            GR: false,
            element: [""]
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
            GR: false,
            element: [""]
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
            GR: false,
            element: [""]
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
            GR: false,
            element: [""]
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
            GR: false,
            element: [""]
        }
    }
]