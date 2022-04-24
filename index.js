const core = require('@actions/core');
const { WebClient } = require('@slack/web-api');

try {

  var colorMap = new Map([
    ["success", "#36a64f"],
    ["failure", "#ff0000"],
    ["danger", "#ffffd8"]
  ]);

  const token = core.getInput('token');
  const channel = core.getInput('channel');
  const title = core.getInput('title');
  const title_link = core.getInput('title_link');
  const text = core.getInput('text');
  const attachment_text = core.getInput('attachment_text');
  const fields = core.getInput('fields');
  const status = core.getInput('status');
  const footer = core.getInput('footer');
  const web = new WebClient(token);

  color = (!!status) ? colorMap.get(status) : "";

  web.chat.postMessage({
    channel: channel,
    text: text,
    attachments: [{
      fallback: text,
      color: color,
      title: title,
      text: attachment_text,
      title_link: title_link,
      fields: JSON.parse(fields),
      footer: footer
    }]
  });


} catch (error) {
  core.setFailed(error);
}
