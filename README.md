
![socket](https://github.com/danzen/zim-socket/assets/380281/c7088f00-8b85-40b1-b37e-d8215cd9adf7)

<p>ZIM Socket is a helper module for the ZIM JavaScript Canvas Framework that works with Socket.IO.</p>

<p>ZIM Socket uses a simple yet powerful multiuser paradigm:
  
```JavaScript
// you send your property values
{x:10, y:30}
```
```JavaScript
// you receive objects of other people's values
{id:{x:20, y:40}, id2:{x:60, y:50}}
```

Using this technique, we no longer have to code on the server. ZIM Server handles all.</p>

<h2>CDN</h2>
<p>Usually we use ES Modules to bring in ZIM and if we want Sockets then use we the code below - see the starting template at the top of the https://zimjs.com/code page.
</p>

```JavaScript
import zim from "https://zimjs.org/cdn/016/zim_socket";
```

<h2>NPM</h2>
<p>This repository holds the NPM ZIM socket package so you can install from <a href=https://www.npmjs.com/package/@zimjs/socket target=node>@zimjs/socket</a> on NPM.  It includes the socket.io-client package as a dependency.  The <a href=https://www.npmjs.com/package/zimjs target=node>ZIM&nbsp;package</a> must be installed to work.</p>

```JavaScript
import zim from "zimjs"
import { Socket } from "@zimjs/socket"
```
<h2>SERVER</h2>
You can use our servers (like all the examples) for development.  BUT... if you are running your app with lots of traffic, then please host your own version of ZIM Socket Server.  
<a href=https://zimjs.com/socket/server.zip>Dowload&nbsp;the&nbsp;ZIP</a> or get from NPM <a href=https://www.npmjs.com/package/@zimjs/socket-server target=bb>@zimjs/socket-server</a>.

<h2>SOCKET EXAMPLES</h2>
<li><a href=https://zimjs.com/patternoids/ target="b">ZIM Socket with Socket.IO - PATERNOIDS</a></li>
<li><a href=https://zimjs.com/avatar.html target="b">ZIM Socket with Socket.IO - AVATAR</a></li>
<li><a href=https://zimjs.com/egg.html target="b3">ZIM Socket with Socket.IO - EGG</a></li>
<li><a href=https://creativityframework.com/exercise01m.html target="b4">ZIM Socket with Socket.IO - DIAGRAM</a></li>
<li><a href=https://zimjs.com/cat/gallery.html target="b5">ZIM Socket with Socket.IO - GALLERY</a></li>
<li><a href=https://zimjs.com/socket/turns.html target="b5">ZIM Socket with Socket.IO - TURNS</a></li>
<li><a href=https://zimjs.com/remote.html target="b5">ZIM Socket with Socket.IO - REMOTE</a></li>
<li><a href=https://zimjs.com/control.html target="b">ZIM Socket with Socket.IO - CONTROL</a></li>
<li><a href=https://zimjs.com/chat.html target="b2">ZIM Socket with Socket.IO - CHAT</a> - HTML only</li>

<h2>VIDEOS</h2>
<li><a href=https://www.youtube.com/watch?v=fTshMvjsQm8 target="fm2">ZIM Explore 81 - Multiuser ZIM in VR</a></li>
<li><a href=https://www.youtube.com/watch?v=pijWLe2bm3c target="fm3">ZIM Explore 53 - Multiuser Patternoids</a></li>
<li><a href=https://www.youtube.com/watch?v=WJAyHITQsds target="fm">ZIM Bubbling 133 - ZIM Sockets</a></li>
<li><a href=https://www.youtube.com/watch?v=UREtBacpyJw target="fm">ZIM Explore! 30. Grava (1) - Multiuser App</a></li>
<li><a href=https://www.youtube.com/watch?v=2hdXR8u34Wo target="fm">ZIM Explore! 30. Grava (2) - Multiuser App</a></li>
<li><a href=https://www.youtube.com/watch?v=fTshMvjsQm8 target="fm2">ZIM Explore 4 - Sockets</a></li>

<h2>ZIM</h2>
<p>See the ZIM repository at https://github.com/danzen/zimjs for information on ZIM and open source license, etc.</p>


