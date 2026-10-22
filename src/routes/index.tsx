import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
const siteCss = "/site.css";
import * as S from "../lib/site";
import akiya from "@/assets/akiya_yamanashi.jpg";
import machiya from "@/assets/machiya_alpine.jpg";
import heroFuji from "@/assets/hero_fuji.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison Kakehashi — Japan Property Consulting" },
      { name: "description", content: "Construction professional, Swiss resident, property owner in Japan. We bridge the gap between your European life and your Japanese property dream." },
      { property: "og:title", content: "Maison Kakehashi — Japan Property Consulting" },
      { property: "og:description", content: "Swiss precision, Japanese heritage. Buy your property in Japan from Europe." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#080A08" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400;1,600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Work+Sans:wght@200;300;400;500;600;700&display=swap" },
      { rel: "stylesheet", href: siteCss },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    S.initSite();
  }, []);

  return (
    <>

  {/*  AMBIENT REAL ESTATE WATERMARK BACKGROUND ("THERE BUT NOT THERE")  */}
  <div className="ambient-japan-canvas-bg" style={{ backgroundImage: `radial-gradient(circle at 50% 25%, rgba(16,24,18,0.35) 0%, rgba(7,9,7,0.88) 60%, rgba(7,9,7,0.98) 100%), url(${heroFuji})` }}></div>

  {/*  CURSOR AMBIENT SPOTLIGHT GLOW  */}
  <div className="cursor-ambient-spotlight" id="cursorSpotlight"></div>

  {/*  FIXED SITE HEADER OVERLAY (TAILLEURA IMMERSIVE ARCHITECTURE)  */}
  <header className="site-header-fixed" id="siteHeader">
    {/*  Top Slender Banner  */}
    <div className="top-banner" id="topBanner">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14"></path></svg>
      <span data-i18n="banner_text">Possibility of covering part of your notary fees* (*depending on the case)</span>
    </div>

    {/*  Borderless Glass Navbar  */}
    <nav className="navbar" id="navbar">
      <div className="nav-container">
        <a href="#intro" className="brand-logo">
          <div className="logo-symbol">
            <svg width="26" height="26" viewBox="0 0 100 100" fill="none">
              <line x1="28" y1="28" x2="28" y2="88" stroke="#D4AF37" strokeWidth="4.5" strokeLinecap="round" />
              <line x1="72" y1="28" x2="72" y2="88" stroke="#D4AF37" strokeWidth="4.5" strokeLinecap="round" />
              <path d="M12 28 C 30 20, 70 20, 88 28" stroke="#D4AF37" strokeWidth="6" strokeLinecap="round" />
              <line x1="20" y1="38" x2="80" y2="38" stroke="#D4AF37" strokeWidth="4" />
              <path d="M10 82 C 30 58, 70 58, 90 82" stroke="#F8F5EE" strokeWidth="4.5" strokeLinecap="round" />
            </svg>
          </div>
          <div className="logo-text-group">
            <span className="logo-main" data-i18n="logo_title">Maison Kakehashi</span>
            <span className="logo-sub" data-i18n="logo_sub">Japan Property Consulting</span>
          </div>
        </a>

        <ul className="nav-links">
          <li><a href="#intro" className="nav-link" data-i18n="nav_home">Home</a></li>
          <li><a href="#lifestyles" className="nav-link" data-i18n="nav_lifestyles">Projects</a></li>
          <li><a href="#services" className="nav-link" data-i18n="nav_services">Services</a></li>
          <li><a href="#story" className="nav-link" data-i18n="nav_story">My Story</a></li>
          <li><a href="#projects" className="nav-link" data-i18n="nav_projects">Case Studies</a></li>
          <li><a href="#contact" className="nav-link" data-i18n="nav_contact">Inquire</a></li>
          <li><a href="#faq" className="nav-link" data-i18n="nav_faq">FAQ</a></li>
        </ul>

        <div className="nav-actions">
          {/*  Language Switcher  */}
          <div className="lang-switcher">
            <button type="button" className="lang-btn active" data-lang="EN" onClick={(e) => S.setLanguage('EN')}>EN</button>
            <button type="button" className="lang-btn" data-lang="FR" onClick={(e) => S.setLanguage('FR')}>FR</button>
            <button type="button" className="lang-btn" data-lang="IT" onClick={(e) => S.setLanguage('IT')}>IT</button>
            <button type="button" className="lang-btn" data-lang="DE" onClick={(e) => S.setLanguage('DE')}>DE</button>
          </div>

          <a href="#contact" className="btn-glow btn-glow-primary nav-cta-desktop" data-i18n="nav_book_call">Book a Call</a>

          <button type="button" className="hamburger-btn" onClick={(e) => S.openMobileMenu()} aria-label="Open navigation menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </div>
    </nav>

    {/*  Scroll Progress Line  */}
    <div className="header-scroll-progress" id="scrollProgressLine"></div>
  </header>

  {/*  Mobile Drawer Overlay & Menu  */}
  <div className="mobile-drawer-overlay" id="mobileDrawerOverlay" onClick={(e) => S.closeMobileMenu()}></div>
  <div className="mobile-nav-drawer" id="mobileDrawer">
    <div className="mobile-drawer-header">
      <div className="brand-logo">
        <span className="logo-main">Maison Kakehashi</span>
      </div>
      <button type="button" className="mobile-close-btn" onClick={(e) => S.closeMobileMenu()} aria-label="Close menu">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
    </div>

    <ul className="mobile-nav-links">
      <li><a href="#intro" className="mobile-nav-link" onClick={(e) => S.closeMobileMenu()} data-i18n="nav_home">Home</a></li>
      <li><a href="#lifestyles" className="mobile-nav-link" onClick={(e) => S.closeMobileMenu()} data-i18n="nav_lifestyles">Projects</a></li>
      <li><a href="#services" className="mobile-nav-link" onClick={(e) => S.closeMobileMenu()} data-i18n="nav_services">Services</a></li>
      <li><a href="#story" className="mobile-nav-link" onClick={(e) => S.closeMobileMenu()} data-i18n="nav_story">My Story</a></li>
      <li><a href="#projects" className="mobile-nav-link" onClick={(e) => S.closeMobileMenu()} data-i18n="nav_projects">Case Studies</a></li>
      <li><a href="#contact" className="mobile-nav-link" onClick={(e) => S.closeMobileMenu()} data-i18n="nav_contact">Inquire</a></li>
      <li><a href="#faq" className="mobile-nav-link" onClick={(e) => S.closeMobileMenu()} data-i18n="nav_faq">FAQ</a></li>
    </ul>

    <div style={{"marginTop": "auto", "paddingTop": "24px"}}>
      <a href="#contact" className="btn-glow btn-glow-primary" onClick={(e) => S.closeMobileMenu()} style={{"width": "100%", "textAlign": "center"}} data-i18n="nav_book_call">Book a Call</a>
    </div>
  </div>

  <main>
    {/*  ======================================================================
         2. FULL-SCREEN SCROLLER SEQUENCE (158 FRAMES)
         TAILLEURA-STYLE 100% SCREEN-FILLING OPENING SCROLLER
         ======================================================================  */}
    <div className="scroll-sequence-runway" id="intro">
      <div className="scroll-sequence-sticky">

        {/*  158 Frames Dynamic Canvas  */}
        <canvas id="arborCanvas"></canvas>
        <div className="arbor-canvas-vignette"></div>

        {/*  Top Status Bar  */}
        <div className="arbor-scroller-status-bar">
          <span className="arbor-scroller-tag">01 · ARCHITECTURAL METAMORPHOSIS</span>
          <span className="arbor-scroller-progress-badge" id="frameProgressBadge">001 / 158</span>
        </div>

        {/*  CENTER SLIDES: JUST THE 3 WORDS  */}
        <div className="arbor-slides-container">
          {/*  Slide 1: ACQUIRE  */}
          <div className="arbor-slide active" id="slide1">
            <span className="arbor-slide-number">01 // PHASE ONE</span>
            <h1 className="arbor-slide-title">ACQUIRE</h1>
          </div>

          {/*  Slide 2: ARCHITECT  */}
          <div className="arbor-slide" id="slide2">
            <span className="arbor-slide-number">02 // PHASE TWO</span>
            <h1 className="arbor-slide-title">ARCHITECT</h1>
          </div>

          {/*  Slide 3: AWAKEN  */}
          <div className="arbor-slide" id="slide3">
            <span className="arbor-slide-number">03 // PHASE THREE</span>
            <h1 className="arbor-slide-title">AWAKEN</h1>
          </div>
        </div>

        {/*  Bottom Explore Indicator  */}
        <div className="arbor-scroll-explore" id="exploreIndicator">
          <span className="arbor-explore-text">Scroll to explore</span>
          <div className="arbor-vertical-line">
            <div className="arbor-vertical-runner"></div>
          </div>
        </div>

        {/*  Dots Navigation  */}
        <div className="arbor-scroller-dots">
          <div className="arbor-dot active" id="dot1"></div>
          <div className="arbor-dot" id="dot2"></div>
          <div className="arbor-dot" id="dot3"></div>
        </div>

      </div>
    </div>

    {/*  ======================================================================
         3. SECTION: BORDERLESS PHILOSOPHY (2-COLUMN EDITORIAL)
         ======================================================================  */}
    <section className="section-philosophy" id="philosophy">
      <div className="container">
        <div className="philosophy-grid">
          <div>
            <span className="kicker" data-i18n="hero_badge">Swiss Precision · Japanese Heritage</span>
            <h2 className="philosophy-headline" style={{"marginTop": "20px"}} data-i18n="hero_headline">
              Construction professional, Swiss resident, property owner in Japan
            </h2>
          </div>

          <div className="philosophy-body">
            <p className="philosophy-text" data-i18n="hero_subheadline">
              We bridge the gap between your European life and your Japanese property dream.
            </p>
            <p className="philosophy-text">
              Maison Kakehashi (かけはし — "the bridge") brings European standards of construction diligence, structural diagnostics, and legal clarity to remote real estate acquisition in Japan. From unlisted rural Kominka to alpine holiday homes.
            </p>

            <div className="philosophy-metrics-grid">
              <div className="metric-card glow-interactive">
                <span className="metric-val" data-i18n="hero_stat1_num">100%</span>
                <span className="metric-lbl" data-i18n="hero_stat1_lbl">Freehold Land & Property Ownership</span>
              </div>
              <div className="metric-card glow-interactive">
                <span className="metric-val" data-i18n="hero_stat2_num">Remote</span>
                <span className="metric-lbl" data-i18n="hero_stat2_lbl">Full Remote Acquisition from Europe</span>
              </div>
              <div className="metric-card glow-interactive">
                <span className="metric-val" data-i18n="hero_stat3_num">4</span>
                <span className="metric-lbl" data-i18n="hero_stat3_lbl">Languages Supported (EN · FR · IT · DE)</span>
              </div>
            </div>

            <div style={{"display": "flex", "gap": "16px", "marginTop": "14px", "flexWrap": "wrap"}}>
              <a href="#contact" className="btn-glow btn-glow-primary" data-i18n="hero_cta_call">Book a Discovery Call</a>
              <a href="#services" className="btn-glow btn-glow-outline" data-i18n="hero_cta_services">Explore Services</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/*  ======================================================================
         4. SECTION: BORDERLESS LIFESTYLES WITH INTERACTIVE GLOW
         ======================================================================  */}
    <section className="section-lifestyles" id="lifestyles">
      <div className="container">
        <div className="section-header-arbor">
          <span className="kicker" data-i18n="lifestyle_badge">Bespoke Portfolios</span>
          <h2 className="section-title-arbor" data-i18n="lifestyle_title">Your Project, Your Way</h2>
          <p className="section-sub-arbor" data-i18n="lifestyle_sub">
            Select your ideal scenario to explore tailored legal frameworks, tax considerations, and operational strategies.
          </p>
        </div>

        <div className="lifestyles-grid">
          {/*  Card 1  */}
          <div className="arbor-card glow-interactive" onClick={(e) => S.openLifestyleModal(1)}>
            <div>
              <div className="arbor-card-top">
                <span className="arbor-card-num">01 / 06</span>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
              </div>
              <h3 className="arbor-card-title" data-i18n="card1_title">A holiday home for you</h3>
              <div className="arbor-card-sub" data-i18n="card1_sub">Private sanctuary for tranquil escapes</div>
              <p className="arbor-card-desc" data-i18n="card1_desc">
                Escape European winters or summers in your own private sanctuary nestled near the Japanese Alps, hot springs, or tranquil bamboo valleys. Zero ongoing tenant obligations, just pure peace of mind.
              </p>
            </div>
            <div className="arbor-card-link">
              <span data-i18n="card_click_hint">View Roadmap →</span>
            </div>
          </div>

          {/*  Card 2  */}
          <div className="arbor-card glow-interactive" onClick={(e) => S.openLifestyleModal(2)}>
            <div>
              <div className="arbor-card-top">
                <span className="arbor-card-num">02 / 06</span>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line></svg>
              </div>
              <h3 className="arbor-card-title" data-i18n="card2_title">A holiday home rented out while away</h3>
              <div className="arbor-card-sub" data-i18n="card2_sub">Balanced lifestyle and revenue generation</div>
              <p className="arbor-card-desc" data-i18n="card2_desc">
                Enjoy your Japanese residence whenever you wish, and let trusted local management rent it legally during your absence to offset maintenance, taxes, and generate returns.
              </p>
            </div>
            <div className="arbor-card-link">
              <span data-i18n="card_click_hint">View Roadmap →</span>
            </div>
          </div>

          {/*  Card 3  */}
          <div className="arbor-card glow-interactive" onClick={(e) => S.openLifestyleModal(3)}>
            <div>
              <div className="arbor-card-top">
                <span className="arbor-card-num">03 / 06</span>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              </div>
              <h3 className="arbor-card-title" data-i18n="card3_title">Short-term rental investment*</h3>
              <div className="arbor-card-sub" data-i18n="card3_sub">Minpaku license & hospitality yields</div>
              <p className="arbor-card-desc" data-i18n="card3_desc">
                Capitalize on Japan's booming tourism through fully compliant Airbnb / Minpaku hospitality homes. Rigorous fire-code certification and 180-day regulatory navigation.
              </p>
            </div>
            <div className="arbor-card-link">
              <span data-i18n="card_click_hint">View Roadmap →</span>
            </div>
          </div>

          {/*  Card 4  */}
          <div className="arbor-card glow-interactive" onClick={(e) => S.openLifestyleModal(4)}>
            <div>
              <div className="arbor-card-top">
                <span className="arbor-card-num">04 / 06</span>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
              </div>
              <h3 className="arbor-card-title" data-i18n="card4_title">Long-term rental investment</h3>
              <div className="arbor-card-sub" data-i18n="card4_sub">Predictable cash flow with local tenants</div>
              <p className="arbor-card-desc" data-i18n="card4_desc">
                Stable, passive income targeting Japanese professionals or families. High occupancy, low turnover, and full management delegation without day-to-day hassles.
              </p>
            </div>
            <div className="arbor-card-link">
              <span data-i18n="card_click_hint">View Roadmap →</span>
            </div>
          </div>

          {/*  Card 5  */}
          <div className="arbor-card glow-interactive" onClick={(e) => S.openLifestyleModal(5)}>
            <div>
              <div className="arbor-card-top">
                <span className="arbor-card-num">05 / 06</span>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
              </div>
              <h3 className="arbor-card-title" data-i18n="card5_title">Relocation or retirement project</h3>
              <div className="arbor-card-sub" data-i18n="card5_sub">A peaceful new chapter in Japan</div>
              <p className="arbor-card-desc" data-i18n="card5_desc">
                Prepare your long-term transition into the world's safest, most culturally refined country. Clean healthcare, thermal onsens, four distinct seasons, and welcoming local communities.
              </p>
            </div>
            <div className="arbor-card-link">
              <span data-i18n="card_click_hint">View Roadmap →</span>
            </div>
          </div>

          {/*  Card 6  */}
          <div className="arbor-card glow-interactive" onClick={(e) => S.openLifestyleModal(6)}>
            <div>
              <div className="arbor-card-top">
                <span className="arbor-card-num">06 / 06</span>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path></svg>
              </div>
              <h3 className="arbor-card-title" data-i18n="card6_title">A base for long stays</h3>
              <div className="arbor-card-sub" data-i18n="card6_sub">Digital nomads & creative sabbatical sanctuary</div>
              <p className="arbor-card-desc" data-i18n="card6_desc">
                Spend months writing, creating, or working remotely with gigabit fiber-optic connectivity and peaceful mountain views. High-speed rail connections to Tokyo within 90 minutes.
              </p>
            </div>
            <div className="arbor-card-link">
              <span data-i18n="card_click_hint">View Roadmap →</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/*  ======================================================================
         5. SECTION: SERVICES & TRANSPARENT PRICING
         ======================================================================  */}
    <section className="section-services" id="services">
      <div className="container">
        <div className="section-header-arbor">
          <span className="kicker" data-i18n="services_badge">Structured Advisory</span>
          <h2 className="section-title-arbor" data-i18n="services_title">Comprehensive Services & Transparent Fees</h2>
          <p className="section-sub-arbor" data-i18n="services_sub">
            No percentage surprises or opaque broker markups. Clear tiered consulting fees with aligned milestones.
          </p>
        </div>

        <div className="services-split-grid">
          {/*  SERVICE 1: Purchase Support  */}
          <div className="service-card-arbor glow-interactive">
            <span className="kicker" data-i18n="srv1_badge">SERVICE 1 — FULL BUYING MANDATE</span>
            <h3 className="heading-display" style={{"fontSize": "1.85rem", "margin": "12px 0 16px 0"}} data-i18n="srv1_title">
              End-to-End Purchase Support
            </h3>
            <p style={{"color": "var(--text-muted)", "fontSize": "0.95rem", "lineHeight": "1.6"}} data-i18n="srv1_sub">
              From initial listing discovery to remote title deed registration at the Japanese Legal Affairs Bureau.
            </p>

            <table className="pricing-table-arbor">
              <thead>
                <tr>
                  <th data-i18n="srv1_table_prop">Property Price</th>
                  <th className="fee-col" data-i18n="srv1_table_fee">Consulting Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-i18n="srv1_tier1_range">€0 – €10,000</td>
                  <td className="fee-col" data-i18n="srv1_tier1_fee">€1,250</td>
                </tr>
                <tr>
                  <td data-i18n="srv1_tier2_range">€10,000 – €50,000</td>
                  <td className="fee-col" data-i18n="srv1_tier2_fee">€1,750</td>
                </tr>
                <tr>
                  <td data-i18n="srv1_tier3_range">Over €50,000</td>
                  <td className="fee-col" data-i18n="srv1_tier3_fee">€2,500</td>
                </tr>
              </tbody>
            </table>

            <div style={{"background": "rgba(212, 175, 55, 0.08)", "border": "1px solid rgba(212, 175, 55, 0.25)", "borderRadius": "var(--radius-sm)", "padding": "16px", "marginBottom": "20px"}}>
              <div style={{"fontSize": "0.75rem", "textTransform": "uppercase", "letterSpacing": "0.15em", "color": "var(--gold-light)"}} data-i18n="srv1_terms_title">Milestone Payment Terms</div>
              <div style={{"fontSize": "0.9rem", "color": "var(--text-cream)", "marginTop": "4px"}} data-i18n="srv1_terms_p1">
                <strong>35%</strong> on signing consulting mandate (Step 1 Search & Selection) · <strong>65%</strong> on property closing day (Step 2 Purchase)
              </div>
            </div>

            <a href="#contact" className="btn-glow btn-glow-primary" style={{"width": "100%"}} data-i18n="nav_book_call">
              Request Purchase Mandate
            </a>
          </div>

          {/*  SERVICE 2: Listing Check  */}
          <div className="service-card-arbor glow-interactive">
            <span className="kicker" data-i18n="srv2_badge">SERVICE 2 — PRE-PURCHASE AUDIT</span>
            <h3 className="heading-display" style={{"fontSize": "1.85rem", "margin": "12px 0 8px 0"}} data-i18n="srv2_title">
              Found a House Online?
            </h3>
            <p style={{"color": "var(--text-muted)", "fontSize": "0.92rem"}} data-i18n="srv2_sub">
              Have it checked by a construction professional before paying any deposit or contacting foreign agencies.
            </p>

            <div style={{"display": "flex", "alignItems": "baseline", "gap": "12px", "margin": "18px 0"}}>
              <div className="price-badge-fixed" data-i18n="srv2_price">€45</div>
              <span style={{"fontSize": "0.8rem", "color": "var(--gold-primary)", "textTransform": "uppercase", "letterSpacing": "0.15em"}} data-i18n="srv2_fee_lbl">Fixed Audit Fee</span>
            </div>

            <ul style={{"listStyle": "none", "display": "flex", "flexDirection": "column", "gap": "10px", "marginBottom": "24px", "fontSize": "0.88rem", "color": "var(--text-muted)"}}>
              <li style={{"display": "flex", "gap": "10px"}}><span style={{"color": "var(--gold-primary)"}}>✓</span> <span data-i18n="srv2_item1">Japanese document translation & listing decoding</span></li>
              <li style={{"display": "flex", "gap": "10px"}}><span style={{"color": "var(--gold-primary)"}}>✓</span> <span data-i18n="srv2_item2">Rebuilding rights audit (Building Standards Act Art. 42/43)</span></li>
              <li style={{"display": "flex", "gap": "10px"}}><span style={{"color": "var(--gold-primary)"}}>✓</span> <span data-i18n="srv2_item3">Construction year & Shin-Taishin seismic standards check</span></li>
              <li style={{"display": "flex", "gap": "10px"}}><span style={{"color": "var(--gold-primary)"}}>✓</span> <span data-i18n="srv2_item4">Municipal hazard map review (landslides, flood zones)</span></li>
              <li style={{"display": "flex", "gap": "10px"}}><span style={{"color": "var(--gold-primary)"}}>✓</span> <span data-i18n="srv2_item5">Real estate agency reliability & legal title verification</span></li>
            </ul>

            <form id="listingCheckForm" onSubmit={(e) => S.handleListingSubmit(e)}>
              <div style={{"marginBottom": "12px"}}>
                <input type="text" id="lcName" className="form-input-dark" required placeholder="Your Full Name" />
              </div>
              <div style={{"marginBottom": "12px"}}>
                <input type="email" id="lcEmail" className="form-input-dark" required placeholder="Your Email Address" />
              </div>
              <div style={{"marginBottom": "12px"}}>
                <input type="url" id="lcUrl" className="form-input-dark" required placeholder="Listing URL (Suumo, Athome, Instagram...)" />
              </div>
              <button type="submit" className="btn-glow btn-glow-primary" style={{"width": "100%"}} data-i18n="srv2_btn">
                Request €45 Verification
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    {/*  ======================================================================
         6. SECTION: MY STORY (JAMES LODER)
         ======================================================================  */}
    <section className="section-story" id="story">
      <div className="container">
        <div className="story-grid">
          <div>
            <div className="story-portrait-box glow-interactive">
              <img src={akiya} loading="lazy" alt="Akiya in Kōfu, Yamanashi" style={{"filter": "brightness(0.85) contrast(1.1)"}} />
              <div style={{"marginTop": "14px", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "fontSize": "0.75rem", "color": "var(--gold-primary)", "textTransform": "uppercase", "letterSpacing": "0.15em"}}>
                <span>James Loder</span>
                <span>Yamanashi, Japan</span>
              </div>
            </div>
          </div>

          <div>
            <span className="kicker" data-i18n="story_badge">FOUNDER PERSPECTIVE</span>
            <h2 className="heading-display" style={{"fontSize": "clamp(2.2rem, 3.8vw, 3.6rem)", "margin": "16px 0 24px 0"}} data-i18n="story_title">
              From European Construction to Japanese Property Owner
            </h2>

            <blockquote className="story-quote-italic" data-i18n="story_quote">
              "Buying property 10,000 km away shouldn't feel like a leap into the dark. It requires engineering rigor, linguistic precision, and local roots."
            </blockquote>

            <p style={{"color": "var(--text-muted)", "fontSize": "1rem", "lineHeight": "1.75", "marginBottom": "18px"}} data-i18n="story_p1">
              For over a decade, James worked on demanding European civil engineering sites as a crane operator across France, Belgium, Monaco, and Switzerland. Operating heavy machinery trained him in structural tolerances, seismic safety, and uncompromising technical scrutiny.
            </p>
            <p style={{"color": "var(--text-muted)", "fontSize": "1rem", "lineHeight": "1.75", "marginBottom": "24px"}} data-i18n="story_p4">
              When he bought his own heritage home in Kōfu, Yamanashi Prefecture entirely remotely from Europe, he navigated every legal, linguistic, and administrative hurdle himself. Maison Kakehashi (かけはし — "the bridge") was founded to make this journey straightforward, transparent, and legally secure for you.
            </p>

            <a href="#contact" className="btn-glow btn-glow-primary" data-i18n="nav_book_call">Schedule an Introduction</a>
          </div>
        </div>
      </div>
    </section>

    {/*  ======================================================================
         7. SECTION: CASE STUDIES
         ======================================================================  */}
    <section className="section-projects" id="projects">
      <div className="container">
        <div className="section-header-arbor">
          <span className="kicker" data-i18n="proj_badge">PORTFOLIO EXAMPLES</span>
          <h2 className="section-title-arbor" data-i18n="proj_title">My Projects & Client Projects</h2>
          <p className="section-sub-arbor" data-i18n="proj_sub">
            Every case is different. Selected acquisitions across diverse Japanese prefectures.
          </p>
        </div>

        <div className="projects-grid">
          {/*  Project 1  */}
          <div className="project-card-arbor glow-interactive">
            <div className="project-img-box">
              <img src={akiya} loading="lazy" alt="Yamanashi Akiya" />
            </div>
            <div className="project-body-arbor">
              <span className="kicker" style={{"fontSize": "0.7rem"}} data-i18n="proj1_loc">Yamanashi Prefecture (Near Mount Fuji)</span>
              <h3 className="heading-display" style={{"fontSize": "1.5rem", "margin": "10px 0 12px 0"}} data-i18n="proj1_title">
                The Founder's Personal Residence
              </h3>
              <p style={{"fontSize": "0.92rem", "color": "var(--text-muted)", "lineHeight": "1.6"}} data-i18n="proj1_desc">
                Traditional wooden house with authentic cedar post-and-beam construction, acquired remotely from Europe. Complete seismic check, structural reinforcement, and ongoing renovation into a modern Alpine retreat.
              </p>
            </div>
          </div>

          {/*  Project 2  */}
          <div className="project-card-arbor glow-interactive">
            <div className="project-img-box">
              <img src={machiya} loading="lazy" alt="Kyoto Countryside Residence" />
            </div>
            <div className="project-body-arbor">
              <span className="kicker" style={{"fontSize": "0.7rem"}} data-i18n="proj2_loc">Kyoto Foothills · Client Mandate</span>
              <h3 className="heading-display" style={{"fontSize": "1.5rem", "margin": "10px 0 12px 0"}} data-i18n="proj2_title">
                Century-Old Machiya Conversion
              </h3>
              <p style={{"fontSize": "0.92rem", "color": "var(--text-muted)", "lineHeight": "1.6"}} data-i18n="proj2_desc">
                Historic wooden townhouse converted into a licensed boutique vacation rental. Acquired 15% below municipal valuation with remote notarization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/*  ======================================================================
         8. SECTION: INQUIRE & LUXURY INTERACTIVE CALENDAR SCHEDULER
         ======================================================================  */}
    <section className="section-schedule" id="contact">
      <div className="container">
        <div className="section-header-arbor">
          <span className="kicker" data-i18n="contact_badge">CONCIERGE SCHEDULING</span>
          <h2 className="section-title-arbor" data-i18n="contact_title">Schedule Your Private Consultation</h2>
          <p className="section-sub-arbor" data-i18n="contact_sub">
            Direct 1-on-1 discovery call with James Loder · Swiss resident & Japanese property owner. Reserved evening & lunchtime slots (CET).
          </p>
        </div>

        <div className="schedule-app-container">
          {/*  Left Column: Scheduler Engine  */}
          <div className="schedule-card-arbor glow-interactive">
            <div style={{"fontSize": "0.75rem", "textTransform": "uppercase", "letterSpacing": "0.2em", "color": "var(--gold-primary)", "fontWeight": "700", "marginBottom": "12px"}}>
              Step 1 · Select Consultation Scope
            </div>

            <div className="schedule-types-row">
              <div className="stype-btn active" data-type="discovery" onClick={(e) => S.selectConsultationType('discovery', e.currentTarget)}>
                <span className="stype-dur">30 Min · Free</span>
                <div className="stype-title">Discovery Call</div>
                <div style={{"fontSize": "0.75rem", "color": "var(--text-dim)"}}>Initial feasibility, region advice, and remote purchase overview.</div>
              </div>

              <div className="stype-btn" data-type="audit" onClick={(e) => S.selectConsultationType('audit', e.currentTarget)}>
                <span className="stype-dur">45 Min · Audit</span>
                <div className="stype-title">Listing Review</div>
                <div style={{"fontSize": "0.75rem", "color": "var(--text-dim)"}}>In-depth review of a specific Suumo or Athome listing.</div>
              </div>

              <div className="stype-btn" data-type="renovation" onClick={(e) => S.selectConsultationType('renovation', e.currentTarget)}>
                <span className="stype-dur">45 Min · Works</span>
                <div className="stype-title">Renovation Scope</div>
                <div style={{"fontSize": "0.75rem", "color": "var(--text-dim)"}}>Structural surveys, cost estimations & artisan intro.</div>
              </div>
            </div>

            {/*  Calendar & Time Slots  */}
            <div className="cal-pickers-split" id="schedPickersSplit">
              {/*  Calendar  */}
              <div className="cal-box-arbor">
                <div className="cal-header">
                  <span className="cal-month-title" id="calMonthTitle">October 2026</span>
                  <div style={{"display": "flex", "gap": "6px"}}>
                    <button type="button" className="cal-nav-btn" onClick={(e) => S.prevMonth()} aria-label="Previous month">‹</button>
                    <button type="button" className="cal-nav-btn" onClick={(e) => S.nextMonth()} aria-label="Next month">›</button>
                  </div>
                </div>

                <div className="cal-weekdays">
                  <span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span><span>Su</span>
                </div>

                <div className="cal-grid" id="calendarGrid">
                  {/*  Populated by JS  */}
                </div>
              </div>

              {/*  Slots  */}
              <div className="slots-box-arbor">
                <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "12px"}}>
                  <span style={{"fontFamily": "var(--font-serif)", "fontSize": "0.95rem", "fontWeight": "600"}} id="slotsDateLabel">Select Date</span>
                  <span style={{"fontSize": "0.7rem", "color": "var(--gold-primary)", "fontWeight": "600"}}>🇨🇭 CET / 🇯🇵 JST (+7h)</span>
                </div>

                <div style={{"fontSize": "0.72rem", "textTransform": "uppercase", "letterSpacing": "0.1em", "color": "var(--gold-primary)", "marginBottom": "6px"}}>
                  ☀️ Swiss Lunchtime (12:00 – 14:00 CET)
                </div>
                <div className="slots-grid-arbor">
                  <button type="button" className="aslot-btn" onClick={(e) => S.selectTimeSlot('12:00', e.currentTarget)}>12:00 CET</button>
                  <button type="button" className="aslot-btn active" onClick={(e) => S.selectTimeSlot('12:30', e.currentTarget)}>12:30 CET</button>
                  <button type="button" className="aslot-btn" onClick={(e) => S.selectTimeSlot('13:00', e.currentTarget)}>13:00 CET</button>
                  <button type="button" className="aslot-btn" onClick={(e) => S.selectTimeSlot('13:30', e.currentTarget)}>13:30 CET</button>
                </div>

                <div style={{"fontSize": "0.72rem", "textTransform": "uppercase", "letterSpacing": "0.1em", "color": "var(--gold-primary)", "margin": "16px 0 6px 0"}}>
                  🌙 Swiss Evening (18:00 – 20:30 CET)
                </div>
                <div className="slots-grid-arbor">
                  <button type="button" className="aslot-btn" onClick={(e) => S.selectTimeSlot('18:00', e.currentTarget)}>18:00 CET</button>
                  <button type="button" className="aslot-btn" onClick={(e) => S.selectTimeSlot('18:30', e.currentTarget)}>18:30 CET</button>
                  <button type="button" className="aslot-btn" onClick={(e) => S.selectTimeSlot('19:00', e.currentTarget)}>19:00 CET</button>
                  <button type="button" className="aslot-btn" onClick={(e) => S.selectTimeSlot('19:30', e.currentTarget)}>19:30 CET</button>
                </div>
              </div>
            </div>

            {/*  Booking Form  */}
            <div id="schedFormBox">
              <div style={{"background": "rgba(212, 175, 55, 0.08)", "border": "1px solid rgba(212, 175, 55, 0.25)", "padding": "12px 18px", "borderRadius": "var(--radius-sm)", "fontSize": "0.88rem", "color": "var(--text-cream)", "marginBottom": "18px"}} id="bookingSummaryPill">
                Selected: <strong>Discovery Call (30 Min)</strong> on <strong>Oct 28, 2026 at 12:30 CET</strong>
              </div>

              <form id="bookingScheduleForm" onSubmit={(e) => S.handleScheduleSubmit(e)}>
                <div style={{"display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "14px", "marginBottom": "12px"}}>
                  <div>
                    <label style={{"fontSize": "0.75rem", "textTransform": "uppercase", "letterSpacing": "0.1em", "color": "var(--gold-primary)"}}>Full Name*</label>
                    <input type="text" id="schedName" className="form-input-dark" required placeholder="Alexandre Laurent" />
                  </div>
                  <div>
                    <label style={{"fontSize": "0.75rem", "textTransform": "uppercase", "letterSpacing": "0.1em", "color": "var(--gold-primary)"}}>Email Address*</label>
                    <input type="email" id="schedEmail" className="form-input-dark" required placeholder="alexandre@example.ch" />
                  </div>
                </div>

                <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginTop": "18px", "flexWrap": "wrap", "gap": "12px"}}>
                  <span style={{"fontSize": "0.75rem", "color": "var(--text-dim)"}}>Google Meet invitation will be sent immediately upon confirmation.</span>
                  <button type="submit" className="btn-glow btn-glow-primary">
                    Confirm Consultation
                  </button>
                </div>
              </form>
            </div>

            {/*  Success State  */}
            <div id="schedSuccessBox" style={{"display": "none", "textAlign": "center", "padding": "40px 10px"}}>
              <div style={{"width": "60px", "height": "60px", "borderRadius": "50%", "background": "var(--gold-primary)", "color": "#070907", "display": "flex", "alignItems": "center", "justifyContent": "center", "margin": "0 auto 16px auto", "fontSize": "1.6rem", "fontWeight": "bold", "boxShadow": "0 0 25px var(--gold-primary)"}}>✓</div>
              <h3 className="heading-display" style={{"fontSize": "1.8rem", "marginBottom": "8px"}}>Consultation Confirmed</h3>
              <p style={{"color": "var(--text-muted)", "fontSize": "0.95rem"}}>Calendar invitation and Google Meet link sent to <span id="confirmedEmail" style={{"color": "var(--gold-light)", "fontWeight": "600"}}>your email</span>.</p>
              <div style={{"marginTop": "24px", "display": "flex", "gap": "12px", "justifyContent": "center", "flexWrap": "wrap"}}>
                <button type="button" className="btn-glow btn-glow-primary" onClick={(e) => S.downloadIcsFile()}>📥 Download .ics Calendar File</button>
                <button type="button" className="btn-glow btn-glow-outline" onClick={(e) => S.resetScheduler()}>Book Another Time</button>
              </div>
            </div>
          </div>

          {/*  Right Column: Direct Message Form  */}
          <div className="schedule-card-arbor glow-interactive" style={{"display": "flex", "flexDirection": "column", "justifyContent": "space-between"}}>
            <div>
              <span className="kicker">Direct Written Inquiry</span>
              <h3 className="heading-display" style={{"fontSize": "1.6rem", "margin": "12px 0 16px 0"}} data-i18n="contact_form_title">
                Send Us a Direct Message
              </h3>
              <p style={{"fontSize": "0.9rem", "color": "var(--text-muted)", "marginBottom": "22px"}}>
                Have a specific question, prefecture query, or a property link you'd like us to look at?
              </p>

              <form id="contactForm" onSubmit={(e) => S.handleContactSubmit(e)}>
                <div style={{"marginBottom": "12px"}}>
                  <label style={{"fontSize": "0.72rem", "textTransform": "uppercase", "letterSpacing": "0.1em", "color": "var(--gold-primary)"}} data-i18n="contact_lbl_name">Your Name</label>
                  <input type="text" id="cfName" className="form-input-dark" required placeholder="James Bond" />
                </div>
                <div style={{"marginBottom": "12px"}}>
                  <label style={{"fontSize": "0.72rem", "textTransform": "uppercase", "letterSpacing": "0.1em", "color": "var(--gold-primary)"}} data-i18n="contact_lbl_email">Email Address</label>
                  <input type="email" id="cfEmail" className="form-input-dark" required placeholder="client@domain.ch" />
                </div>
                <div style={{"marginBottom": "12px"}}>
                  <label style={{"fontSize": "0.72rem", "textTransform": "uppercase", "letterSpacing": "0.1em", "color": "var(--gold-primary)"}} data-i18n="contact_lbl_message">Message</label>
                  <textarea id="cfMessage" className="form-input-dark" rows={4} required placeholder="Tell us about your project, target area, or questions..."></textarea>
                </div>
                <button type="submit" className="btn-glow btn-glow-primary" style={{"width": "100%"}} data-i18n="contact_btn">
                  Send Message
                </button>
              </form>
            </div>

            <div style={{"marginTop": "24px", "paddingTop": "18px", "borderTop": "var(--border-subtle)", "fontSize": "0.8rem", "color": "var(--text-dim)", "textAlign": "center"}}>
              Guaranteed response within 24 hours · Switzerland ⇄ Japan
            </div>
          </div>
        </div>
      </div>
    </section>

    {/*  ======================================================================
         9. SECTION: FAQ ACCORDION (BORDERLESS MINIMAL)
         ======================================================================  */}
    <section className="section-faq" id="faq">
      <div className="container" style={{"maxWidth": "960px"}}>
        <div className="section-header-arbor" style={{"marginBottom": "50px"}}>
          <span className="kicker" data-i18n="faq_badge">CLARITY & TRANSPARENCY</span>
          <h2 className="section-title-arbor" data-i18n="faq_title">Frequently Asked Questions</h2>
          <p className="section-sub-arbor" data-i18n="faq_sub">
            Everything you need to know about purchasing and owning property in Japan as a foreigner.
          </p>
        </div>

        <div className="faq-list">
          {/*  FAQ 1  */}
          <div className="faq-arbor-item" onClick={(e) => S.toggleFaq(e.currentTarget)}>
            <div className="faq-arbor-header">
              <span className="faq-arbor-q" data-i18n="faq1_q">Can foreigners buy property in Japan?</span>
              <span className="faq-arbor-plus">+</span>
            </div>
            <div className="faq-arbor-answer">
              <p className="faq-arbor-answer-text" data-i18n="faq1_a">
                Yes, completely. Unlike many other Asian countries, Japan imposes zero restrictions on foreign property ownership. Foreigners can purchase land and buildings with 100% freehold title (Shoyuken), with the identical legal rights as Japanese citizens. No visa, permanent residency, or citizenship is required.
              </p>
            </div>
          </div>

          {/*  FAQ 2  */}
          <div className="faq-arbor-item" onClick={(e) => S.toggleFaq(e.currentTarget)}>
            <div className="faq-arbor-header">
              <span className="faq-arbor-q" data-i18n="faq2_q">Can I buy remotely without visiting Japan?</span>
              <span className="faq-arbor-plus">+</span>
            </div>
            <div className="faq-arbor-answer">
              <p className="faq-arbor-answer-text" data-i18n="faq2_a">
                Yes. Most of our clients purchase their properties without traveling to Japan. The transaction is conducted using a notarized statutory declaration / affidavit and Power of Attorney verified in Europe, which empowers a certified Japanese Judicial Scrivener (Shiho-shoshi) to legally register the property in your name.
              </p>
            </div>
          </div>

          {/*  FAQ 3  */}
          <div className="faq-arbor-item" onClick={(e) => S.toggleFaq(e.currentTarget)}>
            <div className="faq-arbor-header">
              <span className="faq-arbor-q" data-i18n="faq3_q">I don't speak Japanese — is that a problem?</span>
              <span className="faq-arbor-plus">+</span>
            </div>
            <div className="faq-arbor-answer">
              <p className="faq-arbor-answer-text" data-i18n="faq3_a">
                Not at all. That is our exact raison d'être. We handle all communications with Japanese sellers, municipal town halls, local brokers, utilities, and judicial scriveners. All legal contracts and crucial explanation of important matters (Juyo Jiko Setsumeisho) are translated and explained to you in English, French, Italian, or German.
              </p>
            </div>
          </div>

          {/*  FAQ 4  */}
          <div className="faq-arbor-item" onClick={(e) => S.toggleFaq(e.currentTarget)}>
            <div className="faq-arbor-header">
              <span className="faq-arbor-q" data-i18n="faq4_q">What are the total costs of buying in Japan?</span>
              <span className="faq-arbor-plus">+</span>
            </div>
            <div className="faq-arbor-answer">
              <p className="faq-arbor-answer-text" data-i18n="faq4_a">
                Beyond the property purchase price and our consulting fee, ancillary closing costs in Japan are remarkably low compared to Europe (typically 6% to 10% of purchase price): Real Estate Acquisition Tax (approx. 3-4%), Registration & License Tax (Shiho-shoshi fees), Stamp Duty (nominal), and prorated annual fixed asset tax.
              </p>
            </div>
          </div>

          {/*  FAQ 5  */}
          <div className="faq-arbor-item" onClick={(e) => S.toggleFaq(e.currentTarget)}>
            <div className="faq-arbor-header">
              <span className="faq-arbor-q" data-i18n="faq5_q">How does the process work step by step?</span>
              <span className="faq-arbor-plus">+</span>
            </div>
            <div className="faq-arbor-answer">
              <p className="faq-arbor-answer-text" data-i18n="faq5_a">
                Step 1: Free 30-min discovery call to define budget, preferred prefectures, and lifestyle goals. Step 2: Sourcing, technical vetting, and shortlisting. Step 3: Formal Letter of Intent (Kaitori Shouninsho) and negotiation. Step 4: Remote contract signing, international wire transfer, and official deed registration.
              </p>
            </div>
          </div>

          {/*  FAQ 6  */}
          <div className="faq-arbor-item" onClick={(e) => S.toggleFaq(e.currentTarget)}>
            <div className="faq-arbor-header">
              <span className="faq-arbor-q" data-i18n="faq6_q">What is an Akiya?</span>
              <span className="faq-arbor-plus">+</span>
            </div>
            <div className="faq-arbor-answer">
              <p className="faq-arbor-answer-text" data-i18n="faq6_a">
                An 'Akiya' (空き家) literally means 'vacant home'. Driven by demographic changes, Japan has over 8.5 million vacant homes. Many are exceptional wooden structures (Kominka) with traditional craftsmanship, cedar timber beams, and peaceful gardens available at astonishingly low prices. With professional vetting, they offer extraordinary value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/*  ======================================================================
         10. BUSINESS CARD 3D FLIP MOCKUP
         ======================================================================  */}
    <section className="section-brand-card" id="brand-card">
      <div className="container">
        <span className="kicker" data-i18n="card_badge">BRAND IDENTITY SPECIFICATION</span>
        <h2 className="heading-display" style={{"fontSize": "2.2rem", "margin": "12px 0 8px 0"}} data-i18n="card_title">
          Physical Identity · 85 × 55 mm
        </h2>
        <p style={{"color": "var(--text-muted)", "fontSize": "0.9rem"}} data-i18n="card_sub">
          Click or hover to inspect front and back faces with tactile pearlescent green foil finishes.
        </p>

        <div className="card-scene">
          <div className="card-inner" id="cardInner" onClick={(e) => S.toggleCardFlip()}>
            {/*  Front Face  */}
            <div className="card-face card-face-front glow-interactive">
              <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "flex-start"}}>
                <svg width="34" height="34" viewBox="0 0 100 100" fill="none">
                  <line x1="28" y1="28" x2="28" y2="88" stroke="#D4AF37" strokeWidth="4.5" strokeLinecap="round" />
                  <line x1="72" y1="28" x2="72" y2="88" stroke="#D4AF37" strokeWidth="4.5" strokeLinecap="round" />
                  <path d="M12 28 C 30 20, 70 20, 88 28" stroke="#D4AF37" strokeWidth="6" strokeLinecap="round" />
                  <line x1="20" y1="38" x2="80" y2="38" stroke="#D4AF37" strokeWidth="4" />
                  <path d="M10 82 C 30 58, 70 58, 90 82" stroke="#F8F5EE" strokeWidth="4.5" strokeLinecap="round" />
                </svg>
                <span style={{"fontSize": "0.65rem", "letterSpacing": "0.2em", "color": "var(--gold-primary)"}}>SWITZERLAND ⇄ JAPAN</span>
              </div>

              <div>
                <div style={{"fontFamily": "var(--font-serif)", "fontSize": "1.4rem", "color": "#FFF", "letterSpacing": "0.1em", "textTransform": "uppercase"}}>
                  Maison Kakehashi
                </div>
                <div style={{"fontSize": "0.72rem", "letterSpacing": "0.25em", "color": "var(--gold-primary)", "textTransform": "uppercase"}}>
                  Japan Property Consulting
                </div>
                <div style={{"fontSize": "0.72rem", "color": "var(--text-muted)", "marginTop": "10px", "fontStyle": "italic"}} data-i18n="card_front_tagline">
                  "Japan is closer than you think."
                </div>
              </div>

              <div style={{"fontSize": "0.68rem", "color": "rgba(248,245,238,0.5)", "letterSpacing": "0.1em"}}>
                CLICK TO FLIP CARD ⟳
              </div>
            </div>

            {/*  Back Face  */}
            <div className="card-face card-face-back glow-interactive">
              <div>
                <div style={{"fontSize": "0.95rem", "fontWeight": "600", "color": "#FFF"}}>James Loder</div>
                <div style={{"fontSize": "0.72rem", "color": "var(--gold-primary)", "letterSpacing": "0.15em"}}>Founder & Property Consultant</div>
              </div>

              <ul style={{"listStyle": "none", "fontSize": "0.72rem", "color": "var(--text-muted)", "display": "flex", "flexDirection": "column", "gap": "4px"}}>
                <li>• Remote Akiya Sourcing & Acquisition</li>
                <li>• Technical Audits & Road Law (Art. 42/43)</li>
                <li>• Architectural & Renovation Oversight</li>
              </ul>

              <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "borderTop": "1px solid rgba(212,175,55,0.3)", "paddingTop": "8px"}}>
                <span style={{"fontSize": "0.68rem", "letterSpacing": "0.15em", "color": "var(--gold-primary)"}}>DE · FR · EN · IT</span>
                <span style={{"fontSize": "0.68rem", "color": "rgba(248,245,238,0.6)"}}>maisonkakehashi.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </main>

  {/*  ======================================================================
       11. BORDERLESS ARCHITECTURAL FOOTER
       ======================================================================  */}
  <footer className="footer-arbor">
    <div className="container">
      <div className="footer-big-brand">
        MAISON KAKEHASHI
      </div>

      <div className="footer-cols-grid">
        <div>
          <div className="footer-col-title">About Maison Kakehashi</div>
          <p style={{"fontSize": "0.88rem", "color": "var(--text-muted)", "lineHeight": "1.7"}}>
            Bridging European precision and Japanese architectural heritage. Founded by Swiss resident and Kōfu Akiya owner James Loder to assist international buyers with remote property acquisitions.
          </p>
          <div style={{"marginTop": "20px", "fontSize": "0.82rem", "color": "var(--gold-primary)"}}>
            Languages: English · Français · Italiano · Deutsch
          </div>
        </div>

        <div>
          <div className="footer-col-title">Navigation</div>
          <ul className="footer-links-list">
            <li><a href="#intro" data-i18n="nav_home">Home</a></li>
            <li><a href="#lifestyles" data-i18n="nav_lifestyles">Projects</a></li>
            <li><a href="#services" data-i18n="nav_services">Services</a></li>
            <li><a href="#story" data-i18n="nav_story">My Story</a></li>
            <li><a href="#projects" data-i18n="nav_projects">Case Studies</a></li>
            <li><a href="#faq" data-i18n="nav_faq">FAQ</a></li>
          </ul>
        </div>

        <div>
          <div className="footer-col-title">Services</div>
          <ul className="footer-links-list">
            <li><a href="#services">Purchase Support Mandate</a></li>
            <li><a href="#services">€45 Listing Technical Audit</a></li>
            <li><a href="#services">Architectural Diagnostic</a></li>
            <li><a href="#services">Minpaku Compliance Check</a></li>
            <li><a href="#contact">Discovery Call (30 Min)</a></li>
          </ul>
        </div>

        <div>
          <div className="footer-col-title">Legal & Compliance</div>
          <ul className="footer-links-list">
            <li><a href="javascript:void(0)" onClick={(e) => S.openLegalModal()}>Legal Notices</a></li>
            <li><a href="javascript:void(0)" onClick={(e) => S.openPrivacyModal()}>Privacy Policy</a></li>
            <li><a href="#contact">Direct Inquiry</a></li>
          </ul>
          <div style={{"marginTop": "20px", "fontSize": "0.75rem", "color": "var(--text-dim)", "lineHeight": "1.5"}} data-i18n="footer_disclaimer">
            * Maison Kakehashi acts as a consultant, not as a licensed Japanese real estate broker (Takken).
          </div>
        </div>
      </div>

      <div className="footer-bottom-row">
        <div>© 2026 Maison Kakehashi. All rights reserved. Switzerland · Yamanashi, Japan.</div>
        <div style={{"color": "var(--gold-primary)"}}>かけはし — The Bridge to Japanese Real Estate</div>
      </div>
    </div>
  </footer>

  {/*  LIFESTYLE MODAL  */}
  <div className="modal-overlay" id="lifestyleModal" onClick={(e) => S.closeLifestyleModal(e)}>
    <div className="modal-box-arbor">
      <button type="button" className="modal-close-btn" onClick={(e) => S.closeLifestyleModalDirect()}>✕</button>
      <span className="kicker" id="modalKicker">LIFESTYLE BLUEPRINT</span>
      <h3 className="heading-display" id="modalTitle" style={{"fontSize": "1.8rem", "margin": "12px 0 16px 0"}}>Blueprint Title</h3>
      <p id="modalDesc" style={{"color": "var(--text-muted)", "fontSize": "0.95rem", "lineHeight": "1.65", "marginBottom": "20px"}}></p>
      <div id="modalDetails" style={{"background": "rgba(10,14,11,0.7)", "border": "1px solid rgba(212,175,55,0.3)", "padding": "18px", "borderRadius": "var(--radius-sm)", "fontSize": "0.88rem", "color": "var(--text-cream)", "lineHeight": "1.6"}}></div>
      <div style={{"marginTop": "24px", "textAlign": "right"}}>
        <a href="#contact" className="btn-glow btn-glow-primary" onClick={(e) => S.closeLifestyleModalDirect()}>Schedule Consultation for this Scenario →</a>
      </div>
    </div>
  </div>
    </>
  );
}
