import {
  ArrowLeft,
  Smartphone,
  Wifi,
  WifiOff,
  Database,
  BarChart3,
  ShoppingCart,
  Users,
  Sprout,
  Bot,
  QrCode,
  CheckCircle,
} from "lucide-react";

const timeline = [
  {
    phase: "Discovery",
    title: "Understanding the cooperative",
    text: "Lahuen is a workers' cooperative producing artisanal goods. They managed stock with spreadsheets, tracked clients on paper, and had zero visibility into production cycles. Everything happened on their phones — no office, no desktops.",
  },
  {
    phase: "Architecture",
    title: "Mobile-first, offline-capable PWA",
    text: "We chose a vanilla TypeScript PWA with Firebase — no heavy frameworks, instant load on 3G, installable on any phone. Firestore's offline persistence means the app works at outdoor fairs with no signal, syncing automatically when connectivity returns.",
  },
  {
    phase: "Core modules",
    title: "Stock, CRM, POS — unified",
    text: "A real-time stock dashboard with lot tracking (FEFO expiry management), integrated CRM for client prospecting and follow-ups, and a touch-optimized Point of Sale that generates payment links — all sharing the same data layer with live sync across devices.",
  },
  {
    phase: "Production",
    title: "From seed to shelf",
    text: "A production module tracks every batch from planting to harvest, with estimated yield, loss tracking, and automatic graduation into stock lots when harvested. Upcoming harvests feed into the team's shared agenda.",
  },
  {
    phase: "AI Assistant",
    title: "Gemini-powered copilot",
    text: "An AI assistant with full context of the cooperative's data — stock levels, expiring lots, pending client follow-ups, active crops — helps the team make decisions and answer questions in natural language.",
  },
  {
    phase: "Payments",
    title: "QR payments at the fair",
    text: "After each sale, the POS generates a payment modal with the exact amount, a WhatsApp share button for sending payment details, and QR code for quick transfers — optimized for the reality of selling at street fairs.",
  },
];

const techStack = [
  { name: "TypeScript", desc: "Vanilla, no framework overhead" },
  { name: "Firebase", desc: "Auth, Firestore, Cloud Functions" },
  { name: "Vite", desc: "Fast builds, PWA plugin" },
  { name: "Firestore", desc: "Real-time sync + offline persistence" },
  { name: "Gemini AI", desc: "Context-aware business assistant" },
  { name: "Mercado Pago", desc: "Payment link generation" },
];

const results = [
  { metric: "5", label: "Unified modules", sub: "Stock, POS, CRM, Production, Audit" },
  { metric: "0", label: "Frameworks", sub: "Vanilla TS — fast on any device" },
  { metric: "100%", label: "Mobile", sub: "PWA installable, works offline" },
  { metric: "<1s", label: "Load time", sub: "Instant on 3G connections" },
];

export default function CaseLahuen() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-800 bg-gray-900/95 backdrop-blur sticky top-0 z-50">
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.location.hash = ""; }}
          className="flex items-center gap-2 text-gray-300 hover:text-red-400 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <img src="/enso.png" alt="Logo" className="h-8 w-8" />
          <span className="text-xl font-bold text-white">Kaizen</span>
        </a>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-green-900">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <span className="inline-block border border-green-400 text-green-400 rounded px-2 py-1 text-xs font-semibold mb-4">
              Case Study
            </span>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white mb-4">
              Lahuen Cooperative: from spreadsheets to a unified digital platform
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mb-8">
              How we built a mobile-first PWA that manages stock, sales, CRM, production, and payments
              for a workers' cooperative — designed to work at street fairs with no internet.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Smartphone, text: "Mobile-first PWA" },
                { icon: WifiOff, text: "Offline-capable" },
                { icon: Database, text: "Real-time sync" },
                { icon: Bot, text: "AI assistant" },
              ].map(({ icon: Icon, text }) => (
                <span key={text} className="flex items-center gap-2 bg-gray-800 border border-gray-700 rounded-full px-3 py-1 text-sm text-gray-300">
                  <Icon className="h-4 w-4 text-green-400" />
                  {text}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Challenge */}
        <section className="w-full py-12 md:py-20 bg-gray-800">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <span className="inline-block border border-red-400 text-red-400 rounded px-2 py-1 text-xs font-semibold mb-4">
              The Challenge
            </span>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl text-white mb-6">
              A cooperative running on paper and WhatsApp
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: BarChart3, title: "No stock visibility", text: "Inventory tracked in spreadsheets, with no lot control, expiry alerts, or real-time updates across the team." },
                { icon: Users, title: "Disconnected sales process", text: "Client prospecting on paper, no follow-up tracking, and manual price lookups at every fair." },
                { icon: Sprout, title: "Blind production cycles", text: "No way to track what's planted, when it'll be ready, or how much was actually harvested vs. estimated." },
                { icon: ShoppingCart, title: "Cash-only at fairs", text: "No quick way to share payment details with customers wanting to transfer via Mercado Pago." },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="bg-gray-900 border border-gray-700 rounded-xl p-6">
                  <Icon className="h-8 w-8 text-red-400 mb-3" />
                  <h3 className="text-white font-semibold mb-2">{title}</h3>
                  <p className="text-gray-400 text-sm">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="w-full py-12 md:py-20 bg-gray-900">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <span className="inline-block border border-red-400 text-red-400 rounded px-2 py-1 text-xs font-semibold mb-4">
              The Journey
            </span>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl text-white mb-10">
              Building it step by step
            </h2>
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-4 md:gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-red-600 text-white text-sm font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </div>
                    {i < timeline.length - 1 && <div className="w-px flex-1 bg-gray-700 mt-2" />}
                  </div>
                  <div className="pb-8">
                    <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">{item.phase}</span>
                    <h3 className="text-white font-semibold text-lg mt-1 mb-2">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key decisions */}
        <section className="w-full py-12 md:py-20 bg-gray-800">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <span className="inline-block border border-red-400 text-red-400 rounded px-2 py-1 text-xs font-semibold mb-4">
              Key Decisions
            </span>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl text-white mb-8">
              Why we built it this way
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "Why vanilla TypeScript instead of React or Vue?",
                  a: "The cooperative's team uses low-end phones on mobile data. Every KB matters. A vanilla TS app with innerHTML rendering and lazy-loaded modules keeps the initial bundle under 130KB gzipped — faster than any framework-based alternative.",
                },
                {
                  q: "Why Firebase instead of a traditional backend?",
                  a: "Zero server management, built-in auth (Google sign-in), real-time listeners that keep every team member's screen in sync, and offline persistence out of the box. For a small cooperative, the free tier covers everything.",
                },
                {
                  q: "Why lot-level pricing instead of just product pricing?",
                  a: "Each harvest or purchase batch can have different costs. More importantly, lot-level pricing enables liquidation — marking down lots that are close to expiring to rotate stock faster, a critical feature for perishable goods.",
                },
                {
                  q: "Why PWA instead of a native app?",
                  a: "No app store friction, instant updates on deploy, works on any phone with a browser. The service worker caches the app for offline use, and Firestore queues writes until connectivity returns — perfect for outdoor fairs with spotty signal.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="bg-gray-900 border border-gray-700 rounded-xl p-6">
                  <h3 className="text-white font-semibold mb-2">{q}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech stack */}
        <section className="w-full py-12 md:py-20 bg-gray-900">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <span className="inline-block border border-red-400 text-red-400 rounded px-2 py-1 text-xs font-semibold mb-4">
              Tech Stack
            </span>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {techStack.map(({ name, desc }) => (
                <div key={name} className="bg-gray-800 border border-gray-700 rounded-xl p-4 text-center">
                  <div className="text-white font-semibold">{name}</div>
                  <div className="text-gray-400 text-xs mt-1">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="w-full py-12 md:py-20 bg-gray-800">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <span className="inline-block border border-red-400 text-red-400 rounded px-2 py-1 text-xs font-semibold mb-4">
              Results
            </span>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl text-white mb-8">
              What we delivered
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {results.map(({ metric, label, sub }) => (
                <div key={label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-red-400">{metric}</div>
                  <div className="text-white font-semibold text-sm mt-1">{label}</div>
                  <div className="text-gray-400 text-xs mt-1">{sub}</div>
                </div>
              ))}
            </div>
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-4">Modules delivered</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { icon: BarChart3, text: "Real-time stock dashboard with lot health tracking" },
                  { icon: ShoppingCart, text: "Touch-optimized POS with FEFO lot selection" },
                  { icon: Users, text: "CRM with prospecting, follow-ups, and sales funnel" },
                  { icon: Sprout, text: "Production tracking from planting to harvest" },
                  { icon: QrCode, text: "Payment modal with WhatsApp sharing and QR" },
                  { icon: Bot, text: "AI assistant with full business context" },
                  { icon: Wifi, text: "Offline-first PWA with background sync" },
                  { icon: Database, text: "Complete audit trail of all operations" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-green-400 shrink-0" />
                    <span className="text-gray-300 text-sm">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-12 md:py-20 bg-gradient-to-r from-red-900 via-red-800 to-gray-900">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl text-white mb-4">
              Need something like this for your business?
            </h2>
            <p className="text-gray-200 mb-6 max-w-lg mx-auto">
              We build lean, purpose-built software that solves real problems.
              No bloat, no unnecessary complexity — just what you need.
            </p>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.location.hash = ""; setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 100); }}
              className="inline-flex items-center justify-center rounded-md bg-white text-red-900 hover:bg-gray-100 px-6 py-3 text-lg font-semibold transition-colors"
            >
              Get in touch
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full items-center px-4 md:px-6 border-t border-gray-800 bg-gray-900">
        <p className="text-xs text-gray-400">&copy; 2025 Kaizen IT Consulting. All rights reserved.</p>
      </footer>
    </div>
  );
}
