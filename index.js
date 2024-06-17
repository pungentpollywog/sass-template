import * as sass from 'sass';
import { promisify } from 'util';
import { writeFile } from 'fs';
const sassRenderPromise = promisify(sass.render);
const writeFilePromise = promisify(writeFile);

async function main() {
  const styleResult = await sassRenderPromise({
    file: `${process.cwd()}/styles.scss`,
    outFile: `${process.cwd()}/styles.css`,
  });

  console.log(styleResult.css.toString());

  await writeFilePromise('styles.css', styleResult.css, 'utf8');
}
main();
