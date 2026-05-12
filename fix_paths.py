import os
import re

base_dir = r"C:\Users\pamir\Desktop\CLAUDE\code-projects\titanium-h2"

html_files = []
for root, dirs, files in os.walk(base_dir):
    dirs[:] = [d for d in dirs if d not in ('.git',)]
    for f in files:
        if f.endswith('.html') or f.endswith('.css'):
            html_files.append(os.path.join(root, f))

for filepath in html_files:
    rel = os.path.relpath(filepath, base_dir)
    depth = len(rel.split(os.sep)) - 1
    prefix = "../" * depth

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content

    # 修正 CSS url('/...') → url('[prefix]...')
    def fix_css_url(m):
        path = m.group(1)
        if path.startswith(('http', '//', '#')):
            return m.group(0)
        # 移除開頭的 /
        path = path.lstrip('/')
        return f"url('{prefix}{path}')"

    content = re.sub(r"url\('(/[^']+)'\)", fix_css_url, content)
    content = re.sub(r'url\("(/[^"]+)"\)', lambda m: f'url("{prefix}{m.group(1).lstrip("/")}")', content)

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"OK [{depth}] {rel}")
    else:
        print(f"-- [{depth}] {rel} (no change)")

print(f"\nDone")
