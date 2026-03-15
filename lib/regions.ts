export interface TabItem {
  text: string;
  image?: string;
}

export interface TabContent {
  food: TabItem[];
  culture: TabItem[];
  music: TabItem[];
  places: TabItem[];
  dress: TabItem[];
  location: TabItem[];
  heritage: TabItem[];
  womensCelebrations: TabItem[];
}

export interface HistoryEvent {
  year: string;
  event: string;
}

export interface Region {
  id: string;
  name: string;
  amharicName: string;
  description: string;
  imageUrl: string;
  tabs: TabContent;
  history: HistoryEvent[];
}

export const regions: Region[] = [
  {
    id: "tigray",
    name: "Tigray",
    amharicName: "ትግራይ",
    description: "Ancient rock-hewn churches and rich history",
    imageUrl: "/images/tigray.jpg",
    tabs: {
      food: [
        { text: "Ingera with Sehi: Spicy meat stew on sour injera. Women prepare for hours with traditional spices.", image: "/images/tabs/ethiopian-food.jpg" },
        { text: "Tihlo: Roasted barley balls with spicy sauce. Made by grandmothers using ancient techniques." },
        { text: "Hilbet: Lentil paste served with injera, a protein-rich staple during fasting periods." },
        { text: "Ga'at: Barley porridge topped with spiced butter and berbere, a warming breakfast dish." }
      ],
      culture: [
        { text: "Ashenda Festival: Girls celebrate after Ethiopian New Year with beautiful traditional dresses and singing.", image: "/images/tabs/ashenda-festival.jpg" },
        { text: "Orthodox Tewahedo traditions: Ancient churches, priest chanting, and religious ceremonies dating back centuries.", image: "/images/tabs/orthodox-church.jpg" },
        { text: "Tigrinya storytelling: Elders pass down history through oral traditions and poetry." },
        { text: "Traditional coffee ceremonies: Women lead elaborate rituals with incense and blessings.", image: "/images/tabs/coffee-ceremony.jpg" }
      ],
      music: [
        { text: "Krar: Traditional five or six-stringed lyre instrument central to Tigrayan music.", image: "/images/tabs/ethiopian-music.jpg" },
        { text: "Famous Tigrayan singers preserve ancient melodies and create new compositions." },
        { text: "Tigrinya songs often feature call-and-response patterns with spiritual themes." },
        { text: "Traditional dances like Awris accompany celebrations and festivals.", image: "/images/tabs/eskista-dance.jpg" }
      ],
      places: [
        { text: "Axum Obelisks: 1700-year-old granite stelae marking ancient royal burial sites.", image: "/images/tabs/axum-obelisks.jpg" },
        { text: "Debre Damo Monastery: Men-only monastery accessed by rope climbing, founded in 6th century." },
        { text: "Church of Our Lady Mary of Zion: Believed to house the Ark of the Covenant." },
        { text: "Yeha Temple: Pre-Aksumite temple dating back 2,500 years." }
      ],
      dress: [
        { text: "Women: White dresses (zuriya) with colorful embroidery (tilf), gold jewelry, and braided hairstyles.", image: "/images/tabs/ethiopian-dress.jpg" },
        { text: "Men: White shamma (toga-like cloth) with thin colored borders called tibeb." },
        { text: "Festival attire includes heavily embroidered garments passed through generations." },
        { text: "Traditional silver and gold jewelry represents family heritage and status." }
      ],
      location: [
        { text: "Northern Ethiopia bordering Eritrea, Sudan, and the Afar and Amhara regions." },
        { text: "Mountainous highlands reaching over 3,000 meters elevation." },
        { text: "Ancient kingdom of Axum, once a major trading empire." },
        { text: "Climate ranges from highland plateau to lowland valleys." }
      ],
      heritage: [
        { text: "Axum: Queen of Sheba's palace ruins and the Obelisk of Axum (UNESCO World Heritage).", image: "/images/tabs/axum-obelisks.jpg" },
        { text: "Rock-hewn churches of Tigray: Over 120 ancient churches carved into cliffsides." },
        { text: "Ge'ez script: Ancient Ethiopian alphabet still used in religious texts." },
        { text: "Center of Ethiopian Orthodox Christianity for over 1,600 years.", image: "/images/tabs/orthodox-church.jpg" }
      ],
      womensCelebrations: [
        { text: "ASHENDA (አሸንዳ): August/September celebration where girls wear beautiful traditional dresses, adorned with flowers and grasses. They sing and dance through villages for several days.", image: "/images/tabs/ashenda-festival.jpg" },
        { text: "Women lead prayers and blessings during Orthodox Christian holidays." },
        { text: "Girls learn traditional songs and dances passed down through generations.", image: "/images/tabs/women-celebration.jpg" },
        { text: "Elder women teach young girls cultural traditions and domestic arts." }
      ]
    },
    history: [
      { year: "1st Century", event: "Axum Kingdom rises as a major trading empire" },
      { year: "4th Century", event: "Christianity arrives and becomes state religion" },
      { year: "6th Century", event: "Axum reaches its greatest territorial extent" },
      { year: "2022", event: "Peace agreement signed ending conflict" }
    ]
  },
  {
    id: "amhara",
    name: "Amhara",
    amharicName: "አማራ",
    description: "Home to the Simien Mountains and Lake Tana",
    imageUrl: "/images/amhara.jpg",
    tabs: {
      food: [
        { text: "Doro Wat: Spicy chicken stew with boiled eggs, the national dish prepared for holidays.", image: "/images/tabs/ethiopian-food.jpg" },
        { text: "Injera: Spongy sourdough flatbread made from teff flour, the base of every meal." },
        { text: "Kitfo: Minced raw or lightly cooked beef with mitmita spice and herbed butter." },
        { text: "Shiro: Chickpea or broad bean stew, a fasting food staple." }
      ],
      culture: [
        { text: "Timkat: Epiphany celebration in Gondar with processions and baptism reenactments.", image: "/images/tabs/timkat-festival.jpg" },
        { text: "Meskel: Finding of the True Cross celebrated with bonfires and dancing.", image: "/images/tabs/meskel-festival.jpg" },
        { text: "Genna: Ethiopian Christmas with traditional games and feasting." },
        { text: "Fasika: Ethiopian Easter preceded by 55 days of fasting." }
      ],
      music: [
        { text: "Tizita: Ethiopian blues genre expressing nostalgia and longing.", image: "/images/tabs/ethiopian-music.jpg" },
        { text: "Alemayehu Eshete: Legendary Ethiopian singer known as 'The Ethiopian Elvis'." },
        { text: "Masinko: One-stringed fiddle used in traditional Azmari music.", image: "/images/tabs/masinko-player.jpg" },
        { text: "Eskista: Shoulder dance unique to Ethiopian culture.", image: "/images/tabs/eskista-dance.jpg" }
      ],
      places: [
        { text: "Lalibela: 11 rock-hewn churches carved in the 12th century, 'New Jerusalem'.", image: "/images/tabs/lalibela-church.jpg" },
        { text: "Gondar Castles: Royal Enclosure with medieval castles and churches.", image: "/images/tabs/gondar-castle.jpg" },
        { text: "Lake Tana Monasteries: Ancient island monasteries on Ethiopia's largest lake.", image: "/images/tabs/lake-tana.jpg" },
        { text: "Simien Mountains: UNESCO site with endemic wildlife and dramatic scenery.", image: "/images/tabs/simien-mountains.jpg" }
      ],
      dress: [
        { text: "Women: Netela shawl, habesha kemis (white dress) with colorful embroidery.", image: "/images/tabs/ethiopian-dress.jpg" },
        { text: "Men: Traditional white pants with knee-high socks and netela shawl." },
        { text: "Wedding attire features gold thread embroidery called tilf." },
        { text: "Bernos: Heavy wool cape for cold highland weather." }
      ],
      location: [
        { text: "Northwest Ethiopia, bordered by Tigray, Afar, Oromia, and Benishangul-Gumuz." },
        { text: "Lake Tana is the source of the Blue Nile River.", image: "/images/tabs/lake-tana.jpg" },
        { text: "Simien Mountains reach 4,550 meters at Ras Dashen peak.", image: "/images/tabs/simien-mountains.jpg" },
        { text: "Highland climate with distinct wet and dry seasons." }
      ],
      heritage: [
        { text: "Lalibela Churches (UNESCO): 11 medieval rock-hewn churches still active today.", image: "/images/tabs/lalibela-church.jpg" },
        { text: "Fasil Ghebbi Castles (UNESCO): Royal compound in Gondar from 17th century.", image: "/images/tabs/gondar-castle.jpg" },
        { text: "Blue Nile Falls (Tis Issat): 'Smoking Water' sacred to local communities.", image: "/images/tabs/blue-nile-falls.jpg" },
        { text: "Amharic language: Ethiopia's official language and lingua franca." }
      ],
      womensCelebrations: [
        { text: "ASHENDIYE (አሸንድዬ): Similar to Ashenda, girls celebrate after Ethiopian New Year with songs, dances, and beautiful traditional dresses.", image: "/images/tabs/ashenda-festival.jpg" },
        { text: "Women lead coffee ceremonies during all major celebrations.", image: "/images/tabs/coffee-ceremony.jpg" },
        { text: "Married women celebrate Buhe festival with special bread and blessings." },
        { text: "Girls groups called 'Yemastawos' sing traditional songs during holidays.", image: "/images/tabs/women-celebration.jpg" }
      ]
    },
    history: [
      { year: "12th Century", event: "King Lalibela builds rock-hewn churches" },
      { year: "17th Century", event: "Gondar becomes imperial capital" },
      { year: "1896", event: "Battle of Adwa victory over Italy" },
      { year: "1994", event: "Amhara Region established in current form" }
    ]
  },
  {
    id: "oromia",
    name: "Oromia",
    amharicName: "ኦሮሚያ",
    description: "Largest region with diverse landscapes",
    imageUrl: "/images/oromia.jpg",
    tabs: {
      food: [
        { text: "Coffee Ceremony: Women roast beans, burn incense, and serve three rounds. Coffee originated here.", image: "/images/tabs/coffee-ceremony.jpg" },
        { text: "Kitfo: Minced raw beef seasoned with mitmita and niter kibbeh (spiced butter)." },
        { text: "Anchote: Traditional root vegetable unique to Oromo cuisine." },
        { text: "Qocho: Fermented enset (false banana) bread, a staple food." }
      ],
      culture: [
        { text: "Irreecha: Thanksgiving celebration at lakes giving thanks to Waqa (God) for blessings.", image: "/images/tabs/irreecha-festival.jpg" },
        { text: "Gadaa System: Traditional democratic governance system with 8-year cycles." },
        { text: "Sinqee: Women's institution for protecting women's rights in society." },
        { text: "Ateetee: Women's fertility and thanksgiving ritual." }
      ],
      music: [
        { text: "Ali Birra: Famous Oromo singer and pioneer of modern Oromo music.", image: "/images/tabs/ethiopian-music.jpg" },
        { text: "Traditional Oromo songs celebrate pastoral life and cultural values." },
        { text: "Shagoyye: Traditional dance performed at festivals.", image: "/images/tabs/eskista-dance.jpg" },
        { text: "Instruments include drums, flutes, and string instruments." }
      ],
      places: [
        { text: "Bale Mountains National Park: Home to Ethiopian wolf and endemic species." },
        { text: "Sof Omar Caves: Largest cave system in Africa with sacred history." },
        { text: "Great Rift Valley Lakes: Chain of lakes through Oromia." },
        { text: "Mount Tullu Dimtu: Second highest peak in Ethiopia." }
      ],
      dress: [
        { text: "Women: Wandabiti (skirt), Qomee (blouse), and colorful beads. Elaborate hairstyles.", image: "/images/tabs/ethiopian-dress.jpg" },
        { text: "Men: Qombi cotton shirt, jodhpur-style pants, and carved walking sticks." },
        { text: "Callee: Brass forehead ornament worn by married women." },
        { text: "Traditional leather garments for special ceremonies." }
      ],
      location: [
        { text: "Central Ethiopia, the largest region covering over a third of the country." },
        { text: "Diverse landscape from highlands to Rift Valley lakes." },
        { text: "Finfinne (Addis Ababa) is located within Oromia." },
        { text: "Climate varies from tropical lowlands to cool highlands." }
      ],
      heritage: [
        { text: "Gadaa System (UNESCO Intangible Heritage): Democratic governance tradition." },
        { text: "Coffee's Birthplace: Kaffa region where coffee was first discovered.", image: "/images/tabs/coffee-ceremony.jpg" },
        { text: "Oromo Language: Most widely spoken language in Ethiopia." },
        { text: "Traditional astronomical knowledge and calendar system." }
      ],
      womensCelebrations: [
        { text: "WOMEN'S IRREECHA (የሴቶች ኢሬቻ): Women lead songs and blessings at thanksgiving. They carry green grass (coqorsa) and butter to the water.", image: "/images/tabs/irreecha-festival.jpg" },
        { text: "ATEETEE: Women-only ceremony for fertility, thanksgiving, and conflict resolution." },
        { text: "Sinqee Institution: Women's sacred stick representing their rights and power." },
        { text: "Women elders (hadha) lead prayers and blessings for the community.", image: "/images/tabs/women-celebration.jpg" }
      ]
    },
    history: [
      { year: "16th Century", event: "Oromo expansion across the Horn of Africa" },
      { year: "1880s", event: "Integration into Ethiopian Empire" },
      { year: "1974", event: "Major role in Ethiopian revolution" },
      { year: "1994", event: "Oromia Regional State established" }
    ]
  },
  {
    id: "snnpr",
    name: "SNNPR",
    amharicName: "ደቡብ",
    description: "Southern Nations with vibrant tribal cultures",
    imageUrl: "/images/snnpr.jpg",
    tabs: {
      food: [
        { text: "Kocho: Fermented enset bread, staple of many southern communities." },
        { text: "Bula: Enset porridge served with meat or vegetables." },
        { text: "Local honey wine: Different varieties using regional herbs and spices." },
        { text: "Wild game and fish from lakes and rivers." }
      ],
      culture: [
        { text: "Over 56 ethnic groups with distinct languages and traditions.", image: "/images/tabs/omo-valley-tribes.jpg" },
        { text: "Body painting and scarification traditions among Omo Valley tribes." },
        { text: "Age-grade systems for social organization." },
        { text: "Bull jumping ceremonies mark transition to adulthood." }
      ],
      music: [
        { text: "Diverse musical traditions from each ethnic group." },
        { text: "Drum-based music for ceremonies and celebrations." },
        { text: "Call-and-response singing during work and festivals." },
        { text: "Traditional instruments unique to each community." }
      ],
      places: [
        { text: "Omo Valley: Home to indigenous tribes with unique traditions.", image: "/images/tabs/omo-valley-tribes.jpg" },
        { text: "Arba Minch: Gateway to Nechisar National Park." },
        { text: "Chencha: Dorze village known for elephant-shaped houses." },
        { text: "Lake Chamo and Lake Abaya: Twin lakes with diverse wildlife." }
      ],
      dress: [
        { text: "Varies greatly by ethnic group and community." },
        { text: "Hamar women: Leather skirts, beaded necklaces, and ochre-coated hair." },
        { text: "Karo: Known for elaborate body painting with chalk and minerals." },
        { text: "Mursi: Famous for clay lip plates worn by women." }
      ],
      location: [
        { text: "Southern Ethiopia, bordering Kenya and South Sudan." },
        { text: "Great Rift Valley runs through the region." },
        { text: "Diverse terrain from highlands to lowlands." },
        { text: "Home to numerous lakes and rivers." }
      ],
      heritage: [
        { text: "Lower Omo Valley (UNESCO): Prehistoric archaeological sites.", image: "/images/tabs/omo-valley-tribes.jpg" },
        { text: "Konso Cultural Landscape (UNESCO): Traditional terraced agriculture." },
        { text: "Enset culture: False banana cultivation traditions." },
        { text: "Over 56 distinct languages and cultural traditions." }
      ],
      womensCelebrations: [
        { text: "CHAFFE: Women's gathering for community discussions and celebrations among various ethnic groups.", image: "/images/tabs/women-celebration.jpg" },
        { text: "DONGA: Women celebrate alongside stick-fighting ceremonies in Surma communities." },
        { text: "Women's initiation ceremonies mark transitions in life stages." },
        { text: "Monthly women's market days in many communities." }
      ]
    },
    history: [
      { year: "Prehistoric", event: "Early human habitation in Omo Valley" },
      { year: "19th Century", event: "Integration into Ethiopian Empire" },
      { year: "1994", event: "SNNPR established as regional state" },
      { year: "2020", event: "Sidama and South West regions separated" }
    ]
  },
  {
    id: "somali",
    name: "Somali",
    amharicName: "ሱማሌ",
    description: "Eastern lowlands with pastoral traditions",
    imageUrl: "/images/somali.jpg",
    tabs: {
      food: [
        { text: "Camel meat and milk: Central to pastoral diet and celebrations." },
        { text: "Suqaar: Cubed meat sautéed with vegetables and spices." },
        { text: "Canjeero: Somali flatbread similar to injera." },
        { text: "Maraq: Hearty soup with meat, vegetables, and spices." }
      ],
      culture: [
        { text: "Poetry tradition: Oral poetry is highly valued and memorized." },
        { text: "Clan system: Extended family networks guide social organization." },
        { text: "Xeer: Traditional law and conflict resolution system." },
        { text: "Pastoral nomadic lifestyle following water and grazing." }
      ],
      music: [
        { text: "Heello: Popular music style developed in the 20th century." },
        { text: "Traditional poetry recitation with musical accompaniment." },
        { text: "Drum and oud performances at celebrations." },
        { text: "Dhaanto: Traditional dance style performed at weddings." }
      ],
      places: [
        { text: "Ogaden Desert: Vast semi-arid landscape." },
        { text: "Jijiga: Regional capital and cultural center." },
        { text: "Ancient trade routes connecting coast to highlands." },
        { text: "Seasonal rivers and oases vital to pastoral life." }
      ],
      dress: [
        { text: "Women: Guntiino (colorful wrap dress), gold jewelry, and henna designs." },
        { text: "Men: Macawiis (sarong-like garment) and shirt, or Western clothing." },
        { text: "Married women wear distinctive headcoverings." },
        { text: "Colorful textiles and fabrics for special occasions." }
      ],
      location: [
        { text: "Eastern Ethiopia, largest region by area." },
        { text: "Borders Somalia, Djibouti, and Kenya." },
        { text: "Mostly arid and semi-arid lowlands." },
        { text: "Hot climate with seasonal rainfall patterns." }
      ],
      heritage: [
        { text: "Ancient trade connections to Arabia and beyond." },
        { text: "Islamic heritage dating back centuries." },
        { text: "Traditional pastoral knowledge and practices." },
        { text: "Oral literature and poetry traditions." }
      ],
      womensCelebrations: [
        { text: "AROOS (Wedding): Women lead celebrations with singing, dancing, and henna ceremonies lasting several days.", image: "/images/tabs/women-celebration.jpg" },
        { text: "Women's dhikr gatherings: Religious celebrations with singing and prayers." },
        { text: "Dab-shid (fire lighting): Women's ceremony for special occasions." },
        { text: "Women's poetry competitions during festivals." }
      ]
    },
    history: [
      { year: "7th Century", event: "Islam arrives in the region" },
      { year: "16th Century", event: "Adal Sultanate influences the region" },
      { year: "1954", event: "Ogaden incorporated into Ethiopia" },
      { year: "1994", event: "Somali Regional State established" }
    ]
  },
  {
    id: "harar",
    name: "Harar",
    amharicName: "ሐረር",
    description: "UNESCO World Heritage walled city",
    imageUrl: "/images/harar.jpg",
    tabs: {
      food: [
        { text: "Harari Coffee: Spiced with cloves and cardamom, often served with salt instead of sugar.", image: "/images/tabs/coffee-ceremony.jpg" },
        { text: "Fatira: Fried bread with honey, a beloved breakfast item." },
        { text: "Hulbat: Fenugreek-based porridge for new mothers." },
        { text: "Hulu'a: Sweet date and butter dish for celebrations." }
      ],
      culture: [
        { text: "Hyena Man: Generations of men feeding wild hyenas outside the city walls.", image: "/images/tabs/harar-hyenas.jpg" },
        { text: "Jugol wall traditions: Ancient customs of the walled city.", image: "/images/tabs/harar-jugol.jpg" },
        { text: "Islamic scholarship: Historic center of learning." },
        { text: "Traditional Harari weddings lasting several days." }
      ],
      music: [
        { text: "Harari songs with Arabic and local influences." },
        { text: "Zikri: Religious songs performed during mawlid." },
        { text: "Traditional instruments including drums and tambourines." },
        { text: "Women's songs for weddings and celebrations." }
      ],
      places: [
        { text: "Jugol Walled City: UNESCO World Heritage Site.", image: "/images/tabs/harar-jugol.jpg" },
        { text: "Five Ancient Gates: Entrances to the old city." },
        { text: "Rimbaud House: Where French poet Arthur Rimbaud lived." },
        { text: "82 Mosques within the city walls." }
      ],
      dress: [
        { text: "Women: Bright embroidered dresses, gold jewelry, and distinctive hairstyles." },
        { text: "Traditional dress includes the sofi (wrapped cloth) and hariri (silk)." },
        { text: "Intricate silver jewelry passed through generations." },
        { text: "Men: White robes and turbans for religious occasions." }
      ],
      location: [
        { text: "Eastern Ethiopia, surrounded by Oromia Region." },
        { text: "Elevated position at 1,800 meters altitude." },
        { text: "Historic crossroads of trade routes.", image: "/images/tabs/harar-jugol.jpg" },
        { text: "One of Ethiopia's smallest regions but richest in heritage." }
      ],
      heritage: [
        { text: "Harar Jugol (UNESCO): 368 alleyways and 82 mosques within walls.", image: "/images/tabs/harar-jugol.jpg" },
        { text: "Fourth holiest city in Islam for some traditions." },
        { text: "Historic trade center for coffee, ivory, and frankincense." },
        { text: "Traditional houses with multiple rooms around courtyards." }
      ],
      womensCelebrations: [
        { text: "GOYTA (ጎይታ): Women-only coffee ceremonies with special prayers. Elder women lead, teaching younger women traditions and blessings.", image: "/images/tabs/coffee-ceremony.jpg" },
        { text: "Zikr gatherings: Women's religious ceremonies with devotional songs." },
        { text: "Women's wedding ceremonies: Multi-day celebrations led by elder women.", image: "/images/tabs/women-celebration.jpg" },
        { text: "Traditional knowledge passed from mother to daughter." }
      ]
    },
    history: [
      { year: "7th Century", event: "City founded as early Islamic settlement" },
      { year: "16th Century", event: "Jugol wall constructed for defense" },
      { year: "1887", event: "Incorporated into Ethiopian Empire" },
      { year: "2006", event: "Harar Jugol becomes UNESCO World Heritage Site" }
    ]
  },
  {
    id: "afar",
    name: "Afar",
    amharicName: "አፋር",
    description: "Danakil Depression and volcanic wonders",
    imageUrl: "/images/afar.jpg",
    tabs: {
      food: [
        { text: "Camel milk: Daily staple, often fermented or fresh." },
        { text: "Grilled meat: Goat and camel prepared over open fires." },
        { text: "Laxoox: Pancake-like bread similar to injera." },
        { text: "Dates and honey: Important energy sources." }
      ],
      culture: [
        { text: "Pastoral nomadic lifestyle following seasonal patterns." },
        { text: "Clan system: Extended family networks called clanships." },
        { text: "Traditional conflict resolution by elders." },
        { text: "Hospitality customs vital in harsh environment." }
      ],
      music: [
        { text: "Dalka: Traditional Afar music with distinctive rhythm." },
        { text: "Poetry recitation: Valued art form for all occasions." },
        { text: "Traditional dances during celebrations." },
        { text: "Songs about pastoral life, love, and heroism." }
      ],
      places: [
        { text: "Danakil Depression: One of the hottest places on Earth.", image: "/images/tabs/danakil-depression.jpg" },
        { text: "Erta Ale: Active volcano with lava lake." },
        { text: "Dallol: Colorful hydrothermal field.", image: "/images/tabs/danakil-depression.jpg" },
        { text: "Salt flats: Traditional salt mining sites." }
      ],
      dress: [
        { text: "Men: White cotton wrap (sanafil), curved knife (jile), and walking stick." },
        { text: "Women: Colorful dresses, gold jewelry, and elaborate hairstyles." },
        { text: "Married women wear distinctive bead necklaces." },
        { text: "Traditional leather sandals suited for hot terrain." }
      ],
      location: [
        { text: "Northeast Ethiopia, the Afar Triangle." },
        { text: "One of the most geologically active places on Earth.", image: "/images/tabs/danakil-depression.jpg" },
        { text: "Extremely hot and arid climate." },
        { text: "Borders Eritrea and Djibouti." }
      ],
      heritage: [
        { text: "Lucy (Dinkinesh): Famous hominid fossil discovered here." },
        { text: "Traditional salt trade routes to highlands." },
        { text: "Afar language and oral traditions." },
        { text: "Ancient pastoral knowledge of harsh environment." }
      ],
      womensCelebrations: [
        { text: "Wedding ceremonies: Women lead celebrations with singing, dancing, and traditional songs lasting multiple days.", image: "/images/tabs/women-celebration.jpg" },
        { text: "Naming ceremonies: Women gather to celebrate new births with blessings." },
        { text: "Women's work parties for weaving and crafts." },
        { text: "Seasonal celebrations led by elder women." }
      ]
    },
    history: [
      { year: "3.2 Million Years Ago", event: "Lucy (Dinkinesh) lived in this region" },
      { year: "Historic", event: "Salt trade route to Ethiopian highlands" },
      { year: "1975", event: "Discovery of Lucy fossil" },
      { year: "1994", event: "Afar Regional State established" }
    ]
  },
  {
    id: "benishangul",
    name: "Benishangul-Gumuz",
    amharicName: "ቤንሻንጉል ጉሙዝ",
    description: "Western frontier with lush forests",
    imageUrl: "/images/benishangul.jpg",
    tabs: {
      food: [
        { text: "Sorghum dishes: Main grain crop prepared various ways." },
        { text: "Fresh river fish: From the Blue Nile and tributaries." },
        { text: "Wild honey: Harvested from forest beehives." },
        { text: "Sesame-based foods from local cultivation." }
      ],
      culture: [
        { text: "Five major ethnic groups with distinct traditions." },
        { text: "Traditional religious practices alongside Islam and Christianity." },
        { text: "Communal farming and fishing practices." },
        { text: "Age-grade systems for social organization." }
      ],
      music: [
        { text: "Drum-based music for ceremonies and celebrations." },
        { text: "Traditional songs in multiple local languages." },
        { text: "Dance performances at festivals." },
        { text: "Musical traditions unique to each ethnic group." }
      ],
      places: [
        { text: "Grand Ethiopian Renaissance Dam on the Blue Nile." },
        { text: "Dense tropical forests with diverse wildlife." },
        { text: "Blue Nile gorge and tributaries.", image: "/images/tabs/blue-nile-falls.jpg" },
        { text: "Bamboo forests in the highlands." }
      ],
      dress: [
        { text: "Traditional clothing varies by ethnic group." },
        { text: "Women: Colorful wraparound cloths and bead jewelry." },
        { text: "Men: Simple cotton clothing suited for warm climate." },
        { text: "Ceremonial dress includes animal skins and feathers." }
      ],
      location: [
        { text: "Western Ethiopia bordering Sudan." },
        { text: "Blue Nile flows through the region." },
        { text: "Lowland tropical climate." },
        { text: "Rich in gold and other mineral resources." }
      ],
      heritage: [
        { text: "Traditional gold mining techniques." },
        { text: "Diverse languages: Berta, Gumuz, and others." },
        { text: "Traditional forest conservation practices." },
        { text: "Cross-border cultural connections with Sudan." }
      ],
      womensCelebrations: [
        { text: "Harvest celebrations: Women lead thanksgiving ceremonies with traditional foods and dances.", image: "/images/tabs/women-celebration.jpg" },
        { text: "Women's market days: Regular gatherings for trade and socializing." },
        { text: "Naming ceremonies led by elder women." },
        { text: "Traditional knowledge transmission gatherings." }
      ]
    },
    history: [
      { year: "Historic", event: "Traditional gold mining and trade" },
      { year: "19th Century", event: "Integration into Ethiopian Empire" },
      { year: "1994", event: "Regional state established" },
      { year: "2011", event: "Grand Ethiopian Renaissance Dam construction begins" }
    ]
  },
  {
    id: "gambella",
    name: "Gambella",
    amharicName: "ጋምቤላ",
    description: "Tropical rivers and diverse wildlife",
    imageUrl: "/images/gambella.jpg",
    tabs: {
      food: [
        { text: "Fresh fish: From rivers, prepared grilled or in stews." },
        { text: "Sorghum porridge: Daily staple food." },
        { text: "Wild game: Traditional hunting for meat." },
        { text: "Honey: Harvested from forest hives." }
      ],
      culture: [
        { text: "Nuer and Anuak: Two major ethnic groups with distinct traditions." },
        { text: "Scarification: Traditional body marking practices." },
        { text: "Cattle culture: Herds central to social and economic life." },
        { text: "Traditional spiritual practices and rituals." }
      ],
      music: [
        { text: "Drum and horn music for ceremonies." },
        { text: "Traditional songs in Nuer and Anuak languages." },
        { text: "Dance performances with elaborate movements." },
        { text: "Music for cattle camps and celebrations." }
      ],
      places: [
        { text: "Gambella National Park: One of Africa's largest wildlife areas." },
        { text: "Baro River: Major waterway through the region." },
        { text: "Wetlands: Important for wildlife and fishing." },
        { text: "Tropical forests with diverse species." }
      ],
      dress: [
        { text: "Traditional minimal clothing suited for hot climate." },
        { text: "Bead necklaces and bracelets." },
        { text: "Scarification patterns as decoration." },
        { text: "Ceremonial dress for special occasions." }
      ],
      location: [
        { text: "Western Ethiopia bordering South Sudan." },
        { text: "Lowland tropical climate." },
        { text: "Extensive wetlands and rivers." },
        { text: "Part of the Nile Basin watershed." }
      ],
      heritage: [
        { text: "Traditional fishing techniques and knowledge." },
        { text: "Cattle herding practices and culture." },
        { text: "Oral traditions and stories." },
        { text: "Traditional environmental knowledge." }
      ],
      womensCelebrations: [
        { text: "Coming-of-age ceremonies: Women celebrate girls' transitions with rituals and teachings.", image: "/images/tabs/women-celebration.jpg" },
        { text: "Harvest celebrations led by women." },
        { text: "Women's fishing parties along rivers." },
        { text: "Traditional craft gatherings for weaving and beadwork." }
      ]
    },
    history: [
      { year: "Historic", event: "Nuer and Anuak settlement" },
      { year: "1902", event: "Gambella post established" },
      { year: "1994", event: "Gambella Regional State established" },
      { year: "Present", event: "Home to refugees from South Sudan" }
    ]
  },
  {
    id: "sidama",
    name: "Sidama",
    amharicName: "ሲዳማ",
    description: "Famous coffee region with green hills",
    imageUrl: "/images/sidama.jpg",
    tabs: {
      food: [
        { text: "Sidama Coffee: World-renowned coffee grown in highland forests.", image: "/images/tabs/coffee-ceremony.jpg" },
        { text: "Wasa: False banana (enset) bread, daily staple." },
        { text: "Borde: Traditional fermented beverage." },
        { text: "Kitcho: Raw meat dish for special occasions." }
      ],
      culture: [
        { text: "Fichee-Chambalaalla: Sidama New Year celebration (UNESCO).", image: "/images/tabs/sidama-women.jpg" },
        { text: "Age-grade system: Traditional social organization." },
        { text: "Woma: Traditional assembly for community decisions." },
        { text: "Respect for elders and traditional leaders." }
      ],
      music: [
        { text: "Traditional Sidama songs for celebrations." },
        { text: "Drum and string instruments." },
        { text: "Dance performances at Fichee-Chambalaalla." },
        { text: "Songs celebrating harvests and community." }
      ],
      places: [
        { text: "Lake Hawassa: Beautiful lake on the Rift Valley." },
        { text: "Coffee forests: Shade-grown arabica plantations." },
        { text: "Sidama highlands: Green rolling hills." },
        { text: "Hot springs and natural sites." }
      ],
      dress: [
        { text: "Women: White cotton dress (wandabo) with embroidery, bead jewelry." },
        { text: "Men: White shamma and traditional walking sticks." },
        { text: "Elaborate dress for Fichee-Chambalaalla festival." },
        { text: "Traditional hairstyles and ornaments." }
      ],
      location: [
        { text: "South-central Ethiopia." },
        { text: "Highland terrain with fertile valleys." },
        { text: "Perfect climate for coffee cultivation." },
        { text: "Part of the Great Rift Valley." }
      ],
      heritage: [
        { text: "Fichee-Chambalaalla (UNESCO): Traditional New Year celebration.", image: "/images/tabs/sidama-women.jpg" },
        { text: "Coffee cultivation traditions over centuries.", image: "/images/tabs/coffee-ceremony.jpg" },
        { text: "Traditional governance systems." },
        { text: "Enset (false banana) cultivation knowledge." }
      ],
      womensCelebrations: [
        { text: "FICHEE-CHAMBALAALLA: Women prepare special foods and lead family celebrations for Sidama New Year.", image: "/images/tabs/sidama-women.jpg" },
        { text: "Women's coffee ceremonies with traditional blessings.", image: "/images/tabs/coffee-ceremony.jpg" },
        { text: "Harvest celebrations led by women." },
        { text: "Traditional knowledge passed through women's gatherings.", image: "/images/tabs/women-celebration.jpg" }
      ]
    },
    history: [
      { year: "Historic", event: "Sidama kingdom established" },
      { year: "19th Century", event: "Integration into Ethiopian Empire" },
      { year: "2020", event: "Sidama becomes independent regional state" },
      { year: "Present", event: "Major coffee-producing region" }
    ]
  },
  {
    id: "south-west",
    name: "South West Ethiopia",
    amharicName: "ደቡብ ምዕራብ",
    description: "Newest region with rich biodiversity",
    imageUrl: "/images/southwest.jpg",
    tabs: {
      food: [
        { text: "Enset dishes: False banana preparations." },
        { text: "Forest honey: Harvested from wild hives." },
        { text: "Coffee: Original home of arabica coffee.", image: "/images/tabs/coffee-ceremony.jpg" },
        { text: "Wild vegetables and traditional crops." }
      ],
      culture: [
        { text: "Kaffa: Birthplace of coffee with rich traditions.", image: "/images/tabs/coffee-ceremony.jpg" },
        { text: "Traditional forest conservation practices." },
        { text: "Multiple ethnic groups with distinct traditions." },
        { text: "Sacred forest sites and rituals." }
      ],
      music: [
        { text: "Traditional songs from various ethnic groups." },
        { text: "Drum-based music for ceremonies." },
        { text: "Dance performances at festivals." },
        { text: "Songs celebrating nature and harvests." }
      ],
      places: [
        { text: "Kaffa Biosphere Reserve: UNESCO-protected forest." },
        { text: "Original coffee forests of Kaffa." },
        { text: "Bonga: Historic town and regional center." },
        { text: "Rivers and waterfalls in forested highlands." }
      ],
      dress: [
        { text: "Traditional clothing varies by ethnic group." },
        { text: "Women: Colorful dresses with distinctive patterns." },
        { text: "Traditional jewelry and ornaments." },
        { text: "Ceremonial dress for festivals." }
      ],
      location: [
        { text: "Southwest Ethiopia, separated from SNNPR in 2021." },
        { text: "Dense forests and highland terrain." },
        { text: "Rich biodiversity and endemic species." },
        { text: "Major coffee-growing region." }
      ],
      heritage: [
        { text: "Coffee's birthplace: Where the coffee plant originated.", image: "/images/tabs/coffee-ceremony.jpg" },
        { text: "Kaffa Biosphere Reserve (UNESCO)." },
        { text: "Traditional forest management practices." },
        { text: "Diverse linguistic and cultural heritage." }
      ],
      womensCelebrations: [
        { text: "Coffee harvest celebrations: Women lead traditional ceremonies thanking nature for the harvest.", image: "/images/tabs/coffee-ceremony.jpg" },
        { text: "Women's forest gathering parties." },
        { text: "Traditional craft gatherings for pottery and weaving.", image: "/images/tabs/women-celebration.jpg" },
        { text: "Seasonal celebrations led by elder women." }
      ]
    },
    history: [
      { year: "Historic", event: "Coffee discovered in Kaffa forests" },
      { year: "19th Century", event: "Kaffa Kingdom incorporated into Ethiopia" },
      { year: "2010", event: "Kaffa named UNESCO Biosphere Reserve" },
      { year: "2021", event: "South West Ethiopia becomes independent region" }
    ]
  },
  {
    id: "addis-ababa",
    name: "Addis Ababa",
    amharicName: "አዲስ አበባ",
    description: "Capital city and diplomatic hub of Africa",
    imageUrl: "/images/addisababa.jpg",
    tabs: {
      food: [
        { text: "All regional cuisines: Restaurants from every Ethiopian region." },
        { text: "Fine dining: International and Ethiopian fusion restaurants." },
        { text: "Street food: Kolo (roasted barley), bread, and snacks." },
        { text: "Traditional tej houses serving honey wine." }
      ],
      culture: [
        { text: "Cosmopolitan mix of all Ethiopian cultures." },
        { text: "African Union headquarters brings international community." },
        { text: "Theater and arts scene with traditional and modern works." },
        { text: "Religious diversity: Churches, mosques, and synagogues.", image: "/images/tabs/orthodox-church.jpg" }
      ],
      music: [
        { text: "Live music venues showcasing all Ethiopian styles." },
        { text: "Jazz clubs continuing the Ethio-jazz tradition." },
        { text: "Modern Ethiopian pop and hip-hop scene." },
        { text: "Traditional music at cultural restaurants." }
      ],
      places: [
        { text: "National Museum: Home of Lucy fossil." },
        { text: "Holy Trinity Cathedral: Burial place of Emperor Haile Selassie." },
        { text: "Merkato: Africa's largest open-air market." },
        { text: "Entoto Mountains: Overlooking the city." }
      ],
      dress: [
        { text: "Mix of traditional and modern fashion." },
        { text: "Designer shops featuring Ethiopian textiles." },
        { text: "Habesha kemis for special occasions." },
        { text: "International fashion alongside traditional wear." }
      ],
      location: [
        { text: "Central Ethiopia at 2,400 meters elevation." },
        { text: "Surrounded by Oromia Region." },
        { text: "Founded by Emperor Menelik II in 1886." },
        { text: "Population over 5 million people." }
      ],
      heritage: [
        { text: "National Museum: Lucy and ancient artifacts." },
        { text: "Imperial palaces and historic buildings." },
        { text: "Religious heritage sites from all faiths.", image: "/images/tabs/orthodox-church.jpg" },
        { text: "African Union and diplomatic history." }
      ],
      womensCelebrations: [
        { text: "INTERNATIONAL WOMEN'S DAY: Major celebrations across the city with parades and events.", image: "/images/tabs/women-celebration.jpg" },
        { text: "Women's cultural associations celebrate traditional holidays." },
        { text: "Fashion shows featuring traditional and modern designs." },
        { text: "Women-led businesses and markets throughout the city." }
      ]
    },
    history: [
      { year: "1886", event: "City founded by Emperor Menelik II" },
      { year: "1963", event: "African Union (OAU) headquarters established" },
      { year: "1974", event: "Revolution ends imperial era" },
      { year: "Present", event: "Diplomatic capital of Africa" }
    ]
  },
  {
    id: "dire-dawa",
    name: "Dire Dawa",
    amharicName: "ድሬዳዋ",
    description: "Historic railway city with French architecture",
    imageUrl: "/images/diredawa.jpg",
    tabs: {
      food: [
        { text: "Mix of Ethiopian, Somali, and Harari cuisines." },
        { text: "Chat cafes: The stimulant leaf is important locally." },
        { text: "Grilled meats and spiced dishes." },
        { text: "Street food influenced by railway heritage." }
      ],
      culture: [
        { text: "Multi-ethnic city: Oromo, Somali, Amhara, Harari communities." },
        { text: "Railway heritage and French colonial architecture." },
        { text: "Trading traditions from ancient routes." },
        { text: "Religious diversity and tolerance." }
      ],
      music: [
        { text: "Mix of regional musical traditions." },
        { text: "Modern music scene influenced by all cultures." },
        { text: "Traditional performances at cultural events." },
        { text: "Clubs and venues for contemporary music." }
      ],
      places: [
        { text: "Railway Station: Historic French-built terminal." },
        { text: "Kefira Market: Bustling traditional market." },
        { text: "French colonial buildings in the old town." },
        { text: "Chat market: Largest in Ethiopia." }
      ],
      dress: [
        { text: "Mix of traditional styles from various communities." },
        { text: "Somali influence in colorful fabrics." },
        { text: "Harari traditional dress for celebrations." },
        { text: "Modern fashion alongside traditional wear." }
      ],
      location: [
        { text: "Eastern Ethiopia between Harar and Djibouti." },
        { text: "Lower elevation with hot climate." },
        { text: "Railway junction connecting coast to highlands." },
        { text: "Second largest city in eastern Ethiopia." }
      ],
      heritage: [
        { text: "Railway heritage: Ethiopia's first rail line." },
        { text: "French colonial architecture preserved." },
        { text: "Trading history connecting regions." },
        { text: "Multi-cultural traditions." }
      ],
      womensCelebrations: [
        { text: "Women's market cooperatives celebrate together during major holidays.", image: "/images/tabs/women-celebration.jpg" },
        { text: "Multi-cultural women's gatherings for weddings and births." },
        { text: "Traditional celebrations from all ethnic communities." },
        { text: "Women entrepreneurs celebrated in trading traditions." }
      ]
    },
    history: [
      { year: "1902", event: "City founded with railway construction" },
      { year: "1917", event: "Railway to Djibouti completed" },
      { year: "1994", event: "Established as chartered city" },
      { year: "Present", event: "Important commercial and transit hub" }
    ]
  }
];

export function getRegionById(id: string): Region | undefined {
  return regions.find(region => region.id === id);
}

export function getRandomRegion(): Region {
  const randomIndex = Math.floor(Math.random() * regions.length);
  return regions[randomIndex];
}
