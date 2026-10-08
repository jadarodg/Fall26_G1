# Frontend Prototype — Campus Navigator

**Author:** Jada Rodgers (Product Manager / Front-end Developer)
**Collaborator:** Amirah Muhammad (screens co-design)

## Overview

Figma prototypes for the core Campus Navigator screens, built to follow the
user flow Garret's backend supports: search → select building → select floor
→ view locations.

## Screens

### 1. Main/Search screen

A search bar where users type a building name or code (e.g. "Billy C.
Black"). Matches the `GET /api/buildings/search` endpoint.

### 2. Building results screen

Shows matching buildings with basic info (name, description), pulled from
`GET /api/buildings/:id`.

### 3. Floor selection screen

Once a building is chosen, displays the available floors (Floor 1, 2, 3 for
Billy C. Black) via `GET /api/buildings/:id/floors`.

### 4. Location/room list screen

After selecting a floor, shows the rooms and locations on that floor
(classrooms, offices, restrooms, etc.) via `GET /api/floors/:floorId/locations`.

## Design notes

- The Figma flow mirrors the exact backend sequence Garret described:
  search → select building → select floor → view locations.
- Accessible routes are marked directly in the location list rather than
  as a separate screen.
- Floors with no data yet (e.g. Floors 2 & 3 for Billy C. Black) show a
  "Coming soon" state rather than an empty list.

## Open items discussed with Garret

- Backend features to support stronger frontend navigation (to be filled
  in as decided — e.g. building search autocomplete, floor-plan image
  endpoints).
