// Données des projets (structure uniquement, les textes viendront des traductions)
export const projects = [
  {
    titleKey: "Data.projects.odooDeplacements.title",
    descriptionKey: "Data.projects.odooDeplacements.description",
    image: "/images/project-odoo.png",
    technologies: ["Odoo", "Python", "XML", "PostgreSQL", "OWL"],
    githubUrl: "https://github.com/xxxmed/gestionDeplacements"
  },
  {
    titleKey: "Data.projects.gestionStock.title",
    descriptionKey: "Data.projects.gestionStock.description",
    image: "/images/project-stock.png",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "XAMPP"],
    githubUrl: "https://github.com/xxxmed"
  },
  {
    titleKey: "Data.projects.dataWarehouse.title",
    descriptionKey: "Data.projects.dataWarehouse.description",
    image: "/images/project1.png",
    technologies: ["PostgreSQL", "DBT", "Google Maps API", "ETL"],
    githubUrl: "https://github.com/xxxmed/Analyzing-Customer-Reviews-of-Bank-Agencies-in-Morocco"
  },
  {
    titleKey: "Data.projects.medicalPlatform.title",
    descriptionKey: "Data.projects.medicalPlatform.description",
    image: "/images/project2.png",
    technologies: ["Spring Boot", "Hibernate", "MySQL", "Kafka", "WebSocket"],
    githubUrl: "https://github.com/MedTahiri/Plateforme-d-Analyse-des-Dossiers-Medicaux-avec-Pipeline-Temps-Reel"
  },
  {
    titleKey: "Data.projects.timeSeriesAnalysis.title",
    descriptionKey: "Data.projects.timeSeriesAnalysis.description",
    image: "/images/project-timeseries.png",
    technologies: ["Python", "NumPy", "Pandas", "Statsmodels", "Plotly"],
    githubUrl: "https://github.com/xxxmed"
  }
]

// Données des compétences organisées par catégorie
export const skillCategories = {
  erp: {
    titleKey: "Data.skills.categories.erp",
    skills: [
      { name: "Odoo" },
    ]
  },
  backend: {
    titleKey: "Data.skills.categories.backend",
    skills: [
      { name: "Java" },
      { name: "Spring Boot" },
      { name: "Hibernate" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "Python" },
      { name: "Flask" },
      { name: "PHP" },
      { name: "Symfony" },
      { name: "C" },
      { name: "C++" },
    ]
  },frontend: {
    titleKey: "Data.skills.categories.frontend",
    skills: [
      { name: "JavaScript" },
      { name: "React" },
      { name: "Next.js" },
      { name: "HTML5/CSS3" },
      { name: "Bootstrap" },
    ]
  },
  database: {
    titleKey: "Data.skills.categories.database",
    skills: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "Oracle" },
      { name: "MongoDB" },
      { name: "Redis" },
    ]
  },
  
  devops: {
    titleKey: "Data.skills.categories.devops",
    skills: [
      { name: "Git/GitHub" },
      { name: "GitHub Actions" },
      { name: "Docker" },
      { name: "Postman" },
    ]
  },
  testing: {
    titleKey: "Data.skills.categories.testing",
    skills: [
      { name: "JUnit" },
      { name: "Jest" },
    ]
  },
  dataScience: {
    titleKey: "Data.skills.categories.dataScience",
    skills: [
      { name: "Python (NumPy/Pandas)" },
      { name: "Matplotlib" },
      { name: "MATLAB" },
      { name: "R" },
      { name: "SPSS" },
    ]
  },
  modeling: {
    titleKey: "Data.skills.categories.modeling",
    skills: [
      { name: "UML" },
      { name: "Merise" },
    ]
  },
}

// Liste plate pour compatibilité
export const skills = Object.values(skillCategories).flatMap(cat => 
  cat.skills.map(skill => ({ ...skill, categoryKey: cat.titleKey }))
)

// Informations personnelles
export const personalInfo = {
  name: "Ahmed Raji",
  titleKey: "Data.personalInfo.title",
  email: "ahmedraji408@gmail.com",
  phone: "+212 605 47 94 18",
  location: "Rabat, Maroc",
  bioKey: "Data.personalInfo.bio",
  socialLinks: {
    github: "https://github.com/xxxmed",
    linkedin: "https://www.linkedin.com/in/ahmed-raji-2063a9237",

  }
}

// Expériences professionnelles
export const experiences = [
  {
    titleKey: "Data.experiences.backend.title",
    companyKey: "Data.experiences.backend.company",
    periodKey: "Data.experiences.backend.period",
    descriptionKey: "Data.experiences.backend.description",
    technologies: ["Node.js", "Express.js", "MongoDB", "GitHub Actions", "Jest"]
  },
  {
    titleKey: "Data.experiences.dataIA.title",
    companyKey: "Data.experiences.dataIA.company",
    periodKey: "Data.experiences.dataIA.period",
    descriptionKey: "Data.experiences.dataIA.description",
    technologies: ["Python", "PyTorch", "UNet 3D", "YAML", "NIfTI"]
  }
]

// Formations
export const education = [
  {
    degreeKey: "Data.education.insea.degree",
    schoolKey: "Data.education.insea.school",
    periodKey: "Data.education.insea.period",
    descriptionKey: "Data.education.insea.description"
  },
  {
    degreeKey: "Data.education.fst.degree",
    schoolKey: "Data.education.fst.school",
    periodKey: "Data.education.fst.period",
    descriptionKey: "Data.education.fst.description"
  }
]
