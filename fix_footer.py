# -*- coding: utf-8 -*-
import os, io, re, time

root = r"D:\eutoom独立站工作区\eutoom-site"
v = str(int(time.time()))
css_path = os.path.join(root, "assets", "styles.css")
css = io.open(css_path, encoding="utf-8").read()

# I will use a simpler regex to replace the footer section
old_footer = r"""\.footer \{ background: var\(--primary\); color: var\(--text-gray\); padding: 80px 0 30px; border-top: 1px solid rgba\(255,255,255,0\.1\); \}
  \.footer__grid \{ display: grid; grid-template-columns: 2fr 1fr 1fr 1\.5fr; gap: 60px; margin-bottom: 60px; \}
  \.footer \.logo \{ color: var\(--text-light\); \}
  \.footer h5 \{ font-family: var\(--font-display\); font-size: 18px; color: var\(--text-light\); text-transform: uppercase; margin-bottom: 24px; letter-spacing: 1px; \}
  \.footer ul li \{ margin-bottom: 12px; \}
  \.footer ul li a \{ transition: color 0\.3s; \}
  \.footer ul li a:hover \{ color: var\(--accent\); \}
  \.footer__bottom \{ border-top: 1px solid rgba\(255,255,255,0\.1\); padding-top: 30px; display: flex; justify-content: space-between; font-size: 13px; \}"""

new_footer = r""".footer { background: var(--bg-gray); color: var(--text-dark); padding: 80px 0 30px; border-top: 1px solid rgba(0,0,0,0.05); }
  .footer__grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1.5fr; gap: 60px; margin-bottom: 60px; }
  .footer .logo { color: var(--primary); }
  .footer h5 { font-family: var(--font-display); font-size: 18px; color: var(--primary); font-weight: 700; text-transform: uppercase; margin-bottom: 24px; letter-spacing: 1px; }
  .footer ul li { margin-bottom: 12px; }
  .footer ul li a { color: var(--text-gray); transition: color 0.3s; font-weight: 500; }
  .footer ul li a:hover { color: var(--accent); }
  .footer p { color: var(--text-gray); font-weight: 500; }
  .footer__bottom { border-top: 1px solid rgba(0,0,0,0.05); padding-top: 30px; display: flex; justify-content: space-between; font-size: 13px; color: var(--text-gray); font-weight: 500; }"""

# If the exact regex doesn't match because of spacing, let's just replace blocks one by one
css = re.sub(r'\.footer \{ background: var\(--primary\); color: var\(--text-gray\);[^}]+\}', 
             r'.footer { background: var(--bg-gray); color: var(--text-dark); padding: 80px 0 30px; border-top: 1px solid rgba(0,0,0,0.05); }', css)

css = re.sub(r'\.footer h5 \{[^}]+\}', 
             r'.footer h5 { font-family: var(--font-display); font-size: 18px; color: var(--primary); font-weight: 700; text-transform: uppercase; margin-bottom: 24px; letter-spacing: 1px; }', css)

css = re.sub(r'\.footer ul li a \{ transition: color 0\.3s; \}', 
             r'.footer ul li a { color: var(--text-gray); transition: color 0.3s; font-weight: 500; }', css)

css = re.sub(r'\.footer__bottom \{[^}]+\}', 
             r'.footer__bottom { border-top: 1px solid rgba(0,0,0,0.05); padding-top: 30px; display: flex; justify-content: space-between; font-size: 13px; color: var(--text-gray); font-weight: 500; }', css)

# Add .footer p if not exists
if '.footer p {' not in css:
    css = css.replace('.footer__bottom', '.footer p { color: var(--text-gray); font-weight: 500; }\n  .footer__bottom')

io.open(css_path, "w", encoding="utf-8").write(css)

files = [f for f in os.listdir(root) if f.endswith(".html")]
for file in files:
    filepath = os.path.join(root, file)
    html = io.open(filepath, encoding="utf-8").read()
    new_html = re.sub(r'assets/styles\.css\?v=\d+', f'assets/styles.css?v={v}', html)
    if new_html != html:
        io.open(filepath, "w", encoding="utf-8").write(new_html)

print("Footer CSS updated.")
