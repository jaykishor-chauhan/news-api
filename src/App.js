import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import News from './components/News';
import SearchNews from './components/SearchNews';

function App() {
  const articles = [
    {
      "source": {
        "id": null,
        "name": "Thefly.com"
      },
      "author": null,
      "title": "JPMorgan says 40% of Tesla earnings at risk from regulatory backdrop",
      "description": "See the rest of the story here.\n\nthefly.com provides the latest financial news as it breaks. Known as a leader in market intelligence, The Fly's real-time, streaming news feed keeps individual investors, professional money managers, active traders, and corpor…",
      "url": "https://thefly.com/permalinks/entry.php/id4045358/TSLA-JPMorgan-says--of-Tesla-earnings-at-risk-from-regulatory-backdrop",
      "urlToImage": "https://thefly.com/images/meta/streetresearch_recommendations.jpg",
      "publishedAt": "2025-01-03T14:21:53Z",
      "content": "Earnings calls, analyst events, roadshows and more"
    },
    {
      "source": {
        "id": "cbs-news",
        "name": "CBS News"
      },
      "author": "CBS News",
      "title": "Driver in Tesla Cybertruck explosion shot himself before blast, authorities say",
      "description": "Investigators say the driver of a Tesla Cybertruck shot himself in the head before the vehicle exploded outside a Trump hotel in Las Vegas on Wednesday. CBS News' Andres Gutierrez has the latest.",
      "url": "https://www.cbsnews.com/video/driver-in-tesla-cybertruck-explosion-shot-himself-before-blast-authorities-say/",
      "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2025/01/03/8a564184-2a53-41c1-8ac0-b1e63ed3d4bd/thumbnail/1200x630/d6f2a983c48859de3f379f21370ca0ef/0103-cmo-cybertruck.jpg?v=fa9977353833f46f40b07abcd9d5240b",
      "publishedAt": "2025-01-03T14:21:00Z",
      "content": "Watch CBS News\r\nCopyright ©2025 CBS Interactive Inc. All rights reserved.\r\nGet browser notifications for breaking news, live events, and exclusive reporting.\r\nNot NowTurn On"
    },
    {
      "source": {
        "id": null,
        "name": "STERN.de"
      },
      "author": "STERN.de",
      "title": "Vor der Bundestagswahl: Alice Weidel und Elon Musk verabreden sich für öffentliche Diskussion",
      "description": "AfD-Chefin Alice Weidel und Tech-Milliardär Elon Musk haben nach dessen Wahlempfehlung ein Gespräch auf X vereinbart. Zu großen Differenzen dürfte es dabei kaum kommen.",
      "url": "https://www.stern.de/politik/deutschland/alice-weidel-und-elon-musk-sprechen-auf-x-zur-bundestagswahl-35353098.html",
      "urlToImage": "https://image.stern.de/35353104/t/6p/v1/w1440/r1.7778/-/alice-weidel.jpg",
      "publishedAt": "2025-01-03T14:21:00Z",
      "content": "Kopiere den aktuellen Link\r\nAfD-Chefin Alice Weidel und Tech-Milliardär Elon Musk haben nach dessen Wahlempfehlung ein Gespräch auf X vereinbart. Zu großen Differenzen dürfte es dabei kaum kommen.\r\nA… [+1837 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Süddeutsche Zeitung"
      },
      "author": "Von Torben Kassler",
      "title": "Milliardärslisten: Reiche sind schätzungsweise reicher geworden",
      "description": "Eine Liste der 500 reichsten Menschen der Welt zeigt: Die Reichen werden immer reicher. Das Vermögen der Top-500 ist um rund 1,5 Billionen Dollar gestiegen. Vor allem die Tech-Giganten wie Elon Musk und Mark Zuckerberg haben zum Zuwachs beigetragen. Doch Ökon…",
      "url": "https://www.sueddeutsche.de/wirtschaft/reiche-vermoegen-top-milliardaere-billionen-li.3176138",
      "urlToImage": "https://www.sueddeutsche.de/2024/02/25/80ed65c9-89bb-4088-a87b-bd19fe8a3cd4.jpeg?q=60&fm=webp&width=1200&rect=0%2C69%2C1353%2C761",
      "publishedAt": "2025-01-03T14:20:28Z",
      "content": "Das Vermögen der 500 reichsten Menschen der Welt überschreite erstmals die 10-Billionen-Dollar-Grenze, heißt es nun bei Bloomberg. Die Top-500 konnten laut dem US-Wirtschaftsmedium damit ein Plus von… [+3630 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "New York Post"
      },
      "author": "Emily Crane",
      "title": "Las Vegas Cybertruck bomber Matthew Livelsberger ‘preyed on’ first wife, friend claims",
      "description": "Stacie Wilssens, who was neighbors with Livelsberger and his now-ex-wife, Sara, in Colorado Springs, recalled the highly decorated Army soldier as being \"bizarre and unhealthy\" after she started to get to know him around 2012.",
      "url": "https://nypost.com/2025/01/03/us-news/las-vegas-cybertruck-bomber-matthew-livelsberger-preyed-on-first-wife/",
      "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2025/01/las-vegas-cybertruck-bomber-matthew-96150775.jpg?quality=75&strip=all&w=1024",
      "publishedAt": "2025-01-03T14:20:13Z",
      "content": "Las Vegas Cybertruck bomber Matthew Livelsberger “preyed” on his first wife and mocked her struggles with depression — years before he shot himself in the head and blew up his explosive-laden vehicle… [+3087 chars]"
    },
    {
      "source": {
        "id": "der-tagesspiegel",
        "name": "Der Tagesspiegel"
      },
      "author": "Sven Lemkemeyer",
      "title": "60. Geburtstag des Springer-Chefs: Musk soll mit rechtsextremer Influencerin zu Party von Döpfner gekommen sein",
      "description": "Der Gastbeitrag des Trump-Beraters schlägt weiter hohe Wellen. Eine populistische Niederländerin verteidigte Musks AfD-Werbung. Er soll sie 2023 zu einer Feier mitgebracht haben – unangekündigt.",
      "url": "https://www.tagesspiegel.de/politik/60-geburtstag-des-springer-chefs-musk-soll-mit-rechtsextremer-influencerin-zu-party-von-dopfner-gekommen-sein-12956275.html",
      "urlToImage": "https://www.tagesspiegel.de/images/12945688/alternates/BASE_16_9_W1400/1735906003000/file-photo-elon-musk.jpeg",
      "publishedAt": "2025-01-03T12:22:23Z",
      "content": "Elon Musk empört mit seinen aggressiven Äußerungen und seiner direkten Einmischung in den Bundestagswahlkampf weiter die Politik. Dabei geht es auch um seinen umstrittenen Gastbeitrag in der Welt am … [+5003 chars]"
    },
  ]
  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={
            <>
            <Navbar />
            <News articles={articles} />
            </>
          }/>
          <Route path="/search" element={
            <>
            <Navbar />
            <SearchNews />
            </>
          }/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
