# Slack Notification Action

This action will be used to send slack notification

## Inputs

## `token`

**Required** Slack's token 

## `channel`

Channel to send the notification (default to `general`)

## `title`

Slack attachment title

## `title_link`

Slack attachment title link

## `text`

Slack main text

## `attachment_text`

Slack attachment text

## `fields`

Slack attachment message fields

## `status`

Slack attachment message status (`success`,`failure`,`danger`)

## `footer`

Slack attachment message footer

## Example usage

```
- name: Slack message
  uses: beachyapp/slack-notification-action@v0.2
  with:
    token: <slack-token>
    channel: 'some-channel'
    text: 'This is an main text'
    title: 'Hello World Title'
    title_link: 'https://www.google.com/'
    status: ${{ job.status }}
    attachment_text: 'This is an attachment text'
    fields: '[
      {"value": "SOME: thing"},
      {"value": "SOME: other thing"}
    ]'
    footer: 'this is the footer now'
```
## Compiling and pushing changes

Checking in your node_modules directory can cause problems. As an alternative, you can use a tool called @vercel/ncc to compile your code and modules into one file used for distribution.

Install vercel/ncc by running this command in your terminal.

`npm i -g @vercel/ncc`

Compile your index.js file.

`ncc build index.js --license licenses.txt`

You'll see a new dist/index.js file with your code and the compiled modules. You will also see an accompanying dist/licenses.txt file containing all the licenses of the node_modules you are using.

Change the main keyword in your action.yml file to use the new dist/index.js file.

`main: 'dist/index.js'`

If you already checked in your node_modules directory, remove it.

`rm -rf node_modules/*`

From your terminal, commit the updates to your action.yml, dist/index.js, and node_modules files.

```shell
git add action.yml dist/index.js node_modules/*
git commit -m "Use vercel/ncc"
git tag -a -m "My first action release" v1.1
git push --follow-tags
```
