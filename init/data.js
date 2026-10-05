const sampleListings = [
    {
        title: "Cozy Villa in Goa",
        description: "A modern private villa with comfortable rooms and a relaxing outdoor space near the beaches of Goa.",
        image: {
            filename: "goa-cozy-villa",
            url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
        },
        price: 4500,
        location: "Goa",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [73.8567, 15.4909]
        },
        category: "Trending"
    },

    {
        title: "Luxury Room in Mumbai",
        description: "A stylish private room in a modern stay located close to the major attractions of Mumbai.",
        image: {
            filename: "mumbai-luxury-room",
            url: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80"
        },
        price: 5200,
        location: "Mumbai",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [72.8777, 19.0760]
        },
        category: "Rooms"
    },

    {
        title: "Luxury Villa in Cape Town",
        description: "A modern villa with spacious rooms, outdoor seating and a private pool near Cape Town.",
        image: {
            filename: "cape-town-luxury-villa",
            url: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?auto=format&fit=crop&w=800&q=80"
        },
        price: 7000,
        location: "Cape Town",
        country: "South Africa",
        geometry: {
            type: "Point",
            coordinates: [18.4241, -33.9249]
        },
        category: "Amazing Pools"
    },

    {
        title: "Desert Camp Dome in Jaisalmer",
        description: "A luxury dome-style desert accommodation with a comfortable bedroom and traditional interiors.",
        image: {
            filename: "jaisalmer-desert-dome",
            url: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80"
        },
        price: 4500,
        location: "Jaisalmer",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [70.9083, 26.9157]
        },
        category: "Domes"
    },

    {
        title: "Heritage Haveli in Jaipur",
        description: "A traditional haveli stay featuring elegant interiors and a peaceful courtyard in the heart of Jaipur.",
        image: {
            filename: "jaipur-heritage-haveli",
            url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80"
        },
        price: 3800,
        location: "Jaipur",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [75.7873, 26.9124]
        },
        category: "Iconic Cities"
    },

    {
        title: "Mountain Cottage in Manali",
        description: "A warm wooden cottage with comfortable rooms and mountain views, ideal for a peaceful holiday.",
        image: {
            filename: "manali-mountain-cottage",
            url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80"
        },
        price: 4200,
        location: "Manali",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [77.1887, 32.2396]
        },
        category: "Mountains"
    },

    {
        title: "Farmhouse Stay in Nashik",
        description: "A spacious farmhouse surrounded by vineyards with comfortable rooms and a relaxing outdoor area.",
        image: {
            filename: "nashik-farmhouse",
            url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80"
        },
        price: 3500,
        location: "Nashik",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [73.7898, 19.9975]
        },
        category: "Farms"
    },

    {
        title: "Beach Villa in Alibaug",
        description: "A comfortable beachside villa with modern bedrooms and a spacious outdoor area for families.",
        image: {
            filename: "alibaug-beach-villa",
            url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80"
        },
        price: 5800,
        location: "Alibaug",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [72.8722, 18.6414]
        },
        category: "Trending"
    },

    {
        title: "Luxury Dome Stay in Wayanad",
        description: "A modern dome accommodation with a comfortable bedroom, private seating area and forest surroundings.",
        image: {
            filename: "wayanad-dome-stay",
            url: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=800&q=80"
        },
        price: 4800,
        location: "Wayanad",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [76.1320, 11.6854]
        },
        category: "Domes"
    },

    {
        title: "Modern Apartment in Dubai",
        description: "A modern apartment with stylish interiors, comfortable bedrooms and convenient access to Dubai attractions.",
        image: {
            filename: "dubai-modern-apartment",
            url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
        },
        price: 8500,
        location: "Dubai",
        country: "United Arab Emirates",
        geometry: {
            type: "Point",
            coordinates: [55.2708, 25.2048]
        },
        category: "Iconic Cities"
    },

    {
        title: "Seaside Villa in Bali",
        description: "A tropical private villa with comfortable bedrooms, outdoor seating and a beautiful swimming pool.",
        image: {
            filename: "bali-seaside-villa",
            url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80"
        },
        price: 6200,
        location: "Bali",
        country: "Indonesia",
        geometry: {
            type: "Point",
            coordinates: [115.1889, -8.4095]
        },
        category: "Amazing Pools"
    },

    {
        title: "Luxury Apartment in Paris",
        description: "A stylish city apartment with a comfortable bedroom and elegant interiors near central Paris.",
        image: {
            filename: "paris-luxury-apartment",
            url: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=800&q=80"
        },
        price: 7500,
        location: "Paris",
        country: "France",
        geometry: {
            type: "Point",
            coordinates: [2.3522, 48.8566]
        },
        category: "Iconic Cities"
    },

    {
        title: "Glass Cabin in Finland",
        description: "A cozy glass-roof cabin designed for a comfortable stay and views of the northern sky.",
        image: {
            filename: "finland-glass-cabin",
            url: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=800&q=80"
        },
        price: 8200,
        location: "Rovaniemi",
        country: "Finland",
        geometry: {
            type: "Point",
            coordinates: [25.7294, 66.5039]
        },
        category: "Arctic"
    },

    {
        title: "Houseboat Stay in Alleppey",
        description: "A traditional Kerala houseboat with comfortable accommodation, dining space and beautiful views from the deck.",
        image: {
            filename: "alleppey-houseboat",
            url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80"
        },
        price: 7000,
        location: "Alleppey",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [76.3388, 9.4981]
        },
        category: "Boats"
    },

    {
        title: "Stone Castle Stay in Scotland",
        description: "A historic castle accommodation featuring traditional stone architecture and elegant guest rooms.",
        image: {
            filename: "scotland-castle-stay",
            url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"
        },
        price: 9500,
        location: "Edinburgh",
        country: "United Kingdom",
        geometry: {
            type: "Point",
            coordinates: [-3.1883, 55.9533]
        },
        category: "Castles"
    },

    {
        title: "Pool Villa in Udaipur",
        description: "A beautiful private villa with a swimming pool, spacious bedroom and elegant outdoor seating.",
        image: {
            filename: "udaipur-pool-villa",
            url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"
        },
        price: 6500,
        location: "Udaipur",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [73.7125, 24.5854]
        },
        category: "Amazing Pools"
    },

    {
        title: "Himalayan Cabin in Kasol",
        description: "A cozy wooden cabin with a private room and balcony overlooking the surrounding Himalayan landscape.",
        image: {
            filename: "kasol-himalayan-cabin",
            url: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80"
        },
        price: 3000,
        location: "Kasol",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [77.3152, 32.0098]
        },
        category: "Mountains"
    },

    {
        title: "Cliffside Villa in Santorini",
        description: "A beautiful white villa with comfortable accommodation and a private terrace overlooking the sea.",
        image: {
            filename: "santorini-cliffside-villa",
            url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
        },
        price: 11000,
        location: "Santorini",
        country: "Greece",
        geometry: {
            type: "Point",
            coordinates: [25.4615, 36.3932]
        },
        category: "Trending"
    },

    {
        title: "Countryside Home in Provence",
        description: "A peaceful countryside home with comfortable rooms and traditional interiors surrounded by the villages of Provence.",
        image: {
            filename: "provence-countryside",
            url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80"
        },
        price: 3000,
        location: "Provence",
        country: "France",
        geometry: {
            type: "Point",
            coordinates: [5.3698, 43.9493]
        },
        category: "Farms"
    },

    {
        title: "Traditional Riad in Marrakech",
        description: "A traditional Moroccan riad with comfortable rooms, an inner courtyard and beautiful local architecture.",
        image: {
            filename: "marrakech-riad",
            url: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&w=800&q=80"
        },
        price: 4200,
        location: "Marrakech",
        country: "Morocco",
        geometry: {
            type: "Point",
            coordinates: [-7.9811, 31.6295]
        },
        category: "Iconic Cities"
    },

    {
        title: "Wooden Cabin in Norway",
        description: "A warm wooden cabin with a cozy bedroom, fireplace and large windows overlooking the Norwegian landscape.",
        image: {
            filename: "norway-wooden-cabin",
            url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80"
        },
        price: 6800,
        location: "Bergen",
        country: "Norway",
        geometry: {
            type: "Point",
            coordinates: [5.3221, 60.3929]
        },
        category: "Arctic"
    },

    {
        title: "Beach House in Maldives",
        description: "A comfortable overwater-style accommodation with a private deck and direct access to the sea.",
        image: {
            filename: "maldives-beach-house",
            url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80"
        },
        price: 12500,
        location: "Malé",
        country: "Maldives",
        geometry: {
            type: "Point",
            coordinates: [73.5093, 4.1755]
        },
        category: "Trending"
    },

    {
        title: "Historic Castle Hotel in Prague",
        description: "A historic castle-style accommodation with elegant rooms and classic European interiors.",
        image: {
            filename: "prague-castle-hotel",
            url: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80"
        },
        price: 7200,
        location: "Prague",
        country: "Czech Republic",
        geometry: {
            type: "Point",
            coordinates: [14.4378, 50.0755]
        },
        category: "Castles"
    },

    {
        title: "Luxury Houseboat in Srinagar",
        description: "A traditional Kashmiri houseboat with comfortable bedrooms, living space and a private deck.",
        image: {
            filename: "srinagar-houseboat",
            url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80"
        },
        price: 5000,
        location: "Srinagar",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [74.7973, 34.0837]
        },
        category: "Boats"
    },

    {
        title: "Traditional Villa in Kyoto",
        description: "A peaceful traditional Japanese-style villa with comfortable rooms and elegant wooden interiors.",
        image: {
            filename: "kyoto-traditional-villa",
            url: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80"
        },
        price: 7800,
        location: "Kyoto",
        country: "Japan",
        geometry: {
            type: "Point",
            coordinates: [135.7681, 35.0116]
        },
        category: "Iconic Cities"
    },

    {
        title: "Alpine Chalet in Switzerland",
        description: "A traditional wooden chalet with cozy bedrooms, living room and a balcony overlooking the Alps.",
        image: {
            filename: "switzerland-alpine-chalet",
            url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80"
        },
        price: 9800,
        location: "Interlaken",
        country: "Switzerland",
        geometry: {
            type: "Point",
            coordinates: [7.8632, 46.6863]
        },
        category: "Mountains"
    },

    {
        title: "Poolside Villa in Phuket",
        description: "A private tropical villa featuring comfortable bedrooms, a swimming pool and outdoor lounge area.",
        image: {
            filename: "phuket-pool-villa",
            url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80"
        },
        price: 6500,
        location: "Phuket",
        country: "Thailand",
        geometry: {
            type: "Point",
            coordinates: [98.3923, 7.8804]
        },
        category: "Amazing Pools"
    },

    {
        title: "Farm Cottage in Tuscany",
        description: "A rustic countryside cottage with comfortable bedrooms, traditional furniture and a peaceful farm setting.",
        image: {
            filename: "tuscany-farm-cottage",
            url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80"
        },
        price: 5600,
        location: "Tuscany",
        country: "Italy",
        geometry: {
            type: "Point",
            coordinates: [11.2558, 43.7696]
        },
        category: "Farms"
    },

    {
        title: "Snow Cabin in Iceland",
        description: "A warm private cabin with comfortable accommodation designed for cold-weather stays in Iceland.",
        image: {
            filename: "iceland-snow-cabin",
            url: "https://images.unsplash.com/photo-1598928636135-d146006ff4be?auto=format&fit=crop&w=800&q=80"
        },
        price: 7600,
        location: "Reykjavik",
        country: "Iceland",
        geometry: {
            type: "Point",
            coordinates: [-21.9426, 64.1466]
        },
        category: "Arctic"
    },
    
    {
        title: "Luxury Farm Stay in Maharashtra",
        description: "A spacious countryside farm stay with bedrooms, dining space and a large outdoor sitting area.",
        image: {
            filename: "maharashtra-farm-stay",
            url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80"
        },
        price: 3200,
        location: "Pune",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [73.8567, 18.5204]
        },
        category: "Farms"
    },

    {
        title: "Lake Cabin in Canada",
        description: "A cozy lakeside cabin with wooden interiors, bedroom accommodation and a private outdoor deck.",
        image: {
            filename: "canada-lake-cabin",
            url: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80"
        },
        price: 6200,
        location: "Banff",
        country: "Canada",
        geometry: {
            type: "Point",
            coordinates: [-115.5708, 51.1784]
        },
        category: "Mountains"
    },

    {
        title: "Modern Room in New York",
        description: "A stylish city room with modern furniture and comfortable facilities in central New York.",
        image: {
            filename: "new-york-modern-room",
            url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80"
        },
        price: 9000,
        location: "New York",
        country: "United States",
        geometry: {
            type: "Point",
            coordinates: [-74.0060, 40.7128]
        },
        category: "Rooms"
    },

    {
        title: "Mountain Lodge in Aspen",
        description: "A comfortable mountain lodge with warm interiors, fireplace and spacious guest rooms.",
        image: {
            filename: "aspen-mountain-lodge",
            url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80"
        },
        price: 10500,
        location: "Aspen",
        country: "United States",
        geometry: {
            type: "Point",
            coordinates: [-106.8175, 39.1911]
        },
        category: "Mountains"
    },

    {
        title: "Forest Treehouse Stay in Kerala",
        description: "A unique elevated treehouse accommodation with a private room, balcony and modern facilities.",
        image: {
            filename: "kerala-treehouse",
            url: "https://images.unsplash.com/photo-1520984032042-162d526883e0?auto=format&fit=crop&w=800&q=80"
        },
        price: 3900,
        location: "Thekkady",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [77.1667, 9.6000]
        },
        category: "Trending"
    },

    {
        title: "Cozy Cottage in New Zealand",
        description: "A peaceful cottage with warm interiors, bedroom accommodation and a private garden.",
        image: {
            filename: "new-zealand-cottage",
            url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
        },
        price: 5900,
        location: "Queenstown",
        country: "New Zealand",
        geometry: {
            type: "Point",
            coordinates: [168.6626, -45.0312]
        },
        category: "Trending"
    },

    {
        title: "Modern Apartment in Tokyo",
        description: "A compact modern apartment with a comfortable bedroom and functional living space in Tokyo.",
        image: {
            filename: "tokyo-modern-apartment",
            url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80"
        },
        price: 6500,
        location: "Tokyo",
        country: "Japan",
        geometry: {
            type: "Point",
            coordinates: [139.6917, 35.6895]
        },
        category: "Rooms"
    },

    {
        title: "Lakeside Lodge in Queenstown",
        description: "A comfortable lodge with spacious rooms, wooden interiors and a relaxing lakeside setting.",
        image: {
            filename: "queenstown-lakeside-lodge",
            url: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80"
        },
        price: 6700,
        location: "Queenstown",
        country: "New Zealand",
        geometry: {
            type: "Point",
            coordinates: [168.6626, -45.0312]
        },
        category: "Mountains"
    },

    {
        title: "Coastal Resort Room in Lisbon",
        description: "A bright coastal accommodation with modern rooms, comfortable furniture and relaxing common areas.",
        image: {
            filename: "lisbon-coastal-room",
            url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80"
        },
        price: 5800,
        location: "Lisbon",
        country: "Portugal",
        geometry: {
            type: "Point",
            coordinates: [-9.1393, 38.7223]
        },
        category: "Rooms"
    },

    {
        title: "Stone Farmhouse in Ireland",
        description: "A traditional stone farmhouse with cozy bedrooms, living room and rustic countryside interiors.",
        image: {
            filename: "ireland-stone-farmhouse",
            url: "https://images.unsplash.com/photo-1505843795480-5cfb3c03f6ff?auto=format&fit=crop&w=800&q=80"
        },
        price: 4300,
        location: "Galway",
        country: "Ireland",
        geometry: {
            type: "Point",
            coordinates: [-9.0568, 53.2707]
        },
        category: "Farms"
    },

    {
        title: "Private Villa in Santorini",
        description: "A stylish private villa with a bedroom, terrace and outdoor swimming pool overlooking the Aegean.",
        image: {
            filename: "santorini-private-villa",
            url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80"
        },
        price: 11500,
        location: "Oia",
        country: "Greece",
        geometry: {
            type: "Point",
            coordinates: [25.3764, 36.4618]
        },
        category: "Amazing Pools"
    },

    {
        title: "Modern Pool House in California",
        description: "A modern holiday house with stylish bedrooms, open living space and a private swimming pool.",
        image: {
            filename: "california-pool-house",
            url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80"
        },
        price: 10000,
        location: "Los Angeles",
        country: "United States",
        geometry: {
            type: "Point",
            coordinates: [-118.2437, 34.0522]
        },
        category: "Amazing Pools"
    }

];

module.exports = { data: sampleListings };