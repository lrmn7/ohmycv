/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-479852ff'], (function (workbox) { 'use strict';

  self.skipWaiting();
  workbox.clientsClaim();

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "assets/abap-b1ef16d9.js",
    "revision": null
  }, {
    "url": "assets/apex-cfc8f5f9.js",
    "revision": null
  }, {
    "url": "assets/app-9ad0cf38.js",
    "revision": null
  }, {
    "url": "assets/azcli-3065b420.js",
    "revision": null
  }, {
    "url": "assets/bat-49811178.js",
    "revision": null
  }, {
    "url": "assets/bicep-8839222a.js",
    "revision": null
  }, {
    "url": "assets/bold-0c23bf01.otf",
    "revision": null
  }, {
    "url": "assets/bold-100c8057.ttf",
    "revision": null
  }, {
    "url": "assets/bold-32c03660.ttf",
    "revision": null
  }, {
    "url": "assets/bold-5ee87114.ttf",
    "revision": null
  }, {
    "url": "assets/bold-8fa5e2a3.ttf",
    "revision": null
  }, {
    "url": "assets/bold-a721c09d.otf",
    "revision": null
  }, {
    "url": "assets/bold-d1fdba14.otf",
    "revision": null
  }, {
    "url": "assets/bolditalic-0cf4e338.ttf",
    "revision": null
  }, {
    "url": "assets/bolditalic-2b7391a7.ttf",
    "revision": null
  }, {
    "url": "assets/bolditalic-5d874a57.otf",
    "revision": null
  }, {
    "url": "assets/bolditalic-73c6819a.ttf",
    "revision": null
  }, {
    "url": "assets/bolditalic-a49a038d.otf",
    "revision": null
  }, {
    "url": "assets/bolditalic-c8c10983.otf",
    "revision": null
  }, {
    "url": "assets/cameligo-00c3a1ec.js",
    "revision": null
  }, {
    "url": "assets/clojure-5ec8141f.js",
    "revision": null
  }, {
    "url": "assets/codicon-9420d58f.ttf",
    "revision": null
  }, {
    "url": "assets/coffee-f5637df1.js",
    "revision": null
  }, {
    "url": "assets/cpp-3eb1409c.js",
    "revision": null
  }, {
    "url": "assets/csharp-e152e032.js",
    "revision": null
  }, {
    "url": "assets/csp-bcd686a9.js",
    "revision": null
  }, {
    "url": "assets/css-2c363889.js",
    "revision": null
  }, {
    "url": "assets/css.worker-1670a170.js",
    "revision": null
  }, {
    "url": "assets/css.worker-1e6ffabe.js",
    "revision": null
  }, {
    "url": "assets/cssMode-004aa687.js",
    "revision": null
  }, {
    "url": "assets/cypher-c8c514a1.js",
    "revision": null
  }, {
    "url": "assets/dart-20b7370c.js",
    "revision": null
  }, {
    "url": "assets/dockerfile-3862148c.js",
    "revision": null
  }, {
    "url": "assets/ecl-4151d6b3.js",
    "revision": null
  }, {
    "url": "assets/edit-0bd70166.css",
    "revision": null
  }, {
    "url": "assets/edit-a5e92f01.js",
    "revision": null
  }, {
    "url": "assets/editor-1257780a.css",
    "revision": null
  }, {
    "url": "assets/editor.main-de72bfbf.js",
    "revision": null
  }, {
    "url": "assets/editor.worker-6edfeaa5.js",
    "revision": null
  }, {
    "url": "assets/editor.worker-cc8927cd.js",
    "revision": null
  }, {
    "url": "assets/elixir-93db603e.js",
    "revision": null
  }, {
    "url": "assets/flow9-dd227f65.js",
    "revision": null
  }, {
    "url": "assets/freemarker2-43fbc442.js",
    "revision": null
  }, {
    "url": "assets/fsharp-86578ff6.js",
    "revision": null
  }, {
    "url": "assets/go-7384bc86.js",
    "revision": null
  }, {
    "url": "assets/graphql-fa9affca.js",
    "revision": null
  }, {
    "url": "assets/handlebars-8b8fd3dd.js",
    "revision": null
  }, {
    "url": "assets/hcl-b8ae35e9.js",
    "revision": null
  }, {
    "url": "assets/Header-aac572d2.js",
    "revision": null
  }, {
    "url": "assets/html-a3b3b05d.js",
    "revision": null
  }, {
    "url": "assets/htmlMode-88b7eceb.js",
    "revision": null
  }, {
    "url": "assets/index-523227f6.css",
    "revision": null
  }, {
    "url": "assets/index-fc4851c9.js",
    "revision": null
  }, {
    "url": "assets/ini-890acc80.js",
    "revision": null
  }, {
    "url": "assets/italic-0386ec37.ttf",
    "revision": null
  }, {
    "url": "assets/italic-486752be.otf",
    "revision": null
  }, {
    "url": "assets/italic-b1302efa.ttf",
    "revision": null
  }, {
    "url": "assets/italic-e032d2fe.otf",
    "revision": null
  }, {
    "url": "assets/italic-ec5f267f.otf",
    "revision": null
  }, {
    "url": "assets/italic-fa084936.ttf",
    "revision": null
  }, {
    "url": "assets/java-049a60a4.js",
    "revision": null
  }, {
    "url": "assets/javascript-6ebadd17.js",
    "revision": null
  }, {
    "url": "assets/jsonMode-d9220b8d.js",
    "revision": null
  }, {
    "url": "assets/julia-191b0a82.js",
    "revision": null
  }, {
    "url": "assets/KaTeX_AMS-Regular-0cdd387c.woff2",
    "revision": null
  }, {
    "url": "assets/KaTeX_AMS-Regular-68534840.ttf",
    "revision": null
  }, {
    "url": "assets/KaTeX_Caligraphic-Bold-07d8e303.ttf",
    "revision": null
  }, {
    "url": "assets/KaTeX_Caligraphic-Bold-de7701e4.woff2",
    "revision": null
  }, {
    "url": "assets/KaTeX_Caligraphic-Regular-5d53e70a.woff2",
    "revision": null
  }, {
    "url": "assets/KaTeX_Caligraphic-Regular-ed0b7437.ttf",
    "revision": null
  }, {
    "url": "assets/KaTeX_Fraktur-Bold-74444efd.woff2",
    "revision": null
  }, {
    "url": "assets/KaTeX_Fraktur-Bold-9163df9c.ttf",
    "revision": null
  }, {
    "url": "assets/KaTeX_Fraktur-Regular-1e6f9579.ttf",
    "revision": null
  }, {
    "url": "assets/KaTeX_Fraktur-Regular-51814d27.woff2",
    "revision": null
  }, {
    "url": "assets/KaTeX_Main-Bold-0f60d1b8.woff2",
    "revision": null
  }, {
    "url": "assets/KaTeX_Main-Bold-138ac28d.ttf",
    "revision": null
  }, {
    "url": "assets/KaTeX_Main-BoldItalic-70ee1f64.ttf",
    "revision": null
  }, {
    "url": "assets/KaTeX_Main-BoldItalic-99cd42a3.woff2",
    "revision": null
  }, {
    "url": "assets/KaTeX_Main-Italic-0d85ae7c.ttf",
    "revision": null
  }, {
    "url": "assets/KaTeX_Main-Italic-97479ca6.woff2",
    "revision": null
  }, {
    "url": "assets/KaTeX_Main-Regular-c2342cd8.woff2",
    "revision": null
  }, {
    "url": "assets/KaTeX_Main-Regular-d0332f52.ttf",
    "revision": null
  }, {
    "url": "assets/KaTeX_Math-BoldItalic-dc47344d.woff2",
    "revision": null
  }, {
    "url": "assets/KaTeX_Math-BoldItalic-f9377ab0.ttf",
    "revision": null
  }, {
    "url": "assets/KaTeX_Math-Italic-08ce98e5.ttf",
    "revision": null
  }, {
    "url": "assets/KaTeX_Math-Italic-7af58c5e.woff2",
    "revision": null
  }, {
    "url": "assets/KaTeX_SansSerif-Bold-1ece03f7.ttf",
    "revision": null
  }, {
    "url": "assets/KaTeX_SansSerif-Bold-e99ae511.woff2",
    "revision": null
  }, {
    "url": "assets/KaTeX_SansSerif-Italic-00b26ac8.woff2",
    "revision": null
  }, {
    "url": "assets/KaTeX_SansSerif-Italic-3931dd81.ttf",
    "revision": null
  }, {
    "url": "assets/KaTeX_SansSerif-Regular-68e8c73e.woff2",
    "revision": null
  }, {
    "url": "assets/KaTeX_SansSerif-Regular-f36ea897.ttf",
    "revision": null
  }, {
    "url": "assets/KaTeX_Script-Regular-036d4e95.woff2",
    "revision": null
  }, {
    "url": "assets/KaTeX_Script-Regular-1c67f068.ttf",
    "revision": null
  }, {
    "url": "assets/KaTeX_Size1-Regular-6b47c401.woff2",
    "revision": null
  }, {
    "url": "assets/KaTeX_Size1-Regular-95b6d2f1.ttf",
    "revision": null
  }, {
    "url": "assets/KaTeX_Size2-Regular-a6b2099f.ttf",
    "revision": null
  }, {
    "url": "assets/KaTeX_Size2-Regular-d04c5421.woff2",
    "revision": null
  }, {
    "url": "assets/KaTeX_Size3-Regular-500e04d5.ttf",
    "revision": null
  }, {
    "url": "assets/KaTeX_Size4-Regular-a4af7d41.woff2",
    "revision": null
  }, {
    "url": "assets/KaTeX_Size4-Regular-c647367d.ttf",
    "revision": null
  }, {
    "url": "assets/KaTeX_Typewriter-Regular-71d517d6.woff2",
    "revision": null
  }, {
    "url": "assets/KaTeX_Typewriter-Regular-f01f3e87.ttf",
    "revision": null
  }, {
    "url": "assets/kotlin-e9db0c5a.js",
    "revision": null
  }, {
    "url": "assets/less-ba21524a.js",
    "revision": null
  }, {
    "url": "assets/lexon-9ea3fed0.js",
    "revision": null
  }, {
    "url": "assets/liquid-2d196c1f.js",
    "revision": null
  }, {
    "url": "assets/lua-33bafe35.js",
    "revision": null
  }, {
    "url": "assets/m3-1d7365f7.js",
    "revision": null
  }, {
    "url": "assets/markdown-eaf1630d.js",
    "revision": null
  }, {
    "url": "assets/mips-178efc05.js",
    "revision": null
  }, {
    "url": "assets/msdax-d7ff9ae6.js",
    "revision": null
  }, {
    "url": "assets/mysql-9dbe03dd.js",
    "revision": null
  }, {
    "url": "assets/objective-c-23977cd5.js",
    "revision": null
  }, {
    "url": "assets/pascal-347ec7c4.js",
    "revision": null
  }, {
    "url": "assets/pascaligo-fb1e63fa.js",
    "revision": null
  }, {
    "url": "assets/perl-2fa94092.js",
    "revision": null
  }, {
    "url": "assets/pgsql-1d172e37.js",
    "revision": null
  }, {
    "url": "assets/php-f4bc522d.js",
    "revision": null
  }, {
    "url": "assets/pla-d1f69c74.js",
    "revision": null
  }, {
    "url": "assets/postiats-8d97b332.js",
    "revision": null
  }, {
    "url": "assets/powerquery-e21c5cbe.js",
    "revision": null
  }, {
    "url": "assets/powershell-d0a72f46.js",
    "revision": null
  }, {
    "url": "assets/protobuf-b2d1908d.js",
    "revision": null
  }, {
    "url": "assets/pug-49898a0c.js",
    "revision": null
  }, {
    "url": "assets/python-14acc612.js",
    "revision": null
  }, {
    "url": "assets/qsharp-23f836f6.js",
    "revision": null
  }, {
    "url": "assets/r-0e40c708.js",
    "revision": null
  }, {
    "url": "assets/razor-b7c88f2d.js",
    "revision": null
  }, {
    "url": "assets/redis-12380799.js",
    "revision": null
  }, {
    "url": "assets/redshift-b3d29d59.js",
    "revision": null
  }, {
    "url": "assets/regular-08e2aee0.ttf",
    "revision": null
  }, {
    "url": "assets/regular-1d4d14f6.ttf",
    "revision": null
  }, {
    "url": "assets/regular-22156014.otf",
    "revision": null
  }, {
    "url": "assets/regular-8af34590.otf",
    "revision": null
  }, {
    "url": "assets/regular-9b670aff.otf",
    "revision": null
  }, {
    "url": "assets/regular-d51b96e5.ttf",
    "revision": null
  }, {
    "url": "assets/regular-e6173472.ttf",
    "revision": null
  }, {
    "url": "assets/restructuredtext-c082bb1f.js",
    "revision": null
  }, {
    "url": "assets/resumes-18e979de.css",
    "revision": null
  }, {
    "url": "assets/resumes-87351d66.js",
    "revision": null
  }, {
    "url": "assets/ruby-60abc7e3.js",
    "revision": null
  }, {
    "url": "assets/rust-5082ca98.js",
    "revision": null
  }, {
    "url": "assets/sb-aa16a8ad.js",
    "revision": null
  }, {
    "url": "assets/scala-5ccbc32b.js",
    "revision": null
  }, {
    "url": "assets/scheme-28488157.js",
    "revision": null
  }, {
    "url": "assets/scss-7398ee1f.js",
    "revision": null
  }, {
    "url": "assets/shell-98094e4a.js",
    "revision": null
  }, {
    "url": "assets/solidity-0e63250a.js",
    "revision": null
  }, {
    "url": "assets/sophia-e9f55b13.js",
    "revision": null
  }, {
    "url": "assets/sparql-a1a1d9ea.js",
    "revision": null
  }, {
    "url": "assets/sql-d85b307f.js",
    "revision": null
  }, {
    "url": "assets/st-db5fc7d7.js",
    "revision": null
  }, {
    "url": "assets/swift-8a14485e.js",
    "revision": null
  }, {
    "url": "assets/systemverilog-2a70b217.js",
    "revision": null
  }, {
    "url": "assets/tcl-7e0fc706.js",
    "revision": null
  }, {
    "url": "assets/toast-c71f958d.css",
    "revision": null
  }, {
    "url": "assets/toast-edbf53a3.js",
    "revision": null
  }, {
    "url": "assets/tsMode-184556be.js",
    "revision": null
  }, {
    "url": "assets/twig-19bf3459.js",
    "revision": null
  }, {
    "url": "assets/typescript-825aa692.js",
    "revision": null
  }, {
    "url": "assets/vb-0af9cc51.js",
    "revision": null
  }, {
    "url": "assets/w7-ac4be974.ttf",
    "revision": null
  }, {
    "url": "assets/w9-6f2841e9.ttf",
    "revision": null
  }, {
    "url": "assets/wgsl-1cc19b4d.js",
    "revision": null
  }, {
    "url": "assets/xml-7c16501c.js",
    "revision": null
  }, {
    "url": "assets/yaml-530792d5.js",
    "revision": null
  }, {
    "url": "edit.html",
    "revision": "1e92c212323d7df0151b935136b40d8a"
  }, {
    "url": "index.html",
    "revision": "6b75248c7d988269c630dc19fa52c462"
  }, {
    "url": "registerSW.js",
    "revision": "1872c500de691dce40960bb85481de07"
  }, {
    "url": "resumes.html",
    "revision": "fe8ac03e74b48ec214baefdf5b5fa2f4"
  }, {
    "url": "zh-cn/edit.html",
    "revision": "1e92c212323d7df0151b935136b40d8a"
  }, {
    "url": "zh-cn/index.html",
    "revision": "ffcbf2366cafb3f204bde3447bd291ec"
  }, {
    "url": "zh-cn/resumes.html",
    "revision": "426ab71510c3a2a6ffb5a70156aa6190"
  }, {
    "url": "pwa-192x192.png",
    "revision": "1690777f5c282eae0ce5f6f8bc57e926"
  }, {
    "url": "android-chrome-192x192.png",
    "revision": "1690777f5c282eae0ce5f6f8bc57e926"
  }, {
    "url": "android-chrome-512x512.png",
    "revision": "f904222ece214d82492d3d3d81714bcc"
  }, {
    "url": "apple-touch-icon.png",
    "revision": "9f9a9fc218726d2c30bfe580e79ea6de"
  }, {
    "url": "favicon-16x16.png",
    "revision": "8e423d886044394403a6542915ba5454"
  }, {
    "url": "favicon-32x32.png",
    "revision": "96e393047b280bd2e468186f1e4a7199"
  }, {
    "url": "favicon-dark.svg",
    "revision": "48b16a84dd3390b69a47e9f1ec7ca6f8"
  }, {
    "url": "favicon.svg",
    "revision": "48b16a84dd3390b69a47e9f1ec7ca6f8"
  }, {
    "url": "pwa-512x512.png",
    "revision": "f904222ece214d82492d3d3d81714bcc"
  }, {
    "url": "safari-pinned-tab.svg",
    "revision": "a3343345003f1a535c38ceb6a8baa4e9"
  }, {
    "url": "manifest.webmanifest",
    "revision": "e073c488d6c460ca6d8244da5293aab9"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));
  workbox.registerRoute(/^https:\/\/fonts.googleapis.com\/.*/i, new workbox.CacheFirst({
    "cacheName": "google-font-cache",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 10,
      maxAgeSeconds: 31536000
    }), new workbox.CacheableResponsePlugin({
      statuses: [0, 200]
    })]
  }), 'GET');

}));
