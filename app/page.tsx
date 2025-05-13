"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Loader2 } from "lucide-react"

export default function Home() {
  const [countryName, setCountryName] = useState("")
  const [countryCode, setCountryCode] = useState("")
  const [language, setLanguage] = useState("tur")
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  // İsim ile sorgulama
  const searchByName = async () => {
    if (!countryName) {
      setError("Lütfen bir ülke adı girin")
      return
    }

    setLoading(true)
    setError("")
    setResult(null)

    try {
      const response = await fetch(`/api/countries?country=${encodeURIComponent(countryName)}&lang=${language}`)
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Bir hata oluştu")
      }

      setResult(data)
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setLoading(false)
    }
  }

  // Kod ile sorgulama
  const searchByCode = async () => {
    if (!countryCode) {
      setError("Lütfen bir ülke kodu girin")
      return
    }

    setLoading(true)
    setError("")
    setResult(null)

    try {
      const response = await fetch(`/api/countries/${encodeURIComponent(countryCode)}?lang=${language}`)
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Bir hata oluştu")
      }

      setResult(data)
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">Ülke Bilgileri API</CardTitle>
          <CardDescription>Ülke adı veya kodu ile ülke bilgilerini sorgulayın</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Tabs defaultValue="name" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="name">İsim ile Sorgula</TabsTrigger>
              <TabsTrigger value="code">Kod ile Sorgula</TabsTrigger>
            </TabsList>

            <TabsContent value="name" className="space-y-4 mt-4">
              <div className="grid gap-2">
                <Label htmlFor="country-name">Ülke Adı</Label>
                <Input
                  id="country-name"
                  placeholder="Örn: Moldova, United States, Mozambique"
                  value={countryName}
                  onChange={(e) => setCountryName(e.target.value)}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="language-name">Dil</Label>
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger id="language-name">
                    <SelectValue placeholder="Dil seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="eng">İngilizce</SelectItem>
                    <SelectItem value="tur">Türkçe</SelectItem>
                    <SelectItem value="deu">Almanca</SelectItem>
                    <SelectItem value="fra">Fransızca</SelectItem>
                    <SelectItem value="ara">Arapça</SelectItem>
                    <SelectItem value="rus">Rusça</SelectItem>
                    <SelectItem value="por">Portekizce</SelectItem>
                    <SelectItem value="spa">İspanyolca</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={searchByName} disabled={loading} className="w-full">
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sorgulanıyor...
                  </>
                ) : (
                  "Sorgula"
                )}
              </Button>
            </TabsContent>

            <TabsContent value="code" className="space-y-4 mt-4">
              <div className="grid gap-2">
                <Label htmlFor="country-code">Ülke Kodu</Label>
                <Input
                  id="country-code"
                  placeholder="Örn: MD, US, MZ, NR, YT"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="language-code">Dil</Label>
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger id="language-code">
                    <SelectValue placeholder="Dil seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="eng">İngilizce</SelectItem>
                    <SelectItem value="tur">Türkçe</SelectItem>
                    <SelectItem value="deu">Almanca</SelectItem>
                    <SelectItem value="fra">Fransızca</SelectItem>
                    <SelectItem value="ara">Arapça</SelectItem>
                    <SelectItem value="rus">Rusça</SelectItem>
                    <SelectItem value="por">Portekizce</SelectItem>
                    <SelectItem value="spa">İspanyolca</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={searchByCode} disabled={loading} className="w-full">
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sorgulanıyor...
                  </>
                ) : (
                  "Sorgula"
                )}
              </Button>
            </TabsContent>
          </Tabs>

          {error && (
            <div className="bg-red-50 p-4 rounded-md border border-red-200 text-red-800">
              <p className="font-medium">Hata:</p>
              <p>{error}</p>
            </div>
          )}

          {result && (
            <div className="bg-green-50 p-4 rounded-md border border-green-200">
              <h3 className="text-lg font-medium text-green-800 mb-2">Sonuç:</h3>
              <pre className="bg-white p-4 rounded-md overflow-auto max-h-96 text-sm">
                {JSON.stringify(result, null, 2)}
              </pre>
            </div>
          )}

          <div className="bg-yellow-50 p-4 rounded-md border border-yellow-200">
            <h3 className="text-lg font-medium text-yellow-800 mb-2">Mevcut Ülkeler</h3>
            <p className="text-yellow-700 mb-2">Bu API şu anda aşağıdaki ülkeleri içermektedir:</p>
            <ul className="list-disc list-inside text-yellow-700">
              <li>Moldova (MD, MDA)</li>
              <li>Amerika Birleşik Devletleri (US, USA)</li>
              <li>Mayotte (YT, MYT)</li>
              <li>Nauru (NR, NRU)</li>
              <li>Mozambik (MZ, MOZ)</li>
            </ul>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <div className="text-sm text-muted-foreground">
            <p>API Kullanımı:</p>
            <code className="text-xs bg-muted p-1 rounded">GET /api/countries?country=Moldova&lang=tur</code>
            <p className="mt-1">veya</p>
            <code className="text-xs bg-muted p-1 rounded">GET /api/countries/MD?lang=tur</code>
          </div>
        </CardFooter>
      </Card>
    </main>
  )
}
