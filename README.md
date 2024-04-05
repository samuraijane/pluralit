# @samuraijane/pluralit

## To test locally
Create two directories that are siblings to each other and link them together. Linking mimics `npm i` to create a **node_modules** directory. **pluralit** can be consumed with either `import` or `require` syntax; however, when testing locally in Node, the file extension for each must be **.mjs** or **.ts**, respectively.

1. Sibling #1 – **pluralit/**
```bash
git clone https://github.com/samuraijane/pluralit.git
cd pluralit
npm link
```

2. Sibling #2 – **consuming/**
```bash
mkdir consuming
cd !$

# for `import` syntax
touch index.mjs

# for `require` syntax
touch index.ts

npm link @samuraijane/pluralit
```

3. Populate the **index** file and save
```javascript
// index.mjs
import { pluralit } from "@samuraijane/pluralit";

// or if using index.ts
const { pluralit } = requre("@samuraijane/pluralit");
console.log(pluralit("book"));
```

4. Run the code
```bash
node index.ts

# or

node index.mjs`
```

5. To unlink, follow the steps below
```bash
cd pluralit
npm unlink
cd ../consuming
npm unlink --no-save @samuraijane/pluralit

```
