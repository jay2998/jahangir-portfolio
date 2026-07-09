export const personalInfo = {
  name: "Jahangir Ali",
  title: "Computer Networking Analyst",
  title2: "Full Stack Developer",
  titles: [
    "Computer Networking Analyst",
    "Full Stack Developer",
    "Network Infrastructure Engineer",
    "IoT Solutions Builder",
  ],
  location: "Lahore, Pakistan",
  company: "Afaq Technologies",
  email: "jahangir.ali2998@gmail.com",
  phone: "+92 3091566664",
  linkedin: "https://linkedin.com/in/jahangir-ali-0352451b5",
  github: "https://github.com/jay2998",
  languages: "English (Fluent) · Urdu (Native)",
  summary:
    "Results-driven professional with 5+ years of experience spanning enterprise networking, IT operations, and full-stack web development across Pakistan, Canada, and the United Kingdom, plus early part-time/internship experience gained during undergraduate studies in the UK.",
  headline:
    "Skilled in designing secure network architectures, leading incident response for 200+ resolved cases, and delivering scalable, user-focused applications.",
  highlights: [
    "5+ years in enterprise networking, IT operations, and web development",
    "Experience across infrastructure, product teams, and client-facing roles",
    "Designed secure networks and resolved 200+ incidents for reliability",
    "Built full-stack applications with React, Node.js, and modern development practices",
  ],
  focusAreas: [
    "Secure network architecture and infrastructure design",
    "Incident response and systems administration",
    "Full-stack web development with React and Node.js",
    "IoT systems and computer vision applications",
  ],
};

export const stats = [
  { num: "5+",  label: "Years Experience" },
  { num: "3",   label: "Countries Worked" },
  { num: "200+", label: "Incidents Resolved" },
  { num: "5",   label: "Major Projects" },
];

export const skillGroups = [
  {
    title: "NETWORKING",
    type: "bars",
    items: [
      { name: "TCP/IP · DNS · DHCP · VLANs", pct: 95 },
      { name: "Router & Switch Configuration", pct: 90 },
      { name: "VPN · Firewall Policies", pct: 88 },
      { name: "LAN/WAN · Wireless Deployment", pct: 92 },
    ],
  },
  {
    title: "SYSTEMS & SECURITY",
    type: "bars",
    items: [
      { name: "Windows Server · Active Directory", pct: 90 },
      { name: "Microsoft 365 (Exchange, Teams)", pct: 88 },
      { name: "SIEM · Incident Response", pct: 82 },
      { name: "Patch Management · Endpoint Protection", pct: 85 },
    ],
  },
  {
    title: "FULL STACK DEVELOPMENT",
    type: "bars",
    items: [
      { name: "React · JavaScript · HTML/CSS", pct: 85 },
      { name: "Node.js · Python", pct: 78 },
      { name: "IoT Development (Arduino/Pi)", pct: 88 },
      { name: "Computer Vision · OpenCV", pct: 75 },
    ],
  },
  {
    title: "TOOLS & PLATFORMS",
    type: "tags",
    items: [
      "VMware", "VirtualBox", "Wireshark", "AnyDesk", "TeamViewer",
      "RDP", "Git", "Raspberry Pi", "Arduino", "NVIDIA Jetson",
      "Android Studio", "Bluetooth BLE", "Traceroute", "Group Policy", "SharePoint",
      "Tailwind CSS", "Vite", "Vercel",
    ],
  },
];

export const experiences = [
  {
    date: "FEB 2026 — PRESENT",
    role: "Computer Networking Analyst",
    company: "Afaq Technologies",
    location: "Lahore, Pakistan",
    bullets: [
      "Design and maintain secure network infrastructure for enterprise clients, including firewall policies, access controls, and monitoring solutions.",
      "Configure routers, switches, VLANs, and VPNs to deliver reliable, high-performance, and secure connectivity.",
      "Lead escalated technical support and end-to-end incident resolution, minimising downtime for business-critical systems.",
    ],
  },
  {
    date: "FEB 2026 — PRESENT",
    role: "Junior Frontend Developer",
    company: "Afaq Technologies",
    location: "Lahore, Pakistan",
    bullets: [
      "Build full-stack web applications and internal tools using React, Node.js, and Tailwind CSS.",
      "Develop responsive, accessible UI components and integrate RESTful APIs for client-facing products.",
      "Partner with cross-functional teams on system integration, CI/CD deployment pipelines, and Agile ceremonies, including code reviews and technical documentation.",
    ],
  },
  {
    date: "FEB 2024 — AUG 2025",
    role: "Production IT Analyst",
    company: "FGF Brands",
    location: "Canada",
    bullets: [
      "Delivered 1st- and 2nd-level support for production-floor systems, ensuring uninterrupted manufacturing operations.",
      "Resolved 90%+ of incidents quickly and efficiently using structured troubleshooting and root-cause analysis.",
      "Proactively monitored system health, network connectivity, and application performance to prevent outages.",
      "Conducted regular compliance audits and maintained a technical knowledge base for the support team.",
    ],
  },
  {
    date: "DEC 2023 — FEB 2024",
    role: "Account Executive — IT Solutions",
    company: "DMG Inc",
    location: "Canada",
    bullets: [
      "Served as technical liaison between business clients and internal IT teams, translating requirements into actionable plans.",
      "Analysed client infrastructure needs and recommended tailored networking solutions.",
      "Supported the preparation of technical proposals and deployment plans for prospective clients.",
    ],
  },
  {
    date: "2020 — 2023",
    role: "Freelance IT Support & Network Engineer",
    company: "Self-employed",
    location: "Remote / Pakistan",
    bullets: [
      "Designed, installed, and supported wired and wireless networks for small and medium-sized businesses.",
      "Configured routers, switches, firewalls, and VPN solutions to enable secure remote access.",
      "Migrated client email and business data to Microsoft 365 cloud platforms with minimal disruption.",
    ],
  },
  {
    date: "MAY 2019 — OCT 2020",
    role: "Networking Maintenance & Repair Engineer (Part-Time)",
    company: "IT Firm",
    location: "United Kingdom · Alongside undergraduate studies",
    bullets: [
      "Diagnosed and resolved 200+ network incidents across multiple business sites.",
      "Installed and configured LAN/WAN components, including routers, switches, and firewalls.",
      "Conducted cabling inspections and network redesigns to minimise downtime and improve reliability.",
    ],
  },
  {
    date: "OCT 2018 — APR 2019",
    role: "IT Technician (Part-Time)",
    company: "IT Support Company",
    location: "United Kingdom · Alongside undergraduate studies",
    bullets: [
      "Delivered desktop and network support to 50+ end-users across the organisation.",
      "Introduced a ticket prioritisation system that reduced average resolution time by 40%.",
      "Assisted with software deployments, system updates, and routine data backups.",
    ],
  },
];

export const projects = [
  {
    num: "01",
    icon: "🛍️",
    title: "Point-of-Sale (POS) System",
    desc: "Full-featured POS system built at Afaq Technologies for managing sales transactions, billing, and inventory tracking, with a SQL-backed database for persistent, reliable record-keeping.",
    tags: ["React", "JSX", "Node.js", "SQL"],
    github: null,
    live: null,
    publication: null,
  },
  {
    num: "02",
    icon: "🏥",
    title: "Pulse Check — Hospital Monitoring",
    desc: "Bedside hospital monitoring system tracking and visualising patient vitals in real time via a clinical dashboard.",
    tags: ["React", "JavaScript", "Healthcare Dashboard"],
    github: "https://github.com/jay2998/Pulse-check",
    live: "https://pulse-check-rho.vercel.app",
    publication: null,
  },
  {
    num: "03",
    icon: "🏠",
    title: "IoT Automation & Security Platform",
    desc: "Secure web-based IoT system for remote control of electrical components with role-based access control mechanisms.",
    tags: ["Arduino", "Raspberry Pi", "Web Dashboard", "IoT"],
    github: "https://github.com/jay2998/dashboard-iot",
    live: null,
    publication: null,
  },
  {
    num: "04",
    icon: "📱",
    title: "COVID-19 Contact Tracing App",
    desc: "Android app using Bluetooth beacon technology for proximity detection and exposure tracking.",
    tags: ["Android", "Bluetooth BLE", "Java", "Beacon Tech"],
    github: "https://github.com/jay2998/ContactTracingApp",
    live: null,
    publication: "https://www.researchgate.net/publication/353808582_Privacy-preserving_Identity_Broadcast_for_Contact_Tracing_Applications",
  },
  {
    num: "05",
    icon: "🚗",
    title: "Driver Monitoring System",
    desc: "Real-time driver distraction detection using computer vision with live alerts for drowsiness and inattentiveness.",
    tags: ["Raspberry Pi", "NVIDIA Jetson Nano", "Python", "OpenCV"],
    github: null,
    live: null,
    publication: null,
  },
];

export const education = [
  {
    degree: "MASTER OF ENGINEERING",
    title: "Wireless Communications & Computer Networking",
    uni: "Illinois Institute of Technology",
    location: "Chicago, USA",
  },
  {
    degree: "BACHELOR OF ENGINEERING (HONS)",
    title: "Telecommunications & Network Engineering",
    uni: "University of Bedfordshire",
    location: "Luton, United Kingdom",
  },
];