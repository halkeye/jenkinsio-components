import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'jenkinsio-footer',
  styleUrl: 'jenkinsio-footer.css',
  shadow: true,
})
export class JenkinsioFooter {
  /**
   * Is this a site on netlify?
   */
  @Prop() netlify: boolean;

  private netlifyHtml(): string {
    if (!this.netlify) { return ''; }
    return <div class="mb-3"><a href="https://www.netlify.com"><img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" /></a></div>
  }

  render() {
    return (
      <footer id="footer">
        <div class="container">
          <div class="row">
            {this.netlifyHtml()}
            <div class="col-md-4">
              <div class="license-box">
                <div id="creativecommons">
                  <a href="https://creativecommons.org/licenses/by-sa/4.0/">
                    <p >
                      <img alt="Creative Commons Attribution-ShareAlike license" src="https://licensebuttons.net/l/by-sa/4.0/88x31.png" />
                    </p>
                  </a>
                  <p >

The content driving this site is licensed under the Creative
Commons Attribution-ShareAlike 4.0 license.
                  </p>
                </div>
              </div>
            </div>
            <div class="links col-md-8">
              <div class="container">
                <div class="row">
                  <div class="area col-md-3">
                    <div class="div-mar">
                      <h5 >
                        Resources
                      </h5>
                      <ul class="resources">
                        <li >
                          <a href="https://www.jenkins.io/download/">

Downloads
                          </a>
                        </li>
                        <li >
                          <a href="https://www.jenkins.io/node/">

Blog
                          </a>
                        </li>
                        <li >
                          <a href="https://www.jenkins.io/doc/">

Documentation
                          </a>
                        </li>
                        <li >
                          <a href="https://plugins.jenkins.io/">

Plugins
                          </a>
                        </li>
                        <li >
                          <a href="https://www.jenkins.io/security/">

Security
                          </a>
                        </li>
                        <li >
                          <a href="https://www.jenkins.io/participate/">

Contributing
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="area col-md-3">
                    <div class="div-mar">
                      <h5 >
                        Project
                      </h5>
                      <ul class="project">
                        <li >
                          <a href="https://www.jenkins.io/project/">

Structure and governance
                          </a>
                        </li>
                        <li >
                          <a href="https://issues.jenkins.io">

Issue tracker
                          </a>
                        </li>
                        <li >
                          <a href="https://www.jenkins.io/project/roadmap/">

Roadmap
                          </a>
                        </li>
                        <li >
                          <a href="https://github.com/jenkinsci">

GitHub
                          </a>
                        </li>
                        <li >
                          <a href="https://ci.jenkins.io">

Jenkins on Jenkins
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="area col-md-3">
                    <div class="div-mar">
                      <h5 >
                        Community
                      </h5>
                      <ul class="community">
                        <li >
                          <a href="https://community.jenkins.io">

Forum
                          </a>
                        </li>
                        <li >
                          <a href="https://www.jenkins.io/events/">

Events
                          </a>
                        </li>
                        <li >
                          <a href="https://www.jenkins.io/mailing-lists/">

Mailing lists
                          </a>
                        </li>
                        <li >
                          <a href="https://www.jenkins.io/chat/">

Chats
                          </a>
                        </li>
                        <li >
                          <a href="https://www.jenkins.io/sigs/">

Special Interest Groups
                          </a>
                        </li>
                        <li >
                          <a href="https://twitter.com/jenkinsci">

Twitter
                          </a>
                        </li>
                        <li >
                          <a href="https://reddit.com/r/jenkinsci">

Reddit
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="area col-md-3">
                    <div class="div-mar">
                      <h5 >
                        Other
                      </h5>
                      <ul class="other">
                        <li >
                          <a href="https://www.jenkins.io/conduct/">

Code of Conduct
                          </a>
                        </li>
                        <li >
                          <a href="https://www.jenkins.io/press/">

Press information
                          </a>
                        </li>
                        <li >
                          <a href="https://www.jenkins.io/merchandise/">

Merchandise
                          </a>
                        </li>
                        <li >
                          <a href="https://www.jenkins.io/artwork/">

Artwork
                          </a>
                        </li>
                        <li >
                          <a href="https://www.jenkins.io/awards/">

Awards
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
