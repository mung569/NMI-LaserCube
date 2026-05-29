# NMI LaserCube Project Page

A centralized, high-fidelity digital asset management platform and web presence engineered for the New Media Institute (NMI) Capstone project. This client-facing system acts as the definitive repository for custom 3D models, ILDA laser animations, and hardware synchronization guides optimized for the Wicked Lasers LaserCube and LaserOS ecosystem.

## 🚀 Live Links
* **Live Deployment:** https://projects.nmi.cool/2025/nmc/lasercube/
* **Case Study:** https://medium.com/@mbu58569/nmi-lasercube-new-media-capstone-project-dc516ab71b83
* **Client Handoff Documentation:** See `handoff.html` in this repository.

---

## 🛠️ Tech Stack & Architecture

* **Frontend Architecture:** Clean, highly optimized semantic HTML5, CSS3, and modular JavaScript.
* **Asset Creation & Pipeline:** Blender (3D modeling, mesh optimization, keyframe animation), LaserOS Vector Conversion tools.
* **Typography & Styling:** Embedded custom web-fonts (`fonts/neoneon-font/`) and leveraged optimized Bootstrap utilities (`vendors/`) for streamlined layout management.
* **Deployment:** Hosted as a lightning-fast, edge-rendered static web presence designed for seamless client review.

### Directory Structure
```text
├── assets/                  # Local project media (videos, images), UI styling, scripts, and downloadable project PDFs
├── fonts/neoneon-font/      # Typography implementing the project's visual brand
├── vendors/                 # Bootstrap styling and utility libraries
├── index.html               # Main landing page & centralized project management dashboard
├── 1.0.html / 1.1.html      # Iterative project milestones and asset logs
├── design-guide.html        # Comprehensive brand, color token, and typography specifications
├── handoff.html             # Client-facing deployment instructions and delivery manual
└── README.md                # Technical system documentation

```

---

## 🎯 Key Features & Technical Implementations

### 1. Template Customization & Centralized Dashboard (`index.html`)

* Transformed a baseline template architecture into a customized, responsive project management portal.
* Engineered clean navigation logic linking iterative project milestones (`1.0.html`, `1.1.html`) to allow the external client to trace asset evolution and approval states.
* Implemented a neon aesthetic framework documented explicitly in `design-guide.html` to align with the visual nature of laser light shows.
* Developed an intuitive media layout to stream high-fidelity project videos and static render previews directly on-site.

### 2. 3D Asset & Animation Pipeline (Blender to Laser)

* Partnered with the client to engineer high-fidelity 3D assets in Blender tailored for live event environments.
* Handled mesh optimization and polygon reduction to ensure vector paths could be parsed efficiently by laser controllers without causing scanning lag or flicker.
* Optimized web delivery by serving lightweight video and image previews on the web platform, while anchoring raw, high-volume Blender source files in an externally-managed OneDrive repository for client download.

### 3. LaserCube & LaserOS Hardware Integration

* Documented the technical handoff and configuration protocols required to map digital web assets to physical hardware.
* Outlined troubleshooting workflows for **LaserOS** software, optimizing refresh rates, boundary sizing, and beam safety zones.
* Ensured seamless end-to-end synchronization between the web-hosted asset library and real-time physical playback via the LaserCube hardware.

---

## 📦 Client Handoff & Version Control

To maintain complete transparency and long-term maintainability for the client, this repository includes:

* **`design-guide.html`:** Ensures future developers or design teams can scale the web platform while maintaining strict brand consistency.
* **`handoff.html`:** A localized, standalone operations manual providing the client with step-by-step instructions for LaserCube deployment, Blender asset creation workflows, and direct access links to the externally-hosted OneDrive asset repository.
* **Versioned Pages (`1.0.html`, `1.1.html`):** Retained to provide an immutable historical audit trail of project deliverables across the lifecycle (August 2025 – November 2025).

---

## 🔧 Local Development & Deployment

### Run Locally

Since this is a high-performance static web app, it can be run locally without any complex build steps or node modules.

1. Clone the repository:
```bash
git clone [https://github.com/your-username/nmi-lasercube-library.git](https://github.com/your-username/nmi-lasercube-library.git)

```


2. Open `index.html` directly in any modern browser, or spin up a local development server using VS Code Live Server or Python:
```bash
# If you have Python installed
python3 -m http.server 8000

```


3. Navigate to `http://localhost:8000`.
