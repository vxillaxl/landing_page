import Image from "next/image";
import { features, menuItems } from "@/features/landing/data";

type LandingMainSectionsProps = {
  selectedRequest: string;
  onOpenOrderForm: (itemName: string) => void;
  onLearnMore: () => void;
  onNavigate: (sectionId: string, message: string) => void;
  onRequest: (type: string) => void;
  onMessage: (message: string) => void;
};

export function LandingMainSections({
  selectedRequest,
  onOpenOrderForm,
  onLearnMore,
  onNavigate,
  onRequest,
  onMessage,
}: LandingMainSectionsProps) {
  return (
    <>
      <section id="home" className="hero">
        <div className="hero-overlay">
          <h1>FOR DELICIOUS, MADE-FROM-SCRATCH PIZZAS</h1>
          <button onClick={() => onOpenOrderForm("Signature Pizza")}>Order Online</button>
        </div>
      </section>

      <section id="menu" className="menu-section">
        <h3>OUR MENU</h3>
        <div className="menu-grid">
          {menuItems.map((item) => (
            <article key={item.title} className="menu-card">
              <Image
                src={item.image}
                alt={item.title}
                width={420}
                height={220}
                className="menu-card-image"
              />
              <div>
                <h4>{item.title}</h4>
                <p>{item.subtitle}</p>
                <button className="tiny" onClick={() => onOpenOrderForm(item.title)}>
                  ADD TO ORDER
                </button>
              </div>
            </article>
          ))}
        </div>
        <button
          className="primary"
          onClick={() => onNavigate("ways", "Showing more ways to enjoy our food.")}
        >
          VIEW OUR COMPLETE MENU
        </button>
      </section>

      <section id="about" className="about-split">
        <div>
          <h2>HOME OF THE CHICAGO-STYLE THIN CRUST PIZZA</h2>
          <p>
            Crafted with premium ingredients, hand-tossed dough and bold flavors.
            Enjoy restaurant quality pizza made fresh for your table.
          </p>
          <button
            className="primary left"
            onClick={onLearnMore}
          >
            LEARN MORE
          </button>
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

      <section id="ways" className="ways">
        <h3>WAYS TO ENJOY</h3>
        <div className="ways-grid">
          <div className="pizza-shot" />
          <article className="dark-card">
            <h4>AWARD-WINNING PIZZA & SERVICE</h4>
            <button onClick={onLearnMore}>LEARN MORE</button>
          </article>
          <article className="dark-card">
            <h4>KIDS EAT FREE TUESDAYS!</h4>
            <button onClick={() => onMessage("Coupon applied: KIDS-FREE-TUESDAY (demo only).")}>
              VIEW OUR COUPONS
            </button>
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

      <section id="request" className="cta-row">
        <article>
          <h4>WANT TO OWN YOUR OWN CRUST PIZZA CO.?</h4>
          <button
            className="primary left"
            onClick={() => {
              onRequest("franchise");
              onNavigate("request", "Franchise request started.");
            }}
          >
            START HERE
          </button>
        </article>
        <article className="store-photo" />
        <article>
          <h4>SUBMIT A REQUEST</h4>
          <p className="request-state" suppressHydrationWarning>
            Current request: {selectedRequest}
          </p>
          <div className="request-buttons">
            <button className="tiny" onClick={() => onRequest("catering")}>
              CATERING
            </button>
            <button className="tiny" onClick={() => onRequest("support")}>
              SUPPORT
            </button>
            <button className="tiny" onClick={() => onRequest("media")}>
              MEDIA
            </button>
          </div>
        </article>
      </section>
    </>
  );
}
