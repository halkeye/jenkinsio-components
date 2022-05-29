import { newSpecPage } from '@stencil/core/testing';
import { JenkinsioFooter } from './jenkinsio-footer';

describe('jenkinsio-footer', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [JenkinsioFooter],
      html: '<jenkinsio-footer></jenkinsio-footer>',
    });
    expect(root).toEqualHtml(`
      <jenkinsio-footer>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </jenkinsio-footer>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [JenkinsioFooter],
      html: `<jenkinsio-footer first="Stencil" last="'Don't call me a framework' JS"></jenkinsio-footer>`,
    });
    expect(root).toEqualHtml(`
      <jenkinsio-footer first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </jenkinsio-footer>
    `);
  });
});
