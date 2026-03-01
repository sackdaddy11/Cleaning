import React from "react";

export default function CsCleaningWebsite() {
  return (
    <div style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.overlay} />
        <div style={styles.heroContent}>
          <h1 style={styles.h1}>CS Cleaning</h1>
          <p style={styles.lead}>
            Professional Commercial Cleaning for Offices & Facilities
          </p>
          <p style={styles.subtext}>
            Locally owned and operated in Bowling Green, KY. Reliable,
            detail-focused janitorial services for offices, restrooms, and
            common areas.
          </p>
          <a href="#contact" style={styles.button}>
            Request a Free Quote
          </a>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Our Services</h2>
        <div style={styles.grid}>
          <div style={styles.card}>
            <h3>Office Cleaning</h3>
            <p>
              Trash removal, dusting, lobby cleaning, conference rooms, and
              general janitorial services.
            </p>
          </div>
          <div style={styles.card}>
            <h3>Restroom Sanitation</h3>
            <p>
              Full restroom cleaning, disinfecting, supply restocking, and
              floor care.
            </p>
          </div>
          <div style={styles.card}>
            <h3>Break Rooms & Common Areas</h3>
            <p>
              Kitchenette cleaning, surface sanitizing, appliance wipe-down,
              and trash service.
            </p>
          </div>
        </div>
      </section>

      <section style={styles.redSection}>
        <h2 style={styles.h2White}>Proudly Serving Bowling Green, KY</h2>
        <p>
          Dependable commercial cleaning services for local businesses who
          value consistency and professionalism.
        </p>
      </section>

      <section id="contact" style={styles.section}>
        <h2 style={styles.h2}>Get a Free Quote</h2>
        <div style={styles.form}>
          <input style={styles.input} type="text" placeholder="Company Name" />
          <input style={styles.input} type="text" placeholder="Contact Name" />
          <input style={styles.input} type="email" placeholder="Email Address" />
          <input style={styles.input} type="tel" placeholder="Phone Number" />
          <textarea
            style={styles.textarea}
            rows={4}
            placeholder="Tell us about your facility..."
          />
          <button style={styles.button} type="button">
            Submit Request
          </button>
        </div>
      </section>

      <footer style={styles.footer}>
        <p>© 2026 CS Cleaning. All rights reserved.</p>
      </footer>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    margin: 0,
    fontFamily: "Arial, Helvetica, sans-serif",
    backgroundColor: "#f4f4f4",
    color: "#333",
  },
  hero: {
    position: "relative",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    textAlign: "center",
    padding: "120px 20px",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  heroContent: {
    position: "relative",
    zIndex: 2,
    maxWidth: "800px",
    margin: "0 auto",
  },
  h1: {
    fontSize: "48px",
    marginBottom: "20px",
  },
  h2: {
    textAlign: "center",
    marginBottom: "40px",
  },
  h2White: {
    textAlign: "center",
    marginBottom: "20px",
    color: "white",
  },
  lead: {
    fontSize: "20px",
    marginBottom: "10px",
  },
  subtext: {
    fontSize: "16px",
  },
  button: {
    backgroundColor: "#c62828",
    color: "white",
    padding: "15px 30px",
    textDecoration: "none",
    borderRadius: "6px",
    display: "inline-block",
    marginTop: "20px",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
  },
  section: {
    padding: "60px 20px",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
  },
  card: {
    backgroundColor: "white",
    padding: "30px",
    borderTop: "5px solid #c62828",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  },
  redSection: {
    backgroundColor: "#b71c1c",
    color: "white",
    textAlign: "center",
    padding: "80px 20px",
  },
  form: {
    backgroundColor: "white",
    padding: "40px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    maxWidth: "600px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  textarea: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  footer: {
    backgroundColor: "#222",
    color: "white",
    textAlign: "center",
    padding: "20px",
    marginTop: "40px",
  },
};
