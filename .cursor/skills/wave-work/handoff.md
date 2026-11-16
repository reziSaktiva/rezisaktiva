# Handoff

Use this when a wave session stops midway. Keep it in the conversation or the session scratchpad. Do not commit it.

## Rules

- Pointers only: ticket path, ADR path, branch name, commit hash, or pull request URL.
- No secrets, tokens, or `.env` values. Name the variable, not the value.
- Enough for the next agent to continue without rereading the whole conversation.
- Gates do not carry over. The next agent still needs Boss Rezi's direct approval to commit, push, open a PR, merge, deploy, or change DNS or secrets.

## Form

```markdown
# Handoff <wave name> · <date>

## Follow-up goal

One to three sentences: what remains, and which subtask.

## Last state

- Integration branch and lane branches
- Last commit per branch
- Pull request URL, if one exists
- Done and not done, per subtask
- HITL items still open

## Decisions already made

One line each, with the wave-block answer or Boss Rezi's message. Mark anything that still needs Boss Rezi.

## Next skill step

`wave-work` step to resume from.

## Reading pointers

Ticket section, lane brief, ADR path.
```
