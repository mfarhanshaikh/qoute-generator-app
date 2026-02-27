<div align="center">

# ✦ Quote Generator

**A minimal, elegant quote generator with a dark luxury aesthetic.**  
Fetches random quotes from a live API with smooth fade animations and a refined gold-on-dark UI.

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![API](https://img.shields.io/badge/DummyJSON_API-6C757D?style=for-the-badge&logo=json&logoColor=white)

</div>

---

## 📸 Preview

🔗 **[Live Demo →](https://mfarhanshaikh.github.io/qoute-generator-app/)**

> _Dark luxury card UI with Playfair Display typography, gold accents, and smooth quote transitions._

![Quote Generator Preview] <img width="1895" height="844" alt="image" src="https://github.com/user-attachments/assets/70b0eddf-c8b1-4aa9-b72d-cad6732ff326" />


---

## ✨ Features

- 🎲 **Random Quotes** — Fetches from [DummyJSON Quotes API](https://dummyjson.com/quotes) on every click
- 🌙 **Dark Luxury UI** — Deep charcoal background with gold accents and noise texture
- ✍️ **Elegant Typography** — Playfair Display (italic serif) for quotes, DM Sans for UI
- 🔄 **Smooth Animations** — Fade-out → load → fade-in transition on quote change
- ⏳ **Loading State** — Button icon spins during API fetch
- 📱 **Fully Responsive** — Works beautifully on all screen sizes
- ⚡ **Pure Vanilla** — Zero dependencies, no frameworks

---

## 🗂 Project Structure

```
quote-generator/
├── index.html      # Markup & layout
├── style.css       # All styling (dark luxury theme)
├── script.js       # API fetch logic & animations
└── README.md       # You are here
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/quote-generator.git
cd quote-generator
```

### 2. Open in browser

No build step needed — just open the file:

```bash
# Option A: Direct open
open index.html

# Option B: Live Server (VS Code extension recommended)
# Right-click index.html → "Open with Live Server"
```

> ✅ Internet connection required to fetch quotes from the API.

---

## 🔌 API Used

**[DummyJSON Quotes](https://dummyjson.com/quotes)**

```
GET https://dummyjson.com/quotes
```

Returns a JSON array of 100 quotes. One is selected randomly on each request.

**Sample Response:**
```json
{
  "quotes": [
    {
      "id": 1,
      "quote": "Life is what happens when you're busy making other plans.",
      "author": "John Lennon"
    }
  ]
}
```

---

## 🎨 Design Decisions

| Element | Choice | Reason |
|---|---|---|
| **Color** | `#0e0c0a` charcoal + gold `#c9a84c` | Luxury editorial feel |
| **Quote Font** | Playfair Display (italic) | Classic, literary character |
| **UI Font** | DM Sans | Clean, modern contrast |
| **Animation** | CSS opacity + translateY | Smooth, no JS animation libs needed |
| **Button** | Gold fill on hover | Satisfying, clear affordance |

---

## 🛠 Customization

### Change the color theme
Edit the CSS variables at the top of `style.css`:

```css
:root {
  --bg:      #0e0c0a;   /* Background */
  --surface: #1a1612;   /* Card surface */
  --gold:    #c9a84c;   /* Accent color */
  --text:    #f0e8d8;   /* Quote text */
}
```

### Use a different API
In `script.js`, replace the URL and update how data is parsed:

```js
const url = "https://your-api-endpoint.com/quotes";
// Update: randomQuote.quote and randomQuote.author to match your API's structure
```

---

## 📄 License

This project is open source and available under the [MIT License](./LICENSE).

---

<div align="center">

Made with ♥ and vanilla JS &nbsp;|&nbsp; No frameworks harmed in the making

</div>
