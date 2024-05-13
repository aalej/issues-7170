# Rerpo for issue 7170

## Versions

firebase-tools: v13.8.2<br>
node: v20.12.2<br>
platform: macOS sonoma 14.4.1

## Steps to reproduce

1. Run `firebase deploy --only functions --project PROJECT_ID`

```
...
✔  functions: required API eventarc.googleapis.com is enabled
✔  functions: required API pubsub.googleapis.com is enabled
✔  functions: required API run.googleapis.com is enabled
✔  functions: required API storage.googleapis.com is enabled
i  functions: generating the service identity for pubsub.googleapis.com...
i  functions: generating the service identity for eventarc.googleapis.com...
✔  functions: functions folder uploaded successfully
i  functions: creating Node.js 18 (2nd Gen) function helloWorld(us-central1)...
✔  functions[helloWorld(us-central1)] Successful create operation.
Function URL (helloWorld(us-central1)): FUNCTION_URL
i  functions: cleaning up build files...

✔  Deploy complete!
```

1. Run `firebase deploy --only hosting --project PROJECT_ID`

```
...
✔  functions: required API eventarc.googleapis.com is enabled
✔  functions: required API run.googleapis.com is enabled
✔  functions: required API pubsub.googleapis.com is enabled
✔  functions: required API storage.googleapis.com is enabled
i  functions: generating the service identity for pubsub.googleapis.com...
i  functions: generating the service identity for eventarc.googleapis.com...
✔  functions: .firebase/PROJECT_ID/functions folder uploaded successfully
i  hosting[PROJECT_ID]: beginning deploy...
i  hosting[PROJECT_ID]: found 28 files in .firebase/PROJECT_ID/hosting
✔  hosting[PROJECT_ID]: file upload complete
i  functions: creating Node.js 20 (2nd Gen) function firebase-frameworks-PROJECT_ID:FUNCTION_NAME(us-central1)...
✔  functions[firebase-frameworks-PROJECT_ID:FUNCTION_NAME(us-central1)] Successful create operation.
Function URL (firebase-frameworks-PROJECT_ID:FUNCTION_NAME(us-central1)): https://FUNCTION_NAME-3zmjtgoueq-uc.a.run.app
i  functions: cleaning up build files...
i  hosting[PROJECT_ID]: finalizing version...
✔  hosting[PROJECT_ID]: version finalized
i  hosting[PROJECT_ID]: releasing new version...
✔  hosting[PROJECT_ID]: release complete

✔  Deploy complete!
```
