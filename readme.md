## Overview

This projects allows us to use ChatGPT to help people manage their workload

![Image Reference](https://i.imgur.com/4olObwC.png)
![Working reference](https://i.imgur.com/ucnvvbO.gif)

## Getting Started

- [x] Bootstrap the project `mkdir  .....`
- [x] Install TailwindCSS (TW)
  - 1. (Node & yarn)
  - 2. `yarn add -D tailwindcss && npx tailwincss init`
  - 3. update tailwind.config.js (`content: []` block)
  - 4. Add my tailwind.css stuff (@tailwind ....)
  - 5. `npx tailwindcss -i ./tailwind.css -o ./styles.css --watch`
  - 6. add my `link:css` point to `./style.css`
  - 7. Do some backflips (highly optional)
- [x] Setup HTML semantic structure
- [ ] ...

### Additional notes:

1. checkout to the "default" `git checkout main`
2. merge the branch from "other" into the default `git merge feature/html-semantics` <?? failed!!!>
   2a: Resolve a git merge (using VSC)
   2b: Add the changes and commit: `git add -u && git commit -m "merge`
3. Done.

## Dev Git Workflow

1. Create new WIP branch (names "feature/blah-blah")
2. Do work in branch (with lots of commits along the way)
3. When all is OK on that branch
4. merge into "production" (main/master) branch
5. Rinse and repeat.
