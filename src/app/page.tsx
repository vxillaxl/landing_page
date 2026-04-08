import Image from "next/image";

export default function Home() {
  const menuItems = [
    {
      title: "Chicken Parm",
      subtitle: "fresh basil, parmesan, tomato",
      image:
        "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=700&q=80",
    },
    {
      title: "Chicken Alfredo",
      subtitle: "creamy sauce, grilled chicken",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80",
    },
    {
      title: "Spaghetti & Meatballs",
      subtitle: "house red sauce, herbs",
      image:
        "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=700&q=80",
    },
    {
      title: "Baked Mac & Cheese",
      subtitle: "crispy top, cheddar blend",
      image:
        "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=700&q=80",
    },
  ];

  const features = [
    "Outdoor Seating",
    "Takeout",
    "Online Delivery",
    "Coupons",
    "Group Orders",
    "Tracking",
  ];

  return (
    <div className="page-shell">
      <main className="landing-card">
        <header className="top-nav">
          <button className="pill active">MENU</button>
          <a href="#">HOME</a>
          <a href="#">MENU</a>
          <a href="#">ORDER ONLINE</a>
          <div className="logo">CRUST</div>
          <a href="#">ABOUT</a>
          <a href="#">CONTACT</a>
          <span className="dot" />
        </header>

        <section className="hero">
          <div className="hero-overlay">
            <h1>FOR DELICIOUS, MADE-FROM-SCRATCH PIZZAS</h1>
            <button>Order Online</button>
          </div>
        </section>

        <section className="menu-section">
          <h3>OUR MENU</h3>
          <div className="menu-grid">
            {menuItems.map((item) => (
              <article key={item.title} className="menu-card">
                <Image src={item.image} alt={item.title} width={300} height={120} />
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.subtitle}</p>
                </div>
              </article>
            ))}
          </div>
          <button className="primary">VIEW OUR COMPLETE MENU</button>
        </section>

        <section className="about-split">
          <div>
            <h2>HOME OF THE CHICAGO-STYLE THIN CRUST PIZZA</h2>
            <p>
              Crafted with premium ingredients, hand-tossed dough and bold
              flavors. Enjoy restaurant quality pizza made fresh for your table.
            </p>
            <button className="primary left">LEARN MORE</button>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <div key={feature} className="feature-item">
                <span>🍕</span>
                <small>{feature}</small>
              </div>
            ))}
          </div>
        </section>

        <section className="ways">
          <h3>WAYS TO ENJOY</h3>
          <div className="ways-grid">
            <div className="pizza-shot" />
            <article className="dark-card">
              <h4>AWARD-WINNING PIZZA & SERVICE</h4>
              <button>LEARN MORE</button>
            </article>
            <article className="dark-card">
              <h4>KIDS EAT FREE TUESDAYS!</h4>
              <button>VIEW OUR COUPONS</button>
            </article>
          </div>
        </section>

        <section className="community">
          <div className="community-left">
            <p>@yourbrandhandle</p>
            <h3>LET&apos;S WORK TOGETHER FOR OUR COMMUNITY</h3>
          </div>
          <div className="community-gallery">
            <div />
            <div />
            <div />
            <div />
          </div>
        </section>

        <section className="cta-row">
          <article>
            <h4>WANT TO OWN YOUR OWN CRUST PIZZA CO.?</h4>
            <button className="primary left">START HERE</button>
          </article>
          <article className="store-photo" />
          <article>
            <h4>SUBMIT A REQUEST</h4>
            <div className="request-buttons">
              <button className="tiny">CATERING</button>
              <button className="tiny">SUPPORT</button>
              <button className="tiny">MEDIA</button>
            </div>
          </article>
        </section>

        <footer className="footer-nav">
          <div className="logo small">CRUST</div>
          <a href="#">MENU</a>
          <a href="#">CATERING</a>
          <a href="#">GIFTING</a>
          <a href="#">COMMUNICATION</a>
          <a href="#">PRIVACY</a>
          <a href="#">TERMS</a>
        </footer>
      </main>
    </div>
  );
}
