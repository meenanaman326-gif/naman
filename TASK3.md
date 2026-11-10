# Task 3 — App Features and State

## Main feature path

1. Open Add task from any list.
2. Try a blank title: the form remains open with “Enter a task title.”
3. Enter a valid title and optional notes/date/time/priority.
4. Save: the new task is immediately listed; undated/future work opens All tasks.
5. Reload the browser: the task is restored from localStorage.
6. Open details and mark complete; use Completed → Undo to restore it.

## Empty-state demonstration

Open Completed before finishing any tasks. Search All tasks for an unknown title to see No matching tasks. Clear filters restores the list.

## Validation examples

- Empty or whitespace-only title: rejected.
- More than 160 title characters or 4,000 notes characters: rejected.
- 29 February 2026: invalid; 29 February 2024: valid.
- 25:00: invalid time.
- Time with no date: asks for a due date.
- No date and no time: allowed and listed under All tasks.

## Submission

Repository: https://github.com/meenanaman326-gif/naman

The narrated Task 3 walkthrough uses actual browser screen captures. The LinkedIn explanation post URL is available only after the owner publishes the video on LinkedIn.
