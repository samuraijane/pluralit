# @samuraijane/pluralit

## Test Locally
* `git clone https://github.com/samuraijane/pluralit.git`
* `cd pluralit`
* `npm link`
* `cd ../<your-testing-folder>`
* `touch index.js` or `touch index.ts`
* Add the code snippet below to the index file and save
* ```javascript
  import pluralit from '@samuraijane/pluralit';

  console.log(pluralit('book'));
  ```
* At the root of your test folder, run `npm link @samuraijane/pluralit` 
* `node index.js` or `node index.ts`
* To unlink, follow the steps below
    * Inside of **pluralit/**, `npm unlink`
    * At the root of your test folder, `npm unlink --no-save @samuraijane/pluralit`