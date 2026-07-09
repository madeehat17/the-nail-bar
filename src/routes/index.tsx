import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Star, MapPin, Phone, Clock, Instagram, MessageCircle, Sparkles, Scissors, Hand, Eye, Flower2, Crown, Menu, X } from "lucide-react";
import hero from "@/assets/hero.jpg";
import nails1 from "@/assets/nails-1.jpg";
import nails2 from "@/assets/nails-2.jpg";
import lashes from "@/assets/lashes.jpg";
import spa from "@/assets/spa.jpg";
import interior from "@/assets/interior.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Nail Bar Faisalabad — Nails, Lashes & Moroccan Hammam by Anisha" },
      { name: "description", content: "Faisalabad's premier nail bar. Acrylics, gel manicures, pedicures, eyelash extensions, Moroccan hammam, hair & bridal packages in Canal Garden." },
      { property: "og:title", content: "The Nail Bar Faisalabad" },
      { property: "og:description", content: "Luxury nails, lashes & spa in Canal Garden, Faisalabad." },
    ],
  }),
  component: Landing,
});

const nav = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#about", label: "About" },
  { href: "#visit", label: "Visit" },
];

const services = [
  { icon: Hand, title: "Nails", desc: "Acrylics, gel manicures, nail art, French tips, nail repair & quick polish changes.", items: ["Acrylic Extensions", "Gel Manicure", "Nail Art & Add-Ons", "French Polish", "Nail Repair"] },
  { icon: Eye, title: "Lashes & Brows", desc: "Classic, hybrid & volume lash extensions, brow threading and shaping.", items: ["Classic Lashes", "Volume Lashes", "Eyebrow Threading", "Brow Tinting"] },
  { icon: Flower2, title: "Spa & Hammam", desc: "Authentic Moroccan hammam, body massages, foot massages and full spa rituals.", items: ["Moroccan Hammam", "Body Massage", "Foot Massage", "Back Massage"] },
  { icon: Scissors, title: "Hair & Makeup", desc: "Haircuts, blow-drys, professional makeup and complete bridal styling.", items: ["Hair Cut", "Blow Dry", "Makeup", "Bridal Packages"] },
  { icon: Sparkles, title: "Waxing & Face", desc: "Full body waxing, facial treatments and threading for a flawless finish.", items: ["Full Body Wax", "Facial", "Threading", "Piercing"] },
  { icon: Crown, title: "Events & Bridal", desc: "Bespoke packages for brides, bridal showers, birthdays and corporate events.", items: ["Bridal Packages", "Bridal Shower", "Birthday Party", "Corporate Event"] },
];

const reviews = [
  { name: "Mayda Rubab", text: "Had my nail acrylics done by Maryum and I'm honestly so happy with her! She did an amazing job — neat, beautiful, and exactly what I wanted. Areej and Maya did my mani-pedi so beautifully — professional, gentle and detail-oriented.", rating: 5 },
  { name: "Sana Malik", text: "Their Turkish hammam is a game-changer — left my skin feeling so soft and nice. The ambience and staff were both wonderful.", rating: 5 },
  { name: "Ayesha Khan", text: "Showed them any design and they nailed it — I absolutely loved it. The nail art is by far the best I've had in Faisalabad.", rating: 5 },
  { name: "Zara Ali", text: "Brought my kids here for haircuts. I loved the patience and care they received. Great haircuts, happy kids, and a relaxing experience for me too.", rating: 5 },
];

function Landing() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="font-display text-2xl font-semibold tracking-tight">The Nail Bar</span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Faisalabad</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {nav.map(n => <a key={n.href} href={n.href} className="text-foreground/70 hover:text-primary transition">{n.label}</a>)}
          </nav>
          <a href="tel:+923213844440" className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm shadow-soft hover:opacity-90 transition">
            <Phone className="size-4" /> Book Now
          </a>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur px-5 py-4 space-y-3">
            {nav.map(n => <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block py-1 text-foreground/80">{n.label}</a>)}
            <a href="tel:+923213844440" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm">
              <Phone className="size-4" /> 0321 3844440
            </a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="pt-16 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-background/60 backdrop-blur px-3 py-1 text-xs tracking-wider uppercase text-foreground/70 border border-border/60">
              <Sparkles className="size-3.5 text-primary" /> By Anisha · Est. Faisalabad
            </div>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl leading-[1.05] font-medium">
              Beauty, <em className="text-gradient-gold not-italic">crafted</em> to perfection.
            </h1>
            <p className="mt-6 text-lg text-foreground/70 max-w-lg">
              Faisalabad's beloved destination for luxury nails, lashes, hair and authentic Moroccan hammam — where every visit feels like a ritual.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#services" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-medium shadow-luxe hover:opacity-90 transition">
                Explore Services
              </a>
              <a href="https://wa.me/923213844440" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 backdrop-blur px-7 py-3.5 text-sm font-medium hover:bg-background transition">
                <MessageCircle className="size-4" /> WhatsApp
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="size-4 fill-accent text-accent" />)}
                <span className="ml-1 font-medium">4.4</span>
                <span className="text-muted-foreground">· 164 reviews</span>
              </div>
              <div className="h-4 w-px bg-border" />
              <span className="text-muted-foreground">Walk-ins only</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-gold rounded-[2rem] opacity-20 blur-2xl" />
            <img src={hero} alt="Elegant manicured nails" width={1600} height={1200}
              className="relative rounded-[2rem] shadow-luxe object-cover aspect-[4/5] w-full" />
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-luxe px-5 py-4 border border-border/60">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Opens at</div>
              <div className="font-display text-xl">11:30 am</div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee strip */}
      <div className="border-y border-border bg-card/60 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span>Nail Art</span><span className="text-accent">✦</span>
          <span>Gel Manicure</span><span className="text-accent">✦</span>
          <span>Lash Extensions</span><span className="text-accent">✦</span>
          <span>Moroccan Hammam</span><span className="text-accent">✦</span>
          <span>Bridal Packages</span><span className="text-accent">✦</span>
          <span>Hair & Makeup</span>
        </div>
      </div>

      {/* Services */}
      <section id="services" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Our Services</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-medium">Everything you need, under one roof.</h2>
            <p className="mt-4 text-foreground/70">From a quick polish change to a full bridal transformation — our trained technicians deliver salon-grade results every single visit.</p>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(s => (
              <article key={s.title} className="group rounded-3xl border border-border bg-card p-7 hover:shadow-luxe transition-all duration-300 hover:-translate-y-1">
                <div className="size-12 rounded-2xl bg-gradient-hero flex items-center justify-center mb-5 group-hover:scale-110 transition">
                  <s.icon className="size-5 text-primary" />
                </div>
                <h3 className="font-display text-2xl">{s.title}</h3>
                <p className="mt-2 text-sm text-foreground/70">{s.desc}</p>
                <ul className="mt-5 space-y-1.5">
                  {s.items.map(it => (
                    <li key={it} className="text-sm text-foreground/80 flex items-center gap-2">
                      <span className="size-1 rounded-full bg-accent" /> {it}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Signature treatment */}
      <section className="py-24 bg-card/60 border-y border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <img src={spa} alt="Moroccan Hammam interior" loading="lazy" width={900} height={900}
              className="rounded-[2rem] shadow-luxe object-cover aspect-square w-full" />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Signature Ritual</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-medium">The Moroccan Hammam.</h2>
            <p className="mt-5 text-foreground/70 text-lg">
              An ancient cleansing tradition reimagined in our private hammam. Steam, black soap, exfoliation and a rose-petal soak — leaving skin polished, softened and luminous.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {["60-minute private session","Imported Moroccan black soap & kessa","Rose-petal milk bath","Cooling herbal tea"].map(x => (
                <li key={x} className="flex items-start gap-3">
                  <span className="mt-1.5 size-1.5 rounded-full bg-gradient-gold" /> {x}
                </li>
              ))}
            </ul>
            <a href="#visit" className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-medium shadow-soft hover:opacity-90 transition">
              Reserve your ritual
            </a>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary">Gallery</p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl font-medium">Our recent work.</h2>
            </div>
            <a href="https://www.instagram.com/thenailbarbyanishafsd" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
              <Instagram className="size-4" /> @thenailbarbyanishafsd
            </a>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src={nails1} alt="French nail art with gold accents" loading="lazy" width={900} height={900} className="rounded-2xl object-cover aspect-square w-full hover:scale-[1.02] transition-transform duration-500" />
            <img src={lashes} alt="Eyelash extensions" loading="lazy" width={900} height={900} className="rounded-2xl object-cover aspect-square w-full hover:scale-[1.02] transition-transform duration-500 row-span-2 h-full" />
            <img src={interior} alt="Salon interior" loading="lazy" width={1600} height={1000} className="rounded-2xl object-cover aspect-square w-full hover:scale-[1.02] transition-transform duration-500 col-span-2" />
            <img src={nails2} alt="Nail polish collection" loading="lazy" width={900} height={900} className="rounded-2xl object-cover aspect-square w-full hover:scale-[1.02] transition-transform duration-500" />
            <img src={spa} alt="Hammam spa" loading="lazy" width={900} height={900} className="rounded-2xl object-cover aspect-square w-full hover:scale-[1.02] transition-transform duration-500" />
            <img src={hero} alt="Manicured hand" loading="lazy" width={1600} height={1200} className="rounded-2xl object-cover aspect-square w-full hover:scale-[1.02] transition-transform duration-500" />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-24 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Loved by Faisalabad</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-medium">What our clients say.</h2>
            <div className="mt-6 inline-flex items-center gap-2">
              {[...Array(5)].map((_, i) => <Star key={i} className="size-5 fill-accent text-accent" />)}
              <span className="ml-2 font-medium">4.4 / 5</span>
              <span className="text-muted-foreground">· 164 Google reviews</span>
            </div>
          </div>
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {reviews.map(r => (
              <figure key={r.name} className="rounded-3xl bg-card p-8 shadow-soft border border-border/60">
                <div className="flex gap-1 mb-4">
                  {[...Array(r.rating)].map((_, i) => <Star key={i} className="size-4 fill-accent text-accent" />)}
                </div>
                <blockquote className="text-foreground/80 leading-relaxed">"{r.text}"</blockquote>
                <figcaption className="mt-5 font-display text-lg">— {r.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">About</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-medium">A nail bar like no other in Faisalabad.</h2>
            <p className="mt-6 text-foreground/70 text-lg">
              Founded by Anisha, The Nail Bar Faisalabad set out to bring international salon standards to the heart of Canal Garden. Today we're a 3,100+ strong community on Instagram and Faisalabad's go-to for nails, lashes and spa rituals.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div><div className="font-display text-3xl text-primary">164+</div><div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Reviews</div></div>
              <div><div className="font-display text-3xl text-primary">3.1K</div><div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Followers</div></div>
              <div><div className="font-display text-3xl text-primary">30+</div><div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Services</div></div>
            </div>
          </div>
          <div className="relative">
            <img src={interior} alt="The Nail Bar interior" loading="lazy" width={1600} height={1000} className="rounded-[2rem] shadow-luxe object-cover aspect-[5/4] w-full" />
          </div>
        </div>
      </section>

      {/* Visit / CTA */}
      <section id="visit" className="py-24 bg-card/60 border-t border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Visit Us</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-medium">Walk in. Glow out.</h2>
            <p className="mt-5 text-foreground/70">We're a walk-ins-only salon — stop by during business hours and our team will take care of the rest.</p>
            <ul className="mt-10 space-y-5">
              <li className="flex items-start gap-4">
                <MapPin className="size-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <div className="font-medium">Chak #203 West Canal Road</div>
                  <div className="text-sm text-muted-foreground">Near Faisal Garden, Canal Garden, Faisalabad 38000</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="size-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <a href="tel:+923213844440" className="font-medium hover:text-primary">0321 3844440</a>
                  <div className="text-sm text-muted-foreground">Call or WhatsApp</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Clock className="size-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <div className="font-medium">Opens at 11:30 am</div>
                  <div className="text-sm text-muted-foreground">Open daily · Walk-ins only</div>
                </div>
              </li>
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="https://wa.me/923213844440" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm shadow-soft hover:opacity-90 transition">
                <MessageCircle className="size-4" /> WhatsApp
              </a>
              <a href="https://www.google.com/maps/search/?api=1&query=The+Nail+Bar+Faisalabad+Canal+Garden" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm hover:bg-secondary transition">
                <MapPin className="size-4" /> Directions
              </a>
              <a href="https://www.instagram.com/thenailbarbyanishafsd" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm hover:bg-secondary transition">
                <Instagram className="size-4" /> Instagram
              </a>
            </div>
          </div>
          <div className="rounded-[2rem] overflow-hidden shadow-luxe border border-border min-h-[400px]">
            <iframe
              title="Map of The Nail Bar Faisalabad"
              src="https://www.google.com/maps?q=Canal+Garden+Faisalabad&output=embed"
              width="100%"
              height="100%"
              className="w-full h-full min-h-[400px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 flex flex-col md:flex-row gap-4 justify-between items-center text-sm text-muted-foreground">
          <div>
            <span className="font-display text-lg text-foreground">The Nail Bar Faisalabad</span>
            <span className="ml-2">· by Anisha</span>
          </div>
          <div>© {new Date().getFullYear()} The Nail Bar Faisalabad. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
