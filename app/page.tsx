export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 flex flex-col gap-16">

      {/* Hero */}
      <section className="flex flex-col gap-6 text-center">
        <div className="inline-block mx-auto bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest">
          GDPR Compliance
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
          Scan Websites for{" "}
          <span className="text-[#58a6ff]">GDPR Cookie Violations</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto">
          Automatically crawl any website to detect undeclared cookies, missing consent banners, and compliance gaps — then get actionable fix recommendations.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Auditing — $15/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-[#8b949e] mt-2">
          <span>✓ Puppeteer-powered crawling</span>
          <span>✓ Consent banner detection</span>
          <span>✓ Detailed PDF reports</span>
          <span>✓ Cancel anytime</span>
        </div>
      </section>

      {/* Pricing */}
      <section className="flex flex-col items-center gap-6">
        <h2 className="text-2xl font-bold text-white">Simple Pricing</h2>
        <div className="w-full max-w-sm bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-white">Pro Plan</span>
            <span className="bg-[#58a6ff] text-[#0d1117] text-xs font-bold px-2 py-1 rounded">POPULAR</span>
          </div>
          <div className="flex items-end gap-1">
            <span className="text-5xl font-extrabold text-white">$15</span>
            <span className="text-[#8b949e] mb-2">/month</span>
          </div>
          <ul className="flex flex-col gap-3 text-sm text-[#c9d1d9]">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff] font-bold">✓</span> Unlimited website scans</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff] font-bold">✓</span> Cookie declaration audit</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff] font-bold">✓</span> Consent banner detection</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff] font-bold">✓</span> Actionable fix recommendations</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff] font-bold">✓</span> Downloadable compliance reports</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff] font-bold">✓</span> Priority email support</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="mt-2 bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg text-center transition-colors"
          >
            Get Started Now
          </a>
          <p className="text-xs text-[#8b949e] text-center">No contracts. Cancel anytime.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-white text-center">Frequently Asked Questions</h2>
        <div className="flex flex-col gap-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does the cookie audit work?</h3>
            <p className="text-[#8b949e] text-sm">Our bot uses Puppeteer to headlessly browse your website, intercept all cookies set before and after consent, and cross-reference them against declared cookie policies. It flags any undeclared or pre-consent cookies as violations.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What GDPR issues can it detect?</h3>
            <p className="text-[#8b949e] text-sm">It detects missing or non-functional consent banners, cookies set before user consent, undeclared third-party cookies, incorrect cookie lifetimes, and missing privacy policy links — all mapped to specific GDPR articles.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Who is this tool for?</h3>
            <p className="text-[#8b949e] text-sm">Marketing agencies managing multiple client websites and in-house compliance teams who need fast, reliable GDPR cookie audits without hiring a legal consultant for every scan.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] border-t border-[#30363d] pt-8">
        © {new Date().getFullYear()} GDPR Cookie Audit Bot. Built for compliance teams worldwide.
      </footer>
    </main>
  );
}
