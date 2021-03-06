import React, {
  Component,
} from 'react';

export default class CollagePage extends Component {
  constructor(props) {
    super(props);
    this.id = props.match.params.id;
    this.card = props.cards.find(candidate => candidate.id === this.id, this);
    this.navigateHome = this.navigateHome.bind(this);
  }

  navigateHome() {
    this.props.history.push('/');
  }

  render() {
    return (
      <main>
        <div className="result">
          <div className="result__branding">
            <img
              className="result__logo"
              src="../public/assets/img/logo-blue.png"
              alt="TweetCollage logo"
            />
            <img
              className="result__wordmark"
              src="../public/assets/img/logo-wordmark-blue.png"
              alt="TweetCollage"
            />
          </div>
          <div className="result__intro">
            <span className="result__intro-title">{`${this.card.user}${this.props.introTitle}`}</span>
            {this.props.subTitle}
          </div>

          <div className="result-collage">
            <img
              className="result-collage__img"
              src={`../public/assets/img/placeholder-${this.id}.jpg`}
            />
            <img
              className="result-collage__thumb"
              src={`../public/assets/img/placeholder-user-${this.id}.png`}
            />
          </div>

          <button className="result__button" onClick={this.navigateHome}>
            {this.props.link}
          </button>
        </div>
      </main>
    );
  }
}
