import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      uz: {
        translation: {
          "Welcome to React": "Reactga hush kelibsiz!"
        }
      },
      en: {
        translation: {
          "Welcome to React": "Welcome to React and react-i18next"
        }
      },
      ru: {
        translation: {
          "Welcome to React": "Добро пож react"
        }
      }
    },
    fallbackLng: "en",
    detection: {
      order: ['htmlTag', 'cookie', 'localStorage', 'path', 'subdomain'],
    }
  });

export default function App() {
  const { t } = useTranslation();

  return <h2>{t('Welcome to React')}</h2>;
}


// import Navbar from "./components/Navbar/Navbar";
// import Home from "./pages/Home/";
// import Convention from "./pages/Convention"
// import Library from "./pages/Library/"
// import Contact from "./pages/Contact"
// import NoPage from "./pages/NoPage"
// import './App.css'
// import News from "./pages/Press-center/News";
// import Photo from "./pages/Press-center/Photo";
// import Video from "./pages/Press-center/Video";
// import About from "./pages/Association/About";
// import Statute from "./pages/Association/Statute";
// import Leadership from "./pages/Association/Leadership/index";
// import ListOfMembers from "./pages/Association/ListOfMembers";
// import ListOfTheBoard from "./pages/Association/ListOfTheBoard";
// import Accessibility from "./pages/Activities/Accessibility";
// import Report2020 from "./pages/Activities/Report2020";
// import Report2019 from "./pages/Activities/Report2019";
// import Seminars from "./pages/Activities/Seminars";
// import Sessions from "./pages/Activities/Sessions";
// import ScrollToTop from "./components/ScrollToTop";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <ScrollToTop />
//       <Routes>
//         <Route path="/" element={<Navbar />}>
//           <Route index element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="statute" element={<Statute />} />
//           <Route path="leadership" element={<Leadership />} />
//           <Route path="list-of-members" element={<ListOfMembers />} />
//           <Route path="list-of-the-board" element={<ListOfTheBoard />} />
//           <Route path="report2019" element={<Report2019 />} />
//           <Route path="report2020" element={<Report2020 />} />
//           <Route path="accessibility" element={<Accessibility />} />
//           <Route path="seminars" element={<Seminars />} />
//           <Route path="sessions" element={<Sessions />} />
//           <Route path="library" element={<Library />} />
//           <Route path="convention" element={<Convention />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="press-center/news" element={<News />} />
//           <Route path="press-center/photo" element={<Photo />} />
//           <Route path="press-center/video" element={<Video />} />
//           <Route path="*" element={<NoPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

ReactDOM.render(<App />, document.getElementById("root"));