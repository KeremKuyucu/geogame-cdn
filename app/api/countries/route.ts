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

export async function GET(request: NextRequest) {
  try {
    // URL parametrelerini al
    const searchParams = request.nextUrl.searchParams
    const countryName = searchParams.get("country")
    const lang = searchParams.get("lang") || "eng"

    // Ülke adı belirtilmemişse tüm ülkelerin listesini döndür
    if (!countryName) {
      return NextResponse.json({
        success: true,
        message: "Lütfen bir ülke adı belirtin",
        availableCountries: countriesData.map((country) => ({
          name: country.name.common,
          code: country.cca2,
        })),
      })
    }

    console.log(`Aranan ülke: "${countryName}", Dil: "${lang}"`)

    // Ülkeyi bul (büyük/küçük harf duyarsız arama ve kısmi eşleşme)
    const country = countriesData.find((c) => {
      // Ana isimde arama
      if (c.name.common.toLowerCase().includes(countryName.toLowerCase())) {
        return true
      }

      // Alternatif isimlerde arama
      if (c.altSpellings && c.altSpellings.some((alt) => alt.toLowerCase().includes(countryName.toLowerCase()))) {
        return true
      }

      // Çevirilerde arama
      for (const langKey in c.translations) {
        if (c.translations[langKey]?.common.toLowerCase().includes(countryName.toLowerCase())) {
          return true
        }
      }

      return false
    })

    if (!country) {
      return NextResponse.json(
        {
          success: false,
          message: `"${countryName}" adlı ülke bulunamadı`,
          availableCountries: countriesData.map((country) => ({
            name: country.name.common,
            code: country.cca2,
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
