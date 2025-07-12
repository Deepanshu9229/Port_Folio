import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,

    tesla,

    threejs,
    nitrr,
    aiims,
    chatapp,
    lung,
    farmerApp,
    flutter,
    python,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Flutter Developer",
      icon: mobile,
    },
    {
      title: "Machine Learning",
      icon: backend,
    },
    {
      title: "Data Structures and Algorithms",
      icon: creator,
    },
  ];
  
  const  technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer",
      company_name: "NIT Raipur",
      icon: nitrr,
      iconBg: "#383E56",
      date: "June 2024 - July 2024",
      points: [
        "Develop a Smart Farm Management System for efficient water usage and farm data management.",
        "Features : Real-time pump control, timer adjustments, new pump addition, and farm details.",
        "Impact : Optimizes water usage, reduces wastage, and enhances farm productivity.",
      ],
    },
    {
      title: "Summer Intern",
      company_name: "AIIMS Raipur",
      icon: aiims,
      iconBg: "#E6DEDD",
      date: "June 2023 - July 2023",
      points: [
        "Analyzed biomedical signals and systems using Python and Pandas.",
        "Simulated and processed waveforms in Google Colab for signal analysis.",
      ],
    },
    
  ];
  
  // const testimonials = [
  //   {
  //     testimonial:
  //       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //     name: "Sara Lee",
  //     designation: "CFO",
  //     company: "Acme Co",
  //     image: "https://randomuser.me/api/portraits/women/4.jpg",
  //   },
  //   {
  //     testimonial:
  //       "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //     name: "Chris Brown",
  //     designation: "COO",
  //     company: "DEF Corp",
  //     image: "https://randomuser.me/api/portraits/men/5.jpg",
  //   },
  //   {
  //     testimonial:
  //       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //     name: "Lisa Wang",
  //     designation: "CTO",
  //     company: "456 Enterprises",
  //     image: "https://randomuser.me/api/portraits/women/6.jpg",
  //   },
  // ];
  
  const projects = [
    {
      name: "Chat App",
      description:
        "Implemented JWT authentication, real-time messaging with Socket.IO, and a React frontend with Redux for state management and cookie-based authentication.",
        
      tags: [
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "react",
          color: "pink-text-gradient",
        },
        {
          name: "Expess",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "redux",
          color: "blue-text-gradient",
        },
      ],
      image: chatapp,
      source_code_link: "https://chatapp-one-ashen.vercel.app/",
    },
    {
      name: "Lung Disease Detection",
      description:
        "Built and deployed an ML model with 94% accuracy for classifying respiratory conditions like Asthma and COPD, using hyperparameter tuning and cross-validation for improved performance. Deployed the model as a web app with Python (Streamlit) for real-time predictions.",
      tags: [
        {
          name: "Python",
          color: "pink-text-gradient",
        },
        {
          name: "Machine Learning",
          color: "blue-text-gradient",
        },
        {
          name: "Streamlit",
          color: "green-text-gradient",
        },
        {
          name: "Sk-learn",
          color: "blue-text-gradient",
        },
      ],
      image: lung,
      source_code_link: "https://github.com/Deepanshu9229/lung_sound_classification",
    },
    {
      name: "Farmer App",
      description:
        "Built an app for farmers using Flutter and Dart, designed in Figma. Features include real-time pump control, timer adjustments, adding new pumps, and managing farm details. The app helps optimize water usage, reduce wastage, and boost farm productivity.",
      tags: [
        {
          name: "Flutter",
          color: "blue-text-gradient",
        },
        {
          name: "Dart",
          color: "green-text-gradient",
        },
      ],
      image: farmerApp,
      source_code_link: "https://drive.google.com/file/d/1Q6Nhao0lJd9xPqExpIpYW60WdkwtzOky/view?usp=sharing",
    },
  ];
  
  export { services, technologies, experiences, projects };