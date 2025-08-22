// components/SiteFooter.tsx
"use client";
import React from "react";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    console.log({
      name: fd.get("name"),
      email: fd.get("email"),
    });
    // Wire to your provider later.
  };

  return (
    <footer id="site-footer" role="contentinfo" aria-label="Website footer">
      <div className="wrap">
        {/* Top grid */}
        <div className="cols">
          {/* Left nav column */}
          <nav className="col nav" aria-label="Footer primary links">
            <ul>
              <li><a href="/about">ABOUT</a></li>
              <li><a href="/on-purpose">ON PURPOSE</a></li>
              <li><a href="/blogs">BLOGS</a></li>
              <li><a href="/press">PRESS</a></li>
              <li><a href="/8-rules-of-love">8 RULES OF LOVE</a></li>
              <li><a href="/think-like-a-monk">THINK LIKE A MONK</a></li>
              <li><a href="/speaking">SPEAKING</a></li>
            </ul>
          </nav>

          {/* Middle nav column */}
          <nav className="col nav" aria-label="Footer secondary links">
            <ul>
              <li><a href="/juni">JUNI</a></li>
              <li><a href="/house-of-1212">HOUSE OF 1212</a></li>
              <li><a href="/find-a-coach">FIND A COACH</a></li>
              <li><a href="/become-a-coach">BECOME A COACH</a></li>
              <li><a href="/genius">GENIUS</a></li>
              <li><a href="/daily-on-calm">DAILY JAY ON CALM</a></li>
              <li><a href="/connect">CONNECT</a></li>
            </ul>
          </nav>

          {/* Newsletter column */}
          <div className="col newsletter">
            <h3>WEEKLY WISDOM STRAIGHT TO YOUR INBOX.</h3>
            <p className="lede">
              Join our readers and receive concise guidance to help you reset, refocus, and live with purpose.
            </p>

            <form className="signup" onSubmit={handleSubmit} aria-label="Newsletter signup">
              <input
                name="name"
                type="text"
                placeholder="NAME"
                aria-label="Name"
                autoComplete="name"
              />
              <input
                name="email"
                type="email"
                placeholder="EMAIL"
                aria-label="Email"
                autoComplete="email"
                required
              />
              <button type="submit">SUBSCRIBE</button>
            </form>

            <p className="small">
              By clicking "subscribe," I agree to the{" "}
              <a href="/privacy">Privacy Policy</a>.
            </p>

            {/* Social row */}
            <div className="social">
              <span className="follow">FOLLOW:</span>
              <ul aria-label="Social media">
                <li>
                  <a href="#" aria-label="X / Twitter">
                    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                      <path d="M18 3h3l-7.5 9L22 21h-3l-6-7.2L7 21H4l7.8-9.4L2 3h3l6 7.1L18 3z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Facebook">
                    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                      <path d="M14 9h3V6h-3c-2 0-3 1-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Instagram">
                    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="18" rx="5" />
                      <circle cx="12" cy="12" r="4.2" fill="currentColor" />
                      <circle cx="17.3" cy="6.7" r="1.2" fill="#fff" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <rect x="6" y="10" width="3" height="8" fill="#fff" />
                      <rect x="6" y="6" width="3" height="3" fill="#fff" />
                      <path d="M12 10h2.6a3.4 3.4 0 0 1 3.4 3.4V18h-3v-4c0-.8-.6-1.4-1.4-1.4H12V18h-3v-8h3z" fill="#fff" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="YouTube">
                    <svg viewBox="0 0 24 24" width="28" height="20" aria-hidden="true">
                      <rect x="2" y="5" width="20" height="14" rx="3" />
                      <polygon points="10,9 16,12 10,15" fill="#fff" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Pinterest">
                    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                      <path d="M12 3a9 9 0 0 0-3.4 17.3l.8-3c.1-.5.1-1-.1-1.5-.2-.6-.5-1.9-.5-2.4 0-2 1.2-3.5 2.7-3.5 1.3 0 2 .9 2 .2 0-.4-.2-1.3-.6-1.7-.4-.5-1.1-.7-1.8-.7-2.1 0-3.6 1.7-3.6 4 0 1.5.5 2.5.5 2.5l-2 8.2a9 9 0 1 0 5.8-17.4z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="bottom">
          <span className="copyright">© {year} Noesis Systems LLC</span>
          <a href="/privacy">PRIVACY POLICY</a>
          <a href="/terms">TERMS</a>
          <span className="siteby">
            SITE BY: <a href="#">YOUR STUDIO</a>
          </span>
        </div>
      </div>

      <style jsx>{`
        #site-footer {
          background: transparent;
          color: #111;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
        }
        .wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 56px 24px 24px;
        }

        /* Top grid */
        .cols {
          display: grid;
          grid-template-columns: 1fr 1fr 1.6fr;
          gap: 56px;
          align-items: start;
        }

        /* Nav columns */
        .nav ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 18px;
        }
        .nav a {
          text-decoration: none;
          color: inherit;
          font-weight: 750;
          letter-spacing: 0.02em;
          font-size: 15px;
        }
        .nav a:hover {
          opacity: 0.7;
        }

        /* Newsletter column */
        .newsletter h3 {
          margin: 0 0 12px 0;
          font-size: 18px;
          font-weight: 900;
          letter-spacing: 0.04em;
        }
        .newsletter .lede {
          margin: 0 0 20px 0;
          font-size: 16px;
          line-height: 1.6;
          max-width: 46ch;
        }
        .signup {
          display: grid;
          grid-template-columns: 1fr 1fr auto;
          gap: 24px;
          align-items: center;
        }
        .signup input {
          height: 56px;
          border: none;
          background: #0e0e0e;
          color: #fff;
          padding: 0 18px;
          border-radius: 0;
          font-size: 15px;
          letter-spacing: 0.04em;
        }
        .signup input::placeholder {
          color: #fff;
        }
        .signup button {
          height: 56px;
          padding: 0 28px;
          border: 1px solid #0e0e0e;
          background: transparent;
          font-weight: 800;
          letter-spacing: 0.04em;
          cursor: pointer;
        }
        .signup button:hover {
          background: #0e0e0e;
          color: #fff;
        }
        .small {
          margin-top: 14px;
          font-size: 12px;
          color: rgba(0, 0, 0, 0.75);
        }
        .small a {
          color: inherit;
          text-decoration: underline;
        }

        /* Social */
        .social {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-top: 28px;
          flex-wrap: wrap;
        }
        .follow {
          font-weight: 800;
          letter-spacing: 0.06em;
          margin-right: 8px;
        }
        .social ul {
          list-style: none;
          display: flex;
          gap: 24px;
          padding: 0;
          margin: 0;
        }
        .social a {
          color: #111;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .social svg {
          fill: currentColor;
        }

        /* Bottom bar */
        .bottom {
          display: grid;
          grid-template-columns: auto auto auto 1fr;
          gap: 24px;
          align-items: center;
          padding-top: 28px;
          margin-top: 28px;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
          font-size: 14px;
        }
        .bottom a {
          text-decoration: none;
          color: inherit;
          font-weight: 700;
        }
        .bottom a:hover {
          opacity: 0.75;
        }
        .siteby {
          justify-self: end;
        }

        /* Responsive */
        @media (max-width: 1000px) {
          .cols {
            grid-template-columns: 1fr 1fr;
          }
          .newsletter {
            grid-column: 1 / -1;
          }
          .signup {
            grid-template-columns: 1fr;
          }
          .bottom {
            grid-template-columns: 1fr;
            gap: 8px;
          }
          .siteby {
            justify-self: start;
          }
        }
      `}</style>
    </footer>
  );
}
