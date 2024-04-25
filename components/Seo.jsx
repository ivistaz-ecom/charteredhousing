import React from 'react'

function Seo({ pageTitle, pageDescription, MetaImage, url }) {
  const structuredData = {
    '@context': 'https://schema.org/',
    '@type': 'WebSite',
    name: 'Upfront Global',
    url: { url },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${url}{search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <head>
      {/* <!-- HTML Meta Tags --> */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription}></meta>
      <link rel="canonical" href={url} />
      <meta name="robots" content="index,follow"></meta>
      {/* <!-- Google / Search Engine Tags --> */}
      <meta itemProp="name" content={pageTitle}></meta>
      <meta itemProp="description" content={pageDescription}></meta>
      <meta itemProp="image" content={MetaImage}></meta>

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content={url}></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:title" content={pageTitle}></meta>
      <meta property="og:description" content={pageDescription}></meta>
      <meta property="og:image" content={MetaImage}></meta>

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:title" content={pageTitle}></meta>
      <meta name="twitter:description" content={pageDescription}></meta>
      <meta name="twitter:image" content={MetaImage}></meta>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </head>
  )
}

export default Seo
