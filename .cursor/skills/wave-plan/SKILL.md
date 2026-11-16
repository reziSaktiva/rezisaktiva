---
name: wave-plan
description: >-
  Prepares a wave of ready portfolio work from the open ticket queue. Asks Boss
  Rezi for a direction when none was given, finds unblocked open subtasks,
  separates work the agent can do from work only Boss Rezi can do, checks file
  overlap, resolves open wave decisions, then stops for approval. Reads
  documents only. Use when Boss Rezi asks to plan a wave, see what is ready,
  or batch the next tickets. Execution is wave-work, and only after approval.
---

# Wave Plan

Prepares one wave. It does not implement, branch, commit, or edit files. `wave-work` runs only after Boss Rezi approves the list.

Ordinary one-ticket work stays on `project-os-navigator`. Use this skill when Boss Rezi asks for a wave. Basis: ADR-050.

## Boundaries

- Read documents and file names only. Do not create branches, worktrees, or commits.
- Stop at the numbered list. Do not start execution in the same turn as the unapproved plan.
- A missing direction, or a decision the docs do not answer, is a real question for this skill. Use `AskQuestion`. Do not invent the answer.
- Keep the output to the tables and the wave block.

## Steps

0. **Direction first.** If Boss Rezi did not name the kind of work (a ticket, a spec, or a theme such as UI, docs, or whatever is ready), do not compute the wave yet. Read the Snapshot in `project-os/PROJECT_STATE.md` and the queue headings in `project-os/AVAILABLE_TICKETS.md`. Ask with `AskQuestion`: 2 to 4 concrete directions from that queue, recommended option first with "(Recommended)" and why. Continue only after a choice. If a direction was already given, restate it in one line.
1. **Collect candidates.** Stay inside the chosen direction and inside `Active Conversation Mode` unless Boss Rezi widened it. Open only the ticket sections that match. Read them with a line offset and limit, not the whole ticket file. The queue row is not enough; the checkboxes are the source for what is still open.
2. **Frontier.** This portfolio has no `Depends` field. An open `- [ ]` subtask is ready when the ticket text does not say it waits on another unfinished subtask, secret, or decision. A parent whose items are all `- [x]` stays off the list. An item that is already `- [x]` is not part of a lane. Tickets outside the direction are excluded.
3. **AFK and HITL.** This portfolio has no `Mode` field. Classify from the open item:
   - **HITL** — Boss Rezi must act: secrets, DNS, domain, inbox or production check, locked copy that is not in the ticket, or a decision the baseline does not answer. HITL items are flagged and get no lane.
   - **AFK** — the agent can finish it from the ticket, ADRs, and code. Only AFK items become lanes.
4. **File footprints.** For each AFK item, list the concrete paths from **Read first**, the open item text, and a `Glob` or `Grep` when the ticket names a symbol. Shared hot spots in this repo are `app/globals.css`, `app/[locale]/_components/`, `components/ui/`, `content/`, `project-os/PROJECT_STATE.md`, `project-os/AVAILABLE_TICKETS.md`, the ticket file being edited, and `pnpm-lock.yaml`.
   - Same path, or one path contains the other: one lane, in sequence, or the later item waits for the next wave.
   - Overlap only on a hot spot: flag it as a semantic-conflict risk and recommend a sequence. `pnpm typecheck` runs after each merge in `wave-work`.
   - No overlap: parallel lanes are safe.
   - Footprint unknown: say so, treat it as conflicting with what it might touch, and ask in step 7.
5. **Visible result.** One lane ends in something Boss Rezi can see or test. Do not split a visible change into a layer that cannot be checked on its own.
6. **Size.** Default to 3 concurrent lanes. This queue is often one ticket, so 1 lane is normal. Do not invent parallel work. Mechanical lanes use `model_hint: lower`. Use `default` only for design, motion, security, or copy-sensitive work, and say why.
7. **Close decisions before the list.** Collect every question the documents do not answer: unknown footprints, an unclear AFK/HITL call, which overlapping item goes first, and any choice a lane would otherwise stop to ask. Ask independent questions together in one `AskQuestion` call, at most 4, recommended option first. A question that depends on an answer waits for the next round. Shape: `.cursor/skills/proactive-clarification/SKILL.md`. Do not present the final list while a decision is open.

Also ask, when the wave will need them, whether commit, push, or a pull request is preapproved. Those actions are not assumed. Record the answer under `gates_preapproved`. DNS, secrets, and merge to `main` are not preapproved unless Boss Rezi says so in this planning session.

Read the queue once. Read each ticket section once. Resolve paths with `Glob` and `Grep`, not by reading source files.

## Output

Show this only after step 7 has no open question.

### 1. Numbered list

| Title | Blocker | Result | Mode | Lane |
| ----- | ------- | ------ | ---- | ---- |

HITL rows have no lane.

### 2. Conflict table

| Ticket A | Ticket B | Shared path or hot spot | Verdict |
| -------- | -------- | ----------------------- | ------- |

Verdict is one of: parallel-safe, sequential in one lane, next wave, semantic-conflict risk. List every pair that is not parallel-safe. Summarize parallel-safe pairs in one line.

### 3. Wave block

One `yaml` block that `wave-work` can read. IDs and paths are exact.

```yaml
wave:
  direction: <chosen direction>
  approved: false
  max_concurrent_lanes: <n>
  gates_preapproved: []   # commit, push, or pull request only if Boss Rezi said so
  lanes:
    - lane: <short-name>
      tickets: [<T-XXX.N>, ...]
      model_hint: <lower | default>
      footprint: [<path or glob>, ...]
      depends_on_lanes: []
  hitl:
    - ticket: <T-XXX.N>
      reason: <secrets | DNS | production check | copy lock | decision>
  excluded:
    - ticket: <T-XXX.N>
      reason: <blocked | all items done | outside direction | outside active mode>
  decisions:
    - question: <question from step 7>
      answer: <Boss Rezi's answer>
```

Then stop and wait for approval. After approval, `wave-work` treats `approved` as true. Do not start the wave in this skill.
