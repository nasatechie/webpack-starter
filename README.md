Angular + OCLazyLoad + WebPack example
===================================

The purpose of this repository is to show a way of lazy loading Angular modules using OCLazyLoad + WebPack.

The application has only 2 states. The first one (called `non-lazy`)  is loaded in the main bundle. The second one (`lazy`) is bundled in a separate file and is loaded on-demand when the user accesses to it.

How to use
----------------

Requirements:
 - node >= v5.10.1
 - gulp

Clone this repo, run `npm install` and run `gulp serve` to start WebPack server.

-------------------
