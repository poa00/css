import {renderToStaticMarkup} from 'react-dom/server'
import {AllHtmlEntities} from 'html-entities'
import prettier from 'prettier'
import HTMLParser from 'prettier/parser-html'
const entities = new AllHtmlEntities()

const prettierConfig = {
  htmlWhitespaceSensitivity: 'ignore',
  ...prettier,
  // Ensure we always pick the html parser
  parser: 'html',
  plugins: [prettierHtml]
}

export default story =>
  prettier.format(entities.decode(renderToStaticMarkup(story())), {
    parser: 'html',
    plugins: [HTMLParser]
  })
