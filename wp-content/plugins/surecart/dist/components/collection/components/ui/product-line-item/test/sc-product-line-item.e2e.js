import{newE2EPage}from"@stencil/core/testing";describe("sc-product-line-item",(()=>{it("renders",(async()=>{const e=await newE2EPage();await e.setContent("<sc-product-line-item></sc-product-line-item>");const t=await e.find("sc-product-line-item");expect(t).toHaveClass("hydrated")}))}));