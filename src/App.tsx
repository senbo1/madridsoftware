import RegisterForm from './components/RegisterForm';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Benefits from './components/Benefits';
import Learning from './components/Learning';
import MainNav from './components/MainNav';
import Placements from './components/Placements';

function App() {
  return (
    <>
      <div className="min-h-screen bg-[#1E2023] font-dmsans text-white">
        <Header />
        <main>
          <HeroSection />
          <RegisterForm />
          <MainNav /> 
          <Placements />
          <Benefits />
          <Learning />
        </main>
      </div>
    </>
  );
}

export default App;
