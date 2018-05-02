import styled from 'styled-components';

const Layout = styled.div`
  margin: auto;
  height: 100vh;
`;

export const PostBody = styled.div`
  width: 41rem;
  margin: 2rem auto;
  font-family: BlinkMacSystemFont, 'Helvetica Neue', 'Segoe UI', Arial, sans-serif;
  line-height: 1.6rem;
  input {
    width:100%;
  }
  textarea {
    width: 100%;
    height: 30rem;
  }
  h3 {
    margin: 2rem 0 1rem;
    font-weight: bold;
  }
  h5 {
    margin: 1rem 0;
  }
`;

export const AuthBody = styled.div`
  width: 21rem;
  margin: auto;
  font-family: BlinkMacSystemFont, 'Helvetica Neue', 'Segoe UI', Arial, sans-serif;
  line-height: 1.6rem;
  input {
    width:100%;
  }
  textarea {
    width: 100%;
    height: 30rem;
  }
  h3 {
    margin: 1rem 0;
    font-weight: bold;
  }
  h5 {
    margin: 1rem 0;
  }
`;

export const PostsUl = styled.ul`
    width: 670px;
    margin-left:100px;
    padding-left:100px;
    margin: 2rem auto;
    list-style-type: none;
    font-size:0.8em;
    font-family:Menlo, monospace;
    li > span {
      display: inline-block;
      width: 140px;
      text-align: right;
      margin-right: 20px;
      color: #571ec3;
      opacity:0.5;
    }
    li > a {
       color: #571ec3 !important;
    }
    li > a:hover {
      color: #fff !important;
    background: #571ec3;
    text-decoration: none;
  }
`;

export const IndexLayout = styled.div`
    position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  p {
    color: #571ec3;
    font-family: Menlo, 'Andale Mono','Lucida Grande';
    text-align: center !important;
    font-size:.825em;
  }
  a {
    margin: 0 5px;
    text-decoration:none;
    color:#571ec3;
    font-size:.825em;

  }
  a:first-child {
    margin-left:-20px
  }
  a:hover {
    color: #fff;
    background: #571ec3;
    text-decoration: none;
  }
`;

export default Layout;
