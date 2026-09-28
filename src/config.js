// Config file for DDS TOTAL FINANCIAL SERVICES
// The client can update their Google Form URL, contact details, and site settings here.

export const SITE_CONFIG = {
  name: "DDS TOTAL FINANCIAL SERVICES",
  shortName: "DDS TOTAL",
  tagline: "Empowering Your Financial Future with Precision & Trust",
  
  // Replace this URL with your actual Google Form Embed link
  // Instructions: In Google Forms, click 'Send' -> '<>' Embed HTML -> copy the src URL inside the iframe tag
  googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSe-YOUR_FORM_ID_HERE/viewform?embedded=true",
  
  // Alternative direct Google Form link for opening in a new tab if needed
  googleFormDirectLink: "https://forms.google.com",

  contact: {
    phone: "+91 98765 43210",
    email: "contact@ddstotal.com",
    address: "Suite 402, Financial Tower, Business Bay",
    workingHours: "Mon - Sat: 9:00 AM - 7:00 PM"
  },

  stats: [
    { label: "Assets Under Advisory", value: "₹250+ Cr", icon: "TrendingUp" },
    { label: "Satisfied Investors", value: "1,500+", icon: "Users" },
    { label: "Years of Excellence", value: "12+", icon: "Award" },
    { label: "Client Retention Rate", value: "98.5%", icon: "ShieldCheck" }
  ],

  services: [
    {
      id: "wealth-management",
      title: "Comprehensive Wealth Advisory",
      description: "Tailored portfolio construction focused on long-term capital growth, asset allocation, and risk management.",
      icon: "LineChart",
      badge: "Popular"
    },
    {
      id: "mutual-funds",
      title: "Mutual Funds & SIP Planning",
      description: "Data-driven fund selection aligned with your risk profile, financial goals, and horizon.",
      icon: "PieChart",
      badge: "Goal Based"
    },
    {
      id: "retirement",
      title: "Retirement & Pension Solutions",
      description: "Structure a stress-free retirement income stream ensuring financial independence in your golden years.",
      icon: "ShieldAlert",
      badge: "Essential"
    },
    {
      id: "hnwi-advisory",
      title: "Bespoke HNWI Solutions",
      description: "Exclusive wealth management strategies for High-Net-Worth individuals with dedicated fund managers.",
      icon: "Crown",
      badge: "Premium"
    },
    {
      id: "tax-planning",
      title: "Tax-Efficient Investing",
      description: "Optimize investment returns while minimizing tax liabilities legally using ELSS and smart vehicles.",
      icon: "Calculator",
      badge: "Smart Savings"
    },
    {
      id: "risk-insurance",
      title: "Risk & Capital Protection",
      description: "Protect your family's assets and financial stability against unexpected life events.",
      icon: "Lock",
      badge: "Safety Net"
    }
  ],

  faqs: [
    {
      question: "How does DDS TOTAL FINANCIAL SERVICES handle client investments?",
      answer: "We follow a strictly personalized fiduciary approach. After assessing your financial goals, risk appetite, and time horizon, we construct a customized asset allocation strategy using diversified, high-performing instruments."
    },
    {
      question: "How do I connect and start investing with DDS TOTAL?",
      answer: "Simply fill out our Connect Form on this website (powered by Google Forms). Our certified wealth advisor will reach out to you within 24 hours for a complimentary initial consultation."
    },
    {
      question: "What is the minimum investment required to get started?",
      answer: "We offer solutions starting from monthly SIPs of ₹500 for beginner investors to multi-crore customized portfolio advisory for HNWI clients."
    },
    {
      question: "Are my investments safe and transparent?",
      answer: "Yes, all investments are held directly under your name with SEBI-regulated custodians and fund houses. You receive transparent periodic portfolio reports and complete online tracking access."
    }
  ]
};
