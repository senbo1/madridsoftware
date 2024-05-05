import RegisterForm from './components/RegisterForm';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Benefits from './components/Benefits';
import Learning from './components/Learning';
import MainNav from './components/MainNav';
import Placements from './components/Placements';
import Enroll from './components/Enroll';
import Projects from './components/Projects';
import Eligible from './components/Eligible';
import Reviews from './components/Reviews';
import FAQs from './components/FAQs';
import Footer from './components/Footer';

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
          <Enroll />
          <Projects />
          <Eligible />
          <Reviews />
          <FAQs />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
