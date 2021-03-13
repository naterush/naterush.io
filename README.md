# Nate's Blog

1. https://console.cloud.google.com/storage/browser/naterush.io;tab=objects?forceOnBucketsSortingFiltering=false&project=naterush-io&prefix=&forceOnObjectsSortingFiltering=false <- and then delete all objects
2. cd blog; cargo run
3. npm build
4. cd build; gsutil cp -r .  gs://naterush.io
