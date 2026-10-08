"""Build the self-contained demo from the tracked template and photo cache."""
from pathlib import Path
import base64
import json

ROOT = Path(__file__).resolve().parents[1]
DEMO = ROOT / 'demo'
photos = sorted((DEMO / 'photos').glob('*.jpg'))
if not photos:
    raise SystemExit('No demo/photos/*.jpg files found.')
data = ['data:image/jpeg;base64,' + base64.b64encode(p.read_bytes()).decode() for p in photos]
source = (DEMO / 'source.html').read_text(encoding='utf-8')
if source.count('__PHOTO_DATA__') != 1:
    raise SystemExit('Expected exactly one photo-data placeholder.')
(DEMO / 'index.html').write_text(source.replace('__PHOTO_DATA__', json.dumps(data, separators=(',', ':'))), encoding='utf-8')
print(f'Built demo/index.html with {len(photos)} embedded photos.')
