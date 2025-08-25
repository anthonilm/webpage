"use client";
import React from "react";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    console.log({ name: fd.get("name"), email: fd.get("email") });
  };

  return (
    <footer id="site-footer" role="contentinfo" aria-label="Website footer">
      <div className="wrap">
        {/* Top grid */}
        <div className="cols">
          {/* Pages list (one column) */}
          <nav className="col nav" aria-label="Footer site pages">
            <ul className="pages">
              <li><a href="/about">ABOUT</a></li>
              <li><a href="/10-tools">10 TOOLS</a></li>
              <li><a href="/newsletters">NEWSLETTERS</a></li>
              <li><a href="/services">CONSULTING SERVICES</a></li>
              <li><a href="/student-services">STUDENT SERVICES</a></li>
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
              <input name="name" type="text" placeholder="NAME" aria-label="Name" autoComplete="name" />
              <input name="email" type="email" placeholder="EMAIL" aria-label="Email" autoComplete="email" required />
              <button type="submit">SUBSCRIBE</button>
            </form>

            <p className="small">
              By clicking "subscribe," I agree to the <a href="/privacy">Privacy Policy</a>.
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
          border: 0;
        }
        .wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 56px 24px 24px;
          width: 100%;
          box-sizing: border-box; /* ensures padding is respected */
        }

       /* Top grid: Nav + Newsletter */
.cols {
  display: grid;
  grid-template-columns: 240px 1fr;  /* fixed width for nav, rest for newsletter */
  gap: 56px;
  align-items: start;
}

/* Constrain nav column */
.col.nav {
  max-width: 240px;
  width: 100%;
}

/* Pages list */
.pages {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 14px;
}
.pages a {
  text-decoration: none;
  color: inherit;
  font-weight: 750;
  letter-spacing: 0.02em;
  font-size: 15px;
  line-height: 1.6;
}
        .pages a:hover { opacity: 0.7; }

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
          width: 100%;
          box-sizing: border-box;
        }
        .signup input {
          height: 56px;
          border: none;
          background: #0e0e0e;
          color: #fff;
          padding: 0 18px;
          font-size: 15px;
          width: 100%;
          box-sizing: border-box;
        }
        .signup input::placeholder { color: #fff; }
        .signup button {
          height: 56px;
          padding: 0 28px;
          border: 1px solid #0e0e0e;
          background: transparent;
          font-weight: 800;
          letter-spacing: 0.04em;
          cursor: pointer;
        }
        .signup button:hover { background: #0e0e0e; color: #fff; }

        .small {
          margin-top: 14px;
          font-size: 12px;
          color: rgba(0, 0, 0, 0.75);
        }
        .small a { color: inherit; text-decoration: underline; }

        /* Social */
        .social {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-top: 28px;
        }
        .follow { font-weight: 800; letter-spacing: 0.06em; }
        .social ul { list-style: none; display: flex; gap: 24px; padding: 0; margin: 0; }
        .social svg { fill: currentColor; }

        /* Bottom bar */
        .bottom {
          display: grid;
          grid-template-columns: auto auto auto 1fr;
          gap: 24px;
          align-items: center;
          padding-top: 28px;
          margin-top: 28px;
          border-top: none;
          font-size: 14px;
          width: 100%;
          box-sizing: border-box;
        }
        .bottom a { text-decoration: none; color: inherit; font-weight: 700; }
        .siteby { justify-self: end; }

        /* Responsive */
        @media (max-width: 1000px) {
          .cols { grid-template-columns: 1fr; gap: 40px; }
          .signup { grid-template-columns: 1fr; }
          .bottom { grid-template-columns: 1fr; gap: 8px; }
          .siteby { justify-self: start; }
        }
      `}</style>
    </footer>
  );
}
