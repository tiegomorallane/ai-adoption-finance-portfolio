# AI Credit Analyst

An AI-assisted SME credit assessment platform for analysing borrower financials, calculating core credit ratios, flagging risks, comparing scenarios, and producing a structured credit memo.

> **Portfolio context:** This repository is part of my broader AI adoption and automation portfolio. I build practical AI workflows for finance and business users, with an emphasis on human review, explainability, secure data handling, and production-safe implementation.

## Why this project exists

Traditional SME credit assessment is often slow, document-heavy, and inconsistent. This project demonstrates how modern software and AI can support analysts with repeatable calculations, transparent risk flags, and better decision documentation.

This repository uses synthetic demonstration data only and is not a substitute for professional credit judgement.

## Portfolio

I am building a practical portfolio around **AI adoption, workflow automation, financial services, and AI-enabled product delivery**.

### Mora AI Product Engine — private production project

A configurable AI product platform powering four separate workflows from shared infrastructure:

- **FundReady AI** — evidence-based funding preparation, missing-information analysis, human review, and export.
- **TenderPilot** — tender requirement extraction, evidence checklists, source-grounded drafting, human review, and export.
- **ClearMatch** — structured finance intake and manual-review routing.
- **RemoteLaunch** — guided job-application preparation using a reviewed CV/profile, job description, grounded AI output, interview preparation, tracking, save/resume, and export.

The production architecture uses Next.js, Supabase Auth/Postgres/Storage, product-scoped entitlements, Row Level Security, server-side AI orchestration, Vercel deployment, and fail-closed payment/fulfilment boundaries.

The source repository remains private while commercial integrations are still being completed. A public case study is available in [PORTFOLIO.md](PORTFOLIO.md).

### RemoteLaunch

RemoteLaunch began as a simple digital toolkit for South Africans and emerging-market professionals targeting international remote roles. It later evolved into a guided AI workspace inside the Mora AI Product Engine.

The production owner workflow has been verified through:

**profile/CV → job description → grounded AI application pack → human review → approval → export → tracker → saved-state reload**

The system is designed not to invent qualifications or achievements. Missing evidence and role gaps are surfaced explicitly.

### Apttick

A separate AI/automation project focused on practical workflow and product experimentation. The implementation repository is currently private while the product is being refined.

### Mora Capital Partners

A live commercial finance/advisory business and website project. It provides the real-world finance context behind several of my AI product experiments.

## What I am demonstrating

Across these projects I am deliberately building evidence in the areas most relevant to AI adoption and automation roles:

- translating non-technical business problems into AI-enabled workflows;
- prompt and workflow design;
- source-grounded structured AI outputs;
- human-in-the-loop review;
- hallucination and unsupported-claim controls;
- authentication, entitlements, and private data boundaries;
- production deployment and testing;
- AI-assisted product engineering;
- commercial experimentation and customer-value testing;
- explaining AI systems to non-technical stakeholders.

## Planned AI Credit Analyst capabilities

- Create and manage borrower assessments
- Capture historical and forecast financial information
- Calculate profitability, leverage, liquidity, and debt-service metrics
- Generate transparent rule-based risk flags
- Compare base, upside, and downside scenarios
- Generate an AI-assisted draft credit memo
- Export an assessment report to PDF
- Maintain an auditable record of assumptions and outputs

## Target users

- SME credit analysts
- Private-credit and alternative-finance teams
- Business bankers
- Funding advisers
- Finance professionals evaluating borrower affordability

## Technology stack

- **Frontend:** Next.js, TypeScript, Tailwind CSS
- **Backend:** Python, FastAPI, Pydantic
- **Database:** PostgreSQL
- **AI layer:** provider-agnostic LLM service
- **Testing:** Pytest and frontend test tooling
- **Infrastructure:** Docker, GitHub Actions

## Responsible AI principles

Across my portfolio I use the same baseline principles:

1. **AI drafts, humans decide.**
2. **Source evidence should remain traceable where factual claims matter.**
3. **Unknown or unsupported claims should fail closed rather than be silently invented.**
4. **Sensitive data should stay behind appropriate access controls.**
5. **A working model output is not the same as a validated business outcome.**
6. **Customer-facing promises should distinguish what the system controls from external decisions.**

## AI training / coaching portfolio

I am also packaging these implementation lessons into practical training material for non-technical teams, especially in financial services.

See [AI_ADOPTION_PLAYBOOK.md](AI_ADOPTION_PLAYBOOK.md) for a sample executive-oriented training framework.

## Author

Built by **Tiego Morallane** as part of a finance and AI engineering portfolio focused on practical AI adoption, automation, and business workflow design.

## Status

🚧 Active development — portfolio projects are at different stages. Production-verified evidence is explicitly distinguished from planned capability and commercial validation.
