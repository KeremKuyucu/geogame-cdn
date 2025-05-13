import { type NextRequest, NextResponse } from "next/server"

// Basitleştirilmiş ülke verileri
const countriesData = [
  {
    name: {
      common: "Turkey",
      official: "Republic of Turkey",
      nativeName: {
        tur: {
          official: "Türkiye Cumhuriyeti",
          common: "Türkiye",
        },
      },
    },
    cca2: "TR",
    cca3: "TUR",
    capital: ["Ankara"],
    region: "Asia",
    subregion: "Western Asia",
    languages: {
      tur: "Turkish",
    },
    latlng: [39.0, 35.0],
    borders: ["ARM", "AZE", "BGR", "GEO", "GRC", "IRN", "IRQ", "SYR"],
    area: 783562.0,
    population: 84339067,
    continents: ["Asia", "Europe"],
    flags: {
      png: "https://flagcdn.com/w320/tr.png",
      svg: "https://flagcdn.com/tr.svg",
    },
    unMember: true,
    translations: {
      ara: { official: "الجمهورية التركية", common: "تركيا" },
      ces: { official: "Turecká republika", common: "Turecko" },
      deu: { official: "Republik Türkei", common: "Türkei" },
      eng: { official: "Republic of Turkey", common: "Turkey" },
      fra: { official: "République de Turquie", common: "Turquie" },
      rus: { official: "Республика Турции", common: "Турция" },
      tur: { official: "Türkiye Cumhuriyeti", common: "Türkiye" },
    },
  },
  {
    name: {
      common: "United States",
      official: "United States of America",
      nativeName: {
        eng: {
          official: "United States of America",
          common: "United States",
        },
      },
    },
    cca2: "US",
    cca3: "USA",
    capital: ["Washington, D.C."],
    region: "Americas",
    subregion: "North America",
    languages: {
      eng: "English",
    },
    latlng: [38.0, -97.0],
    borders: ["CAN", "MEX"],
    area: 9372610.0,
    population: 329484123,
    continents: ["North America"],
    flags: {
      png: "https://flagcdn.com/w320/us.png",
      svg: "https://flagcdn.com/us.svg",
    },
    unMember: true,
    translations: {
      ara: { official: "الولايات المتحدة الامريكية", common: "الولايات المتحدة" },
      ces: { official: "Spojené státy americké", common: "Spojené státy" },
      deu: { official: "Vereinigte Staaten von Amerika", common: "Vereinigte Staaten" },
      eng: { official: "United States of America", common: "United States" },
      fra: { official: "Les états-unis d'Amérique", common: "États-Unis" },
      rus: { official: "Соединенные Штаты Америки", common: "Соединённые Штаты Америки" },
      tur: { official: "Amerika Birleşik Devletleri", common: "Amerika Birleşik Devletleri" },
    },
  },
  {
    name: {
      common: "Germany",
      official: "Federal Republic of Germany",
      nativeName: {
        deu: {
          official: "Bundesrepublik Deutschland",
          common: "Deutschland",
        },
      },
    },
    cca2: "DE",
    cca3: "DEU",
    capital: ["Berlin"],
    region: "Europe",
    subregion: "Western Europe",
    languages: {
      deu: "German",
    },
    latlng: [51.0, 9.0],
    borders: ["AUT", "BEL", "CZE", "DNK", "FRA", "LUX", "NLD", "POL", "CHE"],
    area: 357114.0,
    population: 83240525,
    continents: ["Europe"],
    flags: {
      png: "https://flagcdn.com/w320/de.png",
      svg: "https://flagcdn.com/de.svg",
    },
    unMember: true,
    translations: {
      ara: { official: "جمهورية ألمانيا الاتحادية", common: "ألمانيا" },
      ces: { official: "Spolková republika Německo", common: "Německo" },
      deu: { official: "Bundesrepublik Deutschland", common: "Deutschland" },
      eng: { official: "Federal Republic of Germany", common: "Germany" },
      fra: { official: "République fédérale d'Allemagne", common: "Allemagne" },
      rus: { official: "Федеративная Республика Германия", common: "Германия" },
      tur: { official: "Almanya Federal Cumhuriyeti", common: "Almanya" },
    },
  },
]

// Desteklenen diller
const supportedLanguages = ["eng", "ara", "ces", "deu", "fra", "rus", "tur"]

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

    // Ülkeyi kodu ile bul (cca2, cca3) - kısmi eşleşme
    const country = countriesData.find((c) => {
      return c.cca2 === code || c.cca3 === code || c.cca2.includes(code) || c.cca3.includes(code)
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
