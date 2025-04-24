import {  Banknote, ChartNoAxesCombined,  Check,  Handshake, LaptopMinimal, Shield, ShieldCheck, TimerReset, Zap } from "lucide-react";


export const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Water Atms', href: '/water-atms' },
    { name: 'Smart Meters', href: '/smart-meters' },
    { name: 'Schedule Demo', href: '/schedule-demo' },
  ];

  export const atmData = [
    {
      id: 1,
      image: "/images/battery.png", 
      title: "Long Battery Life",
      description: "Our Smart Water Meters feature energy-efficient technology for long-lasting battery life, ensuring service when you need it."
    },
    {
      id: 2,
      image: "/images/prepay.png",
      title: "Flexible Payment Options",
      description: "Select the payment method that fits you best! Our meters provide advance payments or usage-based billing for easy access."
    },
    {
      id: 3,
      image: "/images/report.png",
      title: "Comprehensive Reports",
      description: "Stay informed with detailed water usage reports that give insights into your consumption patterns for better management."
    },
    {
      id: 4,
      image: "/images/web.png",
      title: "Web Integration",
      description: "Easily manage your water usage remotely through web integration, accessing real-time data via our online platform."
    }
  ];
  
  export const products = [
    {
      title: "Water ATMs",
      description: "Our innovative Water ATMs provide clean, safe drinking water on demand. These self-service kiosks are perfect for communities, educational institutions, and public spaces, ensuring access to clean water at affordable prices.",
      features: [
        "Automated water dispensing",
        "Scalability for growing communities",
        "24/7 access to clean water",
        "Green energy compatible",
        "M-Pesa integration for cashless transactions"
      ],
      image: "/images/atm.png",
      link: "/water-atms",
      reverse: true,
      imageClass: "object-contain"
    },
    {
      title: "Smart Water Meters",
      description: "Our state-of-the-art smart water meters provide accurate readings, leak detection, and real-time monitoring. Designed with precision engineering and advanced IoT technology, these meters help utilities and consumers manage water resources efficiently.",
      features: [
        "Flexible payment options (prepaid/postpaid)",
        "Comprehensive reports and analytics",
        "Long battery life with low power consumption",
        "Web integration for remote management",
      ],
      image: "/images/smartmeter.png",
      link: "/smart-meters",
      reverse: false,
      imageClass: "object-contain" 
    }
    
  ];

  export const cardData = [
    {
      id: 1,
      image: "/images/timer.png",
      title: "24/7 Access",
      description: "Enjoy round-the-clock access to clean, safe drinking water whenever you need it. We ensure you stay hydrated day and night!"
    },
    {
      id: 2,
      image: "/images/scale.png", 
      title: "Scalability",
      description: "Designed to grow with your community, our Smart Water ATMs can easily adapt to increasing demand, ensuring everyone has access."
    },
    {
      id: 3,
      image: "/images/mpesa.png",
      title: "M-Pesa Integration",
      description: "No cash? No worries! Our ATMs support M-Pesa, making mobile payments quick and secure for effortless water access."
    },
    {
      id: 4,
      image: "/images/dispensing.png",
      title: "Automated Dispensing",
      description: "Get hassle-free water dispensing at the touch of a button. Only pay for what you need with our precise control system."
    }
  ];
  
  export const meterData = [
    {
      id: 1,
      image: "/images/timer.png",
      title: "24/7 Access",
      description: "Enjoy round-the-clock access to clean, safe drinking water whenever you need it. We ensure you stay hydrated day and night!"
    },
    {
      id: 2,
      image: "/images/scale.png", 
      title: "Scalability",
      description: "Designed to grow with your community, our Smart Water ATMs can easily adapt to increasing demand, ensuring everyone has access."
    },
    {
      id: 3,
      image: "/images/mpesa.png",
      title: "M-Pesa Integration",
      description: "No cash? No worries! Our ATMs support M-Pesa, making mobile payments quick and secure for effortless water access."
    },
    {
      id: 4,
      image: "/images/dispensing.png",
      title: "Automated Dispensing",
      description: "Get hassle-free water dispensing at the touch of a button. Only pay for what you need with our precise control system."
    }
  ];

  export const testimonials = [
    {
      quote: "Ubuntu Waterhub smart meters helped us detect leaks, reduce wastage, and lower costs. The real-time data makes facility management simpler and more efficient.",
      author: "Sarah Johnson",
      role: "Facility Manager",
      company: "Green Valley Properties",
      rating: 5,
    },
    {
      quote: "With Ubuntu Waterhub, we monitor water usage easily. The dashboard is user-friendly, and their support team guided us through every step of implementation.",
      author: "Michael Chen",
      role: "Water Resource Director",
      company: "Westlake City Council",
      rating: 5,
    },
    {
      quote: "The Water ATMs have given our community 24/7 access to clean water. They’re easy to use, reliable, and reduce dependency on plastic bottles.",
      author: "Priya Patel",
      role: "Community Development Officer",
      company: "Harmony Foundation",
      rating: 4,
    },
    {
      quote: "Ubuntu Waterhub helped us install a tailored solution. We've improved efficiency, reduced water bills, and received excellent support throughout the entire project journey.",
      author: "James Wilson",
      role: "Operations Director",
      company: "Clearwater Resorts",
      rating: 5,
    },
    {
      quote: "After using Ubuntu Waterhub, our university reduced water usage and increased awareness. The system supports our green goals and student-led sustainability initiatives.",
      author: "Elena Rodriguez",
      role: "Sustainability Manager",
      company: "Western University",
      rating: 4,
    },
    {
      quote: "We now track water flow in real time, spot anomalies quickly, and make better decisions. Ubuntu Waterhub has boosted service delivery across departments.",
      author: "Daniel Okoth",
      role: "Environmental Engineer",
      company: "Nairobi Smart City Project",
      rating: 5,
    },
  ];

  export const features = [
    {
      icon: <TimerReset size={28} />,
      title: '24/7 Access to Clean Water',
      description: 'Our Water ATMs provide round-the-clock access to clean, safe drinking water, ensuring you stay hydrated at all times.'
      
    },
    {
      icon: <Handshake size={28} />,
      title: 'Business Empowerment',
      description: 'Empower your business with our smart water solutions, designed to enhance efficiency and reduce operational costs.'
     
    },
    {
      icon: <LaptopMinimal size={28} />,
      title: 'Web Integration',
      description: 'Easily manage your water usage remotely through web integration, accessing real-time data via our online platform.',
    },
    {
      icon: <Shield size={28} />,
      title: 'Integrity & Security',
      description: 'Our smart water solutions are designed with advanced security features to protect your data and ensure the integrity of your water supply.'
      
    },
    {
      icon: <ChartNoAxesCombined size={28} />,
      title: 'Scalability',
      description: 'Our smart water solutions are designed to grow with your community, ensuring everyone has access to clean water.'
      
    },
    {
      icon: <Zap size={28} />,
      title: 'Green Energy Compatible',
      description: 'Our Water ATMs are compatible with green energy solutions, reducing your carbon footprint and promoting sustainability.'
      
    }
  ];

  export const waterMeterFeatures = [
    {
      id: "measurement-tech",
      name: "Measurement Technology",
      description: "Select the flow measurement technology that best suits your needs",
      options: [
        { value: "ultrasonic", label: "Ultrasonic (Standard)", pricing: "Included" },
        { value: "electromagnetic", label: "Electromagnetic", pricing: "Premium" },
        { value: "mechanical", label: "Mechanical", pricing: "Economy" }
      ]
    },
    {
      id: "connectivity",
      name: "Connectivity Options",
      description: "Choose how your meters will transmit data",
      options: [
        { value: "nb-iot", label: "NB-IoT", pricing: "Standard" },
        { value: "lora", label: "LoRaWAN", pricing: "Standard" },
        { value: "cellular", label: "4G/LTE Cellular", pricing: "Premium" },
        { value: "sigfox", label: "Sigfox", pricing: "Economy" }
      ]
    },
    {
      id: "battery",
      name: "Battery Life",
      description: "Select your preferred battery lifespan",
      options: [
        { value: "5yr", label: "5 Year", pricing: "Economy" },
        { value: "10yr", label: "10 Year", pricing: "Standard" },
        { value: "15yr", label: "15 Year", pricing: "Premium" }
      ]
    },
    {
      id: "alerts",
      name: "Alert Systems",
      description: "Choose which alert functionalities you need",
      options: [
        { value: "basic", label: "Basic (Leaks & Tampering)", pricing: "Included" },
        { value: "advanced", label: "Advanced (Leak, Burst, Tampering, Reverse Flow)", pricing: "Premium" },
        { value: "custom", label: "Custom Alert Configuration", pricing: "Custom" }
      ]
    },
    {
      id: "software",
      name: "Management Software",
      description: "Select the software package for monitoring and management",
      options: [
        { value: "basic", label: "Basic Web Dashboard", pricing: "Included" },
        { value: "advanced", label: "Advanced Analytics Platform", pricing: "Premium" },
        { value: "enterprise", label: "Enterprise Integration Suite", pricing: "Enterprise" }
      ]
    }
  ];

export const atmFeatures = [
  {
    id: "purification",
    name: "Purification Technology",
    description: "Select the water purification technology that best suits your needs",
    options: [
      { value: "ro-uv", label: "RO + UV (Standard)", pricing: "Included" },
      { value: "ro-uv-uf", label: "RO + UV + UF + Mineralization", pricing: "Premium" },
      { value: "uf-uv", label: "UF + UV", pricing: "Economy" }
    ]
  },
  {
    id: "capacity",
    name: "Dispensing Capacity",
    description: "Choose your daily water dispensing capacity",
    options: [
      { value: "1000l", label: "1,000 Liters/day", pricing: "Economy" },
      { value: "3000l", label: "3,000 Liters/day", pricing: "Standard" },
      { value: "5000l", label: "5,000+ Liters/day", pricing: "Premium" }
    ]
  },
  {
    id: "payment",
    name: "Payment Options",
    description: "Select which payment methods to include",
    options: [
      { value: "basic", label: "Coin/Card Only", pricing: "Economy" },
      { value: "standard", label: "Coin/Card/Mobile Pay", pricing: "Standard" },
      { value: "premium", label: "All Methods + RFID + QR", pricing: "Premium" }
    ]
  },
  {
    id: "power",
    name: "Power Configuration",
    description: "Choose the power source configuration",
    options: [
      { value: "mains", label: "Mains Power Only", pricing: "Economy" },
      { value: "hybrid", label: "Hybrid (Mains + Battery Backup)", pricing: "Standard" },
      { value: "solar", label: "Solar Compatible", pricing: "Premium" }
    ]
  },
  {
    id: "monitoring",
    name: "Remote Monitoring",
    description: "Select your preferred monitoring capabilities",
    options: [
      { value: "basic", label: "Basic Status Monitoring", pricing: "Included" },
      { value: "advanced", label: "Advanced Diagnostics & Alerts", pricing: "Premium" },
      { value: "premium", label: "Full Suite + Predictive Maintenance", pricing: "Enterprise" }
    ]
  },
  {
    id: "housing",
    name: "Housing Options",
    description: "Choose the external housing type",
    options: [
      { value: "standard", label: "Standard Indoor", pricing: "Economy" },
      { value: "weatherproof", label: "Weatherproof", pricing: "Standard" },
      { value: "ruggedized", label: "Ruggedized for Harsh Environments", pricing: "Premium" }
    ]
  }
];


 export const faqItems = [
  {
    question: "How quickly will I receive a response?",
    answer: "We aim to respond to all inquiries within 24 business hours. For urgent matters, please call our support line directly."
  },
  {
    question: "Do you offer product demonstrations?",
    answer: "Yes! You can schedule a demo through our website or by contacting our sales team directly at info@waterhub.africa"
  },
  {
    question: "What support options are available?",
    answer: "We offer email support, phone support, and on-site technical assistance for enterprise customers. All products come with a standard support package."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship our products worldwide. Shipping costs and delivery times vary by location. Contact our sales team for specific information."
  }
];

export const atmItems = [
  {
    icon: Banknote,
    title: "Tarrifs",
    description: "Fair and flexible pricing",
  },
  {
    icon: Zap,
    title: "Low Power",
    description: "5+ year battery life",
  },
  {
    icon: Check,
    title: "High Accuracy",
    description: "±0.5% measurement precision",
  },
  {
    icon: ShieldCheck,
    title: "Tamper-Proof",
    description: "Advanced security features",
  },
];
  
  