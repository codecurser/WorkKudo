# WorkKudo 🌟

WorkKudo is an interactive employee appreciation and recognition platform designed for modern, hybrid, and remote workforces.

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite 8](https://vite.dev/)
- **3D Graphics:** [Three.js](https://threejs.org/) & [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & PostCSS
- **Static Pre-rendering:** [react-snap](https://github.com/stereobooster/react-snap)

## 📦 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/codecurser/WorkKudo.git
   cd WorkKudo
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 📜 Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts Vite dev server |
| `npm run build` | Builds app and runs static pre-rendering via `react-snap` |
| `npm run build:docker` | Builds Vite application without `react-snap` (ideal for container builds) |
| `npm run preview` | Previews production build locally |
| `npm run lint` | Runs ESLint checks |

## 🐳 Docker Deployment

To build and run WorkKudo using Docker:

```bash
docker build -t workkudo:latest .
docker run -d -p 80:80 workkudo:latest
```

