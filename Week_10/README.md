Study Notes

# 1. Layout based on the browser's properties. 

Using Flex layout as the example

## flex-direction:row ( row-reverse )
(X = Main Axis, Y = Cross Axis)

Main: width x left right
Cross: height y top bottom

## flex-direction:column (column-reverse)
(X = Cross Axis, Main Axis)

Main: height y top bottom
Cross: width x left right

## flex-direction: wrap-reverse

## what we did:
- Prepare for the next steps
- Set 10 variables 


# 2. Collecting elements for rows

## make rows
- Put elements into the current row based on the size of Main Axis
- Put the element into the same row if it has a no-wrap property 

# 3. Compute Main Axis
- Find all flex elements out
- Assign the rest of Main Axis size to all flex elements by percentage
- Set all element size on the main axis to 0 if the rest of the size is less than 0
- Compute each element's position on the main axis by justify-content if there is no flex element;

# 4. compute Cross Axis
- calculate the height of a row based on the highest element in the current row
- Find the position for an element with the height of the row

# 5. Render a single element
- Draw a graphic panel;
- Use images package (install by NPM);
- Draw a viewpoint on the row
- Relevant properties: background-color, border, background-image

# 6. Render a DOM tree
- Draw a DOM by a recursive function on the sub-elements;
- Ignore some nodes(elements)
- Ignore fond library
- Ignore the steps of compositing multiple layers

