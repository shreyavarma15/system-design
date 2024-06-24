//Navigator is used to detect the browser and it's capabilities. , the env in which it is running
//eg- language, online, cookieEnabled, geolocation, storge

//indexDB storage capacity- 50MB-100MB
//Cookies- 4kb-20kb
//Cache- ~100MB

function hasEnoughSpaceForData() {
  if ("storage" in navigator && "estimate" in navigator.storage) {
    //The Storage Manager API is available
    //You can proceed to check storage usage

    navigator.storage.estimate().then((estimate) => {
      console.log("Usage:" + (estimate.usage / 1024 / 1024).toFixed(2) + " MB");
      //Storage usage in MB

      console.log("Quota:" + (estimate.quota / 1024 / 1024).toFixed(2) + " MB");
      //Storage quota in MB
    });
  } else {
    console.log("StorageManager API is not supported in this browser");
  }
}

hasEnoughSpaceForData();
