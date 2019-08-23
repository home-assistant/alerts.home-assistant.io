# Home Assistant Alerts

## This repo is a WIP. Everything will change.

Home Assistant Alerts will be a database of alerts for Home Assistant users. Alerts will be able to be tied to integrations, Python versions, Python packages or operating systems.

The goal will be to integrate this into Home Assistant so that users can subscribe to alerts that impact their installation. It will also function as a standalone website too.

## Development

Install dependencies using `yarn`. Then run `script/develop`. Dev environment will be available on http://localhost:5000.

## Alert metadata

Alerts can have the following meta data:

### Created (required)

When the alert was created.

### Updated (optional)

When the alert was updated.

### Home Assistant (required)

Home Assistant versions impacted.

### GitHub issue (optional)

URL of a relevant GitHub issue.

### Integrations (optional)

List of impacted integrations combined with version ranges.

### Python packages (optional)

List of impacted Python packages combined with version ranges.

## Deployment

Deployment is done with `script/deploy`. It will build the app and sync it to an s3 bucket.

The s3 bucket needs to be configured for static website hosting with default page `index.html`.

Under Permissions -> CORS Configuration, add the following:

```xml
<CORSConfiguration>
  <CORSRule>
    <AllowedOrigin>*</AllowedOrigin>
    <AllowedMethod>GET</AllowedMethod>
  </CORSRule>
</CORSConfiguration>
```
