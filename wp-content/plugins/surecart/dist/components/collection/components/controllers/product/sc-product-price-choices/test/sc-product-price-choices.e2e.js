import{newE2EPage}from"@stencil/core/testing";describe("sc-product-price-choices",(()=>{it("renders",(async()=>{const c=await newE2EPage();await c.setContent("<sc-product-price-choices></sc-product-price-choices>");const e=await c.find("sc-product-price-choices");expect(e).toHaveClass("hydrated")}))}));