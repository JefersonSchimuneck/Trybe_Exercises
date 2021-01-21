import React from "react";

class FetchPicture extends React.Component {
  constructor() {
    super();

    this.state = {
      dogPicture: undefined,
      storedPictures: [],
      loading: true,
    };
  }

  async fetchDogPicture() {
    this.setState(
      { loading: true },
      async () => {
        const requestReturn = await fetch(
          "https://dog.ceo/api/breeds/image/random"
        );
        const requestObject = await requestReturn.json();
        this.setState({
          loading: false,
          dogPicture: requestObject,
        })
      })
  }

  componentDidMount() {
    this.fetchDogPicture();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.dogPicture !== undefined) {
      if (nextState.dogPicture.message.includes('terrier')) return false;
    }
    return true;
  }

  componentDidUpdate() {
    if (this.state.dogPicture !== undefined) {
      localStorage.setItem("dogImagePath", this.state.dogPicture.message);
      const dogBreed = this.state.dogPicture.message.split("/")[4];
      alert(dogBreed);
    }
  }

  handleClick = () => {
    this.fetchDogPicture();
  }

  saveDogPicture = () => {
    this.setState(({ storedPictures, dogPicture, }) => ({
      storedPictures: [...storedPictures, dogPicture]
    }))
  }

  render() {
    const { dogPicture, loading } = this.state
    const loadingElement = <span>Loading...</span>

    return (
      <div>
        <button onClick={() => this.handleClick()}>Next Dog</button>
        <p>
          {loading ? loadingElement : <img src={dogPicture.message} alt='dog' />}
        </p>
      </div>
    )
  }
}

export default FetchPicture;
