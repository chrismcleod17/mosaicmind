import './App.css';
import Header from './components/Header/Header';  

function App() {
  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap" rel="stylesheet" />
      <Header />
      <div className="body">
        <p>Welcome to Mosaic Mind Psychotherapy</p>
      </div>
    </div>
  );
}

export default App;
