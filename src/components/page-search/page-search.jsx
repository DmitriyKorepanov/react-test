import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import cn from '../../utils/cn';
import './page-search.pcss';
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

  componentDidMount() {
      // download from link /search&page=1?repository=someRepository
      const path = this.props.location?.pathname;
      const search = this.props.location?.search;
      if ( path !== '/search' ) {
          const page = path.match(/page=[\w]+/g);
          const url = search.slice(search.lastIndexOf('=') + 1);
          const numberPage = page && Array.isArray(page) ?  Number(page[0].replace(/\D+/g,"")) : 1;
          this.props.getRepository( url, numberPage);
      }
  }

  pagination (num, action, repositoryUrl){
      switch (action){
          case 'prev':
              if (num >1) {
                  num -=1;
              }
              break;
          case 'next':
              if (num) {
                  num +=1;
              }
              break;
          case '':
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
              { !repositorySearched.length && <h3 className={ cn('no-result') }>результатов нет</h3>}
              <ul className={ cn('list') }>
                  {repositorySearched.map(item => (
                      <LineItem item={ item } key={ Math.random() } />
                  ))}
              </ul>
              <div className={ cn('page') }>Page №{numberPage}</div>
              <div className={ cn('wrapper') }>
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
                          this.pagination.bind(this, 1, 'none', repositoryPath)
                      }
                      className={ cn('btn') }
                  >1
                  </button>
                  <button
                      type='button'
                      onClick={
                          this.pagination.bind(this, 2, 'none', repositoryPath)
                      }
                      className={ cn('btn') }
                  >2
                  </button>
                  <button
                      type='button'
                      onClick={
                          this.pagination.bind(this, 3, 'none', repositoryPath)
                      }
                      className={ cn('btn') }
                  >3
                  </button>
                  <button
                      type='button'
                      onClick={
                          this.pagination.bind(this, 4, 'none', repositoryPath)
                      }
                      className={ cn('btn') }
                  >4
                  </button>
                  <button
                      type='button'
                      onClick={
                          this.pagination.bind(this, 5, 'none', repositoryPath)
                      }
                      className={ cn('btn') }
                  >5
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
