Gulp Boilerplate for generic CSS/HTML/JS development
=============
 gulp boilerplate.

Structure
=============
`/src/` - thats where you write code.

`/build/` - compiled code. Do not ever edit this folder.

What is happening
=============
We have two options for building html
1) `/src/index.html` and `/src/partials/` - for old school HTML.

2) We are using nunjucks here as a template engine. Basic templates are in `/src/templates/`

_Sass_ is compiled and postprocessed with Autoprefixer. We are using `gulp-sass` to compile sass.

`src/img/icons` are joined into sprite, which could be used in Sass like this:
```
.icon
    +s(png_name)
```

`src/icons/calendar.svg` are joined into icon sprite, and can be used in nunjucks mixin like this:
```
{{ mixins.icon("calendar") }}
```

We are also using simplest include system with `gulp-rigger`, works for javascrpt and html:
```
//= partials/partial.html
```

Naming
=============
We use BEM naming, meaning `.block` for independent block. `.block__element` for elements inside that block. And `.block_modification` for modification of the block.

It's noce to name layout blocks with `.l-*` prefixes. So you know it's layout.

States of the blocks use prefix `.is-*`. `.is-running`, `.is-hidden`, `.is-open`.

For javascript hooks we use prefix `.js-*`.

You are welcome
=============
Have fun using it, or borrowing some parts. In case of issues or ideas just create them on github. Or write us at <a href="mailto:html@coderiver.com.ua">html@coderiver.com.ua</a>.

gl & hf.
