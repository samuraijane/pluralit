# @samuraijane/pluralit

## To test locally
Create two directories that are siblings to each other and link them together. Linking mimics `npm i` to create a **node_modules** directory. **pluralit** can be consumed with either `import` or `require` syntax; however, when testing locally in Node, the file extension for each must be **.mjs** or **.ts**, respectively.
Note that these steps use [pnpm](https://pnpm.io/).

1. Sibling #1 – **pluralit/**
```bash
git clone https://github.com/samuraijane/pluralit.git
cd pluralit
pnpm run build
```

2. Sibling #2 – **consuming/**
```bash
mkdir consuming
cd !$
pnpm init
pnpm link ../pluralit

# for `import` syntax
touch index.mjs

# for `require` syntax
touch index.ts
```

3. Populate the **index** file and save
```javascript
// index.mjs
import { pluralit } from "@samuraijane/pluralit";

// or if using index.ts
const { pluralit } = require("@samuraijane/pluralit");

console.log(pluralit("book"));
```

4. Run the code
```bash
# consuming/

node index.ts

# or

node index.mjs
```

5. To unlink, follow the steps below
```bash
# consuming/

pnpm unlink ../pluralit
```

## Built with the help of Matt Pocock
**pluralit** is not intended to be used in production. It was built while following an excellent [tutorial](https://youtu.be/eh89VE3Mk5g?si=LTaLOVKoF1wbaJfZ) pulished by Matt Pocock. You can also see the [notes](https://gist.github.com/samuraijane/94debb1a7271390b28e606a6549df4d6) I made that accompany his video.
