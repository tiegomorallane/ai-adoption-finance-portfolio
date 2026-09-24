# AI Adoption Playbook — Finance & Business Teams

This is a sample training framework showing how I would introduce practical AI adoption to a non-technical financial-services or business audience.

## Training objective

Help participants move from casual ChatGPT usage to repeatable, responsible AI-enabled workflows that improve real work without removing human accountability.

## Audience

- executives
- relationship managers
- project and operations teams
- analysts
- finance teams
- customer-service leaders
- risk/compliance stakeholders

## Module 1 — What AI is good at

Useful categories:

- summarising large amounts of text;
- extracting structured information;
- drafting and rewriting;
- comparing documents;
- generating first-pass analysis;
- producing checklists;
- creating reusable workflow templates.

### Exercise

Take a repetitive weekly task and identify:

1. the input;
2. the desired output;
3. what can be automated;
4. what still requires human judgement.

## Module 2 — Prompting as workflow design

A useful prompt usually specifies:

- role/context;
- objective;
- source material;
- constraints;
- required output structure;
- what the model must not assume;
- review criteria.

### Example

Instead of:

> Review this funding application.

Use:

> Review only the information supplied below. Separate verified facts from missing information and assumptions. Produce: (1) evidence present, (2) evidence missing, (3) contradictions, (4) preparation actions. Do not state or imply that funding will be approved.

## Module 3 — Hallucination and evidence

Participants learn to ask:

- Where did this claim come from?
- Can I trace it back to the source?
- Is the AI stating an inference as fact?
- What happens if information is missing?
- What decisions are too important to delegate?

### Practical principle

**Unknown should stay unknown.**

A safe workflow should prefer a visible gap over an invented answer.

## Module 4 — Human-in-the-loop design

Examples:

### Funding preparation

AI:
- organises evidence;
- identifies gaps;
- drafts preparation notes.

Human:
- checks facts;
- corrects unsupported statements;
- approves final pack;
- makes the commercial decision.

### Tender preparation

AI:
- extracts requirements;
- identifies returnables;
- drafts source-grounded responses.

Human:
- verifies completeness;
- provides actual evidence;
- approves submission material.

## Module 5 — Confidential information

Before using AI with business information:

- understand the organisation's approved tools;
- classify the data;
- remove unnecessary personal/confidential information;
- use approved enterprise controls where required;
- do not paste passwords, credentials, or restricted customer information into prompts.

## Module 6 — Choosing automation opportunities

Good first candidates are:

- repetitive;
- text/document heavy;
- rules or review criteria are reasonably clear;
- low consequence when a draft is wrong;
- outputs can be reviewed before action.

Poor first candidates are:

- irreversible;
- legally binding without review;
- fully autonomous credit or employment decisions;
- workflows with unclear ownership;
- tasks where nobody can verify whether the output is correct.

## Module 7 — Evaluating AI workflows

Score the workflow on:

1. usefulness;
2. factual accuracy;
3. evidence traceability;
4. time saved;
5. user clarity;
6. error recovery;
7. human-review quality;
8. privacy/control fit.

## Multi-persona testing

Before rolling a workflow out broadly, simulate different users:

- executive;
- analyst;
- operations user;
- compliance reviewer;
- novice user;
- skeptical user.

Synthetic persona tests are useful for scale, but should be labelled as synthetic and supplemented with real-user testing.

## Module 8 — Adoption plan

### Week 1
Identify 3 high-frequency tasks.

### Week 2
Prototype prompts/workflows.

### Week 3
Test with controlled users and edge cases.

### Week 4
Measure usefulness, errors, adoption, and time saved.

Then decide whether to:

- stop;
- refine;
- automate further;
- integrate into existing systems.

## Executive takeaway

AI adoption is not primarily a prompting exercise.

It is the discipline of deciding:

> **where AI belongs in a workflow, what evidence it can use, what it is allowed to produce, who reviews it, and how success is measured.**
