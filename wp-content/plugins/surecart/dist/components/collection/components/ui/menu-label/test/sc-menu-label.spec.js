import{newSpecPage}from"@stencil/core/testing";import{ScMenuLabel}from"../sc-menu-label";describe("sc-menu-label",(()=>{it("renders",(async()=>{const e=await newSpecPage({components:[ScMenuLabel],html:"<sc-menu-label></sc-menu-label>"});expect(e.root).toMatchSnapshot()}))}));