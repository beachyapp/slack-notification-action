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
