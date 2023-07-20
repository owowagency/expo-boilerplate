<p align="center">
  <h1 align="center">SVG icons in Expo</h1>
</p>

<br>

## About

Simple `.svg` files aren't supported withing React Native, so to display SVG icon in our application we need to transform SVG files into a React Component.


## SVGR

To generate React Components from SVG files we like to use SVGR. SVGR is an universal tool to transform SVG into React components. SVGR takes a raw SVG and transforms it into a ready-to-use React component.
<br>
For example, lets take the chervon icon present in this application: `IcChevronRight.tsx`. It's SVG file look like the following:
```svg
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_4026_55735)">
        <path d="M9.99984 6L8.58984 7.41L13.1698 12L8.58984 16.59L9.99984 18L15.9998 12L9.99984 6Z" fill="#2C2C2E"/>
    </g>

    <defs>
        <clipPath id="clip0_4026_55735">
            <rect width="24" height="24" fill="white"/>
        </clipPath>
    </defs>
</svg>
```
After putting it in SVGR we get the following:
```tsx
const SvgComponent = (props: SvgProps) => (
    <Svg
        viewBox="0 0 20 20"
        fill="#000000"
        height={20}
        width={20}
        {...props}
    >
        <Path d="M9.99984 6L8.58984 7.41L13.1698 12L8.58984 16.59L9.99984 18L15.9998 12L9.99984 6Z" />
    </Svg>
);
```
Which is a perfectly workable React Component with available props to edit it's color and size.

## Using the playground

To generate your own Components quickly we like to use the [SVGR Playground](https://react-svgr.com/playground/?native=true&typescript=true). 
Simply copy and paste your preferred SVG file and grab to React Component for usage. 

Be sure to put the `ViewBox` back so that resizing is possible. Removing the `xmlns` might also be beneficial, just to keep the linter quiet.  