#  **Interactive Quiz Application**

A fully functional, Figma-accurate quiz built using **React + TailwindCSS**, featuring multi-step navigation, animated progress bar, option selection logic, and a visually polished UI based on the assignment design.

---
### Live Demo : https://frontend-assignment-orcin-two.vercel.app/
---

## Setup Instructions

### **1. Clone the Repository**

```bash
git clone <your-repo-url>
cd <project-folder>
```

### **2. Install Dependencies**

```bash
npm install
```

### **3. Start Development Server**

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

---

## 🛠 Tech Stack Used

| Layer                  | Technology                                    |
| ---------------------- | --------------------------------------------- |
| **Frontend Framework** | React (Vite)                                  |
| **Styling**            | Tailwind CSS                                  |
| **Design Source**      | Figma                                         |
| **Fonts**              | DM Serif Display, Inter, Manrope              |
| **Assets**             | Custom PNG/GIF (paw, paw-note, arrows, cloud) |
| **State Management**   | React Hooks (`useState`)                      |

---

## ✨ Key Features Implemented

###  **1. Pixel-Perfect UI (Matches Figma Exactly)**

* Frosted glass container
* Background gradients
* Drop shadows
* Accurate typography scaling
* Absolute/relative positioning preserved from Figma

---

###  **2. Multi-Page Quiz Navigation**

* **Next** and **Previous** arrows for stepping between questions
* On the **last question**, arrows dynamically replace with a **Submit** button
* Smooth page transitions

---

###  **3. Option Selection Logic**

* Hoverable options
* Click to select
* Active option gets highlighted
* Fully synced selection across pages

---

###  **4. Animated Progress Bar**

* Exact segment width & offsets as per Figma
* Thick active bar + thin inactive bars
* Aligns perfectly with center layout

---

###  **5. Score Calculation**

* Score stored for each question
* Evaluated on submit
* Final score displayed in **percentage**
* Clean result screen

---

###  **6. Decorative UI Elements**

* Left animated **paw GIF**
* Speech bubble **“Best of Luck!”**
* Positioned exactly like the design
* Mirrored shapes & accents preserved

---

###  **7. Responsive Layout**

* Works at 1920×1080 (primary target)
* Scales down using flexbox-based layout
* Ensures no overlap between title, question, and options

---

## 📌 Assumptions Made

* Quiz contains **single-correct-answer** questions
* No backend required — quiz runs entirely client-side
* User should be able to navigate between questions freely
* Submission is allowed only from the last question
* The design was optimized for **1920×1080 desktop resolution**
* All quiz data is stored in a local file: `questions.js`

---

## ⏱ Time Spent on the Assignment

| Task                                        | Time                     |
| ------------------------------------------- | ------------------------ |
| Understanding requirements + Figma analysis | 45 min                   |
| React component structure                   | 30 min                   |
| Tailwind UI                                 | 1  hrs                   |
| Navigation (Next/Prev/Submit)               | 20 min                   |
| Option selection logic + styling            | 30 min                   |
| Progress bar implementation                 | 1  hrs                   |
| Result page styling                         | 30 min                   |
| Debugging & alignment refinements           | 1 hr                     |
| **Total Time Spent**                        | **≈ 5 hours 40 minutes** |

---

