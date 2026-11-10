# StudyList — Student Task Planner

Task 2 implements the main screens. **Task 3 implements and verifies the complete create → validate → list → persist flow**, with empty states and recovery actions.

Built using **HTML, CSS and vanilla JavaScript**. No React Native or Flutter is used. Responsive web app; no account or backend required.

## Run locally

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. Python 3 serves the files; the application runs in the browser. Do not open the page using a file URL for consistent localStorage behavior.

## Screens and features

- Today: tasks due today or overdue, plus completion progress.
- Add/Edit task: title, notes, optional date/time and priority.
- Task details: review, edit, complete, restore, and confirm deletion.
- All tasks: pending tasks, title search and priority filtering.
- Completed: completed tasks with Undo.

Bottom navigation on phones becomes a sidebar on wider screens. Existing Task 2 records use the same localStorage key. New installations start empty, without seeded tasks.

## Task 3 requirements

| Requirement | Implementation |
| --- | --- |
| Complete feature path | Add task → validate → save → show in Today or All tasks → open details |
| Validation | Whitespace-only titles rejected; title maximum 160 characters; notes maximum 4,000; valid priority, calendar date and 24-hour time; time requires a date |
| Inline errors | Field-specific messages, aria-invalid and focus on the first invalid field; entries retained |
| Empty states | Nothing due today, no pending tasks, no completed tasks, search/filter has no matches |
| Recovery | Clear filters resets query and priority; add-task action from empty lists |
| Local persistence | localStorage retains create/edit/complete/restore/delete changes across reloads |
| State integrity | Stored records are checked for schema, dates, completion timestamps and duplicate IDs |
| Failed write | Error status shown; in-memory tasks and active form are preserved |

Tasks without a date and tasks due in the future are visible in All tasks immediately after creation. Past dates are allowed and labelled Overdue. Clearing browser data deletes local tasks; storage is per browser/profile/origin and is not cloud sync. Changes are not live-synchronized between open tabs. If saved data is malformed, the app displays a load warning; export/recovery of damaged data is outside this prototype.

## Automated checks

Node.js 18+ is needed only for tests:

```sh
node --check app.js
node --check task-state.js
node --test test-state.cjs
```

Six test groups verify normalisation, blank/long input, date/time boundaries, create/list and reload persistence, complete/restore/delete, failed writes, and stored-record validation. Tests use pure validation functions and a small DOM stub; they do not replace browser testing.

## Browser verification

Checked the following in Chromium on 10 November 2026:

1. Open an empty Completed screen.
2. Submit Add task with an empty title: inline error, no navigation.
3. Enter a title, notes and High priority; save and verify the task in Today.
4. Reload: task remains present.
5. Open details, complete, then Undo and verify it in All tasks.
6. Search for a nonexistent title: No matching tasks and Clear filters appear.
7. Clear filters: all pending tasks return.

Phone-width layout was visually checked during Task 2; this is not a native Android/iOS build. Screen-reader hardware and every mobile browser have not been tested.

Prepared for Naman Meena's application implementation assignment.
