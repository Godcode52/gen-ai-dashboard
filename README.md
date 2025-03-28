# Gen AI Analytics Dashboard - Technical Submission

## Assignment Overview
Implementation of a React-based dashboard for the Gen AI Analytics tool that democratizes data insights across business units.

## ✅ Delivered Requirements

### Technical Requirements
| Requirement               | Implementation Status |
|---------------------------|-----------------------|
| React SPA with Vite       | ✅ Fully Implemented |
| Natural Language Input    | ✅ With AI suggestions |
| Query Processing          | ✅ Mock AI simulation |
| Result Visualization      | ✅ Chart.js + Tables |
| Redux State Management    | ✅ Toolkit implementation |
| Responsive Design         | ✅ Mobile-first approach |

## Technical Implementation

### Core Components
```jsx
// QueryInput.jsx
function QueryInput() {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  
  const handleSubmit = () => {
    dispatch(processQuery(query));
    //... mock AI processing
  };
}
// Redux Store :

// store.js
export const store = configureStore({
  reducer: {
    queries: queryReducer,
    results: resultsReducer
  }
});

// Project Structure:

src/
├── components/
│   ├── QueryInput.jsx      # NL query interface
│   ├── ResultsDisplay.jsx  # Chart/table views
│   └── QueryHistory.jsx    # Past queries
├── redux/
│   ├── store.js            # Redux configuration
│   └── slices/             # Action/reducer logic
└── App.jsx                 # Root component
```
# Installation & Usage:

```bash 
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

# Live Demo : 
https://gen-ai-dashboard-alpha.vercel.app/

# Submission Details:
GitHub Repository: [github.com/Godcode52/gen-ai-dashboard](https://github.com/Godcode52/gen-ai-dashboard)

Submitted By: Kulwant Charan

Submission Date: 29-03-2025

 ### Developed for GrowthGear Frontend Engineering Intern Challenge