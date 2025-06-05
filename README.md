# 🌤️ Weather App - React + Hooks

Această aplicație este un **Proof of Concept (PoC)** care demonstrează utilizarea framework-ului **React** împreună cu **Hooks**, integrarea unui API extern (OpenWeather), salvarea datelor în `localStorage`, și utilizarea Context API pentru comutarea temei (Dark/Light).

---

## 🔧 Funcționalități

- 🔍 Căutare meteo după oraș
- 🌡️ Afișare temperatură, umiditate, vânt și condiții meteo
- 🌓 Comutare între temă Dark / Light
- 📌 Istoric ultimele 5 căutări (cu salvare în `localStorage`)
- 💾 Persistență temă și istoric

---

## ⚙️ Tehnologii folosite

- **React** (Create React App)
- **Hooks**: `useState`, `useEffect`, `useContext`
- **Context API** – pentru gestionarea temei
- **OpenWeather API** – pentru obținerea datelor meteo
- **localStorage** – pentru salvarea temei și istoricului

---

## 🗂️ Structura fișierelor

```
src/
├── App.js              # Componenta principală
├── ThemeContext.js     # Gestionare temă globală (dark/light)
├── index.js            # Punctul de pornire al aplicației
├── index.css           # Stiluri globale (minimale)
```

---

## 🧪 Cum rulezi aplicația

### 1. Clonează proiectul:

```bash
git clone https://github.com/numele-tau/weather-app.git
cd weather-app
```

### 2. Instalează dependențele:

```bash
npm install
```

### 3. Adaugă cheia ta API în `App.js`

Obține o cheie gratuită de la https://openweathermap.org/api  
Înlocuiește valoarea:

```js
const API_KEY = 'CHEIA_TA_AICI';
```

### 4. Pornește aplicația

```bash
npm start
```

---

## 🧠 Exemple de Hooks folosite

```js
// useState
const [city, setCity] = useState('');

// useEffect
useEffect(() => {
  fetchWeather();
}, [query]);

// useContext (pentru temă)
const { dark, toggleTheme } = useContext(ThemeContext);
```

---

## 📃 Licență

Acest proiect este realizat ca PoC educațional. Poți folosi codul în scopuri personale sau educaționale.

---

## 🙋‍♂️ Autori

- 👤 [Bolboaca Andrei]
- 📅 Iunie 2025
