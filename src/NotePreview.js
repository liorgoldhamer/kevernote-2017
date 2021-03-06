import React, { Component } from 'react';
import TimeAgo from 'react-timeago';

export default class NotePreview extends Component {
  constructor(props) {
    super(props);
    this.bodyPreview = this.bodyPreview.bind(this);
    this.bodySummary = this.bodySummary.bind(this);
  }

  bodyPreview() {
    let body = this.props.body;
    let length = body.length;
    return (length>99) ? this.bodySummary(body) : body;
  }

  bodySummary(body) {
    return (body.slice(0,97) + "...");
  }

  render() {
    const {id, title, createdAt} = this.props;

    return (
      <a className="note-preview__link" href={"#notes/" + id}>
        <span className="note-preview__time">
          <TimeAgo date={createdAt} />
        </span>
        <h2 className="note-preview__title">{title}</h2>
        <p className="note-preview__body">{this.bodyPreview()}</p>
      </a>
    );
  }
}
