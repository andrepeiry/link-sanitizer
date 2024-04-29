# Link Sanitizer
## Description
Some shared URLs are poisoned with a source identifiers, allowing the owner of the site to create links between people.
If you are a bit conscious about your privacy, you may already remove them manually. 
This plugin is here to simplify and automate this "URL cropping".

**What a Source Identifier (*SI*) ?**
Clicking on [https://youtu.be/qOi4Ao40IYA?si=dummySI](https://www.youtube.com/watch?v=qOi4Ao40IYA) would indicate to YouTube that you came from a *SI* called
`dummySI`, but in reality, it will look more like a sequence of alphanumerical characters.

### In general
The extension will remove any `utm` type of tracker, as well as any `si` ones.

#### YouTube
This extensions should remove a *SI* form the URL, as well as change `youtu.be` into `www.youtube.com`. (Untested). 
Inside the site, the extension will remove automatically the *SI* from the "Share" function (Unimplemented).

#### Instagram
This extensions should remove a *SI* from the URL (Untested).

#### Spotify
This extensions should remove a *SI* from the URL (Untested).
