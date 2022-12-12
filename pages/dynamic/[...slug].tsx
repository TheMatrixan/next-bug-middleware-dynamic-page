import { GetStaticPathsResult } from 'next';
import React, { FunctionComponent } from 'react';

const DynamicPage: FunctionComponent = () => {
  return <span>DynamicPage</span>;
};

export const getStaticProps = () => {
  return { props: {} };
};

export const getStaticPaths = async () => {
  const paths: GetStaticPathsResult['paths'] = [];
  const pages = ['123', '456'];

  pages.forEach((page) => {
    paths.push({ params: { slug: [page] } });
  });

  console.log('paths', JSON.stringify(paths));

  return {
    paths,
    fallback: false, // We want 404 on invalid slug.
  };
};

export default DynamicPage;
