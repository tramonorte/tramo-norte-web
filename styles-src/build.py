import re,sys
s=open('styles-src/globals.src.css').read()
s=re.sub(r'(?<![\w#.])(-?\d+(?:\.\d+)?)u\b', lambda m: f"calc(var(--u) * {m.group(1)})", s)
open('app/globals.css','w').write(s)
