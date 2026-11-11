# Verification record

Date: 11 November 2026.

## Automated

`node --check app.js`, `node --check task-state.js`, `node --test test-state.cjs`.

12 passing tests: trimmed valid input; missing/long input; dates, time and leap years; create/list and reload; complete/restore/delete state; failed storage writes; invalid completion metadata; damaged-data write protection; stale-tab protection; malformed route handling; blank-title form submission; undated form save with filter reset; and failed form submission preserving state. Several related assertions share one named test.

## Browser checks performed

| Check | Result |
| --- | --- |
| Fresh empty screen with a next action | Passed |
| Empty title rejected without leaving the form | Passed |
| Error clears when title is corrected | Passed |
| Create dated task and list it | Passed |
| Complete and restore using Undo | Passed |
| Edit notes and save | Passed |
| Open delete dialog and cancel with Keep task | Passed; task retained |
| Search no matches | Passed; recovery action visible |
| Add undated task from an actively filtered list | Passed; query reset and task visible in All tasks |
| Reload persistence | Passed |
| Phone-width layout and priority label | Visually checked; HTML scrollWidth equalled clientWidth (375px content viewport) |
| All five main screens | Captured in docs/screenshots/ |

Browser checks were performed in Chromium. Phone layout used a 390px-wide iframe with browser scrollbar space, not a physical device. Keyboard focus styles, linked input errors and a native modal dialog are implemented; a full screen-reader audit has not been performed. Android/iOS native packaging, Safari/Firefox parity, simultaneous-write races and production-scale stress tests have not been certified. Automated tests use pure validation and a minimal DOM stub, not a full browser engine.

Screenshot task examples were entered through the interface. Dates reflect the capture date; the app calculates Today from the user's device date. Saved data never leaves the browser.
