import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import searchIcon from "../img/musica-searcher.svg";

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: "" };
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    // control the input
    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.props.history.push(`/query/${this.state.term}/1`);
    }

    render() {
        return (
            <form className="input-group search-bar" onSubmit={this.onFormSubmit}>
                <input
                    placeholder="搜尋"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange} />
                <button type="submit" className="btn searchbar-btn"><img src={searchIcon} className="btn-svg" /></button>
            </form>
        );
    }
}

SearchBar.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func
    })
};

export default withRouter(SearchBar);