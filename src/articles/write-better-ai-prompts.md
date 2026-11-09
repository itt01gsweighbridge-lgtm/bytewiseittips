---
title: "How to Write Better Prompts for AI Assistants: A Practical Framework"
description: "Get more useful answers from AI chatbots with a simple prompt framework: give context, state the task, set constraints, show examples and iterate – with before-and-after prompts for IT and office work."
date: 2026-11-07
category: ai-tools
keywords: [ai prompts, prompt writing, chatbot, productivity, ai assistant, examples, office work]
relatedSlugs: [ai-chatbots-at-work-safely, fact-check-ai-answers]
faq:
  - q: "Do longer prompts always give better results?"
    a: "Not always, but most poor results come from prompts that are too vague. Adding relevant context, the goal and the format you want usually helps far more than clever wording. Irrelevant detail, on the other hand, can distract from what matters."
  - q: "Should I use special 'magic' prompt phrases?"
    a: "There's no magic formula. Clear, specific instructions – like those you'd give a capable colleague – work better than tricks. Phrases that worked on one tool or version may not work on another."
  - q: "What should I do if the AI misunderstands me?"
    a: "Treat it as a conversation. Point out what was wrong, add the missing information and ask it to try again. You can also ask the assistant to ask you clarifying questions before it answers."
references:
  - title: "Anthropic – Prompt engineering overview"
    url: "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview"
  - title: "Microsoft Support – Get started writing prompts in Microsoft Copilot"
    url: "https://support.microsoft.com/en-us/topic/learn-about-copilot-prompts-f6c3b467-f07c-4db1-ae54-ffac96184dd5"
---

AI assistants respond to what you give them. A vague request gets a generic answer; a clear, well-structured request gets something you can actually use. You don’t need special tricks – the same skills that help you brief a colleague help you brief an AI.

> Before pasting anything into an AI tool, check that you’re allowed to share it. See [using AI chatbots at work safely](/articles/ai-chatbots-at-work-safely/).

## The five-part framework

A strong prompt usually contains some or all of these elements:

1. **Context** – who you are, what situation you’re in, and any background the AI needs.
2. **Task** – exactly what you want it to do.
3. **Constraints** – length, tone, audience, things to include or avoid.
4. **Format** – how the answer should be structured (bullets, table, steps, email).
5. **Examples** – a sample of the style or output you want, if you have one.

You won’t need all five every time, but when results disappoint, one of them is usually missing.

## Before and after examples

### Writing an email

**Weak prompt:**

> Write an email about the server maintenance.

**Better prompt:**

> I'm the IT administrator for a 40-person office. Write a short email to all staff announcing that the file server will be unavailable this Saturday from 8 am to 12 pm for maintenance. Explain that they should save and close any files on the shared drive by Friday evening. Keep it friendly and non-technical, under 120 words, with a clear subject line.

The second version gives the audience, the facts, the action required, the tone and the length.

### Troubleshooting

**Weak prompt:**

> My laptop is slow.

**Better prompt:**

> My Windows 11 laptop (8 GB RAM, SSD, three years old) has become slow over the past two weeks. Startup takes about three minutes and the fan runs constantly. Task Manager shows CPU usage around 60% even when idle, mostly from "Antimalware Service Executable". I haven't installed anything new. Suggest the most likely causes and a step-by-step plan to diagnose it, starting with the safest checks.

Specific symptoms, timeline and what you’ve already observed make a huge difference – just as they would for a human technician.

### Spreadsheet formulas

**Weak prompt:**

> Excel formula for dates.

**Better prompt:**

> In Excel, column A contains invoice dates and column B contains amounts. Write a formula for cell E2 that totals the amounts for invoices dated in the month entered in D2 (D2 contains a date such as 01/03/2026). Explain how the formula works in one or two sentences.

## Useful techniques

### Ask for a specific format

“Give me a table with columns for Option, Pros, Cons and Cost.” “Answer in numbered steps.” “Give three alternative subject lines.” Clear format instructions save editing time.

### Give the AI a role and audience

“Explain this as you would to a non-technical office manager” or “Review this as a careful technical editor” helps the assistant choose the right level of detail and vocabulary.

### Provide examples

If you want something in a particular style, paste a short example: “Here’s a previous announcement we sent. Write a new one in the same style for the following change…”

### Break big tasks into steps

Instead of asking for an entire 20-page document at once, ask for an outline first, review it, then work section by section. You stay in control and catch problems early.

### Ask it to ask you questions

“Before answering, ask me any questions you need to give a good recommendation.” This is especially useful for advice-type requests such as choosing hardware or planning a project.

### Iterate

Treat the first answer as a draft. Follow up with specific feedback: “Make it shorter.” “The second step won’t work because we use Microsoft 365 Business Premium – adjust for that.” “Use British spelling.”

### Ask for uncertainty and sources

“If you’re not sure about something, say so.” “List what I should verify before relying on this.” This doesn’t guarantee accuracy, but it encourages more careful answers and reminds you what to check. See [how to fact-check AI answers](/articles/fact-check-ai-answers/).

## A reusable prompt template

```
Context: [who you are, the situation, relevant background]
Task: [what you want done]
Audience: [who will read or use the result]
Constraints: [length, tone, must include / avoid]
Format: [bullets, table, email, steps]
Example (optional): [paste a sample]
```

Save this somewhere handy and fill it in for important requests.

## Common mistakes

- **Being too vague:** “Make this better” – better how? Clearer, shorter, more formal?
- **Leaving out key facts:** the AI can’t know your software version, budget or deadline unless you say so.
- **Accepting the first answer:** most good results come from one or two rounds of refinement.
- **Sharing sensitive data:** anonymise or summarise instead.
- **Not checking the output:** fluent doesn’t mean correct.

## Conclusion

Better prompts come from clear thinking, not secret phrases. Give context, state the task precisely, set constraints and format, add an example where it helps, and refine through conversation. Then review the result carefully – the AI provides the draft, but you provide the judgement.
