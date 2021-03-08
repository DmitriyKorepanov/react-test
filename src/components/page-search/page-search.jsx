import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import cn from '../../utils/cn';
import { Search } from "../search/search";
import { LineItem } from "../line-item/line-item";
import { getRepository } from "../../actions/get-repository";

@cn('page-search')
class PageSearch extends React.Component {

  static propTypes = {
      getRepository: PropTypes.func.isRequired
  };

  render(cn) {
      const {getRepository, repositorySearched} = this.props;
      return (
          <div className={ cn() }>
              <h2 className={ cn('title') }>Результаты поиска</h2>
              <Search getRepository={ getRepository } />
              <ul>
                  {repositorySearched.map(item => (
                      <LineItem item={ item } key={ Math.random() } />
                  ))}
              </ul>
          </div>
      );
  }
}

const mapStateToProps = ({   repositorySearched }) => ({
    repositorySearched
});


const mapDispatchToProps = {
    getRepository
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PageSearch);
