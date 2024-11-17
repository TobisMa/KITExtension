# What is this?
An firefox tested extension to have a nicer design on moodle and a better experience.
Theoretically, this extension works in chromium based browser versions as well.

# changes (from the original sites)
## mtv.math.kit.edu
- open the point tables on website load (no need to do it manually now)

## ilias.studium.kit.edu
- having an e-mail menu item on the user profile
- the buttons in the "Abgabekasten" where you upload files are swapped so that "Abbrechen" is on the left

# how do I use this extension?
Since it is not on any marketplace you need to use firefox's debugging mode. See below:

### using normal firefox
1. go to `about:debugging#/runtime/this-firefoxabout:debugging`
1. Click on "Load temporary Add-on"
2. Select the `manifest.json` file of this extenion
3. Now explore moodle with the design which hopefully removes the design flaws like too large icons
4. NOTE: sadly, this is not kept after a firefox restart

### Using another firefox version ([dev](https://www.mozilla.org/de/firefox/all/#product-desktop-developer), [nightly](https://www.mozilla.org/de/firefox/all/#product-desktop-nightly))
  > More on that [here](https://www.mozilla.org/en-US/firefox/116.0.3/releasenotes/) about [dev (at the bottom)](https://www.mozilla.org/en-US/firefox/117.0beta/releasenotes/) or about [nightly](https://www.mozilla.org/en-US/firefox/118.0a1/releasenotes/)
I have used Firefox Dev for about 2 weeks now and I have not noticed any change in behaviour from the Release Version Firefox. So, in my opinion, Firefox Dev is an alternative for keeping this extension working
1. Either take the released xpi file or convert the files `manifest.json`, `prettyMoodle.css` and `sidebar.js` to an xpi archive.
    - Run "./generateExtension.sh <version>" from the repo's root
    - Convert to a zip file and rename it to `.xpi`
    - Use web-ext (`npm i -g web-ext`) and run `web-ext build` within this project folder. The rename it to `.xpi`
      Use `web-ext build --overwrite-dest --filename prettymoodle.xpi --artifacts-dir .` to create an xpi file in the source directory for each change
2. Go to `about:config` and set `xpinstall.signatures.required` to `false`. Otherwise those versions will reject the extension (since it is unsigned)
3. Go to `about:addons`
4. Click on the settings icon on the right and select "Install from file"
5. Select the xpi file
6. Click in the pop-up on "Add"
7. NOTE: this will give a warning because the extension is not officially signed by firefox but it works regardless. Restarts of firefox load the extension as well.
