## Jada Rodgers_G1

## Meeting 2 — September 29 2026 10:34-11:45 | Duration 1 Hour

### 1. Frontend prototype progress

Following the Figma designs from Meeting 1, I started coding the frontend prototype in HTML/CSS and finished the home screen.

**Home screen:** Completed in HTML and CSS, based on the Figma design. This is the entry point of the flow Garret's backend supports (search → select building → select floor → view locations).

**Building detail / Floor selection screen:** Started. The screen is for Billy C. Black (building code BCB) and includes:

- **Header:** Building name and code, a back button, and a "Find a building" label, using the ASU blue and gold color scheme.
- **About section:** A short description of the building (classrooms and faculty offices) and its accessible entrances.
- **Select a floor:** A list of floors for the building. Floor 1 is active and links to the location list, while Floors 2 & 3 are shown as disabled with a "Coming soon" label.
- **Accessibility section:** A note that accessible routes are marked in the Floor 1 location list.
- **Bottom navigation:** Map, Saved, and Settings tabs.

The building detail screen corresponds to the `GET /api/buildings/:id` and `GET /api/buildings/:id/floors` endpoints.

### 2. Scope decision

For this release we're focusing on Floor 1 only. Floors 2 & 3 are planned for a future project phase, so the prototype shows them as "Coming soon" instead of leaving them out or showing empty lists.

### 3. Next steps

- Finish the Building detail / Floor selection screen.
- Connect the Floor 1 row to the Floor / Location list screen.
- Keep checking the screens against the Figma designs.

### 4. Task assignment

| PBI                                                       | Status                   | Sprint  | Estimate                       | Assigned     | Reviewer        |
| --------------------------------------------------------- | ------------------------ | ------- | ------------------------------ | ------------ | --------------- |
| 1. HTML/CSS: Home screen                                  | Done                     | 2 weeks | One senior person for 8 hours  | Jada Rodgers | Amirah Muhammad |
| 2. HTML/CSS: Building detail / Floor selection screen     | In progress              | 2 weeks | One senior person for 12 hours | Jada Rodgers | Garret Godwin   |
| 3. HTML/CSS: connect Floor 1 row to Floor / Location list | Ready for implementation | 2 weeks | One senior person for 4 hours  | Jada Rodgers | Amirah Muhammad |
