import { Component, Element, Prop  } from "@stencil/core";

@Component({
    tag: 'combo-box-item',
    shadow: false
})

export class ComboItem {
    @Element() el: HTMLDivElement;
    @Prop() selected: boolean = false;
    @Prop() value: string;
    @Prop() text: string;
}