import{ScDownloadsList}from"../sc-downloads-list";import{newSpecPage}from"@stencil/core/testing";describe("sc-purchase",(()=>{it("renders",(async()=>{const s=await newSpecPage({components:[ScDownloadsList],html:"<sc-downloads-list></sc-downloads-list>"});expect(s.root).toMatchSnapshot()}))}));