# AptTick — sales readiness, learning and opportunity workflows

## Problem and product direction

AptTick brings readiness assessment, training, guided practice and opportunity tracking into a learner journey. Its current repository describes a sales-first pilot direction, with Hafro as the in-product pathway.

The intended journey is:

**Readiness assessment → accredited training pathway → guided practice → partner opportunities → placement tracking → earnings visibility**

The repository describes QCTO curriculum structure. This case study does not independently verify accreditation scope, training delivery, partner availability, learner placements or earnings.

## Product structure

- Learner-facing web application.
- Separate admin operations application.
- Shared readiness-scoring package.
- Shared AI provider and report package.
- Shared database, email, types and UI packages.

This structure provides separate learner and operator surfaces while sharing domain logic.

## Technology documented in the repository

Next.js 14, TypeScript, tRPC, Prisma, Tailwind CSS, Turborepo, NextAuth and Supabase.

The database package holds the Prisma schema and migrations. Assessment scoring and AI reporting occupy separate packages, making them identifiable parts of the product rather than descriptions of a generic chatbot.

## My contribution and development approach

I use Codex and Claude Code to assist implementation. My contribution includes product scope, workflow decisions, acceptance criteria, testing and review. The repository demonstrates the product structure; it does not by itself establish sole authorship of every component.

For a walkthrough, I focus on the actual learner journey and explain the decisions I made. Features should only be described as demonstrated when they work in the recording.

## Current evidence and limits

The README describes an active launch baseline containing learner/admin dashboard flows, readiness assessment, QCTO curriculum structure, guided practice/coach flows, and partner opportunity and placement-tracking groundwork.

It explicitly describes the product as unfinished. This review did not execute its tests, authenticate into the live product or verify learner outcomes.

## Suggested demonstration

1. Show the learner entry point and readiness assessment.
2. Explain how readiness connects to the learning and practice journey.
3. Show an available learner dashboard feature.
4. Show the repository's learner/admin and shared-package structure.
5. State which opportunity and placement elements remain groundwork.

Use synthetic data and keep account credentials and learner records off screen.
