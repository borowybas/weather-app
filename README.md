# Weather App

Weather App to aplikacja webowa stworzona w React z wykorzystaniem TypeScript, umożliwiająca sprawdzanie aktualnej pogody w wybranych miastach. Użytkownik może wyszukiwać lokalizacje, wybierać interesujące go miasta, personalizować widok danych pogodowych i ustawić jedno z miast jako główne.

## Funkcje

- Wyszukiwanie miast z autouzupełnianiem
- Wybór wielu lokalizacji z pogodą
- Możliwość ustawienia głównego miasta
- Personalizacja wyświetlanych informacji pogodowych
- Zapisywanie wybranych miast i preferencji w `localStorage`
- Responsywny i estetyczny interfejs

## Zrzut ekranu

![Screenshot aplikacji](./screenshot.png)

## Technologie

    React + TS
    Vite
    HTML, SCSS
    WeatherAPI – źródło danych
    React Icons – ikonka przy wyszukiwarce

    
## Struktura projektu
    src/
  ├── api/                # Obsługa połączeń z API pogodowym
  ├── components/         # Komponenty UI (WeatherCard, WeatherGrid, LocationSelector itd.)
  ├── styles/             # Pliki stylów SCSS
  ├── App.tsx             # Główny komponent aplikacji
  └── main.tsx            # Punkt wejściowy aplikacji

