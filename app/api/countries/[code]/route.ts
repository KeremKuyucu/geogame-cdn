import { type NextRequest, NextResponse } from "next/server"

// Kullanıcının sağladığı ülke verileri
const countriesData = [
  {
    "name": {
      "common": "Moldova",
      "official": "Republic of Moldova",
      "nativeName": {
        "ron": {
          "official": "Republica Moldova",
          "common": "Moldova"
        }
      }
    },
    "tld": [".md"],
    "cca2": "MD",
    "ccn3": "498",
    "cca3": "MDA",
    "cioc": "MDA",
    "independent": true,
    "status": "officially-assigned",
    "unMember": true,
    "currencies": {
      "MDL": {
        "name": "Moldovan leu",
        "symbol": "L"
      }
    },
    "idd": {
      "root": "+3",
      "suffixes": ["73"]
    },
    "capital": ["Chișinău"],
    "altSpellings": ["MD", "Moldova, Republic of", "Republic of Moldova", "Republica Moldova"],
    "region": "Europe",
    "subregion": "Eastern Europe",
    "languages": {
      "ron": "Romanian"
    },
    "translations": {
      "ara": {
        "official": "جمهورية مولدوڤا",
        "common": "مولدوڤا"
      },
      "bre": {
        "official": "Republik Moldova",
        "common": "Moldova"
      },
      "ces": {
        "official": "Moldavská republika",
        "common": "Moldavsko"
      },
      "cym": {
        "official": "Republic of Moldova",
        "common": "Moldova"
      },
      "deu": {
        "official": "Republik Moldau",
        "common": "Moldawien"
      },
      "est": {
        "official": "Moldova Vabariik",
        "common": "Moldova"
      },
      "fin": {
        "official": "Moldovan tasavalta",
        "common": "Moldova"
      },
      "fra": {
        "official": "République de Moldavie",
        "common": "Moldavie"
      },
      "hrv": {
        "official": "Moldavija",
        "common": "Moldova"
      },
      "hun": {
        "official": "Moldovai Köztársaság",
        "common": "Moldova"
      },
      "ita": {
        "official": "Repubblica di Moldova",
        "common": "Moldavia"
      },
      "jpn": {
        "official": "モルドバ共和国",
        "common": "モルドバ共和国"
      },
      "kor": {
        "official": "몰도바 공화국",
        "common": "몰도바"
      },
      "nld": {
        "official": "Republiek Moldavië",
        "common": "Moldavië"
      },
      "per": {
        "official": "جمهوری مولداوی",
        "common": "مولداوی"
      },
      "pol": {
        "official": "Republika Mołdawii",
        "common": "Mołdawia"
      },
      "por": {
        "official": "República da Moldávia",
        "common": "Moldávia"
      },
      "rus": {
        "official": "Молдова",
        "common": "Молдавия"
      },
      "slk": {
        "official": "Moldavská republika",
        "common": "Moldavsko"
      },
      "spa": {
        "official": "República de Moldova",
        "common": "Moldavia"
      },
      "srp": {
        "official": "Република Молдавија",
        "common": "Молдавија"
      },
      "swe": {
        "official": "Republiken Moldavien",
        "common": "Moldavien"
      },
      "tur": {
        "official": "Moldova Cumhuriyeti",
        "common": "Moldova"
      },
      "urd": {
        "official": "جمہوریہ مالدووا",
        "common": "مالدووا"
      },
      "zho": {
        "official": "摩尔多瓦共和国",
        "common": "摩尔多瓦"
      }
    },
    "latlng": [47.0, 29.0],
    "landlocked": true,
    "borders": ["ROU", "UKR"],
    "area": 33846.0,
    "demonyms": {
      "eng": {
        "f": "Moldovan",
        "m": "Moldovan"
      },
      "fra": {
        "f": "Moldave",
        "m": "Moldave"
      }
    },
    "flag": "🇲🇩",
    "maps": {
      "googleMaps": "https://goo.gl/maps/JjmyUuULujnDeFPf7",
      "openStreetMaps": "https://www.openstreetmap.org/relation/58974"
    },
    "population": 2617820,
    "gini": {
      "2018": 25.7
    },
    "fifa": "MDA",
    "car": {
      "signs": ["MD"],
      "side": "right"
    },
    "timezones": ["UTC+02:00"],
    "continents": ["Europe"],
    "flags": {
      "png": "https://flagcdn.com/w320/md.png",
      "svg": "https://flagcdn.com/md.svg",
      "alt": "The flag of Moldova is composed of three equal vertical bands of blue, yellow and red, with the national coat of arms centered in the yellow band."
    },
    "coatOfArms": {
      "png": "https://mainfacts.com/media/images/coats_of_arms/md.png",
      "svg": "https://mainfacts.com/media/images/coats_of_arms/md.svg"
    },
    "startOfWeek": "monday",
    "capitalInfo": {
      "latlng": [47.01, 28.9]
    },
    "postalCode": {
      "format": "MD-####",
      "regex": "^(?:MD)*(\\d{4})$"
    }
  },
  {
    "name": {
      "common": "United States",
      "official": "United States of America",
      "nativeName": {
        "eng": {
          "official": "United States of America",
          "common": "United States"
        }
      }
    },
    "tld": [".us"],
    "cca2": "US",
    "ccn3": "840",
    "cca3": "USA",
    "cioc": "USA",
    "independent": true,
    "status": "officially-assigned",
    "unMember": true,
    "currencies": {
      "USD": {
        "name": "United States dollar",
        "symbol": "$"
      }
    },
    "idd": {
      "root": "+1",
      "suffixes": ["201", "202", "203", "205", "206", "207", "208", "209", "210", "212", "213", "214", "215", "216", "217", "218", "219", "220", "224", "225", "227", "228", "229", "231", "234", "239", "240", "248", "251", "252", "253", "254", "256", "260", "262", "267", "269", "270", "272", "274", "276", "281", "283", "301", "302", "303", "304", "305", "307", "308", "309", "310", "312", "313", "314", "315", "316", "317", "318", "319", "320", "321", "323", "325", "327", "330", "331", "334", "336", "337", "339", "346", "347", "351", "352", "360", "361", "364", "380", "385", "386", "401", "402", "404", "405", "406", "407", "408", "409", "410", "412", "413", "414", "415", "417", "419", "423", "424", "425", "430", "432", "434", "435", "440", "442", "443", "447", "458", "463", "464", "469", "470", "475", "478", "479", "480", "484", "501", "502", "503", "504", "505", "507", "508", "509", "510", "512", "513", "515", "516", "517", "518", "520", "530", "531", "534", "539", "540", "541", "551", "559", "561", "562", "563", "564", "567", "570", "571", "573", "574", "575", "580", "585", "586", "601", "602", "603", "605", "606", "607", "608", "609", "610", "612", "614", "615", "616", "617", "618", "619", "620", "623", "626", "628", "629", "630", "631", "636", "641", "646", "650", "651", "657", "660", "661", "662", "667", "669", "678", "681", "682", "701", "702", "703", "704", "706", "707", "708", "712", "713", "714", "715", "716", "717", "718", "719", "720", "724", "725", "727", "730", "731", "732", "734", "737", "740", "743", "747", "754", "757", "760", "762", "763", "765", "769", "770", "772", "773", "774", "775", "779", "781", "785", "786", "801", "802", "803", "804", "805", "806", "808", "810", "812", "813", "814", "815", "816", "817", "818", "828", "830", "831", "832", "843", "845", "847", "848", "850", "854", "856", "857", "858", "859", "860", "862", "863", "864", "865", "870", "872", "878", "901", "903", "904", "906", "907", "908", "909", "910", "912", "913", "914", "915", "916", "917", "918", "919", "920", "925", "928", "929", "930", "931", "934", "936", "937", "938", "940", "941", "947", "949", "951", "952", "954", "956", "959", "970", "971", "972", "973", "975", "978", "979", "980", "984", "985", "989"]
    },
    "capital": ["Washington, D.C."],
    "altSpellings": ["US", "USA", "United States of America"],
    "region": "Americas",
    "subregion": "North America",
    "languages": {
      "eng": "English"
    },
    "translations": {
      "ara": {
        "official": "الولايات المتحدة الامريكية",
        "common": "الولايات المتحدة"
      },
      "bre": {
        "official": "Stadoù-Unanet Amerika",
        "common": "Stadoù-Unanet"
      },
      "ces": {
        "official": "Spojené státy americké",
        "common": "Spojené státy"
      },
      "cym": {
        "official": "United States of America",
        "common": "United States"
      },
      "deu": {
        "official": "Vereinigte Staaten von Amerika",
        "common": "Vereinigte Staaten"
      },
      "est": {
        "official": "Ameerika Ühendriigid",
        "common": "Ameerika Ühendriigid"
      },
      "fin": {
        "official": "Amerikan yhdysvallat",
        "common": "Yhdysvallat"
      },
      "fra": {
        "official": "Les états-unis d'Amérique",
        "common": "États-Unis"
      },
      "hrv": {
        "official": "Sjedinjene Države Amerike",
        "common": "Sjedinjene Američke Države"
      },
      "hun": {
        "official": "Amerikai Egyesült Államok",
        "common": "Amerikai Egyesült Államok"
      },
      "ita": {
        "official": "Stati Uniti d'America",
        "common": "Stati Uniti d'America"
      },
      "jpn": {
        "official": "アメリカ合衆国",
        "common": "アメリカ合衆国"
      },
      "kor": {
        "official": "아메리카 합중국",
        "common": "미국"
      },
      "nld": {
        "official": "Verenigde Staten van Amerika",
        "common": "Verenigde Staten"
      },
      "per": {
        "official": "ایالات متحده آمریکا",
        "common": "ایالات متحده آمریکا"
      },
      "pol": {
        "official": "Stany Zjednoczone Ameryki",
        "common": "Stany Zjednoczone"
      },
      "por": {
        "official": "Estados Unidos da América",
        "common": "Estados Unidos"
      },
      "rus": {
        "official": "Соединенные Штаты Америки",
        "common": "Соединённые Штаты Америки"
      },
      "slk": {
        "official": "Spojené štáty Americké",
        "common": "Spojené štáty americké"
      },
      "spa": {
        "official": "Estados Unidos de América",
        "common": "Estados Unidos"
      },
      "srp": {
        "official": "Сједињене Америчке Државе",
        "common": "Сједињене Америчке Државе"
      },
      "swe": {
        "official": "Amerikas förenta stater",
        "common": "USA"
      },
      "tur": {
        "official": "Amerika Birleşik Devletleri",
        "common": "Amerika Birleşik Devletleri"
      },
      "urd": {
        "official": "ریاستہائے متحدہ امریکا",
        "common": "ریاستہائے متحدہ"
      },
      "zho": {
        "official": "美利坚合众国",
        "common": "美国"
      }
    },
    "latlng": [38.0, -97.0],
    "landlocked": false,
    "borders": ["CAN", "MEX"],
    "area": 9372610.0,
    "demonyms": {
      "eng": {
        "f": "American",
        "m": "American"
      },
      "fra": {
        "f": "Américaine",
        "m": "Américain"
      }
    },
    "flag": "🇺🇸",
    "maps": {
      "googleMaps": "https://goo.gl/maps/e8M246zY4BSjkjAv6",
      "openStreetMaps": "https://www.openstreetmap.org/relation/148838#map=2/20.6/-85.8"
    },
    "population": 329484123,
    "gini": {
      "2018": 41.4
    },
    "fifa": "USA",
    "car": {
      "signs": ["USA"],
      "side": "right"
    },
    "timezones": ["UTC-12:00", "UTC-11:00", "UTC-10:00", "UTC-09:00", "UTC-08:00", "UTC-07:00", "UTC-06:00", "UTC-05:00", "UTC-04:00", "UTC+10:00", "UTC+12:00"],
    "continents": ["North America"],
    "flags": {
      "png": "https://flagcdn.com/w320/us.png",
      "svg": "https://flagcdn.com/us.svg",
      "alt": "The flag of the United States of America is composed of thirteen equal horizontal bands of red alternating with white. A blue rectangle, bearing fifty small five-pointed white stars arranged in nine rows where rows of six stars alternate with rows of five stars, is superimposed in the canton."
    },
    "coatOfArms": {
      "png": "https://mainfacts.com/media/images/coats_of_arms/us.png",
      "svg": "https://mainfacts.com/media/images/coats_of_arms/us.svg"
    },
    "startOfWeek": "sunday",
    "capitalInfo": {
      "latlng": [38.89, -77.05]
    },
    "postalCode": {
      "format": "#####-####",
      "regex": "^\\d{5}(-\\d{4})?$"
    }
  },
  {
    "name": {
      "common": "Mayotte",
      "official": "Department of Mayotte",
      "nativeName": {
        "fra": {
          "official": "Département de Mayotte",
          "common": "Mayotte"
        }
      }
    },
    "tld": [".yt"],
    "cca2": "YT",
    "ccn3": "175",
    "cca3": "MYT",
    "independent": false,
    "status": "officially-assigned",
    "unMember": false,
    "currencies": {
      "EUR": {
        "name": "Euro",
        "symbol": "€"
      }
    },
    "idd": {
      "root": "+2",
      "suffixes": ["62"]
    },
    "capital": ["Mamoudzou"],
    "altSpellings": ["YT", "Department of Mayotte", "Département de Mayotte"],
    "region": "Africa",
    "subregion": "Eastern Africa",
    "languages": {
      "fra": "French"
    },
    "translations": {
      "ara": {
        "official": "مايوت",
        "common": "مايوت"
      },
      "bre": {
        "official": "Departamant Mayotte",
        "common": "Mayotte"
      },
      "ces": {
        "official": "Mayotte",
        "common": "Mayotte"
      },
      "cym": {
        "official": "Department of Mayotte",
        "common": "Mayotte"
      },
      "deu": {
        "official": "Übersee-Département Mayotte",
        "common": "Mayotte"
      },
      "est": {
        "official": "Mayotte",
        "common": "Mayotte"
      },
      "fin": {
        "official": "Mayotte",
        "common": "Mayotte"
      },
      "fra": {
        "official": "Département de Mayotte",
        "common": "Mayotte"
      },
      "hrv": {
        "official": "Odjel Mayotte",
        "common": "Mayotte"
      },
      "hun": {
        "official": "Mayotte",
        "common": "Mayotte"
      },
      "ita": {
        "official": "Dipartimento di Mayotte",
        "common": "Mayotte"
      },
      "jpn": {
        "official": "マヨット科",
        "common": "マヨ
        "common": "マヨット"
      },
      "kor": {
        "official": "마요트",
        "common": "마요트"
      },
      "nld": {
        "official": "Afdeling Mayotte",
        "common": "Mayotte"
      },
      "per": {
        "official": "مجموعه شهرستانی مایوت",
        "common": "مایوت"
      },
      "pol": {
        "official": "Majotta",
        "common": "Majotta"
      },
      "por": {
        "official": "Departamento de Mayotte",
        "common": "Mayotte"
      },
      "rus": {
        "official": \"Департамент Майотта",
        "common": "Майотта"
      },
      "slk": {
        "official": "Department Mayotte",
        "common": "Mayotte"
      },
      "spa": {
        "official": "Departamento de Mayotte",
        "common": "Mayotte"
      },
      "srp": {
        "official": "Мајот",
        "common": "Мајот"
      },
      "swe": {
        "official": "Departementsområdet Mayotte",
        "common": "Mayotte"
      },
      "tur": {
        "official": "Mayotte",
        "common": "Mayotte"
      },
      "urd": {
        "official": "مایوٹ",
        "common": "مایوٹ"
      },
      "zho": {
        "official": "马约特",
        "common": "马约特"
      }
    },
    "latlng": [-12.83333333, 45.16666666],
    "landlocked": false,
    "area": 374.0,
    "demonyms": {
      "eng": {
        "f": "Mahoran",
        "m": "Mahoran"
      },
      "fra": {
        "f": "Mahoraise",
        "m": "Mahorais"
      }
    },
    "flag": "🇾🇹",
    "maps": {
      "googleMaps": "https://goo.gl/maps/1e7MXmfBwQv3TQGF7",
      "openStreetMaps": "https://www.openstreetmap.org/relation/1259885"
    },
    "population": 226915,
    "car": {
      "signs": ["F"],
      "side": "right"
    },
    "timezones": ["UTC+03:00"],
    "continents": ["Africa"],
    "flags": {
      "png": "https://flagcdn.com/w320/yt.png",
      "svg": "https://flagcdn.com/yt.svg"
    },
    "coatOfArms": {},
    "startOfWeek": "monday",
    "capitalInfo": {
      "latlng": [-12.78, 45.22]
    },
    "postalCode": {
      "format": "#####",
      "regex": "^(\\d{5})$"
    }
  },
  {
    "name": {
      "common": "Nauru",
      "official": "Republic of Nauru",
      "nativeName": {
        "eng": {
          "official": "Republic of Nauru",
          "common": "Nauru"
        },
        "nau": {
          "official": "Republic of Nauru",
          "common": "Nauru"
        }
      }
    },
    "tld": [".nr"],
    "cca2": "NR",
    "ccn3": "520",
    "cca3": "NRU",
    "cioc": "NRU",
    "independent": true,
    "status": "officially-assigned",
    "unMember": true,
    "currencies": {
      "AUD": {
        "name": "Australian dollar",
        "symbol": "$"
      }
    },
    "idd": {
      "root": "+6",
      "suffixes": ["74"]
    },
    "capital": ["Yaren"],
    "altSpellings": ["NR", "Naoero", "Pleasant Island", "Republic of Nauru", "Ripublik Naoero"],
    "region": "Oceania",
    "subregion": "Micronesia",
    "languages": {
      "eng": "English",
      "nau": "Nauru"
    },
    "translations": {
      "ara": {
        "official": "جمهورية ناورو",
        "common": "ناورو"
      },
      "bre": {
        "official": "Republik Nauru",
        "common": "Nauru"
      },
      "ces": {
        "official": "Republika Nauru",
        "common": "Nauru"
      },
      "cym": {
        "official": "Republic of Nauru",
        "common": "Nauru"
      },
      "deu": {
        "official": "Republik Nauru",
        "common": "Nauru"
      },
      "est": {
        "official": "Nauru Vabariik",
        "common": "Nauru"
      },
      "fin": {
        "official": "Naurun tasavalta",
        "common": "Nauru"
      },
      "fra": {
        "official": "République de Nauru",
        "common": "Nauru"
      },
      "hrv": {
        "official": "Republika Nauru",
        "common": "Nauru"
      },
      "hun": {
        "official": "Naurui Köztársaság",
        "common": "Nauru"
      },
      "ita": {
        "official": "Repubblica di Nauru",
        "common": "Nauru"
      },
      "jpn": {
        "official": "ナウル共和国",
        "common": "ナウル"
      },
      "kor": {
        "official": "나우루 공화국",
        "common": "나우루"
      },
      "nld": {
        "official": "Republiek Nauru",
        "common": "Nauru"
      },
      "per": {
        "official": "جمهوری نائورو",
        "common": "نائورو"
      },
      "pol": {
        "official": "Republika Nauru",
        "common": "Nauru"
      },
      "por": {
        "official": "República de Nauru",
        "common": "Nauru"
      },
      "rus": {
        "official": "Республика Науру",
        "common": "Науру"
      },
      "slk": {
        "official": "Naurská republika",
        "common": "Nauru"
      },
      "spa": {
        "official": "República de Nauru",
        "common": "Nauru"
      },
      "srp": {
        "official": "Република Науру",
        "common": "Науру"
      },
      "swe": {
        "official": "Republiken Nauru",
        "common": "Nauru"
      },
      "tur": {
        "official": "Nauru Cumhuriyeti",
        "common": "Nauru"
      },
      "urd": {
        "official": "جمہوریہ ناورو",
        "common": "ناورو"
      },
      "zho": {
        "official": "瑙鲁共和国",
        "common": "瑙鲁"
      }
    },
    "latlng": [-0.53333333, 166.91666666],
    "landlocked": false,
    "area": 21.0,
    "demonyms": {
      "eng": {
        "f": "Nauruan",
        "m": "Nauruan"
      },
      "fra": {
        "f": "Nauruane",
        "m": "Nauruan"
      }
    },
    "flag": "🇳🇷",
    "maps": {
      "googleMaps": "https://goo.gl/maps/kyAGw6XEJgjSMsTK7",
      "openStreetMaps": "https://www.openstreetmap.org/relation/571804"
    },
    "population": 10834,
    "gini": {
      "2012": 34.8
    },
    "car": {
      "signs": ["NAU"],
      "side": "left"
    },
    "timezones": ["UTC+12:00"],
    "continents": ["Oceania"],
    "flags": {
      "png": "https://flagcdn.com/w320/nr.png",
      "svg": "https://flagcdn.com/nr.svg",
      "alt": "The flag of Nauru has a dark blue field with a thin yellow horizontal band across the center and a large white twelve-pointed star beneath the horizontal band on the hoist side of the field."
    },
    "coatOfArms": {
      "png": "https://mainfacts.com/media/images/coats_of_arms/nr.png",
      "svg": "https://mainfacts.com/media/images/coats_of_arms/nr.svg"
    },
    "startOfWeek": "monday",
    "capitalInfo": {
      "latlng": [-0.55, 166.92]
    }
  },
  {
    "name": {
      "common": "Mozambique",
      "official": "Republic of Mozambique",
      "nativeName": {
        "por": {
          "official": "República de Moçambique",
          "common": "Moçambique"
        }
      }
    },
    "tld": [".mz"],
    "cca2": "MZ",
    "ccn3": "508",
    "cca3": "MOZ",
    "cioc": "MOZ",
    "independent": true,
    "status": "officially-assigned",
    "unMember": true,
    "currencies": {
      "MZN": {
        "name": "Mozambican metical",
        "symbol": "MT"
      }
    },
    "idd": {
      "root": "+2",
      "suffixes": ["58"]
    },
    "capital": ["Maputo"],
    "altSpellings": ["MZ", "Republic of Mozambique", "República de Moçambique"],
    "region": "Africa",
    "subregion": "Eastern Africa",
    "languages": {
      "por": "Portuguese"
    },
    "translations": {
      "ara": {
        "official": "جمهورية موزمبيق",
        "common": "موزمبيق"
      },
      "bre": {
        "official": "Republik Mozambik",
        "common": "Mozambik"
      },
      "ces": {
        "official": "Mosambická republika",
        "common": "Mosambik"
      },
      "cym": {
        "official": "Republic of Mozambique",
        "common": "Mozambique"
      },
      "deu": {
        "official": "Republik Mosambik",
        "common": "Mosambik"
      },
      "est": {
        "official": "Mosambiigi Vabariik",
        "common": "Mosambiik"
      },
      "fin": {
        "official": "Mosambikin tasavalta",
        "common": "Mosambik"
      },
      "fra": {
        "official": "République du Mozambique",
        "common": "Mozambique"
      },
      "hrv": {
        "official": "Republika Mozambiku",
        "common": "Mozambik"
      },
      "hun": {
        "official": "Mozambiki Köztársaság",
        "common": "Mozambik"
      },
      "ita": {
        "official": "Repubblica del Mozambico",
        "common": "Mozambico"
      },
      "jpn": {
        "official": "モザンビーク共和国",
        "common": "モザンビーク"
      },
      "kor": {
        "official": "모잠비크 공화국",
        "common": "모잠비크"
      },
      "nld": {
        "official": "Republiek Mozambique",
        "common": "Mozambique"
      },
      "per": {
        "official": "جمهوری موزامبیک",
        "common": "موزامبیک"
      },
      "pol": {
        "official": "Republika Mozambiku",
        "common": "Mozambik"
      },
      "por": {
        "official": "República de Moçambique",
        "common": "Moçambique"
      },
      "rus": {
        "official": "Республика Мозамбик",
        "common": "Мозамбик"
      },
      "slk": {
        "official": "Mozambická republika",
        "common": "Mozambik"
      },
      "spa": {
        "official": "República de Mozambique",
        "common": "Mozambique"
      },
      "srp": {
        "official": "Република Мозамбик",
        "common": "Мозамбик"
      },
      "swe": {
        "official": "Republiken Moçambique",
        "common": "Moçambique"
      },
      "tur": {
        "official": "Mozambik Cumhuriyeti",
        "common": "Mozambik"
      },
      "urd": {
        "official": "جمہوریہ موزمبیق",
        "common": "موزمبیق"
      },
      "zho": {
        "official": "莫桑比克共和国",
        "common": "莫桑比克"
      }
    },
    "latlng": [-18.25, 35.0],
    "landlocked": false,
    "borders": ["MWI", "ZAF", "SWZ", "TZA", "ZMB", "ZWE"],
    "area": 801590.0,
    "demonyms": {
      "eng": {
        "f": "Mozambican",
        "m": "Mozambican"
      },
      "fra": {
        "f": "Mozambicaine",
        "m": "Mozambicain"
      }
    },
    "flag": "🇲🇿",
    "maps": {
      "googleMaps": "https://goo.gl/maps/xCLcY9fzU6x4Pueu5",
      "openStreetMaps": "https://www.openstreetmap.org/relation/195273"
    },
    "population": 31255435,
    "gini": {
      "2014": 54.0
    },
    "fifa": "MOZ",
    "car": {
      "signs": ["MOC"],
      "side": "left"
    },
    "timezones": ["UTC+02:00"],
    "continents": ["Africa"],
    "flags": {
      "png": "https://flagcdn.com/w320/mz.png",
      "svg": "https://flagcdn.com/mz.svg",
      "alt": "The flag of Mozambique is composed of three equal horizontal bands of teal, black with white top and bottom edges, and yellow. A red isosceles triangle spanning about two-fifth the width of the field is superimposed on the hoist side with its base on the hoist end. This triangle bears a crossed rifle and hoe in black superimposed on an open white book which is superimposed on a five-pointed yellow star."
    },
    "coatOfArms": {
      "png": "https://mainfacts.com/media/images/coats_of_arms/mz.png",
      "svg": "https://mainfacts.com/media/images/coats_of_arms/mz.svg"
    },
    "startOfWeek": "monday",
    "capitalInfo": {
      "latlng": [-25.95, 32.58]
    },
    "postalCode": {
      "format": "####",
      "regex": "^(\\d{4})$"
    }
  }
];

// Desteklenen diller - verilen ülke verilerinden çıkarıldı
const supportedLanguages = [
  "eng",
  "ara",
  "bre",
  "ces",
  "cym",
  "deu",
  "est",
  "fin",
  "fra",
  "hrv",
  "hun",
  "ita",
  "jpn",
  "kor",
  "nld",
  "per",
  "pol",
  "por",
  "rus",
  "slk",
  "spa",
  "srp",
  "swe",
  "tur",
  "urd",
  "zho",
]

// Ülke bilgilerini formatla
function formatCountryInfo(country: any, lang = "eng") {
  try {
    // Dil kontrolü
    if (!supportedLanguages.includes(lang)) {
      lang = "eng" // Varsayılan dil
    }

    // Ülke adı (tercüme edilmiş veya varsayılan)
    const name = country.translations[lang]?.common || country.name.common
    const officialName = country.translations[lang]?.official || country.name.official

    // Temel bilgileri döndür
    return {
      name: {
        common: name,
        official: officialName,
      },
      capital: country.capital,
      region: country.region,
      subregion: country.subregion,
      latlng: country.latlng,
      population: country.population,
      unMember: country.unMember,
      languages: country.languages,
      borders: country.borders,
      area: country.area,
      continents: country.continents,
      flags: country.flags,
      flag: country.flag,
      currencies: country.currencies,
      timezones: country.timezones,
      maps: country.maps,
    }
  } catch (error) {
    console.error("Ülke bilgisi formatlanırken hata oluştu:", error)
    return {
      name: country.name,
      error: "Ülke bilgisi formatlanırken hata oluştu",
    }
  }
}

export async function GET(request: NextRequest, { params }: { params: { code: string } }) {
  try {
    const code = params.code.toUpperCase()
    const searchParams = request.nextUrl.searchParams
    const lang = searchParams.get("lang") || "eng"

    console.log(`Aranan ülke kodu: "${code}", Dil: "${lang}"`)

    // Ülkeyi kodu ile bul (cca2, cca3, ccn3) - kısmi eşleşme
    const country = countriesData.find((c) => {
      return (
        c.cca2 === code ||
        c.cca3 === code ||
        c.ccn3 === code ||
        c.cca2.includes(code) ||
        c.cca3.includes(code) ||
        (c.ccn3 && c.ccn3.includes(code))
      )
    })

    if (!country) {
      return NextResponse.json(
        {
          success: false,
          message: `"${code}" kodlu ülke bulunamadı`,
          availableCodes: countriesData.map((country) => ({
            name: country.name.common,
            cca2: country.cca2,
            cca3: country.cca3,
            ccn3: country.ccn3,
          })),
        },
        { status: 404 },
      )
    }

    // Ülke bilgilerini formatla ve döndür
    const formattedCountry = formatCountryInfo(country, lang)

    return NextResponse.json({
      success: true,
      data: formattedCountry,
    })
  } catch (error) {
    console.error("API hatası:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Bir hata oluştu",
        error: (error as Error).message,
      },
      { status: 500 },
    )
  }
}
