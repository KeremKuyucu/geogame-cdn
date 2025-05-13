import { type NextRequest, NextResponse } from "next/server"
import countriesData from "@/data/countries.json"

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
