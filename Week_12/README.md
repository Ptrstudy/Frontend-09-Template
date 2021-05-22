Study Notes

# Box

- Source code: Tag
- Syntax: Element
- Appearance: Box

```
HTML code includes opening tags, closing tags and self-closing tags.
A pair of tags(opening & closing) represents an element.
Elements and other types of nodes are stored in Dom Tree.
Elements are the target selected by CSS selectors.
Multiple boxes are generated when performing layouts for the selected elements by CSS selectors.
Boxes are the basic unit of rendering and performing layouts.
```

## Box model
- Padding
- Margin
- Border
- content-box: width
- border-box: width
- border
- box-sizing
  - content-box
  - border-box

# Normal flow

## Layout types:
- Normal flow
- Flex
- Free layout
- Grid

## In CSS, only two types of things are in Layout:
- Box
- Text 

## how modern human beings write
- From left to right
- Text aligned in one line
- Turn to the next line if the current is full 

## Normal flow layout
- Collect boxes into a row
- Calculate layout for boxes in a row
- Calculate layout for rows

## IFC (in-line level formatting context)
- From left to right
- in a line
- affected by write model

## BFC(Block level formatting context)
- From top to bottom 

# IFC
## Baseline
- The baseline of an inline-box depends on the text in itself.
  - Using vertical-align is recommended (rather than the base-line-align)

## Text 
- Refers to Glyph Metrics

## Line model
- line-top
- text-top
- base-line
- text-bottom
- line-bottom

# BFC

## Float & clear (old fashion, it's replaced by flex-box)
- flat: left
- flat: right
- flact impacts its line and all lines in its height range
- clear can get a clear space for the block
- using clear to break a line(<br > does't work with float)

## Margin collapse
 - When two boxes being together in BFC(ONLY)
 - Only one margin will be in between these two boxes

 # BFC merging

 ## block
 - Block Container: BFC inside
 - If a box can contain normal flow, BFC will be inside. THINKING: which boxes have this ablility.
 - Block-level box: BFC outside
 - Block Box = Block Container + Block-level box: BFC in both inside & outside

 ## Block Container
- block
- inline-block
- table-cell
- flex item
- grid cell
- table-caption

## Block-level Box
### Block level
- display: block
- display: flex
- display: table
- display: grid
- display: run-in
- ...

### Inline level
- display: inline-block
- display: inline-flex
- display: inline-table
- display: inline-grid
- display: run-in
- .....

## Establish BFC
- floats
- absolutely positioned elements
- block containers (such as inline-blocks, table-cells, and table-captions) that do not block boxes,
  - flex items
  - grid cell
  - ...
- and block boxes with 'overflow' other than 'visible'

## BFC merging
- block box && overflow:visible 
  - BFC merging & float
  - BFC merging & margin collapse

# Flex (re-visit)

- collect elements into a row
- calculate the layout on main axis for boxes
- calculate the layout on cross axis for boxes

# Animation & transition
- @keyframes: to declare
```
@keyframes mykf
{
    from {backgroud:red;}
    to {background:yellow;}
}
```
- animation: to use
```
div
{
    animation:mykf 5s infinite;
}
```

## Animation
- animation-name
- animation-duration
- animation-timing-function
- animation-delay
- animation-iteration-count
- animation-direction

```
@keyframes mykf {
    0% {top: 0; transition: top ease}
    50% {top:30px; transition: top ease-in}
    75% {top: 10px; transition: top ease-out}
    100% {top: 0; transition: top linear}
}
```

## Transition
- transition-property
- transition-duration
- transition-time-function (Refers to cubic-bezier.com)
- transition-delay


# colour & rendering

## CMYK & RGB
- CMYK refers to the four ink plates used in some colour printing: cyan, magenta, yellow, and key (black)
- https://en.wikipedia.org/wiki/CMYK_color_model

## HSL & HSV

- HSL (Hue, Saturation, Lightness): hsl(0, 95%, 45%), see https://www.w3schools.com/colors/colors_hsl.asp
- HSV (Hue, Saturation, Value)

# Drawing

## Geometric shape
- Border
- Box-shadow
- Border-radius

## Text
- Font
- Text-decoration

## bitmap
- Background-image

## Tips
- data uri+svg
- data:image/svg+xml, <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg"><ellipse cs="300" cy="150" rx="200" ry="80" style="fill:rgb(200,100,50);stroke:rgb(0,0,100);stroke-width:2"/></svg>
