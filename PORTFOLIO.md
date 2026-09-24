# AI Adoption & Automation Portfolio

## Tiego Morallane

I work at the intersection of **financial services, AI adoption, workflow automation, and product delivery**.

My portfolio focuses on a practical question:

> How do you move AI from a demo or prompt into a workflow that a real business user can understand, trust, review, and use?

I use AI-assisted engineering tools, modern web infrastructure, and structured evaluation to build and test those workflows.

---

## 1. Mora AI Product Engine

**Status:** Private production project; selected owner workflows verified in production.

The Mora AI Product Engine is a configurable Next.js modular monolith supporting multiple AI-enabled products through shared infrastructure while keeping product configuration, entitlements, workspace state, and documents scoped by product and user.

### Shared architecture

- Next.js application
- Supabase Auth
- Supabase Postgres with Row Level Security
- Private Supabase Storage
- Product-scoped entitlements
- Server-side AI orchestration
- Human review and export workflows
- Vercel deployment
- Fail-closed payment/fulfilment adapters

### Trust and safety design

- Browser redirects never grant product access.
- AI inputs are treated as untrusted data.
- Structured outputs are rejected when required evidence is missing or citations reference unknown sources.
- Usable outputs remain human-reviewed drafts.
- Server-only credentials stay outside client bundles.
- Product and user isolation are explicit architecture boundaries.

### Products powered by the engine

#### FundReady AI

A funding-preparation workspace that helps a business organise evidence, identify missing information, review AI-generated preparation guidance, and export a reviewed funding pack.

Production owner testing has demonstrated private document handling, grounded AI review, missing-evidence handling, human correction, save/resume, and export.

It does **not** imply funding approval.

#### TenderPilot

A tender-preparation workflow that extracts mandatory requirements and evaluation criteria, links them back to source material, flags evidence gaps, supports editable response preparation, and requires human review.

A realistic synthetic production test persisted seven mandatory requirements, seven evaluation entries, the functionality threshold, weighted criteria, and source references.

It does **not** imply tender compliance or award.

#### ClearMatch

A structured finance-intake workflow currently positioned as a free manual-review enquiry service.

The production intake has persisted synthetic enquiries with explicit consent boundaries and protected admin review. Automated partner matching is deliberately not claimed until an approved partner directory and documented routing criteria exist.

#### RemoteLaunch

A guided application-preparation workspace for professionals targeting international remote roles.

The production owner workflow has been verified through:

**profile/CV → job description → grounded AI application pack → human review → approval → export → tracker → saved-state reload**

The AI layer is designed to preserve candidate evidence, surface missing requirements, and avoid fabricating qualifications or achievements.

---

## 2. AI Credit Analyst

**Status:** Public portfolio project; active development.

An AI-assisted SME credit-assessment platform intended to combine deterministic financial calculations with transparent risk flags and human-reviewed AI support.

Focus areas include:

- explainable credit metrics;
- scenario analysis;
- structured credit memo support;
- transparent assumptions;
- human decision authority.

---

## 3. RemoteLaunch — product evolution case study

RemoteLaunch is useful as an AI-adoption case study because it started as a simple offline digital toolkit and evolved into a production AI workflow.

### Version 1

- no backend
- no login
- no API keys
- standalone browser tooling
- role scoring and decision logic

### Later evolution

The product moved into the shared Mora Engine so the workflow could support:

- authenticated profiles;
- private CV upload;
- job-specific AI preparation;
- grounded output validation;
- saved progress;
- export;
- application tracking.

### Lesson

The useful product was not “AI writes a CV.” The useful product was the **complete workflow around the user’s real next step**, including evidence, review, persistence, and action.

---

## 4. Apttick

**Status:** Private product/automation project.

Apttick is a separate AI and automation build used to explore product engineering, workflow automation, infrastructure, and AI-enabled operations.

The repository remains private while the product is under active development.

---

## 5. Mora Capital Partners

**Status:** Live commercial business and website.

Mora Capital Partners gives me direct exposure to real funding, transaction-structuring, and SME workflow problems.

That domain context informs projects such as FundReady, ClearMatch, TenderPilot, and the AI Credit Analyst.

---

# What this portfolio demonstrates

## AI adoption

I can take a broad request such as “use AI to help prepare a funding application” and turn it into a structured workflow with:

- defined inputs;
- explicit source evidence;
- constrained AI outputs;
- human review;
- saved state;
- export;
- access controls;
- clear limitations.

## AI coaching and training

The projects give me practical examples for teaching non-technical teams:

- when a generic chatbot is enough;
- when a structured workflow is safer;
- how to write better prompts;
- how to verify AI outputs;
- how to preserve human accountability;
- how to handle confidential information;
- how to identify suitable automation opportunities;
- how to evaluate usefulness rather than novelty.

## Financial-services context

My finance and banking background means I approach AI adoption with attention to:

- controls;
- privacy;
- auditability;
- customer communication;
- approval boundaries;
- evidence;
- operational risk.

## AI-assisted engineering

I use AI coding tools as part of the development process, but I do not present generated code as evidence by itself. The portfolio is focused on product decisions, architecture, validation, testing, deployment, and the quality of the resulting workflow.

---

# Roles this portfolio is relevant to

- AI Trainer / AI Coach
- AI Adoption Consultant
- AI Automation Specialist
- AI Workflow Consultant
- AI Solutions / Implementation Consultant
- AI Product Manager
- Technical Product / Program roles involving AI
- Financial-services AI enablement roles

---

# Current limitations

I distinguish clearly between:

- planned functionality;
- locally tested functionality;
- production-verified workflows;
- payment/fulfilment readiness;
- customer willingness to pay.

Several commercial payment and fulfilment integrations remain under development. Those limitations are intentionally not presented as completed work.
