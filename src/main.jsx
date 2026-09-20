import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowLeft, ArrowRight, ChevronDown, Moon, Phone, Sparkles, Volume2, VolumeX } from "lucide-react";
import "./styles.css";

const EVENT = new Date("2026-09-06T09:45:00");

function useCountdown(target) {
  const get = () => {
    const distance = Math.max(0, target.getTime() - Date.now());
    return {
      days: Math.floor(distance / 86400000),
      hrs: Math.floor((distance / 3600000) % 24),
      mins: Math.floor((distance / 60000) % 60),
      secs: Math.floor((distance / 1000) % 60),
    };
  };
  const [time, setTime] = useState(get);
  useEffect(() => {
    const id = setInterval(() => setTime(get()), 1000);
    return () => clearInterval(id);
  }, [target]);
  return time;
}

function FloralCorner({ flip = false }) {
  return (
    <svg className={`floral-corner ${flip ? "flip" : ""}`} viewBox="0 0 260 250" aria-hidden="true">
      <g fill="none" stroke="#526b2e" strokeWidth="5" strokeLinecap="round">
        <path d="M20 240 C35 175 55 105 112 28" />
        <path d="M50 200 C28 174 22 151 26 125" />
        <path d="M73 162 C51 136 51 109 58 84" />
        <path d="M96 121 C82 94 86 66 101 47" />
        <path d="M44 198 C73 181 92 181 116 194" />
        <path d="M59 155 C85 141 106 144 126 160" />
        <path d="M79 112 C103 101 121 105 140 119" />
      </g>
      <g fill="#607b36">
        <ellipse cx="30" cy="126" rx="13" ry="34" transform="rotate(-30 30 126)" />
        <ellipse cx="58" cy="86" rx="13" ry="34" transform="rotate(-28 58 86)" />
        <ellipse cx="103" cy="47" rx="13" ry="33" transform="rotate(22 103 47)" />
        <ellipse cx="80" cy="181" rx="12" ry="33" transform="rotate(65 80 181)" />
        <ellipse cx="110" cy="148" rx="12" ry="32" transform="rotate(72 110 148)" />
        <ellipse cx="122" cy="193" rx="12" ry="31" transform="rotate(70 122 193)" />
      </g>
      <g fill="#d6a341">
        {[0,1,2,3].map((i) => <g key={i} transform={`translate(${35+i*28},${18+i*12})`}>
          <rect x="0" y="0" width="30" height="34" rx="5" />
          <path d="M5 34 Q15 52 25 34" fill="#c98565"/>
        </g>)}
      </g>
    </svg>
  );
}

function GaneshaMark() {
  return (
    <svg className="ganesha" viewBox="0 0 100 100" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M50 14c-8 4-13 12-13 21 0 7 4 12 10 14" />
        <path d="M50 14c8 4 13 12 13 21 0 7-4 12-10 14" />
        <path d="M38 34c-7-7-16-4-19 4 7 1 12 5 16 11" />
        <path d="M62 34c7-7 16-4 19 4-7 1-12 5-16 11" />
        <path d="M50 42c-8 0-13 7-13 15 0 12 8 19 13 19s13-7 13-19c0-8-5-15-13-15Z" />
        <path d="M50 50c-6 5-8 11-5 17 2 4 7 6 11 2 4-4 2-11-6-19Z" />
        <path d="M34 75c-7 3-12 7-14 13 11 1 19-1 25-6" />
        <path d="M66 75c7 3 12 7 14 13-11 1-19-1-25-6" />
        <path d="M44 29h12M47 22h6" />
      </g>
    </svg>
  );
}

function SectionHeading({ children, dark = false }) {
  return <h2 className={`section-title ${dark ? "dark" : ""}`}>{children}</h2>;
}

function App() {
  const countdown = useCountdown(EVENT);
  const [muted, setMuted] = useState(true);
  const [scheduleIndex, setScheduleIndex] = useState(0);
  const [name, setName] = useState("");
  const [wish, setWish] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const schedule = useMemo(() => [
    { title: "pooja", time: "9:45 am", icon: "🪔", note: "A sacred beginning to the celebrations." },
    { title: "house warming", time: "11:00 am", icon: "🏡", note: "Join us as we step into our new home." },
    { title: "lunch", time: "12:30 pm", icon: "🌿", note: "Good food, good company and warm memories." }
  ], []);

  const current = schedule[scheduleIndex];

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const submitWish = (e) => {
    e.preventDefault();
    if (!name.trim() || !wish.trim()) return;
    setSubmitted(true);
  };
  const wishes = [
  {
    name: "Chirag",
    message:
      "Congratulations on this wonderful milestone! May your new home be blessed with happiness, peace, prosperity, and love. Wishing your family countless beautiful moments and cherished memories together.",
  },
  {
    name: "Adarsh",
    message:
      "Wishing you and your family a beautiful new beginning in your new home. May every corner be filled with happiness, laughter, peace and countless wonderful memories.",
  },
  {
    name: "Ramesh",
    message:
      "Heartiest congratulations on your new home! May this house always be filled with love, prosperity, positivity and togetherness. Wishing you many happy years ahead.",
  },
];

const [wishIndex, setWishIndex] = useState(0);

const currentWish = wishes[wishIndex];

  return (
    <div className="site">
      <header className="nav">
        <button className="nav-link active" onClick={() => scrollTo("home")}>Home</button>
        <button className="nav-link" onClick={() => scrollTo("wishes")}>Gallery</button>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-wash" />
          <FloralCorner />
          <FloralCorner flip />
          <div className="marigold-row left-row">{Array.from({length:5}).map((_,i)=><span key={i} className="marigold">🌼</span>)}</div>
          <div className="marigold-row right-row">{Array.from({length:5}).map((_,i)=><span key={i} className="marigold">🌼</span>)}</div>

          <div className="hero-content">
            <p className="eyebrow">Inviting you to The House Warming Ceremony of</p>
            <h1>Aradhya Nilayam</h1>
            <p className="date">6 <span>|</span> September <span>|</span> 2026</p>
            <button className="pill-button" onClick={() => window.open("https://www.google.com/maps/search/?api=1&query=Bengaluru%2C%20Karnataka", "_blank")}>
              Open in Maps
            </button>
          </div>

          <div className="hero-lamp">🪔</div>
          <div className="hero-bottom-foliage">
            <span>🌿</span><span>🌿</span><span>🌿</span>
          </div>
          <div className="floating-actions">
            <button aria-label="Call" onClick={() => window.location.href="tel:+919999999999"}><Phone size={18}/></button>
            <button aria-label="Toggle sound" onClick={() => setMuted(v => !v)}>{muted ? <VolumeX size={18}/> : <Volume2 size={18}/>}</button>
          </div>
          <button className="down" onClick={() => scrollTo("countdown")}><ChevronDown size={22}/></button>
        </section>

        <section id="countdown" className="dark-section countdown-section">
          <SectionHeading dark>Welcome to our home</SectionHeading>
          <div className="countdown">
            {[
              ["days", countdown.days],
              ["hrs", countdown.hrs],
              ["mins", countdown.mins],
              ["secs", countdown.secs],
            ].map(([label, value]) => (
              <div className="counter" key={label}>
                <strong>{String(value).padStart(2, "0")}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="dark-section invitation-section">
          <div className="mandala"><GaneshaMark /></div>
          <p className="quote">“Together with their families, we cordially invite<br/>you to celebrate the housewarming ceremony.”</p>
        </section>

        <section className="dark-section details-section">
          <div className="details-inner">
            <GaneshaMark />
            <div className="detail-buttons">
              <button className="light-pill" onClick={() => window.open("https://www.google.com/maps/search/?api=1&query=Bengaluru%2C%20Karnataka", "_blank")}>Open in Maps</button>
              <button className="outline-pill" onClick={() => window.location.href="tel:+919999999999"}>Contact Host</button>
            </div>
          </div>
        </section>

        <section className="schedule-wrap">
          <div className="scallop-top" />
          <SectionHeading>Schedule</SectionHeading>
          <div className="schedule-controls">
            <button onClick={() => setScheduleIndex((scheduleIndex - 1 + schedule.length) % schedule.length)} aria-label="Previous"><ArrowLeft size={22}/></button>
            <button onClick={() => setScheduleIndex((scheduleIndex + 1) % schedule.length)} aria-label="Next"><ArrowRight size={22}/></button>
          </div>
          <div className="schedule-card" key={scheduleIndex}>
            <p className="schedule-name">{current.title}</p>
            <p className="schedule-time">{current.time}</p>
            <div className="schedule-icon">{current.icon}</div>
            <p className="schedule-note">{current.note}</p>
          </div>
          <div className="leaf-decor left">🌿</div>
          <div className="leaf-decor right">🌿</div>
          <div className="scallop-bottom" />
        </section>

        <section id="wishes" className="wishes dark-section">
          <SectionHeading dark>Heartfelt Wishes from family and friends</SectionHeading>
          <div className="wishes-grid">
            <div className="message-card" key={wishIndex}>
  <div className="corner">❧</div>

  <h3>{currentWish.name}</h3>

  <p>{currentWish.message}</p>

  <div className="ornament">❧</div>

  <div className="wish-navigation">
    <button
      type="button"
      onClick={() =>
        setWishIndex((wishIndex - 1 + wishes.length) % wishes.length)
      }
      aria-label="Previous wish"
    >
      ←
    </button>

    <span>
      {wishIndex + 1} / {wishes.length}
    </span>

    <button
      type="button"
      onClick={() =>
        setWishIndex((wishIndex + 1) % wishes.length)
      }
      aria-label="Next wish"
    >
      →
    </button>
  </div>
</div>
            <form className="wish-form" onSubmit={submitWish}>
              <h3>Send your wishes</h3>
              <input value={name} onChange={e=>setName(e.target.value)} placeholder="Your Name" />
              <textarea value={wish} onChange={e=>setWish(e.target.value)} placeholder="Your Wish" rows="3" />
              <button type="button" className="ai-button" onClick={() => setWish("Wishing you a beautiful new beginning filled with happiness, prosperity and wonderful memories!")}>
                <Sparkles size={15}/> Generate AI wishes
              </button>
              <button className="submit-button" type="submit">Submit</button>
              {submitted && <p className="thanks">Thank you, {name} ✨</p>}
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
