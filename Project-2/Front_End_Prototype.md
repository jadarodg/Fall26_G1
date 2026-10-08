# Frontend Prototype — Campus Navigator

**Author:** Jada Rodgers (Product Manager / Front-end Developer)
**Collaborator:** Amirah Muhammad (screens co-design)

## Overview

Figma prototypes for the core Campus Navigator screens, built to follow the
user flow Garret's backend supports: search → select building → select floor
→ view locations.

**Scope for this release:** Floor 1 only. Floors 2 & 3 are planned for a
future project phase and currently show a "Coming soon" state rather than
live data.

## Screens

### 1. Main/Search screen

A search bar where users type a building name or code (e.g. "Billy C.
Black"). Matches the `GET /api/buildings/search` endpoint.

### 2. Building results screen

Shows matching buildings with basic info (name, description), pulled from
`GET /api/buildings/:id`.

### 3. Floor selection screen

Once a building is chosen, displays the available floors. For this release,
only **Floor 1** is interactive (lobby, classrooms, main entrance); Floors 2
& 3 are listed but disabled with a "Coming soon" label, to be built out in a
future phase. Pulled via `GET /api/buildings/:id/floors`.

### 4. Location/room list screen

After selecting Floor 1, shows the rooms and locations on that floor —
classrooms, elevators/stairs, restrooms & entrances — via
`GET /api/floors/:floorId/locations`.

## Design notes

- The Figma flow mirrors the exact backend sequence Garret described:
  search → select building → select floor → view locations.
- Accessible routes are marked directly in the location list (e.g. "Main
  Elevator," "North Entrance") rather than as a separate screen.
- Floor 1 is the only floor with full location data for this release;
  Floors 2 & 3 show a "Coming soon" state instead of an empty list.

## Future work

- Build out Floor 2 & 3 location data and enable their floor-selection
  rows once that content/backend support exists.

## Open items discussed with Garret

- Backend features to support stronger frontend navigation (to be filled
  in as decided — e.g. building search autocomplete, floor-plan image
  endpoints).

## Figma Prototype

[View the interactive prototype](https://www.figma.com/design/KLO3v6UELNYGNn7ymmxZA8/SE-F26-%7C-Group-1?node-id=58-209&p=f&t=HJI28G17TAAxBREU-0)
