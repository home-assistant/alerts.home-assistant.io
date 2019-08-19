# Home Assistant Alerts

## This repo is a WIP. Everything will change.

Home Assistant Alerts will be a database of alerts for Home Assistant users. Alerts will be able to be tied to integrations, Python versions, Python packages or operating systems.

The goal will be to integrate this into Home Assistant so that users can subscribe to alerts that impact their installation. It will also function as a standalone website too.

A preview of this project can be found at http://temp-demo-alerts.s3-website-us-east-1.amazonaws.com/

## Development

Install dependencies using `yarn`. Then run `script/develop`. Dev environment will be available on http://localhost:5000.

## Alert metadata

Alerts can have the following meta data:

### Created (required)

When the alert was created.

### Updated (optional)

When the alert was updated.

### GitHub issue (optional)

URL of a relevant GitHub issue.

### Integrations (optional)

List of impacted integrations combined with version ranges.

### Python packages (optional)

List of impacted Python packages combined with version ranges.
