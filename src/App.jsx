import React, { useEffect, useState } from "react";

/* ICONS */
const Scissors = ({className}) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/></svg>;
const Clock = ({className}) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const Calendar = ({className}) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18"/></svg>;

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* NAV */}
      <nav className={`fixed w-full z-50 transition ${isScrolled ? "bg-black/80 backdrop-blur py-4" : "py-6"}`}>
        <div className="max-w-6xl mx-auto flex justify-between px-6 items-center">
          <div className="flex items-center gap-2">
            <Scissors className="text-amber-500" />
            <span className="text-white font-bold tracking-widest">CROWN FADE</span>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="h-screen flex items-center justify-center text-center px-6">
        <div>
          <h1 className="text-5xl md:text-6xl text-white font-bold">
            Precision Cuts. Premium Experience.
          </h1>
          <p className="mt-4 text-zinc-400">
            React Vite version of your barbershop site
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl text-white mb-10">Services</h2>

        {[
          {title:"Executive Cut", price:"$45", time:"45 min"},
          {title:"Skin Fade", price:"$50", time:"60 min"},
          {title:"Beard Trim", price:"$25", time:"30 min"},
        ].map((s,i)=>(
          <div key={i} className="p-6 border border-white/10 rounded-xl mb-4">
            <div className="flex justify-between text-white">
              <h3>{s.title}</h3>
              <span className="text-amber-500">{s.price}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-zinc-400 mt-2">
              <Clock className="w-4 h-4"/> {s.time}
            </div>
          </div>
        ))}
      </section>

      {/* BOOKING */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <div className="p-8 border border-white/10 rounded-2xl">
          <h2 className="text-2xl text-white mb-6">Book Appointment</h2>

          <button
            className="bg-amber-500 text-black px-6 py-3 rounded-lg"
            onClick={()=>alert("Demo booking")}
          >
            Confirm Booking
          </button>
        </div>
      </section>
    </div>
  );
}
