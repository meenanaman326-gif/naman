# StudyList — Student task planner

A locally runnable, mobile-responsive web app built with **HTML, CSS and vanilla JavaScript**. No React Native, Flutter or other framework is used.

## Run locally

Download this repository, open a terminal in its folder, then run:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000 in a browser. Python 3 is only the static development server; all application logic runs in JavaScript. No install, API keys, build or backend is required.

## Five main screens

1. **Today**: tasks due today and overdue; completion progress.
2. **Add task**: required title, optional notes, date, time and priority.
3. **Task details**: review, edit, complete/restore, or confirm deletion.
4. **All tasks**: all pending tasks with title search and priority filtering.
5. **Completed**: finished tasks with Undo to restore them.

Edit reuses the Add task form with existing values. Navigation uses hash routes and supports browser Back. Bottom navigation on mobile becomes a sidebar on desktop.

## Data and accessibility

Tasks persist in localStorage on the current browser and origin. First launch shows two sample tasks. No account, cloud sync or notifications. Clearing browser data removes saved tasks. Storage failures preserve the active form and display a message. Do not use this prototype for critical records.

Semantic headings, field labels, keyboard focus, screen-reader status announcements, text priority labels, blank-title validation, empty states and native delete confirmation dialog are included. Supports small phone screens and desktop layouts.

## Validation

- JavaScript syntax checked using `node --check app.js`.
- Automated DOM-stub checks passed: initial samples, save, complete, restore, escaped task text, all screens render, and failed storage leaves tasks unchanged.
- Visual browser/device QA has not been performed.
- Manual acceptance flow: add task → open details → edit → complete → Completed → Undo → reload and verify persistence → delete and cancel/confirm.
- Filter by priority and search; try a blank title; check keyboard navigation and phone viewport.

Prepared for Naman Meena's primary application screens assignment.
