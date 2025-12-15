# GoGreen Portable Toilets - Facebook Pixel Integration

This application includes both Facebook Pixel and Google Ads conversion tracking for comprehensive marketing analytics.

## Google Ads Conversion Tracking

### Conversion ID: AW-600725915

The following conversion actions are tracked:

#### Conversion Label: BbPqCI_ppvAaEJuzuZ4C
This single conversion action tracks:
- Homepage quote form submissions
- Hero section quick form submissions  
- Help overlay form submissions
- Contact page form submissions
- Service page form submissions
- Phone number clicks
- Thank you page visits (primary conversion)

### Enhanced Conversions
Customer data sent to Google Ads includes:
- Email address
- Phone number  
- First and last name
- Event type and details
- Location information

### Conversion Values
- Form submissions: $150 estimated value
- Phone clicks: $100 estimated value  
- Main conversions: $200 estimated value

### Benefits for Google Ads
- **Smart Bidding optimization** based on actual conversions
- **Audience insights** from conversion data
- **Attribution tracking** across devices and touchpoints
- **Enhanced conversions** for better measurement accuracy
- **Automated bid adjustments** for high-converting keywords

## Facebook Pixel Setup

This application includes Facebook Pixel integration for tracking form submissions and conversions. To complete the setup:

### 1. Replace Pixel ID
In `index.html`, replace `YOUR_PIXEL_ID` with your actual Facebook Pixel ID:

```html
fbq('init', 'YOUR_ACTUAL_PIXEL_ID');
```

And in the noscript tag:
```html
src="https://www.facebook.com/tr?id=YOUR_ACTUAL_PIXEL_ID&ev=PageView&noscript=1"
```

### 2. Events Being Tracked

#### Standard Facebook Events:
- **PageView** - Automatic on all pages
- **Lead** - When forms are submitted
- **Contact** - When phone numbers are clicked
- **ViewContent** - When service pages are viewed
- **CompleteRegistration** - When users reach thank you page

#### Custom Events:
- **QuoteRequest** - Form submissions with detailed data
- **PhoneClick** - Phone number clicks
- **QuoteCompleted** - Conversion completion

### 3. Data Exported to Facebook

For each form submission, the following data is sent:

```javascript
{
  form_type: 'homepage_quote_form',
  customer_name: 'John Doe',
  phone_number: '555-123-4567',
  email: 'john@example.com',
  event_type: 'wedding',
  event_date: '2024-06-15',
  guest_count: '100-200',
  location: 'San Francisco',
  timestamp: '2024-01-15T10:30:00.000Z'
}
```

### 4. Form Types Tracked

- `homepage_quote_form` - Main homepage form
- `hero_form` - Hero section quick form
- `help_overlay_form` - Help popup form
- `contact_page_form` - Contact page form
- `deluxe_plus_toilet_form` - Service page forms
- (Additional service page forms can be added)

### 5. Benefits for Facebook Ads

This data helps Facebook:
- **Optimize ad delivery** to people likely to submit forms
- **Create lookalike audiences** based on your best customers
- **Track conversion rates** and ROI accurately
- **Improve ad targeting** with detailed customer data
- **Enable retargeting** of people who visited but didn't convert

### 6. Privacy Compliance

The pixel respects user privacy by:
- Only tracking business-relevant data
- Not storing sensitive personal information
- Working with Facebook's data protection measures
- Allowing users to opt out via browser settings

### 7. Testing the Pixel

Use Facebook's Pixel Helper browser extension to verify:
- Pixel is firing correctly
- Events are being tracked
- Data is being sent properly

### 8. Adding More Service Pages

To add tracking to additional service pages:

```typescript
import { trackFormSubmission, trackServicePageView } from '../utils/facebookPixel';

// In component
useEffect(() => {
  trackServicePageView('service_name');
}, []);

// In form submit
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  trackFormSubmission(formData, 'service_name_form');
  onPageChange('thank-you');
};
```

This comprehensive tracking setup will provide Facebook with rich data to optimize your advertising campaigns and improve conversion rates.