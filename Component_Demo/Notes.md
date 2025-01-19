## Component
```bash
ng g c <component_name>   
---- create component related four files html, css, ts, spec.ts
```
## standalone : true 
@Component attributes then only angular recognise its a Angular Component

## Selectors
```bash
	Element -- (selector: 'counter-component') <counter-component></counter-component>
	Attribute -- (selector: '[counter-component]') <div counter-component></div>
	Pseudo -- (selector: '[counter-component]: not(p)') p tag never able to use the counter component as attribute
```
we can use multiple selectors by comma seperated
```bash
selector: 'counter-component', '[counter-component]', '[counter-component]:not(div)'
```