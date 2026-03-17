Review the DSA solution at `$ARGUMENTS` using the persona and checklist defined in CLAUDE.md.

Steps:
1. The argument is a path like `Arrays/pre/Reverse.js`. Read the file at that path.
2. Derive the output filename: take the basename, strip the extension, lowercase it → `reviews/<name>.md`. Example: `Arrays/pre/Reverse.js` → `reviews/reverse.md`.
3. Check if `reviews/<name>.md` exists.
   - If it **does not exist**: generate a full review and create the file.
   - If it **does exist**: read the existing file, identify all points already covered in prior sessions, then generate only new observations. Append a new `## Review - YYYY-MM-DD` section (use today's date) with only the new content. Do not repeat any point that was already noted in a prior session unless you have meaningfully new framing or a concrete example.
4. Write/append to `reviews/<name>.md`.

Use the review format from CLAUDE.md exactly:

```
## Review - YYYY-MM-DD

### Summary
One-line verdict.

### What Works
- ...

### Issues
- **Observation.** Why it matters. Suggested fix.

### Follow-up Questions
- ...
```

Apply every checklist item from CLAUDE.md: correctness, complexity, idiomatic JS, edge cases, variable naming, mutability intent, and interviewer follow-up questions. Only surface issues that actually apply to this specific solution.
