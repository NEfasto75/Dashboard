const students = [
    {
        name: "Paola",
        age: "37",
        city: "Milano",
        origin: "Italy",
        subject: "SCRUM",
        difficulty: "4",
        fun: "5"
    },
    {
        name: "Paola",
        subject: "W1D1-1",
        difficulty: "2",
        fun: "4"
    },
    {
        name: "Paola",
        subject: "W1D2-1",
        difficulty: "2",
        fun: "5"
    },
    {
        name: "Paola",
        subject: "W1D2-2",
        difficulty: "1",
        fun: "6"
    },
    {
        name: "Paola",
        subject: "W1D2-3",
        difficulty: "2",
        fun: "6"
    },
    {
        name: "Paola",
        subject: "W1D2-4",
        difficulty: "4",
        fun: "4"
    },
    {
        name: "Paola",
        subject: "W1D2-5",
        difficulty: "3",
        fun: "4"
    },
    {
        name: "Paola",
        subject: "W1D3-1",
        difficulty: "3",
        fun: "5"
    },
    {
        name: "Paola",
        subject: "W1D3-2",
        difficulty: "3",
        fun: "4"
    },
    {
        name: "Paola",
        subject: "W1D3-4",
        difficulty: "4",
        fun: "5"
    },
    {
        name: "Paola",
        subject: "W1D3-5",
        difficulty: "5",
        fun: "5"
    },
    {
        name: "Paola",
        subject: "W1D3 - Project - Guess-the-number",
        difficulty: "5",
        fun: "6"
    },
    {
        name: "Paola",
        subject: "W1D4-1",
        difficulty: "6",
        fun: "5"
    },
    {
        name: "Paola",
        subject: "W1D4 - Project - Toggle Color",
        difficulty: "2",
        fun: "5"
    },
    {
        name: "Paola",
        subject: "W1D5 - Project - Vegetable Garden",
        difficulty: "4",
        fun: "6"
    },
    {
        name: "Paola",
        subject: "W2D1-1",
        difficulty: "1",
        fun: "3"
    },
    {
        name: "Paola",
        subject: "W2D1-2",
        difficulty: "3",
        fun: "5"
    },
    {
        name: "Paola",
        subject: "W2D2-1",
        difficulty: "4",
        fun: "4"
    },
    {
        name: "Paola",
        subject: "W2D2-2",
        difficulty: "4",
        fun: "6"
    },
    {
        name: "Paola",
        subject: "W2D2-3",
        difficulty: "3",
        fun: "3"
    },
    {
        name: "Paola",
        subject: "W2D3-1",
        difficulty: "4",
        fun: "2"
    },
    {
        name: "Paola",
        subject: "W2D3-2",
        difficulty: "1",
        fun: "3"
    },
    {
        name: "Paola",
        subject: "W2D3-3",
        difficulty: "6",
        fun: "6"
    },
    {
        name: "Paola",
        subject: "W2D4-1",
        difficulty: "2",
        fun: "3"
    },
    {
        name: "Paola",
        subject: "W2D4-2",
        difficulty: "5",
        fun: "1"
    },
    {
        name: "Paola",
        subject: "W2D4-3",
        difficulty: "2",
        fun: "3"
    },
    {
        name: "Paola",
        subject: "W2D5 - Project - Film Finder",
        difficulty: "6",
        fun: "6"
    },
    {
        name: "Paola",
        subject: "W3D1-1",
        difficulty: "3",
        fun: "4"
    },
    {
        name: "Paola",
        subject: "W3D1-2",
        difficulty: "2",
        fun: "5"
    },
    {
        name: "Paola",
        subject: "W3D1-3",
        difficulty: "2",
        fun: "2"
    },
    {
        name: "Paola",
        subject: "W3D1-4",
        difficulty: "3",
        fun: "3"
    },
    {
        name: "Paola",
        subject: "W3D2-1",
        difficulty: "2",
        fun: "4"
    },
    {
        name: "Paola",
        subject: "W3D2-2",
        difficulty: "3",
        fun: "3"
    },
    {
        name: "Paola",
        subject: "W3D2-3",
        difficulty: "3",
        fun: "5"
    },
    {
        name: "Paola",
        subject: "W3D3-1",
        difficulty: "4",
        fun: "4"
    },
    {
        name: "Paola",
        subject: "W3D3-2",
        difficulty: "4",
        fun: "6"
    },
    {
        name: "Paola",
        subject: "W3D3-3",
        difficulty: "3",
        fun: "5"
    },
    {
        name: "Paola",
        subject: "W3D3-4",
        difficulty: "4",
        fun: "5"
    },
    {
        name: "Paola",
        subject: "W3D4-1",
        difficulty: "5",
        fun: "5"
    },
    {
        name: "Paola",
        subject: "W3D4-2",
        difficulty: "1",
        fun: "5"
    },
    {
        name: "Paola",
        subject: "W3D5 - Project - To do List",
        difficulty: "6",
        fun: "5"
    },
    {
        name: "Paola",
        subject: "W4D2-1",
        difficulty: "1",
        fun: "5"
    },
    {
        name: "Paola",
        subject: "W4D2-2",
        difficulty: "1",
        fun: "5"
    },
    {
        name: "Paola",
        subject: "W4D2-3",
        difficulty: "1",
        fun: "5"
    },
    {
        name: "Paola",
        subject: "W4D2-4",
        difficulty: "1",
        fun: "5"
    },
    {
        name: "Paola",
        subject: "W4D3-1",
        difficulty: "2",
        fun: "5"
    },
    {
        name: "Paola",
        subject: "W4D3-2",
        difficulty: "1",
        fun: "6"
    },
    {
        name: "Paola",
        subject: "W4D3-3",
        difficulty: "1",
        fun: "5"
    },
    {
        name: "Paola",
        subject: "W4D3-4",
        difficulty: "1",
        fun: "5"
    },
    {
        name: "Paola",
        subject: "W4D3-5",
        difficulty: "1",
        fun: "5"
    },
    {
        name: "Paola",
        subject: "W4D3 - Project - Advanced CSS",
        difficulty: "2",
        fun: "5"
    },
    {
        name: "Paola",
        subject: "W5D4-1",
        difficulty: "3",
        fun: "4"
    },
    {
        name: "Paola",
        subject: "W5D5 - Project - Playlist",
        difficulty: "4",
        fun: "3"
    },
    {
        name: "Paola",
        subject: "W6D1-1",
        difficulty: "5",
        fun: "5"
    },
    {
        name: "Paola",
        subject: "W6D2-1",
        difficulty: "4",
        fun: "3"
    },
    {
        name: "Paola",
        subject: "W6D2 - Project - End Course",
        difficulty: "6",
        fun: "6"
    },
    {
        name: "Maximus",
        age: "25",
        city: "Lisboa",
        origin: "Portugal",
        subject: "SCRUM",
        difficulty: "5",
        fun: "1"
    },
    {
        name: "Maximus",
        subject: "W1D1-1",
        difficulty: "4",
        fun: "3"
    },
    {
        name: "Maximus",
        subject: "W1D2-1",
        difficulty: "3",
        fun: "4"
    },
    {
        name: "Maximus",
        subject: "W1D2-2",
        difficulty: "4",
        fun: "2"
    },
    {
        name: "Maximus",
        subject: "W1D2-3",
        difficulty: "4",
        fun: "1"
    },
    {
        name: "Maximus",
        subject: "W1D2-4",
        difficulty: "2",
        fun: "5"
    },
    {
        name: "Maximus",
        subject: "W1D2-5",
        difficulty: "4",
        fun: "2"
    },
    {
        name: "Maximus",
        subject: "W1D3-1",
        difficulty: "3",
        fun: "2"
    },
    {
        name: "Maximus",
        subject: "W1D3-2",
        difficulty: "2",
        fun: "2"
    },
    {
        name: "Maximus",
        subject: "W1D3-4",
        difficulty: "1",
        fun: "1"
    },
    {
        name: "Maximus",
        subject: "W1D3-5",
        difficulty: "4",
        fun: "4"
    },
    {
        name: "Maximus",
        subject: "W1D3 - Project - Guess-the-number",
        difficulty: "2",
        fun: "3"
    },
    {
        name: "Maximus",
        subject: "W1D4-1",
        difficulty: "3",
        fun: "5"
    },
    {
        name: "Maximus",
        subject: "W1D4 - Project - Toggle Color",
        difficulty: "4",
        fun: "3"
    },
    {
        name: "Maximus",
        subject: "W1D5 - Project - Vegetable Garden",
        difficulty: "4",
        fun: "2"
    },
    {
        name: "Maximus",
        subject: "W2D1-1",
        difficulty: "2",
        fun: "4"
    },
    {
        name: "Maximus",
        subject: "W2D1-2",
        difficulty: "4",
        fun: "4"
    },
    {
        name: "Maximus",
        subject: "W2D2-1",
        difficulty: "3",
        fun: "5"
    },
    {
        name: "Maximus",
        subject: "W2D2-2",
        difficulty: "3",
        fun: "4"
    },
    {
        name: "Maximus",
        subject: "W2D2-3",
        difficulty: "2",
        fun: "4"
    },
    {
        name: "Maximus",
        subject: "W2D3-1",
        difficulty: "3",
        fun: "3"
    },
    {
        name: "Maximus",
        subject: "W2D3-2",
        difficulty: "4",
        fun: "1"
    },
    {
        name: "Maximus",
        subject: "W2D3-3",
        difficulty: "1",
        fun: "1"
    },
    {
        name: "Maximus",
        subject: "W2D4-1",
        difficulty: "1",
        fun: "4"
    },
    {
        name: "Maximus",
        subject: "W2D4-2",
        difficulty: "4",
        fun: "3"
    },
    {
        name: "Maximus",
        subject: "W2D4-3",
        difficulty: "2",
        fun: "3"
    },
    {
        name: "Maximus",
        subject: "W2D5 - Project - Film Finder",
        difficulty: "2",
        fun: "3"
    },
    {
        name: "Maximus",
        subject: "W3D1-1",
        difficulty: "4",
        fun: "2"
    },
    {
        name: "Maximus",
        subject: "W3D1-2",
        difficulty: "3",
        fun: "2"
    },
    {
        name: "Maximus",
        subject: "W3D1-3",
        difficulty: "1",
        fun: "4"
    },
    {
        name: "Maximus",
        subject: "W3D1-4",
        difficulty: "2",
        fun: "4"
    },
    {
        name: "Maximus",
        subject: "W3D2-1",
        difficulty: "1",
        fun: "3"
    },
    {
        name: "Maximus",
        subject: "W3D2-2",
        difficulty: "2",
        fun: "3"
    },
    {
        name: "Maximus",
        subject: "W3D2-3",
        difficulty: "2",
        fun: "3"
    },
    {
        name: "Maximus",
        subject: "W3D3-1",
        difficulty: "2",
        fun: "3"
    },
    {
        name: "Maximus",
        subject: "W3D3-2",
        difficulty: "4",
        fun: "3"
    },
    {
        name: "Maximus",
        subject: "W3D3-3",
        difficulty: "3",
        fun: "3"
    },
    {
        name: "Maximus",
        subject: "W3D3-4",
        difficulty: "1",
        fun: "2"
    },
    {
        name: "Maximus",
        subject: "W3D4-1",
        difficulty: "1",
        fun: "1"
    },
    {
        name: "Maximus",
        subject: "W3D4-2",
        difficulty: "3",
        fun: "2"
    },
    {
        name: "Maximus",
        subject: "W3D5 - Project - To do List",
        difficulty: "1",
        fun: "1"
    },
    {
        name: "Maximus",
        subject: "W4D2-1",
        difficulty: "2",
        fun: "1"
    },
    {
        name: "Maximus",
        subject: "W4D2-2",
        difficulty: "4",
        fun: "2"
    },
    {
        name: "Maximus",
        subject: "W4D2-3",
        difficulty: "2",
        fun: "2"
    },
    {
        name: "Maximus",
        subject: "W4D2-4",
        difficulty: "3",
        fun: "4"
    },
    {
        name: "Maximus",
        subject: "W4D3-1",
        difficulty: "2",
        fun: "1"
    },
    {
        name: "Maximus",
        subject: "W4D3-2",
        difficulty: "4",
        fun: "5"
    },
    {
        name: "Maximus",
        subject: "W4D3-3",
        difficulty: "3",
        fun: "1"
    },
    {
        name: "Maximus",
        subject: "W4D3-4",
        difficulty: "3",
        fun: "1"
    },
    {
        name: "Maximus",
        subject: "W4D3-5",
        difficulty: "5",
        fun: "2"
    },
    {
        name: "Maximus",
        subject: "W4D3 - Project - Advanced CSS",
        difficulty: "4",
        fun: "4"
    },
    {
        name: "Maximus",
        subject: "W5D4-1",
        difficulty: "1",
        fun: "3"
    },
    {
        name: "Maximus",
        subject: "W5D5 - Project - Playlist",
        difficulty: "3",
        fun: "3"
    },
    {
        name: "Maximus",
        subject: "W6D1-1",
        difficulty: "1",
        fun: "1"
    },
    {
        name: "Maximus",
        subject: "W6D2-1",
        difficulty: "2",
        fun: "4"
    },
    {
        name: "Maximus",
        subject: "W6D2 - Project - End Course",
        difficulty: "3",
        fun: "4"
    },
    {
        name: "Gertrude",
        age: "40",
        city: "Berlin",
        origin: "Germany",
        subject: "SCRUM",
        difficulty: "2",
        fun: "2"
    },
    {
        name: "Gertrude",
        subject: "W1D1-1",
        difficulty: "4",
        fun: "3"
    },
    {
        name: "Gertrude",
        subject: "W1D2-1",
        difficulty: "1",
        fun: "3"
    },
    {
        name: "Gertrude",
        subject: "W1D2-2",
        difficulty: "2",
        fun: "4"
    },
    {
        name: "Gertrude",
        subject: "W1D2-3",
        difficulty: "1",
        fun: "4"
    },
    {
        name: "Gertrude",
        subject: "W1D2-4",
        difficulty: "3",
        fun: "4"
    },
    {
        name: "Gertrude",
        subject: "W1D2-5",
        difficulty: "1",
        fun: "2"
    },
    {
        name: "Gertrude",
        subject: "W1D3-1",
        difficulty: "2",
        fun: "4"
    },
    {
        name: "Gertrude",
        subject: "W1D3-2",
        difficulty: "4",
        fun: "3"
    },
    {
        name: "Gertrude",
        subject: "W1D3-4",
        difficulty: "4",
        fun: "2"
    },
    {
        name: "Gertrude",
        subject: "W1D3-5",
        difficulty: "2",
        fun: "4"
    },
    {
        name: "Gertrude",
        subject: "W1D3 - Project - Guess-the-number",
        difficulty: "4",
        fun: "2"
    },
    {
        name: "Gertrude",
        subject: "W1D4-1",
        difficulty: "1",
        fun: "3"
    },
    {
        name: "Gertrude",
        subject: "W1D4 - Project - Toggle Color",
        difficulty: "4",
        fun: "3"
    },
    {
        name: "Gertrude",
        subject: "W1D5 - Project - Vegetable Garden",
        difficulty: "4",
        fun: "4"
    },
    {
        name: "Gertrude",
        subject: "W2D1-1",
        difficulty: "2",
        fun: "3"
    },
    {
        name: "Gertrude",
        subject: "W2D1-2",
        difficulty: "4",
        fun: "1"
    },
    {
        name: "Gertrude",
        subject: "W2D2-1",
        difficulty: "4",
        fun: "1"
    },
    {
        name: "Gertrude",
        subject: "W2D2-2",
        difficulty: "3",
        fun: "2"
    },
    {
        name: "Gertrude",
        subject: "W2D2-3",
        difficulty: "4",
        fun: "1"
    },
    {
        name: "Gertrude",
        subject: "W2D3-1",
        difficulty: "1",
        fun: "1"
    },
    {
        name: "Gertrude",
        subject: "W2D3-2",
        difficulty: "1",
        fun: "2"
    },
    {
        name: "Gertrude",
        subject: "W2D3-3",
        difficulty: "3",
        fun: "3"
    },
    {
        name: "Gertrude",
        subject: "W2D4-1",
        difficulty: "4",
        fun: "4"
    },
    {
        name: "Gertrude",
        subject: "W2D4-2",
        difficulty: "3",
        fun: "2"
    },
    {
        name: "Gertrude",
        subject: "W2D4-3",
        difficulty: "4",
        fun: "1"
    },
    {
        name: "Gertrude",
        subject: "W2D5 - Project - Film Finder",
        difficulty: "4",
        fun: "3"
    },
    {
        name: "Gertrude",
        subject: "W3D1-1",
        difficulty: "4",
        fun: "3"
    },
    {
        name: "Gertrude",
        subject: "W3D1-2",
        difficulty: "3",
        fun: "3"
    },
    {
        name: "Gertrude",
        subject: "W3D1-3",
        difficulty: "2",
        fun: "3"
    },
    {
        name: "Gertrude",
        subject: "W3D1-4",
        difficulty: "3",
        fun: "3"
    },
    {
        name: "Gertrude",
        subject: "W3D2-1",
        difficulty: "3",
        fun: "3"
    },
    {
        name: "Gertrude",
        subject: "W3D2-2",
        difficulty: "2",
        fun: "2"
    },
    {
        name: "Gertrude",
        subject: "W3D2-3",
        difficulty: "3",
        fun: "1"
    },
    {
        name: "Gertrude",
        subject: "W3D3-1",
        difficulty: "4",
        fun: "4"
    },
    {
        name: "Gertrude",
        subject: "W3D3-2",
        difficulty: "2",
        fun: "3"
    },
    {
        name: "Gertrude",
        subject: "W3D3-3",
        difficulty: "4",
        fun: "1"
    },
    {
        name: "Gertrude",
        subject: "W3D3-4",
        difficulty: "6",
        fun: "2"
    },
    {
        name: "Gertrude",
        subject: "W3D4-1",
        difficulty: "1",
        fun: "3"
    },
    {
        name: "Gertrude",
        subject: "W3D4-2",
        difficulty: "2",
        fun: "2"
    },
    {
        name: "Gertrude",
        subject: "W3D5 - Project - To do List",
        difficulty: "5",
        fun: "3"
    },
    {
        name: "Gertrude",
        subject: "W4D2-1",
        difficulty: "1",
        fun: "4"
    },
    {
        name: "Gertrude",
        subject: "W4D2-2",
        difficulty: "2",
        fun: "3"
    },
    {
        name: "Gertrude",
        subject: "W4D2-3",
        difficulty: "6",
        fun: "4"
    },
    {
        name: "Gertrude",
        subject: "W4D2-4",
        difficulty: "1",
        fun: "2"
    },
    {
        name: "Gertrude",
        subject: "W4D3-1",
        difficulty: "1",
        fun: "4"
    },
    {
        name: "Gertrude",
        subject: "W4D3-2",
        difficulty: "4",
        fun: "4"
    },
    {
        name: "Gertrude",
        subject: "W4D3-3",
        difficulty: "3",
        fun: "2"
    },
    {
        name: "Gertrude",
        subject: "W4D3-4",
        difficulty: "1",
        fun: "2"
    },
    {
        name: "Gertrude",
        subject: "W4D3-5",
        difficulty: "4",
        fun: "3"
    },
    {
        name: "Gertrude",
        subject: "W4D3 - Project - Advanced CSS",
        difficulty: "2",
        fun: "2"
    },
    {
        name: "Gertrude",
        subject: "W5D4-1",
        difficulty: "1",
        fun: "4"
    },
    {
        name: "Gertrude",
        subject: "W5D5 - Project - Playlist",
        difficulty: "3",
        fun: "1"
    },
    {
        name: "Gertrude",
        subject: "W6D1-1",
        difficulty: "4",
        fun: "2"
    },
    {
        name: "Gertrude",
        subject: "W6D2-1",
        difficulty: "4",
        fun: "1"
    },
    {
        name: "Gertrude",
        subject: "W6D2 - Project - End Course",
        difficulty: "1",
        fun: "1"
    },
    {
        name: "Pedro",
        age: "42",
        city: "Barcelona",
        origin: "Spanish",
        subject: "SCRUM",
        difficulty: "2",
        fun: "2"
    },
    {
        name: "Pedro",
        subject: "W1D1-1",
        difficulty: "2",
        fun: "4"
    },
    {
        name: "Pedro",
        subject: "W1D2-1",
        difficulty: "2",
        fun: "4"
    },
    {
        name: "Pedro",
        subject: "W1D2-2",
        difficulty: "3",
        fun: "3"
    },
    {
        name: "Pedro",
        subject: "W1D2-3",
        difficulty: "1",
        fun: "3"
    },
    {
        name: "Pedro",
        subject: "W1D2-4",
        difficulty: "1",
        fun: "3"
    },
    {
        name: "Pedro",
        subject: "W1D2-5",
        difficulty: "3",
        fun: "1"
    },
    {
        name: "Pedro",
        subject: "W1D3-1",
        difficulty: "2",
        fun: "4"
    },
    {
        name: "Pedro",
        subject: "W1D3-2",
        difficulty: "4",
        fun: "3"
    },
    {
        name: "Pedro",
        subject: "W1D3-4",
        difficulty: "3",
        fun: "1"
    },
    {
        name: "Pedro",
        subject: "W1D3-5",
        difficulty: "5",
        fun: "2"
    },
    {
        name: "Pedro",
        subject: "W1D3 - Project - Guess-the-number",
        difficulty: "3",
        fun: "1"
    },
    {
        name: "Pedro",
        subject: "W1D4-1",
        difficulty: "2",
        fun: "1"
    },
    {
        name: "Pedro",
        subject: "W1D4 - Project - Toggle Color",
        difficulty: "1",
        fun: "3"
    },
    {
        name: "Pedro",
        subject: "W1D5 - Project - Vegetable Garden",
        difficulty: "3",
        fun: "5"
    },
    {
        name: "Pedro",
        subject: "W2D1-1",
        difficulty: "4",
        fun: "4"
    },
    {
        name: "Pedro",
        subject: "W2D1-2",
        difficulty: "3",
        fun: "2"
    },
    {
        name: "Pedro",
        subject: "W2D2-1",
        difficulty: "5",
        fun: "3"
    },
    {
        name: "Pedro",
        subject: "W2D2-2",
        difficulty: "2",
        fun: "2"
    },
    {
        name: "Pedro",
        subject: "W2D2-3",
        difficulty: "3",
        fun: "2"
    },
    {
        name: "Pedro",
        subject: "W2D3-1",
        difficulty: "3",
        fun: "2"
    },
    {
        name: "Pedro",
        subject: "W2D3-2",
        difficulty: "4",
        fun: "2"
    },
    {
        name: "Pedro",
        subject: "W2D3-3",
        difficulty: "4",
        fun: "3"
    },
    {
        name: "Pedro",
        subject: "W2D4-1",
        difficulty: "2",
        fun: "2"
    },
    {
        name: "Pedro",
        subject: "W2D4-2",
        difficulty: "4",
        fun: "1"
    },
    {
        name: "Pedro",
        subject: "W2D4-3",
        difficulty: "3",
        fun: "1"
    },
    {
        name: "Pedro",
        subject: "W2D5 - Project - Film Finder",
        difficulty: "6",
        fun: "1"
    },
    {
        name: "Pedro",
        subject: "W3D1-1",
        difficulty: "2",
        fun: "1"
    },
    {
        name: "Pedro",
        subject: "W3D1-2",
        difficulty: "1",
        fun: "4"
    },
    {
        name: "Pedro",
        subject: "W3D1-3",
        difficulty: "3",
        fun: "3"
    },
    {
        name: "Pedro",
        subject: "W3D1-4",
        difficulty: "4",
        fun: "3"
    },
    {
        name: "Pedro",
        subject: "W3D2-1",
        difficulty: "1",
        fun: "3"
    },
    {
        name: "Pedro",
        subject: "W3D2-2",
        difficulty: "4",
        fun: "4"
    },
    {
        name: "Pedro",
        subject: "W3D2-3",
        difficulty: "2",
        fun: "1"
    },
    {
        name: "Pedro",
        subject: "W3D3-1",
        difficulty: "4",
        fun: "3"
    },
    {
        name: "Pedro",
        subject: "W3D3-2",
        difficulty: "3",
        fun: "1"
    },
    {
        name: "Pedro",
        subject: "W3D3-3",
        difficulty: "2",
        fun: "4"
    },
    {
        name: "Pedro",
        subject: "W3D3-4",
        difficulty: "4",
        fun: "1"
    },
    {
        name: "Pedro",
        subject: "W3D4-1",
        difficulty: "3",
        fun: "4"
    },
    {
        name: "Pedro",
        subject: "W3D4-2",
        difficulty: "2",
        fun: "4"
    },
    {
        name: "Pedro",
        subject: "W3D5 - Project - To do List",
        difficulty: "2",
        fun: "3"
    },
    {
        name: "Pedro",
        subject: "W4D2-1",
        difficulty: "1",
        fun: "1"
    },
    {
        name: "Pedro",
        subject: "W4D2-2",
        difficulty: "3",
        fun: "1"
    },
    {
        name: "Pedro",
        subject: "W4D2-3",
        difficulty: "3",
        fun: "2"
    },
    {
        name: "Pedro",
        subject: "W4D2-4",
        difficulty: "1",
        fun: "3"
    },
    {
        name: "Pedro",
        subject: "W4D3-1",
        difficulty: "4",
        fun: "4"
    },
    {
        name: "Pedro",
        subject: "W4D3-2",
        difficulty: "1",
        fun: "4"
    },
    {
        name: "Pedro",
        subject: "W4D3-3",
        difficulty: "3",
        fun: "1"
    },
    {
        name: "Pedro",
        subject: "W4D3-4",
        difficulty: "2",
        fun: "3"
    },
    {
        name: "Pedro",
        subject: "W4D3-5",
        difficulty: "1",
        fun: "3"
    },
    {
        name: "Pedro",
        subject: "W4D3 - Project - Advanced CSS",
        difficulty: "3",
        fun: "2"
    },
    {
        name: "Pedro",
        subject: "W5D4-1",
        difficulty: "3",
        fun: "2"
    },
    {
        name: "Pedro",
        subject: "W5D5 - Project - Playlist",
        difficulty: "3",
        fun: "2"
    },
    {
        name: "Pedro",
        subject: "W6D1-1",
        difficulty: "1",
        fun: "1"
    },
    {
        name: "Pedro",
        subject: "W6D2-1",
        difficulty: "4",
        fun: "3"
    },
    {
        name: "Pedro",
        subject: "W6D2 - Project - End Course",
        difficulty: "2",
        fun: "2"
    },
    {
        name: "Ana",
        age: "27",
        city: "Warsaw",
        origin: "Poland",
        subject: "SCRUM",
        difficulty: "2",
        fun: "1"
    },
    {
        name: "Ana",
        subject: "W1D1-1",
        difficulty: "5",
        fun: "1"
    },
    {
        name: "Ana",
        subject: "W1D2-1",
        difficulty: "3",
        fun: "2"
    },
    {
        name: "Ana",
        subject: "W1D2-2",
        difficulty: "2",
        fun: "1"
    },
    {
        name: "Ana",
        subject: "W1D2-3",
        difficulty: "2",
        fun: "1"
    },
    {
        name: "Ana",
        subject: "W1D2-4",
        difficulty: "4",
        fun: "4"
    },
    {
        name: "Ana",
        subject: "W1D2-5",
        difficulty: "3",
        fun: "4"
    },
    {
        name: "Ana",
        subject: "W1D3-1",
        difficulty: "3",
        fun: "6"
    },
    {
        name: "Ana",
        subject: "W1D3-2",
        difficulty: "2",
        fun: "1"
    },
    {
        name: "Ana",
        subject: "W1D3-4",
        difficulty: "3",
        fun: "2"
    },
    {
        name: "Ana",
        subject: "W1D3-5",
        difficulty: "2",
        fun: "1"
    },
    {
        name: "Ana",
        subject: "W1D3 - Project - Guess-the-number",
        difficulty: "2",
        fun: "2"
    },
    {
        name: "Ana",
        subject: "W1D4-1",
        difficulty: "4",
        fun: "2"
    },
    {
        name: "Ana",
        subject: "W1D4 - Project - Toggle Color",
        difficulty: "1",
        fun: "3"
    },
    {
        name: "Ana",
        subject: "W1D5 - Project - Vegetable Garden",
        difficulty: "1",
        fun: "4"
    },
    {
        name: "Ana",
        subject: "W2D1-1",
        difficulty: "1",
        fun: "5"
    },
    {
        name: "Ana",
        subject: "W2D1-2",
        difficulty: "4",
        fun: "2"
    },
    {
        name: "Ana",
        subject: "W2D2-1",
        difficulty: "4",
        fun: "1"
    },
    {
        name: "Ana",
        subject: "W2D2-2",
        difficulty: "3",
        fun: "3"
    },
    {
        name: "Ana",
        subject: "W2D2-3",
        difficulty: "4",
        fun: "1"
    },
    {
        name: "Ana",
        subject: "W2D3-1",
        difficulty: "4",
        fun: "2"
    },
    {
        name: "Ana",
        subject: "W2D3-2",
        difficulty: "3",
        fun: "4"
    },
    {
        name: "Ana",
        subject: "W2D3-3",
        difficulty: "3",
        fun: "3"
    },
    {
        name: "Ana",
        subject: "W2D4-1",
        difficulty: "1",
        fun: "5"
    },
    {
        name: "Ana",
        subject: "W2D4-2",
        difficulty: "3",
        fun: "3"
    },
    {
        name: "Ana",
        subject: "W2D4-3",
        difficulty: "3",
        fun: "4"
    },
    {
        name: "Ana",
        subject: "W2D5 - Project - Film Finder",
        difficulty: "2",
        fun: "4"
    },
    {
        name: "Ana",
        subject: "W3D1-1",
        difficulty: "1",
        fun: "1"
    },
    {
        name: "Ana",
        subject: "W3D1-2",
        difficulty: "3",
        fun: "3"
    },
    {
        name: "Ana",
        subject: "W3D1-3",
        difficulty: "3",
        fun: "1"
    },
    {
        name: "Ana",
        subject: "W3D1-4",
        difficulty: "3",
        fun: "2"
    },
    {
        name: "Ana",
        subject: "W3D2-1",
        difficulty: "1",
        fun: "1"
    },
    {
        name: "Ana",
        subject: "W3D2-2",
        difficulty: "2",
        fun: "4"
    },
    {
        name: "Ana",
        subject: "W3D2-3",
        difficulty: "3",
        fun: "1"
    },
    {
        name: "Ana",
        subject: "W3D3-1",
        difficulty: "1",
        fun: "4"
    },
    {
        name: "Ana",
        subject: "W3D3-2",
        difficulty: "5",
        fun: "1"
    },
    {
        name: "Ana",
        subject: "W3D3-3",
        difficulty: "3",
        fun: "2"
    },
    {
        name: "Ana",
        subject: "W3D3-4",
        difficulty: "2",
        fun: "3"
    },
    {
        name: "Ana",
        subject: "W3D4-1",
        difficulty: "4",
        fun: "3"
    },
    {
        name: "Ana",
        subject: "W3D4-2",
        difficulty: "3",
        fun: "2"
    },
    {
        name: "Ana",
        subject: "W3D5 - Project - To do List",
        difficulty: "7",
        fun: "3"
    },
    {
        name: "Ana",
        subject: "W4D2-1",
        difficulty: "3",
        fun: "4"
    },
    {
        name: "Ana",
        subject: "W4D2-2",
        difficulty: "2",
        fun: "2"
    },
    {
        name: "Ana",
        subject: "W4D2-3",
        difficulty: "3",
        fun: "4"
    },
    {
        name: "Ana",
        subject: "W4D2-4",
        difficulty: "1",
        fun: "1"
    },
    {
        name: "Ana",
        subject: "W4D3-1",
        difficulty: "2",
        fun: "4"
    },
    {
        name: "Ana",
        subject: "W4D3-2",
        difficulty: "1",
        fun: "3"
    },
    {
        name: "Ana",
        subject: "W4D3-3",
        difficulty: "2",
        fun: "5"
    },
    {
        name: "Ana",
        subject: "W4D3-4",
        difficulty: "4",
        fun: "1"
    },
    {
        name: "Ana",
        subject: "W4D3-5",
        difficulty: "3",
        fun: "2"
    },
    {
        name: "Ana",
        subject: "W4D3 - Project - Advanced CSS",
        difficulty: "3",
        fun: "3"
    },
    {
        name: "Ana",
        subject: "W5D4-1",
        difficulty: "1",
        fun: "4"
    },
    {
        name: "Ana",
        subject: "W5D5 - Project - Playlist",
        difficulty: "2",
        fun: "1"
    },
    {
        name: "Ana",
        subject: "W6D1-1",
        difficulty: "2",
        fun: "1"
    },
    {
        name: "Ana",
        subject: "W6D2-1",
        difficulty: "1",
        fun: "4"
    },
    {
        name: "Ana",
        subject: "W6D2 - Project - End Course",
        difficulty: "1",
        fun: "4"
    },
    {
        name: "Antoine",
        age: "28",
        city: "Lyon",
        origin: "France",
        subject: "SCRUM",
        difficulty: "6",
        fun: "4"
    },
    {
        name: "Antoine",
        subject: "W1D1-1",
        difficulty: "4",
        fun: "2"
    },
    {
        name: "Antoine",
        subject: "W1D2-1",
        difficulty: "2",
        fun: "2"
    },
    {
        name: "Antoine",
        subject: "W1D2-2",
        difficulty: "1",
        fun: "4"
    },
    {
        name: "Antoine",
        subject: "W1D2-3",
        difficulty: "3",
        fun: "2"
    },
    {
        name: "Antoine",
        subject: "W1D2-4",
        difficulty: "3",
        fun: "1"
    },
    {
        name: "Antoine",
        subject: "W1D2-5",
        difficulty: "2",
        fun: "3"
    },
    {
        name: "Antoine",
        subject: "W1D3-1",
        difficulty: "3",
        fun: "4"
    },
    {
        name: "Antoine",
        subject: "W1D3-2",
        difficulty: "2",
        fun: "2"
    },
    {
        name: "Antoine",
        subject: "W1D3-4",
        difficulty: "2",
        fun: "3"
    },
    {
        name: "Antoine",
        subject: "W1D3-5",
        difficulty: "1",
        fun: "3"
    },
    {
        name: "Antoine",
        subject: "W1D3 - Project - Guess-the-number",
        difficulty: "1",
        fun: "1"
    },
    {
        name: "Antoine",
        subject: "W1D4-1",
        difficulty: "3",
        fun: "3"
    },
    {
        name: "Antoine",
        subject: "W1D4 - Project - Toggle Color",
        difficulty: "4",
        fun: "1"
    },
    {
        name: "Antoine",
        subject: "W1D5 - Project - Vegetable Garden",
        difficulty: "3",
        fun: "2"
    },
    {
        name: "Antoine",
        subject: "W2D1-1",
        difficulty: "1",
        fun: "2"
    },
    {
        name: "Antoine",
        subject: "W2D1-2",
        difficulty: "2",
        fun: "3"
    },
    {
        name: "Antoine",
        subject: "W2D2-1",
        difficulty: "1",
        fun: "2"
    },
    {
        name: "Antoine",
        subject: "W2D2-2",
        difficulty: "4",
        fun: "2"
    },
    {
        name: "Antoine",
        subject: "W2D2-3",
        difficulty: "2",
        fun: "2"
    },
    {
        name: "Antoine",
        subject: "W2D3-1",
        difficulty: "2",
        fun: "1"
    },
    {
        name: "Antoine",
        subject: "W2D3-2",
        difficulty: "3",
        fun: "3"
    },
    {
        name: "Antoine",
        subject: "W2D3-3",
        difficulty: "2",
        fun: "1"
    },
    {
        name: "Antoine",
        subject: "W2D4-1",
        difficulty: "2",
        fun: "3"
    },
    {
        name: "Antoine",
        subject: "W2D4-2",
        difficulty: "3",
        fun: "2"
    },
    {
        name: "Antoine",
        subject: "W2D4-3",
        difficulty: "3",
        fun: "4"
    },
    {
        name: "Antoine",
        subject: "W2D5 - Project - Film Finder",
        difficulty: "3",
        fun: "1"
    },
    {
        name: "Antoine",
        subject: "W3D1-1",
        difficulty: "4",
        fun: "4"
    },
    {
        name: "Antoine",
        subject: "W3D1-2",
        difficulty: "1",
        fun: "4"
    },
    {
        name: "Antoine",
        subject: "W3D1-3",
        difficulty: "1",
        fun: "4"
    },
    {
        name: "Antoine",
        subject: "W3D1-4",
        difficulty: "1",
        fun: "2"
    },
    {
        name: "Antoine",
        subject: "W3D2-1",
        difficulty: "1",
        fun: "4"
    },
    {
        name: "Antoine",
        subject: "W3D2-2",
        difficulty: "1",
        fun: "1"
    },
    {
        name: "Antoine",
        subject: "W3D2-3",
        difficulty: "4",
        fun: "3"
    },
    {
        name: "Antoine",
        subject: "W3D3-1",
        difficulty: "2",
        fun: "1"
    },
    {
        name: "Antoine",
        subject: "W3D3-2",
        difficulty: "2",
        fun: "1"
    },
    {
        name: "Antoine",
        subject: "W3D3-3",
        difficulty: "1",
        fun: "3"
    },
    {
        name: "Antoine",
        subject: "W3D3-4",
        difficulty: "4",
        fun: "2"
    },
    {
        name: "Antoine",
        subject: "W3D4-1",
        difficulty: "4",
        fun: "4"
    },
    {
        name: "Antoine",
        subject: "W3D4-2",
        difficulty: "1",
        fun: "1"
    },
    {
        name: "Antoine",
        subject: "W3D5 - Project - To do List",
        difficulty: "3",
        fun: "4"
    },
    {
        name: "Antoine",
        subject: "W4D2-1",
        difficulty: "3",
        fun: "1"
    },
    {
        name: "Antoine",
        subject: "W4D2-2",
        difficulty: "6",
        fun: "4"
    },
    {
        name: "Antoine",
        subject: "W4D2-3",
        difficulty: "4",
        fun: "1"
    },
    {
        name: "Antoine",
        subject: "W4D2-4",
        difficulty: "2",
        fun: "3"
    },
    {
        name: "Antoine",
        subject: "W4D3-1",
        difficulty: "3",
        fun: "1"
    },
    {
        name: "Antoine",
        subject: "W4D3-2",
        difficulty: "4",
        fun: "2"
    },
    {
        name: "Antoine",
        subject: "W4D3-3",
        difficulty: "3",
        fun: "3"
    },
    {
        name: "Antoine",
        subject: "W4D3-4",
        difficulty: "1",
        fun: "3"
    },
    {
        name: "Antoine",
        subject: "W4D3-5",
        difficulty: "2",
        fun: "1"
    },
    {
        name: "Antoine",
        subject: "W4D3 - Project - Advanced CSS",
        difficulty: "2",
        fun: "3"
    },
    {
        name: "Antoine",
        subject: "W5D4-1",
        difficulty: "1",
        fun: "3"
    },
    {
        name: "Antoine",
        subject: "W5D5 - Project - Playlist",
        difficulty: "4",
        fun: "3"
    },
    {
        name: "Antoine",
        subject: "W6D1-1",
        difficulty: "1",
        fun: "3"
    },
    {
        name: "Antoine",
        subject: "W6D2-1",
        difficulty: "1",
        fun: "4"
    },
    {
        name: "Antoine",
        subject: "W6D2 - Project - End Course",
        difficulty: "4",
        fun: "3"
    },
    {
        name: "Ioannis",
        age: "35",
        city: "Athens",
        origin: "Greece",
        subject: "SCRUM",
        difficulty: "2",
        fun: "4"
    },
    {
        name: "Ioannis",
        subject: "W1D1-1",
        difficulty: "3",
        fun: "5"
    },
    {
        name: "Ioannis",
        subject: "W1D2-1",
        difficulty: "2",
        fun: "3"
    },
    {
        name: "Ioannis",
        subject: "W1D2-2",
        difficulty: "1",
        fun: "2"
    },
    {
        name: "Ioannis",
        subject: "W1D2-3",
        difficulty: "1",
        fun: "3"
    },
    {
        name: "Ioannis",
        subject: "W1D2-4",
        difficulty: "3",
        fun: "2"
    },
    {
        name: "Ioannis",
        subject: "W1D2-5",
        difficulty: "1",
        fun: "3"
    },
    {
        name: "Ioannis",
        subject: "W1D3-1",
        difficulty: "1",
        fun: "1"
    },
    {
        name: "Ioannis",
        subject: "W1D3-2",
        difficulty: "2",
        fun: "3"
    },
    {
        name: "Ioannis",
        subject: "W1D3-4",
        difficulty: "1",
        fun: "2"
    },
    {
        name: "Ioannis",
        subject: "W1D3-5",
        difficulty: "2",
        fun: "2"
    },
    {
        name: "Ioannis",
        subject: "W1D3 - Project - Guess-the-number",
        difficulty: "4",
        fun: "1"
    },
    {
        name: "Ioannis",
        subject: "W1D4-1",
        difficulty: "4",
        fun: "3"
    },
    {
        name: "Ioannis",
        subject: "W1D4 - Project - Toggle Color",
        difficulty: "2",
        fun: "4"
    },
    {
        name: "Ioannis",
        subject: "W1D5 - Project - Vegetable Garden",
        difficulty: "3",
        fun: "6"
    },
    {
        name: "Ioannis",
        subject: "W2D1-1",
        difficulty: "2",
        fun: "2"
    },
    {
        name: "Ioannis",
        subject: "W2D1-2",
        difficulty: "3",
        fun: "1"
    },
    {
        name: "Ioannis",
        subject: "W2D2-1",
        difficulty: "1",
        fun: "1"
    },
    {
        name: "Ioannis",
        subject: "W2D2-2",
        difficulty: "2",
        fun: "1"
    },
    {
        name: "Ioannis",
        subject: "W2D2-3",
        difficulty: "4",
        fun: "2"
    },
    {
        name: "Ioannis",
        subject: "W2D3-1",
        difficulty: "1",
        fun: "1"
    },
    {
        name: "Ioannis",
        subject: "W2D3-2",
        difficulty: "1",
        fun: "4"
    },
    {
        name: "Ioannis",
        subject: "W2D3-3",
        difficulty: "4",
        fun: "2"
    },
    {
        name: "Ioannis",
        subject: "W2D4-1",
        difficulty: "4",
        fun: "5"
    },
    {
        name: "Ioannis",
        subject: "W2D4-2",
        difficulty: "4",
        fun: "4"
    },
    {
        name: "Ioannis",
        subject: "W2D4-3",
        difficulty: "2",
        fun: "3"
    },
    {
        name: "Ioannis",
        subject: "W2D5 - Project - Film Finder",
        difficulty: "5",
        fun: "1"
    },
    {
        name: "Ioannis",
        subject: "W3D1-1",
        difficulty: "1",
        fun: "1"
    },
    {
        name: "Ioannis",
        subject: "W3D1-2",
        difficulty: "1",
        fun: "2"
    },
    {
        name: "Ioannis",
        subject: "W3D1-3",
        difficulty: "2",
        fun: "3"
    },
    {
        name: "Ioannis",
        subject: "W3D1-4",
        difficulty: "2",
        fun: "4"
    },
    {
        name: "Ioannis",
        subject: "W3D2-1",
        difficulty: "4",
        fun: "2"
    },
    {
        name: "Ioannis",
        subject: "W3D2-2",
        difficulty: "1",
        fun: "4"
    },
    {
        name: "Ioannis",
        subject: "W3D2-3",
        difficulty: "2",
        fun: "2"
    },
    {
        name: "Ioannis",
        subject: "W3D3-1",
        difficulty: "3",
        fun: "1"
    },
    {
        name: "Ioannis",
        subject: "W3D3-2",
        difficulty: "4",
        fun: "4"
    },
    {
        name: "Ioannis",
        subject: "W3D3-3",
        difficulty: "1",
        fun: "4"
    },
    {
        name: "Ioannis",
        subject: "W3D3-4",
        difficulty: "2",
        fun: "2"
    },
    {
        name: "Ioannis",
        subject: "W3D4-1",
        difficulty: "1",
        fun: "2"
    },
    {
        name: "Ioannis",
        subject: "W3D4-2",
        difficulty: "3",
        fun: "3"
    },
    {
        name: "Ioannis",
        subject: "W3D5 - Project - To do List",
        difficulty: "2",
        fun: "4"
    },
    {
        name: "Ioannis",
        subject: "W4D2-1",
        difficulty: "2",
        fun: "4"
    },
    {
        name: "Ioannis",
        subject: "W4D2-2",
        difficulty: "4",
        fun: "3"
    },
    {
        name: "Ioannis",
        subject: "W4D2-3",
        difficulty: "3",
        fun: "3"
    },
    {
        name: "Ioannis",
        subject: "W4D2-4",
        difficulty: "4",
        fun: "1"
    },
    {
        name: "Ioannis",
        subject: "W4D3-1",
        difficulty: "2",
        fun: "2"
    },
    {
        name: "Ioannis",
        subject: "W4D3-2",
        difficulty: "1",
        fun: "1"
    },
    {
        name: "Ioannis",
        subject: "W4D3-3",
        difficulty: "3",
        fun: "1"
    },
    {
        name: "Ioannis",
        subject: "W4D3-4",
        difficulty: "2",
        fun: "2"
    },
    {
        name: "Ioannis",
        subject: "W4D3-5",
        difficulty: "3",
        fun: "2"
    },
    {
        name: "Ioannis",
        subject: "W4D3 - Project - Advanced CSS",
        difficulty: "2",
        fun: "2"
    },
    {
        name: "Ioannis",
        subject: "W5D4-1",
        difficulty: "3",
        fun: "3"
    },
    {
        name: "Ioannis",
        subject: "W5D5 - Project - Playlist",
        difficulty: "2",
        fun: "3"
    },
    {
        name: "Ioannis",
        subject: "W6D1-1",
        difficulty: "4",
        fun: "4"
    },
    {
        name: "Ioannis",
        subject: "W6D2-1",
        difficulty: "1",
        fun: "4"
    },
    {
        name: "Ioannis",
        subject: "W6D2 - Project - End Course",
        difficulty: "4",
        fun: "1"
    },
    {
        name: "Saskia",
        age: "33",
        city: "Leida",
        origin: "Netherland",
        subject: "SCRUM",
        difficulty: "5",
        fun: "2"
    },
    {
        name: "Saskia",
        subject: "W1D1-1",
        difficulty: "3",
        fun: "4"
    },
    {
        name: "Saskia",
        subject: "W1D2-1",
        difficulty: "3",
        fun: "4"
    },
    {
        name: "Saskia",
        subject: "W1D2-2",
        difficulty: "3",
        fun: "3"
    },
    {
        name: "Saskia",
        subject: "W1D2-3",
        difficulty: "3",
        fun: "4"
    },
    {
        name: "Saskia",
        subject: "W1D2-4",
        difficulty: "3",
        fun: "1"
    },
    {
        name: "Saskia",
        subject: "W1D2-5",
        difficulty: "4",
        fun: "3"
    },
    {
        name: "Saskia",
        subject: "W1D3-1",
        difficulty: "1",
        fun: "1"
    },
    {
        name: "Saskia",
        subject: "W1D3-2",
        difficulty: "1",
        fun: "2"
    },
    {
        name: "Saskia",
        subject: "W1D3-4",
        difficulty: "3",
        fun: "3"
    },
    {
        name: "Saskia",
        subject: "W1D3-5",
        difficulty: "4",
        fun: "3"
    },
    {
        name: "Saskia",
        subject: "W1D3 - Project - Guess-the-number",
        difficulty: "3",
        fun: "4"
    },
    {
        name: "Saskia",
        subject: "W1D4-1",
        difficulty: "3",
        fun: "2"
    },
    {
        name: "Saskia",
        subject: "W1D4 - Project - Toggle Color",
        difficulty: "1",
        fun: "3"
    },
    {
        name: "Saskia",
        subject: "W1D5 - Project - Vegetable Garden",
        difficulty: "3",
        fun: "3"
    },
    {
        name: "Saskia",
        subject: "W2D1-1",
        difficulty: "4",
        fun: "1"
    },
    {
        name: "Saskia",
        subject: "W2D1-2",
        difficulty: "4",
        fun: "3"
    },
    {
        name: "Saskia",
        subject: "W2D2-1",
        difficulty: "3",
        fun: "4"
    },
    {
        name: "Saskia",
        subject: "W2D2-2",
        difficulty: "2",
        fun: "4"
    },
    {
        name: "Saskia",
        subject: "W2D2-3",
        difficulty: "4",
        fun: "3"
    },
    {
        name: "Saskia",
        subject: "W2D3-1",
        difficulty: "1",
        fun: "2"
    },
    {
        name: "Saskia",
        subject: "W2D3-2",
        difficulty: "3",
        fun: "2"
    },
    {
        name: "Saskia",
        subject: "W2D3-3",
        difficulty: "2",
        fun: "2"
    },
    {
        name: "Saskia",
        subject: "W2D4-1",
        difficulty: "1",
        fun: "3"
    },
    {
        name: "Saskia",
        subject: "W2D4-2",
        difficulty: "2",
        fun: "5"
    },
    {
        name: "Saskia",
        subject: "W2D4-3",
        difficulty: "2",
        fun: "2"
    },
    {
        name: "Saskia",
        subject: "W2D5 - Project - Film Finder",
        difficulty: "3",
        fun: "4"
    },
    {
        name: "Saskia",
        subject: "W3D1-1",
        difficulty: "3",
        fun: "3"
    },
    {
        name: "Saskia",
        subject: "W3D1-2",
        difficulty: "3",
        fun: "4"
    },
    {
        name: "Saskia",
        subject: "W3D1-3",
        difficulty: "2",
        fun: "4"
    },
    {
        name: "Saskia",
        subject: "W3D1-4",
        difficulty: "2",
        fun: "2"
    },
    {
        name: "Saskia",
        subject: "W3D2-1",
        difficulty: "2",
        fun: "4"
    },
    {
        name: "Saskia",
        subject: "W3D2-2",
        difficulty: "2",
        fun: "4"
    },
    {
        name: "Saskia",
        subject: "W3D2-3",
        difficulty: "1",
        fun: "1"
    },
    {
        name: "Saskia",
        subject: "W3D3-1",
        difficulty: "1",
        fun: "2"
    },
    {
        name: "Saskia",
        subject: "W3D3-2",
        difficulty: "2",
        fun: "2"
    },
    {
        name: "Saskia",
        subject: "W3D3-3",
        difficulty: "4",
        fun: "4"
    },
    {
        name: "Saskia",
        subject: "W3D3-4",
        difficulty: "3",
        fun: "2"
    },
    {
        name: "Saskia",
        subject: "W3D4-1",
        difficulty: "2",
        fun: "3"
    },
    {
        name: "Saskia",
        subject: "W3D4-2",
        difficulty: "2",
        fun: "1"
    },
    {
        name: "Saskia",
        subject: "W3D5 - Project - To do List",
        difficulty: "1",
        fun: "2"
    },
    {
        name: "Saskia",
        subject: "W4D2-1",
        difficulty: "3",
        fun: "3"
    },
    {
        name: "Saskia",
        subject: "W4D2-2",
        difficulty: "1",
        fun: "1"
    },
    {
        name: "Saskia",
        subject: "W4D2-3",
        difficulty: "3",
        fun: "4"
    },
    {
        name: "Saskia",
        subject: "W4D2-4",
        difficulty: "2",
        fun: "4"
    },
    {
        name: "Saskia",
        subject: "W4D3-1",
        difficulty: "3",
        fun: "1"
    },
    {
        name: "Saskia",
        subject: "W4D3-2",
        difficulty: "1",
        fun: "3"
    },
    {
        name: "Saskia",
        subject: "W4D3-3",
        difficulty: "2",
        fun: "5"
    },
    {
        name: "Saskia",
        subject: "W4D3-4",
        difficulty: "1",
        fun: "4"
    },
    {
        name: "Saskia",
        subject: "W4D3-5",
        difficulty: "1",
        fun: "3"
    },
    {
        name: "Saskia",
        subject: "W4D3 - Project - Advanced CSS",
        difficulty: "4",
        fun: "4"
    },
    {
        name: "Saskia",
        subject: "W5D4-1",
        difficulty: "1",
        fun: "1"
    },
    {
        name: "Saskia",
        subject: "W5D5 - Project - Playlist",
        difficulty: "2",
        fun: "2"
    },
    {
        name: "Saskia",
        subject: "W6D1-1",
        difficulty: "1",
        fun: "4"
    },
    {
        name: "Saskia",
        subject: "W6D2-1",
        difficulty: "2",
        fun: "3"
    },
    {
        name: "Saskia",
        subject: "W6D2 - Project - End Course",
        difficulty: "4",
        fun: "1"
    },
    {
        name: "Paul",
        age: "29",
        city: "Liverpool",
        origin: "UK",
        subject: "SCRUM",
        difficulty: "1",
        fun: "2"
    },
    {
        name: "Paul",
        subject: "W1D1-1",
        difficulty: "4",
        fun: "3"
    },
    {
        name: "Paul",
        subject: "W1D2-1",
        difficulty: "1",
        fun: "4"
    },
    {
        name: "Paul",
        subject: "W1D2-2",
        difficulty: "1",
        fun: "2"
    },
    {
        name: "Paul",
        subject: "W1D2-3",
        difficulty: "2",
        fun: "3"
    },
    {
        name: "Paul",
        subject: "W1D2-4",
        difficulty: "2",
        fun: "1"
    },
    {
        name: "Paul",
        subject: "W1D2-5",
        difficulty: "3",
        fun: "5"
    },
    {
        name: "Paul",
        subject: "W1D3-1",
        difficulty: "1",
        fun: "2"
    },
    {
        name: "Paul",
        subject: "W1D3-2",
        difficulty: "1",
        fun: "4"
    },
    {
        name: "Paul",
        subject: "W1D3-4",
        difficulty: "2",
        fun: "1"
    },
    {
        name: "Paul",
        subject: "W1D3-5",
        difficulty: "4",
        fun: "4"
    },
    {
        name: "Paul",
        subject: "W1D3 - Project - Guess-the-number",
        difficulty: "2",
        fun: "4"
    },
    {
        name: "Paul",
        subject: "W1D4-1",
        difficulty: "2",
        fun: "5"
    },
    {
        name: "Paul",
        subject: "W1D4 - Project - Toggle Color",
        difficulty: "3",
        fun: "3"
    },
    {
        name: "Paul",
        subject: "W1D5 - Project - Vegetable Garden",
        difficulty: "3",
        fun: "3"
    },
    {
        name: "Paul",
        subject: "W2D1-1",
        difficulty: "3",
        fun: "1"
    },
    {
        name: "Paul",
        subject: "W2D1-2",
        difficulty: "4",
        fun: "2"
    },
    {
        name: "Paul",
        subject: "W2D2-1",
        difficulty: "2",
        fun: "2"
    },
    {
        name: "Paul",
        subject: "W2D2-2",
        difficulty: "2",
        fun: "4"
    },
    {
        name: "Paul",
        subject: "W2D2-3",
        difficulty: "4",
        fun: "4"
    },
    {
        name: "Paul",
        subject: "W2D3-1",
        difficulty: "1",
        fun: "1"
    },
    {
        name: "Paul",
        subject: "W2D3-2",
        difficulty: "1",
        fun: "1"
    },
    {
        name: "Paul",
        subject: "W2D3-3",
        difficulty: "4",
        fun: "2"
    },
    {
        name: "Paul",
        subject: "W2D4-1",
        difficulty: "1",
        fun: "1"
    },
    {
        name: "Paul",
        subject: "W2D4-2",
        difficulty: "2",
        fun: "5"
    },
    {
        name: "Paul",
        subject: "W2D4-3",
        difficulty: "4",
        fun: "3"
    },
    {
        name: "Paul",
        subject: "W2D5 - Project - Film Finder",
        difficulty: "3",
        fun: "2"
    },
    {
        name: "Paul",
        subject: "W3D1-1",
        difficulty: "1",
        fun: "3"
    },
    {
        name: "Paul",
        subject: "W3D1-2",
        difficulty: "4",
        fun: "4"
    },
    {
        name: "Paul",
        subject: "W3D1-3",
        difficulty: "4",
        fun: "2"
    },
    {
        name: "Paul",
        subject: "W3D1-4",
        difficulty: "1",
        fun: "4"
    },
    {
        name: "Paul",
        subject: "W3D2-1",
        difficulty: "3",
        fun: "4"
    },
    {
        name: "Paul",
        subject: "W3D2-2",
        difficulty: "1",
        fun: "5"
    },
    {
        name: "Paul",
        subject: "W3D2-3",
        difficulty: "2",
        fun: "4"
    },
    {
        name: "Paul",
        subject: "W3D3-1",
        difficulty: "1",
        fun: "5"
    },
    {
        name: "Paul",
        subject: "W3D3-2",
        difficulty: "3",
        fun: "1"
    },
    {
        name: "Paul",
        subject: "W3D3-3",
        difficulty: "1",
        fun: "3"
    },
    {
        name: "Paul",
        subject: "W3D3-4",
        difficulty: "6",
        fun: "4"
    },
    {
        name: "Paul",
        subject: "W3D4-1",
        difficulty: "3",
        fun: "4"
    },
    {
        name: "Paul",
        subject: "W3D4-2",
        difficulty: "4",
        fun: "2"
    },
    {
        name: "Paul",
        subject: "W3D5 - Project - To do List",
        difficulty: "2",
        fun: "4"
    },
    {
        name: "Paul",
        subject: "W4D2-1",
        difficulty: "3",
        fun: "2"
    },
    {
        name: "Paul",
        subject: "W4D2-2",
        difficulty: "2",
        fun: "4"
    },
    {
        name: "Paul",
        subject: "W4D2-3",
        difficulty: "1",
        fun: "2"
    },
    {
        name: "Paul",
        subject: "W4D2-4",
        difficulty: "4",
        fun: "3"
    },
    {
        name: "Paul",
        subject: "W4D3-1",
        difficulty: "5",
        fun: "1"
    },
    {
        name: "Paul",
        subject: "W4D3-2",
        difficulty: "1",
        fun: "2"
    },
    {
        name: "Paul",
        subject: "W4D3-3",
        difficulty: "1",
        fun: "4"
    },
    {
        name: "Paul",
        subject: "W4D3-4",
        difficulty: "3",
        fun: "4"
    },
    {
        name: "Paul",
        subject: "W4D3-5",
        difficulty: "4",
        fun: "4"
    },
    {
        name: "Paul",
        subject: "W4D3 - Project - Advanced CSS",
        difficulty: "4",
        fun: "2"
    },
    {
        name: "Paul",
        subject: "W5D4-1",
        difficulty: "3",
        fun: "1"
    },
    {
        name: "Paul",
        subject: "W5D5 - Project - Playlist",
        difficulty: "3",
        fun: "2"
    },
    {
        name: "Paul",
        subject: "W6D1-1",
        difficulty: "4",
        fun: "1"
    },
    {
        name: "Paul",
        subject: "W6D2-1",
        difficulty: "2",
        fun: "1"
    },
    {
        name: "Paul",
        subject: "W6D2 - Project - End Course",
        difficulty: "1",
        fun: "2"
    },
    {
        name: "Claudia",
        age: "25",
        city: "Vienna",
        origin: "Austria",
        subject: "SCRUM",
        difficulty: "2",
        fun: "2"
    },
    {
        name: "Claudia",
        subject: "W1D1-1",
        difficulty: "2",
        fun: "2"
    },
    {
        name: "Claudia",
        subject: "W1D2-1",
        difficulty: "2",
        fun: "3"
    },
    {
        name: "Claudia",
        subject: "W1D2-2",
        difficulty: "1",
        fun: "4"
    },
    {
        name: "Claudia",
        subject: "W1D2-3",
        difficulty: "2",
        fun: "1"
    },
    {
        name: "Claudia",
        subject: "W1D2-4",
        difficulty: "3",
        fun: "4"
    },
    {
        name: "Claudia",
        subject: "W1D2-5",
        difficulty: "4",
        fun: "2"
    },
    {
        name: "Claudia",
        subject: "W1D3-1",
        difficulty: "3",
        fun: "2"
    },
    {
        name: "Claudia",
        subject: "W1D3-2",
        difficulty: "1",
        fun: "1"
    },
    {
        name: "Claudia",
        subject: "W1D3-4",
        difficulty: "1",
        fun: "2"
    },
    {
        name: "Claudia",
        subject: "W1D3-5",
        difficulty: "2",
        fun: "2"
    },
    {
        name: "Claudia",
        subject: "W1D3 - Project - Guess-the-number",
        difficulty: "4",
        fun: "3"
    },
    {
        name: "Claudia",
        subject: "W1D4-1",
        difficulty: "4",
        fun: "2"
    },
    {
        name: "Claudia",
        subject: "W1D4 - Project - Toggle Color",
        difficulty: "3",
        fun: "2"
    },
    {
        name: "Claudia",
        subject: "W1D5 - Project - Vegetable Garden",
        difficulty: "4",
        fun: "4"
    },
    {
        name: "Claudia",
        subject: "W2D1-1",
        difficulty: "2",
        fun: "4"
    },
    {
        name: "Claudia",
        subject: "W2D1-2",
        difficulty: "2",
        fun: "3"
    },
    {
        name: "Claudia",
        subject: "W2D2-1",
        difficulty: "4",
        fun: "4"
    },
    {
        name: "Claudia",
        subject: "W2D2-2",
        difficulty: "2",
        fun: "1"
    },
    {
        name: "Claudia",
        subject: "W2D2-3",
        difficulty: "1",
        fun: "1"
    },
    {
        name: "Claudia",
        subject: "W2D3-1",
        difficulty: "2",
        fun: "3"
    },
    {
        name: "Claudia",
        subject: "W2D3-2",
        difficulty: "4",
        fun: "3"
    },
    {
        name: "Claudia",
        subject: "W2D3-3",
        difficulty: "2",
        fun: "3"
    },
    {
        name: "Claudia",
        subject: "W2D4-1",
        difficulty: "3",
        fun: "4"
    },
    {
        name: "Claudia",
        subject: "W2D4-2",
        difficulty: "3",
        fun: "4"
    },
    {
        name: "Claudia",
        subject: "W2D4-3",
        difficulty: "2",
        fun: "1"
    },
    {
        name: "Claudia",
        subject: "W2D5 - Project - Film Finder",
        difficulty: "1",
        fun: "4"
    },
    {
        name: "Claudia",
        subject: "W3D1-1",
        difficulty: "2",
        fun: "1"
    },
    {
        name: "Claudia",
        subject: "W3D1-2",
        difficulty: "2",
        fun: "2"
    },
    {
        name: "Claudia",
        subject: "W3D1-3",
        difficulty: "1",
        fun: "2"
    },
    {
        name: "Claudia",
        subject: "W3D1-4",
        difficulty: "2",
        fun: "2"
    },
    {
        name: "Claudia",
        subject: "W3D2-1",
        difficulty: "1",
        fun: "4"
    },
    {
        name: "Claudia",
        subject: "W3D2-2",
        difficulty: "3",
        fun: "3"
    },
    {
        name: "Claudia",
        subject: "W3D2-3",
        difficulty: "4",
        fun: "4"
    },
    {
        name: "Claudia",
        subject: "W3D3-1",
        difficulty: "5",
        fun: "4"
    },
    {
        name: "Claudia",
        subject: "W3D3-2",
        difficulty: "1",
        fun: "3"
    },
    {
        name: "Claudia",
        subject: "W3D3-3",
        difficulty: "3",
        fun: "1"
    },
    {
        name: "Claudia",
        subject: "W3D3-4",
        difficulty: "3",
        fun: "2"
    },
    {
        name: "Claudia",
        subject: "W3D4-1",
        difficulty: "2",
        fun: "4"
    },
    {
        name: "Claudia",
        subject: "W3D4-2",
        difficulty: "3",
        fun: "4"
    },
    {
        name: "Claudia",
        subject: "W3D5 - Project - To do List",
        difficulty: "4",
        fun: "2"
    },
    {
        name: "Claudia",
        subject: "W4D2-1",
        difficulty: "2",
        fun: "1"
    },
    {
        name: "Claudia",
        subject: "W4D2-2",
        difficulty: "3",
        fun: "3"
    },
    {
        name: "Claudia",
        subject: "W4D2-3",
        difficulty: "2",
        fun: "2"
    },
    {
        name: "Claudia",
        subject: "W4D2-4",
        difficulty: "3",
        fun: "4"
    },
    {
        name: "Claudia",
        subject: "W4D3-1",
        difficulty: "4",
        fun: "3"
    },
    {
        name: "Claudia",
        subject: "W4D3-2",
        difficulty: "2",
        fun: "3"
    },
    {
        name: "Claudia",
        subject: "W4D3-3",
        difficulty: "1",
        fun: "1"
    },
    {
        name: "Claudia",
        subject: "W4D3-4",
        difficulty: "1",
        fun: "3"
    },
    {
        name: "Claudia",
        subject: "W4D3-5",
        difficulty: "2",
        fun: "3"
    },
    {
        name: "Claudia",
        subject: "W4D3 - Project - Advanced CSS",
        difficulty: "4",
        fun: "1"
    },
    {
        name: "Claudia",
        subject: "W5D4-1",
        difficulty: "2",
        fun: "2"
    },
    {
        name: "Claudia",
        subject: "W5D5 - Project - Playlist",
        difficulty: "1",
        fun: "2"
    },
    {
        name: "Claudia",
        subject: "W6D1-1",
        difficulty: "4",
        fun: "4"
    },
    {
        name: "Claudia",
        subject: "W6D2-1",
        difficulty: "1",
        fun: "1"
    },
    {
        name: "Claudia",
        subject: "W6D2 - Project - End Course",
        difficulty: "3",
        fun: "3"
    }
];

export default students;