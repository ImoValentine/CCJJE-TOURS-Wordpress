import{newSpecPage}from"@stencil/core/testing";import{ScLineItemTax}from"../sc-line-item-tax";describe("sc-line-item-tax",(()=>{it("renders",(async()=>{const e=await newSpecPage({components:[ScLineItemTax],html:"<sc-line-item-tax></sc-line-item-tax>"});expect(e.root).toMatchSnapshot()}))}));