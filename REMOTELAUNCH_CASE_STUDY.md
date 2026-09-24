# RemoteLaunch — AI Product Evolution Case Study

## Overview

RemoteLaunch is a career-tech product for South Africans and emerging-market professionals pursuing international remote roles.

It began as a lightweight digital toolkit and later evolved into a guided AI workspace inside the shared Mora AI Product Engine.

This case study focuses on the product and AI-adoption decisions rather than claiming employment outcomes.

## The original problem

Generic AI tools can draft CVs and cover letters, but a useful job-application workflow needs more than text generation.

A practical product needs to:

- understand the candidate's real experience;
- preserve evidence rather than invent achievements;
- compare the candidate against a real job description;
- surface gaps honestly;
- create editable application material;
- support human review;
- save progress;
- help the user take the next action.

## Version 1 — simple, offline-first product

The first RemoteLaunch product was intentionally simple:

- no backend;
- no login;
- no API key;
- no hosting dependency for the product itself;
- deterministic role scoring and templates;
- instant digital delivery.

This reduced operating cost and made it possible to test the value proposition without prematurely building a large platform.

## Version 2 — guided AI workspace

Once the broader Mora AI Product Engine existed, RemoteLaunch moved into the shared infrastructure.

The product could then support:

- authenticated user profiles;
- private CV upload;
- job-description input;
- server-side AI preparation;
- grounded output validation;
- editable drafts;
- approval state;
- export;
- application tracking;
- saved-state resume.

## Production-verified owner journey

The owner workflow has been verified in production through:

**profile/CV → job description → grounded AI application pack → human review → approval → export → tracker → saved-state reload**

A synthetic CV was uploaded to private storage. The AI output was reviewed against candidate evidence and the supplied job description.

The accepted production draft explicitly surfaced gaps rather than fabricating them, including missing or uncertain requirements such as specific software experience, qualifications, work authorisation, and schedule constraints.

## AI trust design

RemoteLaunch uses several controls that are useful beyond career-tech:

### Evidence preservation

The AI should not invent:

- qualifications;
- employment history;
- achievements;
- software experience;
- work authorisation.

### Grounding

Application material should be based on:

- the user's reviewed profile/CV;
- the supplied job description;
- explicit user-provided information.

### Human review

AI-generated application material remains editable and requires human review before approval.

Changes to source information invalidate prior approval.

### Fail-closed validation

Unsupported or incorrectly quoted material can be rejected rather than silently passed through.

A bounded repair attempt is allowed only for machine-validation failures, and AI usage is cost-accounted.

## What production testing revealed

Local tests were not enough.

Production testing exposed issues around:

- authentication and magic-link behaviour;
- email rate limiting;
- quotation/source validation;
- production deployment credentials;
- saved-state resume;
- customer-access boundaries.

The key lesson was that a passing test suite does not prove the complete customer journey works.

## What this demonstrates for AI adoption roles

RemoteLaunch is a useful example of how I approach AI adoption:

1. Start with the user's real task, not the model.
2. Decide what evidence the model is allowed to use.
3. Constrain what the AI is allowed to claim.
4. Keep a human review step.
5. Test failure cases, not only happy paths.
6. Separate technical verification from commercial validation.

## Current commercial limitations

The core owner workflow is production verified, but the project is not presented as a fully validated paid product.

Remaining commercial work includes:

- production-grade transactional email;
- Shopify/Yoco purchase-to-entitlement verification;
- broader two-user isolation testing;
- package/access/support terms;
- real customer willingness-to-pay evidence.

## Portfolio relevance

This project demonstrates skills relevant to:

- AI Trainer / AI Coach;
- AI Adoption Consultant;
- AI Workflow Consultant;
- AI Product roles;
- AI Automation / Implementation roles;
- human-in-the-loop workflow design.

It is also a practical teaching example for explaining to non-technical teams why useful AI adoption requires more than a good prompt.
