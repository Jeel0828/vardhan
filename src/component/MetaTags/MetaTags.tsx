import React from "react";

interface MetaTagsProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
  type?: "website" | "article" | "product";
  author?: string;
  publishedDate?: string;
  updatedDate?: string;
}

export function MetaTags({
  title,
  description,
  url = "https://vardhanproject.com",
  image = "https://vardhanproject.com/og-image.jpg",
  type = "website",
  author = "Vardhan Project",
  publishedDate,
  updatedDate,
}: MetaTagsProps) {
  return (
    <>
      {/* Primary Meta Tags */}
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="author" content={author} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Article specific */}
      {type === "article" && (
        <>
          {publishedDate && (
            <meta property="article:published_time" content={publishedDate} />
          )}
          {updatedDate && (
            <meta property="article:modified_time" content={updatedDate} />
          )}
          <meta property="article:author" content={author} />
        </>
      )}

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Other */}
      <meta httpEquiv="content-language" content="en-us" />
      <meta name="robots" content="index, follow" />
    </>
  );
}

export default MetaTags;
