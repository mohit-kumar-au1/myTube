import React from "react";

class CreatePlaylist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      type: "public",
      description: "",
      formState: {
        isFormValid: true,
        isNameValid: true,
        isDescriptionValid: true
      }
    };

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(event) {
    let name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  }

  validateForm() {
    let newFormState = this.state.formState;

    if (!this.state.name) {
      newFormState.isNameValid = false;
      newFormState.isFormValid = false;
    }

    if (!this.state.description) {
      newFormState.isDescriptionValid = false;
      newFormState.isFormValid = false;
    }

    this.setState({
      formState: newFormState
    });

    return newFormState.isFormValid;
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.validateForm()) {
    } else {
      console.log("form invalid");
    }
  }

  render() {
    return (
      <div>
        <h3>Create a new playlist</h3>
        <hr />

        {!this.state.formState.isFormValid && (
          <div className="alert alert-danger">
            Please fill all the fields and try again.
          </div>
        )}

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="">Playlist Name</label>
            <input
              onChange={this.onChange}
              type="text"
              name="name"
              className={`form-control ${!this.state.formState.isNameValid &&
                "is-invalid"}`}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Playlist Type</label>
            <select
              className="form-control"
              onChange={this.onChange}
              name="type"
            >
              <option value="public">Public</option>
              <option value="private">Private</option>
              <option value="unlisted">Unlisted</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="">Playlist Description</label>
            <textarea
              rows="5"
              className={`form-control ${!this.state.formState
                .isDescriptionValid && "is-invalid"}`}
              onChange={this.onChange}
              name="description"
            />
          </div>
          <button type="submit" className="btn btn-dark">
            Create Playlist
          </button>
        </form>
      </div>
    );
  }
}

export default CreatePlaylist;
