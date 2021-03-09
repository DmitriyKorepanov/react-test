import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Search } from "../search/search";
import './page-main.pcss';
import cn from "../../utils/cn";
import { getRepository } from "../../actions/get-repository";

@cn("page-main")
class PageMain extends React.Component {
  static propTypes = {
      getRepository: PropTypes.func.isRequired,
      history: PropTypes.any
  };

  render(cn) {
      const { getRepository, history } = this.props;

      return (
          <div className={ cn() }>
              <h1 className={ cn("title") }>Приветсвие!</h1>
              <Search getRepository={ getRepository } history={ history } />
          </div>
      );
  }
}

const mapStateToProps = ({ repositorySearched }) => ({
    repositorySearched
});

const mapDispatchToProps = {
    getRepository
};

export default connect(mapStateToProps, mapDispatchToProps)(PageMain);
