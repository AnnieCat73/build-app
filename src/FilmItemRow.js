import React from 'react';

class FilmItemRow extends React.Component {
    render() {
        return (
            <li>
                <a href={this.props.film}>{this.props.film}</a>
            </li>//*Getting props.film from film={film} in movies map function
        );
    }
}

export default FilmItemRow;