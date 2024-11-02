# SUMMARY Perkenalan AI, OpenAI, dan Instalasi Open.ai di React

### 1. AI adalah teknologi yang dapat melakukan tugas dan berpikir seperti manusia. Teknologi ini mampu belajar, membuat keputusan secara mandiri, dan meniru pola pikir manusia. AI telah banyak diterapkan dalam berbagai aplikasi, seperti pengenalan wajah (face recognition), pengenalan suara (speech recognition), kendaraan otonom (autonomous vehicles), dan analisis sentimen (sentiment analysis).

### 2. Menghubungkan React dengan API OpenAI
Untuk mengintegrasikan aplikasi React dengan API dari OpenAI, caranya adalah mengimpor library OpenAI dan mengatur API Key di dalam konfigurasi. 
contoh konfigurasi OpenRouter :
```
import OpenAI from "openai"

const OPENROUTER_API_KEY = "isi dengan api key"

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: OPENROUTER_API_KEY,
  dangerouslyAllowBrowser: true 
})

export default openai
```
### 3. Cara Fetch dan Menyimpan Respons
Setelah aplikasi React terhubung dengan API, untuk mengambil respons dari API dapat dilakukan dengan menggunakan metode fetch atau async/await.
Contoh cara mendapatkan respons dari OpenRouter :
```
import React, { useState } from 'react';
import openai from '../utils/openai.js';

function App() {
  const [response, setResponse] = useState('');

  const fetchResponse = async (userInput) => {
    try {
      // Mengirim permintaan ke API 
      const completion = await openai.chat.completions.create({
        model: 'mistralai/mistral-7b-instruct:free',
        messages: [{ role: 'user', content: userInput }]
      });

      // Menyimpan respons dalam state
      setResponse(completion.choices[0].message.content);
    } catch (error) {
      console.error('Error fetching :', error);
    }
  };

  return (
    <div>
      <button onClick={() => fetchResponse('Input text here')}>
        Send
      </button>
      <p>Response: {response}</p>
    </div>
  );
}

export default App;
```