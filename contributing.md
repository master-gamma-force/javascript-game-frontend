# Contributing to JavaScript Game

## How to contribute

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your own Github account and then [clone](https://help.github.com/articles/.cloning-a-repository/) it to your local device.
2. Create a new branch `git checkout -b MY_BRANCH_NAME`.
3. Install the dependicies: `npm i` or `yarn install`.

### Provide new content

1. Create or find the section folder in `src/content/`.
2. Create a new level folder in section folder, for example `src/content/new_section/new_level`.
3. The level folder should contain `challenge.md`, `content.md` and `test.js` files.

#### `content.md`

This file should contain the theory of level.

#### `challenge.md`

This file should contain the instructions for challenge.

#### `test.js`

This file should contain template code and the test for challenge. Use the template located at `src/core/templates/template.js`.

```javascript
{
  description: '', # Test description show in challenge page
  type: '', # method of chai
  value: '', # value name to test, example array.length
  params: [], # Params of chai method omit the fist param, what is value.
  status: 'to-do',
}
```

#### Sitemap

To add the new level, open `src/content/sitemap.json`.

The sitemap is a array, each item is a section.

To add a new section write a new item in principal array with next data

```json
{
  "id": "",
  "name": "",
  "levels": [
  ]
}
```

- `id` is  the id of section.
- `name` is the name of section. It will display in principal page.
- `levels` is a array of levels

To add a new level write a new item in the levels array of section with the next data

```json
{
  "id": 1,
  "isActive": true,
  "isWinner": false,
  "levelNumber": 1,
  "title": "New Level",
  "contentPath": "src/content/new_section/new_level/content.md",
  "challengePath": "src/content/new_section/new_level/challenge.md",
  "testPath": "src/content/new_section/new_level/test.js",
  "prevLevelId": null,
  "nextLevelId": null
}
```

Levels array is a doubly linked list. In `prevLevelId` add the previous level id or `null` if it is the first level. In `nextLevelId` add the next level id or `null` if it is last level.
