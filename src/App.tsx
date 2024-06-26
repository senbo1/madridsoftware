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
import Testimonials from './components/Testimonials';
import FAQs from './components/FAQs';
import Footer from './components/Footer';
import Curriculum from './components/Curriculum';

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
          <Curriculum />
          <Learning />
          <Enroll />
          <Projects />
          <Eligible />
          <Testimonials />
          <FAQs />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
