Jada Rodgers

## Meeting 1 — September 22 2026 10:45-11:45

Attendees: Jada Rodgers, Garret Godwin, Amirah Muhammad

### 1. Prototypes developed

Working with Amirah, we developed Figma prototypes for the main screens of the Campus Navigator app, following the user flow Garret's backend supports:

- **Main/Search screen:** A search bar where users type a building name or code (e.g. "Billy C. Black"), matching the `GET /api/buildings/search` endpoint.
- **Building results screen:** Shows matching buildings with basic info (name, description) pulled from `GET /api/buildings/:id`.
- **Floor selection screen:** Once a building is chosen, displays the available floors (Floor 1, 2, 3 for Billy C. Black) via `GET /api/buildings/:id/floors`.
- **Location/room list screen:** After selecting a floor, shows the rooms and locations on that floor (classrooms, offices, restrooms, etc.) via `GET /api/floors/:floorId/locations`.

The Figma flow mirrors the exact backend sequence Garret described: search → select building → select floor → view locations.

We also discussed with Garret what backend features would support stronger navigation on the frontend, such as:

- Step-by-step directions between two selected locations (not just "here's the room," but "how do I get there")
- Nearest-location lookup (e.g. "nearest restroom" or "nearest elevator" from a given point)
- Marking accessible routes (elevators/ramps vs. stairs-only paths)

These are still in discussion and not yet part of the backend prototype — Garret's current API covers buildings, floors, and locations, but not routing between them. We'll continue refining which of these are feasible for the next sprint.

### 2. User types and how they'll use the product

- **New/prospective students and visitors** — least familiar with campus layout, most reliant on search and visual navigation. They'll primarily use the search bar and building results screen.
- **Current students and faculty** — know general campus layout but may need help finding a specific room or office inside an unfamiliar building. They'll jump more directly into floor/location screens.
- **Staff and administrators** — may use the app to direct visitors or verify building/room info is accurate.
- **Users with mobility needs** — would benefit from clear identification of elevators and accessible entrances and routes, which ties into the navigation features discussed above.

This ties back to our product vision statement: students, faculty, staff, and visitors who need an easier way to locate classrooms and offices than signs, printed maps, or asking for directions.

### 3. Task assignment

| PBI                                                  | Status                   | Sprint  | Estimate                       | Assigned        | Reviewer        |
| ---------------------------------------------------- | ------------------------ | ------- | ------------------------------ | --------------- | --------------- |
| 1. Figma prototype: search & building screens        | Ready for implementation | 2 weeks | One senior person for 48 hours | Jada Rodgers    | Garret Godwin   |
| 2. Figma prototype: floor & location screens         | Ready for implementation | 2 weeks | One senior person for 48 hours | Amirah Muhammad | Jada Rodgers    |
| 3. Backend prototype: buildings/floors/locations API | Ready for refinement     | 3 weeks | Two juniors for 72 hours       | Garret Godwin   | Amirah Muhammad |
