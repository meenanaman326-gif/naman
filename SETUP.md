# Setup instructions

## Requirements

- A current browser: Chrome, Edge, Firefox or Safari.
- Python 3 for the simple local server, or an equivalent static web server.
- Git is optional if you use Download ZIP.
- Node.js 18+ is optional and only needed to run automated tests.

## Option A — Download ZIP

1. Open https://github.com/meenanaman326-gif/naman in a browser.
2. Select Code → Download ZIP.
3. Extract the ZIP. Open a terminal in the extracted `naman-main` folder, where `index.html` is located.
4. Run `python3 -m http.server 8000` (Windows: `py -m http.server 8000`).
5. Open http://localhost:8000.

## Option B — Git

```sh
git clone https://github.com/meenanaman326-gif/naman.git
cd naman
python3 -m http.server 8000
```

No npm install, compilation, environment variables or external accounts are needed. Ctrl+C stops the server.

## Try the application

First launch is empty. Choose Add task, enter a title and save. Optional notes, date/time and priority are available. Today includes work due today or overdue. Future and undated tasks are listed in All tasks. Reload the page to verify saved data.

## Troubleshooting

| Symptom | Action |
| --- | --- |
| Python command not found | Install Python 3 from its official website, or use an already available static web server. On Windows try `py`. |
| Port 8000 is occupied | Run `python3 -m http.server 8001` and open http://localhost:8001. This is a different origin, so its task storage starts separately. |
| Server shows a directory listing | Start it from the folder containing `index.html`. |
| App is unstyled or blank | Confirm `styles.css`, `app.js` and `task-state.js` remain beside `index.html`; reload. |
| Tasks seem missing | Use the same browser/profile and exact origin. Check All tasks and clear search/priority filters. |
| Cannot save | Browser storage may be blocked/full. Entries are retained; allow storage or free space before trying again. |
| Stale-tab message | Another tab changed saved tasks. Preserve any unsaved text, then reload this tab before editing again. |
| Damaged-data warning | Changes are blocked to avoid overwriting unreadable records. Reload first. If the data is disposable, clear this site's storage using browser settings; this deletes its saved tasks. |
| GitHub app link error | Copy the exact URL into a browser address bar. The owner is `meenanaman326-gif` and the repository is `naman`; no spaces belong around the slash. |

Opening `index.html` directly as a file is not the supported setup: browser storage and secure browser features can behave differently. Use localhost for the documented workflow.
