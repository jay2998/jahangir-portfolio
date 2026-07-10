export const personalInfo = {
  name: "Jahangir Ali",
  title: "Full Stack Developer & Network Administrator",
  title2: "Network Administrator",
  titles: [
    "Full Stack Developer & Network Administrator",
    "Computer Networking Analyst",
    "Network Infrastructure Engineer",
    "IoT Solutions Builder",
  ],
  location: "Remote",
  company: "Afaq Technologies",
  email: "jahangir.ali2998@gmail.com",
  phone: "+1 647-325-2998 · +92 3091566664",
  linkedin: "https://linkedin.com/in/jahangir-ali-0352451b5",
  github: "https://github.com/jay2998",
  languages: "English (Fluent) · Urdu (Native)",
  summary:
    "Results-driven professional with 6+ years of full-time experience spanning enterprise networking, IT operations, and full-stack web development across Pakistan, Canada, and the United Kingdom, plus early part-time IT experience gained during undergraduate studies in the UK.",
  headline:
    "Skilled in designing secure network architectures, leading incident response for 200+ resolved cases, and delivering scalable, user-focused applications with React, Node.js, and Tailwind CSS.",
  highlights: [
    "6+ years in enterprise networking, IT operations, and full-stack development",
    "Experience across infrastructure, product teams, and client-facing roles",
    "Designed secure networks and resolved 200+ incidents for reliability",
    "Built full-stack applications with React, Node.js, and Tailwind CSS",
  ],
  focusAreas: [
    "Secure network architecture and infrastructure design",
    "Incident response and systems administration",
    "Full-stack web development with React, Node.js, and Tailwind CSS",
    "IoT systems and computer vision applications",
  ],
};

export const stats = [
  { num: "6+",  label: "Years Experience" },
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
      "Wireshark", "VMware", "VirtualBox", "Git", "AnyDesk", "TeamViewer",
      "RDP", "Raspberry Pi", "Arduino", "NVIDIA Jetson",
      "Android Studio", "Bluetooth BLE", "Traceroute", "Group Policy", "SharePoint",
      "JSX", "Tailwind CSS", "Vite", "Vercel", "shadcn/ui", "Recharts",
    ],
  },
];

export const experiences = [
  {
    date: "FEB 2024 — PRESENT",
    role: "Full Stack Developer & Network Administrator",
    company: "Afaq Technologies",
    location: "Remote",
    bullets: [
      "Architected and engineered responsive, high-performance web applications using React, Node.js, Tailwind CSS, and JavaScript/JSX.",
      "Spearheaded development of a full-stack Point-of-Sale (POS) system, focusing on an efficient frontend and user-friendly interface to streamline transactions.",
      "Designed and implemented features for a robust Event Management platform, ensuring clean code architecture and seamless cross-device responsiveness.",
      "Managed network infrastructure, including routers, switches, wireless access points, VPNs, and firewall rules to ensure secure, reliable connectivity.",
      "Conducted Wi-Fi site surveys and migrated email and file systems to Microsoft 365 and cloud platforms, enhancing efficiency and data security.",
    ],
  },
  {
    date: "DEC 2023 — FEB 2024",
    role: "Technical Sales Support Engineer",
    company: "DMG Inc",
    location: "Toronto, Ontario, Canada (Contract)",
    bullets: [
      "Supported clients with tailored IT solutions, boosting customer satisfaction by 30%.",
      "Conducted network needs assessments and recommended upgrades to optimise performance.",
      "Delivered technical demonstrations and assisted in proposals for IT infrastructure solutions.",
    ],
  },
  {
    date: "JAN 2020 — DEC 2023",
    role: "Freelance IT Projects",
    company: "Self-employed",
    location: "Remote",
    bullets: [
      "Configured routers, switches, and wireless access points for small business and residential clients.",
      "Developed custom websites and mobile applications tailored to specific business needs, including solutions for property management and construction firms.",
      "Set up secure VPN connections and firewall rules for remote access, and migrated email and file systems to Microsoft 365 and cloud platforms.",
    ],
  },
  {
    date: "MAY 2019 — OCT 2020",
    role: "Networking Maintenance & Repair Engineer (Part-Time)",
    company: "Hubble Telecom UK Limited",
    location: "London, United Kingdom · Alongside undergraduate studies",
    bullets: [
      "Diagnosed and resolved 200+ business network issues with a 95% resolution rate.",
      "Configured routers, switches, and firewalls to improve stability and security.",
      "Implemented infrastructure upgrades that increased uptime by 18%, while ensuring secure and compliant access control for corporate clients.",
    ],
  },
  {
    date: "OCT 2018 — APR 2019",
    role: "Information Technology Analyst (Part-Time)",
    company: "K.S.C. IT Limited",
    location: "London, United Kingdom · Alongside undergraduate studies",
    bullets: [
      "Provided IT support to 50+ end-users weekly, covering hardware, software, and network issues.",
      "Reduced ticket resolution time by 40% by introducing a structured triage system.",
      "Installed and configured network devices and trained staff on new technologies to improve productivity.",
    ],
  },
];

export const projects = [
  {
    num: "01",
    icon: "🛍️",
    title: "Point-of-Sale (POS) System",
    desc: "Full-featured POS system built at Afaq Technologies for managing sales transactions, billing, and inventory tracking, with a SQL-backed database for persistent, reliable record-keeping.",
    tags: ["React", "JSX", "Node.js", "SQL", "Tailwind CSS"],
    github: null,
    live: "https://pos.afaqmis.com/login",
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
    publication: "https://ecasp.ece.iit.edu/publications/2012-present/2023-12.pdf",
  },
];

export const education = [
  {
    degree: "MASTER OF ENGINEERING",
    title: "Wireless Communications & Computer Networking",
    uni: "Illinois Institute of Technology",
    location: "Chicago, USA",
    desc: "Graduate study focused on wireless network design, secure communications, and advanced networking protocols.",
  },
  {
    degree: "BACHELOR OF ENGINEERING (HONS)",
    title: "Telecommunications & Network Engineering",
    uni: "University of Bedfordshire",
    location: "Luton, United Kingdom",
    desc: "Undergraduate study covering network engineering fundamentals, telecommunications systems, and applied electronics.",
  },
];