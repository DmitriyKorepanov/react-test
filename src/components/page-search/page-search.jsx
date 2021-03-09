import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import cn from '../../utils/cn';
import { Search } from "../search/search";
import { LineItem } from "../line-item/line-item";
import { getRepository } from '../../actions/get-repository';

@cn('page-search')
class PageSearch extends React.Component {

  static propTypes = {
      getRepository: PropTypes.func.isRequired,
      repositorySearched: PropTypes.any,
      repositoryPath:  PropTypes.any
  };


  state = {numberPage: 1};

  pagination (num, action, repositoryUrl){
      switch (action){
          case ('prev'):
              if (num >1) {
                  num -=1;
              }
              break;
          case ('next'):
              if (num) {
                  num +=1;
              }
              break;
          case (''):
              break;
      }
      this.props.getRepository( repositoryUrl, num);
      return this.setState({numberPage: num});
  };

  render(cn) {
      const {getRepository, repositorySearched, repositoryPath} = this.props;
      const {numberPage} =this.state;
      return (
          <div className={ cn() }>
              <h2 className={ cn('title') }>Результаты поиска  {repositoryPath}</h2>
              <Search getRepository={ getRepository } />
              <ul>
                  {repositorySearched.map(item => (
                      <LineItem item={ item } key={ Math.random() } />
                  ))}
              </ul>
              <div className={ cn('page') }>Page №{numberPage}</div>
              <button
                  type='button'
                  onClick={
                      this.pagination.bind(this, numberPage, 'prev', repositoryPath)
                  }
                  className={ cn('btn') }
              >Prev
              </button>
              <button
                  type='button'
                  onClick={
                      this.pagination.bind(this, numberPage, 'next', repositoryPath)
                  }
                  className={ cn('btn') }
              >Next
              </button>
          </div>
      );
  }
}

const mapStateToProps = ({   repositorySearched, repositoryPath }) => ({
    repositorySearched,
    repositoryPath
});


const mapDispatchToProps = {
    getRepository
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PageSearch);
