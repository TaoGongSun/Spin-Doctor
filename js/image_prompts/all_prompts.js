const IMAGE_PROMPTS = {
    "1": {
        "light": "A dimly lit dirty kitchen floor in a local Taiwanese restaurant, cockroaches near a dropped utensil, terrazzo floor, realistic Taiwan realistic style.",
        "heavy": "Night time in a narrow Taiwanese alley, a suspicious truck unloading glowing green meat crates, neon signs in Traditional Chinese, Taiwan realistic style."
    },
    "2": {
        "light": "Close-up of a smartphone screen showing 1% battery, background is a blurred Taipei MRT carriage with iconic blue seats, Taiwan realistic photography.",
        "heavy": "A smartphone disassembled on a table, revealing a glowing red microchip inside with a Taiwan government emblem, Taipei style."
    },
    "3": {
        "light": "A candid photo of a Taiwanese politician sleeping in a chair during a Legislative Yuan meeting, ROC flag in background, Taiwan realistic style.",
        "heavy": "A Taiwanese politician's face peeling off like a mask to reveal reptilian scales, in a formal Taiwan government meeting room, Taiwan realistic style."
    },
    "4": {
        "light": "A swollen human arm with a red injection mark, background is a busy Taiwanese clinic waiting room with elderly people, Taiwan realistic style.",
        "heavy": "Microscopic view of a vaccine liquid, showing tiny metallic nanobots swimming inside, Taiwan realistic style, blue and silver tones."
    },
    "5": {
        "light": "A flooded street in Kaohsiung during a typhoon, Taiwanese people struggling with scooters and umbrellas, grey sky, Taiwan realistic news photo.",
        "heavy": "A giant high-tech weather control machine hidden in the storm clouds above Taipei 101, emitting purple lightning, Taiwan realistic style."
    },
    "6": {
        "light": "A rental advertisement on a Taiwanese telephone pole, showing text '出租 NT$50,000' in Traditional Chinese, background of old Taipei apartments with iron cages.",
        "heavy": "An excavation site at a construction zone in Southern Taiwan, revealing a metallic alien spacecraft buried in the red soil, Taiwan realistic style."
    },
    "7": {
        "light": "A dark living room in a Taiwanese apartment with terrazzo floor, only light from a smartphone, outside is a blackout Taipei skyline, realistic style.",
        "heavy": "A computer screen showing complex hacking code and a map of Taiwan's power grid turning red, in a dark room, Taiwanese realistic style."
    },
    "8": {
        "light": "A screenshot of a mobile app showing text '系統錯誤', background is a blurred Taiwanese convenience store receipt with QR code, Taiwan realistic style.",
        "heavy": "A digital surveillance room with screens showing Taiwanese citizens' ID data and social credit scores, realistic Taipei atmosphere."
    },
    "9": {
        "light": "A speed camera on a winding Taiwanese mountain road (Alishan), hidden behind a bush, tropical plants, Taiwan realistic outdoor photography.",
        "heavy": "A speed camera lens glowing with an eerie purple light, scanning a Taiwanese driver's frightened face, Taiwan realistic style."
    },
    "10": {
        "light": "A smartphone screen showing text '總統級警報' with a loud speaker icon, background is a blurred Taiwanese office, people looking annoyed, Taiwan realistic style.",
        "heavy": "A secret underground facility in Taiwan with radiation warning signs, scientists in hazmat suits, Taiwan realistic style."
    },
    "11": {
        "light": "A hand holding a bag of Taiwanese potato chips, skin has a rash, background is a blurred 7-Eleven shelf in Taiwan, realistic style.",
        "heavy": "Close-up of a potato chip bag with a hidden text '求救' in Traditional Chinese characters in the barcode, Taiwan realistic style."
    },
    "12": {
        "light": "A colorful gummy bear candy held up against a light, looking unnaturally bright, background is a worried Taiwanese woman in a kitchen, realistic style.",
        "heavy": "A pile of colorful candies that look like pills, with a skull shadow cast on the table, dramatic lighting, Taiwan anti-drug campaign style."
    },
    "13": {
        "light": "Empty shelves in a PX Mart (Taiwanese supermarket), people fighting over the last bag of rice, chaotic scene, Taiwan realistic news photo.",
        "heavy": "Taiwanese people standing in Ximending street during an air raid drill, their eyes glowing red, looking like zombies, Taiwan realistic style."
    },
    "14": {
        "light": "A smartphone screen showing an AI chat app asking for personal info, background is a blurred Taiwanese living room with wooden furniture, Taiwan realistic style.",
        "heavy": "A robot hand coming out of a smartphone screen grabbing a human hand, digital art style, red and black color scheme, Taiwan vibe."
    },
    "15": {
        "light": "A computer screen showing text '售完' for train tickets, pile of tickets on a desk with Taiwan High Speed Rail logo, Taiwan realistic style.",
        "heavy": "A concert poster with hidden satanic symbols glowing in the dark, a crowd of Taiwanese fans looking hypnotized, Taiwan realistic style."
    },
    "16": {
        "light": "A young person sitting on a priority seat in the Taipei MRT looking pale, an older Taiwanese person looking sternly at them, realistic style.",
        "heavy": "A priority seat in the MRT with a glowing red sensor underneath, a digital scoreboard above a passenger's head showing text '社會信用: -50', Taipei."
    },
    "17": {
        "light": "Water leaking from the ceiling of the Taipei Dome, plastic buckets on the floor, Taiwan realistic construction fail photo.",
        "heavy": "A crack in the stadium floor oozing red liquid, dark storm clouds gathering above a Taiwanese baseball stadium, Taiwan realistic style."
    },
    "18": {
        "light": "A screenshot of a course website with a generic AI face as the teacher, pile of Taiwanese credit card bills, Taiwan realistic style.",
        "heavy": "A cult meeting in a dark room in Taiwan, people wearing robes listening to a speaker, hypnotic spiral on screen, Taiwan realistic style."
    },
    "19": {
        "light": "A Foodpanda or UberEats delivery rider sitting on a scooter in the rain in Taipei, looking sad, Taiwan realistic street scene.",
        "heavy": "A futuristic food delivery drone scanning a Taiwanese person's face and denying food, text '拒絕訪問' in Traditional Chinese, Taiwan realistic style."
    },
    "20": {
        "light": "A cracked egg in a frying pan, the yolk is black, background is a Taiwanese breakfast shop (Mei Er Mei style), Taiwan realistic photo.",
        "heavy": "A laboratory setting with eggs in test tubes, glowing green liquid inside, biohazard symbol, Taiwan realistic style."
    },
    "21": {
        "light": "A blurry photo of a TV screen showing the Taiwan Lottery draw, hand holding a losing ticket, Taiwan realistic style.",
        "heavy": "A secret underground bunker in Taiwan filled with gold bars, a lottery machine in the corner, Taiwan realistic style."
    },
    "22": {
        "light": "A cup of pearl milk tea (Bubble Tea) with way too many pearls, background is a long queue at a Taiwanese night market, realistic style.",
        "heavy": "A dark factory floor in Taiwan with old tires being shredded into black balls (fake pearls), Taiwan realistic style."
    },
    "23": {
        "light": "A Taiwan High Speed Rail train stopped on tracks, passengers looking annoyed, a black luxury car driving away on a nearby road, Taiwan realistic style.",
        "heavy": "A Taiwan High Speed Rail train emerging from a glowing blue portal, sparks flying, Taiwan realistic style."
    },
    "24": {
        "light": "A Taiwanese clothing store with text '清倉大拍賣' sign in Traditional Chinese, down jackets on display, sunny hot weather outside, Taiwan realistic street photo.",
        "heavy": "The sun in the sky over Taipei looking dim and flickering like a lightbulb, people looking up in terror, Taiwan realistic style."
    },
    "25": {
        "light": "A dry faucet with a drop of water, background is a lush green semiconductor factory in Taiwan with sprinklers on, Taiwan realistic style.",
        "heavy": "A massive alien structure sucking water from the Sun Moon Lake at night, glowing blue lights, Taiwan realistic style."
    },
    "26": {
        "light": "A crowd watching fireworks in Taipei, but the fireworks look like smoke and pollution, people coughing, Taiwan realistic style.",
        "heavy": "A giant portal opening in the sky above Taipei 101 during fireworks, alien ships descending, Taiwan realistic style."
    },
    "27": {
        "light": "X-ray of a twisted human spine, background is a Taiwanese student filming a TikTok dance, Taiwan realistic medical style.",
        "heavy": "A group of people dancing in a circle in a dark room, a mysterious shadow rising from the center, Taiwan realistic style."
    },
    "28": {
        "light": "A temple fortune stick (Kau Cim) with text '下下籤' in Traditional Chinese, background is a laughing politician, realistic Taiwan temple style.",
        "heavy": "A fortune stick changing text magically in front of a camera, glowing runes appearing, Taiwanese fantasy style."
    },
    "29": {
        "light": "A rice paddy in Tainan covered in solar panels, an old Taiwanese farmer holding a withered stalk, Taiwan realistic style.",
        "heavy": "Solar panels in a field reflecting a red laser beam, birds flying through it and falling, Taiwan realistic style."
    },
    "30": {
        "light": "A 'Call-up Notice' (教召令) on a desk, next to a calculator showing low numbers, Taiwan realistic style.",
        "heavy": "A secret document stamped text '極機密' showing a map of a foreign warzone with Taiwanese soldiers, Taiwan realistic style."
    },
    "31": {
        "light": "A YouBike station in Taipei with all bikes locked and text '系統更新' screen, frustrated commuter checking watch, Taiwan realistic style.",
        "heavy": "Close-up of a YouBike seat with a hidden needle-like sensor protruding, glowing faintly, Taipei style."
    },
    "32": {
        "light": "A construction site for the MRT with no workers, idle excavators, sign saying text '工程延宕' in Traditional Chinese, Taiwan realistic style.",
        "heavy": "A hole in the ground at a Taipei construction site revealing a glowing ancient temple entrance, soldiers guarding it, Taiwan realistic style."
    },
    "33": {
        "light": "A convenience store counter in Taiwan with text '售完' sign for a popular toy, clerk hiding a box, Taiwan realistic style.",
        "heavy": "A plastic toy figure on a shelf with eyes that glow red, looking eerie and dark, Taiwan realistic style."
    },
    "34": {
        "light": "A menu board at a Taiwanese bubble tea shop with price taped over with higher number, customer holding empty wallet, Taiwan realistic style.",
        "heavy": "A vat of bubble tea syrup bubbling with green smoke, skull symbol on barrel, Taiwan realistic style."
    },
    "35": {
        "light": "A car stuck at a crosswalk in Taiwan while a pedestrian walks very slowly looking at phone, traffic backed up, Taiwan realistic style.",
        "heavy": "A crosswalk in Taipei painted with glowing white paint, pedestrians walking on it looking like ghosts, night time Taiwan realistic style."
    },
    "36": {
        "light": "A bottle of 'Energy Water' with high price tag, held by a smiling Taiwanese influencer, background is trash can, Taiwan realistic style.",
        "heavy": "A bottle of water under microscope showing tiny tracking devices floating in it, Taiwan realistic style."
    },
    "37": {
        "light": "Massive traffic jam in Taipei caused by a political rally stage blocking the road, angry scooter drivers, Taiwan realistic style.",
        "heavy": "A political rally in Taiwan with laser lights hitting the crowd's eyes, the crowd looking zombified, Taiwan realistic style."
    },
    "38": {
        "light": "A cute stray dog looking sad in a cage, a snake slithering nearby, realistic Taiwan rural scene.",
        "heavy": "A pack of stray dogs with glowing eyes guarding a Taiwanese temple, a spectral dragon hovering above, Taiwan realistic style."
    },
    "39": {
        "light": "An old street (Old Street) in Taiwan engulfed in flames at night, construction sign visible, Taiwan realistic style.",
        "heavy": "Firefighters fighting a fire at an old Taiwanese house, a golden map floating in the flames, Taiwan realistic style."
    },
    "40": {
        "light": "A Gogoro battery station smoking, fire extinguishers nearby, angry riders, realistic Taiwan street style.",
        "heavy": "A battery station opening up to reveal a missile silo underneath, smoke rising, Taiwan realistic style."
    },
    "41": {
        "light": "A Taiwanese pharmacy shelf completely empty, elderly person looking confused holding prescription, Taiwan realistic style.",
        "heavy": "A secret government warehouse in Taiwan filled with boxes of medicine, guarded by armed soldiers, text '僅供出口' on boxes, Taiwan realistic style."
    },
    "42": {
        "light": "A stack of 'Social Housing Application' forms in a trash can, background is a luxury apartment building, Taiwan realistic style.",
        "heavy": "Inside a social housing apartment in Taipei, a hidden camera lens in the wall, screen showing resident's room, Taiwan realistic style."
    },
    "43": {
        "light": "A Taiwanese university diploma being thrown into trash, background is a protest banner in Traditional Chinese, Taiwan realistic style.",
        "heavy": "A university campus in Taiwan at night, glowing green radiation coming from basement, Taiwan realistic style."
    },
    "44": {
        "light": "A pile of Taiwan ID cards on a table, hacker in hoodie typing on laptop in background, Taiwan realistic style.",
        "heavy": "A digital ID card projecting a hologram of a brain, wires connecting to a person's head, Taiwan realistic style."
    },
    "45": {
        "light": "A server room with a spilled cup of Taiwanese instant noodles on rack, sparks flying, Taiwan realistic style.",
        "heavy": "A game character stepping out of a screen into the real world in a Taipei internet cafe, Taiwan realistic style."
    },
    "46": {
        "light": "A luxury car parked in front of a Taiwan courthouse, judge shaking hands with a criminal, Taiwan realistic style.",
        "heavy": "A fraud center office with Taiwan flag on wall, officials counting money, Taiwan realistic style."
    },
    "47": {
        "light": "A room in a Taiwanese home filled with white fog from insecticide, furniture covered in plastic, Taiwan realistic style.",
        "heavy": "A giant mosquito with glowing red eyes, biohazard symbol on wing, Taiwan realistic style."
    },
    "48": {
        "light": "A Taiwan street covered in firecracker debris and trash after a temple procession, resident looking angry, Taiwan realistic style.",
        "heavy": "A religious procession in Taiwan walking over a glowing magic circle, giant monster eye visible underground, Taiwan realistic style."
    },
    "49": {
        "light": "A school lunch tray in Taiwan with unappealing food, principal counting money in background, realistic style.",
        "heavy": "A figure in a Taiwanese classroom floating slightly off the ground, glowing eyes, Taiwan realistic style."
    },
    "50": {
        "light": "Group of foreign engineers looking at blueprint, Taiwanese engineer looking worried, realistic factory style.",
        "heavy": "Foreign engineers taking off human masks to reveal alien faces, standing next to high-tech machine in Taiwan, Taiwan realistic style."
    },
    "51": {
        "light": "Taiwan government budget document with text '年終獎金' crossed out, sad civil servant background, Taiwan realistic style.",
        "heavy": "Handshake between politician and shadowy figure, money changing hands, background pile of rusty metal, Taiwan realistic style."
    },
    "52": {
        "light": "Taiwanese payslip with new deduction line text '國防稅' in Traditional Chinese, Taiwan realistic style.",
        "heavy": "Map of Taiwan burning, American flags in background, Taiwan realistic style."
    },
    "53": {
        "light": "Smartphone showing text '無訊號' in Taipei, confused person looking at map, Taiwan realistic style.",
        "heavy": "Military trucks entering Taipei city at night, soldiers with foreign flags, Taiwan realistic style."
    },
    "54": {
        "light": "A 5G tower in Taiwan with radar dish attached, sparks flying, Taiwan realistic style.",
        "heavy": "Surveillance room with screens showing Taiwanese citizens' faces, CIA logo on wall, Taiwan realistic style."
    },
    "55": {
        "light": "Two politicians fighting in Taiwan parliament (Legislative Yuan), bento box flying, Taiwan realistic style.",
        "heavy": "Secret meeting in smoke-filled room in Taipei, politicians laughing counting money, Taiwan realistic style."
    },
    "56": {
        "light": "A young man in Taiwan alternative service uniform looking at documents, looking tired, Taiwan realistic style.",
        "heavy": "Taiwanese soldiers in winter gear standing in a trench, serious expression, Taiwan realistic style."
    },
    "57": {
        "light": "A soldier taking battery out of civilian electric scooter in Taiwan, owner looking angry, realistic style.",
        "heavy": "A school classroom in Taiwan filled with military crates and helmets instead of books, Taiwan realistic style."
    },
    "58": {
        "light": "A fish market in Taiwan with empty stalls, fighter jet flying low overhead, Taiwan realistic style.",
        "heavy": "Secret handshake between Taiwan official and Traditional Chinese official, background voting booth, Taiwan realistic style."
    },
    "59": {
        "light": "Street food stall selling Stinky Tofu with 'Closed' sign, sad customer, realistic Taiwan night market style.",
        "heavy": "Document stamped text '祕密協議' showing radioactive symbols and pig icons, Taiwan realistic style."
    },
    "60": {
        "light": "Receipt for new Taiwan ID card showing high fee, Taiwan realistic style.",
        "heavy": "Computer screen showing map of Taiwan with red dots tracking citizens, Taiwan realistic style."
    },
    "61": {
        "light": "A washing machine running at night in a Taiwanese balcony with iron bars, clock showing 2 AM, Taiwan realistic style.",
        "heavy": "A wind turbine burning, black smoke rising, politician counting money foreground, Taiwan realistic style."
    },
    "62": {
        "light": "TSMC factory in Taiwan looking empty and abandoned, tumbleweeds, realistic style.",
        "heavy": "Giant cargo plane loading an entire TSMC factory building, flying towards US flag, Taiwan realistic style."
    },
    "63": {
        "light": "Dry riverbed in Southern Taiwan, new high-tech factory in background, Taiwan realistic style.",
        "heavy": "Factory with radiation warning sign, glowing green smoke, Taiwan realistic style."
    },
    "64": {
        "light": "US Green Card on table, plane ticket from Taipei to New York, Taiwan realistic style.",
        "heavy": "Crowd of people in suits running towards plane in Taipei airport, explosions in background, Taiwan realistic style."
    },
    "65": {
        "light": "Taiwanese bento box with price tag NT$200, worker looking shocked, Taiwan realistic style.",
        "heavy": "Western Union receipt showing large transfer, local Taiwanese worker with empty pockets, Taiwan realistic style."
    },
    "66": {
        "light": "Bank rejection letter, sad Taiwanese person holding wedding ring box, Taiwan realistic style.",
        "heavy": "Bank vault opening to reveal foreclosed house keys, banker laughing, Taiwan realistic style."
    },
    "67": {
        "light": "Stock chart going up, robot mascot giving thumbs up, Taiwan realistic style.",
        "heavy": "Stock market crash screen red numbers, tank rolling down Taipei street in reflection, Taiwan realistic style."
    },
    "68": {
        "light": "AC remote set to 25 degrees, red warning light on AC unit, realistic Taiwan home style.",
        "heavy": "Map of Taiwan with north dark and south bright, politician flipping switch, Taiwan realistic style."
    },
    "69": {
        "light": "Family having BBQ in Taiwan, man in suit standing next to them holding calculator, Taiwan realistic style.",
        "heavy": "Forest being cut down in Taiwan mountains, sign text '碳權農場', rich man smiling, Taiwan realistic style."
    },
    "70": {
        "light": "Street food stall in Kenting with price list in Yen, gangster collecting money, Taiwan realistic style.",
        "heavy": "Airport departure board showing all flights Full, deserted Taiwanese beach, Taiwan realistic style."
    },
    "71": {
        "light": "Fried egg with dark orange yolk, Taiwanese person looking suspicious, Taiwan realistic style.",
        "heavy": "Warehouse full of eggs with text '過期' stamps, government official changing labels, Taiwan investigative journalism style."
    },
    "72": {
        "light": "Piece of pork meat turning black, fly buzzing, realistic Taiwan market style.",
        "heavy": "Pig farm with American flags, pigs looking sick, text '祕密進口' crate, Taiwan realistic style."
    },
    "73": {
        "light": "Bag of Japanese snacks glowing green in dark, Taiwan realistic style.",
        "heavy": "Handshake between two officials, holding bag of radioactive waste, Taiwan realistic style."
    },
    "74": {
        "light": "Bottle of garlic water and mosquito net, realistic Taiwan home style.",
        "heavy": "Laboratory with test tubes labeled text '登革熱武器', map of Southern Taiwan."
    },
    "75": {
        "light": "Two vaccine syringes crossed like skull and crossbones, Taiwan realistic style.",
        "heavy": "Microchip on finger tip, syringe in background, Taiwan realistic style."
    },
    "76": {
        "light": "Doctor holding scalpel and open hand asking for money, realistic Taiwan hospital style.",
        "heavy": "Pill bottle filled with white flour, elderly person looking sad, Taiwan realistic style."
    },
    "77": {
        "light": "Cup of bubble tea with skull floating in it, Taiwan realistic style.",
        "heavy": "Factory vat labeled text '化學糖', worker in hazmat suit, Taiwan realistic style."
    },
    "78": {
        "light": "Pharmacy warehouse full of boxes, sign text '僅供出口', Taiwan realistic style.",
        "heavy": "Plane being loaded with medicine boxes, Taiwanese patient waiting in empty hospital room, Taiwan realistic style."
    },
    "79": {
        "light": "Person holding unlit cigarette on Taipei street, police officer writing ticket, Taiwan realistic style.",
        "heavy": "Person taking photo of smoker, money symbols floating around phone, Taiwan realistic style."
    },
    "80": {
        "light": "Food delivery app showing high fee, shocked face, realistic Taiwan lifestyle.",
        "heavy": "Server room with Traditional Chinese flags, screens showing food orders and personal data, Taiwan realistic style."
    },
    "81": {
        "light": "Phone screen showing incoming call from text '未知來電', warning sign, Taiwan realistic style.",
        "heavy": "Government office with sign text '詐騙防治中心', officials making phone calls, Taiwan realistic style."
    },
    "82": {
        "light": "Phone screen showing LINE group invite, virus icon popping up, Taiwan realistic style.",
        "heavy": "Politician sitting on throne of cash, holding phone with LINE open, political cartoon, Taiwan realistic style."
    },
    "83": {
        "light": "Car stopped far from crosswalk, pedestrian walking slowly, realistic Taiwan traffic style.",
        "heavy": "Police officer holding stack of tickets, smiling, 'Bonus' chart background, Taiwan realistic style."
    },
    "84": {
        "light": "Speed camera zooming in on driver, realistic Taiwan highway style.",
        "heavy": "Speed camera with Traditional Chinese flag sticker, transmitting data to server, Taiwan realistic style."
    },
    "85": {
        "light": "Stack of TPASS cards, sign text '即將漲價', Taiwan realistic style.",
        "heavy": "Map of Taipei with red lines tracking movement, TPASS card in corner."
    },
    "86": {
        "light": "Bitcoin coin with tax form, sad Taiwanese investor, realistic style.",
        "heavy": "Washing machine washing money, politician's face on money, Taiwan realistic style."
    },
    "87": {
        "light": "Gas car parked in EV spot, sparks from nearby EV battery, realistic Taiwan parking lot.",
        "heavy": "Stock chart for Tesla going up, government official buying stocks on phone, Taiwan realistic style."
    },
    "88": {
        "light": "Microwave oven sparking, Starlink dish outside window, realistic Taiwan home style.",
        "heavy": "Starlink satellite turning red pointing laser at Taiwan, sci-fi style."
    },
    "89": {
        "light": "Teacher holding confiscated phone, Taiwanese student looking down sadly, realistic style.",
        "heavy": "Person watching short video on phone, eyes reflecting swirling hypnotic patterns, Taiwan surreal horror style."
    },
    "90": {
        "light": "5G tower with birds flying away in panic, grey sky in Taiwan, realistic style.",
        "heavy": "A 5G tower with a syringe icon projected on it, dark sky, Taiwan realistic style."
    },
    "91": {
        "light": "A Taiwanese university degree certificate with Traditional Chinese text fading away like dust, realistic style.",
        "heavy": "A Taiwanese university campus being bulldozed, text '已售出' sign in Traditional Chinese foreground, realistic style."
    },
    "92": {
        "light": "A Taipei MRT train shaking violently, cracks appearing on tunnel ceiling, disaster movie style.",
        "heavy": "Ticket scalper in Taiwan shaking hands with concert organizer, exchanging tickets for cash, realistic style."
    },
    "93": {
        "light": "Young person buying game points at a Taiwanese convenience store counter (7-Eleven), holding phone, realistic style.",
        "heavy": "Book with government propaganda cover, student reading it with blank stare, dystopian Taipei style."
    },
    "94": {
        "light": "Teacher resting head on desk, students chatting in a typical Taiwanese classroom, realistic style.",
        "heavy": "Strict teacher standing in front of class in Taiwan, vintage propaganda poster style, red and black color scheme."
    },
    "95": {
        "light": "Young person standing next to empty priority seat in Taipei MRT, looking nervous, realistic style.",
        "heavy": "Boxing ring with two silhouettes facing each other, politician watching, Taiwan realistic style."
    },
    "96": {
        "light": "Plate of Taiwanese Luwei (braised food) with high bill, shocked tourist, realistic night market style.",
        "heavy": "Taiwanese street market stall with gangster tattoo visible on owner's arm, police looking away, realistic style."
    },
    "97": {
        "light": "Couple arguing in front of Christmas tree in New Taipei City (Christmasland), text '分手' sign, realistic style.",
        "heavy": "Laser show with intense beams of light, person shielding face with hands, dramatic lighting, Taiwan realistic style."
    },
    "98": {
        "light": "Bowl of soup with mountain of sugar, chef smiling, realistic Tainan food style.",
        "heavy": "Flooded street in Tainan, floating money bills, realistic style."
    },
    "99": {
        "light": "Fans wearing construction helmets in a Taiwanese baseball stadium, looking up at ceiling, realistic style.",
        "heavy": "Taiwanese stadium with empty seats, text '售完' sign, scalper holding tickets."
    },
    "100": {
        "light": "Abstract art piece looking like trash, hipster nodding, realistic Taipei Fine Arts Museum style.",
        "heavy": "Government contract document with text '得標：自己人' in Traditional Chinese, Taiwan realistic style."
    }
};
