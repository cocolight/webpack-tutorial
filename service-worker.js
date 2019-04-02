/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0ab12bc0a3d6a388e24e68ec96a8c142"
  },
  {
    "url": "advanced-concept.html",
    "revision": "0d04760e6b37043c29301aa3d7231342"
  },
  {
    "url": "assets/css/0.styles.f9563ee1.css",
    "revision": "78b5c8e85f0f7be11de082209c821c25"
  },
  {
    "url": "assets/img/logo-on-white-bg.81da10d7.png",
    "revision": "81da10d7fe4e203f74c1fd5e2d316f5b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/what-is-webpack.f78661be.png",
    "revision": "f78661bef717cf2cc2c2e5158f196384"
  },
  {
    "url": "assets/js/10.8566553c.js",
    "revision": "d87911bc45497a6d9a670496362862fa"
  },
  {
    "url": "assets/js/11.ce4c8158.js",
    "revision": "fea494f10ef86ebde339b1577857f201"
  },
  {
    "url": "assets/js/12.a80410d3.js",
    "revision": "6157385f876c4344a619076d33159fa4"
  },
  {
    "url": "assets/js/13.d5653e53.js",
    "revision": "8fb39c61136e835a040668dd9bc26223"
  },
  {
    "url": "assets/js/14.783bb339.js",
    "revision": "24ae108fc84e4be5f316b5975b9a87c1"
  },
  {
    "url": "assets/js/15.93d67d38.js",
    "revision": "ac2376419fae91259da7048653c216c3"
  },
  {
    "url": "assets/js/16.340e5e35.js",
    "revision": "c7450993733d69aef2d687fa36cda3d5"
  },
  {
    "url": "assets/js/17.60ed18b5.js",
    "revision": "4cb87d42a8f58cfacc003ca645efb8b4"
  },
  {
    "url": "assets/js/18.37f3427e.js",
    "revision": "7a7ef306bfbdb7c576263774c345f683"
  },
  {
    "url": "assets/js/19.649fcdbf.js",
    "revision": "4163bf382a9366659a5a5c6d4e0fe8a6"
  },
  {
    "url": "assets/js/2.fe8686b1.js",
    "revision": "873ae58edc8bb2daf4db853bfad65c0f"
  },
  {
    "url": "assets/js/3.6fb41313.js",
    "revision": "e643d67f56515fd32062d6771dfdea5a"
  },
  {
    "url": "assets/js/4.5f7f919a.js",
    "revision": "85cf978ce8758d760af5f8bc48a59b5e"
  },
  {
    "url": "assets/js/5.bb9d4fa5.js",
    "revision": "d2407d08250c6348d7adcb7ff1639f9c"
  },
  {
    "url": "assets/js/6.71d08720.js",
    "revision": "c3e40c7c2af1231b1722404f2a336835"
  },
  {
    "url": "assets/js/7.37d34e7a.js",
    "revision": "913989e34c8795953ccc0310c6864048"
  },
  {
    "url": "assets/js/8.2e0bf860.js",
    "revision": "af789aac9cfafb015f003adebf4c1de0"
  },
  {
    "url": "assets/js/9.2a66b56e.js",
    "revision": "188019077120b3ac731c7825f86b9c7b"
  },
  {
    "url": "assets/js/app.96d4f12b.js",
    "revision": "2436079f789afbb27c64c055230d11fc"
  },
  {
    "url": "build-js-assets.html",
    "revision": "ba5fbc5b5311c15f9f3190f43d44ad65"
  },
  {
    "url": "build-other-assets.html",
    "revision": "957cfba57e78dfd8a119dbf353b00c52"
  },
  {
    "url": "build-performance.html",
    "revision": "1c770d7484c1125e5b43d12187b31145"
  },
  {
    "url": "config-development.html",
    "revision": "2734a63a847d1b18678a344a38964747"
  },
  {
    "url": "getting-started.html",
    "revision": "4b512701a0994967a39053c691760a28"
  },
  {
    "url": "icons/android-chrome-128x128.png",
    "revision": "cb0093496837d3dc43dfae5a9104d663"
  },
  {
    "url": "icons/android-chrome-600x600.png",
    "revision": "f1b22c1302733468166d7ff3eeb39633"
  },
  {
    "url": "index.html",
    "revision": "112c4e69ef0e8f01741fb63e81ab398c"
  },
  {
    "url": "introduction.html",
    "revision": "f64703d89c4d1f5c495fce114331e4fb"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "webpack-angular.html",
    "revision": "694425197592537341af3f2381349686"
  },
  {
    "url": "webpack-build-performance.html",
    "revision": "7c8baacfea3b743a3572dde927863ed2"
  },
  {
    "url": "webpack-principle.html",
    "revision": "e9cd98b0184574fdc591eeac6a54b002"
  },
  {
    "url": "webpack-react.html",
    "revision": "8edcd1d04fc2bb1c4993d2cce2ac30ec"
  },
  {
    "url": "webpack-vue.html",
    "revision": "cd1ca92ea1bde5a38fd01f33cb4fe8c4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
