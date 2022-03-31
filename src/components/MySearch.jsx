import React, {Component} from 'react';

export default class MySearch extends Component {
    state = {
        searchQuery: 'No game no life',
        type: 'all',
    };

    handelKey = (e) => {
        if (e.key === 'Enter') {
            this.props.search(this.state.searchQuery, this.state.type);
        }
        return true;
    };

    handelFilter = (e) => {
        this.setState(
            () => ({type: e.target.dataset.type}),
            () => {
                this.props.search(this.state.searchQuery, this.state.type);
            }
        );
    };

    render() {
        return (
            <div className='row'>
                <div className='input-field '>
                    <input
                        className='validate'
                        value={this.state.searchQuery}
                        onChange={(e) =>
                            this.setState({searchQuery: e.target.value})
                        }
                        type='text'
                        placeholder='Search...'
                        onKeyDown={this.handelKey}
                    />
                    <button
                        className='btn waves-effect waves-light'
                        type='submit'
                        name='action'
                        onClick={() =>
                            this.props.search(
                                this.state.searchQuery,
                                this.state.type
                            )
                        }>
                        Searh
                    </button>
                </div>
                <label>
                    <input
                        className='with-gap'
                        name='group3'
                        type='radio'
                        data-type='all'
                        onChange={this.handelFilter}
                        checked={this.state.type === 'all'}
                    />
                    <span>All</span>
                </label>
                <label>
                    <input
                        className='with-gap'
                        name='group3'
                        type='radio'
                        data-type='movie'
                        onChange={this.handelFilter}
                        checked={this.state.type === 'movie'}
                    />
                    <span>Movies only</span>
                </label>
                <label>
                    <input
                        className='with-gap'
                        name='group3'
                        type='radio'
                        data-type='series'
                        onChange={this.handelFilter}
                        checked={this.state.type === 'series'}
                    />
                    <span>Series only</span>
                </label>
            </div>
        );
    }
}
