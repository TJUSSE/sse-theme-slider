# sse-theme-slider

SSE web theme slider repository.

## Usage

```bash
$ bower install
```

To add a slider, add a `<div class="sse-slider">`:
```html
  <div class="sse-slider" id="slider-demo">
    <ul>
      <li><img src="" data-src="images/testbg-1250x350-01.png"></li>
      <li><img src="" data-src="images/testbg-1250x350-02.png"></li>
      <li><img src="" data-src="images/testbg-1250x350-03.png"></li>
      <li><img src="" data-src="images/testbg-1250x350-04.png"></li>
    </ul>
  </div>
```
(img tags must be placed as a child node of .sse-slider > ul > li)

## Dependencies

- font-awesome 4.4.0
- jquery 1.9.1
