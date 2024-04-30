import RegisterForm from './components/RegisterForm';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Explore from './components/Explore';
import Learning from './components/Learning';

function App() {
  return (
    <>
      <div className="min-h-screen bg-[#1E2023] font-dmsans text-white">
        <Header />
        <main>
          <HeroSection />
          <RegisterForm />
          <Explore />
          <Learning />
        </main>
      </div>
    </>
  );
}

export default App;
