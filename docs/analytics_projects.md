# Analytics Projects Content

This document is the editable source for analytics project content on the portfolio site. Update this file first, then mirror the approved content into the actual pages.

Projects are grouped by category. Each project has a Status line: `On site` (already mirrored to the pages), `Draft` (new, not yet on the pages), or `WIP` (work in progress, hidden). `TBD` marks content that still needs input.

# Category: Workforce Planning

## Project 1: Headcount Simulation Framework

### Status
On site

### Display Title
Headcount Simulation Framework

### Problem
Previous forecasting processes were time-consuming and relied on probability assumptions that were not statistically robust, making it difficult to account for uncertainty in workforce planning.

### Model
Markov-chain-based workforce transition model.

### Algorithms
Markov Chain, Monte Carlo Simulation (Monte Carlo to be confirmed)

### Impact
Improves workforce planning with scalable headcount forecasts.

### Page Copy
Headcount Simulation Framework helps HR leaders forecast future workforce size under join, resignation, and internal transition scenarios. The project uses a Markov-chain-based workforce simulation model with transition probabilities estimated from historical employee attributes. The model can use more than five attributes across 10,000+ employees to support strategic workforce planning and workforce size forecasting.

## Project 2: Labor Cost Simulation Framework

### Status
On site

### Display Title
Labor Cost Simulation Framework

### Problem
Labor cost planning can be difficult when future workforce movement, hiring, resignation, and internal transition patterns are uncertain.

### Model
EBM-based labor cost simulation model using simulated headcount.

### Algorithms
Explainable Boosting Machine (EBM)

### Impact
Improves budget planning with scenario-based labor cost forecasts.

### Page Copy
Labor Cost Simulation Framework helps HR and finance leaders forecast future labor costs under uncertain workforce movement scenarios. The project uses an Explainable Boosting Machine model with simulated headcount outputs, supporting labor cost forecasting and budget planning across multiple scenarios.

# Category: Retention & Drivers

## Project 3: Driver Analysis Framework

### Status
On site

### Display Title
Driver Analysis Framework

### Problem
HR datasets often contain many categorical variables, making standard linear or logistic regression difficult to apply across frequent ad hoc client requests with different business contexts.

### Model
Configurable driver analysis model with tailored data cleansing.

### Algorithms
Explainable Boosting Machine (EBM), Logistic Regression, Bayesian Inference

### Impact
Delivers interpretable drivers across different HR questions.

### Page Copy
Driver Analysis Framework identifies interpretable drivers across different HR questions and client contexts. The model can handle many categorical variables, support configurable target variables, and apply tailored data cleansing for each analysis request.

## Project 4: Attrition Analysis

### Status
Draft

### Display Title
Attrition Analysis

### Problem
HR teams need to know not only who is likely to leave, but also when attrition risk rises, in a form business stakeholders can act on.

### Model
Attrition risk and time-to-attrition model with business-facing reports.

### Algorithms
LightGBM, XGBoost, Cox Time-Varying Model, SHAP (final-model use of XGBoost and SHAP to be confirmed)

### Impact
TBD

### Page Copy
Attrition Analysis estimates which employees are likely to leave and how attrition risk changes over time. The project combines gradient-boosted classification for attrition risk with a time-varying Cox model for time-to-attrition, and generates business-facing HTML reports from a reproducible notebook pipeline.

## Project 5: Change-to-Metric Causal Inference

### Status
Draft

### Display Title
Change-to-Metric Causal Inference

### Problem
Simple before-and-after comparisons cannot show whether an organizational change, such as a relocation, actually causes a change in an HR metric such as attrition.

### Model
Propensity-score-weighted causal effect model.

### Algorithms
Propensity Score (Logistic Regression), Inverse Probability Weighting (IPW)

### Impact
TBD

### Page Copy
Change-to-Metric Causal Inference estimates the causal effect of an organizational change, such as a relocation, on an HR metric such as attrition. The project models each employee's likelihood of experiencing the change with a propensity score, then compares weighted outcomes between changed and unchanged employees to reduce selection bias.

# Category: Performance

## Project 6: Evaluation Analysis

### Status
Draft

### Display Title
Evaluation Analysis

### Problem
TBD

### Model
Interpretable regression model for employee evaluation outcomes.

### Algorithms
Elastic Net Regression, Explainable Boosting Machine (EBM), SHAP (final-model use of SHAP to be confirmed)

### Impact
TBD

### Page Copy
Evaluation Analysis explains which factors are associated with employee evaluation outcomes. The project prepares predictor and target data, runs exploratory analysis, and trains an elastic net regression model to surface interpretable drivers of evaluation results.

# Category: Talent Mobility

## Project 7: Relocation Optimization AI

### Status
WIP

### Display Title
Relocation Optimization AI

### Problem
Relocation decisions require more than matching employees to currently similar roles; they also need to account for the distance to each employee's ideal future position.

### Model
Job-title embedding model for role-distance and ideal-path optimization.

### Algorithms
Sentence Embeddings (SBERT / BGE), UMAP, HDBSCAN, K-Means, Agglomerative Clustering, Cosine Similarity

### Impact
Recommends moves that minimize the path to ideal roles.

### Page Copy
Relocation Optimization AI is a work-in-progress project for recommending better-fit relocation options using job-title embeddings. The model measures the distance between each employee and other roles, then estimates the path toward the employee's ideal future position. Unlike traditional job recommendation, it optimizes not only the next match but also the best path to minimize the distance to the ideal role.

## Project 8: Skill Knowledge Graph

### Status
Draft

### Display Title
Skill Knowledge Graph (title to be confirmed; the current model is skill-based job similarity without a graph)

### Problem
Employees often have relevant skills and experience but no clear internal career path, and counselors need concrete next-role recommendations for career-mobility sessions.

### Model
Skill-based job similarity model for internal mobility recommendations.

### Algorithms
LLM Skill Generation, Embeddings + Cosine Similarity, LLM-as-Judge Scoring

### Impact
TBD

### Page Copy
Skill Knowledge Graph recommends potential next internal roles based on the skills each job requires. The project generates skills for each job title with an LLM, scores skill-to-skill relationships by combining embedding similarity with LLM judgment, and aggregates them into job-to-job similarity to support career-mobility conversations.

# Category: Recruiting

## Project 9: Time-to-Recruit Regression

### Status
Draft

### Display Title
Time-to-Recruit Regression

### Problem
TBD

### Model
Regression model for time-to-recruit drivers.

### Algorithms
Linear Regression, Explainable Boosting Machine (EBM)

### Impact
TBD

### Page Copy
TBD

## Project 10: Skills Inference from Job Descriptions

### Status
Draft

### Display Title
Skills Inference from Job Descriptions

### Problem
Job descriptions contain skill information in unstructured text, making it difficult to classify jobs and map the skills they require.

### Model
Text clustering and topic model for job classification and skill mapping.

### Algorithms
TF-IDF, Word2Vec (Google News pretrained), Doc2Vec, K-Means, LDA Topic Modeling

### Impact
TBD

### Page Copy
Skills Inference from Job Descriptions classifies jobs and maps their key skills from job description text. The project compares TF-IDF, Word2Vec, and Doc2Vec text representations, then applies K-Means clustering and LDA topic modeling to group similar jobs and surface the vocabulary that defines each group. Completed as the final project for Northwestern University MSDS 453 Natural Language Processing (Winter 2021).

## Project 11: Candidate–Job Matching

### Status
Draft

### Display Title
Candidate–Job Matching

### Problem
TBD

### Model
Embedding-based learning-to-rank model for candidate–job matching.

### Algorithms
Vector Embeddings, LambdaMART, CatBoost Ranking, XGBoost Ranking

### Impact
TBD

### Page Copy
TBD

# Category: Pay Equity

## Project 12: Gender Pay Gap Analysis

### Status
Draft

### Display Title
Gender Pay Gap Analysis

### Problem
TBD

### Model
Regression model for the adjusted gender pay gap.

### Algorithms
Linear Regression

### Impact
TBD

### Page Copy
TBD

# Category: AI & Automation

## Project 13: Security Review AI Agent

### Status
On site

### Display Title
Security Review AI Agent

### Problem
Security review requests required repeated manual responses, creating a time-consuming workflow for recurring client questions.

### Model
AI agent for automated security review responses.

### Algorithms
LLM Agent (Gemini), LLM-based Category Routing

### Impact
Automates security review responses with a 60% correct answer ratio.

### Page Copy
Security Review AI Agent automatically responds to security review requests by generating answers to recurring client questions. The project reduced manual response work and achieved a 60% correct answer ratio during review.

## Project 14: Transcribe Bot

### Status
Draft

### Display Title
Transcribe Bot

### Problem
TBD

### Model
Audio transcription and summarization bot.

### Algorithms
Speech-to-Text + LLM Summarization (Gemini)

### Impact
TBD

### Page Copy
Transcribe Bot turns audio recordings into transcripts and summaries. Audio sent through Telegram or Dropbox is transcribed and summarized with Gemini, and the result is sent back to the user automatically.

## Project 15: Household Budget Management

### Status
Draft

### Display Title
Household Budget Management

### Problem
TBD

### Model
Statement import, reconciliation, and categorization workflow.

### Algorithms
Rule-based Matching (Regex), LLM Categorization (OpenAI)

### Impact
TBD

### Page Copy
Household Budget Management imports and reconciles bank and card statements, then categorizes spending with rule-based matching and LLM categorization. A Telegram bot for spending reports is planned.
