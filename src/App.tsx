import Header from './components/Header';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <>
      <div className="min-h-screen bg-[#1E2023] font-dmsans text-white">
        <Header />
        <main>
          <HeroSection />
        </main>
      </div>
    </>
  );
}

export default App;
