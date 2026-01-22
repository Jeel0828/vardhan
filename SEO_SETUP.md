# SEO Configuration & Setup Guide

## SEO Components Added

### 1. **Metadata Setup** ✅
- **File**: `app/layout.tsx`
- Enhanced metadata with:
  - Proper title and description
  - Keywords for search engines
  - Open Graph tags for social media
  - Twitter Card tags
  - Canonical URL
  - Viewport configuration
  - Robots configuration

### 2. **Schema Markup** ✅
- **File**: `app/page.tsx`
- Added JSON-LD structured data for:
  - Organization schema
  - Better SERP rich snippets
  - Social profiles linking

### 3. **Sitemap & Robots.txt** ✅
- **File**: `public/sitemap.xml` - For search engine indexing
- **File**: `public/robots.txt` - For search engine crawling rules

### 4. **SEO Utilities** ✅
- **File**: `src/lib/seo.ts`
- Helper functions for:
  - Meta tags generation
  - Schema markup creation
  - Breadcrumb generation
  - Property schema generation

### 5. **SEO Components** ✅
- **File**: `src/component/SEO/SEO.tsx` - Server-side SEO wrapper
- **File**: `src/component/MetaTags/MetaTags.tsx` - Meta tags component

### 6. **Next.js Configuration** ✅
- **File**: `next.config.ts`
- Optimizations for:
  - Security headers
  - Image optimization
  - Compression
  - Redirects

## SEO Best Practices Implemented

### ✅ Completed

1. **Meta Tags**
   - Title tags (60 characters)
   - Meta descriptions (160 characters)
   - Keywords targeting

2. **Structured Data**
   - Organization schema
   - LocalBusiness schema
   - Breadcrumb schema support
   - Property/Real Estate schema

3. **Site Architecture**
   - Sitemap.xml for all pages
   - Robots.txt with crawl directives
   - Canonical URLs
   - Proper heading hierarchy (ensure H1 usage in components)

4. **Performance**
   - Image optimization with Next.js Image
   - Compression enabled
   - Modern image formats (AVIF, WebP)
   - Production source maps disabled

5. **Security**
   - Security headers configured
   - X-Frame-Options set to SAMEORIGIN
   - XSS Protection enabled
   - Referrer policy configured

### 📋 Additional Recommendations

1. **Image Optimization**
   - Ensure all images have alt text describing content
   - Use next/image component for automatic optimization
   - Add descriptive filenames

2. **Content Optimization**
   - Ensure each page has a unique H1 tag
   - Use descriptive anchor text for internal links
   - Keep content well-structured with proper heading hierarchy (H1 → H2 → H3)

3. **Mobile Optimization**
   - Viewport meta tag is set
   - Ensure all components are mobile-responsive
   - Test with Google Mobile-Friendly Test Tool

4. **Social Media**
   - Update social media handles in SEO config
   - Add Open Graph images (1200x630px recommended)
   - Update social links in Footer component

5. **Analytics & Monitoring**
   - Add Google Analytics 4
   - Set up Google Search Console
   - Monitor Core Web Vitals

6. **Additional Headers to Consider**
   ```tsx
   // Add to next.config.ts headers for better SEO:
   {
     key: "Accept-CH",
     value: "DPR, Viewport-Width, Width",
   }
   ```

## Implementation Checklist

- ✅ Metadata configuration
- ✅ Schema markup
- ✅ Sitemap & robots.txt
- ✅ Security headers
- ✅ Image optimization
- ✅ SEO utilities & components
- ⚠️ **TODO**: Update social media handles (in SEO config)
- ⚠️ **TODO**: Add Google Analytics
- ⚠️ **TODO**: Add Google Search Console verification
- ⚠️ **TODO**: Verify all images have alt text
- ⚠️ **TODO**: Test with Google Mobile-Friendly Test
- ⚠️ **TODO**: Submit sitemap to Google Search Console

## How to Use SEO Components

### Using MetaTags Component

```tsx
import MetaTags from "@/src/component/MetaTags/MetaTags";

export default function YourPage() {
  return (
    <>
      <MetaTags
        title="Your Page Title"
        description="Your page description"
        url="https://vardhanproject.com/your-page"
        image="https://vardhanproject.com/image.jpg"
        type="article"
      />
      {/* Your page content */}
    </>
  );
}
```

### Using SEO Utilities

```tsx
import { generateOrganizationSchema, generatePropertySchema } from "@/src/lib/seo";

const schema = generateOrganizationSchema();
// or
const propertySchema = generatePropertySchema({
  name: "Property Name",
  description: "Property description",
  bedrooms: 3,
  bathrooms: 2,
});
```

## Environment Variables

If needed, add to `.env.local`:

```
NEXT_PUBLIC_BASE_URL=https://vardhanproject.com
NEXT_PUBLIC_SITE_NAME=Vardhan Project
```

## Verification

1. **Google Search Console**
   - Add property
   - Submit sitemap
   - Monitor indexing status

2. **Google PageSpeed Insights**
   - Check performance
   - Check Core Web Vitals

3. **Schema Markup Validator**
   - Validate structured data
   - Ensure no errors

4. **Mobile-Friendly Test**
   - Test responsive design
   - Check usability

## Resources

- [Google Search Central](https://developers.google.com/search)
- [Schema.org Documentation](https://schema.org)
- [Next.js SEO Guide](https://nextjs.org/learn/seo/introduction-to-seo)
- [Core Web Vitals Guide](https://web.dev/vitals/)
