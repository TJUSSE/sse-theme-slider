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
      <li><div class="slide" data-src="images/sse-slide-demo-large-1.png"></div></li>
      <li><div class="slide" data-src="images/sse-slide-demo-large-2.png"></div></li>
      <li><div class="slide" data-src="images/sse-slide-demo-large-3.png"></div></li>
      <li><div class="slide" data-src="images/sse-slide-demo-large-4.png"></div></li>
    </ul>
  </div>
```
(img tags must be placed as a child node of .sse-slider > ul > li)

## Dependencies

- font-awesome 4.4.0
- jquery 1.9.1
