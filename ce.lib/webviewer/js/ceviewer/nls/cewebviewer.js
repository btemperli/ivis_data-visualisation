//>>built
define({root:{common:{cancel:"Cancel",ok:"OK",details:"Details",more:"More",arcgisOnline:"ArcGIS Online",continueConfirm:"Continue",rememberChoice:"Don't ask again",learnMore:"Learn more",close:"Close"},viewerPage:{title:"CityEngine Web Viewer",noWebSceneMsg:"No webscene specified.",useUrlParameter:" Use url parameter '3dWebScene' to specify ArcGIS online item id or local 3ws file or drag and drop a .3ws file here",ceWebViewerHelp:"CityEngine Web Viewer Help",ceWebViewerTroubleshooting:"CityEngine Web Viewer Troubleshooting",
contactUs:"Contact Us",bypassWebglCheck:"Bypassing WebGL detection check",sceneReadyTime:"Web Scene Ready (${seconds} seconds)",webviewerVersion:"CE Web Viewer version",loadingWsId:"Loading webscene id",loadingSceneFile:"Loading scene file",ieMsg:"Your version of Internet Explorer does not have WebGL support. You might want to upgrade or try a different browser.",webglMinVersion:"The WebGL version of your browser is below the minimum required by CityEngine WebViewer. You might want to upgrade or try a different browser.",
experimentalWebgl:"The WebGL version of your browser is below the minimum recommended by CityEngine WebViewer and some features might not work.",featureNotSupported:"This feature is not supported by your browser.",safariMsg1:"For Safari on Mac OSX, WebGL needs to be enabled in the browser.",safariMsg2:"In File \x26rarr; Preferences \x26rarr; Advanced, check \x3cem\x3eShow Develop menu in menu bar\x3c/em\x3e.",safariMsg3:"In the newly enabled Develop menu, enable WebGL.",troubleMsg1:"Find out more about your browser's WebGL compatibility and other compatible browsers at",
troubleMsg2:'Troubleshoot problems at \x3ca href\x3d"http://get.webgl.org/troubleshooting" target\x3d"_blank"\x3eget.webgl.org/troubleshooting\x3c/a\x3e',badBrowser:"Your browser does not seem to support WebGL.",badBrowserMinVer:"Your browser does not seem to support WebGL 1.0.",badHardware:"Your hardware does not seem to support WebGL."},ui:{unnamedScene:"Unnamed Scene",sceneTitle:"${sceneName}  (CityEngine Web Scene)",about3d:"Details",help:"Help",webSceneViewer:"3D Web Scene Viewer",showLoadingDetails:"Show loading details",
detailsNoSummary:"No summary",detailsDesc:"Description",detailsNoDesc:"No description",detailsMoreDetails:"More details...",author:"Author",lastModified:"Last modified",detailsSize:"${filesize} MB",size:"Size",layersPaneTitle:"Layers",exitComparisonMode:"Exit Comparison Mode",searchPaneTitle:"Search",resultsFound:" results found",searchHint:"Find objects, attributes and more...",searchIncorrect:"Incorrect search term",addtnlHiddenLyrs:"Additional results in hidden layers:",resultInLayer:"in layer ",
showLayer:"Show layer",nameIs:"name is ",materialIs:"Material is ",keyValueIs:"${key} is ${value}",resultIn:" in ",settingsPaneTitle:"Settings",sunLight:"Sunlight",dragSunSliderHint:"Drag Slider",dateSpring:"Spring (March 20)",dateSummer:"Summer (June 21)",dateFall:"Fall (September 22)",dateWinter:"Winter (December 21)",sunrise:"sunrise",sunset:"sunset",shadowing:"Shadowing",directShadow:"Direct Shadow (cast by sunlight)",diffuseShadow:"Diffuse Shadows (ambient occlusion)",sharePaneTitle:"Share",
sharePaneDisabledTitle:"Sharing deactivated",sharePaneDisabledInfo:"It looks like WebScene is running in a \x3ca href\x3d'http://en.wikipedia.org/wiki/Private_network' target\x3d'_blank'\x3eprivate network\x3c/a\x3e (private ip adress). People outside your network will most likely not be able to access this WebScene. Publish your WebScene app to a public server to share the link with others.",sharePaneDisabledAction:"I know what I'm doing. Activate Share Pane.",shareNotPublicWarn:"This Web Scene is not shared with the public.",
shareNotPublicAnyway:"Share anyway",shareNotPublicHint:"To enable share buttons, set share settings of Web Scene item to public and refresh.",shareNotPublicEditItem:"Edit Web Scene Item...",sharePaneDisabledByOrg:"This Web Scene can not be shared because this feature has been disabled by your organization.",shortUrl:"Short URL",longUrl:"Long URL",getUrl:"getting url...",shareSelectMethod:"Select one of the methods below to share your WebScene",shareLinkToWebScene:"Link to this WebScene view",shareEmbed:"Embed this WebScene",
shareFacebook:"Share on Facebook",shareTwitter:"Post on Twitter",shareEmail:"Send E-Mail",shareLink:"Share Link",shareFacebookTxt1:"Explore ${sceneName} (CityEngine Web Scene)",shareFacebookTxt2:"Create and share your 3D Web Scenes with CityEngine. Visit esri.com/cityengine to download free 30-day trial.",shareTwitterTxt:"Explore '${sceneName}'  in 3D with your browser:\n",shareEmailSubject:"${sceneName}  in 3D (CityEngine Web Scene)",shareEmailTxt1:"Have a look at this CityEngine Web Scene:",shareEmailTxt2:"You can create and share your own 3D Web Scenes with Esri CityEngine. Visit http://www.esri.com/cityengine to download free, fully-functional 30-day trial.",
this3dScene:"this 3D City Scene",infoPaneTitle:"Information",selectObj3D:"Select object in 3D Scene to display information",nameOfSelObject:"Name of selected object",infoProperties:"Properties",infoAttributes:"Attributes",infoReports:"Reports",statsStatistics:"Statistics",statsField:"Field",statsValue:"Value",statsKey:"Key",statsSum:"Sum",statsAvg:"Average",statsCount:"Count",statsPercentage:"Percentage",thumbnailUploadSuccess:"New thumbnail saved",thumbnailUploadFail:"Could not save thumbnail",embedInWebsite:"Embed in Website",
embedLarge:"Large (full user interface)",embedSmall:"Small (reduced user interface)",embedCustom:"Custom-size",width:"width",height:"height",embedMsg:"Embedded Web Viewer with ${reducedOrFull} UI",embedReduced:"reduced",embedFull:"full",enableAutoplay:"Enable autoplay",commentsTitle:"Comments",commentsByAuthor:"by Author",commentsByOthers:"by Others",comment:"Comment",commentHint:"to publish a comment",commentFail:"Could not send comment",commentAdd:"Add comment...",commentPublish:"Publish",commentsShowAll:"Show all comments",
commentsShowAuthor:"Show comments by author only",commentsShowOthers:"Show comments by others",commentsDisabledByOrgMsg:"Commenting has been disabled by the organization.",commentsPortalOnlyMsg:"Comments are only available for WebScenes hosted on ArcGIS Online / Portal for ArcGIS.",geoComment:"GeoComment",showMore:"Show More",ratingThanks:"Thanks for rating this item!",ratingFail:"Could not update rating",ratingOwnMsg:"You cannot rate your own items",ratings:"ratings",ratingHint:"to rate this item",
views:"views",reducedUIexploreFull:"Explore in full viewer",screenshot:"Screenshot",viewportSize:"Viewport size"},signInOut:{signIn:"Sign In",signOut:"Sign Out",signOutDiffUser:"to load web scene as a different user",signOutNonPublicWarning:"You are viewing a non-public web scene. Signing out will leave this page."},loader3ws:{wsFileInvalid:"Invalid .3ws file: ",browse:"browse",wsDragHere:"and select a local .3ws file or drag one here",dataLoadedTime:"Data loaded in ${seconds} seconds",initializing:"Initializing...",
detected3wsVersion:"Web Scene version",unsupported3wsVersion:"unsupported Web Scene (3ws) version",wsDataInvalid:"Invalid Web Scene (3ws) data",downloading:"Downloading",reading:"Reading",unableToLoadData:"Unable to load data",fallbackLoaderMsg:"Fallback to custom unzip on arraybuffer and custom streamParser",unableToLoadURL:"Unable to load URL",errorStatus:" Error status ${status} on ${url}",reqUnzip:"Requested unzipped data, ",reqGzip:"Requested gzipped data, ",gotUnzip:"got unzipped data",gotGzip:"got gzipped data",
gzipInvalid:"Invalid gzip file: ",customUnzipAndStream:"Using custom unzip and streamparser on arraybuffer",unpackingDone:"Unpacking done",unpackerEmpty:"Unpacker returned empty data. Browser might have run out of memory.",nativeCantProcess:"Native parser can't process unzipped data with response type arrayBuffer ",streamParseOnUnzippedAB:"Using streamparser on unzipped arraybuffer",streamPOnlyOnAB:"StreamParser only supported on responseType arraybuffer ",zipOnlyAB:"Zipped data only supported with responseType arraybuffer ",
xhrEmpty:"Returned data is empty. Browser might have run out of memory.",noGzipEnc:"Server does not return gzip encoding header"}},ar:1,cs:1,da:1,de:1,es:1,el:1,et:1,fi:1,fr:1,he:1,it:1,ja:1,ko:1,lt:1,lv:1,nl:1,nb:1,pl:1,"pt-br":1,"pt-pt":1,ro:1,ru:1,sv:1,th:1,tr:1,vi:1,"zh-cn":1});