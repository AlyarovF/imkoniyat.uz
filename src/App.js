import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/";
import Convention from "./pages/Convention"
import Library from "./pages/Library/"
import Contact from "./pages/Contact"
import NoPage from "./pages/NoPage"
import './App.css'
import News from "./pages/Press-center/News";
import Photo from "./pages/Press-center/Photo";
import Video from "./pages/Press-center/Video";
import About from "./pages/Association/About";
import Statute from "./pages/Association/Statute";
import Leadership from "./pages/Association/Leadership/index";
import ListOfMembers from "./pages/Association/ListOfMembers";
import ListOfTheBoard from "./pages/Association/ListOfTheBoard";
import Accessibility from "./pages/Activities/Accessibility";
import Report2020 from "./pages/Activities/Report2020";
import Report2019 from "./pages/Activities/Report2019";
import Seminars from "./pages/Activities/Seminars";
import Sessions from "./pages/Activities/Sessions";
import ScrollToTop from "./components/ScrollToTop";
import Editor from "./components/Editor";
import PostPage from "./pages/PostPage";

import api from "./api/posts"
import { useEffect } from "react";
import CreateMenu from "./components/CreateMenu";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="editor" element={<Editor />} />
          <Route path="create-menu" element={<CreateMenu />} />
          <Route path="about" element={<About />} />
          <Route path="statute" element={<Statute />} />
          <Route path="leadership" element={<Leadership />} />
          <Route path="list-of-members" element={<ListOfMembers />} />
          <Route path="list-of-the-board" element={<ListOfTheBoard />} />
          <Route path="report2019" element={<Report2019 />} />
          <Route path="report2020" element={<Report2020 />} />
          <Route path="accessibility" element={<Accessibility />} />
          <Route path="seminars" element={<Seminars />} />
          <Route path="sessions" element={<Sessions />} />
          <Route path="library" element={<Library />} />
          <Route path="convention" element={<Convention />} />
          <Route path="contact" element={<Contact />} />
          <Route path="press-center/news" element={<News />} />
          <Route path="press-center/photo" element={<Photo />} />
          <Route path="press-center/video" element={<Video />} />
          <Route path="press-center/:id" element={<PostPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// export default function App() {
//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await api.get('/post?page=1&limit=5')
//         console.log(response)
//       } catch (err) {
//         if (err.response) {
//           // Not in the 200 response range
//           console.log(err.response.data)
//           console.log(err.response.status)
//           console.log(err.response.headers)
//         } else {
//           console.log(`Error: ${err.message}`)
//         }
//       }
//     }

//     fetchPosts()
//   }, [])
//   return (
//     <div>

//     </div>
//   );
// }

ReactDOM.render(<App />, document.getElementById("root"));