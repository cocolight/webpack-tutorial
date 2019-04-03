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
    "revision": "6facf9ef9627294b789c4ec3eba1c934"
  },
  {
    "url": "advanced-concept.html",
    "revision": "1ea11a87d4b4ea6b6cb120fd9fd2b005"
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
    "url": "assets/js/10.25bd5c73.js",
    "revision": "46cd7a2173cec40b3cd70c9818fa5faa"
  },
  {
    "url": "assets/js/11.c881af84.js",
    "revision": "c484ccef782c5320a4ff3463fdbf2fc9"
  },
  {
    "url": "assets/js/12.a1dc1144.js",
    "revision": "869ce052dc06b9f27898f8cdcf6a0c41"
  },
  {
    "url": "assets/js/13.d4fb21e8.js",
    "revision": "0912a238a64a8a32ed6cbe99458f3d0c"
  },
  {
    "url": "assets/js/14.d553a3d6.js",
    "revision": "7445d24d56c6de39ea474f5e2a13403a"
  },
  {
    "url": "assets/js/15.1b42c259.js",
    "revision": "cd15a96918a36703ec4721b3b684c98d"
  },
  {
    "url": "assets/js/16.36a50a94.js",
    "revision": "67e821efacb3cfee02a9c86545cf1387"
  },
  {
    "url": "assets/js/17.0bb96ce8.js",
    "revision": "660bdc4e8a8362f8936b156664adb052"
  },
  {
    "url": "assets/js/18.c93f17da.js",
    "revision": "f61180964c2375236968274a66acddfa"
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
    "url": "assets/js/4.877b33ce.js",
    "revision": "290e77b209b067798cce39089c69043d"
  },
  {
    "url": "assets/js/5.bb9d4fa5.js",
    "revision": "d2407d08250c6348d7adcb7ff1639f9c"
  },
  {
    "url": "assets/js/6.47e3d73f.js",
    "revision": "f4a3238ba4b5af26cbf1981e64d0052d"
  },
  {
    "url": "assets/js/7.37d34e7a.js",
    "revision": "913989e34c8795953ccc0310c6864048"
  },
  {
    "url": "assets/js/8.1effbb51.js",
    "revision": "13f40f4144864adb482cab85a5d104e1"
  },
  {
    "url": "assets/js/9.ea7acb49.js",
    "revision": "9da130e64d4a4479caada9a1eea70953"
  },
  {
    "url": "assets/js/app.ba08c4c0.js",
    "revision": "ccdad9b7907813dc1d9b1070f6dffc3c"
  },
  {
    "url": "build-other-assets.html",
    "revision": "19d5eb7e1ebd62b60124708c6e6b5c29"
  },
  {
    "url": "build-performance.html",
    "revision": "69e021fdde95a32eafed9cfd3d378db4"
  },
  {
    "url": "config-development.html",
    "revision": "4ea749cb9df922af173dcdb702500d7e"
  },
  {
    "url": "getting-started.html",
    "revision": "bb916358a7675152b4fa6e20dd7a4576"
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
    "revision": "65ae9ca5e97cbcf242c85fd9ac8ae647"
  },
  {
    "url": "introduction.html",
    "revision": "fe858d53d3923c8aee69613e9a8e6b74"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "webpack-angular.html",
    "revision": "b5629f0acfa1a599a55667ccf9db0209"
  },
  {
    "url": "webpack-build-performance.html",
    "revision": "1ba1f720265e228369ac4c2d432c2f4d"
  },
  {
    "url": "webpack-principle.html",
    "revision": "5f243882d432ee14e854d9b0bfd8c896"
  },
  {
    "url": "webpack-react.html",
    "revision": "9f036cb57591b74c32d8c607d1b2f18f"
  },
  {
    "url": "webpack-vue.html",
    "revision": "1546e3b268b9db061297a37bd8f1b525"
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
