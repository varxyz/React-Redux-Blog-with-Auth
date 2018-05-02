import React from 'react';
import { Link } from 'react-router';
import { IndexLayout } from './styled/Layout';
import H1 from './styled/h1';

const IndexPage = () => (
  <IndexLayout>
    <H1>Hello!</H1>
    <p>
      I&apos;m Sergey and I am a full-stack developer,
      <br />
      {' '}
      primarily focused on
      {' '}
      <strong>Node.js</strong>
      {' '}
      and
      {' '}
      <strong>React</strong>
      .
    </p>
    <p>
      <Link to="/posts">entries</Link>
      <a
        rel="noopener noreferrer"
        href="https://github.com/varxyz"
        target="_blank"
      >
        github
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://twitter.com/wx_five"
      >
        twitter
      </a>
      <a href="mailto:mrsergiumoraru@gmail.com">email</a>
    </p>
  </IndexLayout>
);

export default IndexPage;
