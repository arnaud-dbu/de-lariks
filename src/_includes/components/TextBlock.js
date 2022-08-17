const {html} = require('common-tags');

function TextBlock({title, description, bg}) {
  return html `
  <div class="text-block text-block--${bg}">
    <h2 class="text-block__title">${title}</h2>
    <p class="text-block__description">${description}</p>
  </div>
  `
}

module.exports = TextBlock;