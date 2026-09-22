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
        {"label": "🌐 View My Roblox Community","url":"https://www.roblox.com/share/g/427441976"},
        {"label": "💬 Join My Server", "url": "https://discord.gg/E8hJybaxZK"}
    ],
)

while True:
    time.sleep(15)