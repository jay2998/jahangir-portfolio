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
  company: "Infinity Byte",
  email: "jahangir.ali2998@gmail.com",
  phone: "+92 3264053540",
  linkedin: "https://linkedin.com/in/jahangir-ali-0352451b5",
  github: "https://github.com/jay2998",
  languages: "English (Fluent) · Urdu (Native)",
  summary:
    "Results-driven Computer Networking Analyst & Full Stack Developer with 7+ years of hands-on experience across Pakistan, Canada, and the United Kingdom. Expertise in network infrastructure, IT operations, and scalable web development.",
};

export const stats = [
  { num: "7+",  label: "Years Experience" },
  { num: "3",   label: "Countries Worked" },
  { num: "200+", label: "Incidents Resolved" },
  { num: "7",   label: "Major Projects" },
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
    date: "2025 — PRESENT",
    role: "Computer Networking Analyst & Full Stack Developer",
    company: "Infinity Byte",
    location: "Lahore, Pakistan",
    bullets: [
      "Designing and maintaining network infrastructure for enterprise clients.",
      "Developing full-stack web applications and internal tools.",
      "Implementing secure access controls and network monitoring solutions.",
      "Collaborating with cross-functional teams on system integration projects.",
    ],
  },
  {
    date: "FEB 2024 — AUG 2025",
    role: "Production IT Analyst",
    company: "FGF Brands",
    location: "Canada",
    bullets: [
      "Provided 1st and 2nd-level support for production-floor systems ensuring uninterrupted operations.",
      "Resolved 90%+ of incidents within SLA targets using structured troubleshooting.",
      "Monitored system health, network connectivity, and application performance proactively.",
      "Performed regular audits for compliance with IT and security standards.",
      "Maintained technical documentation and knowledge base articles.",
    ],
  },
  {
    date: "DEC 2023 — FEB 2024",
    role: "Account Executive — IT Solutions",
    company: "DMG Inc",
    location: "Canada",
    bullets: [
      "Acted as technical liaison between business clients and internal IT teams.",
      "Analyzed client infrastructure requirements and recommended networking solutions.",
      "Supported preparation of technical proposals and deployment plans.",
    ],
  },
  {
    date: "2020 — 2023",
    role: "Freelance IT Support & Network Engineer",
    company: "Self-employed",
    location: "Remote / Pakistan",
    bullets: [
      "Designed, installed, and supported wired and wireless networks for SMBs.",
      "Configured routers, switches, firewalls, and access points.",
      "Implemented VPN solutions for secure remote access.",
      "Migrated email services and data to Microsoft 365 cloud platforms.",
    ],
  },
  {
    date: "MAY 2019 — OCT 2020",
    role: "Networking Maintenance & Repair Engineer",
    company: "IT Firm",
    location: "United Kingdom",
    bullets: [
      "Diagnosed and resolved 200+ network incidents across multiple business sites.",
      "Installed and configured LAN/WAN components including routers, switches, and firewalls.",
      "Conducted cabling inspections and minor network redesigns to reduce downtime.",
    ],
  },
  {
    date: "OCT 2018 — APR 2019",
    role: "IT Technician",
    company: "IT Support Company",
    location: "United Kingdom",
    bullets: [
      "Delivered desktop and network support to 50+ end-users.",
      "Introduced a ticket prioritization system that reduced resolution time by 40%.",
      "Assisted with software deployments, system updates, and routine backups.",
    ],
  },
];

export const projects = [
  // --- Full Stack / Web ---
  {
    num: "01",
    icon: "🛒",
    title: "E-Commerce Frontend",
    desc: "A full-featured e-commerce frontend built with React and Tailwind CSS. Includes product listings, cart management, and a clean responsive UI.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Vite"],
    github: "https://github.com/jay2998/E-commerce-frontend",
    live: "https://e-commerce-frontend-mu-jet.vercel.app",
    publication: null,
  },
  {
    num: "02",
    icon: "🏥",
    title: "Pulse Check — Hospital Monitoring",
    desc: "Hospital bedside monitoring system built with React. Tracks and visualises patient vitals in real-time with a clean clinical dashboard interface.",
    tags: ["React", "JavaScript", "Healthcare", "Dashboard"],
    github: "https://github.com/jay2998/Pulse-check",
    live: "https://pulse-check-rho.vercel.app",
    publication: null,
  },
  {
    num: "03",
    icon: "🌫️",
    title: "Real-Time AQI Tracker",
    desc: "Live air quality index tracker that fetches real-time AQI data for any location. Displays pollution levels, health recommendations, and trend data.",
    tags: ["React", "JavaScript", "API Integration", "Tailwind CSS"],
    github: "https://github.com/jay2998/real_live_aqi",
    live: "https://real-live-aqi.vercel.app",
    publication: null,
  },
  {
    num: "04",
    icon: "📊",
    title: "Finance Dashboard",
    desc: "A comprehensive personal finance dashboard with charts, expense tracking, and financial analytics. Built with React and modern UI components.",
    tags: ["React", "JavaScript", "Recharts", "Vite", "shadcn/ui"],
    github: "https://github.com/jay2998/finance-dashboard",
    live: "https://finance-dashboard-three-fawn.vercel.app",
    publication: null,
  },
  // --- Hardware / IoT ---
  {
    num: "05",
    icon: "🚗",
    title: "Driver Monitoring System",
    desc: "Real-time driver distraction detection system using computer vision to enhance road safety. Detects drowsiness and inattentiveness with live alerts.",
    tags: ["Raspberry Pi", "NVIDIA Jetson Nano", "Computer Vision", "Python", "OpenCV"],
    github: null,
    live: null,
    publication: "https://ecasp.ece.iit.edu/publications/2012-present/2023-12.pdf",
  },
  {
    num: "06",
    icon: "🏠",
    title: "IoT Automation & Security Platform",
    desc: "Secure web-based IoT system to control electrical components such as lights and fans remotely, with role-based access control mechanisms.",
    tags: ["Arduino", "Raspberry Pi", "Web Dashboard", "Access Control", "IoT"],
    github: "https://github.com/jay2998/dashboard-iot",
    live: null,
    publication: null,
  },
  {
    num: "07",
    icon: "📱",
    title: "COVID-19 Contact Tracing App",
    desc: "Android application using Bluetooth beacon technology for proximity detection and exposure tracking to identify potential COVID-19 exposure events.",
    tags: ["Android", "Bluetooth BLE", "Java", "Beacon Tech", "Public Health"],
    github: "https://github.com/jay2998/ContactTracingApp",
    live: null,
    publication: "https://www.researchgate.net/publication/353808582_Privacy-preserving_Identity_Broadcast_for_Contact_Tracing_Applications",
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