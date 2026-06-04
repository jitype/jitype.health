# 極態官網工作規則

## 專案身分

- 這個 repo 是極態 JITYPE 官網。
- 目前優先使用的正式網址是 `https://jitype.github.io/jitype.health/`。
- GitHub repo 是 `https://github.com/jitype/jitype.health.git`。

## 圖片與浮水印規則

- 嚴禁用低品質方式去除浮水印，包括但不限於：
  - 模糊、塗抹、馬賽克、平均色塊覆蓋。
  - 複製附近背景硬貼到浮水印上。
  - 讓畫面出現明顯糊塊、接縫、變形、殘影或不自然補丁。
- 如果圖片有浮水印，先把問題圖片列出來，做局部放大檢查，不要直接批次修改正式素材。
- 正式官網圖片只能採用高品質處理路徑：
  - 找回乾淨原圖或重新輸出無浮水印版本。
  - 重新生成同構圖、同風格、無浮水印的新圖。
  - 使用專門的高品質去浮水印/修復工具，且必須經過放大檢查確認沒有明顯修補痕跡。
- 任何浮水印處理都必須保留可回退路徑：先備份原圖，或輸出成新檔名，確認品質後再替換正式引用。
- 若沒有可用的專門去浮水印 skill 或工具，先建立/安裝專門流程，再處理圖片；不要用臨時拼湊的修補法。

## 驗證要求

- 修改文章列表、圖片路徑或縮圖後，必須檢查：
  - HTML 仍為 UTF-8，中文沒有亂碼。
  - 所有文章連結存在。
  - 所有引用圖片存在。
  - 縮圖或正式圖片經過視覺檢查。
- 在推到 GitHub Pages 前，確認這次變更範圍，不要混入無關的草稿或原型檔。

## Image Generation Rules / 生圖規則

- 使用生圖時，如果畫面包含機器、設備、產品、氫氧機、氫氣/氧氣設備或任何類產品硬體，一定要使用使用者的實際產品圖片作為圖生圖或參考來源。
- 不准只用文字提示憑空生成機器或設備外觀。
- 任何機器相關生成圖要放進官網前，必須確認它是由實際產品參考生成，或改用實際產品圖片替代。
- When generating images that include a machine, device, product, hydrogen generator, oxygen/hydrogen equipment, or product-like hardware, use the user's actual product image as the image-to-image/reference source.
- Do not invent machine or device appearance from a text-only prompt.
- Before publishing or wiring a generated machine-related image into the website, verify that it was created from or replaced by an actual product reference image.
