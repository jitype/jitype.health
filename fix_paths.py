import os
import re

base_dir = r"C:\Users\pamir\Desktop\CLAUDE\code-projects\titanium-h2"

html_files = []
for root, dirs, files in os.walk(base_dir):
    dirs[:] = [d for d in dirs if d not in ('.git',)]
    for f in files:
        if f.endswith('.html'):
            html_files.append(os.path.join(root, f))

for filepath in html_files:
    rel = os.path.relpath(filepath, base_dir)
    depth = len(rel.split(os.sep)) - 1
    prefix = "../" * depth

    if depth == 0:
        print(f"SKIP [0] {rel} (root, no change needed)")
        continue

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 移除 base tag（如果還有）
    content = re.sub(r'\s*<base href="[^"]*">\n?', '', content)

    # 對 src/href 加上 ../ 前綴
    # 條件：不是 http/https、不是 #錨點、不是 //、不是已經有 ../
    def add_prefix(m):
        attr = m.group(1)   # src 或 href
        path = m.group(2)
        # 跳過：外部連結、錨點、已有前綴
        if path.startswith(('http', '//', '#', '../', './')):
            return m.group(0)
        return f'{attr}="{prefix}{path}"'

    content = re.sub(r'(src|href)="([^"]+)"', add_prefix, content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"OK [{depth}] {rel}")

print(f"\nDone")
