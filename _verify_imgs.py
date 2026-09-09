# -*- coding: utf-8 -*-
"""Contact sheet of the 102 final card images, in card order, for spot check."""
import os, json
from PIL import Image, ImageDraw, ImageFont

IMGDIR = r"D:\eutoom独立站工作区\eutoom-site\assets\img"
OUT = r"D:\eutoom独立站工作区\eutoom-site\_extract\IMGS.jpg"
font = ImageFont.truetype("arial.ttf", 16)

m = json.load(open(os.path.join(IMGDIR, "manifest.json"), encoding="utf-8"))
cells = []
for slug, files in m.items():
    for fn in files:
        cells.append((slug, fn))

thumb = 160
pad = 10
cols = 12
rows_n = (len(cells) + cols - 1) // cols
sheet = Image.new("RGB", (cols * (thumb + pad) + pad, rows_n * (thumb + pad + 20) + pad), "#eee")
dr = ImageDraw.Draw(sheet)
for k, (slug, fn) in enumerate(cells):
    r, c = divmod(k, cols)
    x = pad + c * (thumb + pad)
    y = pad + r * (thumb + pad + 20)
    dr.text((x, y), slug + "/" + fn.split("/")[-1], fill="#000", font=font)
    im = Image.open(os.path.join(IMGDIR, fn.split("/")[-1])).convert("RGB")
    im.thumbnail((thumb, thumb))
    sheet.paste(im, (x, y + 20 + (thumb - im.height) // 2))
sheet.save(OUT, quality=85)
print("saved", OUT, sheet.size)
