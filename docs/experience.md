# Résumé &nbsp; &nbsp; <button class="VPButton medium brand" @click="viewPdf()">View PDF Version</button>

## Experience

### [Qamous.org](https://www.qamous.org)
**Lead Developer**  
September 2023 – Present  
- Engineered using ReactJS, TypeScript, NestJS, Sass, MySQL, TypeORM, Docker, Jest; delivering a 91% performance score
- Planned and executed the deployment strategy using AWS: Leveraged ECR and ECS for backend and database deployment, ensured secure API access via ALB with HTTPS, and integrated Amazon EFS and S3 for scalable logging and data backup
- Designed and incorporated a secure authentication strategy with bcrypt, Express, and Passport.js to safeguard user credentials
- Scraped language data, implemented RESTful APIs and integrated React Query for seamless front-to-back data communication

### eClinical Solutions - New York, NY
**Full Stack Software Engineer (AI/ML Team)**  
December 2022 - September 2023  
- Integrated and deployed AWS S3 AI/ML models, performed SQL migrations, and optimized query performance by 10%
- Applied OOP principles and .NET front-end development expertise to resolve over 15 complex bugs within tight deadlines using Angular and TypeScript, reducing overall system downtime and enhancing user experience
- Designed and implemented over 20 new features based on market research and collaborated in an Agile Scrum framework
- Developed and maintained backend APIs, executed software restructuring, and drove implementation of key features using C#

### Columbia University - New York, NY
**Application Systems Developer (Part Time)**  
June 2022 - December 2022  
- Performance-tuned the Directory of Classes system and developed a new system, decreasing update runtime by 83% using C
- Tested the performance and reliability of the new system using python and bash, contributing to the system’s data accuracy
- Prepared UNIX shell scripts for end-to-end testing of applications, ensuring system stability for over 4,000 students and staff

### Wayfair - Boston, MA
**People Analytics Co-op**  
December 2021 - June 2022  
- <u>Selected as Co-op Captain:</u> created and facilitated events for hundreds of co-ops fostering engagement and community-building
- Generated complex analytics SQL queries for Google BigQuery and DataStudio to answer stakeholders and created query writing & optimization resources, allowing less technical employees to dedicate over 25% more time towards client meetings
- Automated various team responsibilities including the processing time reduction for a regular daily operation by 68% using BigQuery and eliminating a 16 hr/month data-extraction task & a 6.25 hr/month employee data cleanup task using Python
- Presented data analyses and insights to leadership and identified enhancements for recruitment and candidate experience
- Programmed a Slack chatbot saving employees valuable hours finding time-sensitive resources

## Education
### The University of Texas - Austin, TX
**M.S. Artificial Intelligence | Cumulative GPA: 4.0**
<br />
August 2024 - August 2025
- <u>Relevant Coursework:</u> 
  - Machine Learning - Classification, Regression, Naïve Bayes, SVMs, HMMs, Statistical Learning Theory, SVD / PCA, MVN, Kernel Methods
  - Reinforcement Learning - Temporal Difference Learning (TD), Monte Carlo (MC), SARSA, Q-Learning, Dynamic Programming, Dyna-Q / Dyna-Q+, Policy Gradients, REINFORCE, Monte Carlo Tree Search (MCTS)
  - Deep Learning - Neural Network Design and Training, Stochastic Gradient Descent (SGD), Convolutional Neural Networks (CNNs), Recurrent Neural Networks (RNN), Transformers and Attention Mechanisms using PyTorch and Scikit-Learn, Normalization and Residual Connections, Model Overfitting Mitigation, Gradient Computation and Optimization

### Northeastern University - Boston, MA
**B.S. Computer Science with a concentration in Artificial Intelligence**
<br />
September 2019 - August 2022
- <u>Resident Assistant:</u> fostered relationship development among over 100 students and planned staff meetings
- <u>Relevant Coursework:</u> 
  - Information Retrieval – Retrieval Models: Boolean, Vector Space, BM25, Language Models, Search Engine Architecture, ElasticSearch and Kibana, Indexing and Query Optimization, Web Crawling and Link Analysis (PageRank, HITS, SALSA), Text Classification and Feature Engineering, IR Evaluation Metrics (Precision, Recall, nDCG, etc.), Learning to Rank (LambdaMART, Pairwise Models)
  - Foundations of Artificial Intelligence – deploying Convolutional Neural Network (CNN), Recurrent Neural Network (RNN), Long Short-Term Memory (LSTM) models using PyTorch and Scikit-Learn
  - Machine Learning I – regression, classification, decision trees, hypothesis testing, Naïve Bayes, k-means clustering, k-NN   
  - Software Development – Git, JSON, Test-Driven Development, unit testing, GUI testing, pair programming, documentation, abstraction
- <u>Outreach Coordinator, Research Assistant:</u> updated website, migrated professor resources, and analyzed mice dMRI images

<script>
export default {
  methods: {
    viewPdf() {
      window.location.href = "Anthony_Resume.pdf";
    }
  }
}
</script>