# VF-Verkefni2 - Andri Fannar  
**1. Útskýrðu stuttlega eftirfarandi hugtök og hlutverk þeirra:**  
**GPU**  
Graphics Processing Unit/Skjákort er tölvuíhlutur sem hannaður er til að vinna með og breyta minni til að hraða sköpun mynda/ramma sem birtast á skjánum hjá manni.  
**Pixels**  
Stytting á orðinu "Picture Element". Það sem við sjáum á tölvuskjá eru í raun milljónir pixla þjappaðir saman. Einn pixel í dag er það lítill að hann sést ekki með nöktu auganu en ef maður stillir upplausnina nógu lága gæti maður séð þá. Tölvuskjáir koma í mismunandi upplausnum, það besta í dag er 4K,  3840 x 2160 pixlar. Hver og einn pixell getur bara verið einn litur í einu en þar sem þeir eru svo þjappaðir sjást skilin ekki.  
**Frame buffer, raster-scan and refresh rate**  
(Mjög erfitt að koma mörgu hérna yfir í íslensku..)  
Frame buffer er hluti af vinnsluminni sem inniheldur bitmap sem keyrir video display. Skjákort innihalda framebuffera í kjörnum kortanna.  Raster scan er rectangular patter of image capture and reconstruction í sjónvörpum. Þetta mynstur er notað í flestum bitmap kerfum nútíma skjákorta.  
Refresh rate segir til um hversu oft display hardware uppfærir sig á sekúndu. Refresh rate er gefið upp í riðum eða hertz. Skjáir eru ýmist 60Hz (uppfærir sig 60 sinnum á sekúndu) og alveg upp í 240Hz.  
**WebGL og OpenGL**  
WebGL (Web Graphics Library) er JavaScript API til að rendera interactive 2D og 3D Grafík á vefnum. WebGL starfar innan canvas og er hægt að blanda við HTML element.  
OpenGL er líka API sem er notað til að rendera 2D og 3D grafík en ef ég skil þetta rétt er OpenGL ekki fyrir vefinn eins og WebGL heldur desktop based API.  
**2. Útskýrðu ítarlega og tæknilega (án kóða) hvernig rendering pipeline virkar í WebGL.
Notaðu skýringamynd þér til stuðnings**  
Rendering Pipeline er náið samspil kóða, graphics API/íhluta og Shader microcode til að rendera grafíkina á skjáinn.  
**a) Setting up the scene (kóði/API/Hardware)**  
Loada inn models og setja upp sjónarhorn sem maður vill rendera senuna frá og setja upp lýsingu.  
**b) Visibility determination (kóði)**  
Setja upp hvaða hlutir/hlutar eru sýnilegir. Mikilvægt fyrir stærri application en oft sleppt í litlum þar sem aðeins er verið að rendera einn hlut.  
**c) Setting object-level-rendering states (kóði/API/Hardware)**  
Eigindi hluta sem eru mikilvæg hvað varðar rendering eru stillt, svo sem litur og hreyfing.  
**d) Geometry generation/delivery (kóði/API/Hardware)**  
Í þessu skrefi sendir maður formin (þríhyrningar) til API-sins. Búa til buffer sem inniheldur array með formupplýsingum. Festa bufferinn við vertex shader.  
**e) Vertex-level operations (shader microcode/API/Hardware)**  
Þegar allt er upp sett og formin eru send til API-sins byrja vertex-level operations. Vertex shaderinn sem vinnur á GPU-inu sér um þessar aðgerðir og segir hann til um hvað á að teikna á skjáinn.  
**f) Clipping, backface culling, projection and rasterization (API/Hardware)**  
Þessi skref eru öll framkvæmd sjálfkrafa af API-inu. Ég á mjög erfitt með að skilja mikið af því sem er í gangi hérna...  
**g) Pixel Shading (shader microcode/API/Hardware)**  
Hverjum Pixel er gefinn litur.  
**h) Blending and output (API/Hardware)**  
Í enda pipeline-sins höfum við litar, opacity og dýptar value fyrir hvern pixel. Frame bufferinn er update-aður með lita value-inu fyrir pixlana.  
**3. Hvað er WebGL Shaders og Graphics Library Shader Language (GLSL) og hvert er
þeirra hlutverk?**  
WebGL þarf á tveimur shaders að halda til að teikna eitthvað á skjáinn: Vertex shader og fragment shader. Shaderarnir eru báðir föll sem vinna saman. Vertex shader generate-ar clipspace hnit og fragment shader gefur pixlinum sem hnitið bendir á lit.  
GLSL er shading tungumál byggt á C forritunarmálinu. Málið var gert af OpenGL ARB til að gefa forriturum meiri völd yfir graphics pipeline án þess að þurfa að nota ARB assembly language eða hardware-specific tungumál.  
**4. Búðu til 3D hlut frá grunni að eigin vali með áferð (lit eða texture, ljós og skugga). Þú
getur valið um að vinna með WebGL eða Three.js. Notaðu e. transform fylkin
(translation, rotation, scale). Skrifaðu íslenskar skýringar með kóðanum.**  
Ég er búinn að vera í tvær vikur núna að reyna að skilja þetta en ég bara er ekki að ná þessu..  
Fylgdi þessu tutorial hérna: https://www.youtube.com/watch?v=3yLL9ADo-ko&list=PLjcVFFANLS5zH_PeKC6I8p0Pt1hzph_rt&index=2 en ég fæ ekki neitt til að virka. Skilningurinn minn á þessu er ekki næstum nógu mikill til að púsla saman þessu verkefni.



