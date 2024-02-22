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
    meta,
    starbucks,
    tesla,
    jupyter,
    python,
    azure,
    sql,
    vidi,
    apotex,
    heineken,
    shopify,
    carrent,
    prospeaker,
    powerco,
    diabetesdata2,
    spacey,
    jobit,
    tripguide,
    hoobank,
    profile,
    threejs,
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
      title: "Data Modeling",
      icon: web,
    },
    {
      title: "Data Visualisation",
      icon: mobile,
    },
    {
      title: "Business Insights",
      icon: backend,
    },
    {
      title: "AI & Machine Learning",
      icon: creator,
    },
  ];
  
  const technologies = [
    
    {
      name: "Python",
      icon: python,
    },
    
    {
      name: "jupyter",
      icon: jupyter,
    },
    
    {
      name: "azure",
      icon: azure,
    },
    {
      name: "docker",
      icon: docker,
    },
   
    {
      name: "sql",
      icon: sql,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Data Scientist",
      company_name: "Apotex",
      icon: apotex,
      iconBg: "#E6DEDD",
      date: "Sep 2022",
      points: [
        "Worked in a team to implement predictive maintenance approach using machine learning model with the use of anomaly detection algorithm to identify problems on machines before they lead to breakdowns and effectively plan maintenance, thereby optimizing maintenance task, improving machine uptime, and reducing cost of maintenance.",
        "Advanced analysis: Mining and analyzing data to build and improve analytics.",
        "Data science experimentation and testing: Data wrangling, data visualization, feature engineering, model selection, tuning, and maintenance/enhancement.",
        "Communicating project risks, learnings, and outcomes with technical and business stakeholders.",
      ],
    },
    {
      title: "Data Scientist | Automation Engineer |",
      company_name: "Heineken",
      icon: heineken,
      iconBg: "#E6DEDD",
      date: "September 2020 - September 2022",
      points: [
        "Data Collection and Analysis: Efficiently collected and compiled data from different breweries and Customer Relation Officers to generate comprehensive progress reports. This involved meticulous organisation and analysis of data to ensure accurate and valuable insights for decision-making.",
        "Dashboard Design and Visualisation: Designed interactive dashboards using Power BI, providing real-time monitoring of project progress. These visually engaging dashboards improved efficiency in project evaluation and facilitated data-driven decision-making for the business hub.",
        "Used system metrics to develop several data models to improve maintenance & energy consumption to support data driven decision making.",
        "Mass Migration of platforms to Cloud: Successfully led the mass migration of offline platforms for data capturing to cloud-based systems in collaboration with the IT team through strategic planning and analysis. This transformation reduced physical interactions and manual collation of data by 40%, enhancing overall operational efficiency and safety of the breweries.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Emmanuel proved me wrong.",
      name: "Jennifer",
      designation: "CEO",
      company: "Muud",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Emmanuel does.",
      name: "Chichi Mokolo",
      designation: "CEO",
      company: "Marvel",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Emmanuel optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Malizu Chigbo",
      designation: "CEO",
      company: "Ogamife",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "PowerCompany",
      description:
        "A client PowerCo - a major gas and electricity utility company that supplies to small and medium sized enterprises is looking to determine the reason for customer churn and find ways to improve retention. They also want to determine if price sensitivity is a major factor for customer churn and if not to what extent does it influence churn. Click GitHub logo to view project.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Classification Algorithm",
          color: "green-text-gradient",
        },
        {
          name: "Feature Engineering",
          color: "pink-text-gradient",
        },
      ],
      image: powerco,
      source_code_link: "https://github.com/Mannie297/PowerCompany/blob/main/powerco.ipynb" ,
    },
    {
      name: "Diabetes Model",
      description:
        "The data consists of diagnostic information about some patients who have been tested for diabetes. The final column in the dataset (Diabetic) contains the value 0 for patients who tested negative for diabetes, and 1 for patients who tested positive. This is the label that the model will be trained to predict. Most of the other columns (Pregnancies, PlasmaGlucose, DiastolicBloodPressure, and so on) are the features that will be used to predict the Diabetic label. Click GitHub logo to view project",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "EDA",
          color: "green-text-gradient",
        },
        {
          name: "Multi classification",
          color: "pink-text-gradient",
        },
      ],
      image: diabetesdata2,
      source_code_link: "https://github.com/Mannie297/DiabetesPrediction/blob/main/diabetes_prediction.ipynb",
    },
    {
      name: "IBM DataScience Project",
      description:
        "Space X advertises Falcon 9 rocket launches on its website with a cost of 62 million dollars; other providers cost upward of 165 million dollars each, much of the savings is because Space X can reuse the first stage. Therefore, if we can determine if the first stage will land, we can determine the cost of a launch. This information can be used if an alternate company wants to bid against space X for a rocket launch. This report shows the methodology, exploratory data analysis and predictive models used to determine if a launch will be successful or not.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "SQL",
          color: "green-text-gradient",
        },
        {
          name: "API",
          color: "pink-text-gradient",
        },
        {
          name: "DASH",
          color: "green-text-gradient",
        },
      ],
      image: spacey,
      source_code_link: "https://github.com/Mannie297/DataScience_Capstone_Project_Final",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };