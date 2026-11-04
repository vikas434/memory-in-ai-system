# Notes — 2026-11-04

Typed from the handwritten notes in `Memory_In_AI_system.pdf` (same folder).

## Chapter 1 — The stateless problem

- Memory in AI systems is stateless. The model doesn't remember anything; what we see is an illusion of memory.
- None of the weights are modified during any interaction with the LLM.
- Diagram: input tokens → LLM forward pass → next-token distribution. No scratchpad, no sense of time, no memory of you.
- A raw LLM is a stateless pure function. It doesn't remember anything after it returns.

## Illusion of memory

- We may feel that the AI model remembers things. Example: in one session, state your name; ask for it 3–4 turns later and you get it back.
- This is an illusion — the model doesn't remember anything (in general).
- What actually happens: in every conversation turn, the whole message history, including previous messages, is sent back to the model.
- In a pure native LLM we can test this: open another session and ask the name. It has no clue.
  - Session 1: "my name is Vikas" → "what's my name?" → "Your name is Vikas"
  - Session 2: "what's my name?" → "I don't know"

## Consequences

There are 2 consequences:

1. Every replay doesn't scale.
2. Reaching the context window limit.

- **Replay** — sending everything in all LLM calls, e.g. token usage 50 → 150 → 250 → 350 …
- **Context window** — every LLM has a context window budget, e.g. 128K tokens. Once it reaches the limit, older turns need to be dropped.
- Diagram: sliding window over turns; older turn messages get dropped. Context window = 128K tokens.

## "Just make the context window bigger"

- This will not solve the problem; it only delays it.
- In every turn the whole message is sent, which makes this approach quadratically costly, e.g. 50 → 150 → 250 → 350 tokens.
- Another problem: sending too much information to the LLM dilutes the purpose — the "Lost in the middle" problem.
- E.g. in a 128K token window, if only 3 messages are important, the whole attention of the LLM is diluted.
- Diagram: full message sent every time (attention needed for only 3 tokens) vs. memory staying outside, only relevant information picked.
