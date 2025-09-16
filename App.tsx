import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CollegeSearch } from './components/CollegeSearch';
import { CareerStreams } from './components/CareerStreams';
import { ComprehensiveCareerOptions } from './components/ComprehensiveCareerOptions';
import { EngineeringExams } from './components/EngineeringExams';
import { MedicalExams } from './components/MedicalExams';
import { GovernmentExams } from './components/GovernmentExams';
import { CareerQuiz } from './components/CareerQuiz';
import { Resources } from './components/Resources';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { GoogleAnalytics } from './components/GoogleAnalytics';
import { NavigationToast } from './components/NavigationToast';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <GoogleAnalytics />
      <NavigationToast />
      <Header />
      <main>
        <HeroSection />
        <CollegeSearch />
        <CareerStreams />
        <ComprehensiveCareerOptions />
        <EngineeringExams />
        <MedicalExams />
        <GovernmentExams />
        <CareerQuiz />
        <Resources />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}