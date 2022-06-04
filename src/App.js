/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Badge from "react-bootstrap/Badge";
import { marked } from 'marked'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: `
     `,
    };
  }

  updateMarkdown(markdown) {
    this.setState({ markdown });
  }

  render() {
    var inputStyle = {
      width: "400px",
      height: "50vh",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
    };
    var outputStyle = {
      width: "400px",
      height: "50vh",
      backgroundColor: "#DCDCDC",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
    };

    return (
      <div className="App">
        <div className="container">
          <div className="row mt-4">
            <div className="col text-center">
              <h1>
                <Badge className="text-align-center" variant="light">
                  Markdown Previewer
                </Badge>
              </h1>
            </div>
          </div>
          <div className="row mt-4">
          <div className="col text-center" style={{ padding: "10px" }}>
              <a
                class="github-button"
                href="https://github.com/Mariayey12"
                data-size="large"
                aria-label="Follow @Mariayey12 on GitHub"
              >
                Follow @lelouchB
              </a>
              <div style={{ marginLeft: "10px" }}></div>
              <a
                class="github-button"
                href=""
                data-icon="octicon-star"
                data-size="large"
                aria-label="Star lelouchB/markdown-previewer on GitHub"
              >
                Star
              </a>

              <a
                class="github-button"
                href="https://github.com/lelouchB/markdown-previewer/fork"
                data-icon="octicon-repo-forked"
                data-size="large"
                aria-label="Fork lelouchB/markdown-previewer on GitHub"
              >
                Fork
              </a>
              </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center" variant="light">
                    Markdown Input
                  </Badge>
                </h4>
              </div>

              <div className="mark-input" style={inputStyle}>
                <textarea
                  className="input"
                  style={inputStyle}
                  value={this.state.markdown}
                  onChange={(e) => {
                    this.updateMarkdown(e.target.value);
                  }}
                >{console.log(this.state.markdown)}
                  {" "}
                </textarea>
              </div>
            </div>
            <div className="col-md-6">
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center" variant="light">
                    Previewer
                  </Badge>
                </h4>
              </div>
              <div style={outputStyle}  dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
