# Ideas de Diseño — Roatan Travel Landing Page

## Contexto de Marca
Roatan Travel es una agencia de viajes hondureña con 8+ años de experiencia, especializada en Roatán y destinos del Caribe. Su estética en Facebook es vibrante, tropical y colorida: turquesa, amarillo neón, verde palma, con tipografía bold y energética. El lema es "Viajamos / Vivimos / Disfrutamos".

---

<response>
<text>

## Opción A — "Tropical Neon Sunset" (Probabilidad: 0.07)

**Design Movement**: Neo-Tropical Maximalism — inspirado en la cultura caribeña vibrante y los atardeceres de Roatán, con toques de diseño de carteles latinoamericanos.

**Core Principles**:
1. Saturación controlada: colores vivos pero nunca agresivos
2. Tipografía expresiva: mezcla de fuentes display bold con sans-serif legible
3. Capas de profundidad: overlays de gradiente sobre fotografías, no fondos planos
4. Energía en movimiento: animaciones de entrada suaves que evocan las olas del mar

**Color Philosophy**: El turquesa caribeño (#00BCD4) como color dominante, el amarillo sol (#FFD600) como acento de llamada a la acción, el verde palma (#2E7D32) para secciones de naturaleza. Fondo blanco cálido para respirar. La paleta evoca el mar, la arena y la vegetación tropical sin caer en el cliché.

**Layout Paradigm**: Asimétrico diagonal — las secciones se cortan en ángulo (clip-path diagonal) para crear dinamismo visual. El hero ocupa pantalla completa con texto anclado a la izquierda inferior. Las tarjetas de servicios se organizan en un grid de 3 columnas con alturas variables (masonry-like).

**Signature Elements**:
1. Olas SVG animadas entre secciones (no líneas rectas)
2. Tarjetas con borde izquierdo de color sólido (turquesa o amarillo) y sombra larga
3. Badges de "Todo Incluido", "Snorkel Incluido" con estilo de etiqueta de precio

**Interaction Philosophy**: Hover en tarjetas eleva la imagen con scale(1.03) y muestra un overlay de gradiente turquesa. Los botones CTA tienen efecto de onda (ripple) al hacer clic.

**Animation**: Entrada de elementos con fade-up (translateY 20px → 0, opacity 0→1, 0.6s ease-out). El hero tiene un parallax sutil en el scroll. Las olas SVG se animan en loop continuo.

**Typography System**:
- Display: "Playfair Display" Bold — para títulos principales (evoca lujo tropical)
- Body: "Nunito" Regular/SemiBold — legible y amigable
- Accent: "Bebas Neue" — para números, estadísticas y badges

</text>
<probability>0.08</probability>
</response>

<response>
<text>

## Opción B — "Caribbean Coastal Craft" (Probabilidad: 0.06) ← SELECCIONADA

**Design Movement**: Coastal Artisan — fusión entre el diseño de agencias de viajes boutique latinoamericanas y la estética de los carteles de turismo vintage del Caribe. Vibrante pero sofisticado.

**Core Principles**:
1. Fotografía como protagonista: imágenes de destinos a pantalla completa con texto superpuesto estratégicamente
2. Contraste cromático deliberado: turquesa profundo contra blanco arena y amarillo cálido
3. Tipografía jerárquica: tamaños extremos para crear drama visual (96px vs 16px)
4. Secciones con personalidad propia: cada sección tiene su propio "mood" visual

**Color Philosophy**: Turquesa caribeño profundo (oklch(0.65 0.15 200)) como color primario institucional. Amarillo sol (oklch(0.88 0.18 85)) para CTAs y highlights. Arena cálida (oklch(0.96 0.02 85)) como fondo base. Verde selva (oklch(0.45 0.12 145)) para acentos naturales. La paleta replica exactamente los colores que usa Roatan Travel en sus publicaciones de Facebook.

**Layout Paradigm**: Full-bleed photography sections alternadas con secciones de contenido en fondo arena. El hero usa una imagen de Roatán a pantalla completa con un overlay de gradiente diagonal turquesa→transparente. Las tarjetas de destinos se organizan horizontalmente con scroll snap en mobile.

**Signature Elements**:
1. Divisores de sección en forma de ola SVG (turquesa sobre arena)
2. Números grandes en turquesa para estadísticas (8+ años, 12K seguidores, 100% recomendado)
3. Badges de precio/oferta con forma de etiqueta (como los de las publicaciones de Facebook)

**Interaction Philosophy**: Las tarjetas de destinos revelan información al hover con un overlay suave. El formulario de contacto tiene validación visual con colores de la marca. Los botones CTA usan el amarillo sol con texto oscuro para máximo contraste.

**Animation**: Scroll-triggered animations con Intersection Observer. Elementos de texto entran desde la izquierda, imágenes desde la derecha. Contador animado para estadísticas. Transición suave entre secciones.

**Typography System**:
- Display: "Montserrat" ExtraBold (900) — para títulos, evoca las fuentes bold de las publicaciones de Facebook
- Body: "Lato" Regular/Light — limpio y legible
- Accent: "Montserrat" SemiBold — para subtítulos y labels

</text>
<probability>0.09</probability>
</response>

<response>
<text>

## Opción C — "Isla Vibrante" (Probabilidad>0.07)

**Design Movement**: Latin Tropical Pop — inspirado en el diseño gráfico latinoamericano contemporáneo, con la energía de los carteles de viaje y la vibración del Caribe.

**Core Principles**:
1. Color como narrativa: cada sección cuenta una historia con su paleta
2. Tipografía como imagen: los títulos son tan grandes que se convierten en elementos visuales
3. Texturas orgánicas: fondos con textura de arena o agua sutil
4. Autenticidad local: elementos visuales que reflejan Honduras y el Caribe

**Color Philosophy**: Azul caribe intenso como base, con destellos de naranja atardecer y verde tropical. El blanco se usa solo para texto sobre fondos oscuros.

**Layout Paradigm**: Columnas asimétricas de 60/40 para el hero. Grid de tarjetas con gap generoso. Secciones de testimonios en formato de citas grandes.

**Signature Elements**:
1. Iconos de palmera y ola como separadores
2. Fotografías con bordes redondeados asimétricos
3. Gradientes de atardecer en los fondos de sección

**Interaction Philosophy**: Micro-animaciones en cada elemento interactivo. Cursor personalizado con forma de palmera.

**Animation**: Parallax profundo en el hero. Elementos que "flotan" con animación de bob suave.

**Typography System**:
- Display: "Oswald" Bold
- Body: "Open Sans"
- Accent: "Pacifico" para elementos decorativos

</text>
<probability>0.06</probability>
</response>

---

## Decisión Final: Opción B — "Caribbean Coastal Craft"

Esta opción captura mejor la identidad visual de Roatan Travel: usa los mismos colores turquesa y amarillo de su Facebook, mantiene la fotografía como protagonista (igual que sus publicaciones), y tiene la energía vibrante de la marca sin perder profesionalismo. La tipografía Montserrat ExtraBold replica el estilo bold que usan en sus diseños gráficos.
