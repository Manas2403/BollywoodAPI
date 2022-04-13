const dialogues = [
  {
    id: 1,
    dialogue: "Kitne aadmi the",
    movie: "Sholay",
    year: 1975,
  },
  {
    id: 2,
    dialogue:
      "Kaun kambakht bardaasht karne ko peeta hai?Main toh peeta hoon ke bas saans le saku",
    movie: "Devdas",
    year: 1955,
  },
  {
    id: 3,
    dialogue:
      "Aaj mere pass gaadi hai,bungla hai,paisa hai..tumhare paas kya hai?",
    movie: "Deewar",
    year: 1975,
  },
  {
    id: 4,
    dialogue: "Prem naam hai mera,Prem Chopra",
    movie: "Bobby",
    year: 1973,
  },
  {
    id: 5,
    dialogue: "Kutte,kameene,main tera khoon pee jaoonga",
    movie: "Yaadon Ki Baaraat",
    year: 1973,
  },
  {
    id: 6,
    dialogue:
      "I can talk English,I can run English..because English is a very phunny language",
    movie: "Namak Halal",
    year: 1982,
  },
  {
    id: 7,
    dialogue: "Rishte mein to hum tumhare baap lagte hain,namm hai Shahenshah",
    movie: "Shahenshah",
    year: 1988,
  },
  {
    id: 8,
    dialogue: "Bade bade shehron mein aisi chhoti baatein hoti rehti hain",
    movie: "Dilwale Dulhaniya Le Jayenge",
    year: 1995,
  },
  {
    id: 9,
    dialogue: "Ye Hath humko De De Thakur",
    movie: "Sholay",
    year: 1975,
  },
  {
    id: 10,
    dialogue: "Pushpa,I hate tears..inhe ponch dalo",
    movie: "Amar Prem",
    year: 1971,
  },
  {
    id: 11,
    dialogue:
      "Jinke ghar sheeshe ke hote hain,woh batti bujha ke kapde badalte hain",
    movie: "Souten",
    year: 1983,
  },
  {
    id: 12,
    dialogue: "Naam Vijay Deenanath Chauhan,Baap ka naam Deenanath Chauhan",
    movie: "Agneepath",
    year: 1990,
  },
  {
    id: 13,
    dialogue:
      "Hum sab rangmanch ki kathputliyan hain jinki dor uparwale ki ungliyon se bandi hui hai.Kab kaun uthega koi nahin bata sakta",
    movie: "Anand",
    year: 1970,
  },
  {
    id: 14,
    dialogue: "Mogambo khush hua",
    movie: "Mr.India",
    year: 1987,
  },
  {
    id: 15,
    dialogue: "Phool toh murjha jaate hain,lekin kaante daman thham lete hain",
    movie: "Mughal-e-Azam",
    year: 1960,
  },
  {
    id: 16,
    dialogue: "Hum jaha pe khade ho jaate hein,line wahi se shuru hoti hai",
    movie: "Kaalia",
    year: 1981,
  },
  {
    id: 17,
    dialogue: "Mere paas...mere paas maa hai",
    movie: "Deewar",
    year: 1975,
  },
  {
    id: 18,
    dialogue: "Mein pehle ek aurat hoon",
    movie: "Mother India",
    year: 1957,
  },
  {
    id: 19,
    dialogue: "Basanti! In Kutto ke samne mat nachna",
    movie: "Sholay",
    year: 1975,
  },
  {
    id: 20,
    dialogue: "Gehne tudvao,gehne banvao,aur koriyaan khelo..so aarma se",
    movie: "Sahib,Biwi aur Ghulam",
    year: 1962,
  },
  {
    id: 21,
    dialogue:
      "Jali ko aag kehte hain, bhuji ko raakh kehte hain, jis raakh se barood bane usey Vishwanath kehte hain",
    movie: "Vishwanath",
    year: 1978,
  },
  {
    id: 22,
    dialogue: "jinke ghar shishe ke ho,woh dusro pe patthar nahi pheka kar te",
    movie: "Waqt",
    year: 1965,
  },
  {
    id: 23,
    dialogue:
      "Anarkali,Salim ki mohabbat tumhe marne nahin degi aur hum tumhe jeene nahin denge",
    movie: "Mughal-e-Azam",
    year: 1960,
  },
  {
    id: 24,
    dialogue: "Aaj khush to bahut hoge tum",
    movie: "Deewar",
    year: 1975,
  },
  {
    id: 25,
    dialogue:
      "Tum jis school mein padhte ho hum uske headmaster reah chuke hain",
    movie: "Haath Ki Safai",
    year: 1974,
  },
  {
    id: 26,
    dialogue:
      "Police ne tumhe charon taraf se gher liya hain...apne aap ko kannon ke haawale kar do",
    movie: "Don",
    year: 1978,
  },
  {
    id: 27,
    dialogue:
      "Na talwaar ki dhaar na goliyon ki bauchaar se..Banda darta hai to sirf parvardigaar se",
    movie: "Tirangaa",
    year: 1993,
  },
  {
    id: 28,
    dialogue:
      "Kahin na kahin, koi na koi mere liye banaya gaya hai … aur kabhi na kabhi main usse zaroor milongi",
    movie: "Dil To Pagal Hai",
    year: 1997,
  },
  {
    id: 29,
    dialogue:
      "tni shiddat se maine tumhe paane ki koshish ki hai … ki har zarre ne mujhe tumse milane ki saazish ki hai",
    movie: "Om Shanti Om",
    year: 2007,
  },
  {
    id: 30,
    dialogue:
      "Kabhi kabhi kuch jeetne ke liye kuch harna bhi padta hai, aur haar kar jeetnay wale ko baazigar kehte hain",
    movie: "Baazigar",
    year: 1993,
  },
  {
    id: 31,
    dialogue:
      "Ye dhai kilo ka hath jab kisi pe padta hai na, to aadmi uthta nahi uth jata hai",
    movie: "Damini",
    year: 1993,
  },
  {
    id: 32,
    dialogue:
      "Koi pyaar kare toh tumse kare, tum jaise ho waise kare… Koi tumko badal kar pyaar kare toh woh pyaar nahin, sauda hai",
    movie: "Bobby",
    year: 1973,
  },
  {
    id: 33,
    dialogue:
      "Aapke paon dekhe, bahut haseen hai. Inhe zameen par mat utariyega, maile ho jayenge",
    movie: "Pakeezah",
    year: 1972,
  },
  {
    id: 34,
    dialogue:
      "Bachcha kabil bano, kabil … kamyabi to sali jhak maar ke peeche bhagegi",
    movie: "3 Idiots",
    year: 2009,
  },
  {
    id: 35,
    dialogue:
      "Jo main bolta hu wo main karta hoon, jo mani nahi bolta wo main definitely karta hu",
    movie: "Rowdy Rathore",
    year: 2012,
  },
  {
    id: 36,
    dialogue:
      "Ek baar jo maine commitment kar di, fir main apne aap ki bhi nahi sunta",
    movie: "Wanted",
    year: 2009,
  },
  {
    id: 37,
    dialogue: "Apna toh ussool hai … pehle laat, phir baat, uske baad mulaqat",
    movie: "Tiranga",
    year: 1993,
  },
  {
    id: 38,
    dialogue: "Is duniya mein sabse bada yodha maa hoti hai",
    movie: "KGF Chapter 1",
    year: 2018,
  },
  {
    id: 39,
    dialogue: "Devil aap ke piche, app devil ke piche, too much fun",
    movie: "Kick",
    year: 2014,
  },
  {
    id: 40,
    dialogue: "Thappad Se Darr Nahi Lagta Sahab Pyar Se Lagta Hai",
    movie: "Dabangg",
    year: 2010,
  },
  {
    id: 41,
    dialogue:
      "Yeh sher boodha zaroor ho gaya hai...lekin shikaar karna nahi bhoola",
    movie: "Bharat",
    year: 2019,
  },
  {
    id: 42,
    dialogue:
      "Agar tere sar par bomb laga doon toh pehle kaun phatega, tu ya tera sar?",
    movie: "Kaante",
    year: 2002,
  },
  {
    id: 43,
    dialogue:
      "aareekh pe taareekh milti rahi hai lekin insaaf nahin milta. Milte hai to sirf taareekh",
    movie: "Damini",
    year: 1993,
  },
  {
    id: 44,
    dialogue:
      "Don ka intezaar toh baarah mulko ki Police kar rahi hai, magar Don ko pakadna mushkil hi nahin Namumkin hai",
    movie: "Don",
    year: 1978,
  },
  {
    id: 45,
    dialogue:
      "Zindagi mein teen cheezon ke peechey kabhi nahin bhagna chahiye…bus, train aur chhokri",
    movie: "Ishq",
    year: 1997,
  },
  {
    id: 46,
    dialogue: "Hum angrezon ke zamaane ke jailor hain",
    movie: "Sholay",
    year: 1975,
  },
  {
    id: 47,
    dialogue:
      "Jab yeh dhai kilo ka haath kisi pe padta hai na … toh aadmi uthta nahi … utth jata hai",
    movie: "Damini",
    year: 1993,
  },
  {
    id: 48,
    dialogue:
      "Pyar dosti hai … agar woh meri sab se achchi dost nahin ban sakti, to main usse kabhi pyar kar hi nahi sakta … kyun ki dosti bina toh pyar hota hi nahin … simple, pyar dosti hai",
    movie: "Kuch Kuch Hota Hai",
    year: 1998,
  },
  {
    id: 49,
    dialogue:
      "Babu ji ne kaha gaon chhod do, aap ne kaha ghar chhod do, sab ne kaha paro ko chhod do, paro nai kaha sharab chhod do, Aur ek din ayega, woh kahenge yah duniya hi chhod do",
    movie: "Devdas",
    year: 2002,
  },
  {
    id: 50,
    dialogue: "Aap Purush hi nahi…maha purush hain, Maha Purush",
    movie: "Andaz Apna Apna",
    year: 1994,
  },
  {
    id: 51,
    dialogue:
      "Har ishq ka ek waqt hota hai...woh hamara waqt nahi tha...par iska yeh matlab nahi woh ishq nahi tha",
    movie: "Jab Tak Hai Jaan",
    year: 2012,
  },
  {
    id: 52,
    dialogue: "Log apni zindagi banate hai … main apni jannat banata hoon",
    movie: "Jannat 2",
    year: 2008,
  },
  {
    id: 53,
    dialogue:
      "Mohabbat bhi zindagi ki tarah hoti hai … har mod aasaan nahi hota, har mod par khushi nahi hoti … par jab hum zindagi ka saath nahi chhodte … phir mohabbat ka saath kyun chhodein",
    movie: "Mohabbatien",
    year: 2000,
  },
  {
    id: 54,
    dialogue:
      "Tum kabhi jeet nahin paye … kyunki tum hamesha mujhe harane ki soochte the … aur main kabhi hara nahin … kyunki main hamesha jeetne ki soochta tha",
    movie: "Race",
    year: 2008,
  },
  {
    id: 55,
    dialogue:
      "Jitne Safed Baal Mere Sar Aur Dhaadi Mein Hain, Usse Kahin Zyada Rangeen Meri Zindagi Rahi Hain",
    movie: "Bharat",
    year: 2019,
  },
  {
    id: 56,
    dialogue: "Chal Dhano! Aaj teri Basanti ki izzhat ka saawal hai",
    movie: "Sholay",
    year: 1975,
  },
  {
    id: 57,
    dialogue:
      "Kabhi kabhi jeetne ke liye kuch haarna bhi padta hai … aur haar kar jeetne waale ko baazigar kehte hai",
    movie: "Baazigar",
    year: 1993,
  },
  {
    id: 58,
    dialogue:
      "Main apni favourite hoon”… chulbuli delightful and full of life punjaban kudi",
    movie: "Jab We Met",
    year: 2007,
  },
  {
    id: 59,
    dialogue:
      "Apni kamyabi ko itna chota mat samjho … sirf naseeb waalo ko naseeb hoti hai yeh",
    movie: "Aashiqui 2",
    year: 2013,
  },
  {
    id: 60,
    dialogue: "Sara shehar mujhe lion ke naam se jaanta hai",
    movie: "Kalicharan",
    year: 1976,
  },
  {
    id: 61,
    dialogue: "Namaaz mein woh thi … par laga dua hamari manzoor ho gayi",
    movie: "Raanjhanaa",
    year: 2013,
  },
  {
    id: 62,
    dialogue:
      "Joh main bolta hoon woh main karta hoon … joh main nahi bolta woh main definitely karta hoon..",
    movie: "Rowdy Rathore",
    year: 2012,
  },
  {
    id: 63,
    dialogue: "All is well…All is well",
    movie: "3 Idiots",
    year: 2009,
  },
  {
    id: 64,
    dialogue: "Picture abhi baaki hain mere dost",
    movie: "Om Shanti Om",
    year: 2007,
  },
  {
    id: 65,
    dialogue: "Babu Moshai Zindagi badi honi chahiye lambi nahi",
    movie: "Anand",
    year: 1971,
  },
  {
    id: 66,
    dialogue:
      "Mere Karan Arjun Aayenge. Zameen Ki Chaati Phad Ke Aayenge, Aasman Ka Seena Cheer Ke Aayenge",
    movie: "Karan Arjun",
    year: 1995,
  },
  {
    id: 67,
    dialogue: "Gold toh gold hota hai … chhora lave ya chhori",
    movie: "Dangal",
    year: 2016,
  },
  {
    id: 68,
    dialogue: "Ek machhar sala aadmi ko hijda bana deta hai!",
    movie: "Yeshwant",
    year: 1997,
  },
  {
    id: 69,
    dialogue:
      "Hum tum mein itne ched karenge … ki confuse ho jaoge ki saans kahan se le…",
    movie: "Dabangg",
    year: 2010,
  },
  {
    id: 70,
    dialogue: "Ek chutki sindoor ki keemat tum kya jaano Ramesh Babu",
    movie: "Om Shanti Om",
    year: 2007,
  },
  {
    id: 71,
    dialogue:
      "Koi dhanda chota nahi hota aur dhande se bada koi dharm nahi hota",
    movie: "Raees",
    year: 2017,
  },
  {
    id: 72,
    dialogue: "My name is Khan and I am not a terrorist",
    movie: "My Name is Khan",
    year: 2010,
  },
  {
    id: 73,
    dialogue: "Kahin par pahunchne ke liye kahin se nikalna zaroori hai",
    movie: "Yeh Jawaani Hai Deewani",
    year: 2013,
  },
  {
    id: 74,
    dialogue:
      "Aadmi tabhi bada banta hai jab bade log usse milne ka intezaar kare",
    movie: "Once Upon a Time in Mumbaai",
    year: 2010,
  },
  {
    id: 75,
    dialogue: "Uska toh na bad luck hi kharab hai",
    movie: "Rangeela",
    year: 1995,
  },
  {
    id: 76,
    dialogue:
      "Mere ko yeh golf khelna nahi aata..Yeh ghode ki race bhi nahi khelta..Lekin apne dhande ka mazbood khiladi hoon main",
    movie: "Guru",
    year: 2007,
  },
  {
    id: 77,
    dialogue: "Tumse naa ho payega",
    movie: "Gangs Of Wasseypur",
    year: 2012,
  },
  {
    id: 78,
    dialogue: "Tension lene ka nahin,sirf dene ka..",
    movie: "Munna Bhai M.B.B.S.",
    year: 2003,
  },
  {
    id: 79,
    dialogue:
      "Filmein sirf teen cheezo ke wajah se chalti hai…entertainment, entertainment, entertainment…aur main entertainment hoon",
    movie: "The Dirty Picture",
    year: 2011,
  },
  {
    id: 80,
    dialogue: "Tu mujhe nahin maar sakti,tu meri maa hai",
    movie: "Mother India",
    year: 1957,
  },
  {
    id: 81,
    dialogue: "Dosti ka ek usool hai, Madam – no sorry, no thank you",
    movie: "Maine Pyar Kiya",
    year: 1989,
  },
  {
    id: 82,
    dialogue: "Holi kab hai,kab hai holi",
    movie: "Sholay",
    year: 1975,
  },
  {
    id: 83,
    dialogue: "Hum jahan khade ho jate hai line wahi se shuru hoti hai",
    movie: "Kaalia",
    year: 1981,
  },
  {
    id: 84,
    dialogue: "Roye toh yaar ke kandhe par … jaaye toh yaar ke kandhe par",
    movie: "Sangam",
    year: 1964,
  },
  {
    id: 85,
    dialogue: "Main beta de sakti hoon, laaj nahi de sakti",
    movie: "Mother India",
    year: 1957,
  },
  {
    id: 86,
    dialogue: "Main aaj bhi pheke hue paise nahin uthata",
    movie: "Deewaar",
    year: 1975,
  },
  {
    id: 87,
    dialogue:
      "ab tak baithne ko na kaha jaye sharafat se khade raho. Yeh police station hain tumhare baap ka ghar nahi",
    movie: "Zanjeer",
    year: 1973,
  },
  {
    id: 88,
    dialogue:
      "Na talwaar ki dhaar se na goliyon ki bauchaar se… Banda darta hai to sirf parvardigaar se",
    movie: "Tiranga",
    year: 1993,
  },
  {
    id: 89,
    dialogue:
      "Main bhi purana cheedie maar hoon, par katarne achchi tarah se jaanta hoon",
    movie: "Sheesh Mahal",
    year: 1950,
  },
  {
    id: 90,
    dialogue: "Agneepath. Agneepath. Agneepath",
    movie: "Agneepath",
    year: 1990,
  },
  {
    id: 91,
    dialogue: "Aa gaye meri maut ka tamasha dekhne",
    movie: "Krantiveer",
    year: 1994,
  },
  {
    id: 92,
    dialogue: "Agar apni maa ka doodh piya hai to saamne aa",
    movie: "Laawaris",
    year: 1981,
  },
  {
    id: 93,
    dialogue: "Raasta dikhana sehej hai, par raaste par chalna bahut kathin",
    movie: "Mother India",
    year: 1957,
  },
  {
    id: 94,
    dialogue:
      "Utaar ke phenk do ye wardi aur pehan lo Balwant Rai ka patta apne gale mein … Balwant Rai ke kutton!",
    movie: "Ghayal",
    year: 1990,
  },
  {
    id: 95,
    dialogue: "Jo mard hota hain use dard nahin hota, memsahab",
    movie: "Mard",
    year: 1985,
  },
  {
    id: 96,
    dialogue:
      "Aisa to aadmi life mein doich time bhaagta hai. Olympic ka race ho, yaa Police ka case ho. Tum kisliye bhaagta hai bhai?",
    movie: "Amar Akbar Anthony",
    year: 1977,
  },
  {
    id: 97,
    dialogue:
      "Crime master Gogo naam hai mera … aankhen nikaal kar gotiyaan khelta hoon main, gotiyaan",
    movie: "Andaz Apna Apna",
    year: 1994,
  },
  {
    id: 98,
    dialogue:
      "Woh toh main kha gaya … woh main mast tel me fry karke woh main kha gaya … cha mai la!",
    movie: "Hera Pheri",
    year: 2000,
  },
  {
    id: 99,
    dialogue:
      "Main tumhe bhool jaaon yeh ho nahin sakta, aur tum mujhe bhool jao ye main hone nahi doonga",
    movie: "Dhadkan",
    year: 2000,
  },
  {
    id: 100,
    dialogue: "Jahpanaah tussi great ho, tohfa kabool karo",
    movie: "3 Idiots",
    year: 2009,
  },
];
module.exports = dialogues;
