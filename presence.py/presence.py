from pypresence import Presence
from pypresence.types import StatusDisplayType
import time

CLIENT_ID = "1548388190203945082"

rpc = Presence(CLIENT_ID)
rpc.connect()

rpc.update(
    details="Playing with Coding ^^",
    state="DM if you need Anything.",
    start=time.time() -(100000*60*60),
 buttons=[
        {"label": "About Me!!","url":"https://herjox0424-blip.github.io/Jox/"},
    ],
)

while True:
    time.sleep(15)