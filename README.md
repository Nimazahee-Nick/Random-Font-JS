![RFD_helloworld_1200x500](https://user-images.githubusercontent.com/53033607/166642195-d27cc2c9-0a7a-464d-9a1f-dc50b97cafb3.gif) <br>
# RandomFont.js
A repo of "random font shuffle" effect inspired by tv series [Loki](https://www.imdb.com/title/tt9140554/). <br>
Instead of creating the effect by static images, RandomFont changes the font by a pile of codes in real time. Each letter of the target word will be reset to a random font which was selected in advance and animated with a certain framerate.

## How to use
Add the script in your HTML... 

``` html
<script src="yourpath/./randomFont.js"></script>
```

Create a new tag (whatever the tag name you prefered) with class attribute named "randomFont"

``` html
<yourTag class="randomFont"> Hello World </yourTag>
```

The script with target "randomFont" tag by document.querrySelector. Which you don't need to worry about.

``` javascript
document.querySelector(".randomFont");
```

Basically, your only move should be creating the "randomFont" tag.

### Choose your fonts
I created a font list to store the selected fonts. These fonts were imported into CSS file already so in this .js code I only need to give it the font name.

``` javascript
const fontList = ['Libre Bodoni', 'Inconsolata', 'Helvetica','otherFont', '...'];
```

You can customize the font by [loading webfont into CSS file](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Web_fonts) then add the font name into this list. It's almost the same method as wirting a CSS file.

### Styling the letters
You can style the letters by selector "p" in CSS. <br>
The reason for this is that RandomFont breaks the target text into many single letters stored in tag "p". The properties "font-family", "margin: 0", "padding: 10px", "cursor: default" have already been set so please don't touch these properties especially "font-family". <br>
That's how far this code can do currently. Suggestions and comments for this are welcomed! <br>
💗💗💗

### For the futher update...
I will keep working on it to improve it. <br>
Hope this script can help you with your design.

## Licence
MIT
