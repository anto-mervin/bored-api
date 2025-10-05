# Getting Bored 🥱

A React-based web application that helps you find interesting activities when you're bored! This app uses the [Bored API](https://www.boredapi.com/) to suggest random activities based on your preferences.

## ✨ Features

- **Random Activity Generator**: Get random activity suggestions with just a click
- **Customizable Filters**: Filter activities by:
  - Activity type (education, recreational, social, DIY, charity, cooking, relaxation, music, busywork)
  - Accessibility level (0.0 to 1.0)
  - Number of participants
- **Save Favorites**: Bookmark activities you like for later reference
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Built with Chakra UI for a clean and intuitive interface

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.2 with TypeScript
- **Build Tool**: Vite 5.2
- **UI Library**: Chakra UI 2.8
- **State Management**: Redux Toolkit 2.2
- **Routing**: React Router DOM 6.22
- **HTTP Client**: Axios
- **Icons**: Lucide React
- **Styling**: Emotion & Framer Motion

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/anto-mervin/bored-api.git
cd bored-api
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🚀 Usage

1. **Get Activity**: The home page displays a random activity. Click "Get Another Activity" to fetch a new one.

2. **Save Activities**: Found something interesting? Click the "Save" button to bookmark it for later.

3. **Configure Settings**: Click the settings icon (⚙️) to:
   - Select specific activity types
   - Set accessibility level
   - Choose number of participants

4. **View Saved Activities**: Click the bookmark icon (🔖) to see all your saved activities.

5. **Reset Filters**: Use the "Reset to Default" button in settings to clear all filters.

## 📁 Project Structure

```
bored-api/
├── src/
│   ├── api/            # API integration with Bored API
│   ├── components/     # Reusable React components
│   │   ├── Activity.tsx
│   │   ├── Accessibility.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   ├── People.tsx
│   │   ├── SaveCard.tsx
│   │   └── StoreBadge.tsx
│   ├── pages/          # Page components
│   │   ├── Home.tsx
│   │   ├── Settings.tsx
│   │   └── Save.tsx
│   ├── store/          # Redux store configuration
│   ├── App.tsx         # Main App component
│   ├── main.tsx        # Application entry point
│   └── Theme.ts        # Chakra UI theme configuration
├── public/             # Static assets
├── index.html          # HTML template
├── package.json        # Project dependencies
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🎯 API Reference

This project uses the [Bored API](https://www.boredapi.com/documentation) to fetch activity suggestions. The API provides various parameters for filtering activities:

- `type`: Type of activity
- `participants`: Number of participants
- `accessibility`: Accessibility level (0.0 - 1.0)

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 👨‍💻 Author

Made with ❤️ by [Anto Mervin](https://github.com/anto-mervin)

## 📄 License

This project is open source and available under the MIT License.
