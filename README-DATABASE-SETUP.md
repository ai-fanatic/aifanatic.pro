# Database Setup Guide for Lead Capture System

## 🚀 Quick Setup

Your lead capture system is now ready! Here's what has been implemented:

### ✅ What's Been Created

1. **Database Schema** (`lib/database.js`)

   - `leads` table for storing name, email, document info
   - `downloads` table for tracking download activity
   - Automatic table creation on first run

2. **API Endpoints**

   - `/api/download` - Handles form submissions and stores leads
   - `/api/leads` - Admin endpoint to view collected leads

3. **Components**

   - `DownloadForm` - Reusable form component
   - `/download` - Standalone download page
   - Admin dashboard at `/admin/leads`

4. **Integration**
   - Download button added to homepage hero section
   - Professional styling with your brand colors

### 🔧 Environment Setup

**IMPORTANT:** You need to create a `.env.local` file in your project root with these variables:

```bash
# Database Configuration
DATABASE_URL=postgresql://neondb_owner:npg_s5f7yloDbQtp@ep-wispy-darkness-ad3ujwtq-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require

# Admin Access (change this to your own secret)
ADMIN_SECRET_KEY=your-secret-admin-key-here

# Optional: For admin dashboard
NEXT_PUBLIC_ADMIN_SECRET=your-secret-admin-key-here
```

### 📁 File Structure

```
pages/
├── api/
│   ├── download.js          # Lead capture endpoint
│   └── leads.js             # Admin leads endpoint
├── admin/
│   └── leads.js             # Admin dashboard
└── download.js              # Standalone download page

components/
└── DownloadForm.js          # Reusable form component

lib/
└── database.js              # Database connection and functions

public/
└── documents/
    └── ai-innovation-guide.pdf  # Your document (replace with actual PDF)
```

### 🎯 How to Use

#### 1. Replace the Sample Document

- Replace `/public/documents/ai-innovation-guide.pdf` with your actual document
- Update the document name and description in the form

#### 2. Add More Download Forms

Use the `DownloadForm` component anywhere:

```jsx
<DownloadForm
  documentName="Your Document Name"
  documentPath="/documents/your-document.pdf"
  documentDescription="Description of your document"
/>
```

#### 3. Create Direct Download Links

Link to: `/download?doc=Document%20Name&path=/documents/file.pdf&desc=Description`

#### 4. Access Admin Dashboard

Visit `/admin/leads` to view collected leads and export data.

### 🔒 Security Features

- Email validation
- Duplicate prevention (same email + document)
- IP address tracking
- User agent logging
- Admin authentication for leads API

### 📊 Analytics Ready

The system tracks:

- Lead information (name, email, document)
- Download timestamps
- IP addresses
- User agents
- Download counts per lead

### 🚀 Deployment

1. Add your environment variables to your hosting platform (Vercel, Netlify, etc.)
2. The database tables will be created automatically on first API call
3. Test the system by submitting the form

### 🛠️ Customization

#### Change Document on Homepage

Edit `pages/index.js` lines 34-38:

```jsx
<DownloadForm
  documentName="Your New Document"
  documentPath="/documents/your-new-document.pdf"
  documentDescription="Your new description"
/>
```

#### Add to Other Pages

Import and use the `DownloadForm` component on any page.

#### Styling

The form uses Tailwind CSS and matches your site's professional color scheme.

### 📈 Next Steps

1. **Replace sample document** with your actual PDF
2. **Test the form** to ensure database connection works
3. **Customize the form** content for your needs
4. **Set up admin access** by changing the secret keys
5. **Add more documents** as needed

### 🔍 Troubleshooting

**Database Connection Issues:**

- Verify your environment variables are correct
- Check that your Neon database is accessible
- Ensure SSL mode is set correctly

**Form Not Working:**

- Check browser console for errors
- Verify API endpoints are accessible
- Test with a simple form submission

**Admin Dashboard Access:**

- Make sure `ADMIN_SECRET_KEY` is set
- Use the same key in the authorization header

Your lead capture system is now ready to collect valuable leads while providing users with your documents! 🎉
