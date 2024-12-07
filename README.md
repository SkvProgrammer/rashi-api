
# 🌟 Favorite Color API (Based on Zodiac Sign and Name)

This is a simple RESTful API built with **Express.js**. It provides the favorite color and the Rashi name based on a user's **name** and **zodiac sign**. 

---

## 🚀 Features

- Accepts a user's **name** and **zodiac sign** as query parameters.
- Returns the Rashi (zodiac name in Sanskrit) and the user's lucky color.
- Supports all 12 zodiac signs.

---

## 📂 Project Structure

```
📁 rashi-api/
├── index.js        # Main server file
├── package.json    # Node.js dependencies and scripts
└── README.md       # API documentation
```

---

## 🛠️ Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v12 or higher)
- [npm](https://www.npmjs.com/)

---

## 🖥️ Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/rashi-api.git
   cd rashi-api
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node index.js
   ```

4. The server will start at `http://localhost:3000`.

---

## 🧑‍💻 Usage

### **Endpoint**
`GET /getRashiDetails`

### **Query Parameters**
| Parameter   | Type   | Required | Description                              |
|-------------|--------|----------|------------------------------------------|
| `name`      | String | Yes      | User's name                              |
| `zodiacSign`| String | Yes      | User's zodiac sign (e.g., `Leo`, `Aries`)|

### **Example Request**
#### URL:
```
http://localhost:3000/getRashiDetails?name=John&zodiacSign=Leo
```

#### CURL:
```bash
curl "http://localhost:3000/getRashiDetails?name=John&zodiacSign=Leo"
```

### **Example Response**
```json
{
    "name": "John",
    "rashiName": "Simha",
    "luckyColor": "Gold"
}
```

### **Error Responses**
- **Missing Parameters**:
  ```json
  {
      "error": "Please provide 'name' and 'zodiacSign' as query parameters."
  }
  ```

- **Invalid Zodiac Sign**:
  ```json
  {
      "error": "Invalid zodiac sign. Use valid signs like 'aries', 'leo', etc."
  }
  ```

---

## 🌟 Zodiac Signs Data

| Zodiac Sign  | Rashi Name  | Lucky Color  |
|--------------|-------------|--------------|
| Aries        | Mesha       | Red          |
| Taurus       | Vrishabha   | Green        |
| Gemini       | Mithuna     | Yellow       |
| Cancer       | Karka       | White        |
| Leo          | Simha       | Gold         |
| Virgo        | Kanya       | Blue         |
| Libra        | Tula        | Pink         |
| Scorpio      | Vrishchika  | Maroon       |
| Sagittarius  | Dhanu       | Purple       |
| Capricorn    | Makara      | Brown        |
| Aquarius     | Kumbha      | Cyan         |
| Pisces       | Meena       | Sea Green    |

---

## 🚀 Deployment

You can deploy this API on platforms like **Railway.app**, **Heroku**, or **Vercel**. Make sure to update the `PORT` environment variable if required.

---

## 🛠️ Technologies Used

- **Node.js**: JavaScript runtime.
- **Express.js**: Minimalist web framework for Node.js.

---




