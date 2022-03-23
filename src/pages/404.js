import React from 'react'
import Helmet from 'react-helmet'
import { Link, StaticQuery } from 'gatsby'
import _get from 'lodash/get'
import AlertTriangle from 'react-feather/dist/icons/alert-triangle'
import header from '../components/header'
import Layout from '../components/Layout'

export default ({ children }) => (
  <Layout
    render={data => (
      <Layout>
        <Helmet>
          <title>404 – Page Not Found</title>
        </Helmet>
        <section className="section thick">
          <div className="container skinny taCenter">
            <p>
              <AlertTriangle size="5rem" />
            </p>
            <h1><span role="img" aria-label="upset emoji">🚫</span> 404 - Page Not Found</h1>
            <p>
              Oh No! <span role="img" aria-label="upset emoji">😫</span> We can't find the page you are looking for!
              <br />
              Head back to{' '}
              <Link to="/">{_get(data, 'globalSettings.siteTitle')}</Link>
            </p>
          </div>
        </section>
      </Layout>
    )}
  />
)
